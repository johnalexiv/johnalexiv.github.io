import { useEffect, useState } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = ['About', 'Experience', 'Skills', 'Contact']

  return (
    <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 px-6 py-3 rounded-full flex items-center gap-6 transition-all duration-500 ${
        scrolled
          ? 'bg-[#0D0D12]/75 backdrop-blur-xl border border-[#C9A84C]/25 shadow-2xl shadow-black/50'
          : 'bg-transparent'
      }`}
    >
      {/* Logo */}
      <span
        className={`font-mono font-bold text-sm tracking-[0.2em] uppercase transition-colors duration-500 ${
          scrolled ? 'text-[#C9A84C]' : 'text-[#FAF8F5]'
        }`}
      >
        JA
      </span>

      {/* Desktop links */}
      <div className="hidden md:flex items-center gap-5">
        {links.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            className="link-lift font-sans text-sm font-medium text-[#FAF8F5]/65 hover:text-[#FAF8F5] transition-colors"
          >
            {link}
          </a>
        ))}
      </div>

      {/* CTA */}
      <a
        href="#contact"
        className="btn-magnetic bg-[#C9A84C] text-[#0D0D12] font-sans font-bold text-xs tracking-widest uppercase px-5 py-2.5 rounded-full"
      >
        <span className="btn-slide bg-[#FAF8F5]" />
        <span className="relative z-10">View My Work</span>
      </a>

      {/* Mobile hamburger */}
      <button
        className="md:hidden flex flex-col gap-1.5 p-1"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span className={`block w-5 h-px bg-[#FAF8F5] transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
        <span className={`block w-5 h-px bg-[#FAF8F5] transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
        <span className={`block w-5 h-px bg-[#FAF8F5] transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="absolute top-full mt-3 left-0 right-0 bg-[#0D0D12]/95 backdrop-blur-xl border border-[#C9A84C]/20 rounded-3xl p-6 flex flex-col gap-4 md:hidden">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="font-sans text-sm font-medium text-[#FAF8F5]/70 hover:text-[#FAF8F5] transition-colors"
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
