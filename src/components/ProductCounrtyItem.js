import React from "react";

export default function ProductItem({ title, price, url, country }) {
  return (
    <div>
      <img src={url}></img>
      <h3>{title}</h3>
      <p>{country}</p>
      <p>{price}</p>
    </div>
  );
}
