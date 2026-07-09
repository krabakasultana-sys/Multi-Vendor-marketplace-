import { ArrowRight } from 'lucide-react'
import Container from './Container'

function Banner() {
  return (
    <section className="w-full bg-white pb-10 pt-8">
      <Container className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <article className="relative min-h-[320px] overflow-hidden rounded-sm bg-[#f2f4f5] p-6 sm:min-h-[336px] sm:p-10">
          <div className="relative z-10 max-w-[300px]">
            <span className="inline-block rounded-sm bg-[#2da5f3] px-3 py-2 text-[12px] font-semibold uppercase text-white sm:px-4 sm:text-[14px]">
              Introducing
            </span>

            <h2 className="mt-4 text-[27px] font-semibold leading-9 text-[#191c1f] sm:text-[32px] sm:leading-10">
              New Apple <br />
              Homepod Mini
            </h2>

            <p className="mt-4 max-w-[280px] text-[14px] leading-6 text-[#475156] sm:text-[16px]">
              Jam-packed with innovation, HomePod mini delivers unexpectedly.
            </p>

            <button className="mt-6 flex h-12 items-center gap-2.5 bg-[#fa8232] px-5 text-[13px] font-bold uppercase text-white sm:px-6 sm:text-[14px]">
              Shop Now <ArrowRight size={18} />
            </button>
          </div>

          <img
            src="/images/banner/homepod-mini.png"
            alt="Homepod Mini"
            className="absolute bottom-4 right-2 h-[170px] object-contain sm:right-6 sm:top-1/2 sm:h-[230px] sm:-translate-y-1/2 lg:right-10 lg:h-[250px]"
          />
        </article>

        <article className="relative min-h-[320px] overflow-hidden rounded-sm bg-[#191c1f] p-6 sm:min-h-[336px] sm:p-10">
          <div className="relative z-10 max-w-[310px]">
            <span className="inline-block rounded-sm bg-[#efd33d] px-3 py-2 text-[12px] font-semibold uppercase text-[#191c1f] sm:px-4 sm:text-[14px]">
              Introducing New
            </span>

            <h2 className="mt-4 text-[27px] font-semibold leading-9 text-white sm:text-[32px] sm:leading-10">
              Xiaomi Mi 11 Ultra <br />
              12GB+256GB
            </h2>

            <p className="mt-4 max-w-[290px] text-[14px] leading-6 text-[#adb7bc] sm:text-[16px]">
              *Data provided by internal laboratories. Industry measurment.
            </p>

            <button className="mt-6 flex h-12 items-center gap-2.5 bg-[#fa8232] px-5 text-[13px] font-bold uppercase text-white sm:px-6 sm:text-[14px]">
              Shop Now <ArrowRight size={18} />
            </button>
          </div>

          <img
            src="/images/banner/mi-phone.png"
            alt="Xiaomi Mi 11 Ultra"
            className="absolute bottom-0 right-0 h-[190px] object-contain sm:right-4 sm:h-[285px] lg:right-[34px] lg:h-[330px]"
          />

          <span className="absolute right-4 top-4 z-20 grid h-16 w-16 place-items-center rounded-full bg-[#2da5f3] text-[16px] font-semibold text-white sm:right-6 sm:top-6 sm:h-20 sm:w-20 sm:text-[20px] lg:right-9 lg:h-[88px] lg:w-[88px] lg:text-[22px]">
            $590
          </span>
        </article>
      </Container>
    </section>
  )
}

export default Banner