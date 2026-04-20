import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { searchContent } from "@/data/content";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AdSpace } from "@/components/AdSpace";
import { Search as SearchIcon, ArrowRight, SearchX, BookOpen, ChevronRight } from "lucide-react";

export default function Search() {
  const [location] = useLocation();
  const params = new URLSearchParams(
    typeof window !== "undefined" ? window.location.search : ""
  );
  const initialQuery = params.get("q") || "";
  const [query, setQuery] = useState(initialQuery);
  const [submitted, setSubmitted] = useState(initialQuery);
  const [, navigate] = useLocation();

  useEffect(() => {
    const p = new URLSearchParams(window.location.search);
    const q = p.get("q") || "";
    setQuery(q);
    setSubmitted(q);
  }, [location]);

  const rawResults = submitted.trim().length >= 2 ? searchContent(submitted.trim()) : [];
  const results = rawResults.map(({ topic, subject }) => ({
    slug: topic.slug,
    title: topic.title,
    subjectName: subject.name,
    subjectSlug: subject.slug,
    subject,
  }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/busca?q=${encodeURIComponent(query.trim())}`);
      setSubmitted(query.trim());
    }
  };

  const suggestions = ["Português", "Matemática", "História", "Física", "Química", "Biologia"];

  return (
    <div className="min-h-screen bg-[#f5f5f5] flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Search Header */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 lg:py-16">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mb-8 text-center">
              O que você quer aprender hoje?
            </h1>
            
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <SearchIcon className="h-6 w-6 text-gray-400" />
                </div>
                <input
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Busque por matérias, tópicos ou palavras-chave..."
                  className="w-full pl-12 pr-4 py-4 bg-[#f5f5f5] border border-transparent rounded-2xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all text-lg shadow-inner"
                  autoFocus
                />
              </div>
              <button
                type="submit"
                className="px-8 py-4 bg-primary text-white font-bold rounded-2xl hover:bg-primary/90 transition-all shadow-md shrink-0"
              >
                Buscar
              </button>
            </form>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
          <AdSpace id="ad-top" type="horizontal" />
        </div>

        {/* Results Area */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-20">
          
          {/* Initial State */}
          {!submitted.trim() && (
            <div className="bg-white rounded-3xl border border-gray-200 p-12 text-center shadow-sm">
              <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <SearchIcon className="w-10 h-10 text-gray-400" />
              </div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">Pesquise em todo o nosso acervo</h2>
              <p className="text-gray-500 mb-8 max-w-md mx-auto">Digite um termo acima para encontrar aulas, exercícios e materiais em PDF.</p>
              
              <div className="pt-8 border-t border-gray-100">
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">Buscas frequentes</p>
                <div className="flex flex-wrap justify-center gap-2">
                  {suggestions.map((s) => (
                    <button
                      key={s}
                      onClick={() => { setQuery(s); setSubmitted(s); navigate(`/busca?q=${s}`); }}
                      className="px-4 py-2 bg-gray-50 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-100 hover:text-gray-900 transition-colors border border-gray-200"
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Validation State */}
          {submitted.trim() && submitted.trim().length < 2 && (
            <div className="bg-white rounded-3xl border border-gray-200 p-12 text-center shadow-sm">
              <p className="text-gray-600 font-medium">Digite pelo menos 2 caracteres para buscar.</p>
            </div>
          )}

          {/* Results State */}
          {submitted.trim().length >= 2 && (
            <>
              <div className="flex items-center justify-between mb-6 border-b border-gray-200 pb-4">
                <h2 className="text-xl font-bold text-gray-900">
                  {results.length > 0
                    ? <span className="flex items-center gap-2">Resultados para <span className="text-primary">"{submitted}"</span></span>
                    : "Nenhum resultado encontrado"}
                </h2>
                {results.length > 0 && (
                  <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm font-bold">
                    {results.length} encontrados
                  </span>
                )}
              </div>

              {results.length === 0 ? (
                <div className="bg-white rounded-3xl border border-gray-200 p-12 text-center shadow-sm">
                  <div className="w-20 h-20 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-6">
                    <SearchX className="w-10 h-10 text-red-500" />
                  </div>
                  <h3 className="font-bold text-gray-900 text-xl mb-3">Poxa, não encontramos nada</h3>
                  <p className="text-gray-500 mb-8 max-w-md mx-auto">
                    Não encontramos nenhum conteúdo relacionado a "{submitted}". Tente usar sinônimos ou buscar por termos mais genéricos.
                  </p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {suggestions.map((s) => (
                      <button
                        key={s}
                        onClick={() => { setQuery(s); setSubmitted(s); navigate(`/busca?q=${s}`); }}
                        className="px-4 py-2 bg-gray-50 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors border border-gray-200"
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  {results.map((result) => {
                    const subject = result.subject;
                    return (
                      <Link key={result.slug} href={`/conteudo/${result.slug}`}>
                        <div className="group bg-white rounded-2xl border border-gray-200 p-5 hover:shadow-md hover:border-gray-300 transition-all cursor-pointer flex flex-col sm:flex-row sm:items-center gap-5">
                          <div 
                            className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl shrink-0 transition-transform group-hover:scale-105"
                            style={{ backgroundColor: subject?.bgColor }}
                          >
                            {subject?.icon}
                          </div>
                          
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1">
                              <span 
                                className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded text-white"
                                style={{ backgroundColor: subject?.color || "#1E40AF" }}
                              >
                                {result.subjectName}
                              </span>
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 group-hover:text-primary transition-colors truncate">
                              {result.title}
                            </h3>
                          </div>
                          
                          <div className="hidden sm:flex w-10 h-10 rounded-full bg-gray-50 items-center justify-center text-gray-400 group-hover:bg-primary group-hover:text-white transition-colors shrink-0">
                            <ArrowRight className="w-5 h-5" />
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              )}
            </>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
