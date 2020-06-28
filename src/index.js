import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import offers from "./mock/offers.js";
import cities from "./mock/cities.js";
import {createStore} from "redux";
import {reducer} from "./reducer.js";
import {Provider} from "react-redux";

const init = () => {

  const store = createStore(
      reducer,
      window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
  );

  ReactDOM.render(
      <Provider store={store}>
        <App
          offers = {offers}
          cities={cities}/>
      </Provider>,
      document.querySelector(`#root`)
  );
};

init();
