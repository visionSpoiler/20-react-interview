import React, { useState } from "react";
import "./style.css"

const Tabs = ({ tabsContent }) => {
  const [currentTabIndex, setCurrentTabIndex] = useState(0)
  const handleOnClick = (index) => {
    setCurrentTabIndex(index)
  }

  return (
    <div className="wrapper">
      <div className="heading">
        {tabsContent.map((item, index) => (
          <div className={`tab-item ${currentTabIndex === index ? "active" : ""}`} onClick={() => handleOnClick(index)} key={item.label}>
            <span className="label">{item.label}</span>
          </div>
        ))}
      </div>
      <div className="content" style={{color: 'red'}}>
        {
          tabsContent[currentTabIndex] && tabsContent[currentTabIndex].content
        }
      </div>
    </div>
  );
};

export default Tabs;
