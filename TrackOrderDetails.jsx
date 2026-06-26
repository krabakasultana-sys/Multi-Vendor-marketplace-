import { useParams } from "react-router-dom";

export default function TrackOrderDetails(){

const {id}=useParams();

return(

<div className="track-details">

<div className="container">

<h1>Order #{id}</h1>

<div className="tracking-card">

<div className="step completed">

✔ Order Placed

</div>

<div className="step completed">

✔ Packed

</div>

<div className="step active">

🚚 Shipped

</div>

<div className="step">

📦 Delivered

</div>

</div>

</div>

</div>

)

}