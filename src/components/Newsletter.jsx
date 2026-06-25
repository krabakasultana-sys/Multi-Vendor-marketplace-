import { ArrowRight } from 'lucide-react'

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
    <section className="h-[452px] w-full bg-[#1b6392] pt-[72px] pb-[72px]">
      <div className="mx-auto flex w-[1320px] flex-col items-center text-center">
        <h2 className="text-[32px] font-semibold leading-[40px] text-white">
          Subscribe to our newsletter
        </h2>

        <p className="mt-[12px] w-[536px] text-[16px] leading-[24px] text-white/70">
          Get the latest product updates, special offers, shopping deals, and
          technology news delivered directly to your inbox.
        </p>

        <form className="mt-[32px] flex h-[72px] w-[624px] items-center rounded-sm bg-white p-[12px] shadow-[0_12px_32px_rgba(0,0,0,0.12)]">
          <input
            type="email"
            placeholder="Email address"
            className="h-full flex-1 px-[16px] text-[16px] text-[#77878f] outline-none"
          />

          <button
            type="button"
            className="flex h-[48px] items-center gap-[10px] bg-[#fa8232] px-[24px] text-[14px] font-bold uppercase text-white"
          >
            Subscribe <ArrowRight size={18} />
          </button>
        </form>

        <div className="mt-[32px] h-px w-[424px] bg-white/20" />

        <div className="mt-[24px] flex h-[40px] items-center justify-center gap-[48px]">
          {brands.map((brand) => (
            <img
              key={brand.name}
              src={brand.image}
              alt={brand.name}
              className={`${brand.className} h-auto object-contain opacity-60`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Newsletter