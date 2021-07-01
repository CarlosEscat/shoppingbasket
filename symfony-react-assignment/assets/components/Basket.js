import React from "react";
import { Link } from "react-router-dom";

const Basket = (props) => {
  function handleRemoveProduct(selecteProduct) {
    props.handleRemoveProduct(selecteProduct);
  }
  return (
    <div className="Basket">
      <h3>My Basket</h3>
      <div className="BasketTitles">
        <label className="BasketNameTitle">Product</label>
        <label className="BasketPriceTitle">Price</label>
      </div>
      {props.basket &&
        props.basket.length > 0 &&
        props.basket.map((item) => (
          <div className="ProductBasket" key={`product${item.name}1`}>
            <label className="BasketName" key={`name${item.name}1`}>
              {item.name}
            </label>
            <button
              className="Remove"
              key={`remove${item.name}`}
              onClick={() => handleRemoveProduct(item)}
            >
              Remove
            </button>
          </div>
        ))}
      <div className="BottomDiv">
        <Link to={"/removed"}>
          <label className="GoCount">Count of Removed Items</label>
        </Link>
      </div>
    </div>
  );
};

export default Basket;
