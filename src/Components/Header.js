import React from "react";

export default function Header(props) {
   console.log("header", props.data);
  return (
    <div>
      <div className="add-to-cart">
        <span className="cart-item"> {props.data.length} </span>
        <img
          src="https://png.pngtree.com/png-clipart/20190516/original/pngtree-add-to-cart--icon-design-png-image_4269419.jpg"
          alt="cart"
        />
      </div>
    </div>
  );
}
