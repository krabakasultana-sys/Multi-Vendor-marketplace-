import { ArrowRight, Check, ChevronRight, Eye, X } from 'lucide-react'

const categories = [
  'Computer & Laptop',
  'Computer Accessories',
  'SmartPhone',
  'Headphone',
  'Mobile Accessories',
  'Gaming Console',
  'Camera & Photo',
  'TV & Homes Appliances',
  'Watchs & Accessories',
  'GPS & Navigation',
  'Warable Technology',
]

function PopupBackdrop({ onClose }) {
  return (
    <button
      type="button"
      onClick={onClose}
      className="fixed inset-0 z-30 cursor-default bg-transparent"
      aria-label="Close popup"
    />
  )
}

function HomepagePopups({ openPopup, onClose }) {
  return (
    <>
      {openPopup && <PopupBackdrop onClose={onClose} />}

      {openPopup === 'language' && (
        <div className="fixed left-1/2 top-24 z-50 w-[calc(100%-32px)] max-w-[220px] -translate-x-1/2 rounded-sm border border-[#e4e7e9] bg-white py-2 shadow-[0_8px_40px_rgba(0,0,0,0.12)] sm:absolute sm:left-auto sm:right-36 sm:top-[122px] sm:w-[180px] sm:translate-x-0 xl:right-[220px]">
          <DropdownItem flag="🇺🇸" text="English" active />
          <DropdownItem flag="🔴" text="Mandarin" />
          <DropdownItem flag="🇷🇺" text="Russian" />
        </div>
      )}

      {openPopup === 'currency' && (
        <div className="fixed left-1/2 top-24 z-50 w-[calc(100%-32px)] max-w-[220px] -translate-x-1/2 rounded-sm border border-[#e4e7e9] bg-white py-2 shadow-[0_8px_40px_rgba(0,0,0,0.12)] sm:absolute sm:left-auto sm:right-6 sm:top-[122px] sm:w-[176px] sm:translate-x-0 xl:right-10">
          <div className="flex h-10 items-center justify-between px-4 text-[14px] text-[#fa8232]">
            <span>Dollar (USD)</span>
            <Check size={16} />
          </div>

          <div className="flex h-10 items-center px-4 text-[14px] text-[#5f6c72]">
            Euro (EUR)
          </div>
        </div>
      )}

      {openPopup === 'category' && (
        <>
          <div className="fixed inset-x-4 top-24 z-50 max-h-[calc(100vh-120px)] overflow-y-auto rounded-sm border border-[#e4e7e9] bg-white shadow-[0_8px_40px_rgba(0,0,0,0.12)] sm:left-1/2 sm:right-auto sm:w-[420px] sm:-translate-x-1/2 xl:hidden">
            <div className="flex items-center justify-between border-b border-[#e4e7e9] px-4 py-3">
              <h3 className="font-semibold text-[#191c1f]">
                All Categories
              </h3>

              <button
                type="button"
                onClick={onClose}
                aria-label="Close categories"
              >
                <X size={20} />
              </button>
            </div>

            <div className="py-2">
              {categories.map((item) => (
                <a
                  key={item}
                  href={`/products?category=${encodeURIComponent(item)}`}
                  className={`flex min-h-11 items-center justify-between px-4 text-[14px] ${
                    item === 'SmartPhone'
                      ? 'bg-[#f2f4f5] text-[#191c1f]'
                      : 'text-[#5f6c72]'
                  }`}
                >
                  <span>{item}</span>
                  <ChevronRight size={16} />
                </a>
              ))}
            </div>
          </div>

          <div className="absolute left-1/2 top-[292px] z-40 hidden w-[232px] -translate-x-[660px] border border-[#e4e7e9] bg-white shadow-[0_8px_40px_rgba(0,0,0,0.12)] xl:block">
            {categories.map((item) => (
              <div
                key={item}
                className={`flex h-9 items-center justify-between px-4 text-[14px] ${
                  item === 'SmartPhone'
                    ? 'bg-[#f2f4f5] text-[#191c1f]'
                    : 'text-[#5f6c72]'
                }`}
              >
                <span>{item}</span>

                {item === 'SmartPhone' && <ChevronRight size={16} />}
              </div>
            ))}
          </div>

          <div className="absolute left-1/2 top-[292px] z-40 hidden h-[428px] w-[844px] -translate-x-[428px] border border-[#e4e7e9] bg-white shadow-[0_8px_40px_rgba(0,0,0,0.12)] xl:flex">
            <div className="w-[176px] border-r border-[#e4e7e9] px-6 py-6">
              {[
                'All',
                'iPhone',
                'Samsung',
                'Realme',
                'Xiaomi',
                'Oppo',
                'Vivo',
                'OnePlus',
                'Huawei',
                'Infinix',
                'Tecno',
              ].map((item) => (
                <div
                  key={item}
                  className={`flex h-9 items-center px-4 text-[14px] ${
                    item === 'iPhone'
                      ? 'bg-[#f2f4f5] font-medium text-[#191c1f]'
                      : 'text-[#5f6c72]'
                  }`}
                >
                  {item}
                </div>
              ))}
            </div>

            <div className="w-[344px] px-6 py-6">
              <h3 className="text-[16px] font-semibold uppercase leading-6 text-[#191c1f]">
                Featured Phones
              </h3>

              <div className="mt-4 space-y-4">
                <FeaturedPhone
                  image="/images/products/samsung-phone.png"
                  title="Samsung Electronics Samsung Galaxy S21 5G"
                  price="$160"
                />

                <FeaturedPhone
                  image="/images/products/black-sony-phone.png"
                  title="Simple Mobile 5G LTE Galaxy 12 Mini 512GB Gaming Phone"
                  price="$1,500"
                />

                <FeaturedPhone
                  image="/images/products/blue-phone.png"
                  title="Sony DSCHX8 High Zoom Point & Shoot Camera"
                  oldPrice="$3200"
                  price="$2,300"
                />
              </div>
            </div>

            <div className="w-[324px] p-6">
              <div className="h-[380px] rounded-sm bg-[#fff3b8] px-8 py-7 text-center">
                <img
                  src="/images/banner/mi-phone.png"
                  alt="Xiaomi phone"
                  className="mx-auto h-24 object-contain"
                />

                <h3 className="mt-6 text-[28px] font-semibold leading-9 text-[#191c1f]">
                  21% Discount
                </h3>

                <p className="mt-3 text-[16px] leading-6 text-[#475156]">
                  Escape the noise, It’s time to hear the magic with Xiaomi
                  Earbuds.
                </p>

                <div className="mt-5 flex items-center justify-center gap-2 text-[14px] text-[#475156]">
                  <span>Starting price:</span>

                  <span className="rounded-sm bg-white px-3.5 py-2 text-[16px] font-semibold text-[#191c1f]">
                    $99 USD
                  </span>
                </div>

                <button className="mt-6 flex h-12 w-full items-center justify-center gap-2.5 bg-[#fa8232] text-[14px] font-bold uppercase text-white">
                  Shop Now <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </>
      )}

      {openPopup === 'user' && (
        <div className="fixed left-1/2 top-1/2 z-50 w-[calc(100%-32px)] max-w-[410px] -translate-x-1/2 -translate-y-1/2 rounded-sm border border-[#e4e7e9] bg-white shadow-[0_8px_40px_rgba(0,0,0,0.12)]">
          <div className="px-5 pb-7 pt-5 sm:px-8 sm:pt-8">
            <button
              type="button"
              onClick={onClose}
              className="absolute right-4 top-4 text-[#5f6c72]"
              aria-label="Close sign in popup"
            >
              <X size={20} />
            </button>

            <h2 className="text-center text-[20px] font-semibold leading-7 text-[#191c1f]">
              Sign in to your account
            </h2>

            <div className="mt-6">
              <label className="text-[14px] leading-5 text-[#191c1f]">
                Email Address
              </label>

              <input
                type="email"
                className="mt-2 h-11 w-full border border-[#e4e7e9] px-4 text-[14px] text-[#191c1f] outline-none"
              />
            </div>

            <div className="mt-4">
              <div className="flex items-center justify-between gap-4">
                <label className="text-[14px] leading-5 text-[#191c1f]">
                  Password
                </label>

                <a
                  href="/forget-password"
                  className="text-[14px] leading-5 text-[#2da5f3]"
                >
                  Forget Password
                </a>
              </div>

              <div className="relative mt-2">
                <input
                  type="password"
                  className="h-11 w-full border border-[#e4e7e9] px-4 pr-11 text-[14px] text-[#191c1f] outline-none"
                />

                <Eye
                  size={18}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[#191c1f]"
                />
              </div>
            </div>

            <button className="mt-6 flex h-12 w-full items-center justify-center gap-2.5 bg-[#fa8232] text-[14px] font-bold uppercase text-white">
              Login <ArrowRight size={18} />
            </button>

            <div className="mt-6 flex items-center gap-3">
              <div className="h-px flex-1 bg-[#e4e7e9]" />

              <span className="text-[13px] leading-5 text-[#77878f] sm:text-[14px]">
                Don’t have account
              </span>

              <div className="h-px flex-1 bg-[#e4e7e9]" />
            </div>

            <a
              href="/sign-up"
              className="mt-5 grid h-12 w-full place-items-center border-2 border-[#ffe7d6] text-[14px] font-bold uppercase text-[#fa8232]"
            >
              Create Account
            </a>
          </div>
        </div>
      )}

      {openPopup === 'cart' && (
        <div className="fixed left-1/2 top-1/2 z-50 w-[calc(100%-32px)] max-w-[376px] -translate-x-1/2 -translate-y-1/2 rounded-sm border border-[#e4e7e9] bg-white shadow-[0_8px_40px_rgba(0,0,0,0.12)] sm:absolute sm:left-auto sm:right-6 sm:top-[200px] sm:translate-x-0 sm:translate-y-0 xl:right-[calc((100vw-1320px)/2)]">
          <div className="flex h-14 items-center justify-between border-b border-[#e4e7e9] px-5 sm:px-6">
            <h3 className="text-[16px] font-medium leading-6 text-[#191c1f]">
              Shopping Cart <span className="text-[#5f6c72]">(02)</span>
            </h3>

            <button
              type="button"
              onClick={onClose}
              aria-label="Close cart"
            >
              <X size={19} />
            </button>
          </div>

          <div className="max-h-[calc(100vh-160px)] overflow-y-auto px-5 py-5 sm:px-6">
            <CartItem
              image="/images/products/security-camera.png"
              title="Canon EOS 1500D DSLR Camera Body+ 18-55 mm"
              qty="1"
              price="$1,500"
            />

            <CartItem
              image="/images/products/black-headphone.png"
              title="Simple Mobile 5G LTE Galexy 12 Mini 512GB Gaming Phone"
              qty="2"
              price="$269"
            />

            <div className="mt-5 h-px bg-[#e4e7e9]" />

            <div className="mt-5 flex items-center justify-between">
              <span className="text-[14px] leading-5 text-[#475156]">
                Sub-Total:
              </span>

              <span className="text-[14px] font-medium leading-5 text-[#191c1f]">
                $2038.00 USD
              </span>
            </div>

            <button className="mt-5 flex h-12 w-full items-center justify-center gap-2.5 bg-[#fa8232] text-[14px] font-bold uppercase text-white">
              Checkout Now <ArrowRight size={18} />
            </button>

            <button className="mt-3 h-12 w-full border-2 border-[#ffe7d6] text-[14px] font-bold uppercase text-[#fa8232]">
              View Cart
            </button>
          </div>
        </div>
      )}
    </>
  )
}

function DropdownItem({ flag, text, active = false }) {
  return (
    <div
      className={`flex h-10 items-center justify-between px-4 text-[14px] ${
        active ? 'text-[#191c1f]' : 'text-[#5f6c72]'
      }`}
    >
      <div className="flex items-center gap-2.5">
        <span className="text-[18px]">{flag}</span>
        <span>{text}</span>
      </div>

      {active && <Check size={16} className="text-[#fa8232]" />}
    </div>
  )
}

function FeaturedPhone({ image, title, price, oldPrice }) {
  return (
    <div className="flex h-[104px] items-center gap-4 rounded-sm border border-[#e4e7e9] bg-white p-3">
      <div className="grid h-20 w-20 shrink-0 place-items-center">
        <img
          src={image}
          alt={title}
          className="max-h-[72px] max-w-[72px] object-contain"
        />
      </div>

      <div className="min-w-0">
        <h4 className="h-10 overflow-hidden text-[14px] leading-5 text-[#191c1f]">
          {title}
        </h4>

        <div className="mt-2 flex items-center gap-1">
          {oldPrice && (
            <span className="text-[14px] text-[#929fa5] line-through">
              {oldPrice}
            </span>
          )}

          <span className="text-[14px] font-semibold text-[#2da5f3]">
            {price}
          </span>
        </div>
      </div>
    </div>
  )
}

function CartItem({ image, title, qty, price }) {
  return (
    <div className="mb-4 flex items-center gap-3">
      <div className="grid h-[72px] w-[72px] shrink-0 place-items-center border border-[#e4e7e9] bg-white sm:h-20 sm:w-20">
        <img
          src={image}
          alt={title}
          className="max-h-16 max-w-16 object-contain"
        />
      </div>

      <div className="min-w-0 flex-1">
        <h4 className="h-10 overflow-hidden text-[13px] leading-5 text-[#191c1f] sm:text-[14px]">
          {title}
        </h4>

        <p className="mt-1 text-[14px] leading-5 text-[#5f6c72]">
          {qty} x{' '}
          <span className="font-semibold text-[#2da5f3]">
            {price}
          </span>
        </p>
      </div>

      <button
        className="shrink-0 text-[#929fa5]"
        aria-label="Remove item"
      >
        <X size={18} />
      </button>
    </div>
  )
}

export default HomepagePopups