import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({

  name: "cart",

  initialState: {

    carts: localStorage.getItem("carts") ? JSON.parse(localStorage.getItem("carts"))
      : localStorage.setItem("carts", JSON.stringify([])),

    error: null,
  },

  reducers: {
    addToCarts: (state, action) => {
      
      if (!state.carts) {
        
        state.carts = [action.payload];
      } 
      
      else {
        
        const existItem = state.carts.find((i) => i.id === action.payload.id);

        if (existItem) {
          
          let update = state.carts.map((i) => {

            if (i.id === action.payload.id) {

              return { ...i, quantity: i.quantity + action.payload.quantity };
            } 
            
            else {

              return i;
            }
          });

          state.carts = update;
        } 
        
        else {
          
          state.carts = [...state.carts, action.payload];
        }
      }

      localStorage.setItem("carts", JSON.stringify(state.carts));
    },

    increaseQuantity: (state, action) => {
  
      const item = state.carts.find((product) => product.id === action.payload.id);

      if (item.quantity >= 1) {
    
        state.carts = state.carts.map((product) => product.id === action.payload.id
            ? { ...product, quantity: (item.quantity += 1) }
            : product
        );
      }

      localStorage.setItem("carts", JSON.stringify(state.carts));
    },

    decreaseQuantity: (state, action) => {
  
      const item = state.carts.find((product) => product.id === action.payload.id);

      if (item.quantity === 1) {

        state.carts = state.carts.filter((product) => product.id !== action.payload.id);
      }

      state.carts = state.carts.map((product) => product.id === action.payload.id
          ? { ...product, quantity: (item.quantity -= 1) }
          : product
      );

      localStorage.setItem("carts", JSON.stringify(state.carts));
    },

    removeFormCart: (state, action) => {
      
      const item = state.carts.find((product) => product.id === action.payload.id);

      if (item) {

        state.carts = state.carts.filter((product) => product.id !== action.payload.id);
      }

      localStorage.setItem("carts", JSON.stringify(state.carts));
    },
  },
});

export const cartState = (state) => state.carts;
export const {addToCarts, increaseQuantity, decreaseQuantity, removeFormCart } = CartSlice.actions;
export default CartSlice.reducer;