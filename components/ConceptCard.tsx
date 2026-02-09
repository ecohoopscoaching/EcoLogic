
import React from 'react';
import { motion } from 'framer-motion';
import { Concept } from '../types';
import IconRenderer from './IconRenderer';

interface ConceptCardProps {
  concept: Concept;
  onClick: () => void;
}

const ConceptCard: React.FC<ConceptCardProps> = ({ concept, onClick }) => {
  return (
    <motion.div
      layoutId={`card-${concept.id}`}
      onClick={onClick}
      whileHover={{ 
        y: -12,
        scale: 1.02,
        transition: { type: 'spring', stiffness: 400, damping: 25 }
      }}
      className="relative bg-zinc-900/40 border border-zinc-800 p-10 cursor-pointer group h-full flex flex-col justify-between overflow-hidden rounded-xl backdrop-blur-sm"
      style={{ transformStyle: 'preserve-3d' }}
    >
      {/* Background Glow on Hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-500/0 to-emerald-500/0 group-hover:from-teal-500/5 group-hover:to-emerald-500/10 transition-colors duration-500" />
      
      {/* Animated Border */}
      <div className="absolute inset-0 p-[1px] rounded-xl overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-[-100%] bg-gradient-to-r from-teal-500 via-emerald-400 to-teal-500 animate-[spin_4s_linear_infinite]" />
        <div className="absolute inset-[1px] bg-zinc-950 rounded-[11px]" />
      </div>

      <motion.div 
        layoutId={`icon-wrap-${concept.id}`}
        className="mb-16 relative z-10"
      >
        <div className="w-16 h-16 rounded-2xl bg-zinc-800/50 flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-teal-400 group-hover:to-emerald-400 transition-all duration-300">
          <IconRenderer 
            name={concept.iconName} 
            className="w-8 h-8 text-zinc-400 group-hover:text-black transition-colors duration-300" 
          />
        </div>
      </motion.div>

      <div className="relative z-10">
        <motion.h2 
          layoutId={`title-${concept.id}`}
          className="text-3xl font-black uppercase leading-[0.9] tracking-tighter mb-4 text-zinc-100 group-hover:text-white"
        >
          {concept.term}
        </motion.h2>
        <motion.p 
          layoutId={`simple-${concept.id}`}
          className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.25em] leading-tight group-hover:text-teal-400/80 transition-colors"
        >
          {concept.simpleExplanation}
        </motion.p>
      </div>

      {/* Decorative corner element */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-teal-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }} />
    </motion.div>
  );
};

export default ConceptCard;
