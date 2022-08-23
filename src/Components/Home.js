import React from "react";

export default function Home(props) {
 
  return (
    <div>
      

      <h1>Home Component</h1>
      <div className="cart-wrapper  ">
        <div className="img-wrapper item">
          <img
            src="https://www.freeiconspng.com/thumbs/iphone-x-pictures/apple-iphone-x-pictures-5.png"
            alt="iphone"
          />
        </div>

        <div className="text-wrapper item">
          <span>i-Phone Price: $20</span>
        </div>
        <div className="btn-wrapper item">
          <button
            onClick={() =>
              {props.addToCartHandler({
                price: 1000,
                name: "Iphone12",
              })}}
          >
            {" "}
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}
