import { useEffect } from "react";
import { usePdfGenerator } from "@/hooks/usePdfGenerator";
import type { Topic, Subject } from "@/data/content";
import { Download, FileText, Loader2 } from "lucide-react";

interface Props {
  topic: Topic;
  subject: Subject;
}

export function PdfDownloadButton({ topic, subject }: Props) {
  const { status, blobUrl, gerarPDF, reset } = usePdfGenerator();

  useEffect(() => {
    reset();
  }, [topic.slug, reset]);

  const handleClick = async () => {
    if (status === "generating") return;

    if (status === "ready" && blobUrl) {
      const a = document.createElement("a");
      a.href = blobUrl;
      a.download = `${topic.slug}.pdf`;
      a.click();
      return;
    }

    const url = await gerarPDF(topic, subject);
    if (url) {
      const a = document.createElement("a");
      a.href = url;
      a.download = `${topic.slug}.pdf`;
      a.click();
    }
  };

  const isGenerating = status === "generating";
  const isReady = status === "ready";

  return (
    <button
      onClick={handleClick}
      disabled={isGenerating}
      className={`w-full flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-xl font-bold text-sm transition-all duration-200 shadow-sm ${
        isGenerating
          ? "bg-gray-100 text-gray-500 cursor-not-allowed border border-gray-200"
          : isReady
          ? "bg-green-600 hover:bg-green-700 text-white border border-green-600 shadow-green-600/20 shadow-lg hover:-translate-y-0.5"
          : "bg-primary hover:bg-primary/90 text-white border border-primary shadow-primary/20 shadow-lg hover:-translate-y-0.5"
      }`}
      title={
        isGenerating
          ? "Gerando PDF, aguarde..."
          : isReady
          ? `Baixar PDF de ${topic.title}`
          : `Gerar PDF de ${topic.title}`
      }
    >
      {isGenerating ? (
        <>
          <Loader2 className="w-5 h-5 animate-spin" />
          Gerando Material...
        </>
      ) : isReady ? (
        <>
          <Download className="w-5 h-5" />
          Baixar PDF
        </>
      ) : (
        <>
          <FileText className="w-5 h-5" />
          Gerar PDF da Aula
        </>
      )}
    </button>
  );
}
