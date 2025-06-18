import React from "react";
import useFetch from ".";

const TestUseFetch = () => {
  const { data, error, pending } = useFetch(
    "https://dummyjson.com/products?limit=100",
    {}
  );

  console.log(data, error, pending);

  return (
    <div>
      <h1>use Fecth Hook</h1>
      {pending ? <h3>Pending! Please wait</h3> : null}
      {error ? <h3>{error}</h3> : null}
      {data && data.products && data.products.length
        ? data.products.map((product) => (
            <p key={product.key}>{product.title}</p>
          ))
        : null}
    </div> 
  );
};

export default TestUseFetch;
