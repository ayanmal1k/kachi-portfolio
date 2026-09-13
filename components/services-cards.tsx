'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, type Variants } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

interface ServiceCardData {
  id: string
  title: string
  desc: string
  icon: React.ReactNode
}

export function ServicesCards() {
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
    hidden: { opacity: 0, y: 35 },
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

  const topCards: ServiceCardData[] = [
    {
      id: 'community',
      title: 'COMMUNITY MANAGEMENT',
      desc: 'Manage, engage & grow your community across all platforms.',
      icon: (
        <div className="relative h-16 w-16 sm:h-20 sm:w-20 transition-transform duration-300 group-hover:scale-110 filter drop-shadow-[0_0_20px_rgba(0,153,255,0.95)]">
          <Image
            src="/services card icons/community.png"
            alt="Community Management"
            fill
            className="object-contain"
          />
        </div>
      ),
    },
    {
      id: 'marketing',
      title: 'KOL & MARKETING',
      desc: 'Promote your project through powerful influencers & networks.',
      icon: (
        <div className="relative h-16 w-16 sm:h-20 sm:w-20 transition-transform duration-300 group-hover:scale-110 filter drop-shadow-[0_0_20px_rgba(0,153,255,0.95)]">
          <Image
            src="/services card icons/announce.png"
            alt="KOL & Marketing"
            fill
            className="object-contain"
          />
        </div>
      ),
    },
    {
      id: 'ambassador',
      title: 'AMBASSADOR PROGRAM',
      desc: 'Build and manage ambassador programs that scale.',
      icon: (
        <div className="relative h-16 w-16 sm:h-20 sm:w-20 transition-transform duration-300 group-hover:scale-110 filter drop-shadow-[0_0_20px_rgba(0,153,255,0.95)]">
          <Image
            src="/services card icons/shieldd.png"
            alt="Ambassador Program"
            fill
            className="object-contain"
          />
        </div>
      ),
    },
  ]

  const bottomCards: ServiceCardData[] = [
    {
      id: 'raiding',
      title: 'RAIDING & SHILLING',
      desc: 'Pro raiding and organic shilling to boost visibility.',
      icon: (
        <div className="relative h-16 w-16 sm:h-20 sm:w-20 transition-transform duration-300 group-hover:scale-110 filter drop-shadow-[0_0_20px_rgba(0,153,255,0.95)]">
          <Image
            src="/services card icons/rockettt.png"
            alt="Raiding & Shilling"
            fill
            className="object-contain"
          />
        </div>
      ),
    },
    {
      id: 'strategy',
      title: 'STRATEGY & CONSULTING',
      desc: 'Provide expert advice and strategies for long-term growth.',
      icon: (
        <div className="relative h-16 w-16 sm:h-20 sm:w-20 transition-transform duration-300 group-hover:scale-110 filter drop-shadow-[0_0_20px_rgba(0,153,255,0.95)]">
          <Image
            src="/services card icons/chess.png"
            alt="Strategy & Consulting"
            fill
            className="object-contain"
          />
        </div>
      ),
    },
  ]

  const renderCard = (card: ServiceCardData) => {
    const isHovered = hoveredCard === card.id

    return (
      <motion.div
        key={card.id}
        variants={cardVariants}
        onMouseEnter={() => setHoveredCard(card.id)}
        onMouseLeave={() => setHoveredCard(null)}
        whileHover={{ y: -7, scale: 1.025 }}
        transition={{ type: 'spring', stiffness: 350, damping: 20 }}
        className="group relative flex flex-col justify-between p-[2px] cursor-pointer transition-all duration-300 w-full"
        style={{
          filter: isHovered
            ? 'drop-shadow(0 0 24px rgba(0, 153, 255, 0.95)) drop-shadow(0 0 45px rgba(0, 120, 255, 0.6))'
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

        {/* Inner Card Background (Deep Dark Glass) */}
        <div
          className="relative flex flex-col justify-between h-full min-h-[360px] sm:min-h-[390px] p-8 sm:p-10 lg:p-11 bg-[#040814]/95 group-hover:bg-[#050c1f]/90 backdrop-blur-xl transition-colors duration-300 overflow-hidden"
          style={{
            clipPath:
              'polygon(18.5px 0%, calc(100% - 18.5px) 0%, 100% 18.5px, 100% calc(100% - 18.5px), calc(100% - 18.5px) 100%, 18.5px 100%, 0% calc(100% - 18.5px), 0% 18.5px)',
          }}
        >


          {/* Subtle radial inner glow on hover */}
          <div className="absolute -top-10 -right-10 w-52 h-52 rounded-full bg-[#0099ff]/15 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

          {/* Top: Big Glowing Icon */}
          <div>
            <div className="mb-7 sm:mb-8 flex items-center">
              {card.icon}
            </div>

            {/* Title */}
            <h3 className="font-['MasterVictory'] text-2xl sm:text-3xl lg:text-[26px] xl:text-[28px] font-normal leading-snug tracking-normal text-white select-none drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)]">
              {card.title}
            </h3>

            {/* Description */}
            <p className="mt-4 font-mono text-sm sm:text-base text-zinc-300 leading-relaxed font-normal">
              {card.desc}
            </p>
          </div>


        </div>
      </motion.div>
    )
  }

  return (
    <section className="relative w-full bg-[#02050e] py-16 sm:py-20 lg:py-28 text-white overflow-hidden">
      {/* ============================================================ */}
      {/* BLUE PAINT SPLASHES BACKGROUND TEXTURE                      */}
      {/* ============================================================ */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-45 mix-blend-screen pointer-events-none transition-opacity duration-1000"
        style={{ backgroundImage: "url('/services-bg.jpg')" }}
        aria-hidden="true"
      />

      {/* Atmospheric Dark Overlays for Readability & Depth */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-[#02050e] via-black/40 to-[#02050e] pointer-events-none"
        aria-hidden="true"
      />

      {/* Background ambient lighting effects */}
      <div
        className="absolute top-1/4 left-10 h-[500px] w-[500px] rounded-full bg-[#0088ff]/15 blur-[150px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/4 right-10 h-[500px] w-[500px] rounded-full bg-[#00c8ff]/12 blur-[160px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-[1560px] px-6 sm:px-10 lg:px-14 xl:px-16">
        {/* ============================================================ */}
        {/* ROW 1: 3 CARDS (Original Chamfer Card Layout)                */}
        {/* ============================================================ */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 xl:gap-12 mb-12 lg:mb-16"
        >
          {topCards.map((card) => renderCard(card))}
        </motion.div>

        {/* ============================================================ */}
        {/* ROW 2: 2 CARDS CENTERED WITH FLANKING ASSETS                 */}
        {/* ============================================================ */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-center"
        >
          {/* Left Flank Graphic: strong-community.png (2 cols on lg) */}
          <div className="relative hidden lg:flex flex-col items-center justify-center lg:col-span-2 select-none pointer-events-none">
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="relative h-60 w-52 xl:h-72 xl:w-64 filter drop-shadow-[0_0_24px_rgba(0,140,255,0.9)]"
            >
              <Image
                src="/strong-community.png"
                alt="Strong Community Builds Strong Projects"
                fill
                className="object-contain object-center"
                priority
              />
            </motion.div>
          </div>

          {/* Bottom Card 1: 4 cols on lg, exactly matching top cards (4/12) */}
          <div className="lg:col-span-4 w-full">
            {renderCard(bottomCards[0])}
          </div>

          {/* Bottom Card 2: 4 cols on lg, exactly matching top cards (4/12) */}
          <div className="lg:col-span-4 w-full">
            {renderCard(bottomCards[1])}
          </div>

          {/* Right Flank Graphic: crown-icon.png and cross-icon.png (2 cols on lg) */}
          <div className="relative hidden lg:flex flex-col items-center justify-center lg:col-span-2 gap-6 select-none pointer-events-none">
            {/* Crown Icon */}
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              className="relative h-20 w-24 xl:h-24 xl:w-28 filter drop-shadow-[0_0_24px_rgba(0,140,255,0.95)]"
            >
              <Image
                src="/crown-icon.png"
                alt="Crown Icon"
                fill
                className="object-contain object-center"
                priority
              />
            </motion.div>

            {/* Cross Icon */}
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="relative h-24 w-28 xl:h-28 xl:w-32 filter drop-shadow-[0_0_24px_rgba(0,140,255,0.95)]"
            >
              <Image
                src="/cross-icon.png"
                alt="Cross Icon"
                fill
                className="object-contain object-center"
                priority
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Mobile View Flank Badges */}
        <div className="mt-12 flex lg:hidden items-center justify-around gap-6 select-none pointer-events-none">
          <div className="relative h-40 w-36 filter drop-shadow-[0_0_18px_rgba(0,140,255,0.9)]">
            <Image
              src="/strong-community.png"
              alt="Strong Community"
              fill
              className="object-contain object-center"
            />
          </div>
          <div className="flex flex-col items-center gap-4">
            <div className="relative h-16 w-18 filter drop-shadow-[0_0_18px_rgba(0,140,255,0.9)]">
              <Image
                src="/crown-icon.png"
                alt="Crown"
                fill
                className="object-contain object-center"
              />
            </div>
            <div className="relative h-18 w-20 filter drop-shadow-[0_0_18px_rgba(0,140,255,0.9)]">
              <Image
                src="/cross-icon.png"
                alt="Cross"
                fill
                className="object-contain object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
