import React, { useEffect } from "react";
import axios from "axios";
import HeroSection from "../components/HeroSection/HeroSection.js";
import NavBar from "../components/NavBar/NavBar.js";
import "./Category.css";

const Category = () => {
  const getData = async function () {
    await axios
      .get("products.json", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
      .then((response) => {
        console.log(response.data);
      });
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="Category">
      <NavBar />
      <HeroSection />
    </div>
  );
};

export default Category;
