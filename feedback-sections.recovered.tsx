'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence, type Variants } from 'framer-motion'
import { X, ZoomIn, MessageSquare, CheckCircle2 } from 'lucide-react'

interface FeedbackItem {
  id: string
  title: string
  author: string
  role?: string
  platform: 'telegram' | 'discord' | 'x'
  imageSrc: string
}

export function FeedbackSections() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  }

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 110,
        damping: 18,
      },
    },
  }

  // Section 1: Developer Feedback (3 screenshots from public/dev-feedback)
  const devFeedbackItems: FeedbackItem[] = [
    {
      id: 'dev-1',
      title: 'X Account Contributor & Strategy',
      author: 'Founder & Partner',
      role: 'Web3 Builder',
      platform: 'telegram',
      imageSrc: '/dev-feedback/download.jfif',
    },
    {
      id: 'dev-2',
      title: 'High-Standard Collaboration',
      author: 'Project Lead',
      role: 'Verified Developer',
      platform: 'telegram',
      imageSrc: '/dev-feedback/download (1).jfif',
    },
    {
      id: 'dev-3',
      title: 'Major Community Scale',
      author: 'Core Dev & Admin',
      role: 'Multi-Project Lead',
      platform: 'telegram',
      imageSrc: '/dev-feedback/download (58).jfif',
    },
  ]

  // Section 2: Community Feedback (5 screenshots from public/people-feedback)
  const communityTopItems: FeedbackItem[] = [
    {
      id: 'comm-1',
      title: 'Genuine Vibe & Leadership',
      author: 'Community Member',
      role: 'Alpha Group Member',
      platform: 'telegram',
      imageSrc: '/people-feedback/download.jfif',
    },
    {
      id: 'comm-2',
      title: 'Morale & Trust Motivation',
      author: 'Ecosystem Supporter',
      role: 'Verified Contributor',
      platform: 'telegram',
      imageSrc: '/people-feedback/download (1).jfif',
    },
    {
      id: 'comm-3',
      title: 'Respect for Work & Strategy',
      author: 'Network Partner',
      role: 'Long-time Holder',
      platform: 'telegram',
      imageSrc: '/people-feedback/download (2).jfif',
    },
  ]

  const communityBottomItems: FeedbackItem[] = [
    {
      id: 'comm-4',
      title: 'Ambassador & Growth Praise',
      author: 'Ambassador Ally',
      role: 'Vanguard Member',
      platform: 'telegram',
      imageSrc: '/people-feedback/download (3).jfif',
    },
    {
      id: 'comm-5',
      title: 'Organic Bag Worker & Grinder',
      author: 'Chili',
      role: 'Dedicated Contributor',
      platform: 'telegram',
      imageSrc: '/people-feedback/people-feedback-chili.jpg',
    },
  ]

  const renderFeedbackCard = (item: FeedbackItem) => {
    const isHovered = hoveredCard === item.id

    return (
      <motion.div
        key={item.id}
        variants={cardVariants}
        onMouseEnter={() => setHoveredCard(item.id)}
        onMouseLeave={() => setHoveredCard(null)}
        onClick={() => setSelectedImage(item.imageSrc)}
        whileHover={{ y: -7, scale: 1.02 }}
        transition={{ type: 'spring', stiffness: 350, damping: 20 }}
        className="group relative flex flex-col justify-between p-[2px] cursor-pointer transition-all duration-300 w-full"
        style={{
          filter: isHovered
            ? 'drop-shadow(0 0 24px rgba(0, 153, 255, 0.95)) drop-shadow(0 0 40px rgba(0, 120, 255, 0.6))'
            : 'drop-shadow(0 0 14px rgba(0, 140, 255, 0.75))',
        }}
      >
        {/* Outer Chamfer Border Frame (Glowing POW Blue) */}
        <div
          className="absolute inset-0 bg-[#0099ff] transition-all duration-300 group-hover:bg-[#00c8ff]"
          style={{
            clipPath:
              'polygon(20px 0%, calc(100% - 20px) 0%, 100% 20px, 100% calc(100% - 20px), calc(100% - 20px) 100%, 20px 100%, 0% calc(100% - 20px), 0% 20px)',
          }}
        />

        {/* Inner Card Container */}
        <div
          className="relative flex flex-col justify-between h-full bg-[#040814]/95 group-hover:bg-[#050c1f]/90 backdrop-blur-xl transition-colors duration-300 overflow-hidden p-5 sm:p-6"
          style={{
            clipPath:
              'polygon(18.5px 0%, calc(100% - 18.5px) 0%, 100% 18.5px, 100% calc(100% - 18.5px), calc(100% - 18.5px) 100%, 18.5px 100%, 0% calc(100% - 18.5px), 0% 18.5px)',
          }}
        >
          {/* Header Bar inside card */}
          <div className="flex items-center justify-between border-b border-zinc-800/80 pb-3 mb-4">
            <div className="flex items-center gap-2.5">
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#0099ff]/20 text-[#00d2ff] border border-[#0099ff]/40">
                <MessageSquare className="h-3.5 w-3.5" />
              </div>
              <div className="flex flex-col">
                <span className="font-mono text-xs font-bold text-white flex items-center gap-1">
                  {item.author}
                  <CheckCircle2 className="h-3 w-3 text-[#00d2ff] inline" />
                </span>
                <span className="font-mono text-[10px] text-zinc-400">
                  {item.role || 'Verified Proof'}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-1 font-mono text-[10px] text-[#38bdf8] bg-[#0088ff]/10 px-2 py-0.5 rounded border border-[#0099ff]/30">
              <ZoomIn className="h-3 w-3" />
              <span>EXPAND</span>
            </div>
          </div>

          {/* Screenshot Container */}
          <div className="relative w-full h-[380px] sm:h-[420px] overflow-hidden rounded-xl bg-black/80 border border-zinc-800/60">
            <Image
              src={item.imageSrc}
              alt={item.title}
              fill
              className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
            />
            {/* Subtle Gradient Shadow at bottom */}
            <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#040814] via-[#040814]/40 to-transparent pointer-events-none" />

            {/* Hover overlay indicator */}
            <div className="absolute inset-0 bg-[#0099ff]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
              <span className="font-mono text-xs font-bold text-white bg-black/80 px-3 py-1.5 rounded-full border border-[#00d2ff]/60 shadow-[0_0_15px_rgba(0,180,255,0.6)]">
                Click to View Full Chat
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    )
  }

  return (
    <div className="relative w-full bg-[#02050e] text-white overflow-hidden selection:bg-[#0099ff] selection:text-white">
      {/* ============================================================ */}
      {/* SHARED BLUE SPLASHES BACKGROUND TEXTURE                      */}
      {/* ============================================================ */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-45 mix-blend-screen pointer-events-none"
        style={{ backgroundImage: "url('/services-bg.jpg')" }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-[#02050e] via-black/40 to-[#02050e] pointer-events-none"
        aria-hidden="true"
      />

      {/* Atmospheric Ambient Glow Spheres */}
      <div
        className="absolute top-1/6 left-10 h-[600px] w-[600px] rounded-full bg-[#0088ff]/12 blur-[170px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/2 right-10 h-[600px] w-[600px] rounded-full bg-[#00d2ff]/10 blur-[170px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/6 left-1/4 h-[600px] w-[600px] rounded-full bg-[#0066ff]/12 blur-[180px] pointer-events-none"
        aria-hidden="true"
      />

      {/* ============================================================ */}
      {/* SECTION 1: DEVELOPER FEEDBACK                                */}
      {/* ============================================================ */}
      <section className="relative z-10 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1560px] px-6 sm:px-10 lg:px-14 xl:px-16">
          {/* Header Row */}
          <div className="mb-12 sm:mb-14 lg:mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div className="flex flex-col items-start max-w-2xl">
              <span className="mb-3 font-mono text-xs sm:text-sm font-semibold tracking-[0.25em] text-[#38bdf8] uppercase drop-shadow-[0_0_8px_rgba(56,189,248,0.7)]">
                REAL PEOPLE / REAL FEEDBACK
              </span>

              <div className="relative flex items-center gap-3">
                <h2 className="font-['MasterVictory'] text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-normal leading-tight tracking-normal select-none">
                  <span className="text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)]">DEVELOPER </span>
                  <span className="text-[#0099ff] drop-shadow-[0_0_24px_rgba(0,140,255,0.9)]">FEEDBACK</span>
                </h2>

                {/* Crown Icon next to title */}
                <div className="relative h-10 w-12 sm:h-12 sm:w-14 filter drop-shadow-[0_0_18px_rgba(0,140,255,0.95)] -rotate-12 select-none pointer-events-none">
                  <Image src="/crown-icon.png" alt="Crown" fill className="object-contain" />
                </div>
              </div>

              <p className="mt-4 font-mono text-xs sm:text-sm text-zinc-300 max-w-xl leading-relaxed">
                Builders, founders and devs who&apos;ve worked with us. Here&apos;s what they had to say.
              </p>
            </div>

            {/* Top Right Sticker: TRUSTED BY BUILDERS WORLDWIDE + Cross Icon */}
            <div className="relative hidden md:flex flex-col items-end select-none pointer-events-none">
              <div className="relative h-12 w-14 filter drop-shadow-[0_0_16px_rgba(0,140,255,0.95)] mb-1">
                <Image src="/cross-icon.png" alt="Cross" fill className="object-contain" />
              </div>
              <div className="font-['MasterVictory'] text-xl sm:text-2xl lg:text-3xl text-[#0099ff] text-right -rotate-3 filter drop-shadow-[0_0_16px_rgba(0,140,255,0.9)]">
                TRUSTED BY BUILDERS<br />WORLDWIDE
              </div>
            </div>
          </div>

          {/* 3 Developer Feedback Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 xl:gap-12"
          >
            {devFeedbackItems.map((item) => renderFeedbackCard(item))}
          </motion.div>
        </div>
      </section>

      {/* Cyber Section Divider */}
      <div className="relative w-full max-w-[1560px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16 my-8 pointer-events-none">
        <div className="relative h-px w-full bg-gradient-to-r from-transparent via-[#0099ff]/50 to-transparent">
          <div className="absolute left-1/2 -translate-x-1/2 -top-2 flex items-center gap-1 text-[#00d2ff]">
            <span className="h-4 w-4 rotate-45 border-r border-b border-[#00d2ff] filter drop-shadow-[0_0_8px_rgba(0,210,255,0.9)]" />
          </div>
        </div>
      </div>

      {/* ============================================================ */}
      {/* SECTION 2: COMMUNITY FEEDBACK                                */}
      {/* ============================================================ */}
      <section className="relative z-10 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1560px] px-6 sm:px-10 lg:px-14 xl:px-16">
          {/* Header Row */}
          <div className="mb-12 sm:mb-14 lg:mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div className="flex flex-col items-start max-w-2xl">
              <span className="mb-3 font-mono text-xs sm:text-sm font-semibold tracking-[0.25em] text-[#38bdf8] uppercase drop-shadow-[0_0_8px_rgba(56,189,248,0.7)]">
                COMMUNITY VOICES
              </span>

              <h2 className="font-['MasterVictory'] text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-normal leading-tight tracking-normal select-none">
                <span className="text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)]">COMMUNITY </span>
                <span className="text-[#0099ff] drop-shadow-[0_0_24px_rgba(0,140,255,0.9)]">FEEDBACK</span>
              </h2>

              <p className="mt-4 font-mono text-xs sm:text-sm text-zinc-300 max-w-xl leading-relaxed">
                From active members to long-time supporters, our community keeps the energy alive.
              </p>
            </div>

            {/* Top Right Sticker: REAL PEOPLE REAL SUPPORT with Crown */}
            <div className="relative hidden md:flex flex-col items-end select-none pointer-events-none">
              <div className="relative h-12 w-14 filter drop-shadow-[0_0_18px_rgba(0,140,255,0.95)] mb-1 rotate-6">
                <Image src="/crown-icon.png" alt="Crown" fill className="object-contain" />
              </div>
              <div className="font-['MasterVictory'] text-xl sm:text-2xl lg:text-3xl text-[#0099ff] text-right rotate-2 filter drop-shadow-[0_0_16px_rgba(0,140,255,0.9)]">
                REAL PEOPLE<br />REAL SUPPORT
              </div>
            </div>
          </div>

          {/* ROW 1: 3 CARDS */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 xl:gap-12 mb-12 lg:mb-16"
          >
            {communityTopItems.map((item) => renderFeedbackCard(item))}
          </motion.div>

          {/* ROW 2: 2 CARDS CENTERED WITH FLANKING ASSETS (Exact Same Column Width) */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-center"
          >
            {/* Left Flank Graphic: bigger-together.png + Crown */}
            <div className="relative hidden lg:flex flex-col items-center justify-center lg:col-span-2 select-none pointer-events-none gap-2">
              <div className="relative h-12 w-14 filter drop-shadow-[0_0_18px_rgba(0,140,255,0.95)] -rotate-12">
                <Image src="/crown-icon.png" alt="Crown" fill className="object-contain" />
              </div>
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="relative h-44 w-44 xl:h-52 xl:w-52 filter drop-shadow-[0_0_24px_rgba(0,140,255,0.9)]"
              >
                <Image
                  src="/bigger-together.png"
                  alt="Bigger Together"
                  fill
                  className="object-contain object-center"
                  priority
                />
              </motion.div>
            </div>

            {/* Bottom Card 1: 4 cols on lg, exactly matching top cards (4/12) */}
            <div className="lg:col-span-4 w-full">
              {renderFeedbackCard(communityBottomItems[0])}
            </div>

            {/* Bottom Card 2: 4 cols on lg, exactly matching top cards (4/12) */}
            <div className="lg:col-span-4 w-full">
              {renderFeedbackCard(communityBottomItems[1])}
            </div>

            {/* Right Flank Graphic: YOUR SUPPORT FUELS US with curved arrow */}
            <div className="relative hidden lg:flex flex-col items-center justify-center lg:col-span-2 gap-3 select-none pointer-events-none">
              <div className="font-['MasterVictory'] text-2xl xl:text-3xl text-[#0099ff] text-center -rotate-6 filter drop-shadow-[0_0_18px_rgba(0,140,255,0.95)]">
                YOUR<br />SUPPORT<br />FUELS US
              </div>
              <svg
                width="60"
                height="60"
                viewBox="0 0 60 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-[#00d2ff] filter drop-shadow-[0_0_12px_rgba(0,210,255,0.9)]"
              >
                <path
                  d="M10 15 C 30 10, 45 25, 45 45"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <path
                  d="M35 45 L 45 45 L 45 35"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </motion.div>

          {/* Mobile View Flank Badges */}
          <div className="mt-12 flex lg:hidden items-center justify-around gap-6 select-none pointer-events-none">
            <div className="relative h-28 w-32 filter drop-shadow-[0_0_18px_rgba(0,140,255,0.9)]">
              <Image
                src="/bigger-together.png"
                alt="Bigger Together"
                fill
                className="object-contain object-center"
              />
            </div>
            <div className="font-['MasterVictory'] text-xl text-[#0099ff] filter drop-shadow-[0_0_14px_rgba(0,140,255,0.9)] text-center">
              YOUR SUPPORT<br />FUELS US
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* LIGHTBOX MODAL: FULL-RES CHAT PROOF PREVIEW                  */}
      {/* ============================================================ */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 sm:p-6 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[90vh] max-w-lg w-full overflow-hidden rounded-2xl border-2 border-[#0099ff] bg-black p-2 shadow-[0_0_50px_rgba(0,153,255,0.7)]"
            >
              <button
                type="button"
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/80 text-white border border-white/20 hover:bg-white hover:text-black transition-colors"
                aria-label="Close modal"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="relative w-full max-h-[85vh] h-[650px] overflow-y-auto rounded-xl">
                <Image
                  src={selectedImage}
                  alt="Enlarged chat proof"
                  fill
                  className="object-contain object-center"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
