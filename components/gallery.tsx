import Image from 'next/image'
import { Reveal } from './reveal'

export function Gallery() {
  return (
    <section id="gallery" className="py-28 md:py-44">
      {/* ── Header ── */}
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <Reveal className="max-w-2xl">
          <p className="eyebrow text-[#8A7563]">Gallery</p>
          <h2 className="mt-8 font-serif text-[clamp(2.25rem,4.2vw,3.5rem)] font-light leading-[1.1] text-[#29201B]">
            Moments in ivory light.
          </h2>
        </Reveal>
      </div>

      {/* ── 01 · Hero image — capped at 80%, centered ── */}
      <Reveal className="mx-auto mt-20 max-w-[1400px] px-6 md:mt-28 md:px-12">
        <div className="mx-auto md:max-w-[80%]">
          <div className="relative aspect-[16/10] w-full overflow-hidden">
            <Image
              src="/images/gallery-1.png"
              alt="Suite detail at The Ivory"
              fill
              sizes="(max-width: 768px) 100vw, 80vw"
              priority
              className="object-cover transition-transform duration-[1600ms] ease-out hover:scale-[1.03]"
            />
          </div>
          <p className="eyebrow mt-4 text-[0.55rem] text-[#8A7563]/80">
            Suite 04 · Morning light
          </p>
        </div>
      </Reveal>

      {/* ── 02 · Paired — tall image left, text right ── */}
      <div className="mx-auto mt-24 max-w-[1400px] px-6 md:mt-36 md:px-12">
        <div className="grid gap-10 md:grid-cols-12 md:items-center md:gap-16">
          <Reveal className="md:col-span-6">
            <div className="relative aspect-[4/5] w-full overflow-hidden">
              <Image
                src="/images/gallery-2.png"
                alt="Terrace at golden hour"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-[1600ms] ease-out hover:scale-[1.03]"
              />
            </div>
            <p className="eyebrow mt-4 text-[0.55rem] text-[#8A7563]/80">
              The Terrace · Golden hour
            </p>
          </Reveal>

          <Reveal delay={120} className="md:col-span-5 md:col-start-8">
            <p className="eyebrow text-[#8A7563]">Quiet, everywhere</p>
            <p className="mt-6 font-serif text-2xl font-light italic leading-[1.45] text-[#29201B] md:text-[1.75rem]">
              The Ivory is best understood slowly — in the way light moves
              across a room, in the hush of the courtyard at dusk.
            </p>
          </Reveal>
        </div>
      </div>

      {/* ── 03 · Paired — text left, wide image right ── */}
      <div className="mx-auto mt-24 max-w-[1400px] px-6 md:mt-36 md:px-12">
        <div className="grid gap-10 md:grid-cols-12 md:items-center md:gap-16">
          <Reveal delay={80} className="md:col-span-5">
            <p className="font-serif text-2xl font-light italic leading-[1.45] text-[#29201B] md:text-[1.75rem]">
              Every corridor ends somewhere worth arriving.
            </p>
          </Reveal>

          <Reveal delay={140} className="md:col-span-6 md:col-start-7">
            <div className="relative aspect-[16/11] w-full overflow-hidden">
              <Image
                src="/images/gallery-3.png"
                alt="Warmly lit corridor"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-[1600ms] ease-out hover:scale-[1.03]"
              />
            </div>
            <p className="eyebrow mt-4 text-[0.55rem] text-[#8A7563]/80">
              Corridor · Evening
            </p>
          </Reveal>
        </div>
      </div>

      {/* ── 04 · Closing image — capped at 80%, centered ── */}
      <Reveal delay={100} className="mx-auto mt-24 max-w-[1400px] px-6 md:mt-36 md:px-12">
        <div className="mx-auto md:max-w-[80%]">
          <div className="relative aspect-[16/10] w-full overflow-hidden">
            <Image
              src="/images/lobby.png"
              alt="The lobby lounge"
              fill
              sizes="(max-width: 768px) 100vw, 80vw"
              className="object-cover transition-transform duration-[1600ms] ease-out hover:scale-[1.03]"
            />
          </div>
          <p className="eyebrow mt-4 text-[0.55rem] text-[#8A7563]/80">
            The Lobby · Late afternoon
          </p>
        </div>
      </Reveal>
    </section>
  )
}