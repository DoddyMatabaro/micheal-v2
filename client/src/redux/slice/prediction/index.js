import { createSlice } from "@reduxjs/toolkit";
import { fetchPredictionApiData } from "../../services/prediction";

const initialState = {
    data: null,
    loading: false,
    error: null,
  };
  
  const apiPredictionSlice = createSlice({
    name: "prediction",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchPredictionApiData.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(fetchPredictionApiData.fulfilled, (state, action) => {
          state.loading = false;
          state.data = action.payload;
        })
        .addCase(fetchPredictionApiData.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload || "Something went wrong";
        });
    },
  });
  
  export default apiPredictionSlice.reducer;