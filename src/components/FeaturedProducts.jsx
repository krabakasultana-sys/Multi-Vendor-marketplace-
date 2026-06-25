import { ArrowRight } from 'lucide-react'
import ProductCard from './ProductCard'
import { featuredProducts } from '../data/products'

function FeaturedProducts() {
  const tabs = ['All Product', 'Smart Phone', 'Laptop', 'Headphone', 'TV']

  return (
    <section className="w-full bg-white pt-[72px] pb-[40px]">
      <div className="mx-auto grid w-[1320px] grid-cols-[312px_984px] gap-[24px]">
        <aside className="h-[716px] rounded-sm bg-[#f3de6d] p-[40px] text-center">
          <p className="text-[14px] font-semibold uppercase leading-[20px] text-[#be4646]">
            Computer & Accessories
          </p>

          <h2 className="mt-[12px] text-[32px] font-semibold leading-[40px] text-[#191c1f]">
            32% Discount
          </h2>

          <p className="mt-[12px] text-[16px] leading-[24px] text-[#475156]">
            For all electronics products
          </p>

          <p className="mt-[20px] text-[14px] leading-[20px] text-[#191c1f]">
            Offers ends in:{' '}
            <span className="ml-[8px] inline-block bg-white px-[12px] py-[8px] font-semibold">
              ENDS OF CHRISTMAS
            </span>
          </p>

          <button className="mx-auto mt-[32px] flex h-[56px] items-center gap-[12px] bg-[#fa8232] px-[32px] text-[16px] font-bold uppercase text-white">
            Shop Now <ArrowRight size={22} />
          </button>

          <img
            src="/images/promo/electronics-promo.png"
            alt="Electronics promo"
            className="mx-auto mt-[48px] h-[390px] object-contain"
          />
        </aside>

        <div className="h-[716px]">
          <div className="mb-[24px] flex h-[40px] items-center justify-between">
            <h2 className="text-[24px] font-semibold leading-[32px] text-[#191c1f]">
              Featured Products
            </h2>

            <div className="flex h-[40px] items-center gap-[16px]">
              {tabs.map((tab, index) => (
                <button
                  key={tab}
                  className={`h-[40px] text-[14px] font-medium ${
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
                className="flex items-center gap-[8px] text-[14px] font-semibold text-[#fa8232]"
              >
                Browse All Product <ArrowRight size={18} />
              </a>
            </div>
          </div>

          <div className="grid h-[652px] grid-cols-4 grid-rows-2 border border-[#e4e7e9] bg-white">
            {featuredProducts.map((product, index) => (
              <ProductCard
                key={product.name}
                product={product}
                imageHeight={188}
                className={getFeaturedCardBorder(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function getFeaturedCardBorder(index) {
  const isBottomRow = index >= 4
  const isLastColumn = index === 3 || index === 7

  let classes = ''

  if (!isLastColumn) classes += ' border-r border-[#e4e7e9]'
  if (!isBottomRow) classes += ' border-b border-[#e4e7e9]'

  return classes
}

export default FeaturedProducts