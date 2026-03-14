import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const STATS = [
  { value: '$65M+', label: 'Revenue Impact' },
  { value: '94.93%', label: 'NLP Accuracy' },
  { value: '70%', label: 'Search Coverage' },
  { value: '8+ yrs', label: 'Production ML' },
]

function wrapWords(text, className = '') {
  return text.split(' ').map((word, i) => (
    <span key={i} className={`word inline-block mr-[0.28em] ${className}`}>
      {word}
    </span>
  ))
}

export default function Philosophy() {
  const sectionRef = useRef(null)
  const contraRef = useRef(null)
  const mainRef = useRef(null)
  const statsRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Contrast statement reveal
      gsap.fromTo(
        contraRef.current.querySelectorAll('.word'),
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: 'power3.out',
          stagger: 0.04,
          scrollTrigger: { trigger: contraRef.current, start: 'top 80%' },
        }
      )
      // Main statement
      gsap.fromTo(
        mainRef.current.querySelectorAll('.word'),
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          stagger: 0.05,
          scrollTrigger: { trigger: mainRef.current, start: 'top 80%' },
        }
      )
      // Stats
      gsap.fromTo(
        Array.from(statsRef.current.children),
        { y: 24, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: 'power3.out',
          stagger: 0.1,
          scrollTrigger: { trigger: statsRef.current, start: 'top 85%' },
        }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="relative bg-[#2A2A35] py-40 px-8 md:px-20 overflow-hidden"
    >
      {/* Background texture */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1920&q=80)',
          opacity: 0.07,
        }}
      />

      <div className="relative z-10 max-w-5xl">
        <p
          ref={contraRef}
          className="font-sans text-[#FAF8F5]/45 text-lg md:text-2xl mb-10 leading-relaxed"
        >
          {wrapWords('Most data scientists focus on: model accuracy, benchmark scores, and academic metrics.')}
        </p>

        <p
          ref={mainRef}
          className="font-sans text-[#FAF8F5] text-2xl md:text-4xl leading-relaxed font-light"
        >
          {wrapWords('I focus on:')}
          &nbsp;
          <span className="word inline-block font-serif italic text-[#C9A84C] mr-[0.2em]"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', lineHeight: 1 }}>
            shipped systems
          </span>
          &nbsp;
          {wrapWords('that move the needle.')}
        </p>
      </div>

      {/* Skill tags */}
      <div className="relative z-10 mt-16 flex flex-wrap gap-2 max-w-4xl">
        {[
          'Python', 'Agentic AI', 'MLOps', 'Keras', 'TensorFlow',
          'PyTorch', 'NumPy', 'Pandas', 'LangChain', 'RAG',
          'Computer Vision', 'E2E Deployment', 'AWS', 'SQL',
          'Deep Learning', 'Generative AI', 'SageMaker', 'NLP',
        ].map((skill) => (
          <span
            key={skill}
            className="font-mono text-xs text-[#FAF8F5]/55 border border-[#FAF8F5]/15 rounded-full px-4 py-1.5 hover:border-[#C9A84C]/50 hover:text-[#C9A84C] transition-colors"
          >
            {skill}
          </span>
        ))}
      </div>

      {/* Stats */}
      <div ref={statsRef} className="relative z-10 mt-20 grid grid-cols-2 md:grid-cols-4 gap-10">
        {STATS.map(({ value, label }) => (
          <div key={label} className="flex flex-col gap-1">
            <span className="font-mono text-[#C9A84C] font-bold" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
              {value}
            </span>
            <span className="font-sans text-[#FAF8F5]/45 text-sm">{label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
