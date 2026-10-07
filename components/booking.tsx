'use client'

import { useState, type FormEvent } from 'react'

const fieldClass =
  'w-full border-0 border-b border-[#3A2C23]/25 bg-transparent py-3 text-[#29201B] placeholder:text-[#8A7563]/60 focus:border-[#29201B] focus:outline-none transition-colors'

const labelClass =
  'eyebrow mb-3 block text-[0.55rem] text-[#8A7563]'

export function Booking() {
  const [submitted, setSubmitted] = useState(false)

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="booking" className="bg-[#ECE8E1] py-28 md:py-44">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <div className="grid gap-16 md:grid-cols-12 md:gap-20">
          {/* ── Left column — statement ── */}
          <div className="md:col-span-5 md:pt-8">
            <p className="eyebrow text-[#8A7563]">Reservations</p>
            <h2 className="mt-8 font-serif text-[clamp(2.5rem,5vw,4rem)] font-light leading-[1.05] text-[#29201B]">
              Your stay
              <br />
              begins here.
            </h2>
            <p className="mt-8 max-w-md leading-relaxed text-[#8A7563]">
              Share a few details and our team will attend to the rest,
              personally. We reply within one working day.
            </p>

            <div className="mt-14 border-t border-[#E7DED1] pt-6">
              <p className="eyebrow text-[0.55rem] text-[#8A7563]">
                Or write to us
              </p>
              <p className="mt-3 font-serif text-lg text-[#29201B]">
                reservations@theivory.abuja
              </p>
            </div>
          </div>

          {/* ── Right column — the form, calm and airy ── */}
          <div className="md:col-span-6 md:col-start-7">
            {submitted ? (
              <div className="border-t border-[#3A2C23]/15 pt-10 animate-[fade-up_1.1s_cubic-bezier(0.22,1,0.36,1)]">
                <p className="font-serif text-3xl font-light italic text-[#29201B]">
                  Thank you.
                </p>
                <p className="mt-5 max-w-md leading-relaxed text-[#8A7563]">
                  Your enquiry has been received. A member of our team will be
                  in touch shortly to confirm the details of your stay.
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="pt-2">
                <div className="grid gap-x-10 gap-y-8 md:grid-cols-2">
                  <div className="md:col-span-2">
                    <label htmlFor="name" className={labelClass}>
                      Full Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      required
                      placeholder="Your name"
                      className={fieldClass}
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label htmlFor="email" className={labelClass}>
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="you@example.com"
                      className={fieldClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="arrival" className={labelClass}>
                      Arrival
                    </label>
                    <input
                      id="arrival"
                      name="arrival"
                      type="date"
                      required
                      className={fieldClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="departure" className={labelClass}>
                      Departure
                    </label>
                    <input
                      id="departure"
                      name="departure"
                      type="date"
                      required
                      className={fieldClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="guests" className={labelClass}>
                      Guests
                    </label>
                    <select
                      id="guests"
                      name="guests"
                      defaultValue="2"
                      className={fieldClass}
                    >
                      {['1', '2', '3', '4+'].map((n) => (
                        <option key={n} value={n}>
                          {n}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="room" className={labelClass}>
                      Preferred Room
                    </label>
                    <select
                      id="room"
                      name="room"
                      defaultValue="The Ivory Room"
                      className={fieldClass}
                    >
                      {[
                        'The Ivory Room',
                        'Courtyard Suite',
                        'The Ivory Residence',
                      ].map((r) => (
                        <option key={r} value={r}>
                          {r}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="eyebrow mt-14 inline-flex items-center gap-3 border-b border-[#29201B] pb-2 text-[0.6rem] text-[#29201B] transition-opacity duration-300 hover:opacity-60"
                >
                  Request Reservation
                  <span aria-hidden>→</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}