import "./App.css";

import React, { useState } from "react";
import InvalidInputNotification from "./InvalidInputNotification";

function App() {

  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);

  const [bmi, setBmi] = useState(0);
  const [category, setCategory] = useState("");

  const [notification, setNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState('');

  let calculateBmi = (event) => {
    event.preventDefault(); 

    if (weight === 0 || height === 0) {
      setNotification(true);
      setNotificationMessage('Please enter a valid input');
      setCategory('');
      return;
    } else {
      let bmi = weight / ((height / 100) * (height / 100));
      setBmi(bmi.toFixed(2));

      if (bmi < 18.5) {
        setCategory('Underweight');
      } else if (bmi >= 18.5 && bmi < 24.9) {
        setCategory('Normal');
      } else if (bmi >= 25 && bmi < 29.9) {
        setCategory('Overweight');
      } else {
        setCategory('Obese');
      }
    }
  }

  let reload = () => {
    window.location.reload();
  }

  return (
    <div className="App">
      <div className="container">
        <h1>BMI Calculator</h1>
        <form onSubmit={calculateBmi}>
          <div>
            <label>Weight (kg)</label>
            <input
              type="text"
              placeholder="Enter weight in kg"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
          <div>
            <label>Height (cm)</label>
            <input
              type="text"
              placeholder="Enter height in cm"
              value={height}
              onChange={(event) => setHeight(event.target.value)}
            />
          </div>
          <div>
            <button className="btn" type="submit">
              Submit
            </button>
            <button className="btn btn-outline" onClick={reload} type="button">
              Reload
            </button>
          </div>
          <div className="center">
            <h2>BMI: {bmi}</h2>
            <h2>Category: {category}</h2>
          </div>
        </form>
        {notification && <InvalidInputNotification message={notificationMessage} />}
      </div>
    </div>
  );
}

export default App;
