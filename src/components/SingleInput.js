import React from "react";

export default function SingleInput(props) {
  return (
    <div>
      <input
        name="queryPerhitungan"
        onChange={props._handleChange}
        value={props.queryPerhitungan}
      />
      <button onClick={props._handleSingleQuery}>Hitung</button>
      <h1>{props.queryResult}</h1>
    </div>
  );
}
