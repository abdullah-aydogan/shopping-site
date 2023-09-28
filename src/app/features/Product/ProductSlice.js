import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { axiosErrorHandler } from "../../utils/axiosErrorHandler";

export const getAllProducts = createAsyncThunk(
  "products/fetchAllProducts",
  async () => {

    try {
      let { data } = await axios.get("https://fakestoreapi.com/products");
      return data;
    } 
    
    catch (error) {
      return axiosErrorHandler(error);
    }
  }
);

const productSlice = createSlice({
  name: "products",
  initialState: { isLoading: false, products: [], error: null },

  extraReducers: (builder) => {
    builder.addCase(getAllProducts.pending, (state, action) => {
      state.isLoading = true;
      state.error = null;
    });

    builder.addCase(getAllProducts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.products = action.payload;
      state.error = null;
    });
    
    builder.addCase(getAllProducts.rejected, (state, action) => {
      state.isLoading = false;
      state.products = [];
      state.error = action.error.message;
    });
  },
});

export default productSlice.reducer;