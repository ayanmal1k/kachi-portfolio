'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Menu } from 'lucide-react'

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

        {/* Right: Menu Button */}
        <motion.div
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-4"
        >
          <button
            type="button"
            aria-label="Navigation Menu"
            className="group flex h-10 w-10 items-center justify-center rounded-lg border border-[#0099ff]/30 bg-zinc-900/60 text-[#38bdf8] backdrop-blur-md transition-all hover:border-[#00e5ff] hover:bg-[#0099ff]/15 hover:shadow-[0_0_15px_rgba(0,180,255,0.5)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#00d2ff]"
          >
            <Menu className="h-5 w-5 transition-transform group-hover:scale-110" />
          </button>
        </motion.div>
      </div>
    </header>
  )
}
