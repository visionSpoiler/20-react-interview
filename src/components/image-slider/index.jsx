import React, { useState, useEffect } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./style.css";

const ImageSlider = ({ url, limit, page }) => {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleClickIndicatorButton = (index) => {
    setCurrentSlide(index)
  }

  const handleClickNextButton = () => {
    setCurrentSlide((prev) => (prev+1)%images.length)
  }

  const handleClickPrevButton = () => {
    setCurrentSlide((prev) => prev ? prev-1 : images.length-1)
  }

  const fetchImages = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${url}?page=${page}&limit=${limit}`);
      const data = await response.json();

      if (data) {
        setImages(data);
        setLoading(false);
      }
    } catch (e) {
      setErrorMsg(e.message);
      setLoading(false)
    }
  };

  useEffect(() => {
    if (url !== "") fetchImages();
  }, [url]);

  if (loading) {
    return <div>Loading data! Please wait</div>;
  }

  if (errorMsg !== null) {
    return <div>Error occured! {errorMsg}</div>;
  }

  return (
    <div className="container">
      <BsArrowLeftCircleFill onClick={handleClickPrevButton} className="arrow arrow-left" />
      {images && images.length
        ? images.map((image,index) => (
            <img
              className={index===currentSlide ? "current-image" : "hidden-image"}
              src={image.download_url}
              key={image.id}
              alt={image.download_url}
            />
          ))
        : null}

      <BsArrowRightCircleFill onClick={handleClickNextButton} className="arrow arrow-right" />
      <span className="circle-indicators">
        {images && images.length
          ? images.map((_, index) => (
              <button onClick={() => {handleClickIndicatorButton(index)}} key={index} className={index === currentSlide ? "current-indicator" : "indicator"}></button>
            ))
          : null}
      </span>
    </div>
  );
};

export default ImageSlider;
