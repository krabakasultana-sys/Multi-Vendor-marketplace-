import {
  CalendarDays,
  Link,
  MessageCircle,
  Search,
  UserRound,
} from 'lucide-react'

import {
  FaFacebookF,
  FaLinkedinIn,
  FaPinterestP,
  FaTwitter,
  FaWhatsapp,
} from 'react-icons/fa'

import PageHeader from '../components/PageHeader'
import PageBreadcrumb from '../components/PageBreadcrumb'
import Container from '../components/Container'
import Footer from '../components/Footer'

function BlogSidebar() {
  const tags = [
    'Game',
    'iPhone',
    'TV',
    'Asus Laptops',
    'MacBook',
    'SSD',
    'Graphics Card',
    'Speaker',
    'Tablet',
    'Microwave',
    'Samsung',
    'Power Bank',
  ]

  return (
    <aside className="w-[280px] shrink-0">
      <div className="border border-[#e4e7e9] p-[24px]">
        <h3 className="text-[16px] font-semibold uppercase text-[#191c1f]">
          Search
        </h3>

        <div className="relative mt-[16px] h-[44px]">
          <input
            placeholder="Search..."
            className="h-full w-full border border-[#e4e7e9] px-4 pr-10 outline-none"
          />
          <Search
            size={18}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-[#77878f]"
          />
        </div>
      </div>

      <div className="mt-[24px] border border-[#e4e7e9] p-[24px]">
        <h3 className="text-[16px] font-semibold uppercase text-[#191c1f]">
          Category
        </h3>

        {[
          'All',
          'Electronics Devices',
          'Computer and Laptop',
          'Computer Accessories',
          'Smartphone',
          'Headphones',
          'Mobile Accessories',
          'Gaming Console',
          'Camera and Photo',
        ].map((item, index) => (
          <label
            key={item}
            className="mt-[12px] flex items-center gap-[10px] text-[14px] text-[#475156]"
          >
            <span
              className={`h-[14px] w-[14px] rounded-full border ${
                index === 0
                  ? 'border-[#fa8232] bg-[#fa8232]'
                  : 'border-[#c9cfd2]'
              }`}
            />
            {item}
          </label>
        ))}
      </div>

      <div className="mt-[24px] border border-[#e4e7e9] p-[24px]">
        <h3 className="text-[16px] font-semibold uppercase text-[#191c1f]">
          Latest Blog
        </h3>

        {[1, 2, 3].map((item) => (
          <a
            href="/blog-detail"
            key={item}
            className="mt-[18px] flex gap-[12px]"
          >
            <img
              src="/images/blog/latest-blog.png"
              alt="Latest blog"
              className="h-[70px] w-[90px] object-cover"
            />

            <div>
              <p className="text-[13px] font-medium leading-[18px] text-[#191c1f]">
                Simple electronics buying tips for smart customers.
              </p>
              <span className="mt-[6px] block text-[12px] text-[#77878f]">
                28 Nov, 2015
              </span>
            </div>
          </a>
        ))}
      </div>

      <div className="mt-[24px] border border-[#e4e7e9] p-[24px]">
        <h3 className="text-[16px] font-semibold uppercase text-[#191c1f]">
          Gallery
        </h3>

        <div className="mt-[16px] grid grid-cols-4 gap-[8px]">
          {Array.from({ length: 8 }).map((_, index) => (
            <img
              key={index}
              src={`/images/blog/gallery-${index + 1}.png`}
              alt="Gallery"
              className="h-[58px] w-[58px] object-cover"
            />
          ))}
        </div>
      </div>

      <div className="mt-[24px] border border-[#e4e7e9] p-[24px]">
        <h3 className="text-[16px] font-semibold uppercase text-[#191c1f]">
          Popular Tags
        </h3>

        <div className="mt-[16px] flex flex-wrap gap-[8px]">
          {tags.map((tag) => (
            <a
              key={tag}
              href="#"
              className={`border px-[10px] py-[6px] text-[13px] ${
                tag === 'Graphics Card'
                  ? 'border-[#fa8232] text-[#fa8232]'
                  : 'border-[#e4e7e9] text-[#475156]'
              }`}
            >
              {tag}
            </a>
          ))}
        </div>
      </div>
    </aside>
  )
}

function BlogDetailPage() {
  return (
    <>
      <PageHeader />

      <PageBreadcrumb
        items={[
          { label: 'Pages' },
          { label: 'Blog', href: '/blog' },
          { label: 'Blog Detail' },
        ]}
      />

      <main className="bg-white py-[72px]">
        <Container className="flex gap-[36px]">
          <article className="w-[900px]">
            <img
              src="/images/blog/blog-detail-main.png"
              alt="Electronics devices on a desk"
              className="h-[480px] w-full object-cover"
            />

            <div className="mt-[24px] flex items-center gap-[18px] text-[14px] text-[#77878f]">
              <span className="text-[#fa8232]">Electronics</span>

              <span className="flex items-center gap-[6px]">
                <UserRound size={16} className="text-[#fa8232]" />
                Marvin McKinney
              </span>

              <span className="flex items-center gap-[6px]">
                <CalendarDays size={16} className="text-[#fa8232]" />8 Sep,
                2020
              </span>

              <span className="flex items-center gap-[6px]">
                <MessageCircle size={16} className="text-[#fa8232]" />
                738 comments
              </span>
            </div>

            <h1 className="mt-[16px] text-[32px] font-semibold leading-[42px] text-[#191c1f]">
              How modern electronics make everyday life easier and more
              connected
            </h1>

            <div className="mt-[20px] flex items-center justify-between">
              <div className="flex items-center gap-[12px]">
                <img
                  src="/images/blog/author.png"
                  alt="Author"
                  className="h-[48px] w-[48px] rounded-full object-cover"
                />

                <span className="text-[15px] font-medium text-[#191c1f]">
                  Cameron Williamson
                </span>
              </div>

              <div className="flex items-center gap-[10px]">
                <span className="grid h-[36px] w-[36px] place-items-center rounded-full bg-[#25d366] text-white">
                  <FaWhatsapp />
                </span>
                <span className="grid h-[36px] w-[36px] place-items-center rounded-full bg-[#1877f2] text-white">
                  <FaFacebookF />
                </span>
                <span className="grid h-[36px] w-[36px] place-items-center rounded-full bg-[#1da1f2] text-white">
                  <FaTwitter />
                </span>
                <span className="grid h-[36px] w-[36px] place-items-center rounded-full bg-[#0a66c2] text-white">
                  <FaLinkedinIn />
                </span>
                <span className="grid h-[36px] w-[36px] place-items-center rounded-full bg-[#bd081c] text-white">
                  <FaPinterestP />
                </span>
                <span className="grid h-[36px] w-[36px] place-items-center rounded-full bg-[#929fa5] text-white">
                  <Link size={16} />
                </span>
              </div>
            </div>

            <p className="mt-[24px] text-[15px] leading-[26px] text-[#475156]">
              Technology has become part of our daily routine. From smartphones
              and laptops to headphones and smart home devices, electronics help
              people work faster, communicate better, and enjoy entertainment
              more easily.
            </p>

            <div className="mt-[32px] border-l-4 border-[#fa8232] bg-[#fff3eb] p-[32px] text-[20px] font-medium leading-[30px] text-[#191c1f]">
              “The best device is not always the most expensive one. The best
              device is the one that solves your problem, fits your budget, and
              works reliably every day.”
            </div>

            <p className="mt-[32px] text-[15px] leading-[26px] text-[#475156]">
              Before buying any electronic product, customers should compare
              features, warranty, battery life, durability, and after-sales
              support. A smart purchase is not only about price; it is also
              about long-term value.
            </p>

            <p className="mt-[20px] text-[15px] leading-[26px] text-[#475156]">
              Clicon focuses on making electronics shopping simple. Customers
              can explore products, read useful information, and choose items
              that match their needs.
            </p>

            <div className="mt-[32px] grid grid-cols-2 gap-[24px]">
              <img
                src="/images/blog/detail-1.png"
                alt="Modern robot technology"
                className="h-[280px] w-full object-cover"
              />

              <img
                src="/images/blog/detail-2.png"
                alt="Smartphone technology"
                className="h-[280px] w-full object-cover"
              />
            </div>

            <p className="mt-[24px] text-[15px] leading-[26px] text-[#475156]">
              Whether you are buying a phone, computer, speaker, printer, or
              smart accessory, always check your real use case first. This helps
              you avoid unnecessary spending and choose the right product.
            </p>

            <section className="mt-[56px]">
              <h2 className="text-[20px] font-semibold text-[#191c1f]">
                Leave a Comment
              </h2>

              <div className="mt-[24px] grid grid-cols-2 gap-[24px]">
                <div>
                  <label className="text-[14px] text-[#191c1f]">
                    Full Name
                  </label>
                  <input className="mt-[8px] h-[48px] w-full border border-[#e4e7e9] px-4 outline-none" />
                </div>

                <div>
                  <label className="text-[14px] text-[#191c1f]">
                    Email Address
                  </label>
                  <input className="mt-[8px] h-[48px] w-full border border-[#e4e7e9] px-4 outline-none" />
                </div>
              </div>

              <label className="mt-[20px] block text-[14px] text-[#191c1f]">
                Comment
              </label>
              <textarea
                placeholder="Write your comment about this blog..."
                className="mt-[8px] h-[140px] w-full resize-none border border-[#e4e7e9] p-4 outline-none"
              />

              <button className="mt-[20px] h-[48px] bg-[#fa8232] px-[24px] text-[14px] font-bold uppercase text-white">
                Post Comment
              </button>
            </section>
          </article>

          <BlogSidebar />
        </Container>
      </main>

      <Footer />
    </>
  )
}

export default BlogDetailPage