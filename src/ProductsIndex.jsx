/* eslint-disable react/prop-types */
export function ProductsIndex(props) {
  return (
    <h1>
      {props.products.map((product) => (
        <div key={product.id}>
          <p>{product.name}</p>
          <p>{product.description}</p>
          <p>{product.price}</p>
        </div>
      ))}
    </h1>
  );
}
