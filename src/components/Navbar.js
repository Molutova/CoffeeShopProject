import React from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <div>
      <header>
        <nav>
          <Link to="/">Coffee House</Link>
          <Link to="ourcoffee">OurCoffee</Link>
          <Link to="foryourpleasure">For Your Pleasure</Link>
        </nav>
      </header>
    </div>
  );
}
