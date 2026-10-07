import Image from 'next/image'

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-end overflow-hidden px-5 pb-24 pt-40 text-[#F1ECE4] md:items-center md:pb-32"
    >
      {/* Photograph */}
      <Image
        src="/images/hero.png"
        alt="The Ivory hotel at dusk, warm ivory stone facade reflected in the calm pool"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      {/* Cinematic, restrained overlay — warm brown, never black */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to bottom, rgba(41,32,27,0.45) 0%, rgba(41,32,27,0.15) 35%, rgba(41,32,27,0.55) 100%)',
        }}
      />

      {/* Content */}
      <div className="relative mx-auto w-full max-w-[1400px] px-2 md:px-12">
        <div className="max-w-3xl">
          <p className="eyebrow text-[#F1ECE4]/80">Abuja · Nigeria</p>

          <h1 className="mt-6 font-serif text-[clamp(4rem,13vw,11rem)] font-light leading-[0.9] tracking-[0.08em]">
            THE IVORY
          </h1>

          <div className="mt-8 h-px w-16 bg-[#F1ECE4]/50" />

          <p className="mt-8 max-w-xl font-serif text-2xl font-light italic leading-[1.4] text-[#F1ECE4]/95 md:text-3xl">
            A quieter kind of luxury, in the heart of Abuja.
          </p>

          {/* Understated CTAs — main = Discover, secondary = Book */}
          <div className="mt-12 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
            <a
              href="#stay"
              className="eyebrow border-b border-[#F1ECE4]/70 pb-2 text-[#F1ECE4] transition-opacity duration-500 hover:opacity-70"
            >
              Discover The Hotel
            </a>
            <a
              href="#booking"
              className="eyebrow text-[#F1ECE4]/70 transition-opacity duration-500 hover:opacity-100"
            >
              Book Your Stay →
            </a>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <span className="eyebrow text-[0.55rem] text-[#F1ECE4]/60">
          Scroll to discover
        </span>
      </div>
    </section>
  )
}