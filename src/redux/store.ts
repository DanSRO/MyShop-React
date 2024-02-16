import { rootReducer } from "./root-reducer";
import logger from 'redux-logger';
import { configureStore } from "@reduxjs/toolkit";

// export const store = createStore<RootReducer, AnyAction, StoreEnhancer<{}, {}>>(
//     rootReducer as Reducer<RootReducer, AnyAction, unknown>,
//     applyMiddleware(logger)
//     );
export const store = configureStore({
    reducer: rootReducer,
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(logger)
    });