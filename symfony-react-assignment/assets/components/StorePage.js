import React, { useState, useEffect } from "react";
import noImage from "../Media/image.png";
import axios from "axios";
import "../styles/app.css";

const StorePage = (props) => {
  const [data, setData] = useState([]);

  const getData = () => {
    axios.get(`http://localhost:8000/api/products`).then((response) => {
      setData(response.data);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  function handleAddProduct(selecteProduct) {
    props.handleAddProduct(selecteProduct);
  }

  return (
    <div className="StoreHomepage">
      {data &&
        data.length > 0 &&
        data.map((item) => (
          <div className="Product" key={`product${item.name}`}>
            <img
              src={noImage}
              className="NoImage"
              alt={`No Image ${item.name}`}
              key={`image${item.name}`}
            />
            <p className="Name" key={`name${item.name}`}>
              {item.name}{" "}
            </p>
            <p className="Price" key={`price${item.price}`}>
              {item.price} €
            </p>
            <button
              className="Add"
              key={`button${item.name}`}
              onClick={() => handleAddProduct(item)}
            >
              Add to Basket
            </button>
          </div>
        ))}
    </div>
  );
};

export default StorePage;
