//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

import React from "react";
import ReactDOM from "react-dom";

const mer = new Date().getHours();
var mm;
var custom;

if (mer < 12) {
  mm = "Good morning!";
  custom = {
    color: "red"
  };
} else if (mer < 19) {
  mm = "Good afternoon!";
  custom = {
    color: "green"
  };
} else {
  mm = "Good evening!";
  custom = {
    color: "blue"
  };
}

ReactDOM.render(
  <div>
    <h1 style={custom} className="heading">
      {mm}
    </h1>
  </div>,

  document.getElementById("root")
);
