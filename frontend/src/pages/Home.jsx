import Header from '../components/Header'
import TodayBestDeals from '../components/TodayBestDeals'
import Category from '../components/Category'
import FeaturedProducts from '../components/FeaturedProducts'
import Banner from '../components/Banner'
import ComputerAccessories from '../components/ComputerAccessories'
import MacbookBanner from '../components/MacbookBanner'
import ProductLists from '../components/ProductLists'
import LatestNews from '../components/LatestNews'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'

function Home() {
  return (
    <main className="w-full bg-white">
      <Header />
      <TodayBestDeals />
      <Category />
      <FeaturedProducts />
      <Banner />
      <ComputerAccessories />
      <MacbookBanner />
      <ProductLists />
      <LatestNews />
      <Newsletter />
      <Footer />
    </main>
  )
}

export default Home