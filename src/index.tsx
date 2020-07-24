import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./components/app/app";
import {cities} from "./const";
import {createStore, applyMiddleware} from "redux";
import reducer from "./reducer/reducer";
import {Operation as DataOperation} from "./reducer/data/data";
import {composeWithDevTools} from "redux-devtools-extension";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import {createAPI} from "./api";
import {adaptOffersAll} from "./adapter/offers";
import {Operation as UserOperation, ActionCreator, AuthorizationStatus} from "./reducer/user/user";

const onUnauthorized = () => {
  store.dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH));
};

const api = createAPI(onUnauthorized);


const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api))
    )
);

store.dispatch(DataOperation.loadOffers(adaptOffersAll));
store.dispatch(UserOperation.checkAuth());

ReactDOM.render(
    <Provider store={store}>
      <App
        cities={cities}/>
    </Provider>,
    document.querySelector(`#root`)
);

