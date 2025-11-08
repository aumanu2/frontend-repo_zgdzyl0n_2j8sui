import React from 'react';
import HeroCover from './components/HeroCover';
import NeonCombos from './components/NeonCombos';
import RestaurantGrid from './components/RestaurantGrid';
import CouponWallet from './components/CouponWallet';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0A0A0F] text-white">
      <HeroCover />
      <main>
        <section className="relative mx-auto max-w-7xl px-6 py-8">
          <header className="mb-6">
            <h2 className="font-mono text-xl uppercase tracking-[0.3em] text-cyan-200">Festival Feed</h2>
            <p className="text-sm text-cyan-100/80">A luminous grid of holographic bites and limited-time data-chip deals.</p>
          </header>
        </section>
        <NeonCombos />
        <RestaurantGrid />
        <CouponWallet />
      </main>
      <footer className="mx-auto max-w-7xl px-6 py-12 text-center text-xs text-cyan-100/70">
        © 20XX Cyberpunk Food Festival • Built for a neon world
      </footer>
    </div>
  );
}
