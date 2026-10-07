import Image from 'next/image'
import { Reveal } from './reveal'

export function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden py-32 text-[#F1ECE4] md:py-48"
    >
      <Image
        src="/images/spa.png"
        alt="The serene ivory-toned spa and still pool at The Ivory"
        fill
        sizes="100vw"
        className="object-cover"
      />

      {/* Warm, cinematic overlay — lighter than before, never muddy */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to bottom, rgba(41,32,27,0.35) 0%, rgba(41,32,27,0.5) 55%, rgba(41,32,27,0.7) 100%)',
        }}
      />

      <div className="relative mx-auto max-w-[1400px] px-6 md:px-12">
        <Reveal className="max-w-3xl">
          <p className="eyebrow text-[#F1ECE4]/70">Experience</p>

          <h2 className="mt-8 font-serif text-[clamp(3rem,7vw,6rem)] font-light leading-[1.02] text-[#F1ECE4]">
            Time, well spent.
          </h2>

          <div className="mt-10 h-px w-16 bg-[#F1ECE4]/40" />

          <p className="mt-10 max-w-xl text-lg font-light leading-relaxed text-[#F1ECE4]/85 md:text-xl">
            Beyond the room, a collection of quiet indulgences — a candle-lit
            spa, private dining in the courtyard or cellar, and curated journeys
            through Abuja. Restorative, personal, and never rushed.
          </p>
        </Reveal>
      </div>
    </section>
  )
}