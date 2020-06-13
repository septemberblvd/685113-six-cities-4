/* eslint-disable react/prop-types */
import React from "react";
import MainScreen from "../main-screen/main-screen.jsx";

const App = (props) => {
  const {offersCount, offersHeaders} = props;

  return <MainScreen offersCount = {offersCount} offersHeaders = {offersHeaders}/>;
};

export default App;
