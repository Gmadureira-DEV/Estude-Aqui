import { Link } from "wouter";
import { subjects } from "@/data/content";
import { BookOpen } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
          <div className="md:col-span-4 lg:col-span-5">
            <Link href="/" className="flex items-center gap-2 mb-4 group">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white">
                <BookOpen className="w-5 h-5" />
              </div>
              <span className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors">Estude Aqui</span>
            </Link>
            <p className="text-sm text-gray-500 leading-relaxed max-w-sm mb-6">
              Plataforma educacional gratuita com conteúdos de alta qualidade para estudantes do ensino fundamental ao médio. Feito para você aprender mais e melhor.
            </p>
            <div className="flex gap-4">
              {/* Social placeholders */}
              <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-colors cursor-pointer">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" /></svg>
              </div>
              <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-colors cursor-pointer">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" /></svg>
              </div>
            </div>
          </div>

          <div className="md:col-span-3 lg:col-span-2">
            <h3 className="text-gray-900 font-semibold mb-5 text-sm uppercase tracking-wider">Exatas & Bio</h3>
            <ul className="space-y-3">
              {subjects.filter(s => ["matematica", "fisica", "quimica", "biologia"].includes(s.id)).map(s => (
                <li key={s.id}>
                  <Link href={`/materia/${s.slug}`} className="text-sm text-gray-500 hover:text-primary transition-colors flex items-center gap-2">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3 lg:col-span-3">
            <h3 className="text-gray-900 font-semibold mb-5 text-sm uppercase tracking-wider">Humanas & Letras</h3>
            <ul className="space-y-3 grid grid-cols-2 gap-x-4">
              {subjects.filter(s => ["portugues", "historia", "geografia", "filosofia", "sociologia", "ingles", "literatura-brasileira", "redacao"].includes(s.id)).map(s => (
                <li key={s.id}>
                  <Link href={`/materia/${s.slug}`} className="text-sm text-gray-500 hover:text-primary transition-colors flex items-center gap-2">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2 lg:col-span-2">
            <h3 className="text-gray-900 font-semibold mb-5 text-sm uppercase tracking-wider">Navegação</h3>
            <ul className="space-y-3">
              <li><Link href="/" className="text-sm text-gray-500 hover:text-primary transition-colors">Início</Link></li>
              <li><Link href="/busca" className="text-sm text-gray-500 hover:text-primary transition-colors">Busca</Link></li>
              <li><Link href="/dashboard" className="text-sm text-gray-500 hover:text-primary transition-colors">Meu Painel</Link></li>
              <li><Link href="/login" className="text-sm text-gray-500 hover:text-primary transition-colors">Entrar</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-100 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Estude Aqui. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-4 text-sm text-gray-500 font-medium">
            <span>13 matérias</span>
            <span className="w-1 h-1 rounded-full bg-gray-300"></span>
            <span>65+ tópicos</span>
            <span className="w-1 h-1 rounded-full bg-gray-300"></span>
            <span>325+ exercícios</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
