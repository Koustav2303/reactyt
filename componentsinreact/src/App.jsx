import React from "react";
import Card from "./components/Card";
import Navbar from "./components/Navbar";

const App = () => {

  const user = 'Koustav';
  const age = 22;
  return (
    <div>
      {<Navbar />}
      {<Card />}
    </div>
  );
};

export default App;
