import React, { useState, useEffect } from "react";
import "./style.css";

const ScrollIndicator = ({ url }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [scrollPercentage, setScrollPercentage] = useState(0);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(url);
      const data = await response.json();

      console.log(data);

      if (data && data.products && data.products.length > 0) {
        setData(data.products);
      }
    } catch (e) {
      console.log(e);
      setErrorMessage(e.message);
    } finally {
      setLoading(false);
    }
  };

  const handleScrollPercentage = () => {
    const scrolledLength =
      document.body.scrollTop || document.documentElement.scrollTop;

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    setScrollPercentage((scrolledLength / height) * 100);
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  useEffect(() => {
    window.addEventListener("scroll", handleScrollPercentage);

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  if (errorMessage) {
    return <div>Error ! {errorMessage}</div>;
  }

  if (loading) {
    return <div>Loading data! Please wait</div>;
  }

  return (
    <div>
      <div className="top-container">
        <h1>Custom Scroll Indicator</h1>
        <div className="scroll-progress-tracking-container">
          <div
            className="current-progress-bar"
            style={{ width: `${scrollPercentage}%` }}
          ></div>
        </div>
      </div>
      <div className="data-container">
        {data && data.length > 0
          ? data.map((dataItem) => <p>{dataItem.title}</p>)
          : null}
      </div>
    </div>
  );
};

export default ScrollIndicator;
