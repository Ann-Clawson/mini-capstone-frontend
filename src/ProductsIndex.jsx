/* eslint-disable react/prop-types */
export function ProductsIndex(props) {
  return (
    <div className="index">
      <h1>Some Products:</h1>
      {props.products.map((product) => (
        <div className="index-product" key={product.id}>
          <div>
            {product.images.map((image) => (
              <div key={image.id}>
                <img src={image.url} width="200px" />
              </div>
            ))}
          </div>
          <p>{product.name}</p>
          <p>{product.description}</p>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  );
}
