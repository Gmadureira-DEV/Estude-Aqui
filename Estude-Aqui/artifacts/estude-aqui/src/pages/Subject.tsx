import { useParams, Link } from "wouter";
import { getSubjectBySlug } from "@/data/content";
import { AdSpace } from "@/components/AdSpace";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ChevronRight, PlaySquare, FileText, CheckCircle2, ArrowRight } from "lucide-react";

export default function Subject() {
  const { slug } = useParams<{ slug: string }>();
  const subject = getSubjectBySlug(slug || "");

  if (!subject) {
    return (
      <div className="min-h-screen bg-[#f5f5f5] flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl border border-gray-200 p-12 text-center max-w-lg w-full shadow-sm">
            <div className="w-20 h-20 bg-red-50 text-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-4xl">😕</span>
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-3">Matéria não encontrada</h1>
            <p className="text-gray-500 mb-8 leading-relaxed">Não conseguimos encontrar a matéria que você está procurando. Ela pode ter sido movida ou não existe.</p>
            <Link href="/" className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white rounded-xl font-semibold hover:bg-primary/90 transition-colors shadow-sm">
              Voltar ao Início
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const pdfTypes = { resumo: "Resumo", exercicios: "Exercícios", apostila: "Apostila" } as const;

  return (
    <div className="min-h-screen bg-[#f5f5f5] flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Subject Header */}
        <div className="bg-white border-b border-gray-200 relative overflow-hidden">
          <div 
            className="absolute inset-0 opacity-10"
            style={{ 
              background: `linear-gradient(135deg, ${subject.color} 0%, transparent 100%)` 
            }}
          />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-12 lg:py-16">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm font-medium text-gray-500 mb-8">
              <Link href="/" className="hover:text-primary transition-colors">Início</Link>
              <ChevronRight className="w-4 h-4" />
              <span style={{ color: subject.color }}>{subject.name}</span>
            </nav>

            <div className="flex flex-col md:flex-row md:items-center gap-8">
              <div
                className="w-24 h-24 sm:w-32 sm:h-32 rounded-3xl flex items-center justify-center text-5xl sm:text-6xl shadow-sm shrink-0"
                style={{ backgroundColor: subject.bgColor, border: `1px solid ${subject.color}30` }}
              >
                {subject.icon}
              </div>
              
              <div className="flex-1">
                <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
                  {subject.name}
                </h1>
                <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mb-6">
                  {subject.description}
                </p>
                
                <div className="flex flex-wrap gap-3">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-semibold bg-gray-100 text-gray-700">
                    <FileText className="w-4 h-4 text-gray-500" />
                    {subject.topics.length} Tópicos
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-semibold bg-gray-100 text-gray-700">
                    <PlaySquare className="w-4 h-4 text-gray-500" />
                    {subject.topics.length * 5} Vídeos
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-semibold bg-gray-100 text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-gray-500" />
                    {subject.topics.length * 5} Exercícios
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
          <AdSpace id="ad-top" type="horizontal" />
        </div>

        {/* Main Content Area */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            
            {/* Topics List */}
            <div className="lg:col-span-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                Conteúdo de {subject.name}
              </h2>
              
              <div className="space-y-4">
                {subject.topics.map((topic, index) => (
                  <Link key={topic.id} href={`/conteudo/${topic.slug}`}>
                    <div 
                      className="group bg-white rounded-2xl border border-gray-200 p-5 sm:p-6 transition-all duration-300 hover:shadow-md cursor-pointer flex flex-col sm:flex-row sm:items-center gap-5"
                      style={{ borderLeftColor: subject.color, borderLeftWidth: "4px" }}
                    >
                      <div className="flex items-center gap-4 flex-1 min-w-0">
                        <div 
                          className="w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold text-white shrink-0"
                          style={{ backgroundColor: subject.color }}
                        >
                          {index + 1}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-primary transition-colors truncate">
                            {topic.title}
                          </h3>
                          <div className="flex items-center gap-3 text-sm text-gray-500 font-medium">
                            <span className="flex items-center gap-1"><PlaySquare className="w-3.5 h-3.5" /> Aula & Vídeos</span>
                            <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                            <span className="flex items-center gap-1"><CheckCircle2 className="w-3.5 h-3.5" /> Exercícios</span>
                          </div>
                        </div>
                      </div>
                      <div className="hidden sm:flex w-10 h-10 rounded-full bg-gray-50 items-center justify-center text-gray-400 group-hover:bg-primary group-hover:text-white transition-colors shrink-0">
                        <ArrowRight className="w-5 h-5" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4 space-y-8">
              <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
                <div className="flex items-center gap-2 mb-5">
                  <div className="w-8 h-8 rounded-lg bg-red-50 text-red-600 flex items-center justify-center shrink-0">
                    <FileText className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">Materiais em PDF</h3>
                </div>
                
                <div className="space-y-3">
                  {subject.pdfs.map((pdf) => (
                    <a
                      key={pdf.id}
                      href={pdf.downloadUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 border border-transparent hover:border-gray-200 transition-all group"
                    >
                      <div className="flex-1 min-w-0 pt-0.5">
                        <p className="text-sm font-semibold text-gray-800 group-hover:text-primary transition-colors mb-1">
                          {pdf.title}
                        </p>
                        <span 
                          className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider"
                          style={{ 
                            backgroundColor: pdf.type === "resumo" ? "#EFF6FF" : pdf.type === "apostila" ? "#F5F3FF" : "#F0FDF4",
                            color: pdf.type === "resumo" ? "#1E40AF" : pdf.type === "apostila" ? "#7C3AED" : "#15803D",
                          }}
                        >
                          {pdfTypes[pdf.type]}
                        </span>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 group-hover:bg-primary group-hover:text-white transition-colors shrink-0">
                        <ArrowRight className="w-4 h-4 rotate-45" />
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              <AdSpace id="ad-sidebar" type="sidebar" />
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
