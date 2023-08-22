import React from "react";
import ProductItem from "./ProductItem";
import ProductCountryItem from "./ProductCounrtyItem";
export default function Products({ dataToRender }) {
  return (
    <>
      {dataToRender.map((Coffee) => {
        if (Coffee.country) {
          return (
            <ProductCountryItem
              title={Coffee.name}
              price={Coffee.price}
              url={Coffee.url}
              id={Coffee.id}
              description={Coffee.description}
              country={Coffee.country}
            ></ProductCountryItem>
          );
        } else {
          return (
            <ProductItem
              title={Coffee.name}
              price={Coffee.price}
              url={Coffee.url}
            ></ProductItem>
          );
        }
      })}
    </>
  );
}
