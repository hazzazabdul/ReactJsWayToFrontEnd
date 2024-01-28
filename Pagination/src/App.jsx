/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import "./App.css";
import Loading from "./Components/Loading";

const App = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const allProducts = async () => {
    const res = await fetch(
      `https://dummyjson.com/products?limit=10&skip=${page * 10 - 10}`
    );
    const data = await res.json();
    if (data && data.products) {
      setProducts(data.products);
      setTotalPages(data.total / 10);
    }
  };

  const selectPageHandler = (pageNum) => {
    if (pageNum >= 1 && pageNum <= totalPages && pageNum !== page) {
      setPage(pageNum);
    }
  };

  useEffect(() => {
    allProducts();
  }, [page]);

  return (
    <div className="main__page">
      <h1 className="main__title">Products</h1>
      {products.length > 0 ? (
        <div className="parent__products">
          {products.map((product) => (
            <span key={product.id} className="single__product">
              <img src={product.thumbnail} alt={product.title} />
              <span className="product__title">{product.title}</span>
            </span>
          ))}
        </div>
      ) : (
        <Loading />
      )}

      {products.length > 0 && (
        <div className="pagination">
          <span onClick={() => selectPageHandler(page - 1)}>◀</span>
          {[...Array(totalPages)].map((_, index) => (
            <span
              className={page === index + 1 ? "selectedPage" : ""}
              onClick={() => selectPageHandler(index + 1)}
              key={index}
            >
              {index + 1}
            </span>
          ))}
          <span onClick={() => selectPageHandler(page + 1)}>▶</span>
        </div>
      )
      }
    </div>
  );
};

export default App;
