import laptop from "../assets/images/Dell Laptop.png";
import mobile from "../assets/images/mobile.png";
import camera from "../assets/images/camera.png";
import headphone from "../assets/images/headphone.png";

const categories = [
    {
        name:"Laptop",
        image:laptop
    },
    {
        name:"Mobile",
        image:mobile
    },
    {
        name:"Camera",
        image:camera
    },
    {
        name:"Audio",
        image:headphone
    }
]

export default function Categories(){

    return(

<section className="categories">

<div className="container">

<h2>Shop with Categories</h2>

<div className="category-grid">

{categories.map((item,index)=>(

<div
className="category-card"
key={index}
>

<img
src={item.image}
alt={item.name}
/>

<h4>{item.name}</h4>

</div>

))}

</div>

</div>

</section>

)

}