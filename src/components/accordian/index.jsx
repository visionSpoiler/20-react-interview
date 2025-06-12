// 요구사항
// 아코디언을 만들어라
// 일단 단일 선택으로 만들어라
// 다 만들었으면 다중 선택도 만들어 봐라.
import { useState } from "react";

import "./style.css";
import data from "./data";

const Accordian = () => {
  const [isMultipleSelectionMode, SetIsMultipleSelectionMode] = useState(false);
  const [selected, setSelected] = useState(undefined);
  const [multiple, setMultiple] = useState([]);

  const handleSingleSelection = (getCurrentId) => {
    console.log(getCurrentId);
    setSelected(getCurrentId === selected ? null : getCurrentId);
  };

  const handleMultipleSelection = (getCurrnetId) => {
    console.log(getCurrnetId);
    if (multiple.includes(getCurrnetId)) {
      setMultiple((prev) => prev.filter((val) => val !== getCurrnetId));
    } else {
      setMultiple((prev) => [...prev, getCurrnetId]);
    }
  };

  return (
    <div className="wrapper">
      <button onClick={() => SetIsMultipleSelectionMode((prev) => !prev)}>
        {isMultipleSelectionMode
          ? "단일 선택 모드 활성화"
          : "다중 선택 모드 활성화"}
      </button>
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map(({ id, question, answer }, index) => (
            <div key={index} className="item">
              <div
                onClick={
                  isMultipleSelectionMode
                    ? () => handleMultipleSelection(id)
                    : () => handleSingleSelection(id)
                }
                className="title"
              >
                <h3>{question}</h3>
                <span>+</span>
              </div>
              {isMultipleSelectionMode ? (
                multiple.includes(id) ? (
                  <div className="content">{answer}</div>
                ) : null
              ) : selected === id ? (
                <div className="content">{answer}</div>
              ) : null}
            </div>
          ))
        ) : (
          <div>No Data</div>
        )}
      </div>
    </div>
  );
};

export default Accordian;