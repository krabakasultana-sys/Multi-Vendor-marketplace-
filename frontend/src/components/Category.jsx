import { ArrowLeft, ArrowRight } from 'lucide-react'
import { categories } from '../data/products'
import Container from './Container'

function Category() {
  const productPageRoute = '/products'

  return (
    <section className="w-full bg-white pb-8 pt-10 sm:pt-12 lg:pb-10">
      <Container>
        <h2 className="mb-7 text-center text-[26px] font-semibold leading-9 text-[#191c1f] sm:mb-10 sm:text-[32px] sm:leading-10">
          Shop with Categorys
        </h2>

        <div className="relative">
          <button
            type="button"
            className="absolute left-0 top-1/2 z-10 hidden h-12 w-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-[#fa8232] text-white xl:grid xl:h-14 xl:w-14"
            aria-label="Previous categories"
          >
            <ArrowLeft size={24} />
          </button>

          <div className="grid snap-x snap-mandatory auto-cols-[78%] grid-flow-col gap-4 overflow-x-auto pb-3 sm:auto-cols-[42%] md:auto-cols-[31%] lg:auto-cols-auto lg:grid-flow-row lg:grid-cols-4 lg:overflow-visible xl:grid-cols-6 xl:gap-[18px]">
            {categories.map((category) => (
              <a
                key={category.name}
                href={`${productPageRoute}?category=${encodeURIComponent(
                  category.name
                )}`}
                className="grid min-h-[210px] snap-start place-items-center rounded-sm border border-[#e4e7e9] bg-white p-5 text-center transition hover:border-[#fa8232] hover:shadow-md sm:min-h-[220px] lg:min-h-[236px] lg:p-6"
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="h-[120px] w-full object-contain lg:h-[130px]"
                />

                <h3 className="text-[15px] font-medium leading-6 text-[#191c1f] sm:text-[16px]">
                  {category.name}
                </h3>
              </a>
            ))}
          </div>

          <button
            type="button"
            className="absolute right-0 top-1/2 z-10 hidden h-12 w-12 translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-[#fa8232] text-white xl:grid xl:h-14 xl:w-14"
            aria-label="Next categories"
          >
            <ArrowRight size={24} />
          </button>
        </div>
      </Container>
    </section>
  )
}

export default Category