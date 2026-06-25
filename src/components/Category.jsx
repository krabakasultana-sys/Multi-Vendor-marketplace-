import { ArrowLeft, ArrowRight } from 'lucide-react'
import { categories } from '../data/products'

function Category() {
  return (
    <section className="w-full bg-white pt-[40px] pb-[32px]">
      <div className="mx-auto w-[1320px]">
        <h2 className="mb-[40px] text-center text-[32px] font-semibold leading-[40px] text-[#191c1f]">
          Shop with Categorys
        </h2>

        <div className="relative h-[236px] w-[1320px]">
          <button className="absolute left-[-28px] top-1/2 z-10 grid h-[56px] w-[56px] -translate-y-1/2 place-items-center rounded-full bg-[#fa8232] text-white">
            <ArrowLeft size={24} />
          </button>

          <div className="grid h-[236px] grid-cols-6 gap-[18px]">
            {categories.map((category) => (
              <article
                key={category.name}
                className="grid h-[236px] place-items-center rounded-sm border border-[#e4e7e9] bg-white p-[24px] text-center"
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="h-[130px] w-full object-contain"
                />

                <h3 className="text-[16px] font-medium leading-[24px] text-[#191c1f]">
                  {category.name}
                </h3>
              </article>
            ))}
          </div>

          <button className="absolute right-[-28px] top-1/2 z-10 grid h-[56px] w-[56px] -translate-y-1/2 place-items-center rounded-full bg-[#fa8232] text-white">
            <ArrowRight size={24} />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Category