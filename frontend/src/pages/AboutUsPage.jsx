import { Check, Play } from 'lucide-react'

import PageHeader from '../components/PageHeader'
import Container from '../components/Container'
import ProductLists from '../components/ProductLists'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'

const teamMembers = [
  {
    name: 'Kevin Gilbert',
    role: 'Chief Executive Officer',
    image: '/images/team/team-1.png',
  },
  {
    name: 'Sophia Carter',
    role: 'Assistant CEO',
    image: '/images/team/team-2.png',
  },
  {
    name: 'Daniel Brooks',
    role: 'Head of Design',
    image: '/images/team/team-3.png',
  },
  {
    name: 'Emma Wilson',
    role: 'UX Designer',
    image: '/images/team/team-4.png',
  },
  {
    name: 'Nathan Reed',
    role: 'Product Designer',
    image: '/images/team/team-5.png',
  },
  {
    name: 'Olivia Harris',
    role: 'Head of Development',
    image: '/images/team/team-6.png',
  },
  {
    name: 'James Miller',
    role: 'Frontend Engineer',
    image: '/images/team/team-7.png',
  },
  {
    name: 'Ava Thompson',
    role: 'UI Designer',
    image: '/images/team/team-8.png',
  },
]

function AboutUsPage() {
  return (
    <>
      <PageHeader />

      <main>
        <section className="bg-white py-10 sm:py-14 lg:py-[88px]">
          <Container className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12 xl:gap-[96px]">
            <div className="min-w-0">
              <span className="inline-block bg-[#2da5f3] px-4 py-2 text-[13px] font-semibold uppercase text-white">
                Who We Are
              </span>

              <h1 className="mt-5 text-[30px] font-semibold leading-tight text-[#191c1f] sm:mt-6 sm:text-[36px] lg:text-[40px] lg:leading-[48px]">
                Clicon is one of the largest electronics retail shops in the
                world.
              </h1>

              <p className="mt-5 text-[14px] leading-6 text-[#475156] sm:mt-6 sm:text-[16px] sm:leading-[26px]">
                Clicon helps customers find reliable electronics, gadgets, and
                accessories in one simple online marketplace. Our goal is to
                make shopping easy, secure, and affordable for everyone.
              </p>

              <div className="mt-5 flex flex-col gap-3 sm:mt-6 sm:gap-[14px]">
                {[
                  'Friendly 24/7 customer support.',
                  '600+ dedicated team members.',
                  '50+ branches and partner locations worldwide.',
                  'Over 1 million electronics products available.',
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 text-[14px] leading-6 text-[#191c1f] sm:items-center sm:text-[15px]"
                  >
                    <Check
                      size={18}
                      className="mt-0.5 shrink-0 text-[#2db224] sm:mt-0"
                    />

                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <img
              src="/images/about/about-hero.png"
              alt="Clicon team meeting"
              className="h-[260px] w-full rounded-sm object-cover sm:h-[340px] lg:h-[420px]"
            />
          </Container>
        </section>

        <section className="border-t border-[#e4e7e9] bg-white py-10 sm:py-14 lg:py-[72px]">
          <Container>
            <h2 className="text-center text-[26px] font-semibold leading-tight text-[#191c1f] sm:text-[30px] lg:text-[32px]">
              Our Core Team Members
            </h2>

            <div className="mt-7 grid grid-cols-1 gap-4 sm:mt-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-6">
              {teamMembers.map((member) => (
                <article
                  key={member.name}
                  className="flex min-h-[88px] items-center gap-4 border border-[#e4e7e9] bg-white px-4 py-4 sm:px-6"
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-14 w-14 shrink-0 rounded-full object-cover"
                  />

                  <div className="min-w-0">
                    <h3 className="text-[15px] font-semibold text-[#191c1f]">
                      {member.name}
                    </h3>

                    <p className="mt-1 text-[13px] text-[#5f6c72]">
                      {member.role}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </Container>
        </section>

        <section className="relative min-h-[420px] overflow-hidden bg-[#f2f4f5] sm:min-h-[400px] lg:h-[360px] lg:min-h-0">
          <img
            src="/images/about/video-banner.png"
            alt="Trusted electronics retail shop"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 z-10 bg-white/90 lg:inset-y-0 lg:left-0 lg:right-auto lg:w-[520px] lg:bg-white/95" />

          <Container className="relative z-20 flex min-h-[420px] items-center py-10 sm:min-h-[400px] lg:h-[360px] lg:min-h-0 lg:py-0">
            <div className="w-full max-w-[390px]">
              <h2 className="text-[28px] font-semibold leading-tight text-[#191c1f] sm:text-[32px] lg:text-[36px] lg:leading-[44px]">
                Your trusted and reliable retail shop
              </h2>

              <p className="mt-4 text-[14px] leading-6 text-[#475156] sm:mt-[18px] sm:text-[16px] sm:leading-[26px]">
                We focus on quality products, secure payments, fast delivery,
                and helpful customer service.
              </p>

              <button
                type="button"
                className="mt-6 grid h-14 w-14 place-items-center rounded-full bg-[#fa8232] text-white sm:mt-7 sm:h-16 sm:w-16"
                aria-label="Play video"
              >
                <Play size={26} fill="white" />
              </button>
            </div>
          </Container>
        </section>

        <ProductLists />
        <Newsletter />
      </main>

      <Footer />
    </>
  )
}

export default AboutUsPage