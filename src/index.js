import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  const [quote, setQuote] = useState("");

  const getQuote = async () => {
    const get = await fetch("https://api.kanye.rest");
    const json = await get.json();

    setQuote(json.quote);
  };

  useEffect(() => {
    getQuote();
  }, []);

  return (
    <div className="App">
      <h1>{quote}</h1>
      <button onClick={getQuote}>GIVE ME ANOTHER ONE</button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
