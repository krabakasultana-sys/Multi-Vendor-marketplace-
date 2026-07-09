import { useEffect, useState } from 'react'
import {
  ArrowRight,
  Eye,
  Heart,
  ShoppingCart,
  Star,
} from 'lucide-react'

import Container from './Container'
import ProductCard from './ProductCard'
import { apiRequest } from '../services/api'

function TodayBestDeals() {
  const [products, setProducts] = useState([])
  const [error, setError] = useState('')

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
          badge: product.isFeatured ? '32% OFF' : '',
          badgeClass: 'bg-[#efd33d] text-[#191c1f]',
        }))

        setProducts(formattedProducts)
      } catch (requestError) {
        setError(requestError.message || 'Unable to load products.')
      }
    }

    loadProducts()
  }, [])

  const mainDealProduct = products[0]
  const bestDealProducts = [...products, ...products].slice(1, 9)

  const openQuickView = () => {
    if (!mainDealProduct) return

    window.dispatchEvent(
      new CustomEvent('open-product-quick-view', {
        detail: mainDealProduct,
      })
    )
  }

  if (!mainDealProduct) {
    return (
      <section className="w-full bg-white pt-10 sm:pt-14 lg:pt-[72px]">
        <Container>
          <div className="min-h-[220px] border border-[#e4e7e9] bg-white p-8 text-center text-[#5f6c72] sm:min-h-[300px] sm:p-10">
            {error || 'Loading products...'}
          </div>
        </Container>
      </section>
    )
  }

  return (
    <section className="w-full bg-white pt-10 sm:pt-14 lg:pt-[72px]">
      <Container>
        <div className="mb-5 flex flex-col gap-4 sm:mb-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
            <h2 className="text-[22px] font-semibold leading-8 text-[#191c1f] sm:text-[24px]">
              Today Best Deals
            </h2>

            <span className="w-fit bg-[#f3de6d] px-3 py-2 text-[13px] font-medium text-[#191c1f] sm:px-4 sm:text-[16px]">
              16d : 21h : 57m : 23s
            </span>
          </div>

          <a
            href="#"
            className="flex h-8 w-fit items-center gap-2 text-[14px] font-semibold text-[#2da5f3]"
          >
            Browse All Product <ArrowRight size={18} />
          </a>
        </div>

        <div className="grid overflow-hidden border border-[#e4e7e9] bg-white lg:grid-cols-[minmax(280px,328px)_minmax(0,1fr)]">
          <article className="relative border-b border-[#e4e7e9] bg-white p-5 pb-[110px] sm:p-6 sm:pb-[110px] lg:min-h-[588px] lg:border-b-0 lg:border-r">
            <div className="relative mx-auto h-[230px] max-w-[320px] sm:h-[270px]">
              <span className="absolute left-0 top-0 z-10 bg-[#efd33d] px-3 py-1.5 text-[11px] font-semibold uppercase text-[#191c1f] sm:text-[12px]">
                32% OFF
              </span>

              <span className="absolute left-0 top-10 z-10 bg-[#ee5858] px-3 py-1.5 text-[11px] font-semibold uppercase text-white sm:text-[12px]">
                Hot
              </span>

              <div className="flex h-full w-full items-center justify-center">
                <img
                  src={mainDealProduct.image}
                  alt={mainDealProduct.name}
                  className="max-h-[220px] w-auto object-contain sm:max-h-[245px]"
                />
              </div>
            </div>

            <div className="mt-4 flex items-center gap-0.5 sm:mt-[18px]">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star
                  key={index}
                  size={18}
                  className="fill-[#ebc80c] text-[#ebc80c]"
                />
              ))}

              <span className="ml-1 text-[14px] leading-5 text-[#77878f]">
                ({mainDealProduct.rating})
              </span>
            </div>

            <h3 className="mt-2.5 min-h-[48px] overflow-hidden text-[15px] leading-6 text-[#191c1f] sm:text-[16px]">
              {mainDealProduct.name}
            </h3>

            <div className="mt-2 flex flex-wrap items-center gap-1.5">
              {mainDealProduct.oldPrice && (
                <span className="text-[15px] leading-6 text-[#929fa5] line-through sm:text-[16px]">
                  {mainDealProduct.oldPrice}
                </span>
              )}

              <span className="text-[18px] font-semibold leading-7 text-[#2da5f3] sm:text-[20px]">
                {mainDealProduct.price}
              </span>
            </div>

            <p className="mt-3 max-h-[66px] overflow-hidden text-[13px] leading-[22px] text-[#5f6c72] sm:text-[14px]">
              {mainDealProduct.description}
            </p>

            <div className="absolute bottom-6 left-5 right-5 grid grid-cols-[44px_1fr_44px] gap-2 sm:left-6 sm:right-6 sm:grid-cols-[48px_1fr_48px] lg:bottom-[34px]">
              <button
                type="button"
                className="grid h-11 place-items-center bg-[#ffe7d6] text-[#191c1f] sm:h-12"
                aria-label="Add to wishlist"
              >
                <Heart size={20} />
              </button>

              <button
                type="button"
                className="flex h-11 items-center justify-center gap-2 bg-[#fa8232] px-2 text-[12px] font-bold uppercase text-white sm:h-12 sm:text-[14px]"
              >
                <ShoppingCart size={18} /> Add to Cart
              </button>

              <button
                type="button"
                onClick={openQuickView}
                className="grid h-11 place-items-center bg-[#ffe7d6] text-[#191c1f] sm:h-12"
                aria-label="Quick view"
              >
                <Eye size={20} />
              </button>
            </div>
          </article>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">
            {bestDealProducts.map((product, index) => (
              <ProductCard
                key={`${product._id}-${index}`}
                product={product}
                imageHeight={150}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

export default TodayBestDeals