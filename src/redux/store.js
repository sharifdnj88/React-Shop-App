import { applyMiddleware, createStore } from "redux";
import { thunk } from "redux-thunk";
import rootReducer from "./rootReducer";
import { composeWithDevTools } from '@redux-devtools/extension';




// middlewares
const middlewares = [thunk];

// create store
const store = createStore(rootReducer, composeWithDevTools( applyMiddleware(...middlewares) ) );




// export store
export default store;