import { Link, useLocation } from "wouter";
import { useUser } from "@/hooks/useUser";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { getSubjectBySlug } from "@/data/content";
import { LogOut, Bookmark, History, LayoutGrid, Clock, ArrowRight, BookOpen } from "lucide-react";

export default function Dashboard() {
  const { user, logout, favorites, history, toggleFavorite } = useUser();
  const [, navigate] = useLocation();

  if (!user) {
    navigate("/login");
    return null;
  }

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const formatDate = (ts: number) => {
    return new Date(ts).toLocaleDateString("pt-BR", { day: "2-digit", month: "short", hour: "2-digit", minute: "2-digit" });
  };

  return (
    <div className="min-h-screen bg-[#f5f5f5] flex flex-col">
      <Header />
      
      <main className="flex-1 pb-20">
        {/* Dashboard Header */}
        <div className="bg-white border-b border-gray-200 pt-12 pb-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="flex items-center gap-6">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center text-4xl font-bold text-white shadow-lg shrink-0">
                  {user.name.charAt(0).toUpperCase()}
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">Painel do Estudante</p>
                  <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
                    Olá, {user.name.split(" ")[0]}!
                  </h1>
                  <p className="text-gray-500 mt-2 flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    Membro desde {new Date(user.loginDate).toLocaleDateString("pt-BR")}
                  </p>
                </div>
              </div>
              
              <button
                onClick={handleLogout}
                className="flex items-center justify-center gap-2 px-5 py-2.5 bg-white border border-gray-200 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 hover:text-red-600 hover:border-red-200 transition-all shadow-sm shrink-0"
              >
                <LogOut className="w-4 h-4" />
                Sair da conta
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12">
              <div className="bg-[#f5f5f5] rounded-2xl p-6 border border-gray-100">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-yellow-100 text-yellow-600 flex items-center justify-center">
                    <Bookmark className="w-5 h-5 fill-current" />
                  </div>
                  <span className="font-bold text-3xl text-gray-900">{favorites.length}</span>
                </div>
                <p className="text-gray-600 font-medium">Tópicos Salvos</p>
              </div>
              
              <div className="bg-[#f5f5f5] rounded-2xl p-6 border border-gray-100">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                    <History className="w-5 h-5" />
                  </div>
                  <span className="font-bold text-3xl text-gray-900">{history.length}</span>
                </div>
                <p className="text-gray-600 font-medium">Conteúdos Vistos</p>
              </div>
              
              <div className="bg-[#f5f5f5] rounded-2xl p-6 border border-gray-100">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center">
                    <LayoutGrid className="w-5 h-5" />
                  </div>
                  <span className="font-bold text-3xl text-gray-900">13</span>
                </div>
                <p className="text-gray-600 font-medium">Matérias Disponíveis</p>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-12 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Favorites List */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <Bookmark className="w-6 h-6 text-yellow-500 fill-current" />
              <h2 className="text-2xl font-bold text-gray-900">Meus Favoritos</h2>
            </div>
            
            {favorites.length === 0 ? (
              <div className="bg-white rounded-3xl border border-gray-200 p-10 text-center shadow-sm">
                <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Bookmark className="w-8 h-8 text-gray-300" />
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">Nada salvo ainda</h3>
                <p className="text-gray-500 text-sm mb-6">Explore as aulas e salve os conteúdos que você precisa revisar mais tarde.</p>
                <Link href="/" className="inline-flex items-center justify-center px-5 py-2.5 bg-primary text-white rounded-xl text-sm font-semibold hover:bg-primary/90 transition-colors">
                  Explorar Matérias
                </Link>
              </div>
            ) : (
              <div className="space-y-3">
                {favorites.map((slug) => {
                  const parts = slug.split("-");
                  const subjectSlug = parts[0];
                  const subject = getSubjectBySlug(subjectSlug);
                  const topic = subject?.topics.find((t) => t.slug === slug);
                  if (!topic || !subject) return null;
                  
                  return (
                    <div key={slug} className="group bg-white rounded-2xl border border-gray-200 p-4 flex items-center gap-4 transition-all hover:shadow-md hover:border-gray-300 relative overflow-hidden">
                      <div className="absolute left-0 top-0 bottom-0 w-1" style={{ backgroundColor: subject.color }}></div>
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center text-xl shrink-0" style={{ backgroundColor: subject.bgColor }}>
                        {subject.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <Link href={`/conteudo/${slug}`} className="font-bold text-gray-900 hover:text-primary transition-colors truncate block text-[15px]">
                          {topic.title}
                        </Link>
                        <p className="text-xs text-gray-500 font-medium uppercase tracking-wider mt-1">{subject.name}</p>
                      </div>
                      <button
                        onClick={() => toggleFavorite(slug)}
                        className="w-10 h-10 rounded-full flex items-center justify-center text-yellow-500 hover:bg-yellow-50 hover:text-yellow-600 transition-colors shrink-0"
                        title="Remover dos favoritos"
                      >
                        <Bookmark className="w-5 h-5 fill-current" />
                      </button>
                    </div>
                  );
                })}
              </div>
            )}
          </section>

          {/* History List */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <History className="w-6 h-6 text-gray-500" />
              <h2 className="text-2xl font-bold text-gray-900">Vistos Recentemente</h2>
            </div>
            
            {history.length === 0 ? (
              <div className="bg-white rounded-3xl border border-gray-200 p-10 text-center shadow-sm">
                <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-gray-300" />
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">Histórico vazio</h3>
                <p className="text-gray-500 text-sm">Seu histórico de estudos aparecerá aqui.</p>
              </div>
            ) : (
              <div className="bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-sm">
                <div className="divide-y divide-gray-100 max-h-[500px] overflow-y-auto hide-scrollbar">
                  {history.map((item) => {
                    const subject = getSubjectBySlug(item.subjectSlug);
                    return (
                      <Link key={`${item.contentSlug}-${item.timestamp}`} href={`/conteudo/${item.contentSlug}`}>
                        <div className="p-4 flex items-center gap-4 hover:bg-gray-50 transition-colors group cursor-pointer">
                          <div className="w-10 h-10 rounded-lg flex items-center justify-center text-lg shrink-0 bg-gray-100 group-hover:bg-white group-hover:shadow-sm transition-all border border-transparent group-hover:border-gray-200">
                            {subject?.icon || "📖"}
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="font-bold text-gray-900 text-[15px] truncate group-hover:text-primary transition-colors">{item.title}</p>
                            <p className="text-xs text-gray-500 font-medium mt-1">
                              {item.subjectName} <span className="mx-1">•</span> {formatDate(item.timestamp)}
                            </p>
                          </div>
                          <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-primary transition-colors shrink-0" />
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}
          </section>
          
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
