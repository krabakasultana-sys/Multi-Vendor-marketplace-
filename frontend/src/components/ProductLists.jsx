import { useEffect, useState } from 'react'
import { apiRequest } from '../services/api'
import Container from './Container'

function ProductLists() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    async function loadProducts() {
      try {
        const data = await apiRequest('/products')

        const formattedProducts = data.products.map((product) => ({
          ...product,
          price: `$${Number(product.price).toFixed(2)}`,
        }))

        setProducts(formattedProducts)
      } catch (error) {
        console.log(error.message)
      }
    }

    loadProducts()
  }, [])

  const repeatedProducts = [...products, ...products, ...products]

  const productLists = [
    {
      title: 'Flash Sale Today',
      items: repeatedProducts.slice(0, 3),
    },
    {
      title: 'Best Sellers',
      items: repeatedProducts.slice(3, 6),
    },
    {
      title: 'Top Rated',
      items: repeatedProducts.slice(6, 9),
    },
    {
      title: 'New Arrival',
      items: repeatedProducts.slice(9, 12),
    },
  ]

  return (
    <section className="w-full bg-white pb-8 pt-10 sm:pt-14">
      <Container className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-4 xl:gap-6">
        {productLists.map((list) => (
          <div key={list.title}>
            <h2 className="mb-4 text-[16px] font-semibold uppercase leading-6 text-[#191c1f]">
              {list.title}
            </h2>

            <div className="grid gap-4">
              {list.items.map((item, index) => (
                <ProductListCard
                  key={`${item._id}-${index}`}
                  item={item}
                />
              ))}
            </div>
          </div>
        ))}
      </Container>
    </section>
  )
}

function ProductListCard({ item }) {
  return (
    <article className="flex min-h-[104px] items-center gap-3 rounded-sm border border-[#e4e7e9] bg-white p-3 sm:gap-4">
      <div className="grid h-[72px] w-[72px] shrink-0 place-items-center sm:h-20 sm:w-20">
        <img
          src={item.image}
          alt={item.name}
          className="max-h-[64px] max-w-[64px] object-contain sm:max-h-[72px] sm:max-w-[72px]"
        />
      </div>

      <div className="min-w-0">
        <h3 className="h-10 overflow-hidden text-[13px] leading-5 text-[#191c1f] sm:text-[14px]">
          {item.name}
        </h3>

        <p className="mt-2 text-[14px] font-semibold leading-5 text-[#2da5f3]">
          {item.price}
        </p>
      </div>
    </article>
  )
}

export default ProductLists
