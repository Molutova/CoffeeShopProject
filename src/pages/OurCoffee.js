import React from "react";
import CardImg from "../components/CardImg";
import GirlCoffee from "../img/MaskGroup.png";
import DataBase from "../db.json";
import Products from "../components/Products";

export default function OurCoffee() {
  return (
    <div>
      <CardImg
        title={"About Our Beans"}
        description={`Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.

Afraid at highly months do things on at. Situation recommend objection do intention
so questions. 
As greatly removed calling pleased improve an. Last ask him cold feel
met spot shy want. Children me laughing we prospect answered followed. At it went
is song that held help face.`}
        photo={GirlCoffee}
      ></CardImg>
      <Products dataToRender={DataBase.coffee}></Products>
    </div>
  );
}
