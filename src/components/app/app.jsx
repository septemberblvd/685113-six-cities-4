/* eslint-disable react/prop-types */
import React from "react";
import MainScreen from "../main-screen/main-screen.jsx";

const App = (props) => {
  const {offersCount} = props;

  return <MainScreen offersCount = {offersCount}/>;
};

export default App;
