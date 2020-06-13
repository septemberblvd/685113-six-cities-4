import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";

const init = () => {
  const data = {
    offersCount: 31,
  };

  const offersHeaders = [
    `Beautiful & luxurious apartment at great location`,
    `Wood and stone place`,
    `Canal View Prinsengracht`,
    `Nice, cozy, warm big bed apartment`,
  ];

  ReactDOM.render(
      <App offersCount = {data.offersCount}
        offersHeaders = {offersHeaders}/>,
      document.querySelector(`#root`)
  );
};

init();
