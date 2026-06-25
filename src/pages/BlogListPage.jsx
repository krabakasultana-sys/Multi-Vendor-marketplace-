import { ArrowRight, CalendarDays, Search, UserRound } from 'lucide-react'

import PageHeader from '../components/PageHeader'
import PageBreadcrumb from '../components/PageBreadcrumb'
import Container from '../components/Container'
import Footer from '../components/Footer'

const posts = [
  {
    image: '/images/blog/blog-1.png',
    author: 'Cameron Reed',
    date: '1 Feb, 2020',
    comments: '738',
    title: 'How smart gadgets are changing modern home entertainment.',
  },
  {
    image: '/images/blog/blog-2.png',
    author: 'Floyd Miles',
    date: '17 Oct, 2020',
    comments: '826',
    title: 'Five simple ways to choose the right smartwatch for daily use.',
  },
  {
    image: '/images/blog/blog-3.png',
    author: 'Marvin McKinney',
    date: '8 Sep, 2020',
    comments: '738',
    title: 'Why a reliable computer setup matters for remote work.',
  },
  {
    image: '/images/blog/blog-4.png',
    author: 'Darlene Fox',
    date: '24 May, 2020',
    comments: '826',
    title: 'A beginner friendly guide to understanding computer accessories.',
  },
  {
    image: '/images/blog/blog-5.png',
    author: 'Brooklyn Simmons',
    date: '21 Sep, 2020',
    comments: '738',
    title: 'How to protect your devices and keep your data safe online.',
  },
  {
    image: '/images/blog/blog-6.png',
    author: 'Devon Lane',
    date: '22 Oct, 2020',
    comments: '826',
    title: 'What to check before buying a new smartphone this year.',
  },
  {
    image: '/images/blog/blog-7.png',
    author: 'Bessie Cooper',
    date: '8 Sep, 2020',
    comments: '738',
    title: 'Essential keyboard and mouse features every buyer should know.',
  },
  {
    image: '/images/blog/blog-8.png',
    author: 'Kristin Watson',
    date: '1 Feb, 2020',
    comments: '826',
    title: 'How to build a clean and comfortable desktop workspace.',
  },
]

function Sidebar() {
  const categories = [
    'All',
    'Electronics Devices',
    'Computer and Laptop',
    'Computer Accessories',
    'Smartphone',
    'Headphones',
    'Mobile Accessories',
    'Gaming Console',
    'Camera and Photo',
  ]

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
    <aside className="w-[300px] shrink-0">
      <div className="border border-[#e4e7e9] p-[24px]">
        <h3 className="text-[16px] font-semibold uppercase text-[#191c1f]">
          Category
        </h3>

        <div className="mt-[16px] flex flex-col gap-[12px]">
          {categories.map((category, index) => (
            <label
              key={category}
              className="flex items-center gap-[10px] text-[14px] text-[#475156]"
            >
              <span
                className={`h-[14px] w-[14px] rounded-full border ${
                  index === 0
                    ? 'border-[#fa8232] bg-[#fa8232]'
                    : 'border-[#c9cfd2]'
                }`}
              />
              {category}
            </label>
          ))}
        </div>
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
                Best electronics shopping tips for everyday customers.
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

function BlogCard({ post }) {
  return (
    <article className="border border-[#e4e7e9] bg-white p-[24px] shadow-sm">
      <img
        src={post.image}
        alt={post.title}
        className="h-[260px] w-full object-cover"
      />

      <div className="mt-[24px] flex items-center gap-[16px] text-[14px] text-[#77878f]">
        <span className="flex items-center gap-[6px]">
          <UserRound size={16} className="text-[#fa8232]" />
          {post.author}
        </span>

        <span className="flex items-center gap-[6px]">
          <CalendarDays size={16} className="text-[#fa8232]" />
          {post.date}
        </span>

        <span className="text-[#77878f]">{post.comments} comments</span>
      </div>

      <h2 className="mt-[12px] text-[18px] font-medium leading-[28px] text-[#191c1f]">
        {post.title}
      </h2>

      <p className="mt-[12px] text-[15px] leading-[24px] text-[#77878f]">
        Read useful buying guides, device tips, and simple advice to help you
        choose the right electronics for your needs.
      </p>

      <a
        href="/blog-detail"
        className="mt-[24px] flex h-[48px] w-fit items-center gap-2 border border-[#ffe7d6] px-[24px] text-[14px] font-bold uppercase text-[#fa8232]"
      >
        Read More <ArrowRight size={18} />
      </a>
    </article>
  )
}

function BlogListPage() {
  return (
    <>
      <PageHeader />

      <PageBreadcrumb
        items={[
          { label: 'Pages' },
          { label: 'Blog' },
        ]}
      />

      <main className="bg-white py-[72px]">
        <Container className="flex gap-[36px]">
          <Sidebar />

          <section className="flex-1">
            <div className="mb-[24px] flex items-center justify-between">
              <div className="relative h-[48px] w-[424px]">
                <input
                  placeholder="Search blog posts..."
                  className="h-full w-full border border-[#e4e7e9] px-4 pr-12 outline-none"
                />
                <Search
                  size={20}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[#77878f]"
                />
              </div>

              <div className="flex items-center gap-[12px]">
                <span className="text-[14px] text-[#5f6c72]">Sort by:</span>
                <select className="h-[48px] w-[160px] border border-[#e4e7e9] px-4 text-[14px] text-[#475156] outline-none">
                  <option>Most Popular</option>
                  <option>Newest</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-[24px]">
              {posts.map((post, index) => (
                <BlogCard key={index} post={post} />
              ))}
            </div>

            <div className="mt-[48px] flex justify-center gap-[10px]">
              {['←', '01', '02', '03', '04', '05', '06', '→'].map((item) => (
                <button
                  key={item}
                  className={`h-[40px] w-[40px] rounded-full border text-[14px] ${
                    item === '01'
                      ? 'border-[#fa8232] bg-[#fa8232] text-white'
                      : 'border-[#e4e7e9] bg-white text-[#191c1f]'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </section>
        </Container>
      </main>

      <Footer />
    </>
  )
}

export default BlogListPage