import { configureStore, combineReducers } from "@reduxjs/toolkit";
import counterSlice, { incrementByValue } from "./counterSlice";
import { logger } from "redux-logger";
import globalSlice from "./globalSlice";

const reducer = combineReducers({
  counter: counterSlice,
  global: globalSlice,
});
// My custom middleware to log the state
// const loggerMiddleware = (store) => (next) => (action) => {
//   // your code here
//   console.log(action);
//   next(action);
// };

// const loggerMiddleware= function (store) {
//   return function (next) {
//     return function (action) {
//       // your code here
//     };
//   }
// }

const store = configureStore({
  reducer: reducer,
  middleware: (gDM) => gDM().concat(logger),
});

// store.subscribe(() => {
//   // javascript observer pattern
//   // console.log(`current state: ${store.getState().counter.count}`);
// });

store.dispatch(incrementByValue(1));
// store.dispatch(incrementByValue(3));
// store.dispatch(incrementByValue(5));

export default store;
