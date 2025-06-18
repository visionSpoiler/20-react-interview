import React, { useRef } from "react";
import useFetch from "../use-fetch";

const ScrollToTopAndBottom = () => {
  const { data, error, pending } = useFetch(
    "https://dummyjson.com/products",
    {}
  );

  const bottomRef = useRef();

  console.log(data);

  if (error) {
    return <h1>Error occured! Please try again</h1>;
  }

  if (pending) {
    return <h1> Lodaing data! Please wait</h1>;
  }

  const handleScrollToBottom = () => {
    bottomRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <h1>Scroll To Top And Bottom Feature</h1>
      <h3>This is the top section</h3>
      <button onClick={handleScrollToBottom}>Scroll To Bottom</button>
      <ul>
        {data && data.products.length
          ? data.products.map((product, index) => (
              <li key={index} style={{ margin: "20px 0" }}>
                {product.title}
              </li>
            ))
          : null}
      </ul>
      <button onClick={handleScrollToTop}>Scroll To Top</button>
      <div ref={bottomRef}></div>
      <h3>This is bottom of the page</h3>
    </div>
  );
};

export default ScrollToTopAndBottom;
