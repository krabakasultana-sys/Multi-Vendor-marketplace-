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
        <section className="bg-white py-[88px]">
          <Container className="grid grid-cols-2 items-center gap-[96px]">
            <div>
              <span className="bg-[#2da5f3] px-[16px] py-[8px] text-[13px] font-semibold uppercase text-white">
                Who We Are
              </span>

              <h1 className="mt-[24px] text-[40px] font-semibold leading-[48px] text-[#191c1f]">
                Clicon is one of the largest electronics retail shops in the
                world.
              </h1>

              <p className="mt-[24px] text-[16px] leading-[26px] text-[#475156]">
                Clicon helps customers find reliable electronics, gadgets, and
                accessories in one simple online marketplace. Our goal is to
                make shopping easy, secure, and affordable for everyone.
              </p>

              <div className="mt-[24px] flex flex-col gap-[14px]">
                {[
                  'Friendly 24/7 customer support.',
                  '600+ dedicated team members.',
                  '50+ branches and partner locations worldwide.',
                  'Over 1 million electronics products available.',
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-[12px] text-[15px] text-[#191c1f]"
                  >
                    <Check size={18} className="text-[#2db224]" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <img
              src="/images/about/about-hero.png"
              alt="Clicon team meeting"
              className="h-[420px] w-full rounded-sm object-cover"
            />
          </Container>
        </section>

        <section className="border-t border-[#e4e7e9] bg-white py-[72px]">
          <Container>
            <h2 className="text-center text-[32px] font-semibold text-[#191c1f]">
              Our Core Team Members
            </h2>

            <div className="mt-[40px] grid grid-cols-4 gap-[24px]">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="flex h-[88px] items-center gap-[16px] border border-[#e4e7e9] bg-white px-[24px]"
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-[56px] w-[56px] rounded-full object-cover"
                  />

                  <div>
                    <h3 className="text-[15px] font-semibold text-[#191c1f]">
                      {member.name}
                    </h3>

                    <p className="mt-[4px] text-[13px] text-[#5f6c72]">
                      {member.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        <section className="relative h-[360px] overflow-hidden bg-[#f2f4f5]">
          <img
            src="/images/about/video-banner.png"
            alt="Trusted electronics retail shop"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-y-0 left-0 z-10 w-[520px] bg-white/95" />

          <Container className="relative z-20 flex h-[360px] items-center">
            <div className="w-[390px]">
              <h2 className="text-[36px] font-semibold leading-[44px] text-[#191c1f]">
                Your trusted and reliable retail shop
              </h2>

              <p className="mt-[18px] text-[16px] leading-[26px] text-[#475156]">
                We focus on quality products, secure payments, fast delivery,
                and helpful customer service.
              </p>

              <button
                type="button"
                className="mt-[28px] grid h-[64px] w-[64px] place-items-center rounded-full bg-[#fa8232] text-white"
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