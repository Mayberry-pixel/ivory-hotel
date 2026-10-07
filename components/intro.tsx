import Image from 'next/image'
import { Reveal } from './reveal'

export function Intro() {
  return (
    <section className="mx-auto max-w-[1400px] px-6 py-28 md:px-12 md:py-40">
      <div className="grid gap-16 md:grid-cols-12 md:gap-16">
        {/* Left column — type only, no stats */}
        <Reveal className="md:col-span-5 md:pt-12">
          <p className="eyebrow text-[#8A7563]">The Ivory</p>

          <h2 className="mt-8 font-serif text-[clamp(2.25rem,4.2vw,3.5rem)] font-light leading-[1.1]">
            An address defined by stillness, not spectacle.
          </h2>

          <p className="mt-10 max-w-md leading-relaxed text-[#8A7563]">
            Set within a quiet quarter of Abuja, The Ivory is a sanctuary of
            warm stone, soft light and unhurried service. Every detail is
            considered, nothing is announced. Here, luxury is measured in calm.
          </p>
          <p className="mt-5 max-w-md leading-relaxed text-[#8A7563]">
            From dawn light across travertine floors to the hush of evening in
            the courtyard, The Ivory invites you to slow down and stay a while.
          </p>

          {/* Replaces the 48 / 3 / 24 stats with one elegant detail */}
          <div className="mt-16 border-t border-[#E7DED1] pt-6">
            <p className="eyebrow text-[0.55rem] text-[#8A7563]">
              Est. Abuja · MMXXIV
            </p>
          </div>
        </Reveal>

        {/* Right column — editorial photograph, offset lower on desktop */}
        <Reveal
          delay={120}
          className="relative md:col-span-7 md:mt-20"
        >
          <div className="relative aspect-[4/5] w-full overflow-hidden">
            <Image
              src="/images/lobby.png"
              alt="The calm ivory-toned lobby of The Ivory hotel"
              fill
              sizes="(max-width: 768px) 100vw, 60vw"
              className="object-cover"
            />
          </div>
          {/* Small caption beneath, magazine-style */}
          <p className="mt-4 eyebrow text-[0.55rem] text-[#8A7563]/80">
            The Lobby · Natural light, honed travertine
          </p>
        </Reveal>
      </div>
    </section>
  )
}