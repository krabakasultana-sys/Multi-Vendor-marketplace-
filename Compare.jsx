import products from "../data/products";

export default function Compare() {

  const compareProducts = [
    products[0],
    products[3],
    products[8]
  ];

  return (

    <div className="compare-page">

      <div className="container">

        <h1>Compare Products</h1>

        <table className="compare-table">

          <tbody>

            <tr>

              <th>Product</th>

              {compareProducts.map(product => (

                <td key={product.id}>

                  <img
                    src={product.image}
                    alt={product.name}
                    className="compare-image"
                  />

                  <h4>{product.name}</h4>

                </td>

              ))}

            </tr>

            <tr>

              <th>Price</th>

              {compareProducts.map(product => (

                <td key={product.id}>
                  ${product.price}
                </td>

              ))}

            </tr>

            <tr>

              <th>Category</th>

              {compareProducts.map(product => (

                <td key={product.id}>
                  {product.category}
                </td>

              ))}

            </tr>

            <tr>

              <th>Rating</th>

              {compareProducts.map(product => (

                <td key={product.id}>
                  ⭐ {product.rating}/5
                </td>

              ))}

            </tr>

            <tr>

              <th>Availability</th>

              <td>In Stock</td>
              <td>In Stock</td>
              <td>In Stock</td>

            </tr>

            <tr>

              <th></th>

              {compareProducts.map(product => (

                <td key={product.id}>

                  <button className="compare-btn">
                    Add To Cart
                  </button>

                </td>

              ))}

            </tr>

          </tbody>

        </table>

      </div>

    </div>

  );

}