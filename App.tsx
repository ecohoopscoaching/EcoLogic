
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CONCEPTS } from './data/concepts';
import { Concept } from './types';
import ConceptCard from './components/ConceptCard';
import ExpandedOverlay from './components/ExpandedOverlay';
import { MousePointer2, ChevronDown } from 'lucide-react';

const App: React.FC = () => {
  const [selectedConcept, setSelectedConcept] = useState<Concept | null>(null);

  useEffect(() => {
    if (selectedConcept) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [selectedConcept]);

  return (
    <div className="min-h-screen bg-zinc-950 text-white selection:bg-teal-400 selection:text-black">
      {/* Dynamic Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div 
          className="absolute -top-[10%] -left-[10%] w-[120%] h-[60%] bg-gradient-to-br from-teal-500/10 via-emerald-500/5 to-transparent transform -rotate-6"
          style={{ clipPath: 'polygon(0 0, 100% 0, 100% 80%, 0 100%)' }}
        />
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_30%,rgba(20,184,166,0.05)_0%,transparent_50%)]" />
        <div className="absolute top-[20%] right-[10%] w-[1px] h-[60%] bg-gradient-to-b from-transparent via-teal-500/20 to-transparent" />
        <div className="absolute bottom-[10%] left-[5%] w-[90%] h-[1px] bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />
      </div>

      {/* Navigation / Header */}
      <header className="relative z-10 px-6 py-16 md:px-24 md:py-32 border-b border-zinc-800 flex flex-col md:flex-row justify-between items-start gap-12 bg-zinc-950/50 backdrop-blur-md">
        <div className="max-w-5xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-block bg-gradient-to-r from-teal-400 to-emerald-400 text-black px-4 py-1 text-[10px] font-black uppercase tracking-[0.4em] mb-6 rounded-sm"
          >
            Ecological Dynamics — Dancing with the world.
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-7xl md:text-[10rem] font-black uppercase tracking-tighter leading-[0.8] mix-blend-lighten"
          >
            Street <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 via-zinc-400 to-zinc-600">Smart</span> <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400">Glossary</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-2xl md:text-4xl font-light text-zinc-400 mt-12 max-w-2xl leading-tight"
          >
            You aren't a computer. You're an animal. <br/>
            Stop <span className="text-zinc-100 font-bold">calculating</span> — thinking like a machine — and just move.
          </motion.p>
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="md:w-1/4 text-right flex flex-col items-end"
        >
          <div className="flex flex-col gap-2 text-[10px] font-black uppercase tracking-widest text-zinc-500">
            <span className="border-b border-teal-500/50 pb-1">Revision 2.3</span>
            <span className="border-b border-emerald-500/50 pb-1 text-zinc-300">EcoLogic Dynamics</span>
          </div>
          <div className="mt-8 text-[9px] text-zinc-700 font-black uppercase tracking-[0.5em] vertical-rl">
            Real-time Perception Engaged
          </div>
        </motion.div>
      </header>

      {/* Grid Controls */}
      <div className="relative z-10 px-6 md:px-24 py-6 flex items-center justify-between border-b border-zinc-900 bg-zinc-900/30 backdrop-blur-xl">
        <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.2em] text-teal-400">
          <MousePointer2 size={14} />
          <span>Pick a challenge</span>
        </div>
        <div className="hidden md:flex items-center gap-10 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-gradient-to-tr from-teal-400 to-emerald-400" />
            <span>Direct Perception — Seeing things for what they are.</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-zinc-800 border border-zinc-700" />
            <span>Bauhaus Grid</span>
          </div>
        </div>
      </div>

      {/* The Concept Grid */}
      <main className="relative z-10 px-6 md:px-24 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {CONCEPTS.map((concept) => (
            <ConceptCard 
              key={concept.id} 
              concept={concept} 
              onClick={() => setSelectedConcept(concept)} 
            />
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 bg-zinc-950 text-white px-6 md:px-24 py-32 border-t border-zinc-800">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
          <div className="space-y-8">
            <h3 className="text-5xl font-black uppercase tracking-tighter">Manifesto</h3>
            <p className="text-zinc-500 font-medium leading-relaxed text-lg">
              EcoLogic is for people who are tired of being told their brain is a hard drive. You don't store files. You just have a really good feel for how the world works.
            </p>
          </div>
          <div className="flex flex-col gap-6 text-[11px] font-bold uppercase tracking-[0.3em] text-zinc-400">
            <h4 className="text-teal-400 font-black">Architecture</h4>
            <span className="hover:text-white transition-colors cursor-default">Non-Linear — Messy progress.</span>
            <span className="hover:text-white transition-colors cursor-default">Calibration — Adjusting your dial.</span>
            <span className="hover:text-white transition-colors cursor-default">Affordance — Useful things.</span>
            <span className="hover:text-white transition-colors cursor-default">Feynman Translation</span>
          </div>
          <div className="text-right flex flex-col justify-end gap-2">
            <span className="text-8xl font-black text-transparent bg-clip-text bg-gradient-to-t from-teal-900 to-emerald-400 leading-none">EL</span>
            <span className="text-[10px] font-black uppercase tracking-[0.8em] text-zinc-700">EcoLogic Dynamics</span>
          </div>
        </div>
      </footer>

      {/* Overlay */}
      <AnimatePresence mode="wait">
        {selectedConcept && (
          <ExpandedOverlay 
            concept={selectedConcept} 
            onClose={() => setSelectedConcept(null)} 
          />
        )}
      </AnimatePresence>

      {/* Scroll to Top */}
      <motion.button 
        whileHover={{ scale: 1.1, backgroundColor: '#2dd4bf' }}
        whileTap={{ scale: 0.9 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-10 right-10 z-40 bg-teal-500 text-black p-5 rounded-full shadow-[0_0_30px_rgba(20,184,166,0.3)] transition-shadow"
      >
        <ChevronDown size={24} className="rotate-180" />
      </motion.button>
    </div>
  );
};

export default App;
