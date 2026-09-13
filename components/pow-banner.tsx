'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export function PowBanner() {
  return (
    <section className="relative w-full bg-[#030712] text-white overflow-hidden border-t border-b border-zinc-900/80">
      {/* ============================================================ */}
      {/* DESKTOP FULL-WIDTH BANNER (Screen >= md)                     */}
      {/* Full-bleed edge-to-edge background with pow-banner.avif       */}
      {/* ============================================================ */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative hidden md:flex min-h-[460px] lg:min-h-[540px] xl:min-h-[620px] w-full items-center bg-cover bg-no-repeat bg-[position:85%_center] lg:bg-[position:90%_center] xl:bg-center"
        style={{ backgroundImage: "url('/pow-banner.avif')" }}
      >
        {/* Ambient atmospheric flare */}
        <div
          className="absolute top-1/4 left-12 h-80 w-80 rounded-full bg-[#0088ff]/15 blur-[120px] pointer-events-none"
          aria-hidden="true"
        />

        {/* Content aligned to standard max-w grid while banner stretches 100vw */}
        <div className="relative z-10 mx-auto flex w-full max-w-7xl items-center px-6 sm:px-10 lg:px-12">
          <div className="flex flex-col items-start max-w-2xl">
            {/* SERVICES Tag */}
            <motion.span
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-4 font-mono text-xs lg:text-sm font-semibold tracking-[0.3em] text-[#38bdf8] uppercase drop-shadow-[0_0_10px_rgba(56,189,248,0.8)]"
            >
              SERVICES
            </motion.span>

            {/* Hand-drawn Brush Calligraphy Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="font-['MasterVictory'] text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-5xl font-normal leading-tight tracking-normal select-none"
            >
              <span className="block text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)]">
                HOW I CAN HELP
              </span>
              <span className="block mt-3.5 sm:mt-4 lg:mt-5 drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)]">
                <span className="text-white">YOUR </span>
                <span className="text-[#0099ff] drop-shadow-[0_0_22px_rgba(0,140,255,0.9)] transition-all duration-300 hover:drop-shadow-[0_0_30px_rgba(0,195,255,1)]">
                  PROJECT
                </span>
              </span>
            </motion.h2>

            {/* Arched Brush Underline (stroke-2.png) */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0.8 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="relative mt-2 sm:mt-2.5 lg:mt-3 h-8 w-56 sm:h-9 sm:w-64 lg:h-10 lg:w-72 xl:h-11 xl:w-80 origin-left pointer-events-none select-none filter drop-shadow-[0_0_15px_rgba(0,140,255,0.9)]"
            >
              <Image
                src="/stroke-2.png"
                alt=""
                fill
                className="object-contain object-left"
                priority
              />
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* ============================================================ */}
      {/* MOBILE FULL-WIDTH BANNER (Screen < md)                       */}
      {/* Edge-to-edge layout: text on top, character image below      */}
      {/* ============================================================ */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="flex md:hidden flex-col w-full bg-zinc-950"
      >
        {/* Top: Text Content */}
        <div className="flex flex-col items-start px-6 pt-10 pb-6">
          <span className="mb-3 font-mono text-[11px] font-semibold tracking-[0.28em] text-[#38bdf8] uppercase drop-shadow-[0_0_8px_rgba(56,189,248,0.7)]">
            SERVICES
          </span>

          <h2 className="font-['MasterVictory'] text-2xl sm:text-3xl font-normal leading-tight tracking-normal select-none">
            <span className="block text-white">HOW I CAN HELP</span>
            <span className="block mt-2.5 sm:mt-3">
              <span className="text-white">YOUR </span>
              <span className="text-[#0099ff] drop-shadow-[0_0_18px_rgba(0,140,255,0.85)]">
                PROJECT
              </span>
            </span>
          </h2>

          {/* Brush Underline on Mobile */}
          <div className="relative mt-1.5 h-6 w-44 sm:h-7 sm:w-52 pointer-events-none select-none filter drop-shadow-[0_0_12px_rgba(0,140,255,0.85)]">
            <Image
              src="/stroke-2.png"
              alt=""
              fill
              className="object-contain object-left"
              priority
            />
          </div>
        </div>

        {/* Bottom: Mobile Character Image full width edge-to-edge */}
        <div className="relative w-full aspect-square overflow-hidden bg-black">
          <Image
            src="/pow-mobile.avif"
            alt="How I Can Help Your Project"
            fill
            className="object-cover object-center"
            priority
          />
          {/* Soft gradient blend at top of image */}
          <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-zinc-950 to-transparent pointer-events-none" />
        </div>
      </motion.div>
    </section>
  )
}
