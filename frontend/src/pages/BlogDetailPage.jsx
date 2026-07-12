import { useEffect, useState } from 'react'
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
import { apiRequest } from '../services/api'

function formatDate(date) {
  return new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })
}

function BlogSidebar({ latestBlogs }) {
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
    <aside className="w-full shrink-0 lg:w-[280px]">
      <div className="border border-[#e4e7e9] p-5 sm:p-6">
        <h3 className="text-[16px] font-semibold uppercase text-[#191c1f]">
          Search
        </h3>

        <div className="relative mt-4 h-11">
          <input
            type="search"
            placeholder="Search..."
            className="h-full w-full border border-[#e4e7e9] px-4 pr-10 text-[14px] outline-none focus:border-[#fa8232]"
          />

          <Search
            size={18}
            className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#77878f]"
          />
        </div>
      </div>

      <div className="mt-6 border border-[#e4e7e9] p-5 sm:p-6">
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
            className="mt-3 flex items-center gap-2.5 text-[14px] text-[#475156]"
          >
            <span
              className={`h-3.5 w-3.5 shrink-0 rounded-full border ${
                index === 0
                  ? 'border-[#fa8232] bg-[#fa8232]'
                  : 'border-[#c9cfd2]'
              }`}
            />

            {item}
          </label>
        ))}
      </div>

      <div className="mt-6 border border-[#e4e7e9] p-5 sm:p-6">
        <h3 className="text-[16px] font-semibold uppercase text-[#191c1f]">
          Latest Blog
        </h3>

        {latestBlogs.slice(0, 3).map((blog) => (
          <a
            href={`/blog-detail?id=${blog._id}`}
            key={blog._id}
            className="mt-[18px] flex gap-3"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="h-[70px] w-[90px] shrink-0 object-cover"
            />

            <div className="min-w-0">
              <p className="line-clamp-2 text-[13px] font-medium leading-[18px] text-[#191c1f]">
                {blog.title}
              </p>

              <span className="mt-1.5 block text-[12px] text-[#77878f]">
                {formatDate(blog.createdAt)}
              </span>
            </div>
          </a>
        ))}
      </div>

      <div className="mt-6 border border-[#e4e7e9] p-5 sm:p-6">
        <h3 className="text-[16px] font-semibold uppercase text-[#191c1f]">
          Gallery
        </h3>

        <div className="mt-4 grid grid-cols-4 gap-2 sm:grid-cols-6 lg:grid-cols-4">
          {Array.from({ length: 8 }).map((_, index) => (
            <img
              key={index}
              src={`/images/blog/gallery-${index + 1}.png`}
              alt={`Gallery ${index + 1}`}
              className="aspect-square w-full object-cover"
            />
          ))}
        </div>
      </div>

      <div className="mt-6 border border-[#e4e7e9] p-5 sm:p-6">
        <h3 className="text-[16px] font-semibold uppercase text-[#191c1f]">
          Popular Tags
        </h3>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <a
              key={tag}
              href="#"
              className={`border px-2.5 py-1.5 text-[13px] ${
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
  const [blog, setBlog] = useState(null)
  const [latestBlogs, setLatestBlogs] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadBlogDetail() {
      try {
        const params = new URLSearchParams(window.location.search)
        const blogId = params.get('id')

        const blogsData = await apiRequest('/api/blogs')
        setLatestBlogs(blogsData.blogs)

        if (blogId) {
          const detailData = await apiRequest(`/api/blogs/${blogId}`)
          setBlog(detailData.blog)
        } else {
          setBlog(blogsData.blogs[0])
        }
      } catch (error) {
        console.log(error.message)
      } finally {
        setLoading(false)
      }
    }

    loadBlogDetail()
  }, [])

  if (loading) {
    return (
      <>
        <PageHeader />

        <main className="bg-white px-4 py-20 text-center text-[#5f6c72] sm:py-[100px]">
          Loading blog detail...
        </main>

        <Footer />
      </>
    )
  }

  if (!blog) {
    return (
      <>
        <PageHeader />

        <main className="bg-white px-4 py-20 text-center text-[#5f6c72] sm:py-[100px]">
          Blog not found.
        </main>

        <Footer />
      </>
    )
  }

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

      <main className="bg-white py-10 sm:py-14 lg:py-[72px]">
        <Container className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-9">
          <article className="min-w-0 flex-1">
            <img
              src={blog.image}
              alt={blog.title}
              className="h-[240px] w-full object-cover sm:h-[360px] lg:h-[480px]"
            />

            <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-[13px] text-[#77878f] sm:mt-6 sm:text-[14px]">
              <span className="text-[#fa8232]">{blog.category}</span>

              <span className="flex items-center gap-1.5">
                <UserRound size={16} className="text-[#fa8232]" />
                {blog.author}
              </span>

              <span className="flex items-center gap-1.5">
                <CalendarDays size={16} className="text-[#fa8232]" />
                {formatDate(blog.createdAt)}
              </span>

              <span className="flex items-center gap-1.5">
                <MessageCircle size={16} className="text-[#fa8232]" />
                0 comments
              </span>
            </div>

            <h1 className="mt-4 text-[26px] font-semibold leading-tight text-[#191c1f] sm:text-[30px] lg:text-[32px] lg:leading-[42px]">
              {blog.title}
            </h1>

            <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                <img
                  src="/images/blog/author.png"
                  alt={blog.author}
                  className="h-12 w-12 shrink-0 rounded-full object-cover"
                />

                <span className="text-[15px] font-medium text-[#191c1f]">
                  {blog.author}
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-2.5">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-[#25d366] text-white">
                  <FaWhatsapp />
                </span>

                <span className="grid h-9 w-9 place-items-center rounded-full bg-[#1877f2] text-white">
                  <FaFacebookF />
                </span>

                <span className="grid h-9 w-9 place-items-center rounded-full bg-[#1da1f2] text-white">
                  <FaTwitter />
                </span>

                <span className="grid h-9 w-9 place-items-center rounded-full bg-[#0a66c2] text-white">
                  <FaLinkedinIn />
                </span>

                <span className="grid h-9 w-9 place-items-center rounded-full bg-[#bd081c] text-white">
                  <FaPinterestP />
                </span>

                <span className="grid h-9 w-9 place-items-center rounded-full bg-[#929fa5] text-white">
                  <Link size={16} />
                </span>
              </div>
            </div>

            <p className="mt-6 text-[14px] leading-6 text-[#475156] sm:text-[15px] sm:leading-[26px]">
              {blog.content}
            </p>

            <blockquote className="mt-8 border-l-4 border-[#fa8232] bg-[#fff3eb] p-5 text-[17px] font-medium leading-7 text-[#191c1f] sm:p-8 sm:text-[20px] sm:leading-[30px]">
              “The best device is not always the most expensive one. The best
              device is the one that solves your problem, fits your budget, and
              works reliably every day.”
            </blockquote>

            <p className="mt-8 text-[14px] leading-6 text-[#475156] sm:text-[15px] sm:leading-[26px]">
              Before buying any electronic product, customers should compare
              features, warranty, battery life, durability, and after-sales
              support. A smart purchase is not only about price; it is also
              about long-term value.
            </p>

            <p className="mt-5 text-[14px] leading-6 text-[#475156] sm:text-[15px] sm:leading-[26px]">
              Clicon focuses on making electronics shopping simple. Customers
              can explore products, read useful information, and choose items
              that match their needs.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
              <img
                src="/images/blog/detail-1.png"
                alt="Modern robot technology"
                className="h-[220px] w-full object-cover sm:h-[280px]"
              />

              <img
                src="/images/blog/detail-2.png"
                alt="Smartphone technology"
                className="h-[220px] w-full object-cover sm:h-[280px]"
              />
            </div>

            <p className="mt-6 text-[14px] leading-6 text-[#475156] sm:text-[15px] sm:leading-[26px]">
              Whether you are buying a phone, computer, speaker, printer, or
              smart accessory, always check your real use case first. This
              helps you avoid unnecessary spending and choose the right
              product.
            </p>

            <section className="mt-10 sm:mt-14">
              <h2 className="text-[20px] font-semibold text-[#191c1f]">
                Leave a Comment
              </h2>

              <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6">
                <div className="min-w-0">
                  <label
                    htmlFor="comment-name"
                    className="text-[14px] text-[#191c1f]"
                  >
                    Full Name
                  </label>

                  <input
                    id="comment-name"
                    type="text"
                    className="mt-2 h-12 w-full border border-[#e4e7e9] px-4 text-[14px] outline-none focus:border-[#fa8232]"
                  />
                </div>

                <div className="min-w-0">
                  <label
                    htmlFor="comment-email"
                    className="text-[14px] text-[#191c1f]"
                  >
                    Email Address
                  </label>

                  <input
                    id="comment-email"
                    type="email"
                    className="mt-2 h-12 w-full border border-[#e4e7e9] px-4 text-[14px] outline-none focus:border-[#fa8232]"
                  />
                </div>
              </div>

              <label
                htmlFor="blog-comment"
                className="mt-5 block text-[14px] text-[#191c1f]"
              >
                Comment
              </label>

              <textarea
                id="blog-comment"
                placeholder="Write your comment about this blog..."
                className="mt-2 min-h-[140px] w-full resize-y border border-[#e4e7e9] p-4 text-[14px] outline-none focus:border-[#fa8232]"
              />

              <button
                type="button"
                className="mt-5 h-12 w-full bg-[#fa8232] px-6 text-[14px] font-bold uppercase text-white sm:w-auto"
              >
                Post Comment
              </button>
            </section>
          </article>

          <BlogSidebar latestBlogs={latestBlogs} />
        </Container>
      </main>

      <Footer />
    </>
  )
}

export default BlogDetailPage