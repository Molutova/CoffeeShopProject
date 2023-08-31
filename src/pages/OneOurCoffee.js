import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import DataBase from "../db.json";

export default function OneOurCoffee() {
  const dataCoffee = DataBase.coffee;
  const ourParams = useParams();
  const paramsId = ourParams.id;
  const needToRender = dataCoffee.find((element) => {
    if (element.id == paramsId) {
      return element;
    }
  });

  const [oneCoffeeData, setOneCoffeeData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOneCoffee = () => {
      fetch(`http://localhost:4000/coffee/${paramsId}`)
        .then((response) => response.json())
        .then((result) => {
          setOneCoffeeData({ ...result });
        })

        .catch((error) => console.log("error", error));
    };
    fetchOneCoffee();
    setLoading(false);
  }, []);

  if (loading) {
    return <h1>... Loading</h1>;
  } else {
    return (
      <div>
        <img src={oneCoffeeData.url}></img>
        <h3> Product:{oneCoffeeData.name}</h3>
        <p>Country: {oneCoffeeData.country}</p>
        <p>Description:{oneCoffeeData.description}</p>
        <p>Price:{oneCoffeeData.price}</p>
      </div>
    );
  }

  // console.log(needToRender, "Its my Need To Render Object");
  // console.log("its my use params", useParams());
}
