import Image from 'next/image'
import { Reveal } from './reveal'

const rooms = [
  {
    name: 'The Ivory Room',
    image: '/images/suite-1.png',
    size: '55 m²',
    price: 'From ₦320,000 / night',
    description:
      'A serene retreat with a king bed dressed in fine linen, floor-to-ceiling windows and a marble bath.',
  },
  {
    name: 'Courtyard Suite',
    image: '/images/suite-2.png',
    size: '90 m²',
    price: 'From ₦540,000 / night',
    description:
      'A gracious living room and bedroom framing a private view, curated for long, quiet stays.',
  },
  {
    name: 'The Ivory Residence',
    image: '/images/suite-3.png',
    size: '140 m²',
    price: 'From ₦980,000 / night',
    description:
      'Our crowning suite — a freestanding stone bath, dressing room and terrace above the city.',
  },
]

export function Stay() {
  const [first, second, third] = rooms

  return (
    <section id="stay" className="bg-[#ECE8E1] py-28 md:py-44">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        {/* Section header */}
        <Reveal className="max-w-2xl">
          <p className="eyebrow text-[#8A7563]">Stay</p>
          <h2 className="mt-8 font-serif text-[clamp(2.25rem,4.2vw,3.5rem)] font-light leading-[1.1] text-[#29201B]">
  Rooms &amp; residences, quietly composed.
</h2>
        </Reveal>

        {/* ── Room 01 — full-bleed image, type beneath ── */}
        <Reveal as="article" className="mt-24 md:mt-32">
          <div className="relative aspect-[16/10] w-full overflow-hidden md:aspect-[16/9]">
            <Image
              src={first.image}
              alt={first.name}
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-12 md:gap-10">
            <div className="md:col-span-6">
              <p className="eyebrow text-[0.55rem] text-[#8A7563]">
                01 — {first.size}
              </p>
              <h3 className="mt-4 font-serif text-3xl font-light text-[#29201B] md:text-4xl">
                {first.name}
              </h3>
            </div>
            <div className="md:col-span-5 md:col-start-8">
              <p className="max-w-md leading-relaxed text-[#8A7563]">
                {first.description}
              </p>
              <div className="mt-6 flex items-center gap-6">
                <span className="text-sm text-[#3A2C23]/75">
                  {first.price}
                </span>
                <a
                  href="#booking"
                  className="eyebrow border-b border-[#3A2C23]/40 pb-1 text-[0.55rem] text-[#29201B] transition-opacity hover:opacity-60"
                >
                  Reserve
                </a>
              </div>
            </div>
          </div>
        </Reveal>

        {/* ── Room 02 — offset composition, image right, type left ── */}
        <Reveal as="article" delay={120} className="mt-28 md:mt-40">
          <div className="grid gap-10 md:grid-cols-12 md:items-end md:gap-14">
            <div className="md:col-span-5 md:pb-12">
              <p className="eyebrow text-[0.55rem] text-[#8A7563]">
                02 — {second.size}
              </p>
              <h3 className="mt-4 font-serif text-3xl font-light text-[#29201B] md:text-4xl">
                {second.name}
              </h3>
              <p className="mt-6 max-w-md leading-relaxed text-[#8A7563]">
                {second.description}
              </p>
              <div className="mt-6 flex items-center gap-6">
                <span className="text-sm text-[#3A2C23]/75">
                  {second.price}
                </span>
                <a
                  href="#booking"
                  className="eyebrow border-b border-[#3A2C23]/40 pb-1 text-[0.55rem] text-[#29201B] transition-opacity hover:opacity-60"
                >
                  Reserve
                </a>
              </div>
            </div>

            <div className="relative aspect-[4/5] w-full overflow-hidden md:col-span-7">
              <Image
                src={second.image}
                alt={second.name}
                fill
                sizes="(max-width: 768px) 100vw, 58vw"
                className="object-cover"
              />
            </div>
          </div>
        </Reveal>

        {/* ── Room 03 — narrow offset, image left, type right ── */}
        <Reveal as="article" delay={200} className="mt-28 md:mt-40">
          <div className="grid gap-10 md:grid-cols-12 md:items-center md:gap-14">
            <div className="relative aspect-[3/4] w-full overflow-hidden md:col-span-5">
              <Image
                src={third.image}
                alt={third.name}
                fill
                sizes="(max-width: 768px) 100vw, 42vw"
                className="object-cover"
              />
            </div>

            <div className="md:col-span-6 md:col-start-7">
              <p className="eyebrow text-[0.55rem] text-[#8A7563]">
                03 — {third.size}
              </p>
              <h3 className="mt-4 font-serif text-3xl font-light text-[#29201B] md:text-4xl">
                {third.name}
              </h3>
              <p className="mt-6 max-w-md leading-relaxed text-[#8A7563]">
                {third.description}
              </p>
              <div className="mt-6 flex items-center gap-6">
                <span className="text-sm text-[#3A2C23]/75">
                  {third.price}
                </span>
                <a
                  href="#booking"
                  className="eyebrow border-b border-[#3A2C23]/40 pb-1 text-[0.55rem] text-[#29201B] transition-opacity hover:opacity-60"
                >
                  Reserve
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
