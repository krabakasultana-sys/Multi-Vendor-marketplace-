import { useState } from "react";
import products from "../data/products";
import ProductCard from "./ProductCard";

export default function LatestProducts() {
  const tabs = [
    "All",
    "Laptop",
    "Mobile",
    "Accessories",
    "Camera",
  ];

  const [activeTab, setActiveTab] = useState("All");

  const filteredProducts =
    activeTab === "All"
      ? products
      : products.filter(
          (product) => product.category === activeTab
        );

  return (
    <section className="latest-products">

      <div className="container">

        <div className="latest-header">

          <h2>Latest Products</h2>

          <div className="tabs">

            {tabs.map((tab) => (
              <button
                key={tab}
                className={
                  activeTab === tab ? "tab active-tab" : "tab"
                }
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}

          </div>

        </div>

        <div className="products-grid">

          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}

        </div>

      </div>

    </section>
  );
}