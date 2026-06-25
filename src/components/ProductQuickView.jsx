import {
  ArrowLeft,
  ArrowRight,
  ChevronDown,
  Heart,
  Minus,
  Plus,
  RefreshCcw,
  ShoppingCart,
  Star,
  X,
} from 'lucide-react'

import { FaFacebookF, FaPinterestP, FaTwitter } from 'react-icons/fa'
import { FiCopy } from 'react-icons/fi'

function ProductQuickView({ product, onClose }) {
  const mainImage = product?.image || '/images/product-detail/macbook-main.png'
  const title =
    product?.name ||
    '2020 Apple MacBook Pro with Apple M1 Chip (13-inch, 8GB RAM, 256GB SSD Storage) - Space Gray'
  const price = product?.price || '$1699'
  const oldPrice = product?.oldPrice || '$1999.00'

  const thumbnails = [
    mainImage,
    '/images/product-detail/thumb-1.png',
    '/images/product-detail/thumb-2.png',
    '/images/product-detail/thumb-3.png',
    '/images/product-detail/thumb-4.png',
    '/images/product-detail/thumb-5.png',
  ]

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/75 px-[24px] py-[40px]">
      <div className="relative w-[1320px] max-h-[calc(100vh-80px)] overflow-y-auto rounded-sm bg-white p-[40px]">
        <button
          type="button"
          onClick={onClose}
          className="fixed right-[130px] top-[120px] z-[1000] grid h-[48px] w-[48px] place-items-center rounded-full bg-[#303639] text-white"
        >
          <X size={24} />
        </button>

        <div className="grid grid-cols-[616px_624px] gap-[40px]">
          {/* Left product image gallery */}
          <div>
            <div className="grid h-[430px] place-items-center rounded-sm border border-[#e4e7e9] bg-white">
              <img
                src={mainImage}
                alt={title}
                className="max-h-[330px] max-w-[520px] object-contain"
              />
            </div>

            <div className="relative mt-[24px] flex h-[88px] items-center gap-[12px]">
              <button className="absolute left-[-20px] z-10 grid h-[48px] w-[48px] place-items-center rounded-full bg-[#fa8232] text-white">
                <ArrowLeft size={22} />
              </button>

              {thumbnails.map((thumb, index) => (
                <div
                  key={`${thumb}-${index}`}
                  className={`grid h-[88px] w-[88px] place-items-center rounded-sm border bg-white ${
                    index === 0 ? 'border-[#fa8232]' : 'border-[#e4e7e9]'
                  }`}
                >
                  <img
                    src={thumb}
                    alt={`Product thumbnail ${index + 1}`}
                    className="max-h-[68px] max-w-[68px] object-contain"
                  />
                </div>
              ))}

              <button className="absolute right-[-20px] z-10 grid h-[48px] w-[48px] place-items-center rounded-full bg-[#fa8232] text-white">
                <ArrowRight size={22} />
              </button>
            </div>
          </div>

          {/* Right product information */}
          <div>
            <div className="flex items-center gap-[8px]">
              <div className="flex items-center gap-[2px]">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star
                    key={index}
                    size={18}
                    className="fill-[#fa8232] text-[#fa8232]"
                  />
                ))}
              </div>

              <span className="text-[14px] font-semibold text-[#191c1f]">
                4.7 Star Rating
              </span>

              <span className="text-[14px] text-[#5f6c72]">
                (21,671 User feedback)
              </span>
            </div>

            <h1 className="mt-[8px] w-[600px] text-[20px] font-medium leading-[28px] text-[#191c1f]">
              {title}
            </h1>

            <div className="mt-[20px] grid grid-cols-2 gap-y-[8px] text-[14px] leading-5">
              <p className="text-[#5f6c72]">
                Sku:{' '}
                <span className="font-semibold text-[#191c1f]">A264671</span>
              </p>

              <p className="text-[#5f6c72]">
                Availability:{' '}
                <span className="font-semibold text-[#2db224]">In Stock</span>
              </p>

              <p className="text-[#5f6c72]">
                Brand:{' '}
                <span className="font-semibold text-[#191c1f]">Apple</span>
              </p>

              <p className="text-[#5f6c72]">
                Category:{' '}
                <span className="font-semibold text-[#191c1f]">
                  Electronics Devices
                </span>
              </p>
            </div>

            <div className="mt-[20px] flex items-center gap-[8px]">
              <span className="text-[24px] font-semibold leading-8 text-[#2da5f3]">
                {price}
              </span>

              {oldPrice && (
                <span className="text-[18px] leading-6 text-[#77878f] line-through">
                  {oldPrice}
                </span>
              )}

              <span className="ml-[8px] bg-[#efd33d] px-[10px] py-[5px] text-[12px] font-semibold text-[#191c1f]">
                21% OFF
              </span>
            </div>

            <div className="mt-[24px] h-px w-full bg-[#e4e7e9]" />

            <div className="mt-[24px] grid grid-cols-2 gap-[24px]">
              <div>
                <label className="text-[14px] leading-5 text-[#191c1f]">
                  Color
                </label>

                <div className="mt-[8px] flex items-center gap-[12px]">
                  <button className="grid h-[32px] w-[32px] place-items-center rounded-full border-2 border-[#fa8232]">
                    <span className="h-[24px] w-[24px] rounded-full bg-[#adb7bc]" />
                  </button>

                  <button className="grid h-[32px] w-[32px] place-items-center rounded-full border-2 border-[#e4e7e9]">
                    <span className="h-[24px] w-[24px] rounded-full bg-[#e4e7e9]" />
                  </button>
                </div>
              </div>

              <SelectBox label="Size" text="14-inch Liquid Retina XDR display" />
              <SelectBox label="Memory" text="16GB unified memory" />
              <SelectBox label="Storage" text="1TB SSD Storage" />
            </div>

            <div className="mt-[24px] grid grid-cols-[164px_310px_160px] gap-[12px]">
              <div className="grid h-[56px] grid-cols-3 border border-[#e4e7e9]">
                <button className="grid place-items-center">
                  <Minus size={18} />
                </button>

                <div className="grid place-items-center text-[16px] text-[#191c1f]">
                  01
                </div>

                <button className="grid place-items-center">
                  <Plus size={18} />
                </button>
              </div>

              <button className="flex h-[56px] items-center justify-center gap-[12px] bg-[#fa8232] text-[16px] font-bold uppercase text-white">
                Add to Cart <ShoppingCart size={22} />
              </button>

              <button className="h-[56px] border-2 border-[#fa8232] text-[16px] font-bold uppercase text-[#fa8232]">
                Buy Now
              </button>
            </div>

            <div className="mt-[16px] flex items-center justify-between text-[14px] text-[#5f6c72]">
              <div className="flex items-center gap-[24px]">
                <span className="flex items-center gap-[8px]">
                  <Heart size={18} /> Add to Wishlist
                </span>

                <span className="flex items-center gap-[8px]">
                  <RefreshCcw size={18} /> Add to Compare
                </span>
              </div>

              <div className="flex items-center gap-[10px]">
                <span>Share product:</span>
                <FiCopy size={18} className="text-[#5f6c72]" />
                <FaFacebookF size={16} className="text-[#fa8232]" />
                <FaTwitter size={16} className="text-[#5f6c72]" />
                <FaPinterestP size={16} className="text-[#5f6c72]" />
              </div>
            </div>

            <div className="mt-[24px] h-[90px] border border-[#e4e7e9] p-[20px]">
              <p className="text-[14px] text-[#191c1f]">
                100% Guarantee Safe Checkout
              </p>

              <img
                src="/images/product-detail/payment-methods.png"
                alt="Payment methods"
                className="mt-[12px] h-[18px] object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function SelectBox({ label, text }) {
  return (
    <div>
      <label className="text-[14px] leading-5 text-[#191c1f]">{label}</label>

      <button className="mt-[8px] flex h-[44px] w-full items-center justify-between border border-[#e4e7e9] px-[16px] text-[14px] text-[#5f6c72]">
        {text} <ChevronDown size={18} />
      </button>
    </div>
  )
}

export default ProductQuickView