import React from "react";

export default function Singers({ singer }) {
  return (
    <div>
      <h3>Singers Name:{singer.name}</h3>
      <h3>Singers Age:{singer.age}</h3>
    </div>
  );
}
