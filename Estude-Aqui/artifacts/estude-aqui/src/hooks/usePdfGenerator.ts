import { useState, useCallback, useRef } from "react";
import type { Topic, Subject } from "@/data/content";

type PdfStatus = "idle" | "generating" | "ready";

const pdfCache = new Map<string, string>();

function stripHtml(html: string): string {
  return html
    .replace(/<h[1-6][^>]*>/gi, "\n\n")
    .replace(/<\/h[1-6]>/gi, "\n")
    .replace(/<p[^>]*>/gi, "\n")
    .replace(/<\/p>/gi, "")
    .replace(/<strong>/gi, "")
    .replace(/<\/strong>/gi, "")
    .replace(/<em>/gi, "")
    .replace(/<\/em>/gi, "")
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<li>/gi, "\n• ")
    .replace(/<\/li>/gi, "")
    .replace(/<[^>]*>/g, "")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&nbsp;/g, " ")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

export function usePdfGenerator() {
  const [status, setStatus] = useState<PdfStatus>("idle");
  const [blobUrl, setBlobUrl] = useState<string | null>(null);
  const currentSlugRef = useRef<string | null>(null);

  const gerarPDF = useCallback(async (topic: Topic, subject: Subject) => {
    const cacheKey = topic.slug;

    if (pdfCache.has(cacheKey)) {
      setBlobUrl(pdfCache.get(cacheKey)!);
      setStatus("ready");
      return pdfCache.get(cacheKey)!;
    }

    setStatus("generating");
    currentSlugRef.current = cacheKey;

    await new Promise((r) => setTimeout(r, 0));

    try {
      const { jsPDF } = await import("jspdf");
      const doc = new jsPDF({ unit: "mm", format: "a4" });

      const pageW = 210;
      const pageH = 297;
      const margin = 18;
      const contentW = pageW - margin * 2;
      let y = 0;

      const COLORS = {
        primary: [30, 64, 175] as [number, number, number],
        purple: [124, 58, 237] as [number, number, number],
        dark: [17, 24, 39] as [number, number, number],
        gray: [107, 114, 128] as [number, number, number],
        light: [249, 250, 251] as [number, number, number],
        white: [255, 255, 255] as [number, number, number],
        correct: [5, 150, 105] as [number, number, number],
        border: [229, 231, 235] as [number, number, number],
      };

      function checkPageBreak(needed: number) {
        if (y + needed > pageH - margin) {
          doc.addPage();
          y = margin;
        }
      }

      function drawHeader() {
        doc.setFillColor(...COLORS.primary);
        doc.rect(0, 0, pageW, 32, "F");

        doc.setFillColor(...COLORS.purple);
        doc.rect(0, 28, pageW, 4, "F");

        doc.setFont("helvetica", "bold");
        doc.setFontSize(18);
        doc.setTextColor(...COLORS.white);
        doc.text("Estude Aqui", margin, 13);

        doc.setFont("helvetica", "normal");
        doc.setFontSize(9);
        doc.setTextColor(199, 210, 254);
        doc.text(`${subject.name} • Material de Estudo`, margin, 21);

        const today = new Date().toLocaleDateString("pt-BR");
        doc.text(today, pageW - margin, 21, { align: "right" });
      }

      function drawFooter() {
        const totalPages = doc.getNumberOfPages();
        for (let i = 1; i <= totalPages; i++) {
          doc.setPage(i);
          doc.setFillColor(...COLORS.light);
          doc.rect(0, pageH - 14, pageW, 14, "F");
          doc.setDrawColor(...COLORS.border);
          doc.line(0, pageH - 14, pageW, pageH - 14);
          doc.setFont("helvetica", "normal");
          doc.setFontSize(8);
          doc.setTextColor(...COLORS.gray);
          doc.text("Estude Aqui — estudeaqui.com.br", margin, pageH - 6);
          doc.text(`Página ${i} de ${totalPages}`, pageW - margin, pageH - 6, { align: "right" });
        }
      }

      function addWrappedText(
        text: string,
        x: number,
        startY: number,
        maxW: number,
        lineH: number,
        fontSize: number,
        fontStyle: "normal" | "bold" | "italic",
        color: [number, number, number]
      ): number {
        doc.setFont("helvetica", fontStyle);
        doc.setFontSize(fontSize);
        doc.setTextColor(...color);
        const lines = doc.splitTextToSize(text, maxW);
        let cy = startY;
        for (const line of lines) {
          checkPageBreak(lineH);
          doc.text(line, x, cy);
          cy += lineH;
        }
        return cy;
      }

      drawHeader();
      y = 42;

      doc.setFillColor(...COLORS.light);
      doc.roundedRect(margin - 2, y - 5, contentW + 4, 22, 3, 3, "F");
      doc.setDrawColor(...COLORS.primary);
      doc.setLineWidth(0.8);
      doc.line(margin + 2, y - 5, margin + 2, y + 17);

      doc.setFont("helvetica", "bold");
      doc.setFontSize(16);
      doc.setTextColor(...COLORS.dark);
      const titleLines = doc.splitTextToSize(topic.title, contentW - 10);
      doc.text(titleLines, margin + 6, y + 5);
      y += 26;

      doc.setFont("helvetica", "normal");
      doc.setFontSize(9);
      doc.setTextColor(...COLORS.gray);
      doc.text(`Matéria: ${subject.name}  •  Tópico: ${topic.title}`, margin, y);
      y += 10;

      doc.setDrawColor(...COLORS.border);
      doc.setLineWidth(0.3);
      doc.line(margin, y, pageW - margin, y);
      y += 8;

      doc.setFillColor(...COLORS.primary);
      doc.roundedRect(margin, y, contentW, 8, 2, 2, "F");
      doc.setFont("helvetica", "bold");
      doc.setFontSize(11);
      doc.setTextColor(...COLORS.white);
      doc.text("1. Explicação do Conteúdo", margin + 4, y + 5.5);
      y += 13;

      const explanationText = stripHtml(topic.explanation);
      const paragraphs = explanationText.split("\n\n").filter((p) => p.trim());

      for (const para of paragraphs) {
        const trimmed = para.trim();
        if (!trimmed) continue;

        const isHeading = trimmed.length < 60 && !trimmed.includes(".");
        checkPageBreak(12);

        if (isHeading) {
          y += 3;
          doc.setFont("helvetica", "bold");
          doc.setFontSize(10);
          doc.setTextColor(...COLORS.primary);
          const headLines = doc.splitTextToSize(trimmed, contentW);
          doc.text(headLines, margin, y);
          y += headLines.length * 5 + 2;
        } else {
          y = addWrappedText(trimmed, margin, y, contentW, 5, 9.5, "normal", COLORS.dark);
          y += 3;
        }
      }

      y += 5;
      checkPageBreak(12);

      doc.setFillColor(...COLORS.purple);
      doc.roundedRect(margin, y, contentW, 8, 2, 2, "F");
      doc.setFont("helvetica", "bold");
      doc.setFontSize(11);
      doc.setTextColor(...COLORS.white);
      doc.text("2. Exercícios", margin + 4, y + 5.5);
      y += 13;

      const answerLabels: Record<string, string> = { a: "A", b: "B", c: "C", d: "D" };

      topic.exercises.forEach((ex, idx) => {
        checkPageBreak(40);

        doc.setFillColor(239, 246, 255);
        doc.roundedRect(margin, y, contentW, 6, 2, 2, "F");
        doc.setFont("helvetica", "bold");
        doc.setFontSize(10);
        doc.setTextColor(...COLORS.primary);
        doc.text(`Questão ${idx + 1}`, margin + 4, y + 4.2);
        y += 9;

        y = addWrappedText(ex.question, margin, y, contentW, 5, 9.5, "normal", COLORS.dark);
        y += 4;

        const optionKeys = ["a", "b", "c", "d"] as const;
        for (const key of optionKeys) {
          const isCorrect = key === ex.answer;
          checkPageBreak(8);

          if (isCorrect) {
            doc.setFillColor(209, 250, 229);
            doc.roundedRect(margin, y - 3.5, contentW, 7, 1.5, 1.5, "F");
          }

          doc.setFont("helvetica", "bold");
          doc.setFontSize(9);
          doc.setTextColor(isCorrect ? COLORS.correct[0] : COLORS.gray[0], isCorrect ? COLORS.correct[1] : COLORS.gray[1], isCorrect ? COLORS.correct[2] : COLORS.gray[2]);
          doc.text(`${answerLabels[key]})`, margin + 2, y);

          const optionLines = doc.splitTextToSize(ex.options[key], contentW - 14);
          doc.setFont("helvetica", isCorrect ? "bold" : "normal");
          doc.setTextColor(...(isCorrect ? COLORS.correct : COLORS.dark));
          doc.text(optionLines, margin + 12, y);
          y += optionLines.length * 5 + 1;
        }

        y += 3;
        checkPageBreak(20);

        doc.setFillColor(254, 252, 232);
        doc.roundedRect(margin, y, contentW, 5, 1.5, 1.5, "F");
        doc.setFont("helvetica", "bold");
        doc.setFontSize(8.5);
        doc.setTextColor(146, 64, 14);
        doc.text(`Gabarito: ${answerLabels[ex.answer]}`, margin + 4, y + 3.5);
        y += 8;

        doc.setFont("helvetica", "italic");
        doc.setFontSize(8.5);
        doc.setTextColor(...COLORS.gray);
        const resLines = doc.splitTextToSize("Resolução: " + ex.resolution, contentW - 4);
        for (const line of resLines) {
          checkPageBreak(5);
          doc.text(line, margin + 2, y);
          y += 4.5;
        }

        y += 6;
        if (idx < topic.exercises.length - 1) {
          doc.setDrawColor(...COLORS.border);
          doc.setLineWidth(0.2);
          doc.line(margin + 10, y - 3, pageW - margin - 10, y - 3);
        }
      });

      checkPageBreak(20);
      y += 4;
      doc.setFillColor(238, 242, 255);
      doc.roundedRect(margin, y, contentW, 14, 3, 3, "F");
      doc.setFont("helvetica", "bold");
      doc.setFontSize(9);
      doc.setTextColor(...COLORS.primary);
      doc.text("Continue estudando em: www.estudeaqui.com.br", pageW / 2, y + 6, { align: "center" });
      doc.setFont("helvetica", "normal");
      doc.setFontSize(8);
      doc.setTextColor(...COLORS.gray);
      doc.text("Material gerado automaticamente pelo Estude Aqui.", pageW / 2, y + 11, { align: "center" });

      drawFooter();

      const blob = doc.output("blob");
      const url = URL.createObjectURL(blob);
      pdfCache.set(cacheKey, url);

      if (currentSlugRef.current === cacheKey) {
        setBlobUrl(url);
        setStatus("ready");
      }

      return url;
    } catch (err) {
      console.error("Erro ao gerar PDF:", err);
      if (currentSlugRef.current === cacheKey) {
        setStatus("idle");
      }
      return null;
    }
  }, []);

  const reset = useCallback(() => {
    setStatus("idle");
    setBlobUrl(null);
    currentSlugRef.current = null;
  }, []);

  return { status, blobUrl, gerarPDF, reset };
}
