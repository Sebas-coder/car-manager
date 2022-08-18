import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchCars } from "../../api/carsAPI";

const initialState = {
  cars: [],
  loading: false,
  error: null,
};

export const getCars = createAsyncThunk("cars/fetchCars", async () => {
  const response = await fetchCars();
  return response.data;
});

const carSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {
    addCar(state, action) {
      state.cars.push({
        ...action.payload,
      });
    },
    deleteCar(state, action) {
      state.cars = state.cars.filter((car) => car.placa !== action.payload);
    },
    updateCar(state, action) {
      state.cars = state.cars.map((car) =>
        car.placa === action.payload.placa ? action.payload : car
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCars.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getCars.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.cars = action.payload;
      })
      .addCase(getCars.rejected, (state, action) => {
        console.log("ESTE ES EL ERROR", action);
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const selectCars = (state) => state.cars;

export const { addCar, deleteCar, updateCar } = carSlice.actions;

export default carSlice.reducer;
