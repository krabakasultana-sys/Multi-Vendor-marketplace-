import { productLists } from '../data/products'

function ProductLists() {
  return (
    <section className="h-[496px] w-full bg-white pt-[56px] pb-[32px]">
      <div className="mx-auto grid h-[384px] w-[1320px] grid-cols-4 gap-[24px]">
        {productLists.map((list) => (
          <div key={list.title} className="h-[384px]">
            <h2 className="mb-[16px] text-[16px] font-semibold uppercase leading-6 text-[#191c1f]">
              {list.title}
            </h2>

            <div className="grid gap-[16px]">
              {list.items.map((item) => (
                <ProductListCard key={item.name} item={item} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function ProductListCard({ item }) {
  return (
    <article className="flex h-[104px] items-center gap-[16px] rounded-sm border border-[#e4e7e9] bg-white p-[12px]">
      <div className="grid h-[80px] w-[80px] shrink-0 place-items-center">
        <img
          src={item.image}
          alt={item.name}
          className="max-h-[72px] max-w-[72px] object-contain"
        />
      </div>

      <div className="min-w-0">
        <h3 className="h-[40px] overflow-hidden text-[14px] leading-[20px] text-[#191c1f]">
          {item.name}
        </h3>

        <p className="mt-[8px] text-[14px] font-semibold leading-5 text-[#2da5f3]">
          {item.price}
        </p>
      </div>
    </article>
  )
}

export default ProductLists