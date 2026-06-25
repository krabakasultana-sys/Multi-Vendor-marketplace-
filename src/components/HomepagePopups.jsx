import { ArrowRight, Check, ChevronRight, Eye, X } from 'lucide-react'

function HomepagePopups({ openPopup }) {
  return (
    <>
      {/* Language Popup */}
      {openPopup === 'language' && (
        <div className="absolute right-[220px] top-[122px] z-50 w-[180px] rounded-sm border border-[#e4e7e9] bg-white py-[8px] shadow-[0_8px_40px_rgba(0,0,0,0.12)]">
          <DropdownItem flag="🇺🇸" text="English" active />
          <DropdownItem flag="🔴" text="Mandarin" />
          <DropdownItem flag="🇷🇺" text="Russian" />
        </div>
      )}

      {/* Currency Popup */}
      {openPopup === 'currency' && (
        <div className="absolute right-[40px] top-[122px] z-50 w-[176px] rounded-sm border border-[#e4e7e9] bg-white py-[8px] shadow-[0_8px_40px_rgba(0,0,0,0.12)]">
          <div className="flex h-[40px] items-center justify-between px-[16px] text-[14px] text-[#fa8232]">
            <span>Dollar (USD)</span>
            <Check size={16} />
          </div>

          <div className="flex h-[40px] items-center px-[16px] text-[14px] text-[#5f6c72]">
            Euro (EUR)
          </div>
        </div>
      )}

      {/* Category + Mega Menu Popup */}
      {openPopup === 'category' && (
        <>
          <div className="absolute left-[300px] top-[292px] z-40 w-[232px] border border-[#e4e7e9] bg-white shadow-[0_8px_40px_rgba(0,0,0,0.12)]">
            {[
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
            ].map((item) => (
              <div
                key={item}
                className={`flex h-[36px] items-center justify-between px-[16px] text-[14px] ${
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

          <div className="absolute left-[532px] top-[292px] z-40 flex h-[428px] w-[844px] border border-[#e4e7e9] bg-white shadow-[0_8px_40px_rgba(0,0,0,0.12)]">
            <div className="w-[176px] border-r border-[#e4e7e9] px-[24px] py-[24px]">
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
                  className={`flex h-[36px] items-center px-[16px] text-[14px] ${
                    item === 'iPhone'
                      ? 'bg-[#f2f4f5] font-medium text-[#191c1f]'
                      : 'text-[#5f6c72]'
                  }`}
                >
                  {item}
                </div>
              ))}
            </div>

            <div className="w-[344px] px-[24px] py-[24px]">
              <h3 className="text-[16px] font-semibold uppercase leading-6 text-[#191c1f]">
                Featured Phones
              </h3>

              <div className="mt-[16px] space-y-[16px]">
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

            <div className="w-[324px] p-[24px]">
              <div className="h-[380px] rounded-sm bg-[#fff3b8] px-[32px] py-[28px] text-center">
                <img
                  src="/images/banner/mi-phone.png"
                  alt="Xiaomi phone"
                  className="mx-auto h-[96px] object-contain"
                />

                <h3 className="mt-[24px] text-[28px] font-semibold leading-[36px] text-[#191c1f]">
                  21% Discount
                </h3>

                <p className="mt-[12px] text-[16px] leading-[24px] text-[#475156]">
                  Escape the noise, It’s time to hear the magic with Xiaomi
                  Earbuds.
                </p>

                <div className="mt-[20px] flex items-center justify-center gap-[8px] text-[14px] text-[#475156]">
                  <span>Starting price:</span>

                  <span className="rounded-sm bg-white px-[14px] py-[8px] text-[16px] font-semibold text-[#191c1f]">
                    $99 USD
                  </span>
                </div>

                <button className="mt-[24px] flex h-[48px] w-full items-center justify-center gap-[10px] bg-[#fa8232] text-[14px] font-bold uppercase text-white">
                  Shop Now <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </>
      )}

      {/* User Sign In Popup */}
      {openPopup === 'user' && (
        <div className="absolute right-[300px] top-[200px] z-50 w-[410px] rounded-sm border border-[#e4e7e9] bg-white shadow-[0_8px_40px_rgba(0,0,0,0.12)]">
          <div className="px-[32px] pt-[32px] pb-[28px]">
            <h2 className="text-center text-[20px] font-semibold leading-[28px] text-[#191c1f]">
              Sign in to your account
            </h2>

            <div className="mt-[24px]">
              <label className="text-[14px] leading-5 text-[#191c1f]">
                Email Address
              </label>

              <input
                type="email"
                className="mt-[8px] h-[44px] w-full border border-[#e4e7e9] px-[16px] text-[14px] text-[#191c1f] outline-none"
              />
            </div>

            <div className="mt-[16px]">
              <div className="flex items-center justify-between">
                <label className="text-[14px] leading-5 text-[#191c1f]">
                  Password
                </label>

                <a href="#" className="text-[14px] leading-5 text-[#2da5f3]">
                  Forget Password
                </a>
              </div>

              <div className="relative mt-[8px]">
                <input
                  type="password"
                  className="h-[44px] w-full border border-[#e4e7e9] px-[16px] pr-[44px] text-[14px] text-[#191c1f] outline-none"
                />

                <Eye
                  size={18}
                  className="absolute right-[16px] top-1/2 -translate-y-1/2 text-[#191c1f]"
                />
              </div>
            </div>

            <button className="mt-[24px] flex h-[48px] w-full items-center justify-center gap-[10px] bg-[#fa8232] text-[14px] font-bold uppercase text-white">
              Login <ArrowRight size={18} />
            </button>

            <div className="mt-[24px] flex items-center gap-[12px]">
              <div className="h-px flex-1 bg-[#e4e7e9]" />
              <span className="text-[14px] leading-5 text-[#77878f]">
                Don’t have account
              </span>
              <div className="h-px flex-1 bg-[#e4e7e9]" />
            </div>

            <button className="mt-[20px] h-[48px] w-full border-2 border-[#ffe7d6] text-[14px] font-bold uppercase text-[#fa8232]">
              Create Account
            </button>
          </div>
        </div>
      )}

      {/* Shopping Cart Popup */}
      {openPopup === 'cart' && (
        <div className="absolute right-[360px] top-[200px] z-50 w-[376px] rounded-sm border border-[#e4e7e9] bg-white shadow-[0_8px_40px_rgba(0,0,0,0.12)]">
          <div className="flex h-[56px] items-center border-b border-[#e4e7e9] px-[24px]">
            <h3 className="text-[16px] font-medium leading-6 text-[#191c1f]">
              Shopping Cart <span className="text-[#5f6c72]">(02)</span>
            </h3>
          </div>

          <div className="px-[24px] py-[20px]">
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

            <div className="mt-[20px] h-px bg-[#e4e7e9]" />

            <div className="mt-[20px] flex items-center justify-between">
              <span className="text-[14px] leading-5 text-[#475156]">
                Sub-Total:
              </span>

              <span className="text-[14px] font-medium leading-5 text-[#191c1f]">
                $2038.00 USD
              </span>
            </div>

            <button className="mt-[20px] flex h-[48px] w-full items-center justify-center gap-[10px] bg-[#fa8232] text-[14px] font-bold uppercase text-white">
              Checkout Now <ArrowRight size={18} />
            </button>

            <button className="mt-[12px] h-[48px] w-full border-2 border-[#ffe7d6] text-[14px] font-bold uppercase text-[#fa8232]">
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
      className={`flex h-[40px] items-center justify-between px-[16px] text-[14px] ${
        active ? 'text-[#191c1f]' : 'text-[#5f6c72]'
      }`}
    >
      <div className="flex items-center gap-[10px]">
        <span className="text-[18px]">{flag}</span>
        <span>{text}</span>
      </div>

      {active && <Check size={16} className="text-[#fa8232]" />}
    </div>
  )
}

function FeaturedPhone({ image, title, price, oldPrice }) {
  return (
    <div className="flex h-[104px] items-center gap-[16px] rounded-sm border border-[#e4e7e9] bg-white p-[12px]">
      <div className="grid h-[80px] w-[80px] shrink-0 place-items-center">
        <img
          src={image}
          alt={title}
          className="max-h-[72px] max-w-[72px] object-contain"
        />
      </div>

      <div>
        <h4 className="h-[40px] overflow-hidden text-[14px] leading-[20px] text-[#191c1f]">
          {title}
        </h4>

        <div className="mt-[8px] flex items-center gap-[4px]">
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
    <div className="mb-[16px] flex items-center gap-[12px]">
      <div className="grid h-[80px] w-[80px] shrink-0 place-items-center border border-[#e4e7e9] bg-white">
        <img
          src={image}
          alt={title}
          className="max-h-[64px] max-w-[64px] object-contain"
        />
      </div>

      <div className="flex-1">
        <h4 className="h-[40px] overflow-hidden text-[14px] leading-[20px] text-[#191c1f]">
          {title}
        </h4>

        <p className="mt-[4px] text-[14px] leading-5 text-[#5f6c72]">
          {qty} x <span className="font-semibold text-[#2da5f3]">{price}</span>
        </p>
      </div>

      <button className="text-[#929fa5]">
        <X size={18} />
      </button>
    </div>
  )
}

export default HomepagePopups