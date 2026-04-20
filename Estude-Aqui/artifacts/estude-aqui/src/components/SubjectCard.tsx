import { Link } from "wouter";
import { Subject } from "@/data/content";
import { ArrowRight, BookText, PlaySquare, FileText } from "lucide-react";

interface SubjectCardProps {
  subject: Subject;
}

export function SubjectCard({ subject }: SubjectCardProps) {
  return (
    <Link href={`/materia/${subject.slug}`}>
      <div
        className="group relative bg-white rounded-2xl p-6 cursor-pointer border border-gray-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden"
      >
        <div 
          className="absolute top-0 left-0 w-full h-1 transition-all duration-300 opacity-50 group-hover:opacity-100" 
          style={{ backgroundColor: subject.color }} 
        />
        
        <div className="flex items-start justify-between mb-4">
          <div 
            className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl transition-transform duration-300 group-hover:scale-110"
            style={{ backgroundColor: subject.bgColor }}
          >
            {subject.icon}
          </div>
          <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>
        
        <h3 className="font-bold text-xl text-gray-900 mb-2 group-hover:text-primary transition-colors">
          {subject.name}
        </h3>
        
        <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-2">
          {subject.description}
        </p>
        
        <div className="flex items-center gap-4 text-xs font-medium text-gray-500 border-t border-gray-100 pt-4">
          <div className="flex items-center gap-1.5">
            <BookText className="w-3.5 h-3.5 text-gray-400" />
            <span>{subject.topics.length} tópicos</span>
          </div>
          <div className="flex items-center gap-1.5">
            <FileText className="w-3.5 h-3.5 text-gray-400" />
            <span>{subject.pdfs.length} PDFs</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
