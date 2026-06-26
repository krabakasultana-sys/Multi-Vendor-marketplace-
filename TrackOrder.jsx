import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function TrackOrder() {

  const [orderId, setOrderId] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {

    e.preventDefault();

    if(orderId.trim()){

      navigate(`/track-order/${orderId}`);

    }

  };

  return (

    <div className="track-page">

      <div className="container">

        <div className="track-box">

          <h1>Track Your Order</h1>

          <p>

            Enter your Order ID to view current order status.

          </p>

          <form onSubmit={handleSubmit}>

            <input
              type="text"
              placeholder="Order ID"
              value={orderId}
              onChange={(e)=>setOrderId(e.target.value)}
            />

            <button>

              Track Order

            </button>

          </form>

        </div>

      </div>

    </div>

  );

}