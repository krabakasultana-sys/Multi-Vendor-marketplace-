import { ArrowRight, CalendarDays, UserRound } from 'lucide-react'
import Container from './Container'

const news = [
  {
    image: '/images/news/news-1.png',
    author: 'Kristin Watson',
    date: '19 Dec, 2013',
    title: 'How to choose the right electronic device for your daily needs.',
    text: 'Learn simple buying tips that help you compare features, prices, warranty, and product quality before you purchase.',
  },
  {
    image: '/images/news/news-2.png',
    author: 'Robert Fox',
    date: '28 Nov, 2015',
    title: 'Smart accessories that can improve your work setup.',
    text: 'A good keyboard, mouse, monitor, and headset can make your workspace more comfortable and more productive.',
  },
  {
    image: '/images/news/news-3.png',
    author: 'Arlene McCoy',
    date: '9 May, 2014',
    title: 'Simple ways to keep your gadgets safe for longer use.',
    text: 'Protect your devices from dust, heat, moisture, and unsafe charging habits to improve their performance and lifespan.',
  },
]

function LatestNews() {
  return (
    <section className="bg-white py-[72px]">
      <Container>
        <h2 className="text-center text-[32px] font-semibold text-[#191c1f]">
          Latest News
        </h2>

        <div className="mt-[40px] grid grid-cols-3 gap-[24px]">
          {news.map((item, index) => (
            <article
              key={index}
              className="border border-[#e4e7e9] bg-white p-[24px] shadow-sm"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-[248px] w-full object-cover"
              />

              <div className="mt-[24px] flex items-center gap-[16px] text-[14px] text-[#77878f]">
                <span className="flex items-center gap-[6px]">
                  <UserRound size={16} className="text-[#fa8232]" />
                  {item.author}
                </span>

                <span className="flex items-center gap-[6px]">
                  <CalendarDays size={16} className="text-[#fa8232]" />
                  {item.date}
                </span>
              </div>

              <h3 className="mt-[12px] min-h-[56px] text-[18px] font-medium leading-[28px] text-[#191c1f]">
                {item.title}
              </h3>

              <p className="mt-[12px] min-h-[72px] text-[14px] leading-[24px] text-[#77878f]">
                {item.text}
              </p>

              <a
                href="/blog-detail"
                className="mt-[24px] flex h-[48px] w-fit items-center gap-2 border border-[#ffe7d6] px-[24px] text-[14px] font-bold uppercase text-[#fa8232]"
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