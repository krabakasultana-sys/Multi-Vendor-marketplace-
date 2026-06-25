import {
  ChevronDown,
  Headphones,
  Heart,
  Info,
  MapPin,
  Phone,
  RefreshCcw,
  Search,
  ShoppingCart,
  User,
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
  return (
    <header className="w-full bg-white">
      <div className="h-[52px] w-full border-b border-white/15 bg-[#1b6392]">
        <Container className="flex h-[52px] items-center justify-between text-[14px] text-white">
          <p>Welcome to Clicon online eCommerce store.</p>

          <div className="flex items-center gap-[24px]">
            <div className="flex items-center gap-[14px]">
              <span>Follow us:</span>
              <FaTwitter className="text-[18px]" />
              <FaFacebook className="text-[18px]" />
              <FaPinterestP className="text-[18px]" />
              <FaRedditAlien className="text-[18px]" />
              <FaYoutube className="text-[18px]" />
              <FaInstagram className="text-[18px]" />
            </div>

            <div className="h-[28px] w-px bg-white/20" />

            <button type="button" className="flex items-center gap-[6px]">
              Eng <ChevronDown size={16} />
            </button>

            <button type="button" className="flex items-center gap-[6px]">
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
              className="h-[52px] w-full rounded-sm bg-white px-5 pr-14 text-[14px] text-[#77878f] outline-none"
            />

            <Search
              size={22}
              className="absolute right-5 top-1/2 -translate-y-1/2 text-[#191c1f]"
            />
          </div>

          <div className="ml-auto flex items-center gap-[24px] text-white">
            <ShoppingCart size={32} />
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
                  active === 'support' ? 'text-[#fa8232]' : 'text-[#5f6c72]'
                }`}
                href="/customer-support"
              >
                <Headphones size={20} /> Customer Support
              </a>

              <a
                className={`flex items-center gap-2 ${
                  active === 'faqs' ? 'text-[#fa8232]' : 'text-[#5f6c72]'
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
    </header>
  )
}

export default PageHeader