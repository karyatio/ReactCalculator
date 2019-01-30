import React, { Component } from "react";

import TwoInput from "./components/TwoInput";
import SingleInput from "./components/SingleInput";

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      angkaPertama: 0,
      angkaKedua: 0,
      hasil: 0,
      queryPerhitungan: "",
      queryResult: 0
    };
  }

  _handleClick = () => {
    const angka1 = Number(this.state.angkaPertama);
    const angka2 = Number(this.state.angkaKedua);
    const hasil = angka1 + angka2;

    this.setState({ hasil });
  };

  _handleSingleQuery = () => {
    // Delete all space
    let splitedQuery = this.state.queryPerhitungan.split(" ");
    let operators = ["*", "/", "+", "-"];
    console.log(splitedQuery);

    // The loop is to find multiplication, division, addition, then substraction
    // n is operator index
    // find the operator we are going to do operation of
    // n-1 operator n+1
    // then we are going to replace item in array that in operation in that loop with the result

    for (let y = 0; y < 4; y++) {
      for (let i = 0; i < splitedQuery.length; i++) {
        if (splitedQuery[i] === operators[y]) {
          let firstValue = Number(splitedQuery[i - 1]);
          let secondValue = Number(splitedQuery[i + 1]);
          let subOperation;
          if (operators[y] === "*") subOperation = firstValue * secondValue;
          if (operators[y] === "/") subOperation = firstValue / secondValue;
          if (operators[y] === "+") subOperation = firstValue + secondValue;
          if (operators[y] === "-") subOperation = firstValue - secondValue;
          // 1 - 2 * 3 + 2
          // 1 - 2 * 2 * 4 - 2
          splitedQuery.splice(i - 1, 3);
          splitedQuery.splice(i - 1, 0, String(subOperation));
          i = 0;
          console.log(splitedQuery);
        }
      }
    }

    this.setState({ queryResult: Number(splitedQuery) });
  };

  _handleChange = element => {
    this.setState({ [element.target.name]: element.target.value });
  };

  render() {
    return (
      <div>
        <TwoInput
          angkaPertama={this.state.angkaPertama}
          angkaKedua={this.state.angkaKedua}
          hasil={this.state.hasil}
          _handleClick={this._handleClick}
          _handleChange={this._handleChange}
        />

        <SingleInput
          queryPerhitungan={this.state.queryPerhitungan}
          queryResult={this.state.queryResult}
          _handleSingleQuery={this._handleSingleQuery}
          _handleChange={this._handleChange}
        />
      </div>
    );
  }
}

export default App;
