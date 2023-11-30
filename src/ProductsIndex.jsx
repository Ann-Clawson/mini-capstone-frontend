/* eslint-disable react/prop-types */
export function ProductsIndex(props) {
  return (
    <div>
      {props.products.map((product) => (
        <div key={product.id}>
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
