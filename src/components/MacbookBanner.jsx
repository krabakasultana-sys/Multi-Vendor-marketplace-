import { ArrowRight } from 'lucide-react'

function MacbookBanner() {
  return (
    <section className="w-full bg-white pt-[32px] pb-0">
      <div className="mx-auto w-[1438px]">
        <article className="relative h-[424px] overflow-hidden bg-[#ffe7d6]">
          <div className="absolute left-[72px] top-[80px] z-10">
            <span className="inline-block rounded-sm bg-[#2da5f3] px-[16px] py-[8px] text-[14px] font-semibold uppercase leading-5 text-white">
              Save up to $200.00
            </span>

            <h2 className="mt-[18px] text-[48px] font-semibold leading-[56px] text-[#191c1f]">
              Macbook Pro
            </h2>

            <p className="mt-[18px] w-[500px] text-[24px] leading-[32px] text-[#191c1f]">
              Apple M1 Max Chip, 32GB Unified Memory, 1TB SSD Storage
            </p>

            <button className="mt-[28px] flex h-[56px] items-center gap-[12px] bg-[#fa8232] px-[32px] text-[16px] font-bold uppercase text-white">
              Shop Now <ArrowRight size={22} />
            </button>
          </div>

          <img
            src="/images/banner/macbook-pro.png"
            alt="Macbook Pro"
            className="absolute bottom-[56px] right-[64px] h-[355px] object-contain"
          />

          <div className="absolute right-[390px] top-[50px] z-20 grid h-[124px] w-[124px] place-items-center rounded-full border-4 border-white bg-[#ffd3b3] text-[20px] font-semibold text-[#191c1f]">
            $1999
          </div>
        </article>
      </div>
    </section>
  )
}

export default MacbookBanner