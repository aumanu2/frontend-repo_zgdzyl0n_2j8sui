import React from 'react';
import { motion } from 'framer-motion';

const combos = [
  {
    id: 'combo-1',
    title: 'Plasma Burger + Ion Fries',
    price: 12,
    color: 'from-[#00E5FF] to-[#A900FF]'
  },
  {
    id: 'combo-2',
    title: 'Neon Ramen Capsule',
    price: 10,
    color: 'from-[#FF00C8] to-[#00E5FF]'
  },
  {
    id: 'combo-3',
    title: 'Cyber Sushi Stack',
    price: 15,
    color: 'from-[#B6FF00] to-[#00E5FF]'
  },
  {
    id: 'combo-4',
    title: 'Quantum Taco Trio',
    price: 11,
    color: 'from-[#A900FF] to-[#FF00C8]'
  }
];

export default function NeonCombos() {
  return (
    <section className="relative w-full bg-[#0A0A0F] py-12 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="font-mono text-xl uppercase tracking-[0.3em] text-cyan-200">Neon Combos</h2>
          <button className="rounded-md border border-cyan-400/40 px-3 py-1 text-xs text-cyan-200 hover:bg-cyan-500/10">View All</button>
        </div>

        <div className="no-scrollbar flex snap-x gap-6 overflow-x-auto pb-2">
          {combos.map((c, idx) => (
            <motion.div
              key={c.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="snap-start"
            >
              <div className="relative h-44 w-72 shrink-0 overflow-hidden rounded-xl border border-cyan-400/40 bg-white/5 p-4 shadow-[0_0_24px_rgba(0,229,255,0.2)]">
                <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${c.color} opacity-20`} />
                <div className="relative z-10 flex h-full flex-col justify-between">
                  <div>
                    <p className="font-mono text-xs tracking-widest text-cyan-200/90">Limited Time • Festival</p>
                    <h3 className="mt-1 font-mono text-lg uppercase tracking-widest">{c.title}</h3>
                  </div>
                  <div className="flex items-end justify-between">
                    <span className="font-mono text-sm text-cyan-100">${c.price}</span>
                    <button className="rounded-md bg-cyan-400/20 px-3 py-1 text-xs text-cyan-100 outline outline-1 outline-cyan-300/50 hover:bg-cyan-400/30">Add</button>
                  </div>
                </div>
                <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-cyan-400/20 blur-3xl" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
