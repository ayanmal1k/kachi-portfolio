'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Mail, Check, Copy } from 'lucide-react'

export function SocialSection() {
  const [copiedText, setCopiedText] = useState<string | null>(null)

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text)
    setCopiedText(label)
    setTimeout(() => setCopiedText(null), 2500)
  }

  return (
    <section id="contact" className="relative w-full overflow-hidden bg-[#02050e] text-white scroll-mt-12">
      <div id="social" className="absolute -top-10" />
      {/* Top & Bottom Cyber Glowing Accent Borders */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#0099ff]/60 to-transparent z-20" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#0099ff]/60 to-transparent z-20" />

      {/* ============================================================ */}
      {/* BACKGROUND LAYERS: PC & MOBILE IMAGES                        */}
      {/* ============================================================ */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        {/* PC Background (social.avif) */}
        <div
          className="hidden md:block absolute inset-0 bg-cover bg-no-repeat bg-left transition-all duration-700"
          style={{ backgroundImage: "url('/social.avif')" }}
        />

        {/* Mobile Background (social-mobile.avif) */}
        <div
          className="block md:hidden absolute inset-0 bg-cover bg-no-repeat bg-bottom"
          style={{ backgroundImage: "url('/social-mobile.avif')" }}
        />

        {/* Dynamic Dark Gradient Overlays for Readability */}
        <div
          className="hidden md:block absolute inset-0 bg-gradient-to-r from-black/20 via-black/40 to-[#02050e]/95"
          aria-hidden="true"
        />
        <div
          className="block md:hidden absolute inset-0 bg-gradient-to-b from-[#02050e]/90 via-black/60 to-black/40"
          aria-hidden="true"
        />

        {/* Electric Blue Ambient Glow Spheres */}
        <div
          className="absolute -top-20 right-10 h-[500px] w-[500px] rounded-full bg-[#0088ff]/15 blur-[150px]"
          aria-hidden="true"
        />
        <div
          className="absolute bottom-10 right-1/4 h-[400px] w-[400px] rounded-full bg-[#0099ff]/12 blur-[140px]"
          aria-hidden="true"
        />
      </div>

      {/* ============================================================ */}
      {/* SECTION CONTENT CONTAINER                                    */}
      {/* ============================================================ */}
      <div className="relative z-10 mx-auto max-w-[1560px] px-6 sm:px-10 lg:px-14 xl:px-16 min-h-[550px] sm:min-h-[620px] lg:min-h-[680px] flex items-center justify-end py-16 sm:py-20 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-start max-w-xl xl:max-w-2xl w-full"
        >
          {/* Top Label */}
          <span className="mb-3 font-mono text-xs sm:text-sm font-semibold tracking-[0.25em] text-[#38bdf8] uppercase drop-shadow-[0_0_8px_rgba(56,189,248,0.7)]">
            CONNECT WITH ME
          </span>

          {/* Main Headline in Custom MasterVictory Brush Font */}
          <h2 className="font-['MasterVictory'] text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-normal leading-tight select-none tracking-normal mb-3">
            <span className="text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)]">LET&apos;S STAY IN </span>
            <span className="text-[#0099ff] drop-shadow-[0_0_24px_rgba(0,140,255,0.9)]">TOUCH</span>
          </h2>

          {/* Subtext */}
          <p className="font-mono text-xs sm:text-sm md:text-base text-zinc-300 max-w-md leading-relaxed mb-8 sm:mb-10">
            Follow me on social media for updates, projects, and more.
          </p>

          {/* Social Icons Bar (Matching Reference Visual) */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-8 sm:mb-10">
            {/* 1. X (Twitter) Button */}
            <motion.a
              href="https://x.com/Kachi_Base"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -4, scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              aria-label="X (Twitter) Profile"
              className="group relative flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl bg-[#040814]/90 border-2 border-[#0099ff] hover:border-[#00c8ff] text-[#0099ff] hover:text-white transition-colors duration-300 shadow-[0_0_15px_rgba(0,140,255,0.45)] hover:shadow-[0_0_25px_rgba(0,153,255,0.95)]"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5 sm:h-6 sm:w-6 fill-current">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </motion.a>

            {/* 2. Telegram Button */}
            <motion.a
              href="https://t.me/Kachi_Base"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -4, scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Telegram"
              className="group relative flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl bg-[#040814]/90 border-2 border-[#0099ff] hover:border-[#00c8ff] text-[#0099ff] hover:text-white transition-colors duration-300 shadow-[0_0_15px_rgba(0,140,255,0.45)] hover:shadow-[0_0_25px_rgba(0,153,255,0.95)]"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5 sm:h-6 sm:w-6 fill-current">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
              </svg>
            </motion.a>

            {/* 3. Discord Button */}
            <motion.button
              type="button"
              onClick={() => handleCopy('@kachi112', 'Discord')}
              whileHover={{ y: -4, scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Discord: @kachi112"
              title="Click to copy Discord: @kachi112"
              className="group relative flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl bg-[#040814]/90 border-2 border-[#0099ff] hover:border-[#00c8ff] text-[#0099ff] hover:text-white transition-colors duration-300 shadow-[0_0_15px_rgba(0,140,255,0.45)] hover:shadow-[0_0_25px_rgba(0,153,255,0.95)] cursor-pointer"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5 sm:h-6 sm:w-6 fill-current">
                <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.894.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
              </svg>
            </motion.button>

            {/* 4. Email Button */}
            <motion.a
              href="mailto:obasi.godwill338@gmail.com"
              whileHover={{ y: -4, scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Email: obasi.godwill338@gmail.com"
              title="Email: obasi.godwill338@gmail.com"
              className="group relative flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl bg-[#040814]/90 border-2 border-[#0099ff] hover:border-[#00c8ff] text-[#0099ff] hover:text-white transition-colors duration-300 shadow-[0_0_15px_rgba(0,140,255,0.45)] hover:shadow-[0_0_25px_rgba(0,153,255,0.95)]"
            >
              <Mail className="h-5 w-5 sm:h-6 sm:w-6" />
            </motion.a>

            {/* 5. Copy Email Quick-Action Button */}
            <motion.button
              type="button"
              onClick={() => handleCopy('obasi.godwill338@gmail.com', 'Email')}
              whileHover={{ y: -4, scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Copy Email"
              title="Click to copy email address"
              className="group relative flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl bg-[#040814]/90 border-2 border-[#0099ff] hover:border-[#00c8ff] text-[#0099ff] hover:text-white transition-colors duration-300 shadow-[0_0_15px_rgba(0,140,255,0.45)] hover:shadow-[0_0_25px_rgba(0,153,255,0.95)] cursor-pointer"
            >
              {copiedText === 'Email' ? (
                <Check className="h-5 w-5 sm:h-6 sm:w-6 text-emerald-400" />
              ) : (
                <Copy className="h-5 w-5 sm:h-6 sm:w-6" />
              )}
            </motion.button>
          </div>

          {/* Feedback Toast if Copied */}
          {copiedText && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="mb-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#0099ff]/20 border border-[#0099ff] text-xs font-mono text-[#38bdf8]"
            >
              <Check className="h-3.5 w-3.5" />
              <span>Copied {copiedText} to clipboard!</span>
            </motion.div>
          )}

          {/* Bottom Flank Graphics: BIGGER TOGETHER + CROWN (Exact match to reference) */}
          <div className="flex items-center gap-4 select-none pointer-events-none mt-2">
            <div className="relative h-20 w-44 sm:h-24 sm:w-52 filter drop-shadow-[0_0_20px_rgba(0,140,255,0.85)]">
              <Image
                src="/bigger-together.png"
                alt="Bigger Together"
                fill
                className="object-contain object-left"
              />
            </div>

            <div className="relative h-10 w-12 sm:h-12 sm:w-14 filter drop-shadow-[0_0_18px_rgba(0,140,255,0.95)] -rotate-12">
              <Image
                src="/crown-icon.png"
                alt="Crown"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
