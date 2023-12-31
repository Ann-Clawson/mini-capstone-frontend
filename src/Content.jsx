import axios from "axios";
import { useState, useEffect } from "react";
import { ProductsIndex } from "./ProductsIndex";
import { ProductsNew } from "./ProductsNew";

export function Content() {
  // const products = ["hi, ", "hey, ", "hello"];

  const [products, setProducts] = useState([]);

  const handleIndexProducts = () => {
    // console.log("handleIndexProducts");
    axios.get("http://localhost:3000/products.json").then((response) => {
      // console.log(response.data);
      setProducts(response.data);
    });
  };

  useEffect(handleIndexProducts, []);

  return (
    <main>
      {/* <ProductsNew /> */}
      <ProductsIndex products={products} />
    </main>
  );
}
