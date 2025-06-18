import React from "react";
import useWindowResize from ".";

const TestUseWindowResize = () => {

  const {width, height} = useWindowResize();


  return (
    <div>
      <h1>Use Window resize Hook</h1>
      <p>
        Width is {width}
      </p>
      <p>
        Height is {height}
      </p>
    </div>
  );
};

export default TestUseWindowResize;
