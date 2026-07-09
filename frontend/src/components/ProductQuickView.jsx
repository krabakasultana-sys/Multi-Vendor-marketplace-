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

import {
  FaFacebookF,
  FaPinterestP,
  FaTwitter,
} from 'react-icons/fa'

import { FiCopy } from 'react-icons/fi'

function ProductQuickView({ product, onClose }) {
  const mainImage =
    product?.image || '/images/product-detail/macbook-main.png'

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
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/75 p-3 sm:p-6 lg:p-10">
      <div className="relative max-h-[calc(100vh-24px)] w-full max-w-[1320px] overflow-y-auto rounded-sm bg-white p-4 sm:max-h-[calc(100vh-48px)] sm:p-6 lg:max-h-[calc(100vh-80px)] lg:p-10">
        <button
          type="button"
          onClick={onClose}
          className="sticky right-0 top-0 z-[1000] ml-auto grid h-10 w-10 place-items-center rounded-full bg-[#303639] text-white sm:h-12 sm:w-12"
          aria-label="Close quick view"
        >
          <X size={24} />
        </button>

        <div className="mt-2 grid grid-cols-1 gap-8 lg:mt-0 lg:grid-cols-[minmax(0,616px)_minmax(0,624px)] lg:gap-10">
          <div className="min-w-0">
            <div className="grid min-h-[280px] place-items-center rounded-sm border border-[#e4e7e9] bg-white p-4 sm:min-h-[360px] lg:h-[430px]">
              <img
                src={mainImage}
                alt={title}
                className="max-h-[260px] max-w-full object-contain sm:max-h-[330px]"
              />
            </div>

            <div className="relative mt-5 flex items-center gap-3 overflow-x-auto px-1 pb-2 sm:mt-6 sm:px-7">
              <button className="sticky left-0 z-10 hidden h-10 w-10 shrink-0 place-items-center rounded-full bg-[#fa8232] text-white sm:grid sm:h-12 sm:w-12">
                <ArrowLeft size={22} />
              </button>

              {thumbnails.map((thumb, index) => (
                <div
                  key={`${thumb}-${index}`}
                  className={`grid h-[72px] w-[72px] shrink-0 place-items-center rounded-sm border bg-white sm:h-[88px] sm:w-[88px] ${
                    index === 0
                      ? 'border-[#fa8232]'
                      : 'border-[#e4e7e9]'
                  }`}
                >
                  <img
                    src={thumb}
                    alt={`Product thumbnail ${index + 1}`}
                    className="max-h-14 max-w-14 object-contain sm:max-h-[68px] sm:max-w-[68px]"
                  />
                </div>
              ))}

              <button className="sticky right-0 z-10 hidden h-10 w-10 shrink-0 place-items-center rounded-full bg-[#fa8232] text-white sm:grid sm:h-12 sm:w-12">
                <ArrowRight size={22} />
              </button>
            </div>
          </div>

          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star
                    key={index}
                    size={18}
                    className="fill-[#fa8232] text-[#fa8232]"
                  />
                ))}
              </div>

              <span className="text-[13px] font-semibold text-[#191c1f] sm:text-[14px]">
                4.7 Star Rating
              </span>

              <span className="text-[13px] text-[#5f6c72] sm:text-[14px]">
                (21,671 User feedback)
              </span>
            </div>

            <h1 className="mt-2 max-w-[600px] text-[18px] font-medium leading-7 text-[#191c1f] sm:text-[20px]">
              {title}
            </h1>

            <div className="mt-5 grid grid-cols-1 gap-y-2 text-[13px] leading-5 sm:grid-cols-2 sm:text-[14px]">
              <p className="text-[#5f6c72]">
                Sku:{' '}
                <span className="font-semibold text-[#191c1f]">
                  A264671
                </span>
              </p>

              <p className="text-[#5f6c72]">
                Availability:{' '}
                <span className="font-semibold text-[#2db224]">
                  In Stock
                </span>
              </p>

              <p className="text-[#5f6c72]">
                Brand:{' '}
                <span className="font-semibold text-[#191c1f]">
                  Apple
                </span>
              </p>

              <p className="text-[#5f6c72]">
                Category:{' '}
                <span className="font-semibold text-[#191c1f]">
                  Electronics Devices
                </span>
              </p>
            </div>

            <div className="mt-5 flex flex-wrap items-center gap-2">
              <span className="text-[22px] font-semibold leading-8 text-[#2da5f3] sm:text-[24px]">
                {price}
              </span>

              {oldPrice && (
                <span className="text-[16px] leading-6 text-[#77878f] line-through sm:text-[18px]">
                  {oldPrice}
                </span>
              )}

              <span className="bg-[#efd33d] px-2.5 py-1 text-[12px] font-semibold text-[#191c1f] sm:ml-2">
                21% OFF
              </span>
            </div>

            <div className="mt-6 h-px w-full bg-[#e4e7e9]" />

            <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6">
              <div>
                <label className="text-[14px] leading-5 text-[#191c1f]">
                  Color
                </label>

                <div className="mt-2 flex items-center gap-3">
                  <button className="grid h-8 w-8 place-items-center rounded-full border-2 border-[#fa8232]">
                    <span className="h-6 w-6 rounded-full bg-[#adb7bc]" />
                  </button>

                  <button className="grid h-8 w-8 place-items-center rounded-full border-2 border-[#e4e7e9]">
                    <span className="h-6 w-6 rounded-full bg-[#e4e7e9]" />
                  </button>
                </div>
              </div>

              <SelectBox
                label="Size"
                text="14-inch Liquid Retina XDR display"
              />

              <SelectBox
                label="Memory"
                text="16GB unified memory"
              />

              <SelectBox
                label="Storage"
                text="1TB SSD Storage"
              />
            </div>

            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-[164px_minmax(0,1fr)] xl:grid-cols-[164px_310px_160px]">
              <div className="grid h-14 grid-cols-3 border border-[#e4e7e9]">
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

              <button className="flex h-14 items-center justify-center gap-3 bg-[#fa8232] px-4 text-[14px] font-bold uppercase text-white sm:text-[16px]">
                Add to Cart <ShoppingCart size={22} />
              </button>

              <button className="h-14 border-2 border-[#fa8232] text-[14px] font-bold uppercase text-[#fa8232] sm:col-span-2 sm:text-[16px] xl:col-span-1">
                Buy Now
              </button>
            </div>

            <div className="mt-4 flex flex-col gap-4 text-[13px] text-[#5f6c72] sm:text-[14px] xl:flex-row xl:items-center xl:justify-between">
              <div className="flex flex-wrap items-center gap-4 sm:gap-6">
                <span className="flex items-center gap-2">
                  <Heart size={18} /> Add to Wishlist
                </span>

                <span className="flex items-center gap-2">
                  <RefreshCcw size={18} /> Add to Compare
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-2.5">
                <span>Share product:</span>
                <FiCopy size={18} className="text-[#5f6c72]" />
                <FaFacebookF size={16} className="text-[#fa8232]" />
                <FaTwitter size={16} className="text-[#5f6c72]" />
                <FaPinterestP size={16} className="text-[#5f6c72]" />
              </div>
            </div>

            <div className="mt-6 min-h-[90px] border border-[#e4e7e9] p-4 sm:p-5">
              <p className="text-[14px] text-[#191c1f]">
                100% Guarantee Safe Checkout
              </p>

              <img
                src="/images/product-detail/payment-methods.png"
                alt="Payment methods"
                className="mt-3 h-[18px] max-w-full object-contain"
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
      <label className="text-[14px] leading-5 text-[#191c1f]">
        {label}
      </label>

      <button className="mt-2 flex min-h-11 w-full items-center justify-between gap-2 border border-[#e4e7e9] px-4 text-left text-[13px] text-[#5f6c72] sm:text-[14px]">
        <span>{text}</span>
        <ChevronDown size={18} className="shrink-0" />
      </button>
    </div>
  )
}

export default ProductQuickView