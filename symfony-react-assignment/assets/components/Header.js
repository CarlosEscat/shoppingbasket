import React from "react";
import cart from "../Media/cart.svg";
import home from "../Media/home.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="Header">
      <div className="HomeImage">
        <Link to={"/"}>
          <img src={home} className="Home" alt="home" />
        </Link>
      </div>
      <div className="Title">
        <h1 className="HeaderName">Store</h1>
      </div>
      <div className="BasketImage">
        <Link to={"/basket"}>
          <label>My Basket</label>
          <img src={cart} className="Cart" alt="cart" />
        </Link>
      </div>
    </div>
  );
}

export default Header;
