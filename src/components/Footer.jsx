import { ArrowRight } from 'lucide-react'
import Container from './Container'

function Footer() {
  return (
    <footer className="bg-[#191c1f] text-white">
      <Container className="grid grid-cols-[300px_180px_180px_220px_1fr] gap-[48px] py-[72px]">
        <div>
          <a href="/" className="flex items-center gap-3">
            <div className="grid h-[48px] w-[48px] place-items-center rounded-full bg-[#fa8232]">
              <div className="h-[18px] w-[18px] rounded-full border-4 border-[#191c1f]" />
            </div>

            <span className="text-[32px] font-bold text-white">CLICON</span>
          </a>

          <p className="mt-[24px] text-[14px] text-[#77878f]">
            Customer Supports:
          </p>

          <p className="mt-[6px] text-[18px] font-medium text-white">
            (629) 555-0129
          </p>

          <p className="mt-[12px] text-[15px] leading-[24px] text-[#adb7bc]">
            4517 Washington Ave. <br />
            Manchester, Kentucky 39495
          </p>

          <p className="mt-[12px] text-[15px] text-white">info@kinbo.com</p>
        </div>

        <div>
          <h3 className="text-[16px] font-semibold uppercase text-white">
            Top Category
          </h3>

          <div className="mt-[20px] flex flex-col gap-[12px] text-[14px] text-[#929fa5]">
            <a href="#">Computer & Laptop</a>
            <a href="#">SmartPhone</a>
            <a href="#">Headphone</a>
            <a href="#" className="text-white">
              Accessories
            </a>
            <a href="#">Camera & Photo</a>
            <a href="#">TV & Homes</a>

            <a
              href="/"
              className="mt-[4px] flex items-center gap-2 text-[#ebc80c]"
            >
              Browse All Product <ArrowRight size={16} />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-[16px] font-semibold uppercase text-white">
            Quick Links
          </h3>

          <div className="mt-[20px] flex flex-col gap-[12px] text-[14px] text-[#929fa5]">
            <a href="/">Shop Product</a>
            <a href="#">Shopping Cart</a>
            <a href="#">Wishlist</a>
            <a href="#">Compare</a>
            <a href="#">Track Order</a>
            <a href="/customer-support">Customer Help</a>
            <a href="/about-us">About Us</a>
            <a href="/blog">Blog</a>
            <a href="/faqs">FAQs</a>
          </div>
        </div>

        <div>
          <h3 className="text-[16px] font-semibold uppercase text-white">
            Download App
          </h3>

          <div className="mt-[20px] flex flex-col gap-[12px]">
            <div className="flex h-[69px] w-[176px] items-center gap-3 bg-[#303639] px-[20px]">
              <span className="text-[28px]">▶</span>
              <div>
                <p className="text-[11px] text-white">Get it now</p>
                <p className="text-[14px] font-semibold text-white">
                  Google Play
                </p>
              </div>
            </div>

            <div className="flex h-[69px] w-[176px] items-center gap-3 bg-[#303639] px-[20px]">
              <span className="text-[28px]"></span>
              <div>
                <p className="text-[11px] text-white">Get it now</p>
                <p className="text-[14px] font-semibold text-white">
                  App Store
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-[16px] font-semibold uppercase text-white">
            Popular Tag
          </h3>

          <div className="mt-[20px] flex flex-wrap gap-[8px]">
            {[
              'Game',
              'iPhone',
              'TV',
              'Asus Laptops',
              'Macbook',
              'SSD',
              'Graphics Card',
              'Power Bank',
              'Smart TV',
              'Speaker',
              'Tablet',
              'Microwave',
              'Samsung',
            ].map((tag) => (
              <a
                key={tag}
                href="#"
                className="border border-[#303639] px-[12px] py-[6px] text-[14px] text-white"
              >
                {tag}
              </a>
            ))}
          </div>
        </div>
      </Container>

      <div className="border-t border-[#303639] py-[24px] text-center text-[14px] text-[#adb7bc]">
        Kinbo - eCommerce Template © 2021. Design by Templatecookie
      </div>
    </footer>
  )
}

export default Footer