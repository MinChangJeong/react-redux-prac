import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk"
import reducers from "./reducer"

const initialState = {};

const middleware = [thunk];

export const store = createStore(
    reducers,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware)),
)