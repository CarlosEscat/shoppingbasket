import "../styles/app.css";
import Header from "./Header";
import StorePage from "./StorePage";
import Basket from "./Basket";
import Footer from "./Footer";
import Removed from "./Removed";

import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";

const Home = () => {
  const InitialProductList = [
    {
      name: "Pioneer DJ Mixer",
      count: 0,
    },
    {
      name: "Roland Wave Sampler",
      count: 0,
    },
    {
      name: "Reloop Headphone",
      count: 0,
    },
    {
      name: "Rokit Monitor",
      count: 0,
    },
    {
      name: "Fisherprice Baby Mixer",
      count: 0,
    },
  ];

  const [productCount, updateList] = useState(InitialProductList);
  const [basket, setBasket] = useState([]);

  const handleAddProduct = (selecteProduct) => {
    const updateBasket = [...basket, selecteProduct];

    setBasket(updateBasket);

    const updatedArray = basket.slice();

    updatedArray.push(selecteProduct);

    setBasket(updatedArray);
  };

  const handleRemoveProduct = (product) => {
    setBasket(basket.filter((item) => item !== product));

    productCount.forEach((element) => {
      if (element.name == product.name) {
        element.count++;
      }
    });
  };

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" exact>
          <StorePage handleAddProduct={handleAddProduct} />
        </Route>
        <Route path="/basket" exact>
          <Basket basket={basket} handleRemoveProduct={handleRemoveProduct} />
        </Route>
        <Route path="/removed" exact>
          <Removed productCount={productCount} />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
};

export default Home;
