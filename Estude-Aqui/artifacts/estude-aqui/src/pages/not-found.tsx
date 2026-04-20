import { Link } from "wouter";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AlertTriangle, Home, Search } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#f5f5f5] flex flex-col">
      <Header />
      
      <main className="flex-1 flex items-center justify-center p-4">
        <div className="bg-white rounded-[2rem] border border-gray-200 p-12 sm:p-16 text-center max-w-2xl w-full shadow-sm">
          <div className="w-24 h-24 bg-red-50 text-red-500 rounded-3xl flex items-center justify-center mx-auto mb-8 transform -rotate-12">
            <AlertTriangle className="w-12 h-12" />
          </div>
          
          <h1 className="text-6xl font-black text-gray-900 tracking-tight mb-4">404</h1>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Página não encontrada</h2>
          
          <p className="text-gray-500 mb-10 text-lg max-w-md mx-auto leading-relaxed">
            Parece que você se perdeu. A página que você está procurando não existe ou foi movida.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/" className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white rounded-xl font-bold hover:bg-primary/90 transition-all shadow-md hover:-translate-y-0.5">
              <Home className="w-5 h-5" />
              Voltar ao Início
            </Link>
            <Link href="/busca" className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-gray-100 text-gray-700 rounded-xl font-bold hover:bg-gray-200 transition-all border border-gray-200 hover:-translate-y-0.5">
              <Search className="w-5 h-5" />
              Fazer uma Busca
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
