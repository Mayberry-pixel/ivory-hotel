'use client'

import { useEffect, useState } from 'react'

const links = [
  { label: 'Stay', href: '#stay' },
  { label: 'Dining', href: '#dining' },
  { label: 'Experience', href: '#experience' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
]

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ${
        scrolled
          ? 'bg-[#ECE8E1]/90 text-[#29201B] backdrop-blur-md shadow-[0_1px_0_rgba(41,32,27,0.06)]'
          : 'bg-transparent text-[#F1ECE4]'
      }`}
    >
      <nav className="mx-auto flex h-[88px] max-w-[1400px] items-center justify-between px-6 md:px-12">
        {/* Wordmark */}
        <a
          href="#top"
          className="font-serif text-lg tracking-[0.4em] transition-opacity duration-500 hover:opacity-70 md:text-xl"
          aria-label="The Ivory, home"
        >
          THE IVORY
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-10 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="eyebrow transition-opacity duration-500 hover:opacity-60"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA — quiet underlined link, not a box */}
        <a
          href="#booking"
          className="eyebrow hidden border-b pb-1 text-[0.6rem] transition-opacity duration-500 hover:opacity-60 md:inline-block"
          style={{ borderColor: 'currentColor' }}
        >
          Book Your Stay
        </a>

        {/* Mobile hamburger */}
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] lg:hidden"
        >
          <span
            className={`h-px w-6 bg-current transition-transform duration-500 ${
              open ? 'translate-y-[6px] rotate-45' : ''
            }`}
          />
          <span
            className={`h-px w-6 bg-current transition-opacity duration-500 ${
              open ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`h-px w-6 bg-current transition-transform duration-500 ${
              open ? '-translate-y-[6px] -rotate-45' : ''
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu — full-screen, calm, generous spacing */}
      <div
        className={`overflow-hidden bg-[#ECE8E1] text-[#29201B] transition-[max-height] duration-700 ease-out lg:hidden ${
          open ? 'max-h-[80vh]' : 'max-h-0'
        }`}
      >
        <div className="flex flex-col px-6 pb-10 pt-4">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="eyebrow border-b border-[#3A2C23]/12 py-6 text-[0.7rem] transition-opacity duration-300 hover:opacity-60"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#booking"
            onClick={() => setOpen(false)}
            className="eyebrow mt-8 border-b border-[#29201B] pb-1 text-[0.7rem] transition-opacity duration-300 hover:opacity-60 self-start"
          >
            Book Your Stay →
          </a>
        </div>
      </div>
    </header>
  )
}