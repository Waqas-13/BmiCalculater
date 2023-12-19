import React, { useState } from "react";
import "./App.css";

function App() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");

  let bmicals = (e) => {
    e.preventDefault();
    if (weight === 0 || height === 0) {
      alert("Enter a valid value");
    } else {
      let bmi = (weight / (height * height)) * 703;
      setBmi(bmi.toFixed(1));
    }

    if (bmi < 25) {
      setMessage("you are under weight");
    } else if (bmi > 25 || bmi <= 30) {
      setMessage("your are healthy");
    } else {
      setMessage("your are under weight");
    }
  };
  let reloud = () => {
    window.location.reload();
  };

  return (
    <div className="App">
      <div className="container">
        <h1>BMI Calculater</h1>
        <form action="" onSubmit={bmicals}>
          <div>
            <label htmlFor="">Weight(lbs)</label>
            <input
              type="text"
              name=""
              placeholder="Enter your weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              id=""
            />
          </div>
          <div>
            <label htmlFor="">Height(in)</label>
            <input
              type="text"
              name=""
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              id=""
              placeholder="Enter your height"
            />
          </div>
          <div>
            <button className="btn" type="submit">
              Submit
            </button>
            <button className="btn btn-outline" type="submit" onClick={reloud}>
              Reloud
            </button>
          </div>
          <div className="center">
            <h3>Your BMI is:{bmi}</h3>
            <p>{message}</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
