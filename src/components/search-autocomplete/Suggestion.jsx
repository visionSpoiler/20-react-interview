import React from "react";

const Suggestion = ({ data, handleClick }) => {
  return (
    <ul>
      {data && data.length
        ? data.map((item, index) => <li onClick={() =>handleClick(item)} key={index}>{item}</li>)
        : null}
    </ul>
  );
};

export default Suggestion;
