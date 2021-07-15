import React, { useEffect, useContext } from "react";
import { AppContext } from "../context";
import axios from "axios";
import HeroSection from "../components/HeroSection/HeroSection.js";
import NavBar from "../components/NavBar/NavBar.js";
import CategoryProduct from "./CategoryProduct";
import "./Category.css";

const Category = () => {
  const { products, setProducts } = useContext(AppContext);
  const getData = async function () {
    await axios
      .get("products.json", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
      .then((response) => {
        setProducts(response.data);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  console.log(products);

  return (
    <div className="Category">
      <NavBar />
      <HeroSection />
      <div>
        {products &&
          products.map((products, key) => {
            return (
              <div key={key}>
                <CategoryProduct
                  title={products.title}
                  brand={products.brand}
                  price={products.price}
                  image={products.image}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Category;
