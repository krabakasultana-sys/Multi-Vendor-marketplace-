import { useEffect, useState } from 'react'
import { ArrowRight } from 'lucide-react'

import Container from './Container'
import ProductCard from './ProductCard'
import { apiRequest } from '../services/api'

function FeaturedProducts() {
  const tabs = ['All Product', 'Smart Phone', 'Laptop', 'Headphone', 'TV']
  const [products, setProducts] = useState([])

  useEffect(() => {
    async function loadProducts() {
      try {
        const data = await apiRequest('/api/products')

        const formattedProducts = data.products.map((product) => ({
          ...product,
          price: `$${Number(product.price).toFixed(2)}`,
          oldPrice: product.oldPrice
            ? `$${Number(product.oldPrice).toFixed(2)}`
            : '',
          rating: product.reviews || product.rating || 0,
          badge: product.isFeatured ? 'Featured' : '',
        }))

        setProducts(formattedProducts)
      } catch (error) {
        console.log(error.message)
      }
    }

    loadProducts()
  }, [])

  const featuredProducts = products
    .filter((product) => product.isFeatured)
    .concat(products)
    .slice(0, 8)

  return (
    <section className="w-full bg-white pb-10 pt-10 sm:pt-14 lg:pt-[72px]">
      <Container className="grid grid-cols-1 gap-6 xl:grid-cols-[312px_minmax(0,984px)]">
        <aside className="overflow-hidden rounded-sm bg-[#f3de6d] p-6 text-center sm:p-8 xl:min-h-[716px] xl:p-10">
          <p className="text-[13px] font-semibold uppercase leading-5 text-[#be4646] sm:text-[14px]">
            Computer & Accessories
          </p>

          <h2 className="mt-3 text-[28px] font-semibold leading-9 text-[#191c1f] sm:text-[32px] sm:leading-10">
            32% Discount
          </h2>

          <p className="mt-3 text-[15px] leading-6 text-[#475156] sm:text-[16px]">
            For all electronics products
          </p>

          <p className="mt-5 text-[13px] leading-5 text-[#191c1f] sm:text-[14px]">
            Offers ends in:{' '}
            <span className="ml-2 inline-block bg-white px-3 py-2 font-semibold">
              ENDS OF CHRISTMAS
            </span>
          </p>

          <button className="mx-auto mt-7 flex h-12 items-center gap-3 bg-[#fa8232] px-6 text-[14px] font-bold uppercase text-white sm:mt-8 sm:h-14 sm:px-8 sm:text-[16px]">
            Shop Now <ArrowRight size={22} />
          </button>

          <img
            src="/images/promo/electronics-promo.png"
            alt="Electronics promo"
            className="mx-auto mt-8 max-h-[300px] w-full object-contain sm:mt-10 xl:mt-12 xl:max-h-[390px]"
          />
        </aside>

        <div className="min-w-0">
          <div className="mb-5 flex flex-col gap-4 sm:mb-6 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="shrink-0 text-[22px] font-semibold leading-8 text-[#191c1f] sm:text-[24px]">
              Featured Products
            </h2>

            <div className="flex min-w-0 items-center gap-4 overflow-x-auto pb-1 text-nowrap">
              {tabs.map((tab, index) => (
                <button
                  key={tab}
                  className={`h-10 shrink-0 text-[14px] font-medium ${
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
                className="flex shrink-0 items-center gap-2 text-[14px] font-semibold text-[#fa8232]"
              >
                Browse All Product <ArrowRight size={18} />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 border border-[#e4e7e9] bg-white sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {featuredProducts.map((product, index) => (
              <ProductCard
                key={`${product._id}-${index}`}
                product={product}
                imageHeight={188}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

export default FeaturedProducts