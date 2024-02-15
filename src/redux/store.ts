import { applyMiddleware, createStore, StoreEnhancer, Reducer, AnyAction } from "redux";
import { rootReducer, RootReducer } from "./root-reducer";
import logger from 'redux-logger';

export const store = createStore<RootReducer, AnyAction, StoreEnhancer<{}, {}>>(
    rootReducer as Reducer<RootReducer, AnyAction, unknown>,
    applyMiddleware(logger)
    );