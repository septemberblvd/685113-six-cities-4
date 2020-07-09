import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
// import offers from "./mock/offers.js";
import cities from "./mock/cities.js";
import {createStore, applyMiddleware} from "redux";
import reducer from "./reducer.js";
import {Operation as DataOperation} from "./reducer/data/data.js";
// import {Operation as UserOperation, ActionCreator, AuthorizationStatus} from "./reducer/user/user.js";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import {createAPI} from "./api.js";
// const onUnauthorized = () => {
//   store.dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH));
// };
const api = createAPI(() => {});


const store = createStore(
    reducer,
    // window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
    applyMiddleware(thunk.withExtraArgument(api))
);

store.dispatch(DataOperation.loadOffers());
// store.dispatch(UserOperation.checkAuth());

ReactDOM.render(
    <Provider store={store}>
      <App
        cities={cities}/>
    </Provider>,
    document.querySelector(`#root`)
);

