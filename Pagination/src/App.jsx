import { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);

  const allProducts = async () => {
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();
    if (data.products) {
      setProducts(data.products);
    }
  };
  console.log(products);

  useEffect(() => {
    allProducts();
  }, []);

  return (
    <div className="main__page">
      <h1 className="main__title">Products</h1>
      {products.length > 0 && (
        <div className="parent__products">
          {products.map((product) => (
            <span key={product.id} className="single__product">
              <img src={product.thumbnail} alt={product.title} />
              <span className="product__title">{product.title}</span>
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
