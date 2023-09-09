import React from "react";
import ProductItem from "./ProductItem";
import ProductCountryItem from "./ProductCounrtyItem";
import { Link } from "react-router-dom";
export default function Products({ dataToRender }) {
  return (
    <>
      {dataToRender.map((Coffee) => {
        if (Coffee.country) {
          return (
            <Link to={`/ourcoffee/${Coffee.id}`}>
              <ProductCountryItem
                title={Coffee.name}
                price={Coffee.price}
                url={Coffee.url}
                id={Coffee.id}
                description={Coffee.description}
                country={Coffee.country}
              ></ProductCountryItem>
            </Link>
          );
        } else {
          return (
            <Link to={`/foryourpleasure/${Coffee.id}`}>
              <ProductItem
                title={Coffee.name}
                price={Coffee.price}
                url={Coffee.url}
              ></ProductItem>
            </Link>
          );
        }
      })}
    </>
  );
}
