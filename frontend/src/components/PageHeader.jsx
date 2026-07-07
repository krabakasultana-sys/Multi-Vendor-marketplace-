import { useState } from 'react'

import {
  ChevronDown,
  Headphones,
  Heart,
  Info,
  MapPin,
  Menu,
  Phone,
  RefreshCcw,
  Search,
  ShoppingCart,
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

function PageHeader({ active = '' }) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="w-full bg-white">
      {/* Top blue bar */}
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

            <div className="hidden h-[28px] w-px bg-white/20 xl:block" />

            <button
              type="button"
              className="flex items-center gap-1 sm:gap-[6px]"
            >
              Eng <ChevronDown size={14} />
            </button>

            <button
              type="button"
              className="flex items-center gap-1 sm:gap-[6px]"
            >
              USD <ChevronDown size={14} />
            </button>
          </div>
        </Container>
      </div>

      {/* Main header */}
      <div className="w-full bg-[#1b6392]">
        <Container className="flex flex-wrap items-center gap-4 py-4 lg:h-[88px] lg:flex-nowrap lg:gap-[88px] lg:py-0">
          <a
            href="/"
            className="flex shrink-0 items-center gap-2 sm:gap-3 lg:w-[236px]"
          >
            <div className="grid h-[40px] w-[40px] place-items-center rounded-full bg-white sm:h-[48px] sm:w-[48px]">
              <div className="h-[16px] w-[16px] rounded-full bg-[#1b6392] sm:h-[20px] sm:w-[20px]" />
            </div>

            <span className="text-[24px] font-bold leading-none text-white sm:text-[32px]">
              CLICON
            </span>
          </a>

          <div className="order-3 relative w-full lg:order-none lg:w-[646px] lg:flex-none">
            <input
              type="text"
              placeholder="Search for anything..."
              className="h-[48px] w-full rounded-sm bg-white px-4 pr-12 text-[14px] text-[#77878f] outline-none sm:h-[52px] sm:px-5 sm:pr-14"
            />

            <Search
              size={22}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-[#191c1f] sm:right-5"
            />
          </div>

          <div className="ml-auto flex items-center gap-4 text-white sm:gap-[24px]">
            <ShoppingCart size={27} className="sm:h-8 sm:w-8" />
            <Heart size={27} className="sm:h-8 sm:w-8" />

            <a href="/sign-in" className="text-white">
              <User size={27} className="sm:h-8 sm:w-8" />
            </a>

            <button
              type="button"
              onClick={() => setMenuOpen((previous) => !previous)}
              className="grid h-9 w-9 place-items-center text-white lg:hidden"
              aria-label="Toggle navigation menu"
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </Container>
      </div>

      {/* Desktop navigation */}
      <div className="hidden h-[80px] w-full border-b border-[#e4e7e9] bg-white lg:block">
        <Container className="flex h-[80px] items-center justify-between">
          <div className="flex items-center gap-[24px]">
            <button
              type="button"
              className="flex h-[48px] items-center gap-3 bg-[#f2f4f5] px-[24px] text-[14px] font-medium text-[#191c1f]"
            >
              All Category <ChevronDown size={16} />
            </button>

            <nav className="flex items-center gap-[24px] text-[14px]">
              <a className="flex items-center gap-2 text-[#5f6c72]" href="#">
                <MapPin size={20} /> Track Order
              </a>

              <a className="flex items-center gap-2 text-[#5f6c72]" href="#">
                <RefreshCcw size={20} /> Compare
              </a>

              <a
                className={`flex items-center gap-2 ${
                  active === 'support'
                    ? 'text-[#fa8232]'
                    : 'text-[#5f6c72]'
                }`}
                href="/customer-support"
              >
                <Headphones size={20} /> Customer Support
              </a>

              <a
                className={`flex items-center gap-2 ${
                  active === 'faqs'
                    ? 'text-[#fa8232]'
                    : 'text-[#5f6c72]'
                }`}
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

      {/* Mobile navigation */}
      {menuOpen && (
        <div className="border-b border-[#e4e7e9] bg-white lg:hidden">
          <Container className="py-4">
            <nav className="flex flex-col">
              <button
                type="button"
                className="flex min-h-[48px] items-center justify-between border-b border-[#e4e7e9] py-3 text-left text-[14px] font-medium text-[#191c1f]"
              >
                All Category <ChevronDown size={16} />
              </button>

              <a
                href="#"
                className="flex min-h-[48px] items-center gap-3 border-b border-[#e4e7e9] py-3 text-[14px] text-[#5f6c72]"
              >
                <MapPin size={20} /> Track Order
              </a>

              <a
                href="#"
                className="flex min-h-[48px] items-center gap-3 border-b border-[#e4e7e9] py-3 text-[14px] text-[#5f6c72]"
              >
                <RefreshCcw size={20} /> Compare
              </a>

              <a
                href="/customer-support"
                className={`flex min-h-[48px] items-center gap-3 border-b border-[#e4e7e9] py-3 text-[14px] ${
                  active === 'support'
                    ? 'text-[#fa8232]'
                    : 'text-[#5f6c72]'
                }`}
              >
                <Headphones size={20} /> Customer Support
              </a>

              <a
                href="/faqs"
                className={`flex min-h-[48px] items-center gap-3 border-b border-[#e4e7e9] py-3 text-[14px] ${
                  active === 'faqs'
                    ? 'text-[#fa8232]'
                    : 'text-[#5f6c72]'
                }`}
              >
                <Info size={20} /> Need Help
              </a>

              <div className="flex min-h-[48px] items-center gap-3 py-3 text-[14px] text-[#191c1f]">
                <Phone size={20} />
                <span>+1-202-555-0104</span>
              </div>
            </nav>
          </Container>
        </div>
      )}
    </header>
  )
}

export default PageHeader