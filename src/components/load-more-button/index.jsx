import React, { useState, useEffect } from "react";
import "./style.css";

const LoadMoreData = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);

  const handleClickMoreButton = () => {
    setCount((prev) => prev + 1);
  };

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const respone = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${count * 20}`
      );
      const { products } = await respone.json();
      setProducts((prev) => [...prev, ...products]);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [count]);

  return (
    <div className="container">
      <div className="product-container">
        {products && products.length
          ? products.map((product) => (
              <div className="product" key={product.id}>
                <img src={product.thumbnail} alt={product.title} />
              </div>
            ))
          : null}
      </div>
      <div>
        {loading ? (
          <div>Loading data! Please wait. </div>
        ) : (
          <button onClick={handleClickMoreButton}>Load More Products</button>
        )}
      </div>
    </div>
  );
};

export default LoadMoreData;
