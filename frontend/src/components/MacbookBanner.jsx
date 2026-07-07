import { ArrowRight } from 'lucide-react'
import Container from './Container'

function MacbookBanner() {
  return (
    <section className="w-full bg-white pt-8">
      <Container className="max-w-[1438px]">
        <article className="relative min-h-[430px] overflow-hidden bg-[#ffe7d6] px-6 py-10 sm:min-h-[424px] sm:px-10 sm:py-12 lg:px-[72px] lg:py-20">
          <div className="relative z-10 max-w-[560px]">
            <span className="inline-block rounded-sm bg-[#2da5f3] px-3 py-2 text-[12px] font-semibold uppercase leading-5 text-white sm:px-4 sm:text-[14px]">
              Save up to $200.00
            </span>

            <h2 className="mt-4 text-[36px] font-semibold leading-tight text-[#191c1f] sm:mt-[18px] sm:text-[44px] lg:text-[48px] lg:leading-[56px]">
              Macbook Pro
            </h2>

            <p className="mt-4 max-w-[500px] text-[17px] leading-7 text-[#191c1f] sm:mt-[18px] sm:text-[21px] sm:leading-8 lg:text-[24px]">
              Apple M1 Max Chip, 32GB Unified Memory, 1TB SSD Storage
            </p>

            <button className="mt-6 flex h-12 items-center gap-3 bg-[#fa8232] px-6 text-[14px] font-bold uppercase text-white sm:mt-7 sm:h-14 sm:px-8 sm:text-[16px]">
              Shop Now <ArrowRight size={22} />
            </button>
          </div>

          <img
            src="/images/banner/macbook-pro.png"
            alt="Macbook Pro"
            className="absolute bottom-4 right-[-30px] h-[190px] object-contain sm:bottom-6 sm:right-4 sm:h-[250px] lg:bottom-14 lg:right-16 lg:h-[355px]"
          />

          <div className="absolute bottom-[185px] right-4 z-20 grid h-20 w-20 place-items-center rounded-full border-[3px] border-white bg-[#ffd3b3] text-[15px] font-semibold text-[#191c1f] sm:bottom-auto sm:right-[250px] sm:top-8 sm:h-24 sm:w-24 sm:text-[18px] lg:right-[390px] lg:top-[50px] lg:h-[124px] lg:w-[124px] lg:border-4 lg:text-[20px]">
            $1999
          </div>
        </article>
      </Container>
    </section>
  )
}

export default MacbookBanner