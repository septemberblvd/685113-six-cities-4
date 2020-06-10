import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";

const init = () => {
  const data = {
    offersCount: 31,
  };

  ReactDOM.render(
      <App offersCount = {data.offersCount}/>,
      document.querySelector(`#root`)
  );
};

init();
