import React from "react";

export default function ProductItem({ title, price, url }) {
  return (
    <div>
      <img src={url}></img>
      <h3>{title}</h3>
      <p>{price}</p>
    </div>
  );
}
