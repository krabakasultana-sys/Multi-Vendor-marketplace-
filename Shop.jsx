import { useState } from "react";
import ProductCard from "../components/ProductCard";
import products from "../data/products";

export default function Shop() {

const [search,setSearch]=useState("");

const filteredProducts=products.filter(product=>
product.name.toLowerCase().includes(search.toLowerCase())
);

return(

<div className="shop-page">

<div className="container">

<div className="breadcrumb">

Home / Shop / Electronics Devices

</div>

<div className="shop-layout">

{/* Sidebar */}

<aside className="shop-sidebar">

<h3>Category</h3>

<label><input type="checkbox"/> Laptop</label>
<label><input type="checkbox"/> Mobile</label>
<label><input type="checkbox"/> Camera</label>
<label><input type="checkbox"/> Audio</label>
<label><input type="checkbox"/> TV</label>

<hr/>

<h3>Price Range</h3>

<input
type="range"
min="0"
max="3000"
/>

<p>$0 - $3000</p>

<hr/>

<h3>Brands</h3>

<label><input type="checkbox"/> Apple</label>
<label><input type="checkbox"/> Samsung</label>
<label><input type="checkbox"/> Dell</label>
<label><input type="checkbox"/> Canon</label>
<label><input type="checkbox"/> Sony</label>

<hr/>

<div className="shop-banner">

<h2>

25% OFF

</h2>

<p>

Best Electronic Products

</p>

<button>

SHOP NOW →

</button>

</div>

</aside>

{/* Products */}

<section className="shop-content">

<div className="shop-toolbar">

<input

type="text"

placeholder="Search Product..."

value={search}

onChange={(e)=>setSearch(e.target.value)}

/>

<select>

<option>Most Popular</option>

<option>Latest</option>

<option>Price Low</option>

<option>Price High</option>

</select>

</div>

<div className="products-grid">

{filteredProducts.map(product=>(

<ProductCard

key={product.id}

product={product}

/>

))}

</div>

<div className="pagination">

<button>←</button>

<button className="active-page">1</button>

<button>2</button>

<button>3</button>

<button>→</button>

</div>

</section>

</div>

</div>

</div>

)

}