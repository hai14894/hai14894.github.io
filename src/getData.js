import axios from "axios";
import { useEffect } from "react";

async function getData() {
  await axios
    .get("products.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
    .then((response) => {
      console.log("====================================");
      console.log(respond.data);
      console.log("====================================");
      return response.data;
    });
}
useEffect(() => {
  getData();
}, []);

