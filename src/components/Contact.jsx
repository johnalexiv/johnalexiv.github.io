import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Contact() {
  const sectionRef = useRef(null)
  const contentRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        Array.from(contentRef.current.children),
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: 'power3.out',
          stagger: 0.1,
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
        }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="bg-[#2A2A35] py-40 px-8 md:px-20"
    >
      <div ref={contentRef} className="max-w-4xl mx-auto text-center flex flex-col items-center gap-0">
        <p className="font-mono text-[#C9A84C] text-xs tracking-[0.35em] uppercase mb-6">
          Get In Touch
        </p>

        <h2
          className="font-sans font-black text-[#FAF8F5] tracking-tight leading-none mb-6"
          style={{ fontSize: 'clamp(3rem, 10vw, 8rem)' }}
        >
          Let's build
          <br />
          <span className="font-serif italic text-[#C9A84C]">something.</span>
        </h2>

        <p className="font-sans text-[#FAF8F5]/45 text-base md:text-lg mb-12 max-w-md leading-relaxed">
          Open to senior ML/AI engineering roles, consulting engagements, and ambitious AI projects.
          Based in Las Vegas — remote-friendly.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4">
          <a
            href="mailto:johnalexiv@gmail.com"
            className="btn-magnetic bg-[#C9A84C] text-[#0D0D12] font-sans font-bold text-sm tracking-widest uppercase px-10 py-4 rounded-full"
          >
            <span className="btn-slide bg-[#FAF8F5]" />
            <span className="relative z-10">Send Email</span>
          </a>
          <a
            href="https://linkedin.com/in/johnalexiv"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-magnetic border border-[#FAF8F5]/25 text-[#FAF8F5] font-sans font-bold text-sm tracking-widest uppercase px-10 py-4 rounded-full"
          >
            <span className="btn-slide bg-[#FAF8F5]/08" />
            <span className="relative z-10">LinkedIn ↗</span>
          </a>
        </div>

        <div className="mt-14 flex items-center gap-6 flex-wrap justify-center">
          <span className="font-mono text-xs text-[#FAF8F5]/30 tracking-widest">702-324-7263</span>
          <span className="w-px h-4 bg-[#FAF8F5]/15" />
          <span className="font-mono text-xs text-[#FAF8F5]/30 tracking-widest">Las Vegas, NV</span>
          <span className="w-px h-4 bg-[#FAF8F5]/15" />
          <span className="font-mono text-xs text-[#FAF8F5]/30 tracking-widest">linkedin.com/in/johnalexiv</span>
        </div>
      </div>
    </section>
  )
}
