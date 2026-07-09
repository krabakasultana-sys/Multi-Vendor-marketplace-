import { Eye, Heart, ShoppingCart, Star } from 'lucide-react'

function ProductCard({ product, imageHeight = 188, className = '' }) {
  const openQuickView = (event) => {
    event.preventDefault()
    event.stopPropagation()

    window.dispatchEvent(
      new CustomEvent('open-product-quick-view', {
        detail: product,
      })
    )
  }

  return (
    <article
      className={`group relative min-w-0 border border-[#e4e7e9] bg-white p-3 sm:p-4 ${className}`}
    >
      {product.badge && (
        <span
          className={`absolute left-3 top-3 z-10 px-2.5 py-1 text-[11px] font-semibold uppercase sm:left-4 sm:top-4 sm:text-[12px] ${
            product.badgeClass || 'bg-[#efd33d] text-[#191c1f]'
          }`}
        >
          {product.badge}
        </span>
      )}

      <div
        className="relative grid place-items-center overflow-hidden bg-white"
        style={{ height: `clamp(140px, 20vw, ${imageHeight}px)` }}
      >
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

      {product.rating ? (
        <div className="mt-3 flex items-center gap-0.5">
          {Array.from({ length: 5 }).map((_, index) => (
            <Star
              key={index}
              size={14}
              className="fill-[#fa8232] text-[#fa8232]"
            />
          ))}

          <span className="ml-1 text-[12px] text-[#77878f]">
            ({product.rating})
          </span>
        </div>
      ) : null}

      <h3 className="mt-2 min-h-[40px] overflow-hidden text-[13px] leading-5 text-[#191c1f] sm:text-[14px]">
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

export default ProductCard