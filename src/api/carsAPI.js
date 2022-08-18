import axios from "axios";
const URL = "http://localhost:3006/cars";
const HEADER = {
  headers: { "Content-Type": "application/json" },
};

export const fetchCars = () => axios.get(URL);

export const deleteCar = (placa) => axios.delete(`${URL}/${placa}`);

export const updateCar = (car) =>
  axios.patch(`${URL}/${car.placa}`, car, HEADER);

export const createCar = (car) => axios.post(URL, car, HEADER);
