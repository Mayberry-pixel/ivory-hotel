import Image from 'next/image'
import { Reveal } from './reveal'

export function Dining() {
  return (
    <section id="dining" className="mx-auto max-w-[1400px] px-6 py-28 md:px-12 md:py-44">
      <div className="grid gap-14 md:grid-cols-12 md:gap-16">
        {/* Left column — main photograph, large */}
        <Reveal className="md:col-span-7">
          <div className="relative aspect-[4/5] w-full overflow-hidden">
            <Image
              src="/images/dining.png"
              alt="Intimate candlelit dining room at The Ivory"
              fill
              sizes="(max-width: 768px) 100vw, 58vw"
              className="object-cover"
            />
          </div>
          <p className="eyebrow mt-4 text-[0.55rem] text-[#8A7563]/80">
            The Table · Evening service
          </p>
        </Reveal>

        {/* Right column — type + offset second image, offset lower on desktop */}
        <div className="md:col-span-5 md:pt-32">
          <Reveal delay={120}>
            <p className="eyebrow text-[#8A7563]">Dining</p>
            <h2 className="mt-8 font-serif text-[clamp(2.25rem,4.2vw,3.5rem)] font-light leading-[1.1]">
              Considered menus, candlelit rooms.
            </h2>
            <p className="mt-8 max-w-md leading-relaxed text-[#8A7563]">
              Three intimate dining rooms celebrate West African produce through
              a quiet, seasonal lens. Long lunches, slow dinners and a cellar
              chosen with care.
            </p>

            <a
              href="#booking"
              className="eyebrow mt-10 inline-block border-b border-foreground/40 pb-1 text-[0.55rem] transition-opacity hover:opacity-60"
            >
              Explore Dining
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}