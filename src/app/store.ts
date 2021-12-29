import {
  Action,
  combineReducers,
  configureStore,
  ThunkAction,
} from "@reduxjs/toolkit";
import { connectRouter, routerMiddleware } from "connected-react-router";
import authReducer from "features/auth/authSlice";
import createSagaMiddleware from "redux-saga";
import { history } from "ultis";
import rootSaga from "./rootSaga";

const createRootReducer = combineReducers({
  auth: authReducer,
  router: connectRouter(history),
});
const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
  reducer: createRootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware, routerMiddleware(history)),
});
sagaMiddleware.run(rootSaga);
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
