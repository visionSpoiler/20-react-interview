import { useState } from "react";
import "./style.css";
import { FaStar } from "react-icons/fa";

const StarRating = ({ numOfStar }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleClickStar = (index) => {
    setRating(index + 1);
  };

  const handleMouseEnterStar = (index) => {
    setHover(index + 1);
  };

  const handleMouseLeaveStar = () => {
    setHover(rating);
  };

  return (
    <div className="star-rating">
      {[...Array(numOfStar)].map((_, index) => (
        <FaStar
          onClick={() => {
            handleClickStar(index);
          }}
          className={index < hover ? "active": "inactive"}
          onMouseMove={() => {handleMouseEnterStar(index)}}
          onMouseLeave={handleMouseLeaveStar}
          size={40}
          key={index}
        />
      ))}
    </div>
  );
};

export default StarRating;
