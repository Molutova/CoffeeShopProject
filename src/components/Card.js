import React from "react";
import Beans from "../img/BeansLogo.svg";

export default function Card({ title, description }) {
  return (
    <div>
      <h2>{title}</h2>
      <img src={Beans} alt="beanslogo"></img>
      <p>{description}</p>
    </div>
  );
}
