import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import DataBase from "../db.json";
import Products from "../components/Products";

export default function OneYourPleasure() {
  const dataCoffee = DataBase.goods;
  const ourParams = useParams();
  const paramsId = ourParams.id;
  const needToRender = dataCoffee.find((element) => {
    if (element.id == paramsId) {
      return element;
    }
  });

  const [oneYourPleasure, setOneYourPleasure] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOneYourPleasure = () => {
      fetch(`http://localhost:4000/coffee/${paramsId}`)
        .then((response) => response.json())
        .then((result) => {
          setOneYourPleasure({ ...result });
        })

        .catch((error) => console.log("error", error));
    };
    fetchOneYourPleasure();
    setLoading(false);
  }, []);

  if (loading) {
    return <h1>...Loading</h1>;
  } else {
    return (
      <div>
        <h3> Product:{oneYourPleasure.name}</h3>
        <img src={oneYourPleasure.url}></img>
        <p>Price:{oneYourPleasure.price}</p>
      </div>
    );
  }
}
