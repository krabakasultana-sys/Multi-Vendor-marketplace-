import { useEffect, useState } from 'react'
import {
  ArrowRight,
  CalendarDays,
  UserRound,
} from 'lucide-react'

import Container from './Container'
import { apiRequest } from '../services/api'

function LatestNews() {
  const [news, setNews] = useState([])

  useEffect(() => {
    async function loadBlogs() {
      try {
        const data = await apiRequest('/api/blogs')

        const formattedBlogs = data.blogs.slice(0, 3).map((blog) => ({
          id: blog._id,
          image: blog.image,
          author: blog.author,
          date: new Date(blog.createdAt).toLocaleDateString('en-US', {
            day: 'numeric',
            month: 'short',
            year: 'numeric',
          }),
          title: blog.title,
          text: blog.shortDescription,
        }))

        setNews(formattedBlogs)
      } catch (error) {
        console.log(error.message)
      }
    }

    loadBlogs()
  }, [])

  return (
    <section className="bg-white py-10 sm:py-14 lg:py-[72px]">
      <Container>
        <h2 className="text-center text-[27px] font-semibold text-[#191c1f] sm:text-[32px]">
          Latest News
        </h2>

        <div className="mt-7 grid grid-cols-1 gap-6 sm:mt-10 md:grid-cols-2 xl:grid-cols-3">
          {news.map((item) => (
            <article
              key={item.id}
              className="border border-[#e4e7e9] bg-white p-4 shadow-sm sm:p-6"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-[210px] w-full object-cover sm:h-[248px]"
              />

              <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-[13px] text-[#77878f] sm:mt-6 sm:text-[14px]">
                <span className="flex items-center gap-1.5">
                  <UserRound
                    size={16}
                    className="text-[#fa8232]"
                  />
                  {item.author}
                </span>

                <span className="flex items-center gap-1.5">
                  <CalendarDays
                    size={16}
                    className="text-[#fa8232]"
                  />
                  {item.date}
                </span>
              </div>

              <h3 className="mt-3 min-h-[56px] text-[17px] font-medium leading-7 text-[#191c1f] sm:text-[18px]">
                {item.title}
              </h3>

              <p className="mt-3 min-h-[72px] text-[13px] leading-6 text-[#77878f] sm:text-[14px]">
                {item.text}
              </p>

              <a
                href={`/blog-detail?id=${item.id}`}
                className="mt-5 flex h-12 w-fit items-center gap-2 border border-[#ffe7d6] px-5 text-[13px] font-bold uppercase text-[#fa8232] sm:mt-6 sm:px-6 sm:text-[14px]"
              >
                Read More <ArrowRight size={18} />
              </a>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default LatestNews