import React from 'react';
import Spline from '@splinetool/react-spline';
import { Sparkles, Ticket, ShoppingCart } from 'lucide-react';

export default function HeroCover() {
  return (
    <section className="relative h-[70vh] w-full overflow-hidden bg-[#0A0A0F]">
      {/* Spline 3D Cover */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/BL9Cjn3fkAdLBhXm/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Top gradient and noise overlay - does not block Spline interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0A0A0F]/40 via-transparent to-[#0A0A0F]" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center text-white">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-1 text-xs tracking-widest text-cyan-200 shadow-[0_0_24px_rgba(0,229,255,0.35)]">
          <Sparkles className="h-3.5 w-3.5 text-cyan-300" /> CYBERPUNK FOOD FESTIVAL • LIMITED TIME
        </div>
        <h1 className="font-mono text-4xl uppercase tracking-[0.2em] text-white drop-shadow-[0_0_10px_rgba(0,229,255,0.6)] sm:text-5xl md:text-6xl">
          Neon Hologram Street Bites
        </h1>
        <p className="mt-4 max-w-2xl text-sm text-cyan-100/90 md:text-base">
          Explore a glowing grid of stalls. Collect data-chip coupons. Order instant combos from a city of light.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <button className="group relative inline-flex items-center gap-2 rounded-lg bg-cyan-500/20 px-5 py-3 font-mono text-xs uppercase tracking-widest text-cyan-100 outline outline-1 outline-cyan-300/50 transition hover:bg-cyan-400/30 hover:shadow-[0_0_24px_rgba(0,229,255,0.55)]">
            <span className="absolute inset-0 -z-0 rounded-lg opacity-60 blur-md" style={{
              boxShadow: '0 0 40px 8px rgba(0,229,255,0.35)'
            }} />
            <ShoppingCart className="h-4 w-4 text-cyan-200" /> Start Ordering
          </button>

          <button className="inline-flex items-center gap-2 rounded-lg bg-transparent px-5 py-3 font-mono text-xs uppercase tracking-widest text-pink-200 ring-1 ring-pink-400/60 transition hover:bg-pink-500/10 hover:shadow-[0_0_24px_rgba(255,0,200,0.5)]">
            <Ticket className="h-4 w-4 text-pink-300" /> View Coupons
          </button>
        </div>
      </div>
    </section>
  );
}
