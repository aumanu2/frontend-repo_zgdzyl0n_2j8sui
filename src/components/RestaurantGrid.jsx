import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const restaurants = [
  { id: 'r1', name: 'Circuit Sushi', tag: 'Sushi • Neon', rating: 4.8, color: 'from-[#FF00C8] to-[#00E5FF]' },
  { id: 'r2', name: 'Ion Ramen Lab', tag: 'Ramen • Vapor', rating: 4.7, color: 'from-[#00E5FF] to-[#A900FF]' },
  { id: 'r3', name: 'Quantum Tacos', tag: 'Tacos • Synth', rating: 4.6, color: 'from-[#B6FF00] to-[#00E5FF]' },
  { id: 'r4', name: 'Plasma Burger Co', tag: 'Burgers • Grid', rating: 4.5, color: 'from-[#A900FF] to-[#FF00C8]' },
];

function FilterChips() {
  const chips = ['All', 'Burgers', 'Ramen', 'Sushi', 'Tacos'];
  return (
    <div className="mb-6 flex flex-wrap gap-3">
      {chips.map((chip) => (
        <button key={chip} className="rounded-full border border-cyan-400/50 bg-transparent px-4 py-1 text-xs text-cyan-200 hover:bg-cyan-500/10">
          {chip}
        </button>
      ))}
    </div>
  );
}

export default function RestaurantGrid() {
  return (
    <section className="relative w-full bg-[#0A0A0F] py-12 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-2 flex items-center justify-between">
          <h2 className="font-mono text-xl uppercase tracking-[0.3em] text-cyan-200">Restaurants</h2>
          <p className="text-xs text-cyan-100/70">Floating holographic cards</p>
        </div>

        <FilterChips />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {restaurants.map((r, i) => (
            <motion.div
              key={r.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="relative overflow-hidden rounded-xl border border-cyan-400/40 bg-white/5 p-4 shadow-[0_0_24px_rgba(0,229,255,0.2)]"
            >
              <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${r.color} opacity-15`} />
              <div className="relative z-10">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-mono text-lg uppercase tracking-widest">{r.name}</h3>
                    <p className="mt-1 text-sm text-cyan-100/80">{r.tag}</p>
                  </div>
                  <div className="flex items-center gap-1 rounded-md border border-cyan-400/40 bg-black/30 px-2 py-1 text-cyan-100">
                    <Star className="h-3.5 w-3.5 text-yellow-300" />
                    <span className="text-xs">{r.rating}</span>
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <button className="rounded-md bg-cyan-400/20 px-3 py-1 text-xs text-cyan-100 outline outline-1 outline-cyan-300/50 hover:bg-cyan-400/30">View Menu</button>
                  <button className="rounded-md border border-pink-400/60 px-3 py-1 text-xs text-pink-200 hover:bg-pink-500/10">Add Coupon</button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
