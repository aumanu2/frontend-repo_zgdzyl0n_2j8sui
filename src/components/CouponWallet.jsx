import React from 'react';
import { motion } from 'framer-motion';
import { Ticket, Clock } from 'lucide-react';

const coupons = [
  { id: 'c1', code: 'NEON20', label: '20% OFF • Any Stall', expires: '2d', color: 'from-[#FF00C8] to-[#00E5FF]' },
  { id: 'c2', code: 'CYBER5', label: '$5 OFF • Orders $25+', expires: '4d', color: 'from-[#A900FF] to-[#FF00C8]' },
  { id: 'c3', code: 'PLASMAFREESHP', label: 'Free Delivery • Tonight', expires: '8h', color: 'from-[#00E5FF] to-[#B6FF00]' },
];

export default function CouponWallet() {
  return (
    <section className="relative w-full bg-[#0A0A0F] py-12 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="font-mono text-xl uppercase tracking-[0.3em] text-cyan-200">Coupon Wallet</h2>
          <p className="text-xs text-cyan-100/70">Collectible data chips</p>
        </div>

        <div className="no-scrollbar flex gap-6 overflow-x-auto pb-2">
          {coupons.map((cp, i) => (
            <motion.div
              key={cp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="relative h-28 w-80 shrink-0 overflow-hidden rounded-xl border border-cyan-400/40 bg-white/5 p-4 shadow-[0_0_24px_rgba(0,229,255,0.2)]"
            >
              <div className={`pointer-events-none absolute inset-0 bg-gradient-to-r ${cp.color} opacity-20`} />
              <div className="relative z-10 flex h-full items-center justify-between">
                <div>
                  <div className="mb-1 inline-flex items-center gap-2 rounded-full border border-pink-400/50 px-2 py-0.5 text-[10px] text-pink-200">
                    <Ticket className="h-3 w-3 text-pink-300" /> COUPON
                  </div>
                  <h3 className="font-mono text-lg tracking-widest text-cyan-100">{cp.code}</h3>
                  <p className="text-xs text-cyan-100/80">{cp.label}</p>
                </div>
                <div className="flex flex-col items-end">
                  <span className="font-mono text-[10px] tracking-widest text-cyan-200">EXPIRES</span>
                  <div className="mt-1 inline-flex items-center gap-1 rounded-md border border-cyan-400/40 bg-black/30 px-2 py-1 text-cyan-100">
                    <Clock className="h-3.5 w-3.5 text-cyan-300" />
                    <span className="text-xs">{cp.expires}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
