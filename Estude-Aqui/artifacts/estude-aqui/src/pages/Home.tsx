import { useState } from "react";
import { Link, useLocation } from "wouter";
import { subjects } from "@/data/content";
import { SubjectCard } from "@/components/SubjectCard";
import { AdSpace } from "@/components/AdSpace";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Search, BookOpen, Video, FileText, CheckCircle2, ChevronRight, Award } from "lucide-react";

export default function Home() {
  const [query, setQuery] = useState("");
  const [, navigate] = useLocation();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) navigate(`/busca?q=${encodeURIComponent(query.trim())}`);
  };

  return (
    <div className="min-h-screen bg-[#f5f5f5] flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-white overflow-hidden border-b border-gray-200">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-50" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-primary/5 rounded-full blur-3xl -z-10" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-20 lg:py-32 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-8 border border-primary/20">
            <Award className="w-4 h-4" />
            <span>100% Gratuito para Estudantes</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-gray-900 tracking-tight mb-6 max-w-4xl">
            Aprenda com conteúdo de <span className="text-primary">qualidade</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-600 mb-10 max-w-2xl leading-relaxed">
            Resumos completos, exercícios resolvidos passo a passo, vídeos explicativos e apostilas em PDF. O seu companheiro de estudos definitivo.
          </p>

          <form onSubmit={handleSearch} className="w-full max-w-2xl flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Buscar por matéria, tópico ou conteúdo..."
                className="w-full pl-11 pr-4 py-4 bg-white border border-gray-300 rounded-2xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent shadow-sm text-base transition-all"
              />
            </div>
            <button
              type="submit"
              className="px-8 py-4 bg-primary text-white font-bold rounded-2xl hover:bg-primary/90 transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2"
            >
              Buscar
              <ChevronRight className="w-5 h-5" />
            </button>
          </form>

          <div className="mt-12 flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm font-medium text-gray-500">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                <BookOpen className="w-4 h-4" />
              </div>
              <span>65+ Tópicos</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center text-red-600">
                <Video className="w-4 h-4" />
              </div>
              <span>300+ Vídeos</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center text-green-600">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <span>325+ Exercícios</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-purple-50 flex items-center justify-center text-purple-600">
                <FileText className="w-4 h-4" />
              </div>
              <span>260+ PDFs</span>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-8 w-full">
        <AdSpace id="ad-top" type="horizontal" />
      </div>

      {/* Subjects Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 tracking-tight mb-2">Escolha sua Matéria</h2>
            <p className="text-gray-500 text-lg">Todo o conteúdo do ensino médio organizado para você.</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {subjects.map((subject) => (
            <SubjectCard key={subject.id} subject={subject} />
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white border-y border-gray-200 py-20 mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 tracking-tight mb-4">Por que estudar com a gente?</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Nossa plataforma foi desenhada para tornar o seu estudo mais eficiente, focado e sem distrações.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-[#f5f5f5] rounded-2xl p-8 border border-gray-100">
              <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center text-primary mb-6">
                <BookOpen className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Conteúdo Direto</h3>
              <p className="text-gray-600 leading-relaxed">
                Explicações detalhadas e objetivas para cada tópico, sem enrolação. Feitas para você entender a matéria de verdade.
              </p>
            </div>
            
            <div className="bg-[#f5f5f5] rounded-2xl p-8 border border-gray-100">
              <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center text-primary mb-6">
                <Video className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Vídeos Selecionados</h3>
              <p className="text-gray-600 leading-relaxed">
                Curadoria com as melhores videoaulas do YouTube para cada assunto. Não perca tempo procurando o vídeo certo.
              </p>
            </div>
            
            <div className="bg-[#f5f5f5] rounded-2xl p-8 border border-gray-100">
              <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center text-primary mb-6">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Resoluções Guiadas</h3>
              <p className="text-gray-600 leading-relaxed">
                Exercícios com gabarito e resolução passo a passo. Entenda onde errou e como acertar na próxima vez.
              </p>
            </div>
            
            <div className="bg-[#f5f5f5] rounded-2xl p-8 border border-gray-100">
              <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center text-primary mb-6">
                <FileText className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">PDFs Mágicos</h3>
              <p className="text-gray-600 leading-relaxed">
                Gere apostilas em PDF lindamente formatadas de qualquer aula com um único clique. Perfeito para imprimir e revisar.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-8 w-full flex-1">
        <AdSpace id="ad-bottom" type="horizontal" />
      </div>

      <Footer />
    </div>
  );
}
