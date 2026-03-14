import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export default function Hero() {
  const containerRef = useRef(null)
  const eyebrowRef = useRef(null)
  const line1Ref = useRef(null)
  const line2Ref = useRef(null)
  const bodyRef = useRef(null)
  const ctaRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        [eyebrowRef.current, line1Ref.current, line2Ref.current, bodyRef.current, ctaRef.current],
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: 'power3.out',
          stagger: 0.08,
          delay: 0.2,
        }
      )
    }, containerRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={containerRef}
      id="about"
      className="relative flex flex-col justify-end pb-24 px-8 md:px-20 overflow-hidden"
      style={{ height: '100dvh' }}
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=1920&q=80)',
        }}
      />
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D12] via-[#0D0D12]/75 to-[#0D0D12]/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0D0D12]/85 via-[#0D0D12]/20 to-transparent" />

      {/* Content — bottom-left */}
      <div className="relative z-10 max-w-4xl">
        <p
          ref={eyebrowRef}
          className="font-mono text-[#C9A84C] text-xs tracking-[0.35em] uppercase mb-6"
          style={{ opacity: 0 }}
        >
          Senior Data Scientist · MLOps · E2E AI/ML Solutions
        </p>

        <h1 className="leading-none mb-8">
          <span
            ref={line1Ref}
            className="block font-sans font-black text-5xl md:text-7xl lg:text-8xl text-[#FAF8F5] tracking-tight"
            style={{ opacity: 0 }}
          >
            Intelligence meets
          </span>
          <span
            ref={line2Ref}
            className="block font-serif italic leading-none text-[#C9A84C]"
            style={{ fontSize: 'clamp(4rem, 12vw, 10rem)', opacity: 0 }}
          >
            Impact.
          </span>
        </h1>

        <p
          ref={bodyRef}
          className="font-sans text-[#FAF8F5]/55 text-base md:text-lg max-w-xl leading-relaxed mb-10"
          style={{ opacity: 0 }}
        >
          Building scalable AI/ML systems at Amazon and Zappos that turn data into
          measurable revenue — $65M+ in cumulative impact, shipped to production.
        </p>

        <div ref={ctaRef} className="flex flex-wrap items-center gap-4" style={{ opacity: 0 }}>
          <a
            href="#experience"
            className="btn-magnetic bg-[#C9A84C] text-[#0D0D12] font-sans font-bold text-sm tracking-widest uppercase px-8 py-4 rounded-full gap-3"
          >
            <span className="btn-slide bg-[#FAF8F5]" />
            <span className="relative z-10">View My Work</span>
            <span className="relative z-10">↓</span>
          </a>
          <a
            href="mailto:johnalexiv@gmail.com"
            className="link-lift font-mono text-xs text-[#FAF8F5]/50 hover:text-[#FAF8F5] tracking-widest uppercase"
          >
            johnalexiv@gmail.com
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 right-8 md:right-20 flex flex-col items-center gap-3 opacity-30">
        <div
          className="w-px bg-[#FAF8F5]"
          style={{
            height: '4rem',
            backgroundImage: 'linear-gradient(to bottom, #FAF8F5, transparent)',
          }}
        />
        <span
          className="font-mono text-[10px] text-[#FAF8F5] tracking-[0.3em] uppercase"
          style={{ writingMode: 'vertical-rl' }}
        >
          Scroll
        </span>
      </div>
    </section>
  )
}
