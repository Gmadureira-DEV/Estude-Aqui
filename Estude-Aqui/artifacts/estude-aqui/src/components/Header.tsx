import { useState } from "react";
import { Link, useLocation } from "wouter";
import { useUser } from "@/hooks/useUser";
import { subjects } from "@/data/content";
import { BookOpen, Search, Menu, X, ChevronDown, User, LogOut, LayoutDashboard } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Header() {
  const { user, logout } = useUser();
  const [location] = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [subjectsOpen, setSubjectsOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white">
              <BookOpen className="w-5 h-5" />
            </div>
            <span className="text-xl font-bold text-gray-900 tracking-tight group-hover:text-primary transition-colors">
              Estude Aqui
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-2">
            <Link
              href="/"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-all ${
                location === "/"
                  ? "bg-gray-100 text-gray-900"
                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              }`}
            >
              Início
            </Link>

            <div className="relative">
              <button
                onClick={() => setSubjectsOpen(!subjectsOpen)}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-all flex items-center gap-1 ${
                  location.startsWith("/materia") || location.startsWith("/conteudo")
                    ? "bg-gray-100 text-gray-900"
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                }`}
              >
                Matérias
                <ChevronDown className={`w-4 h-4 transition-transform ${subjectsOpen ? "rotate-180" : ""}`} />
              </button>
              
              <AnimatePresence>
                {subjectsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-0 mt-2 w-80 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50 grid grid-cols-2 gap-1 p-2"
                    onMouseLeave={() => setSubjectsOpen(false)}
                  >
                    {subjects.map(s => (
                      <Link
                        key={s.id}
                        href={`/materia/${s.slug}`}
                        className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors text-sm text-gray-700 font-medium group"
                        onClick={() => setSubjectsOpen(false)}
                      >
                        <div className="w-6 h-6 rounded flex items-center justify-center bg-gray-100 group-hover:bg-primary/10 transition-colors" style={{ color: s.color }}>
                          <span className="text-xs">{s.icon}</span>
                        </div>
                        <span className="truncate">{s.name}</span>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/busca"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-all flex items-center gap-1.5 ${
                location === "/busca"
                  ? "bg-gray-100 text-gray-900"
                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              }`}
            >
              <Search className="w-4 h-4" />
              Buscar
            </Link>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            {user ? (
              <div className="relative">
                <button
                  onClick={() => setUserMenuOpen(!userMenuOpen)}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-50 border border-gray-200 hover:bg-gray-100 hover:border-gray-300 transition-all text-sm font-medium text-gray-700"
                >
                  <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-xs">
                    {user.name.charAt(0).toUpperCase()}
                  </div>
                  <span className="max-w-[100px] truncate">{user.name.split(" ")[0]}</span>
                  <ChevronDown className="w-4 h-4 text-gray-400" />
                </button>
                
                <AnimatePresence>
                  {userMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full right-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-gray-100 py-1 z-50"
                      onMouseLeave={() => setUserMenuOpen(false)}
                    >
                      <div className="px-4 py-2 border-b border-gray-50 mb-1">
                        <p className="text-sm font-medium text-gray-900 truncate">{user.name}</p>
                        <p className="text-xs text-gray-500 truncate">Estudante</p>
                      </div>
                      <Link
                        href="/dashboard"
                        className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors"
                        onClick={() => setUserMenuOpen(false)}
                      >
                        <LayoutDashboard className="w-4 h-4" />
                        Meu Painel
                      </Link>
                      <button
                        onClick={() => {
                          logout();
                          setUserMenuOpen(false);
                        }}
                        className="w-full flex items-center gap-2 px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors"
                      >
                        <LogOut className="w-4 h-4" />
                        Sair
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                href="/login"
                className="flex items-center gap-1.5 px-5 py-2 rounded-full text-sm font-semibold bg-primary text-white hover:bg-primary/90 hover:shadow-md hover:-translate-y-0.5 transition-all"
              >
                <User className="w-4 h-4" />
                Entrar
              </Link>
            )}
          </div>

          <button
            className="md:hidden p-2 rounded-md text-gray-600 hover:bg-gray-100"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden border-t border-gray-100 bg-white overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              <Link href="/" className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-primary rounded-lg font-medium" onClick={() => setMenuOpen(false)}>
                Início
              </Link>
              
              <div className="px-4 py-2 mt-2 text-gray-400 text-xs font-semibold uppercase tracking-wider">Matérias</div>
              <div className="grid grid-cols-2 gap-1 px-2">
                {subjects.map(s => (
                  <Link key={s.id} href={`/materia/${s.slug}`} className="flex items-center gap-2 px-3 py-2 text-gray-600 hover:bg-gray-50 hover:text-primary rounded-lg text-sm font-medium" onClick={() => setMenuOpen(false)}>
                    <span className="text-xs">{s.icon}</span> <span className="truncate">{s.name}</span>
                  </Link>
                ))}
              </div>
              
              <div className="h-px bg-gray-100 my-4" />
              
              <Link href="/busca" className="flex items-center gap-2 px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-primary rounded-lg font-medium" onClick={() => setMenuOpen(false)}>
                <Search className="w-5 h-5" /> Buscar
              </Link>
              
              {user ? (
                <>
                  <Link href="/dashboard" className="flex items-center gap-2 px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-primary rounded-lg font-medium" onClick={() => setMenuOpen(false)}>
                    <LayoutDashboard className="w-5 h-5" /> Meu Painel
                  </Link>
                  <button onClick={() => { logout(); setMenuOpen(false); }} className="w-full flex items-center gap-2 px-4 py-3 text-red-600 hover:bg-red-50 rounded-lg font-medium">
                    <LogOut className="w-5 h-5" /> Sair
                  </button>
                </>
              ) : (
                <Link href="/login" className="flex items-center gap-2 px-4 py-3 mt-2 bg-primary text-white rounded-lg font-medium justify-center" onClick={() => setMenuOpen(false)}>
                  <User className="w-5 h-5" /> Entrar ou Cadastrar
                </Link>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
