import React, { useState } from "react";

export default function TestComponent() {
  const [count, setCount] = useState(["Columbia", "Kenya", "Brazil"]);
  return (
    <div>
      count = {count}
      <button
        onClick={() => {
          setCount([...count, "Kazakhstan"]);
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          setCount([...count.slice(0, count.length - 1)]);
        }}
      >
        -
      </button>
      <button
        onClick={() => {
          setCount(["Columbia", "Kenya", "Brazil"]);
        }}
      >
        reset
      </button>
    </div>
  );
}
