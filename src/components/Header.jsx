import { useState } from 'react'
import HomepagePopups from './HomepagePopups'

import {
  Search,
  ShoppingCart,
  Heart,
  User,
  ChevronDown,
  ArrowRight,
  X,
  MapPin,
  RefreshCcw,
  Headphones,
  Info,
  Phone,
  Package,
  Trophy,
  CreditCard,
} from 'lucide-react'

import {
  FaTwitter,
  FaFacebook,
  FaPinterestP,
  FaRedditAlien,
  FaYoutube,
  FaInstagram,
} from 'react-icons/fa'

import Container from './Container'
import ServiceCard from './ServiceCard'

function Header() {
  const [openPopup, setOpenPopup] = useState(null)

  const togglePopup = (popupName) => {
    setOpenPopup((currentPopup) =>
      currentPopup === popupName ? null : popupName
    )
  }

  return (
    <header className="relative w-full bg-white">
      <div className="h-[80px] w-full bg-[#191c1f]">
        <Container className="flex h-[80px] items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="-rotate-3 bg-[#f3de6d] px-3 py-2 text-[24px] font-semibold leading-none text-black">
              Black
            </span>

            <span className="text-[24px] font-semibold text-white">
              Friday
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[14px] text-white">Up to</span>

            <span className="text-[40px] font-semibold leading-none text-[#ebc80c]">
              59%
            </span>

            <span className="text-[20px] font-semibold text-white">OFF</span>
          </div>

          <div className="flex items-center gap-8">
            <a
              href="/"
              className="flex h-[48px] items-center gap-2 bg-[#ebc80c] px-[32px] text-[14px] font-bold uppercase text-[#191c1f]"
            >
              Shop Now <ArrowRight size={18} />
            </a>

            <button
              type="button"
              className="grid h-[32px] w-[32px] place-items-center rounded-sm bg-white/10 text-white"
            >
              <X size={18} />
            </button>
          </div>
        </Container>
      </div>

      <div className="h-[52px] w-full border-b border-white/15 bg-[#1b6392]">
        <Container className="flex h-[52px] items-center justify-between text-[14px] text-white">
          <p>Welcome to Clicon online eCommerce store.</p>

          <div className="flex items-center gap-[24px]">
            <div className="flex items-center gap-[14px]">
              <span className="text-[14px] leading-5 text-white">
                Follow us:
              </span>

              <FaTwitter className="text-[18px] text-white" />
              <FaFacebook className="text-[18px] text-white" />
              <FaPinterestP className="text-[18px] text-white" />
              <FaRedditAlien className="text-[18px] text-white" />
              <FaYoutube className="text-[18px] text-white" />
              <FaInstagram className="text-[18px] text-white" />
            </div>

            <div className="h-[28px] w-px bg-white/20" />

            <button
              type="button"
              onClick={() => togglePopup('language')}
              className="flex items-center gap-[6px] text-[14px] leading-5 text-white"
            >
              Eng <ChevronDown size={16} />
            </button>

            <button
              type="button"
              onClick={() => togglePopup('currency')}
              className="flex items-center gap-[6px] text-[14px] leading-5 text-white"
            >
              USD <ChevronDown size={16} />
            </button>
          </div>
        </Container>
      </div>

      <div className="h-[88px] w-full bg-[#1b6392]">
        <Container className="flex h-[88px] items-center gap-[88px]">
          <a href="/" className="flex w-[236px] shrink-0 items-center gap-3">
            <div className="grid h-[48px] w-[48px] place-items-center rounded-full bg-white">
              <div className="h-[20px] w-[20px] rounded-full bg-[#1b6392]" />
            </div>

            <span className="text-[32px] font-bold leading-none text-white">
              CLICON
            </span>
          </a>

          <div className="relative h-[52px] w-[646px]">
            <input
              type="text"
              placeholder="Search for anything..."
              className="h-[52px] w-[646px] rounded-sm bg-white px-5 pr-14 text-[14px] text-[#77878f] outline-none"
            />

            <Search
              size={22}
              className="absolute right-5 top-1/2 -translate-y-1/2 text-[#191c1f]"
            />
          </div>

          <div className="ml-auto flex items-center gap-[24px] text-white">
            <button
              type="button"
              onClick={() => togglePopup('cart')}
              className="relative text-white"
            >
              <ShoppingCart size={32} />

              <span className="absolute -right-3 -top-3 grid h-[24px] w-[24px] place-items-center rounded-full border-2 border-[#1b6392] bg-white text-[12px] font-semibold text-[#1b6392]">
                2
              </span>
            </button>

            <Heart size={32} />

            <a href="/sign-in" className="text-white">
              <User size={32} />
            </a>
          </div>
        </Container>
      </div>

      <div className="h-[80px] w-full border-b border-[#e4e7e9] bg-white">
        <Container className="flex h-[80px] items-center justify-between">
          <div className="flex items-center gap-[24px]">
            <button
              type="button"
              onClick={() => togglePopup('category')}
              className={`flex h-[48px] items-center gap-3 px-[24px] text-[14px] font-medium ${
                openPopup === 'category'
                  ? 'bg-[#fa8232] text-white'
                  : 'bg-[#f2f4f5] text-[#191c1f]'
              }`}
            >
              All Category <ChevronDown size={16} />
            </button>

            <nav className="flex items-center gap-[24px] text-[14px] text-[#5f6c72]">
              <a className="flex items-center gap-2 text-[#5f6c72]" href="#">
                <MapPin size={20} /> Track Order
              </a>

              <a className="flex items-center gap-2 text-[#5f6c72]" href="#">
                <RefreshCcw size={20} /> Compare
              </a>

              <a
                className="flex items-center gap-2 text-[#5f6c72]"
                href="/customer-support"
              >
                <Headphones size={20} /> Customer Support
              </a>

              <a
                className="flex items-center gap-2 text-[#5f6c72]"
                href="/faqs"
              >
                <Info size={20} /> Need Help
              </a>
            </nav>
          </div>

          <div className="flex items-center gap-2 text-[18px] text-[#191c1f]">
            <Phone size={25} />
            <span>+1-202-555-0104</span>
          </div>
        </Container>
      </div>

      <HomepagePopups openPopup={openPopup} />

      <section className="h-[676px] w-full bg-white py-[32px]">
        <Container>
          <div className="grid h-[520px] grid-cols-[424px_872px] gap-[24px]">
            <div className="grid grid-rows-2 gap-[24px]">
              <div className="relative h-[248px] overflow-hidden rounded-sm bg-[#191c1f] p-[40px]">
                <div className="relative z-10">
                  <p className="mb-[12px] text-[14px] font-semibold uppercase text-[#ebc80c]">
                    Summer Sales
                  </p>

                  <h2 className="w-[190px] text-[24px] font-semibold leading-[32px] text-white">
                    New Google Pixel 6 Pro
                  </h2>

                  <a
                    href="/"
                    className="mt-[24px] flex h-[48px] w-fit items-center gap-3 bg-[#fa8232] px-[24px] text-[14px] font-bold uppercase text-white"
                  >
                    Shop Now <ArrowRight size={18} />
                  </a>
                </div>

                <img
                  src="/images/hero/pixel-phone.png"
                  alt="Pixel phone"
                  className="absolute bottom-0 right-[-34px] z-0 h-[220px] object-contain"
                />

                <span className="absolute right-[24px] top-[24px] z-20 bg-[#efd33d] px-[20px] py-[10px] text-[16px] font-semibold text-[#191c1f]">
                  29% OFF
                </span>
              </div>

              <div className="relative h-[248px] overflow-hidden rounded-sm bg-[#f2f4f5] p-[40px]">
                <img
                  src="/images/hero/flipbuds.png"
                  alt="Flipbuds"
                  className="absolute bottom-[28px] left-[40px] h-[150px] object-contain"
                />

                <div className="ml-[170px] pt-[20px]">
                  <h2 className="text-[24px] font-semibold leading-[32px] text-[#191c1f]">
                    Xiaomi <br /> FlipBuds Pro
                  </h2>

                  <p className="mt-[12px] text-[18px] font-semibold text-[#2da5f3]">
                    $299 USD
                  </p>

                  <a
                    href="/"
                    className="mt-[20px] flex h-[48px] w-fit items-center gap-3 bg-[#fa8232] px-[24px] text-[14px] font-bold uppercase text-white"
                  >
                    Shop Now <ArrowRight size={18} />
                  </a>
                </div>
              </div>
            </div>

            <div className="relative h-[520px] overflow-hidden rounded-sm bg-[#f2f4f5] p-[56px]">
              <div className="pt-[78px]">
                <p className="mb-[16px] flex items-center gap-3 text-[14px] font-semibold uppercase text-[#2da5f3]">
                  <span className="h-[2px] w-[24px] bg-[#2da5f3]" />
                  The best place to play
                </p>

                <h1 className="text-[48px] font-semibold leading-[56px] text-[#191c1f]">
                  Xbox Consoles
                </h1>

                <p className="mt-[20px] w-[430px] text-[18px] leading-[28px] text-[#475156]">
                  Save up to 50% on select Xbox games. Get 3 months of PC Game
                  Pass for $2 USD.
                </p>

                <a
                  href="/"
                  className="mt-[32px] flex h-[56px] w-fit items-center gap-3 bg-[#fa8232] px-[32px] text-[16px] font-bold uppercase text-white"
                >
                  Shop Now <ArrowRight size={22} />
                </a>
              </div>

              <img
                src="/images/hero/xbox-console.png"
                alt="Xbox console"
                className="absolute bottom-[60px] right-[60px] h-[360px] object-contain"
              />

              <span className="absolute right-[64px] top-[56px] grid h-[100px] w-[100px] place-items-center rounded-full border-4 border-white bg-[#2da5f3] text-[24px] font-semibold text-white">
                $299
              </span>

              <div className="absolute bottom-[48px] left-[56px] flex gap-2">
                <span className="h-[10px] w-[10px] rounded-full bg-[#191c1f]" />
                <span className="h-[10px] w-[10px] rounded-full bg-[#adb7bc]" />
                <span className="h-[10px] w-[10px] rounded-full bg-[#adb7bc]" />
              </div>
            </div>
          </div>

          <div className="mt-[24px] grid h-[96px] grid-cols-4 rounded-sm border border-[#e4e7e9] bg-white px-[32px] py-[20px]">
            <ServiceCard
              icon={<Package size={32} />}
              title="Fasted Delivery"
              text="Delivery in 24/H"
            />

            <ServiceCard
              icon={<Trophy size={32} />}
              title="24 Hours Return"
              text="100% money-back guarantee"
            />

            <ServiceCard
              icon={<CreditCard size={32} />}
              title="Secure Payment"
              text="Your money is safe"
            />

            <ServiceCard
              icon={<Headphones size={32} />}
              title="Support 24/7"
              text="Live contact/message"
            />
          </div>
        </Container>
      </section>
    </header>
  )
}

export default Header