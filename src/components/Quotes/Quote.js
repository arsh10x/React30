//** QUOTES GENERATOR 

import React from "react";
const quotes = require("./Quotes.json");

const Quote = () => {
  const randomIndex = Math.floor(Math.random() * quotes.length);

  const quote = quotes[randomIndex].quote;

  return (
    <div>
      <h2>Quote Generator</h2>
      <h3>
        Quote: <span style={{ fontWeight: "normal" }}>{quote}</span>
      </h3>
    </div>
  );
};

export default Quote;
