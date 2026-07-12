import {
  ArrowRight,
  Eye,
  Heart,
  ShoppingCart,
  Star,
} from 'lucide-react'

import { computerAccessories } from '../data/products'
import Container from './Container'

function ComputerAccessories() {
  const tabs = [
    'All Product',
    'Keyboard & Mouse',
    'Headphone',
    'Webcam',
    'Printer',
  ]

  return (
    <section className="w-full bg-white pb-8 pt-10 sm:pt-14 lg:pt-[72px]">
      <Container>
        <div className="mb-5 flex flex-col gap-4 sm:mb-6 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="shrink-0 text-[22px] font-semibold leading-8 text-[#191c1f] sm:text-[24px]">
            Computer Accessories
          </h2>

          <div className="flex min-w-0 items-center gap-4 overflow-x-auto pb-1 text-nowrap">
            {tabs.map((tab, index) => (
              <button
                key={tab}
                className={`h-10 shrink-0 px-2 text-[14px] font-medium leading-5 ${
                  index === 0
                    ? 'border-b-2 border-[#fa8232] text-[#191c1f]'
                    : 'text-[#5f6c72]'
                }`}
              >
                {tab}
              </button>
            ))}

            <a
              href="#"
              className="flex h-10 shrink-0 items-center gap-2 text-[14px] font-semibold leading-5 text-[#fa8232]"
            >
              Browse All Product <ArrowRight size={18} />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 xl:grid-cols-[minmax(0,984px)_312px]">
          <div className="grid grid-cols-1 border border-[#e4e7e9] bg-white sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {computerAccessories.map((product) => (
              <AccessoryCard
                key={product.name}
                product={product}
              />
            ))}
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-1 xl:grid-rows-[384px_244px]">
            <article className="flex min-h-[360px] flex-col items-center overflow-hidden rounded-sm bg-[#fff3b8] px-6 pb-7 pt-6 text-center sm:px-8 xl:h-[384px]">
              <div className="flex h-[100px] items-center justify-center">
                <img
                  src="/images/computer-accessories/earbuds-promo.png"
                  alt="Xiaomi True Wireless Earbuds"
                  className="h-[120px] object-contain sm:h-[128px]"
                />
              </div>

              <h3 className="mt-4 text-[22px] font-semibold leading-[30px] text-[#191c1f] sm:text-[24px]">
                Xiaomi True <br />
                Wireless Earbuds
              </h3>

              <p className="mx-auto mt-2 max-w-[248px] text-[14px] leading-[21px] text-[#475156] sm:text-[15px]">
                Escape the noise, It’s time to hear the magic with Xiaomi
                Earbuds.
              </p>

              <div className="mt-3 flex items-center justify-center gap-2">
                <span className="text-[13px] leading-5 text-[#475156] sm:text-[14px]">
                  Only for:
                </span>

                <span className="rounded-sm bg-white px-3.5 py-2 text-[15px] font-semibold leading-6 text-[#191c1f] sm:text-[16px]">
                  $299 USD
                </span>
              </div>

              <button className="mt-[18px] flex h-12 w-full max-w-[248px] items-center justify-center gap-2.5 bg-[#fa8232] text-[14px] font-bold uppercase text-white">
                Shop Now <ArrowRight size={18} />
              </button>
            </article>

            <article className="min-h-[244px] rounded-sm bg-[#124261] px-6 pt-8 text-center sm:px-8 xl:h-[244px]">
              <span className="inline-block rounded-sm bg-white/15 px-4 py-2 text-[13px] font-semibold uppercase leading-5 text-white sm:text-[14px]">
                Summer Sales
              </span>

              <h3 className="mt-[18px] text-[25px] font-semibold leading-9 text-white sm:text-[28px]">
                37% DISCOUNT
              </h3>

              <p className="mt-2 text-[15px] leading-6 text-white sm:text-[16px]">
                only for{' '}
                <span className="font-semibold text-[#ebc80c]">
                  SmartPhone
                </span>{' '}
                product.
              </p>

              <button className="mx-auto mt-[22px] flex h-12 w-full max-w-[248px] items-center justify-center gap-2.5 bg-[#2da5f3] text-[14px] font-bold uppercase text-white">
                Shop Now <ArrowRight size={18} />
              </button>
            </article>
          </div>
        </div>
      </Container>
    </section>
  )
}

function AccessoryCard({ product }) {
  const openQuickView = () => {
    window.dispatchEvent(
      new CustomEvent('open-product-quick-view', {
        detail: product,
      })
    )
  }

  return (
    <article className="group relative min-w-0 border border-[#e4e7e9] bg-white p-3 sm:p-4">
      {product.badge && (
        <span
          className={`absolute left-3 top-3 z-10 px-2.5 py-1 text-[11px] font-semibold uppercase sm:left-4 sm:top-4 sm:text-[12px] ${product.badgeClass}`}
        >
          {product.badge}
        </span>
      )}

      <div className="relative grid h-[160px] place-items-center overflow-hidden sm:h-[188px]">
        <img
          src={product.image}
          alt={product.name}
          className="max-h-full max-w-full object-contain"
        />

        <div className="absolute inset-0 flex items-center justify-center gap-2 bg-black/0 opacity-0 transition group-hover:bg-black/20 group-hover:opacity-100 group-focus-within:bg-black/20 group-focus-within:opacity-100">
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-full bg-white text-[#191c1f] sm:h-12 sm:w-12"
            aria-label="Add to wishlist"
          >
            <Heart size={20} />
          </button>

          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-full bg-white text-[#191c1f] sm:h-12 sm:w-12"
            aria-label="Add to cart"
          >
            <ShoppingCart size={20} />
          </button>

          <button
            type="button"
            onClick={openQuickView}
            className="grid h-10 w-10 place-items-center rounded-full bg-[#fa8232] text-white sm:h-12 sm:w-12"
            aria-label="Quick view"
          >
            <Eye size={20} />
          </button>
        </div>
      </div>

      <div className="mt-3 flex items-center gap-0.5">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star
            key={index}
            size={14}
            className={
              index < 4
                ? 'fill-[#fa8232] text-[#fa8232]'
                : 'fill-transparent text-[#adb7bc]'
            }
          />
        ))}

        <span className="ml-1 text-[12px] text-[#77878f]">
          ({product.rating})
        </span>
      </div>

      <h3 className="mt-2 h-10 overflow-hidden text-[13px] leading-5 text-[#191c1f] sm:text-[14px]">
        {product.name}
      </h3>

      <div className="mt-2 flex flex-wrap items-center gap-1">
        {product.oldPrice && (
          <span className="text-[13px] text-[#929fa5] line-through sm:text-[14px]">
            {product.oldPrice}
          </span>
        )}

        <span className="text-[13px] font-semibold text-[#2da5f3] sm:text-[14px]">
          {product.price}
        </span>
      </div>
    </article>
  )
}

export default ComputerAccessories