import { ArrowRight } from 'lucide-react'
import Container from './Container'

function Newsletter() {
  const brands = [
    {
      name: 'Google',
      image: '/images/brands/google.png',
      className: 'w-[78px]',
    },
    {
      name: 'Amazon',
      image: '/images/brands/amazon.png',
      className: 'w-[84px]',
    },
    {
      name: 'Philips',
      image: '/images/brands/philips.png',
      className: 'w-[82px]',
    },
    {
      name: 'Toshiba',
      image: '/images/brands/toshiba.png',
      className: 'w-[84px]',
    },
    {
      name: 'Samsung',
      image: '/images/brands/samsung.png',
      className: 'w-[94px]',
    },
  ]

  return (
    <section className="w-full bg-[#1b6392] py-10 sm:py-14 lg:py-[72px]">
      <Container className="flex flex-col items-center text-center">
        <h2 className="text-[27px] font-semibold leading-9 text-white sm:text-[32px] sm:leading-10">
          Subscribe to our newsletter
        </h2>

        <p className="mt-3 max-w-[536px] text-[14px] leading-6 text-white/70 sm:text-[16px]">
          Get the latest product updates, special offers, shopping deals, and
          technology news delivered directly to your inbox.
        </p>

        <form className="mt-7 flex w-full max-w-[624px] flex-col gap-3 rounded-sm bg-white p-3 shadow-[0_12px_32px_rgba(0,0,0,0.12)] sm:mt-8 sm:h-[72px] sm:flex-row sm:items-center sm:gap-0">
          <input
            type="email"
            placeholder="Email address"
            className="h-12 min-w-0 flex-1 px-4 text-[14px] text-[#77878f] outline-none sm:h-full sm:text-[16px]"
          />

          <button
            type="button"
            className="flex h-12 items-center justify-center gap-2.5 bg-[#fa8232] px-6 text-[14px] font-bold uppercase text-white"
          >
            Subscribe <ArrowRight size={18} />
          </button>
        </form>

        <div className="mt-8 h-px w-full max-w-[424px] bg-white/20" />

        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-5 sm:gap-x-12">
          {brands.map((brand) => (
            <img
              key={brand.name}
              src={brand.image}
              alt={brand.name}
              className={`${brand.className} h-auto object-contain opacity-60`}
            />
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Newsletter