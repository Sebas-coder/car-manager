import { configureStore } from "@reduxjs/toolkit";
import cars from "../features/cars/car.slice";

const store = configureStore({
  reducer: {
    cars: cars,
  },
});

export default store;
