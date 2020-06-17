import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import offers from "./mock/offers.js";

const init = () => {
  const data = {
    offersCount: 31,
  };

  ReactDOM.render(
      <App offersCount = {data.offersCount}
        offers = {offers}/>,
      document.querySelector(`#root`)
  );
};

init();
