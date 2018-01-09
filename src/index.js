import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";

import reducers from "./reducers";

const createStoreWithMiddleware = applyMiddleware(logger)(createStore);

ReactDOM.render(
	<Provider store={createStoreWithMiddleware(reducers)}>
		<App />
	</Provider>, document.getElementById("root"));
registerServiceWorker();
