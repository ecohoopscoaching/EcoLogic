
import React from 'react';
import { motion } from 'framer-motion';
import { Concept } from '../types';
import IconRenderer from './IconRenderer';
import { X } from 'lucide-react';

interface ExpandedOverlayProps {
  concept: Concept;
  onClose: () => void;
}

const ExpandedOverlay: React.FC<ExpandedOverlayProps> = ({ concept, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-12 overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-zinc-950/80 backdrop-blur-xl"
      />
      
      <motion.div
        layoutId={`card-${concept.id}`}
        className="relative w-full max-w-6xl bg-zinc-900 border border-zinc-800 shadow-[0_0_100px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col md:flex-row rounded-3xl"
      >
        <button 
          onClick={onClose}
          className="absolute top-8 right-8 z-10 p-3 bg-zinc-800 text-zinc-400 hover:text-white rounded-full hover:bg-teal-500 hover:text-black transition-all border border-zinc-700 hover:border-teal-400"
        >
          <X size={24} />
        </button>

        {/* Gradient Sidebar */}
        <div className="md:w-2/5 bg-gradient-to-br from-teal-400 to-emerald-600 p-12 md:p-20 flex flex-col justify-between items-start relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_0%,rgba(255,255,255,0.2)_0%,transparent_50%)]" />
          
          <motion.div layoutId={`icon-wrap-${concept.id}`} className="relative z-10">
            <div className="w-32 h-32 rounded-3xl bg-black/10 backdrop-blur-md flex items-center justify-center border border-white/20">
              <IconRenderer name={concept.iconName} className="w-16 h-16 text-black" />
            </div>
          </motion.div>

          <div className="mt-20 relative z-10">
            <span className="text-[10px] font-black uppercase tracking-[0.5em] bg-black/20 backdrop-blur-md text-black px-4 py-2 rounded-full border border-black/10">
              Module • {concept.id.padStart(3, '0')}
            </span>
          </div>
        </div>

        {/* Content Area */}
        <div className="md:w-3/5 p-8 md:p-24 overflow-y-auto max-h-[70vh] md:max-h-[85vh] bg-zinc-900">
          <motion.h2 
            layoutId={`title-${concept.id}`}
            className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85] mb-10 text-white"
          >
            {concept.term}
          </motion.h2>
          
          <motion.div 
            layoutId={`simple-${concept.id}`}
            className="mb-12"
          >
            <p className="text-xl md:text-3xl font-bold border-l-8 border-teal-500 pl-8 italic text-zinc-100 leading-tight">
              {concept.simpleExplanation}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, type: 'spring', damping: 25 }}
            className="prose prose-invert max-w-none"
          >
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-teal-400/60 mb-6 flex items-center gap-4">
              <span className="h-px flex-1 bg-zinc-800"></span>
              The Street-Smart Translation
              <span className="h-px flex-1 bg-zinc-800"></span>
            </h4>
            <p className="text-xl md:text-2xl leading-relaxed font-light text-zinc-400">
              {concept.feynmanDefinition}
            </p>
          </motion.div>

          <div className="mt-16 pt-10 border-t border-zinc-800 flex justify-between items-center text-[10px] font-black uppercase tracking-[0.3em] text-zinc-600">
            <span>© EcoLogic Dynamics Labs</span>
            <span>2024 Series</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ExpandedOverlay;
