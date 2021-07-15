import React, { useEffect,useState } from "react";
import axios from "axios";
import HeroSection from "../components/HeroSection/HeroSection.js";
import NavBar from "../components/NavBar/NavBar.js";
import Item from "./Item"
import "./Category.css";

const Category = () => {
    const[items,setItems] = useState(null)
  const getData = async function () {
    await axios
      .get("products.json", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
      .then((response) => {
        setItems(response.data)
      });
  };
  useEffect(() => {
    getData();
  }, []);
 
  console.log(items);
 
  return (
    <div className="Category">
      <NavBar />
      <HeroSection />
      <div>
        {items &&
          items.map((item, key) => {
            return (
              <div key={key}>
                <Item
                  title={item.title}
                  brand={item.brand}
                  price={item.price}
                />
              </div>
            );
          })}
      </div>

    </div>
  );
};

export default Category;
