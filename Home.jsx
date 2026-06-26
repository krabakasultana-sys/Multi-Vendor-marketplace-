import HeroBanner from "../components/HeroBanner";
import Categories from "../components/Categories";
import BestDeals from "../components/BestDeals";
import FlashSale from "../components/FlashSale";
import LatestProducts from "../components/LatestProducts";
import ProductCard from "../components/ProductCard";
import products from "../data/products";
import PromoCards from "../components/PromoCards";
import Newsletter from "../components/Newsletter";




export default function Home() {

return(

<>

<HeroBanner/>

<PromoCards/>

<Categories/>

<BestDeals/>

<FlashSale/>

<LatestProducts />

<Newsletter />

<section className="featured">

<div className="container">

<h2>Featured Products</h2>

<div className="products-grid">

{products.map(product=>(

<ProductCard
key={product.id}
product={product}
/>

))}

</div>

</div>

</section>

</>

)

}