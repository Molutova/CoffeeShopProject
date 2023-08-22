import React from "react";
import Card from "./Card";
export default function CardImg({ photo, title, description }) {
  return (
    <div>
      <img src={photo}></img>
      <Card title={title} description={description}></Card>
    </div>
  );
}
