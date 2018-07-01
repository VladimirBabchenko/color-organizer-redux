import { createStore, combineReducers, applyMiddleware } from "redux";
import storeData from "../../data/initialState";
import { colors, sort } from "./reducers";

const logger = store => next => action => {
    let result;
    console.groupCollapsed("dispatched", action.type);
    console.log("prev store", store.getState());
    console.log("action", action);
    result = next(action);
    console.log("store", store.getState());
    console.groupEnd();
    return result;
};

const saver = store => next => action => {
    let result = next(action);
    localStorage["redux-store"] = JSON.stringify(store.getState());
    return result;
}

const storeFactory = (initialState = storeData) =>
    applyMiddleware(logger, saver)(createStore)(
        combineReducers({ colors, sort }),
        localStorage["redux-store"] ?
            JSON.parse(localStorage["redux-store"]) :
            initialState,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )

export default storeFactory;