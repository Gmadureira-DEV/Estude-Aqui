import { useParams, Link } from "wouter";
import { useEffect } from "react";
import { getTopicBySlug } from "@/data/content";
import { useUser } from "@/hooks/useUser";
import { AdSpace } from "@/components/AdSpace";
import { VideoEmbed } from "@/components/VideoEmbed";
import { ExerciseCard } from "@/components/ExerciseCard";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PdfDownloadButton } from "@/components/PdfDownloadButton";
import { ChevronRight, BookmarkPlus, BookmarkCheck, BookOpen, Video, PenTool, LayoutList, ArrowLeft, FileText } from "lucide-react";

export default function Content() {
  const { slug } = useParams<{ slug: string }>();
  const { user, favorites, toggleFavorite, addToHistory } = useUser();

  const result = getTopicBySlug(slug || "");
  const topic = result?.topic;
  const subject = result?.subject;

  const isFavorite = favorites.includes(slug || "");

  useEffect(() => {
    if (topic && subject) {
      addToHistory({
        contentSlug: topic.slug,
        title: topic.title,
        subjectName: subject.name,
        subjectSlug: subject.slug,
      });
    }
  }, [slug, topic, subject, addToHistory]);

  if (!topic || !subject) {
    return (
      <div className="min-h-screen bg-[#f5f5f5] flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl border border-gray-200 p-12 text-center max-w-lg w-full shadow-sm">
            <div className="w-20 h-20 bg-red-50 text-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-4xl">😕</span>
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-3">Conteúdo não encontrado</h1>
            <p className="text-gray-500 mb-8 leading-relaxed">Não conseguimos encontrar o tópico que você está procurando. Ele pode ter sido movido ou não existe.</p>
            <Link href="/" className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white rounded-xl font-semibold hover:bg-primary/90 transition-colors shadow-sm">
              Voltar ao Início
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f5f5f5] flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Sticky Topic Header */}
        <div className="sticky top-16 z-40 bg-white border-b border-gray-200 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            {/* Breadcrumbs */}
            <nav className="flex items-center gap-2 text-xs font-medium text-gray-500 py-3 overflow-x-auto whitespace-nowrap hide-scrollbar">
              <Link href="/" className="hover:text-primary transition-colors">Início</Link>
              <ChevronRight className="w-3.5 h-3.5 shrink-0" />
              <Link href={`/materia/${subject.slug}`} className="hover:text-primary transition-colors" style={{ color: subject.color }}>
                {subject.name}
              </Link>
              <ChevronRight className="w-3.5 h-3.5 shrink-0" />
              <span className="text-gray-900 truncate">{topic.title}</span>
            </nav>
            
            <div className="flex items-center justify-between py-4">
              <div className="flex items-center gap-4 min-w-0">
                <Link href={`/materia/${subject.slug}`} className="hidden sm:flex w-10 h-10 rounded-full bg-gray-50 items-center justify-center text-gray-500 hover:bg-gray-100 transition-colors shrink-0">
                  <ArrowLeft className="w-5 h-5" />
                </Link>
                <div className="min-w-0">
                  <h1 className="text-xl sm:text-2xl font-bold text-gray-900 truncate">{topic.title}</h1>
                </div>
              </div>
              
              {user && (
                <button
                  onClick={() => toggleFavorite(topic.slug)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-bold transition-all shrink-0 ml-4 ${
                    isFavorite
                      ? "bg-yellow-50 border-yellow-200 text-yellow-700 hover:bg-yellow-100"
                      : "bg-white border-gray-200 text-gray-600 hover:border-yellow-400 hover:text-yellow-600 hover:bg-yellow-50"
                  }`}
                >
                  {isFavorite ? (
                    <>
                      <BookmarkCheck className="w-4 h-4" />
                      <span className="hidden sm:inline">Salvo</span>
                    </>
                  ) : (
                    <>
                      <BookmarkPlus className="w-4 h-4" />
                      <span className="hidden sm:inline">Salvar</span>
                    </>
                  )}
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
          <AdSpace id="ad-top" type="horizontal" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            
            {/* Main Content */}
            <div className="lg:col-span-8 space-y-12">
              
              {/* Theory Section */}
              <section id="teoria" className="scroll-mt-32">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white shrink-0" style={{ backgroundColor: subject.color }}>
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Teoria e Explicação</h2>
                </div>
                
                <div 
                  className="bg-white rounded-3xl border border-gray-200 p-6 sm:p-10 shadow-sm prose prose-lg prose-blue max-w-none prose-headings:font-bold prose-headings:text-gray-900 prose-p:text-gray-700 prose-p:leading-relaxed prose-a:text-primary prose-strong:text-gray-900"
                  dangerouslySetInnerHTML={{ __html: topic.explanation }}
                />
              </section>

              <AdSpace id="ad-mid" type="horizontal" />

              {/* Videos Section */}
              <section id="videos" className="scroll-mt-32">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white shrink-0" style={{ backgroundColor: subject.color }}>
                    <Video className="w-5 h-5" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Videoaulas Selecionadas</h2>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {topic.videos.map((video) => (
                    <VideoEmbed key={video.id} video={video} />
                  ))}
                </div>
              </section>

              {/* Exercises Section */}
              <section id="exercicios" className="scroll-mt-32">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white shrink-0" style={{ backgroundColor: subject.color }}>
                    <PenTool className="w-5 h-5" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Pratique com Exercícios</h2>
                </div>
                
                <div className="space-y-6">
                  {topic.exercises.map((exercise, i) => (
                    <div key={exercise.id}>
                      {i === 2 && <div className="my-8"><AdSpace id="ad-between-exercises" type="horizontal" /></div>}
                      <ExerciseCard exercise={exercise} number={i + 1} />
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4 space-y-8">
              
              {/* PDF Download Card */}
              <div className="bg-white rounded-3xl border border-gray-200 p-6 shadow-sm sticky top-40">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <FileText className="w-8 h-8" />
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg">Material em PDF</h3>
                  <p className="text-sm text-gray-500 mt-2">Gere um PDF bonito com a teoria e exercícios desta aula.</p>
                </div>
                
                <PdfDownloadButton topic={topic} subject={subject} />

                {!user && (
                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <div className="bg-gray-50 rounded-2xl p-5 border border-gray-200">
                      <h4 className="font-bold text-gray-900 text-sm mb-2 flex items-center gap-2">
                        <BookmarkPlus className="w-4 h-4 text-primary" />
                        Não perca este conteúdo
                      </h4>
                      <p className="text-xs text-gray-500 mb-4 leading-relaxed">
                        Crie uma conta gratuita para salvar seus resumos e exercícios favoritos.
                      </p>
                      <Link href="/login" className="block w-full py-2.5 bg-white border border-gray-300 text-gray-700 rounded-xl text-sm font-bold text-center hover:bg-gray-50 transition-colors">
                        Fazer Login
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <AdSpace id="ad-sidebar" type="sidebar" />

              {/* Navigation within Subject */}
              <div className="bg-white rounded-3xl border border-gray-200 p-6 shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  <LayoutList className="w-5 h-5 text-gray-400" />
                  <h3 className="font-bold text-gray-900">Outras aulas de {subject.name}</h3>
                </div>
                
                <div className="space-y-2">
                  {subject.topics.map((t) => (
                    <Link key={t.id} href={`/conteudo/${t.slug}`}>
                      <div className={`flex items-center gap-3 p-3 rounded-xl transition-all cursor-pointer border ${
                        t.id === topic.id 
                          ? 'bg-primary/5 border-primary/20 pointer-events-none' 
                          : 'bg-white border-transparent hover:bg-gray-50 hover:border-gray-200'
                      }`}>
                        <div 
                          className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-xs font-bold shrink-0 opacity-80"
                          style={{ backgroundColor: subject.color }}
                        >
                          {subject.icon}
                        </div>
                        <span className={`text-sm font-medium flex-1 truncate ${
                          t.id === topic.id ? 'text-primary' : 'text-gray-700'
                        }`}>
                          {t.title}
                        </span>
                        {t.id === topic.id && (
                          <div className="w-2 h-2 rounded-full bg-primary shrink-0"></div>
                        )}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
