import { SiteNav } from '@/components/site-nav'
import { Hero } from '@/components/hero'
import { Intro } from '@/components/intro'
import { Stay } from '@/components/stay'
import { Dining } from '@/components/dining'
import { Experience } from '@/components/experience'
import { Gallery } from '@/components/gallery'
import { Booking } from '@/components/booking'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <main>
      <SiteNav />
      <Hero />
      <Intro />
      <Stay />
      <Dining />
      <Experience />
      <Gallery />
      <Booking />
      <SiteFooter />
    </main>
  )
}
