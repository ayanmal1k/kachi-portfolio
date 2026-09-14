'use client'

import Image from 'next/image'
import { Mail } from 'lucide-react'

export function Footer() {
  return (
    <footer className="relative w-full bg-[#02050e] border-t border-zinc-900/80 text-white overflow-hidden">
      {/* Subtle top glowing accent border */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#0099ff]/40 to-transparent pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-[1560px] px-6 sm:px-10 lg:px-14 xl:px-16 pt-12 pb-8">
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 pb-8 border-b border-zinc-900/80">
          {/* Left: Kachi with Crown */}
          <div className="flex items-center">
            <div className="relative h-11 w-36 sm:h-13 sm:w-44 drop-shadow-[0_0_16px_rgba(0,140,255,0.85)]">
              <Image
                src="/kachi-text-with-crown.png"
                alt="Kachi"
                fill
                className="object-contain object-center md:object-left"
              />
            </div>
          </div>

          {/* Middle: Let's Connect and Grow */}
          <div className="text-center">
            <p className="font-['MasterVictory'] text-2xl sm:text-3xl text-white tracking-wide select-none drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
              LET&apos;S CONNECT <span className="text-[#0099ff] drop-shadow-[0_0_18px_rgba(0,140,255,0.9)]">&amp; GROW</span>
            </p>
          </div>

          {/* Right: Social Links */}
          <div className="flex items-center gap-3">
            {/* X (Twitter) */}
            <a
              href="https://x.com/Kachi_Base"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X (Twitter)"
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-950/90 border border-zinc-800/80 hover:border-[#0099ff] text-zinc-400 hover:text-[#0099ff] transition-all duration-200 hover:shadow-[0_0_15px_rgba(0,153,255,0.5)]"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>

            {/* Telegram */}
            <a
              href="https://t.me/Kachi_Base"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Telegram"
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-950/90 border border-zinc-800/80 hover:border-[#0099ff] text-zinc-400 hover:text-[#0099ff] transition-all duration-200 hover:shadow-[0_0_15px_rgba(0,153,255,0.5)]"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
              </svg>
            </a>

            {/* Discord */}
            <a
              href="https://discord.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Discord"
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-950/90 border border-zinc-800/80 hover:border-[#0099ff] text-zinc-400 hover:text-[#0099ff] transition-all duration-200 hover:shadow-[0_0_15px_rgba(0,153,255,0.5)]"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
                <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.894.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
              </svg>
            </a>

            {/* Email */}
            <a
              href="mailto:obasi.godwill338@gmail.com"
              aria-label="Email"
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-950/90 border border-zinc-800/80 hover:border-[#0099ff] text-zinc-400 hover:text-[#0099ff] transition-all duration-200 hover:shadow-[0_0_15px_rgba(0,153,255,0.5)]"
            >
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Bottom Smaller Row */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] sm:text-xs font-mono text-zinc-500">
          <p>© {new Date().getFullYear()} KACHI. ALL RIGHTS RESERVED.</p>

          <p className="tracking-wider">
            CREATED BY{' '}
            <a
              href="https://t.me/AyanMalikkkk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0099ff] hover:text-[#00c8ff] font-bold tracking-widest transition-colors drop-shadow-[0_0_8px_rgba(0,153,255,0.7)] hover:underline"
            >
              AMEX
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
