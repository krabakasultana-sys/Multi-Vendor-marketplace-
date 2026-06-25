import { ArrowRight, Eye, Heart, ShoppingCart, Star } from 'lucide-react'
import { computerAccessories } from '../data/products'

function ComputerAccessories() {
  const tabs = [
    'All Product',
    'Keyboard & Mouse',
    'Headphone',
    'Webcam',
    'Printer',
  ]

  return (
    <section className="w-full bg-white pt-[72px] pb-[32px]">
      <div className="mx-auto w-[1320px]">
        <div className="mb-[24px] flex h-[40px] items-center justify-between">
          <h2 className="text-[24px] font-semibold leading-[32px] text-[#191c1f]">
            Computer Accessories
          </h2>

          <div className="flex h-[40px] items-center gap-[20px]">
            <div className="flex h-[40px] items-center">
              {tabs.map((tab, index) => (
                <button
                  key={tab}
                  className={`h-[40px] px-[10px] text-[14px] font-medium leading-5 ${
                    index === 0
                      ? 'border-b-2 border-[#fa8232] text-[#191c1f]'
                      : 'text-[#5f6c72]'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <a
              href="#"
              className="flex h-[40px] items-center gap-[8px] text-[14px] font-semibold leading-5 text-[#fa8232]"
            >
              Browse All Product <ArrowRight size={18} />
            </a>
          </div>
        </div>

        <div className="grid h-[652px] grid-cols-[984px_312px] gap-[24px]">
          <div className="grid h-[652px] grid-cols-4 grid-rows-2 border border-[#e4e7e9] bg-white">
            {computerAccessories.map((product, index) => (
              <AccessoryCard
                key={product.name}
                product={product}
                className={getCardBorder(index)}
              />
            ))}
          </div>

          <div className="grid h-[652px] grid-rows-[384px_244px] gap-[24px]">
            <article className="flex h-[384px] flex-col items-center overflow-hidden rounded-sm bg-[#fff3b8] px-[32px] pt-[24px] pb-[28px] text-center">
              <div className="flex h-[100px] items-center justify-center">
                <img
                  src="/images/computer-accessories/earbuds-promo.png"
                  alt="Xiaomi True Wireless Earbuds"
                  className="h-[128px] object-contain"
                />
              </div>

              <h3 className="mt-[16px] text-[24px] font-semibold leading-[30px] text-[#191c1f]">
                Xiaomi True <br />
                Wireless Earbuds
              </h3>

              <p className="mx-auto mt-[8px] w-[248px] text-[15px] leading-[21px] text-[#475156]">
                Escape the noise, It’s time to hear the magic with Xiaomi
                Earbuds.
              </p>

              <div className="mt-[12px] flex items-center justify-center gap-[8px]">
                <span className="text-[14px] leading-5 text-[#475156]">
                  Only for:
                </span>

                <span className="rounded-sm bg-white px-[14px] py-[7px] text-[16px] font-semibold leading-6 text-[#191c1f]">
                  $299 USD
                </span>
              </div>

              <button className="mt-[18px] flex h-[48px] w-[248px] items-center justify-center gap-[10px] bg-[#fa8232] text-[14px] font-bold uppercase text-white">
                Shop Now <ArrowRight size={18} />
              </button>
            </article>

            <article className="h-[244px] rounded-sm bg-[#124261] px-[32px] pt-[32px] text-center">
              <span className="inline-block rounded-sm bg-white/15 px-[16px] py-[8px] text-[14px] font-semibold uppercase leading-5 text-white">
                Summer Sales
              </span>

              <h3 className="mt-[18px] text-[28px] font-semibold leading-[36px] text-white">
                37% DISCOUNT
              </h3>

              <p className="mt-[8px] text-[16px] leading-[24px] text-white">
                only for{' '}
                <span className="font-semibold text-[#ebc80c]">
                  SmartPhone
                </span>{' '}
                product.
              </p>

              <button className="mx-auto mt-[22px] flex h-[48px] w-[248px] items-center justify-center gap-[10px] bg-[#2da5f3] text-[14px] font-bold uppercase text-white">
                Shop Now <ArrowRight size={18} />
              </button>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

function AccessoryCard({ product, className = '' }) {
  const openQuickView = () => {
    window.dispatchEvent(
      new CustomEvent('open-product-quick-view', {
        detail: product,
      })
    )
  }

  return (
    <article className={`group relative bg-white p-[16px] ${className}`}>
      {product.badge && (
        <span
          className={`absolute left-[16px] top-[16px] z-10 px-[10px] py-[5px] text-[12px] font-semibold uppercase ${product.badgeClass}`}
        >
          {product.badge}
        </span>
      )}

      <div className="relative grid h-[188px] place-items-center overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="max-h-full max-w-full object-contain"
        />

        <div className="absolute inset-0 hidden items-center justify-center gap-[8px] bg-black/20 group-hover:flex">
          <button
            type="button"
            className="grid h-[48px] w-[48px] place-items-center rounded-full bg-white text-[#191c1f]"
          >
            <Heart size={21} />
          </button>

          <button
            type="button"
            className="grid h-[48px] w-[48px] place-items-center rounded-full bg-white text-[#191c1f]"
          >
            <ShoppingCart size={21} />
          </button>

          <button
            type="button"
            onClick={openQuickView}
            className="grid h-[48px] w-[48px] place-items-center rounded-full bg-[#fa8232] text-white"
          >
            <Eye size={21} />
          </button>
        </div>
      </div>

      <div className="mt-[12px] flex items-center gap-[2px]">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star
            key={index}
            size={14}
            className={`${
              index < 4
                ? 'fill-[#fa8232] text-[#fa8232]'
                : 'fill-transparent text-[#adb7bc]'
            }`}
          />
        ))}

        <span className="ml-[4px] text-[12px] text-[#77878f]">
          ({product.rating})
        </span>
      </div>

      <h3 className="mt-[8px] h-[40px] overflow-hidden text-[14px] leading-[20px] text-[#191c1f]">
        {product.name}
      </h3>

      <div className="mt-[8px] flex items-center gap-[4px]">
        {product.oldPrice && (
          <span className="text-[14px] text-[#929fa5] line-through">
            {product.oldPrice}
          </span>
        )}

        <span className="text-[14px] font-semibold text-[#2da5f3]">
          {product.price}
        </span>
      </div>
    </article>
  )
}

function getCardBorder(index) {
  const isBottomRow = index >= 4
  const isLastColumn = index === 3 || index === 7

  let classes = ''

  if (!isLastColumn) classes += ' border-r border-[#e4e7e9]'
  if (!isBottomRow) classes += ' border-b border-[#e4e7e9]'

  return classes
}

export default ComputerAccessories