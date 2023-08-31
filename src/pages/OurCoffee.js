import React, { useState, useEffect } from "react";
import CardImg from "../components/CardImg";
import GirlCoffee from "../img/MaskGroup.png";
import DataBase from "../db.json";
import Products from "../components/Products";

export default function OurCoffee() {
  const [countryArray, setCountryArray] = useState([]);
  const [searchValue, setsearchValue] = useState("");
  const [fetchingData, setfetchingData] = useState([]);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    setloading(true);
    const startFetch = () => {
      fetch(`http://localhost:4000/coffee/`)
        .then((response) => response.json())
        .then((result) => {
          setfetchingData([...result]);
        })

        .catch((error) => console.log("error", error));
    };
    startFetch();
    setloading(false);
    console.log(`use effect started, ${searchValue}`);
  }, []);

  const toggleElementinArray = (country) => {
    const indexToFind = countryArray.findIndex((item) => item === country);
    if (indexToFind === -1) {
      setCountryArray([...countryArray, country]);
    } else {
      const leftSide = [...countryArray.slice(0, indexToFind)];
      const rightSide = [...countryArray.slice(indexToFind + 1)];
      setCountryArray([...leftSide, ...rightSide]);
    }
  };

  if (loading == true) {
    return <h1>LOADING...</h1>;
  } else {
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
        <input
          value={searchValue}
          onChange={(e) => {
            setsearchValue(e.target.value);
          }}
        ></input>
        <button
          style={countryArray.includes("Brazil") ? { fontWeight: "600" } : null}
          onClick={() => {
            toggleElementinArray("Brazil");
          }}
        >
          Brazil
        </button>
        <button
          style={countryArray.includes("Kenya") ? { fontWeight: "600" } : null}
          onClick={() => {
            toggleElementinArray("Kenya");
          }}
        >
          Kenya
        </button>
        <button
          style={
            countryArray.includes("Columbia") ? { fontWeight: "600" } : null
          }
          onClick={() => {
            toggleElementinArray("Columbia");
          }}
        >
          Columbia
        </button>

        {
          countryArray.length === 0 ? (
            searchValue.length == "" ? (
              <Products dataToRender={fetchingData}></Products>
            ) : (
              <Products
                dataToRender={fetchingData.filter((item) => {
                  console.log(item);
                  if (
                    item.country
                      .toLowerCase()
                      .includes(searchValue.toLowerCase()) ||
                    item.name
                      .toLowerCase()
                      .includes(searchValue.toLowerCase()) ||
                    item.country.includes(searchValue)
                  ) {
                    return item;
                  }
                })}
              ></Products>
            )
          ) : searchValue.length == "" ? (
            <Products
              dataToRender={fetchingData.filter((item) =>
                countryArray.includes(item.country)
              )}
            ></Products>
          ) : (
            <Products
              dataToRender={fetchingData
                .filter((item) => countryArray.includes(item.country))
                .filter((item) => {
                  if (
                    item.country
                      .toLowerCase()
                      .includes(searchValue.toLowerCase()) ||
                    item.name
                      .toLowerCase()
                      .includes(searchValue.toLowerCase()) ||
                    item.country.includes(searchValue)
                  ) {
                    return item;
                  }
                })}
            ></Products>
          )
          // <Products
          //   dataToRender={DataBase.coffee.filter((item) =>
          //     countryArray.includes(item.country)
          //   )}
          // ></Products> //filtered Array
        }
      </div>
    );
  }
}
