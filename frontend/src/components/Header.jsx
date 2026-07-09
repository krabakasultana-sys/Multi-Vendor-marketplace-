import { useState } from 'react'
import HomepagePopups from './HomepagePopups'

import {
  ArrowRight,
  ChevronDown,
  CreditCard,
  Headphones,
  Heart,
  Info,
  MapPin,
  Menu,
  Package,
  Phone,
  RefreshCcw,
  Search,
  ShoppingCart,
  Trophy,
  User,
  X,
} from 'lucide-react'

import {
  FaFacebook,
  FaInstagram,
  FaPinterestP,
  FaRedditAlien,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa'

import Container from './Container'
import ServiceCard from './ServiceCard'

function Header() {
  const [openPopup, setOpenPopup] = useState(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [promoVisible, setPromoVisible] = useState(true)

  const togglePopup = (popupName) => {
    setOpenPopup((currentPopup) =>
      currentPopup === popupName ? null : popupName
    )
  }

  return (
    <header className="relative w-full bg-white">
      {promoVisible && (
        <div className="w-full bg-[#191c1f]">
          <Container className="flex min-h-[64px] items-center justify-between gap-3 py-2 sm:min-h-[72px] lg:min-h-[80px]">
            <div className="flex min-w-0 items-center gap-2 sm:gap-3">
              <span className="-rotate-3 bg-[#f3de6d] px-2 py-1.5 text-[16px] font-semibold leading-none text-black sm:px-3 sm:py-2 sm:text-[22px] lg:text-[24px]">
                Black
              </span>

              <span className="hidden text-[20px] font-semibold text-white sm:inline lg:text-[24px]">
                Friday
              </span>
            </div>

            <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
              <span className="hidden text-[12px] text-white sm:inline sm:text-[14px]">
                Up to
              </span>

              <span className="text-[28px] font-semibold leading-none text-[#ebc80c] sm:text-[36px] lg:text-[40px]">
                59%
              </span>

              <span className="text-[14px] font-semibold text-white sm:text-[18px] lg:text-[20px]">
                OFF
              </span>
            </div>

            <div className="flex shrink-0 items-center gap-2 sm:gap-4 lg:gap-8">
              <a
                href="/"
                className="hidden h-10 items-center gap-2 bg-[#ebc80c] px-4 text-[12px] font-bold uppercase text-[#191c1f] sm:flex lg:h-12 lg:px-8 lg:text-[14px]"
              >
                Shop Now <ArrowRight size={18} />
              </a>

              <button
                type="button"
                onClick={() => setPromoVisible(false)}
                className="grid h-8 w-8 place-items-center rounded-sm bg-white/10 text-white"
                aria-label="Close promotion"
              >
                <X size={18} />
              </button>
            </div>
          </Container>
        </div>
      )}

      <div className="w-full border-b border-white/15 bg-[#1b6392]">
        <Container className="flex min-h-[44px] items-center justify-between gap-4 py-2 text-[12px] text-white sm:min-h-[52px] sm:text-[14px]">
          <p className="truncate">
            Welcome to Clicon online eCommerce store.
          </p>

          <div className="flex shrink-0 items-center gap-3 sm:gap-5">
            <div className="hidden items-center gap-[14px] xl:flex">
              <span>Follow us:</span>
              <FaTwitter className="text-[18px]" />
              <FaFacebook className="text-[18px]" />
              <FaPinterestP className="text-[18px]" />
              <FaRedditAlien className="text-[18px]" />
              <FaYoutube className="text-[18px]" />
              <FaInstagram className="text-[18px]" />
            </div>

            <div className="hidden h-7 w-px bg-white/20 xl:block" />

            <button
              type="button"
              onClick={() => togglePopup('language')}
              className="flex items-center gap-1 text-white"
            >
              Eng <ChevronDown size={15} />
            </button>

            <button
              type="button"
              onClick={() => togglePopup('currency')}
              className="flex items-center gap-1 text-white"
            >
              USD <ChevronDown size={15} />
            </button>
          </div>
        </Container>
      </div>

      <div className="w-full bg-[#1b6392]">
        <Container className="flex flex-wrap items-center gap-4 py-4 lg:min-h-[88px] lg:flex-nowrap lg:gap-8 xl:gap-[88px]">
          <a
            href="/"
            className="flex shrink-0 items-center gap-2 sm:gap-3 lg:w-[236px]"
          >
            <div className="grid h-10 w-10 place-items-center rounded-full bg-white sm:h-12 sm:w-12">
              <div className="h-4 w-4 rounded-full bg-[#1b6392] sm:h-5 sm:w-5" />
            </div>

            <span className="text-[24px] font-bold leading-none text-white sm:text-[32px]">
              CLICON
            </span>
          </a>

          <div className="order-3 relative w-full lg:order-none lg:flex-1">
            <input
              type="text"
              placeholder="Search for anything..."
              className="h-12 w-full rounded-sm bg-white px-4 pr-12 text-[14px] text-[#77878f] outline-none sm:h-[52px] sm:px-5 sm:pr-14"
            />

            <Search
              size={22}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-[#191c1f] sm:right-5"
            />
          </div>

          <div className="ml-auto flex items-center gap-4 text-white sm:gap-6">
            <button
              type="button"
              onClick={() => togglePopup('cart')}
              className="relative text-white"
              aria-label="Shopping cart"
            >
              <ShoppingCart size={28} className="sm:h-8 sm:w-8" />

              <span className="absolute -right-2.5 -top-2.5 grid h-5 w-5 place-items-center rounded-full border-2 border-[#1b6392] bg-white text-[10px] font-semibold text-[#1b6392] sm:h-6 sm:w-6 sm:text-[12px]">
                2
              </span>
            </button>

            <Heart size={28} className="sm:h-8 sm:w-8" />

            <a
              href="/sign-in"
              className="text-white"
              aria-label="Sign in"
            >
              <User size={28} className="sm:h-8 sm:w-8" />
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((current) => !current)}
              className="grid h-9 w-9 place-items-center lg:hidden"
              aria-label="Toggle navigation"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </Container>
      </div>

      <div className="hidden w-full border-b border-[#e4e7e9] bg-white lg:block">
        <Container className="flex min-h-[80px] items-center justify-between gap-6">
          <div className="flex min-w-0 items-center gap-6">
            <button
              type="button"
              onClick={() => togglePopup('category')}
              className={`flex h-12 shrink-0 items-center gap-3 px-6 text-[14px] font-medium ${
                openPopup === 'category'
                  ? 'bg-[#fa8232] text-white'
                  : 'bg-[#f2f4f5] text-[#191c1f]'
              }`}
            >
              All Category <ChevronDown size={16} />
            </button>

            <nav className="flex min-w-0 items-center gap-5 text-[14px] text-[#5f6c72] xl:gap-6">
              <a
                className="flex items-center gap-2 whitespace-nowrap"
                href="#"
              >
                <MapPin size={20} /> Track Order
              </a>

              <a
                className="hidden items-center gap-2 whitespace-nowrap xl:flex"
                href="#"
              >
                <RefreshCcw size={20} /> Compare
              </a>

              <a
                className="flex items-center gap-2 whitespace-nowrap"
                href="/customer-support"
              >
                <Headphones size={20} /> Customer Support
              </a>

              <a
                className="flex items-center gap-2 whitespace-nowrap"
                href="/faqs"
              >
                <Info size={20} /> Need Help
              </a>
            </nav>
          </div>

          <div className="hidden shrink-0 items-center gap-2 text-[18px] text-[#191c1f] xl:flex">
            <Phone size={25} />
            <span>+1-202-555-0104</span>
          </div>
        </Container>
      </div>

      {mobileMenuOpen && (
        <div className="border-b border-[#e4e7e9] bg-white lg:hidden">
          <Container className="py-3">
            <nav className="flex flex-col text-[14px] text-[#5f6c72]">
              <button
                type="button"
                onClick={() => togglePopup('category')}
                className="flex min-h-12 items-center justify-between border-b border-[#e4e7e9] py-3 text-left font-medium text-[#191c1f]"
              >
                All Category <ChevronDown size={16} />
              </button>

              <a
                className="flex min-h-12 items-center gap-3 border-b border-[#e4e7e9] py-3"
                href="#"
              >
                <MapPin size={20} /> Track Order
              </a>

              <a
                className="flex min-h-12 items-center gap-3 border-b border-[#e4e7e9] py-3"
                href="#"
              >
                <RefreshCcw size={20} /> Compare
              </a>

              <a
                className="flex min-h-12 items-center gap-3 border-b border-[#e4e7e9] py-3"
                href="/customer-support"
              >
                <Headphones size={20} /> Customer Support
              </a>

              <a
                className="flex min-h-12 items-center gap-3 border-b border-[#e4e7e9] py-3"
                href="/faqs"
              >
                <Info size={20} /> Need Help
              </a>

              <div className="flex min-h-12 items-center gap-3 py-3 text-[#191c1f]">
                <Phone size={20} /> +1-202-555-0104
              </div>
            </nav>
          </Container>
        </div>
      )}

      <HomepagePopups
        openPopup={openPopup}
        onClose={() => setOpenPopup(null)}
      />

      <section className="w-full bg-white py-6 sm:py-8">
        <Container>
          <div className="grid grid-cols-1 gap-6 xl:grid-cols-[424px_minmax(0,872px)]">
            <div className="order-2 grid gap-6 sm:grid-cols-2 xl:order-1 xl:grid-cols-1">
              <div className="relative min-h-[248px] overflow-hidden rounded-sm bg-[#191c1f] p-6 sm:p-8 xl:p-10">
                <div className="relative z-10 max-w-[190px]">
                  <p className="mb-3 text-[13px] font-semibold uppercase text-[#ebc80c] sm:text-[14px]">
                    Summer Sales
                  </p>

                  <h2 className="text-[22px] font-semibold leading-8 text-white sm:text-[24px]">
                    New Google Pixel 6 Pro
                  </h2>

                  <a
                    href="/"
                    className="mt-5 flex h-12 w-fit items-center gap-3 bg-[#fa8232] px-5 text-[13px] font-bold uppercase text-white sm:mt-6 sm:px-6 sm:text-[14px]"
                  >
                    Shop Now <ArrowRight size={18} />
                  </a>
                </div>

                <img
                  src="/images/hero/pixel-phone.png"
                  alt="Pixel phone"
                  className="absolute bottom-0 right-[-34px] z-0 h-[190px] object-contain sm:h-[220px]"
                />

                <span className="absolute right-4 top-4 z-20 bg-[#efd33d] px-3 py-2 text-[13px] font-semibold text-[#191c1f] sm:right-6 sm:top-6 sm:px-5 sm:text-[16px]">
                  29% OFF
                </span>
              </div>

              <div className="relative min-h-[248px] overflow-hidden rounded-sm bg-[#f2f4f5] p-6 sm:p-8 xl:p-10">
                <img
                  src="/images/hero/flipbuds.png"
                  alt="Flipbuds"
                  className="absolute bottom-6 left-4 h-[125px] object-contain sm:left-6 sm:h-[145px] xl:left-10 xl:h-[150px]"
                />

                <div className="relative z-10 ml-[125px] pt-2 sm:ml-[145px] xl:ml-[170px] xl:pt-5">
                  <h2 className="text-[20px] font-semibold leading-7 text-[#191c1f] sm:text-[24px] sm:leading-8">
                    Xiaomi <br /> FlipBuds Pro
                  </h2>

                  <p className="mt-2 text-[16px] font-semibold text-[#2da5f3] sm:mt-3 sm:text-[18px]">
                    $299 USD
                  </p>

                  <a
                    href="/"
                    className="mt-4 flex h-11 w-fit items-center gap-2 bg-[#fa8232] px-4 text-[12px] font-bold uppercase text-white sm:mt-5 sm:h-12 sm:px-6 sm:text-[14px]"
                  >
                    Shop Now <ArrowRight size={18} />
                  </a>
                </div>
              </div>
            </div>

            <div className="order-1 relative min-h-[500px] overflow-hidden rounded-sm bg-[#f2f4f5] p-6 sm:min-h-[520px] sm:p-10 lg:p-14 xl:order-2">
              <div className="relative z-10 max-w-[520px] pt-4 sm:pt-10 lg:pt-[78px]">
                <p className="mb-3 flex items-center gap-3 text-[12px] font-semibold uppercase text-[#2da5f3] sm:mb-4 sm:text-[14px]">
                  <span className="h-0.5 w-6 bg-[#2da5f3]" />
                  The best place to play
                </p>

                <h1 className="text-[36px] font-semibold leading-tight text-[#191c1f] sm:text-[44px] lg:text-[48px] lg:leading-[56px]">
                  Xbox Consoles
                </h1>

                <p className="mt-4 max-w-[430px] text-[15px] leading-6 text-[#475156] sm:mt-5 sm:text-[18px] sm:leading-7">
                  Save up to 50% on select Xbox games. Get 3 months of PC Game
                  Pass for $2 USD.
                </p>

                <a
                  href="/"
                  className="mt-6 flex h-12 w-fit items-center gap-3 bg-[#fa8232] px-6 text-[14px] font-bold uppercase text-white sm:mt-8 sm:h-14 sm:px-8 sm:text-[16px]"
                >
                  Shop Now <ArrowRight size={22} />
                </a>
              </div>

              <img
                src="/images/hero/xbox-console.png"
                alt="Xbox console"
                className="absolute bottom-6 right-2 h-[210px] object-contain sm:bottom-10 sm:right-8 sm:h-[280px] lg:bottom-[60px] lg:right-[60px] lg:h-[360px]"
              />

              <span className="absolute right-4 top-4 z-20 grid h-16 w-16 place-items-center rounded-full border-[3px] border-white bg-[#2da5f3] text-[16px] font-semibold text-white sm:right-10 sm:top-8 sm:h-20 sm:w-20 sm:text-[20px] lg:right-16 lg:top-14 lg:h-[100px] lg:w-[100px] lg:border-4 lg:text-[24px]">
                $299
              </span>

              <div className="absolute bottom-5 left-6 flex gap-2 sm:bottom-8 sm:left-10 lg:bottom-12 lg:left-14">
                <span className="h-2.5 w-2.5 rounded-full bg-[#191c1f]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#adb7bc]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#adb7bc]" />
              </div>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 overflow-hidden rounded-sm border border-[#e4e7e9] bg-white sm:grid-cols-2 lg:grid-cols-4">
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