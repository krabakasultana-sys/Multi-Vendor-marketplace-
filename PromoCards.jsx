import laptop from "../assets/images/Dell Laptop.png";
import headphone from "../assets/images/headphone.png";
import camera from "../assets/images/camera.png";

export default function PromoCards(){

return(

<section className="promo-section">

<div className="container promo-grid">

<div className="promo-card dark">

<div>

<h3>Computer & Laptop</h3>

<p>Latest Technology</p>

<button>Shop Now →</button>

</div>

<img
src={laptop}
alt=""
/>

</div>

<div className="promo-card light">

<div>

<h3>Headphones</h3>

<p>Wireless Audio</p>

<button>Shop Now →</button>

</div>

<img
src={headphone}
alt=""
/>

</div>

<div className="promo-card yellow">

<div>

<h3>Camera</h3>

<p>Capture Everything</p>

<button>Shop Now →</button>

</div>

<img
src={camera}
alt=""
/>

</div>

</div>

</section>

)

}