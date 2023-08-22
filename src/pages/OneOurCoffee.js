import React from "react";
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
  // console.log(needToRender, "Its my Need To Render Object");
  // console.log("its my use params", useParams());

  return (
    <div>
      <img src={needToRender.url}></img>
      <h3> Product:{needToRender.name}</h3>
      <p>Country: {needToRender.country}</p>
      <p>Description:{needToRender.description}</p>
      <p>Price:{needToRender.price}</p>
    </div>
  );
}
