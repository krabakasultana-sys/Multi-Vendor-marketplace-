import { useEffect, useState } from 'react'
import {
  ArrowRight,
  CalendarDays,
  Search,
  UserRound,
} from 'lucide-react'

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

function Sidebar({ latestBlogs }) {
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
    <aside className="w-full shrink-0 lg:w-[300px]">
      <div className="border border-[#e4e7e9] p-5 sm:p-6">
        <h3 className="text-[16px] font-semibold uppercase text-[#191c1f]">
          Category
        </h3>

        <div className="mt-4 flex flex-col gap-3">
          {categories.map((category, index) => (
            <label
              key={category}
              className="flex items-center gap-2.5 text-[14px] text-[#475156]"
            >
              <span
                className={`h-3.5 w-3.5 shrink-0 rounded-full border ${
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

function BlogCard({ post }) {
  return (
    <article className="border border-[#e4e7e9] bg-white p-4 shadow-sm sm:p-6">
      <img
        src={post.image}
        alt={post.title}
        className="h-[210px] w-full object-cover sm:h-[240px] xl:h-[260px]"
      />

      <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-[13px] text-[#77878f] sm:mt-6 sm:text-[14px]">
        <span className="flex items-center gap-1.5">
          <UserRound size={16} className="text-[#fa8232]" />
          {post.author}
        </span>

        <span className="flex items-center gap-1.5">
          <CalendarDays size={16} className="text-[#fa8232]" />
          {formatDate(post.createdAt)}
        </span>

        <span>0 comments</span>
      </div>

      <h2 className="mt-3 text-[17px] font-medium leading-7 text-[#191c1f] sm:text-[18px]">
        {post.title}
      </h2>

      <p className="mt-3 text-[14px] leading-6 text-[#77878f] sm:text-[15px]">
        {post.shortDescription}
      </p>

      <a
        href={`/blog-detail?id=${post._id}`}
        className="mt-5 flex h-12 w-fit items-center gap-2 border border-[#ffe7d6] px-5 text-[13px] font-bold uppercase text-[#fa8232] sm:mt-6 sm:px-6 sm:text-[14px]"
      >
        Read More
        <ArrowRight size={18} />
      </a>
    </article>
  )
}

function BlogListPage() {
  const [posts, setPosts] = useState([])
  const [searchText, setSearchText] = useState('')
  const [sortType, setSortType] = useState('Newest')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadBlogs() {
      try {
        const data = await apiRequest('/api/blogs')
        setPosts(data.blogs)
      } catch (error) {
        console.log(error.message)
      } finally {
        setLoading(false)
      }
    }

    loadBlogs()
  }, [])

  const filteredPosts = [...posts]
    .filter((post) =>
      post.title.toLowerCase().includes(searchText.toLowerCase())
    )
    .sort((a, b) => {
      if (sortType === 'Newest') {
        return new Date(b.createdAt) - new Date(a.createdAt)
      }

      return a.title.localeCompare(b.title)
    })

  return (
    <>
      <PageHeader />

      <PageBreadcrumb
        items={[
          { label: 'Pages' },
          { label: 'Blog' },
        ]}
      />

      <main className="bg-white py-10 sm:py-14 lg:py-[72px]">
        <Container className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-9">
          <Sidebar latestBlogs={posts} />

          <section className="min-w-0 flex-1">
            <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="relative h-12 w-full sm:max-w-[424px]">
                <input
                  type="search"
                  value={searchText}
                  onChange={(event) => setSearchText(event.target.value)}
                  placeholder="Search blog posts..."
                  className="h-full w-full border border-[#e4e7e9] px-4 pr-12 text-[14px] outline-none focus:border-[#fa8232]"
                />

                <Search
                  size={20}
                  className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#77878f]"
                />
              </div>

              <div className="flex w-full items-center gap-3 sm:w-auto">
                <span className="shrink-0 text-[14px] text-[#5f6c72]">
                  Sort by:
                </span>

                <select
                  value={sortType}
                  onChange={(event) => setSortType(event.target.value)}
                  className="h-12 min-w-0 flex-1 border border-[#e4e7e9] px-4 text-[14px] text-[#475156] outline-none sm:w-[160px] sm:flex-none"
                >
                  <option>Newest</option>
                  <option>Most Popular</option>
                </select>
              </div>
            </div>

            {loading ? (
              <div className="border border-[#e4e7e9] p-10 text-center text-[#5f6c72]">
                Loading blogs...
              </div>
            ) : filteredPosts.length > 0 ? (
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
                {filteredPosts.map((post) => (
                  <BlogCard key={post._id} post={post} />
                ))}
              </div>
            ) : (
              <div className="border border-[#e4e7e9] p-10 text-center text-[#5f6c72]">
                No blog posts found.
              </div>
            )}

            <div className="mt-10 flex flex-wrap justify-center gap-2.5 sm:mt-12">
              {['←', '01', '02', '03', '04', '05', '06', '→'].map(
                (item) => (
                  <button
                    key={item}
                    type="button"
                    className={`h-10 w-10 rounded-full border text-[14px] ${
                      item === '01'
                        ? 'border-[#fa8232] bg-[#fa8232] text-white'
                        : 'border-[#e4e7e9] bg-white text-[#191c1f]'
                    }`}
                  >
                    {item}
                  </button>
                )
              )}
            </div>
          </section>
        </Container>
      </main>

      <Footer />
    </>
  )
}

export default BlogListPage