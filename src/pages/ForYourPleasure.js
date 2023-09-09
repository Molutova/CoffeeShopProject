import React, { useState, useEffect, useContext } from "react";
import CardImg from "../components/CardImg";
import Coffee from "../img/CoffeeAroma.png";
import DataBase from "../db.json";
import Products from "../components/Products";
import accountContext from "../context/Account/AccountContext";

export default function ForYourPleasure() {
  const myAccount = useContext(accountContext);
  const [pleasureData, setPleasureData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const pleasureData = () => {
      fetch(`http://localhost:4000/goods/`)
        .then((response) => response.json())
        .then((result) => {
          setPleasureData([...result]);
        })

        .catch((error) => console.log("error", error));
    };
    pleasureData();
    setLoading(false);
    // console.log(`use effect started`);
  }, []);

  if (loading == true) {
    return <h1>LOADING...</h1>;
  } else {
    return (
      <div>
        <CardImg
          title={"About Our Goals"}
          description={`Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
  
          Afraid at highly months do things on at. Situation recommend objection do intention
          so questions. 
          As greatly removed calling pleased improve an. Last ask him cold feel
          met spot shy want. Children me laughing we prospect answered followed. At it went
          is song that held help face.`}
          photo={Coffee}
        ></CardImg>

        <h1> My account is :{myAccount[0]}</h1>
        <h1> My second account is : {myAccount[2]}</h1>
        <Products dataToRender={DataBase.goods}></Products>
      </div>
    );
  }
}
