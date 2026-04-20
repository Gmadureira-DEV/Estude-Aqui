import { useState } from "react";
import { useLocation } from "wouter";
import { useUser } from "@/hooks/useUser";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArrowRight, Sparkles, BookOpen, Clock, Settings2 } from "lucide-react";

export default function Login() {
  const { user, login } = useUser();
  const [, navigate] = useLocation();
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  if (user) {
    navigate("/dashboard");
    return null;
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = name.trim();
    if (trimmed.length < 2) {
      setError("Por favor, insira pelo menos 2 caracteres.");
      return;
    }
    login(trimmed);
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-[#f5f5f5] flex flex-col">
      <Header />
      
      <main className="flex-1 flex flex-col justify-center items-center py-12 px-4 sm:px-6 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-10 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="w-full max-w-[1000px] grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center z-10">
          
          {/* Left Column - Value Prop */}
          <div className="hidden lg:block space-y-8">
            <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">
              Aprenda mais rápido.<br/>
              <span className="text-primary">Grave o que importa.</span>
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Crie sua conta no Estude Aqui para ter acesso ao seu painel personalizado. Sem senhas, sem complicação.
            </p>
            
            <div className="space-y-6 pt-4">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-yellow-50 text-yellow-600 flex items-center justify-center shrink-0">
                  <Sparkles className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Salve seus Favoritos</h3>
                  <p className="text-sm text-gray-500 mt-1">Marque aulas e exercícios para revisar depois com facilidade.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Histórico Automático</h3>
                  <p className="text-sm text-gray-500 mt-1">Saiba exatamente onde você parou e continue seus estudos.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-green-50 text-green-600 flex items-center justify-center shrink-0">
                  <Settings2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">100% Local e Privado</h3>
                  <p className="text-sm text-gray-500 mt-1">Não pedimos email nem senha. Seus dados ficam salvos apenas no seu dispositivo.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="w-full max-w-md mx-auto">
            <div className="bg-white rounded-[2rem] shadow-xl border border-gray-100 p-8 sm:p-10">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <BookOpen className="w-8 h-8" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Entrar no Painel</h2>
                <p className="text-gray-500 mt-2 text-sm">
                  Apenas digite seu nome ou apelido para começar.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2">
                    Como devemos te chamar?
                  </label>
                  <div className="relative">
                    <input
                      id="name"
                      type="text"
                      value={name}
                      onChange={(e) => { setName(e.target.value); setError(""); }}
                      placeholder="Seu nome ou apelido"
                      className={`w-full px-5 py-4 bg-[#f5f5f5] border ${error ? 'border-red-300 focus:ring-red-500' : 'border-transparent focus:ring-primary focus:bg-white'} rounded-xl text-gray-900 focus:outline-none focus:ring-2 transition-all font-medium`}
                      autoFocus
                    />
                  </div>
                  {error && <p className="mt-2 text-red-500 text-sm font-medium">{error}</p>}
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 flex items-center justify-center gap-2"
                >
                  Acessar Plataforma
                  <ArrowRight className="w-5 h-5" />
                </button>
              </form>

              <div className="mt-8 pt-6 border-t border-gray-100">
                <p className="text-xs text-center text-gray-400 font-medium uppercase tracking-wider">
                  Sem senhas • Sem complicação
                </p>
              </div>
            </div>
          </div>

        </div>
      </main>
      
      <Footer />
    </div>
  );
}
