import { Heart, ShoppingCart, Eye, Star } from 'lucide-react'

function ProductCard({ product, imageHeight = 188 }) {
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
    <article className="group relative border border-[#e4e7e9] bg-white p-[16px]">
      {product.badge && (
        <span
          className={`absolute left-[16px] top-[16px] z-10 px-[10px] py-[5px] text-[12px] font-semibold uppercase ${product.badgeClass}`}
        >
          {product.badge}
        </span>
      )}

      <div
        className="relative grid place-items-center overflow-hidden bg-white"
        style={{ height: `${imageHeight}px` }}
      >
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

      {product.rating && (
        <div className="mt-[12px] flex items-center gap-[2px]">
          {Array.from({ length: 5 }).map((_, index) => (
            <Star
              key={index}
              size={14}
              className="fill-[#fa8232] text-[#fa8232]"
            />
          ))}

          <span className="ml-[4px] text-[12px] text-[#77878f]">
            ({product.rating})
          </span>
        </div>
      )}

      <h3 className="mt-[8px] min-h-[40px] text-[14px] leading-[20px] text-[#191c1f]">
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

export default ProductCard