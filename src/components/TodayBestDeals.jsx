import { ArrowRight, Eye, Heart, ShoppingCart, Star } from 'lucide-react'
import ProductCard from './ProductCard'
import { bestDealProducts } from '../data/products'

function TodayBestDeals() {
  const mainDealProduct = {
    name: 'Xbox Series S -512GB SSD Console with Wireless Controller - EU Version',
    price: '$442.12',
    oldPrice: '$865.99',
    image: '/images/products/ps5.png',
    badge: '32% OFF',
    badgeClass: 'bg-[#efd33d] text-[#191c1f]',
    rating: '52,677',
  }

  const openQuickView = () => {
    window.dispatchEvent(
      new CustomEvent('open-product-quick-view', {
        detail: mainDealProduct,
      })
    )
  }

  return (
    <section className="w-full bg-white pt-[72px] pb-0">
      <div className="mx-auto w-[1320px]">
        <div className="mb-[24px] flex h-[40px] items-center justify-between">
          <div className="flex items-center gap-[24px]">
            <h2 className="text-[24px] font-semibold leading-[32px] text-[#191c1f]">
              Today Best Deals
            </h2>

            <span className="bg-[#f3de6d] px-[16px] py-[8px] text-[16px] font-medium text-[#191c1f]">
              16d : 21h : 57m : 23s
            </span>
          </div>

          <a
            href="#"
            className="flex h-[32px] items-center gap-[8px] text-[14px] font-semibold text-[#2da5f3]"
          >
            Browse All Product <ArrowRight size={18} />
          </a>
        </div>

        <div className="grid h-[588px] w-[1320px] grid-cols-[328px_992px] border border-[#e4e7e9] bg-white overflow-hidden">
          {/* Big left product */}
          <article className="relative h-[588px] border-r border-[#e4e7e9] bg-white p-[24px]">
            <div className="relative h-[270px] w-full">
              <span className="absolute left-0 top-0 z-10 bg-[#efd33d] px-[12px] py-[5px] text-[12px] font-semibold uppercase text-[#191c1f]">
                32% OFF
              </span>

              <span className="absolute left-0 top-[40px] z-10 bg-[#ee5858] px-[12px] py-[5px] text-[12px] font-semibold uppercase text-white">
                Hot
              </span>

              <div className="flex h-full w-full items-center justify-center">
                <img
                  src="/images/products/ps5.png"
                  alt="Xbox Series S"
                  className="h-[245px] w-auto object-contain"
                />
              </div>
            </div>

            <div className="mt-[18px] flex items-center gap-[2px]">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star
                  key={index}
                  size={18}
                  className="fill-[#ebc80c] text-[#ebc80c]"
                />
              ))}

              <span className="ml-[4px] text-[14px] leading-[20px] text-[#77878f]">
                (52,677)
              </span>
            </div>

            <h3 className="mt-[10px] h-[48px] overflow-hidden text-[16px] leading-[24px] text-[#191c1f]">
              Xbox Series S -512GB SSD Console with Wireless Controller - EU
              Version
            </h3>

            <div className="mt-[8px] flex items-center gap-[6px]">
              <span className="text-[16px] leading-[24px] text-[#929fa5] line-through">
                $865.99
              </span>

              <span className="text-[20px] font-semibold leading-[28px] text-[#2da5f3]">
                $442.12
              </span>
            </div>

            <p className="mt-[12px] h-[44px] overflow-hidden text-[14px] leading-[22px] text-[#5f6c72]">
              Games built using the Xbox Series X|S development kit showcase
              unparalleled load times, visuals.
            </p>

            <div className="absolute bottom-[34px] left-[24px] right-[24px] grid grid-cols-[48px_1fr_48px] gap-[8px]">
              <button className="grid h-[48px] place-items-center bg-[#ffe7d6] text-[#191c1f]">
                <Heart size={20} />
              </button>

              <button className="flex h-[48px] items-center justify-center gap-[8px] bg-[#fa8232] text-[14px] font-bold uppercase text-white">
                <ShoppingCart size={18} /> Add to Cart
              </button>

              <button
                type="button"
                onClick={openQuickView}
                className="grid h-[48px] place-items-center bg-[#ffe7d6] text-[#191c1f]"
              >
                <Eye size={20} />
              </button>
            </div>
          </article>

          {/* Right product grid */}
          <div className="grid h-[588px] grid-cols-4 grid-rows-[294px_294px]">
            {bestDealProducts.map((product) => (
              <ProductCard
                key={product.name}
                product={product}
                imageHeight={150}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TodayBestDeals