'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

export function Navbar() {
  return (
    <header className="relative z-30 w-full bg-[#030712] border-b border-zinc-900/80">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 sm:px-10">
        {/* Left: KACHI Logo */}
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-3"
        >
          <div className="relative h-11 w-32 sm:h-13 sm:w-40 drop-shadow-[0_0_16px_rgba(0,140,255,0.9)]">
            <Image
              src="/kachi-text-with-crown.png"
              alt="Kachi"
              fill
              className="object-contain object-left"
              priority
            />
          </div>
        </motion.div>

        {/* Right: Nav Links + Menu Button */}
        <motion.div
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-3 sm:gap-4"
        >
          <Link
            href="/docs"
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg border border-[#0099ff]/40 bg-[#0099ff]/10 text-xs font-mono font-semibold text-[#38bdf8] hover:bg-[#0099ff]/25 hover:text-white hover:border-[#00e5ff] transition-all shadow-[0_0_12px_rgba(0,153,255,0.25)]"
          >
            <span>DOCS // SPEC</span>
          </Link>

          <Link
            href="/#contact"
            className="px-4 py-1.5 rounded-lg bg-[#0099ff] hover:bg-[#00c8ff] text-black text-xs font-mono font-bold tracking-wide transition-colors shadow-[0_0_15px_rgba(0,153,255,0.5)]"
          >
            LET&apos;S WORK
          </Link>
        </motion.div>
      </div>
    </header>
  )
}
