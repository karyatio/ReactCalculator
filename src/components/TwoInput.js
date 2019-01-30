import React from "react";

export default function TwoInput(props) {
  return (
    <div>
      <input
        name="angkaPertama"
        onChange={props._handleChange}
        value={props.angkaPertama}
      />
      <input
        name="angkaKedua"
        onChange={props._handleChange}
        value={props.angkaKedua}
      />
      <button onClick={props._handleClick}>Hitung</button>
      <h1>{props.hasil}</h1>
    </div>
  );
}
