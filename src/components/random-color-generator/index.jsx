import { useState } from "react";
import "./style.css";

/**
 * 특정 수가 주어졌을 때 0부터 해당 숫자까지의 정수 중 1개를 반환합니다.
 * @param {number} length
 * @returns {number} index
 */
const createRandomNumber = (length) => {
  return Math.floor(Math.random() * length);
};

const RandomColorGenerator = () => {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  const handleCreateRandomHexColor = () => {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += hex[createRandomNumber(hex.length)];
    }
    setColor(hexColor);
  };

  const handleCreateRandomRGBColor = () => {
    const [r, g, b] = [
      createRandomNumber(255),
      createRandomNumber(255),
      createRandomNumber(255),
    ];

    setColor(`rgb(${r},${g},${b})`);
  };

  return (
    <div style={{ backgroundColor: color }} className="container">
      <button onClick={() => setTypeOfColor("hex")}>HEX 컬러 생성</button>
      <button onClick={() => setTypeOfColor("rgb")}>RGB 컬러 생성</button>
      <button
        onClick={
          typeOfColor === "hex"
            ? handleCreateRandomHexColor
            : handleCreateRandomRGBColor
        }
      >
        랜덤 컬러 생성
      </button>
      <div className="flex-color">
        <div>{"컬러 모드: " +typeOfColor}</div>
        <div>{color}</div>
      </div>
    </div>
  );
};

export default RandomColorGenerator;
