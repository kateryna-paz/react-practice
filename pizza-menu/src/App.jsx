import React from "react";
import pizzaData from "./data";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Menu from "./components/Menu";

const App = (props) => {
  return (
    <div className="container">
      <Header />
      <Menu pizzaData={pizzaData} />
      <Footer />
    </div>
  );
};

export default App;
