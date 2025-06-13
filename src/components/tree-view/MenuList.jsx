import React from "react";
import MenuItem from "./MenuItem";

const MenuList = ({ list = [] }) => {
  return (
    <div className="menu-list-container">
      {list && list.length
        ? list.map((item) => <MenuItem item={item} />)
        : null}
    </div>
  );
};

export default MenuList;
