import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import {
  ArrowLeft,
  ShieldCheck,
  CheckCircle2,
  ExternalLink,
  Terminal,
  Quote,
  Star,
  Mail,
  Copy,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Documentation & Dossier',
  description:
    'Comprehensive documentation, capabilities, verified proof of work, case studies, and contact channels for Kachi.',
  alternates: {
    canonical: 'https://kachi-web3.netlify.app/docs',
  },
}

export default function DocsPage() {
  const roles = [
    {
      category: 'COMMUNITY & MODERATION',
      icon: '/services card icons/community.png',
      items: [
        {
          role: 'Community Manager',
          summary: 'Community architecture, active chat culture & holder retention',
          details: [
            'Set up Telegram and Discord groups with proper bot hygiene and onboarding workflows',
            'Lead organic daily conversations, community AMAs, voice spaces, and announcements',
            'Foster a positive, energetic holder community that believes in the project long-term',
          ],
        },
        {
          role: 'Moderator',
          summary: 'Global chat protection, anti-FUD enforcement & member safety',
          details: [
            'Continuous group monitoring to protect members against phishing, impersonators, and drainer links',
            'Firm, respectful enforcement of group guidelines and de-escalation of coordinated FUD',
            'Direct communication bridge between community members and project founders',
          ],
        },
      ],
    },
    {
      category: 'X (TWITTER) & CREATIVE',
      icon: '/services card icons/announce.png',
      items: [
        {
          role: 'X (Twitter) Manager',
          summary: 'Narrative engineering, viral posts & community Spaces',
          details: [
            'Management of official project accounts, scheduled announcements, and Spaces',
            'Crafting high-hook posts and threads that translate project utility and milestones into engagement',
            'Coordinating with crypto influencers and amplifying mentions across Crypto Twitter (CT)',
          ],
        },
        {
          role: 'Graphics Designer',
          summary: 'Bespoke announcement banners, memes & visual polish',
          details: [
            'Custom announcement banners, partnership posters, and milestone graphics',
            'Viral meme generation aligned with crypto humor and project culture',
            'Consistent visual identity matching project branding and aesthetic standards',
          ],
        },
      ],
    },
    {
      category: 'AMBASSADOR & NETWORK BUILDING',
      icon: '/services card icons/shieldd.png',
      items: [
        {
          role: 'Ambassador',
          summary: 'Ecosystem representation, regional outreach & advocacy',
          details: [
            'Championing project narrative across diverse communities and alpha groups',
            'Onboarding new believers and long-term supporters into the ecosystem',
            'Representing the brand with authenticity and dedication across Web3',
          ],
        },
        {
          role: 'Network Builder',
          summary: 'Cross-project connections, introductions & partnerships',
          details: [
            'Reaching out to complementary projects, communities, and founders for mutual growth',
            'Arranging joint AMAs, co-marketing, and collaborative community events',
            'Connecting builders with strategic community nodes and high-conviction allies',
          ],
        },
      ],
    },
    {
      category: 'RAIDS & ENGAGEMENT',
      icon: '/services card icons/rockettt.png',
      items: [
        {
          role: 'Raider / Engagement',
          summary: 'Coordinated organic raids, quote storms & comment visibility',
          details: [
            'Organizing rapid-response raid swarms on key tweets and partner announcements',
            'Dominating comment sections on major Crypto Twitter accounts to drive organic discovery',
            'Maintaining high raid velocity and celebration momentum during chart rallies',
          ],
        },
        {
          role: 'Shiller',
          summary: 'Authentic alpha seeding & word-of-mouth awareness',
          details: [
            'Organic mentions and genuine discussions across high-quality Telegram alpha channels',
            'Engaging discussions on DexScreener comments, community forums, and crypto hubs',
            'Spreading organic awareness without spammy behavior that hurts project reputation',
          ],
        },
      ],
    },
    {
      category: 'GROWTH STRATEGY & ADVISORY',
      icon: '/services card icons/chess.png',
      items: [
        {
          role: 'Growth Strategist',
          summary: 'Launch funnels, campaign planning & holder growth',
          details: [
            'Structuring pre-launch hype generation and post-launch sustainability strategies',
            'Setting up organic engagement initiatives, community competitions, and giveaways',
            'Advising on timing for key announcements to maximize community attention and volume',
          ],
        },
        {
          role: 'Strategic Advisor',
          summary: 'Straightforward founder guidance & crisis handling',
          details: [
            'Providing high-candor feedback on marketing ideas, roadmap pacing, and community sentiment',
            'Managing community expectations and calming fears during volatile market phases',
            'Hands-on support to ensure founders stay focused while community operations run smoothly',
          ],
        },
      ],
    },
  ]

  // Verified project case studies directly from project proof screenshots
  const caseStudies = [
    {
      number: '01',
      project: 'STC — Save The Children',
      role: 'Gate Guardian',
      metric: '174 Members',
      image: '/projects/JPG/proof-stc-C9-4gdCa.jpg',
      desc: 'Official Gate Guardian for STC. Handled entrance verification, blocked scam bots, and ensured secure onboarding for genuine members.',
    },
    {
      number: '02',
      project: 'GOJOSOL (Solana)',
      role: 'X Manager',
      metric: '295 Members // 83 Online',
      image: '/projects/JPG/proof-1-CFUm39SE.jpg',
      desc: 'Dedicated X (Twitter) Manager for GOJOSOL. Ran official Twitter narrative, scheduled posts, and connected Telegram community with CT.',
    },
    {
      number: '03',
      project: 'The Nest Chain ($chain)',
      role: 'Hypeman',
      metric: '192 Members // Active Chat',
      image: '/projects/JPG/proof-3-Btf0wn7d.jpg',
      desc: 'Official Hypeman for The Nest Chain (t.me/thenestchainl). Maintained daily organic chat energy, voice chat hype, and community morale.',
    },
    {
      number: '04',
      project: 'PolSol Bridge',
      role: 'Admin',
      metric: '113 Members // Bridge Support',
      image: '/projects/JPG/proof-4-BJl36utA.jpg',
      desc: 'Telegram group administrator for PolSol Bridge (t.me/polsol_bridge). Managed user support for bridge transactions and kept the group clean.',
    },
    {
      number: '05',
      project: 'House of Memes / ValerisFi',
      role: 'DEV TEAM',
      metric: '241 Members // 88 Online',
      image: '/projects/JPG/proof-5-BRqNyq5m.jpg',
      desc: 'Recognized on the official DEV TEAM for House of Memes / ValerisFi (valerisfi.vercel.app, @ValerisFi). Co-led public discussions and growth strategy.',
    },
    {
      number: '06',
      project: "Can't Outlaw Us ($USA)",
      role: 'Admin',
      metric: '51 Members // Active Group',
      image: '/projects/JPG/proof-6-BMCAcmbT.jpg',
      desc: 'Telegram Administrator for Can\'t Outlaw Us ($USA). Governed group rules, led raid swarms, and protected the chat from coordinated FUD.',
    },
    {
      number: '07',
      project: 'Elonious Meximus',
      role: 'Content Lead',
      metric: '112 Members',
      image: '/projects/JPG/proof-7-6QBkgQu9.jpg',
      desc: 'Content Lead for Elonious Meximus ("The Ultimate Elon-Inspired Meme Coin"). Created viral memes, announcements, and trending copy.',
    },
    {
      number: '08',
      project: 'World War Pee',
      role: 'MOD (Head Moderator)',
      metric: '179 Members',
      image: '/projects/JPG/proof-8-Tx_niwDG.jpg',
      desc: 'Head Moderator for World War Pee (t.me/WorldWarPee). Maintained 24/7 chat cleanliness, eliminated spam links, and guided new joiners.',
    },
  ]

  // Verified ambassador program acceptances directly from official emails & leadership DMs
  const ambassadorProofs = [
    {
      number: '01',
      project: 'Quant AI',
      role: 'Wave 1 Ambassador',
      issuer: 'Bartosz Bury (@Bartorinho)',
      badge: 'OFFICIAL EMAIL ACCEPTANCE',
      image: '/ambassador/ambassador-feedback-2.jpg',
      quote:
        "You've been accepted into the Quant AI Ambassador Program and are now part of the first wave helping build momentum around Quant AI.",
      desc: 'Selected for the exclusive Wave 1 cohort to steer official content directions, priority whitelist allocations, and early-stage momentum.',
    },
    {
      number: '02',
      project: 'AxioMarket',
      role: 'Official Ambassador',
      issuer: 'AxioMarket Operations',
      badge: 'TESTNET ROLLOUT VERIFIED',
      image: '/ambassador/ambassador-feedback-3.jpg',
      quote:
        "Welcome, and congratulations on becoming an official ambassador. We're excited to have you on board and look forward to building with you.",
      desc: 'Appointed during AxioMarket live testnet rollout to drive early user testing, feedback loops, and decentralized marketplace adoption.',
    },
    {
      number: '03',
      project: 'Aura World',
      role: 'Ecosystem Ambassador',
      issuer: 'Aura World Leadership (@raworld)',
      badge: 'FOUNDER DIRECT OUTREACH',
      image: '/ambassador/ambassador-feedback-1.jpg',
      quote:
        'raworld: "Hello how are you? We are thinking of bringing you in are you interested" — Kachi: "Yes man I\'m interested"',
      desc: 'Direct founder outreach and personal invitation to represent the brand, onboard builders, and spearhead community growth.',
    },
  ]

  // Verified quotes from actual developer and community chat screenshots
  const verifiedReceipts = [
    {
      author: 'Founder & Partner',
      badge: 'OFFICIAL X ACCOUNT ACCESS',
      quote:
        "Hey bro, I've given you contributor access to the X account. Really appreciate the work you've been putting in already - I'm genuinely excited to build and work together with you on this. I have a lot of trust in what you're doing, so you've got the green light from my side. Let's keep the tone aligned with the vision: Organic growth & Strong community. Let's build something real here.",
    },
    {
      author: 'Project Lead',
      badge: 'COLLABORATION PRAISE',
      quote:
        "Hi Kachi, Wow, what a great job you've done. You seem super professional. Yes, you're right in what you write. How would you like to collaborate with me? Just so we can make an expectation agreement.",
    },
    {
      author: 'Core Dev & Admin',
      badge: 'SCALE TO 1K REAL USERS',
      quote:
        "You're doing a great job, you have no idea how much I respect you and the other admins for your work. The most important thing for us is to build the community to at least the first thousand real people... Moreover, I saw your Twitter page. You have some pretty serious projects that you manage, with 50,000, 70,000, and 20,000 subscribers. So, I'm sure you can handle it.",
    },
    {
      author: 'Ecosystem Contributor',
      badge: 'COMMUNITY RECOGNITION',
      quote:
        "You are an inspiration to me in this space, anytime I see you bagging gigs it gives me morale of never giving up. You must be trustworthy that's why you are scaling in all you do!",
    },
  ]

  return (
    <main className="min-h-screen bg-[#02050e] text-white selection:bg-[#0099ff] selection:text-white">
      {/* Background Ambience */}
      <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat opacity-30 mix-blend-screen pointer-events-none"
        style={{ backgroundImage: "url('/services-bg.jpg')" }}
        aria-hidden="true"
      />
      <div
        className="fixed inset-0 bg-gradient-to-b from-[#02050e] via-black/50 to-[#02050e] pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-[1560px] px-6 sm:px-10 lg:px-14 xl:px-16 py-8 sm:py-12">
        {/* ============================================================ */}
        {/* TOP NAVIGATION / BREADCRUMB BAR                              */}
        {/* ============================================================ */}
        <header className="mb-10 sm:mb-14 flex items-center justify-between border-b border-zinc-800/80 pb-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-mono text-xs sm:text-sm font-semibold text-zinc-300 hover:text-[#0099ff] transition-colors group"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1 text-[#0099ff]" />
            <span>RETURN TO MAIN PORTFOLIO</span>
          </Link>

          <div className="flex items-center gap-2 font-mono text-[11px] text-[#38bdf8] bg-[#0099ff]/10 border border-[#0099ff]/30 px-3 py-1.5 rounded-full">
            <Terminal className="h-3.5 w-3.5" />
            <span>KACHI // OFFICIAL DOCS</span>
          </div>
        </header>

        {/* ============================================================ */}
        {/* HERO TITLE & DOSSIER HEADER                                 */}
        {/* ============================================================ */}
        <div className="mb-14 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0099ff]/15 border border-[#0099ff]/40 text-[#38bdf8] font-mono text-xs font-semibold uppercase tracking-wider mb-4">
            <span className="h-2 w-2 rounded-full bg-[#0099ff] animate-pulse" />
            <span>KACHI DOSSIER &amp; SPECIFICATION</span>
          </div>

          <h1 className="font-['MasterVictory'] text-4xl sm:text-6xl lg:text-7xl font-normal leading-tight select-none">
            <span className="text-white">KACHI </span>
            <span className="text-[#0099ff] drop-shadow-[0_0_28px_rgba(0,140,255,0.95)]">DOCUMENTATION</span>
          </h1>

          <p className="mt-4 font-mono text-sm sm:text-base text-zinc-300 leading-relaxed max-w-3xl">
            A straightforward overview of Kachi&apos;s Web3 roles, verified project experience from real screenshots, developer testimonials, and direct contact channels.
          </p>

          <div className="mt-4 inline-flex items-center gap-2 font-mono text-xs text-zinc-400">
            <span>Live Portfolio:</span>
            <a
              href="https://kachi-web3.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0099ff] hover:underline"
            >
              https://kachi-web3.netlify.app
            </a>
          </div>
        </div>

        {/* ============================================================ */}
        {/* SECTION 1: ABOUT KACHI & CORE PHILOSOPHY                     */}
        {/* ============================================================ */}
        <section className="mb-16 rounded-3xl bg-[#040814]/90 border border-zinc-800/80 p-8 sm:p-10 backdrop-blur-xl">
          <div className="max-w-3xl">
            <span className="font-mono text-xs text-[#38bdf8] uppercase tracking-[0.2em] font-semibold">
              // 01 ABOUT KACHI
            </span>
            <h2 className="font-['MasterVictory'] text-3xl sm:text-4xl text-white mt-2 mb-4">
              PROOF OF WORK OVER PROMISES
            </h2>

            <div className="space-y-3 font-mono text-sm text-zinc-300 leading-relaxed">
              <p>
                In Web3, real results speak louder than empty roadmaps. Kachi works directly with crypto projects, founders, and dev teams to build engaged communities, run active moderation, coordinate raids, manage Twitter/X accounts, and provide ground-level strategic guidance.
              </p>
              <p>
                Whether launching a new token, scaling an existing ecosystem, or keeping a 24/7 Telegram chat clean and hyped, Kachi brings hands-on hustle, reliability, and genuine passion to every project.
              </p>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* SECTION 2: ROLES & CAPABILITIES                              */}
        {/* ============================================================ */}
        <section className="mb-16">
          <div className="mb-8">
            <span className="font-mono text-xs text-[#38bdf8] uppercase tracking-[0.2em] font-semibold">
              // 02 ROLES &amp; CAPABILITIES
            </span>
            <h2 className="font-['MasterVictory'] text-3xl sm:text-4xl text-white mt-2">
              WHAT KACHI DOES
            </h2>
            <p className="mt-2 font-mono text-sm text-zinc-400 max-w-2xl">
              Specialized services tailored for Web3 communities, token launches, and ongoing project growth.
            </p>
          </div>

          <div className="space-y-6">
            {roles.map((pillar, pIdx) => (
              <div
                key={pIdx}
                className="rounded-2xl bg-[#040814]/90 border border-zinc-800/80 p-6 sm:p-8 backdrop-blur-xl hover:border-[#0099ff]/50 transition-colors"
              >
                <div className="flex items-center gap-4 border-b border-zinc-800/80 pb-4 mb-6">
                  <div className="relative h-11 w-11 flex-shrink-0 filter drop-shadow-[0_0_12px_rgba(0,140,255,0.7)]">
                    <Image src={pillar.icon} alt={pillar.category} fill className="object-contain" />
                  </div>
                  <div>
                    <h3 className="font-mono text-base sm:text-lg font-bold text-white tracking-wide">
                      {pillar.category}
                    </h3>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {pillar.items.map((item, iIdx) => (
                    <div
                      key={iIdx}
                      className="p-5 rounded-xl bg-black/50 border border-zinc-800/60 flex flex-col justify-between"
                    >
                      <div>
                        <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#0099ff]/15 border border-[#0099ff]/30 text-[#38bdf8] font-mono text-xs font-semibold mb-2.5">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#0099ff]" />
                          {item.role}
                        </div>
                        <p className="font-mono text-xs font-medium text-zinc-200 mb-3">
                          {item.summary}
                        </p>
                        <ul className="space-y-1.5">
                          {item.details.map((bullet, bIdx) => (
                            <li
                              key={bIdx}
                              className="font-mono text-[11px] text-zinc-400 flex items-start gap-2 leading-relaxed"
                            >
                              <CheckCircle2 className="h-3.5 w-3.5 text-[#0099ff] flex-shrink-0 mt-0.5" />
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ============================================================ */}
        {/* SECTION 3: 8 VERIFIED PROJECTS WITH EXACT ROLES              */}
        {/* ============================================================ */}
        <section className="mb-16">
          <div className="mb-8 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
            <div>
              <span className="font-mono text-xs text-[#38bdf8] uppercase tracking-[0.2em] font-semibold">
                // 03 VERIFIED PROJECT RECEIPTS
              </span>
              <h2 className="font-['MasterVictory'] text-3xl sm:text-4xl text-white mt-2">
                PROJECTS &amp; ROLES
              </h2>
            </div>
            <span className="font-mono text-xs text-zinc-400">
              [ 8 VERIFIED PROOFS FROM ACTUAL GROUPS ]
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {caseStudies.map((cs) => (
              <div
                key={cs.number}
                className="group rounded-2xl bg-[#040814]/90 border border-zinc-800/80 p-4 hover:border-[#0099ff] transition-all flex flex-col justify-between shadow-[0_4px_20px_rgba(0,0,0,0.6)] hover:shadow-[0_0_24px_rgba(0,153,255,0.3)]"
              >
                <div>
                  <div className="relative w-full h-48 overflow-hidden rounded-xl bg-black border border-zinc-800/80 mb-3">
                    <Image
                      src={cs.image}
                      alt={cs.project}
                      fill
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Top Bar: Case number & metric */}
                  <div className="flex items-center justify-between text-[10px] font-mono text-zinc-400 mb-1.5">
                    <span className="text-zinc-500">#{cs.number}</span>
                    <span className="text-[#38bdf8] font-bold">{cs.metric}</span>
                  </div>

                  {/* Project Name */}
                  <h4 className="font-mono text-sm font-bold text-white mb-2 group-hover:text-[#0099ff] transition-colors leading-tight">
                    {cs.project}
                  </h4>

                  {/* Kachi's Role Badge extracted from screenshot */}
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#0099ff]/15 border border-[#0099ff]/40 text-[#38bdf8] font-mono text-[11px] font-bold mb-3">
                    <span>ROLE:</span>
                    <span className="text-white">{cs.role}</span>
                  </div>

                  {/* Description of Scope */}
                  <p className="font-mono text-[11px] text-zinc-400 leading-relaxed">
                    {cs.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-zinc-800/70 flex items-center justify-between font-mono text-[10px] text-zinc-500">
                  <span>Telegram Receipt</span>
                  <span className="text-emerald-400 font-semibold">VERIFIED</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ============================================================ */}
        {/* SECTION 4: OFFICIAL AMBASSADOR PROOFS                        */}
        {/* ============================================================ */}
        <section className="mb-16">
          <div className="mb-8 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
            <div>
              <span className="font-mono text-xs text-[#38bdf8] uppercase tracking-[0.2em] font-semibold">
                // 04 AMBASSADOR PROOFS
              </span>
              <h2 className="font-['MasterVictory'] text-3xl sm:text-4xl text-white mt-2">
                OFFICIAL AMBASSADOR PROOFS
              </h2>
            </div>
            <span className="font-mono text-xs text-zinc-400">
              [ 3 VERIFIED PROGRAM RECEIPTS ]
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ambassadorProofs.map((amb) => (
              <div
                key={amb.number}
                className="group rounded-2xl bg-[#040814]/90 border border-zinc-800/80 p-4 hover:border-[#0099ff] transition-all flex flex-col justify-between shadow-[0_4px_20px_rgba(0,0,0,0.6)] hover:shadow-[0_0_24px_rgba(0,153,255,0.3)]"
              >
                <div>
                  <div className="relative w-full h-52 overflow-hidden rounded-xl bg-black border border-zinc-800/80 mb-3">
                    <Image
                      src={amb.image}
                      alt={`${amb.project} Ambassador Proof`}
                      fill
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="flex items-center justify-between text-[10px] font-mono text-zinc-400 mb-1.5">
                    <span className="text-[#38bdf8] font-bold">{amb.badge}</span>
                    <span className="text-zinc-500">{amb.issuer}</span>
                  </div>

                  <h4 className="font-mono text-base font-bold text-white mb-2 group-hover:text-[#0099ff] transition-colors leading-tight">
                    {amb.project}
                  </h4>

                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#0099ff]/15 border border-[#0099ff]/40 text-[#38bdf8] font-mono text-[11px] font-bold mb-3">
                    <span>ROLE:</span>
                    <span className="text-white">{amb.role}</span>
                  </div>

                  <p className="font-mono text-[11px] text-zinc-300 leading-relaxed mb-3">
                    {amb.desc}
                  </p>

                  <div className="p-3 rounded-lg bg-black/60 border border-zinc-800/80 text-[11px] font-mono text-zinc-400 italic">
                    &ldquo;{amb.quote}&rdquo;
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-zinc-800/70 flex items-center justify-between font-mono text-[10px] text-zinc-500">
                  <span>Documented Receipt</span>
                  <span className="text-emerald-400 font-semibold">VERIFIED</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ============================================================ */}
        {/* SECTION 5: CLIENT & DEVELOPER TESTIMONIALS                   */}
        {/* ============================================================ */}
        <section className="mb-16">
          <div className="mb-8">
            <span className="font-mono text-xs text-[#38bdf8] uppercase tracking-[0.2em] font-semibold">
              // 05 CLIENT &amp; DEVELOPER FEEDBACK
            </span>
            <h2 className="font-['MasterVictory'] text-3xl sm:text-4xl text-white mt-2">
              WHAT PEOPLE SAY ABOUT KACHI
            </h2>
            <p className="mt-2 font-mono text-sm text-zinc-400 max-w-2xl">
              Direct, unfiltered messages from project founders, devs, and community supporters.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {verifiedReceipts.map((rec, rIdx) => (
              <div
                key={rIdx}
                className="rounded-2xl bg-[#040814]/90 border border-zinc-800/80 p-6 flex flex-col justify-between hover:border-[#0099ff]/60 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-zinc-800/80">
                    <div className="flex items-center gap-2">
                      <Quote className="h-4 w-4 text-[#0099ff]" />
                      <span className="font-mono text-xs font-bold text-white">{rec.author}</span>
                    </div>
                    <span className="font-mono text-[10px] text-[#38bdf8] bg-[#0099ff]/10 px-2 py-0.5 rounded border border-[#0099ff]/30">
                      {rec.badge}
                    </span>
                  </div>

                  <p className="font-mono text-xs text-zinc-300 leading-relaxed italic">
                    &ldquo;{rec.quote}&rdquo;
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-zinc-800/60 flex items-center justify-between text-[11px] font-mono text-zinc-500">
                  <span>Direct Chat Receipt</span>
                  <div className="flex items-center gap-1 text-[#0099ff]">
                    <Star className="h-3 w-3 fill-current" />
                    <Star className="h-3 w-3 fill-current" />
                    <Star className="h-3 w-3 fill-current" />
                    <Star className="h-3 w-3 fill-current" />
                    <Star className="h-3 w-3 fill-current" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ============================================================ */}
        {/* SECTION 6: HOW TO WORK WITH KACHI (APPROACH ON ANY SOCIAL)   */}
        {/* ============================================================ */}
        <section id="contact-kachi" className="mb-16">
          <div className="rounded-3xl bg-[#040814]/95 border-2 border-[#0099ff]/50 p-8 sm:p-12 shadow-[0_0_35px_rgba(0,153,255,0.25)] relative overflow-hidden">
            <div className="max-w-3xl mb-8">
              <span className="font-mono text-xs text-[#38bdf8] uppercase tracking-[0.2em] font-semibold">
                // 06 HOW TO WORK WITH KACHI
              </span>
              <h2 className="font-['MasterVictory'] text-3xl sm:text-5xl text-white mt-2 mb-3">
                LET&apos;S WORK TOGETHER
              </h2>
              <p className="font-mono text-xs sm:text-sm text-zinc-300 leading-relaxed">
                Working with Kachi is simple — no complicated agency paperwork or formal roadblocks. Just reach out directly on any social platform or email with your project details, token link, and what kind of support you need.
              </p>
            </div>

            {/* Social & Contact Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* 1. X (Twitter) */}
              <a
                href="https://x.com/Kachi_Base"
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-2xl bg-black/60 border border-zinc-800 hover:border-[#0099ff] hover:bg-[#0099ff]/10 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3 text-zinc-400 group-hover:text-[#0099ff]">
                    <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                    <ExternalLink className="h-4 w-4" />
                  </div>
                  <span className="font-mono text-xs text-zinc-400">Twitter / X</span>
                  <h4 className="font-mono text-sm font-bold text-white group-hover:text-[#0099ff] transition-colors mt-0.5">
                    @Kachi_Base
                  </h4>
                </div>
                <span className="mt-4 font-mono text-[11px] text-[#38bdf8]">Message on X &rarr;</span>
              </a>

              {/* 2. Telegram */}
              <div className="p-5 rounded-2xl bg-black/60 border border-zinc-800 hover:border-[#0099ff] hover:bg-[#0099ff]/10 transition-all flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between mb-3 text-zinc-400 group-hover:text-[#0099ff]">
                    <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
                    </svg>
                    <ExternalLink className="h-4 w-4" />
                  </div>
                  <span className="font-mono text-xs text-zinc-400">Telegram</span>
                  <h4 className="font-mono text-sm font-bold text-white group-hover:text-[#0099ff] transition-colors mt-0.5">
                    @KachiFX12
                  </h4>
                </div>
                <div className="mt-4 flex flex-col gap-1.5 font-mono text-[11px]">
                  <a
                    href="https://t.me/KachiFX1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#38bdf8] hover:underline flex items-center justify-between"
                  >
                    <span>Official Channel &rarr;</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                  <a
                    href="https://t.me/KachiFX12"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-400 hover:text-white flex items-center justify-between"
                  >
                    <span>Message DM &rarr;</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </div>

              {/* 3. Discord */}
              <div className="p-5 rounded-2xl bg-black/60 border border-zinc-800 flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between mb-3 text-zinc-400">
                    <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                      <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.894.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                    </svg>
                  </div>
                  <span className="font-mono text-xs text-zinc-400">Discord</span>
                  <h4 className="font-mono text-sm font-bold text-white mt-0.5">
                    @kachi112
                  </h4>
                </div>
                <span className="mt-4 font-mono text-[11px] text-zinc-400">Add on Discord</span>
              </div>

              {/* 4. Email */}
              <a
                href="mailto:obasi.godwill338@gmail.com"
                className="p-5 rounded-2xl bg-black/60 border border-zinc-800 hover:border-[#0099ff] hover:bg-[#0099ff]/10 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3 text-zinc-400 group-hover:text-[#0099ff]">
                    <Mail className="h-6 w-6" />
                    <ExternalLink className="h-4 w-4" />
                  </div>
                  <span className="font-mono text-xs text-zinc-400">Direct Email</span>
                  <h4 className="font-mono text-xs sm:text-sm font-bold text-white group-hover:text-[#0099ff] transition-colors mt-0.5 break-all">
                    obasi.godwill338@gmail.com
                  </h4>
                </div>
                <span className="mt-4 font-mono text-[11px] text-[#38bdf8]">Send Email &rarr;</span>
              </a>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* FOOTER CTA & SIGN-OFF                                        */}
        {/* ============================================================ */}
        <footer className="rounded-3xl bg-gradient-to-r from-[#0066ff]/20 via-[#0099ff]/20 to-[#0066ff]/20 border border-[#0099ff]/40 p-8 sm:p-10 text-center backdrop-blur-xl">
          <h2 className="font-['MasterVictory'] text-3xl sm:text-5xl text-white mb-3">
            LET&apos;S CONNECT &amp; GROW
          </h2>
          <p className="font-mono text-xs sm:text-sm text-zinc-300 max-w-lg mx-auto mb-6 leading-relaxed">
            Ready to build together? Reach out directly on Telegram, X, Discord, or Email.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/"
              className="px-6 py-2.5 rounded-xl bg-white text-black font-mono text-xs font-bold hover:bg-[#0099ff] hover:text-black transition-colors"
            >
              VIEW MAIN PORTFOLIO
            </Link>
            <a
              href="https://t.me/KachiFX1"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 rounded-xl bg-[#0099ff] text-black font-mono text-xs font-bold hover:bg-[#38bdf8] transition-colors inline-flex items-center gap-2"
            >
              <span>OFFICIAL CHANNEL: @KachiFX1</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
            <a
              href="https://t.me/KachiFX12"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 rounded-xl bg-[#040814] border border-[#0099ff]/60 text-[#38bdf8] font-mono text-xs font-bold hover:bg-[#0099ff]/20 transition-colors inline-flex items-center gap-2"
            >
              <span>TELEGRAM DM: @KachiFX12</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>

          <div className="mt-8 pt-6 border-t border-zinc-800/80 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-zinc-500 gap-2">
            <span>© {new Date().getFullYear()} KACHI // ALL RIGHTS RESERVED</span>
            <span>
              CREATED BY{' '}
              <a
                href="https://t.me/AyanMalikkkk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0099ff] hover:underline font-bold"
              >
                AMEX
              </a>
            </span>
          </div>
        </footer>
      </div>
    </main>
  )
}
