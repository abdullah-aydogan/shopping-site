import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import CartSlice from "./features/Cart/CartSlice";
import CategorySlice from "./features/Category/CategorySlice";
import ProductSlice from "./features/Product/ProductSlice";

let initialState = {};

let store = configureStore(
  {
    reducer: {
      categories: CategorySlice,
      products: ProductSlice,
      carts: CartSlice,
    },
  },
  
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

setupListeners(store.dispatch);

export default store;