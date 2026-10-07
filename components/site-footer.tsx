export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer id="contact" className="bg-[#3A2F27] text-[#F3EFE8]">
      <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-12 md:py-32">
        {/* Top — wordmark + city line */}
        <div className="grid gap-14 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-6">
            <p className="font-serif text-2xl tracking-[0.4em] md:text-3xl">
              THE IVORY
            </p>
            <p className="eyebrow mt-5 text-[0.6rem] text-[#F1ECE4]/60">
              Abuja · Nigeria
            </p>
            <p className="mt-8 max-w-xs leading-relaxed text-[#F1ECE4]/70">
              A quieter kind of luxury, in the heart of Abuja.
            </p>
          </div>

          {/* Right — three quiet columns */}
          <div className="md:col-span-6 md:pl-16">
            <div className="grid grid-cols-2 gap-10 md:grid-cols-3">
              <div>
                <p className="eyebrow text-[0.55rem] text-[#F1ECE4]/50">
                  Contact
                </p>
                <ul className="mt-5 space-y-3 text-sm text-[#F1ECE4]/85">
                  <li className="leading-relaxed">
                    Maitama District
                    <br />
                    Abuja, Nigeria
                  </li>
                  <li>
                    <a
                      href="tel:+2340000000000"
                      className="transition-opacity duration-300 hover:opacity-60"
                    >
                      +234 000 000 0000
                    </a>
                  </li>
                  <li>
                    <a
                      href="mailto:stay@theivory.com"
                      className="transition-opacity duration-300 hover:opacity-60"
                    >
                      stay@theivory.com
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <p className="eyebrow text-[0.55rem] text-[#F1ECE4]/50">
                  Reservations
                </p>
                <ul className="mt-5 space-y-3 text-sm text-[#F1ECE4]/85">
                  <li>
                    <a
                      href="#booking"
                      className="transition-opacity duration-300 hover:opacity-60"
                    >
                      Request a stay
                    </a>
                  </li>
                  <li>
                    <a
                      href="#dining"
                      className="transition-opacity duration-300 hover:opacity-60"
                    >
                      Dining
                    </a>
                  </li>
                  <li>
                    <a
                      href="#experience"
                      className="transition-opacity duration-300 hover:opacity-60"
                    >
                      Experiences
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <p className="eyebrow text-[0.55rem] text-[#F1ECE4]/50">
                  Follow
                </p>
                <ul className="mt-5 space-y-3 text-sm text-[#F1ECE4]/85">
                  <li>
                    <a
                      href="#"
                      className="transition-opacity duration-300 hover:opacity-60"
                    >
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="transition-opacity duration-300 hover:opacity-60"
                    >
                      Journal
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="transition-opacity duration-300 hover:opacity-60"
                    >
                      Newsletter
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom — copyright + legal */}
        <div className="mt-24 flex flex-col items-start justify-between gap-6 border-t border-[#F1ECE4]/10 pt-8 text-xs text-[#F1ECE4]/50 md:flex-row md:items-center">
          <p>© {year} The Ivory. All rights reserved.</p>
          <div className="flex gap-8">
            <a
              href="#"
              className="transition-opacity duration-300 hover:opacity-100"
            >
              Privacy
            </a>
            <a
              href="#"
              className="transition-opacity duration-300 hover:opacity-100"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}