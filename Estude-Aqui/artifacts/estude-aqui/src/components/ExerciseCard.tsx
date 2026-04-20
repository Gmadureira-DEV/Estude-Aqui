import { useState } from "react";
import { Exercise } from "@/data/content";
import { CheckCircle2, XCircle, Lightbulb } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ExerciseCardProps {
  exercise: Exercise;
  number: number;
}

export function ExerciseCard({ exercise, number }: ExerciseCardProps) {
  const [selected, setSelected] = useState<string | null>(null);
  const [revealed, setRevealed] = useState(false);

  const options = Object.entries(exercise.options) as [string, string][];

  const getOptionStyles = (key: string) => {
    if (!revealed) {
      return selected === key
        ? "bg-primary/5 border-primary text-primary"
        : "bg-white border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300";
    }
    if (key === exercise.answer) return "bg-green-50 border-green-500 text-green-800 ring-1 ring-green-500";
    if (key === selected && key !== exercise.answer) return "bg-red-50 border-red-400 text-red-700";
    return "bg-white border-gray-100 text-gray-400 opacity-60";
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 shadow-sm">
      <div className="flex items-start gap-4 mb-6">
        <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gray-50 text-primary font-bold flex items-center justify-center border border-gray-100">
          {number}
        </div>
        <p className="text-gray-900 font-medium leading-relaxed text-lg pt-1">{exercise.question}</p>
      </div>

      <div className="space-y-3">
        {options.map(([key, value]) => (
          <button
            key={key}
            onClick={() => !revealed && setSelected(key)}
            disabled={revealed}
            className={`w-full text-left px-5 py-4 rounded-xl border-2 transition-all duration-200 text-sm font-medium flex items-center gap-4 ${getOptionStyles(key)}`}
          >
            <span className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 font-bold ${
              revealed && key === exercise.answer ? 'bg-green-100 text-green-700' :
              revealed && key === selected && key !== exercise.answer ? 'bg-red-100 text-red-700' :
              selected === key ? 'bg-primary text-white' : 'bg-gray-100 text-gray-500'
            }`}>
              {key.toUpperCase()}
            </span>
            <span className="flex-1 leading-relaxed">{value}</span>
            {revealed && key === exercise.answer && (
              <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" />
            )}
            {revealed && key === selected && key !== exercise.answer && (
              <XCircle className="w-6 h-6 text-red-500 flex-shrink-0" />
            )}
          </button>
        ))}
      </div>

      {!revealed && selected && (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-6 flex justify-end">
          <button
            onClick={() => setRevealed(true)}
            className="px-6 py-2.5 bg-primary text-white rounded-xl text-sm font-semibold hover:bg-primary/90 hover:shadow-md transition-all flex items-center gap-2"
          >
            <CheckCircle2 className="w-4 h-4" /> Confirmar resposta
          </button>
        </motion.div>
      )}

      <AnimatePresence>
        {revealed && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }} 
            animate={{ opacity: 1, height: "auto" }} 
            className="mt-6 pt-6 border-t border-gray-100"
          >
            <div className={`p-5 rounded-xl border ${selected === exercise.answer ? 'bg-green-50 border-green-100' : 'bg-blue-50 border-blue-100'}`}>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Lightbulb className={`w-5 h-5 ${selected === exercise.answer ? 'text-green-600' : 'text-primary'}`} />
                  <span className={`font-bold ${selected === exercise.answer ? 'text-green-800' : 'text-primary'}`}>
                    Resolução Passo a Passo
                  </span>
                </div>
                {selected === exercise.answer && (
                  <span className="px-2.5 py-1 bg-green-100 text-green-700 text-xs font-bold uppercase tracking-wider rounded-md">
                    Correto!
                  </span>
                )}
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">{exercise.resolution}</p>
              
              {selected !== exercise.answer && (
                <div className="mt-4 pt-4 border-t border-blue-200/50 flex justify-end">
                  <button
                    onClick={() => { setSelected(null); setRevealed(false); }}
                    className="text-sm text-primary font-semibold hover:text-primary/80 transition-colors"
                  >
                    Tentar novamente
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
