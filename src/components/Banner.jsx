import { ArrowRight } from 'lucide-react'

function Banner() {
  return (
    <section className="w-full bg-white pt-[32px] pb-[40px]">
      <div className="mx-auto grid w-[1320px] grid-cols-2 gap-[24px]">
        <article className="relative h-[336px] overflow-hidden rounded-sm bg-[#f2f4f5] p-[40px]">
          <div className="relative z-10 w-[300px]">
            <span className="inline-block rounded-sm bg-[#2da5f3] px-[16px] py-[8px] text-[14px] font-semibold uppercase text-white">
              Introducing
            </span>

            <h2 className="mt-[16px] text-[32px] font-semibold leading-[40px] text-[#191c1f]">
              New Apple <br />
              Homepod Mini
            </h2>

            <p className="mt-[16px] text-[16px] leading-[24px] text-[#475156]">
              Jam-packed with innovation, HomePod mini delivers unexpectedly.
            </p>

            <button className="mt-[24px] flex h-[48px] items-center gap-[10px] bg-[#fa8232] px-[24px] text-[14px] font-bold uppercase text-white">
              Shop Now <ArrowRight size={18} />
            </button>
          </div>

          <img
            src="/images/banner/homepod-mini.png"
            alt="Homepod Mini"
            className="absolute right-[40px] top-1/2 h-[250px] -translate-y-1/2 object-contain"
          />
        </article>

        <article className="relative h-[336px] overflow-hidden rounded-sm bg-[#191c1f] p-[40px]">
          <div className="relative z-10 w-[310px]">
            <span className="inline-block rounded-sm bg-[#efd33d] px-[16px] py-[8px] text-[14px] font-semibold uppercase text-[#191c1f]">
              Introducing New
            </span>

            <h2 className="mt-[16px] text-[32px] font-semibold leading-[40px] text-white">
              Xiaomi Mi 11 Ultra <br />
              12GB+256GB
            </h2>

            <p className="mt-[16px] text-[16px] leading-[24px] text-[#adb7bc]">
              *Data provided by internal laboratories. Industry measurment.
            </p>

            <button className="mt-[24px] flex h-[48px] items-center gap-[10px] bg-[#fa8232] px-[24px] text-[14px] font-bold uppercase text-white">
              Shop Now <ArrowRight size={18} />
            </button>
          </div>

          <img
            src="/images/banner/mi-phone.png"
            alt="Xiaomi Mi 11 Ultra"
            className="absolute bottom-0 right-[34px] h-[330px] object-contain"
          />

          <span className="absolute right-[36px] top-[24px] z-20 grid h-[88px] w-[88px] place-items-center rounded-full bg-[#2da5f3] text-[22px] font-semibold text-white">
            $590
          </span>
        </article>
      </div>
    </section>
  )
}

export default Banner