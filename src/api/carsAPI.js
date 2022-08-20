import axios from "axios";
const URL = "http://localhost:3006/cars";

export const fetchCars = () => axios.get(URL);

export const deleteCar = (placa) => axios.delete(`${URL}/${placa}`);

export const updateCar = (car) => axios.put(`${URL}/${car.placa}`, car);

export const createCar = (car) => axios.post(URL, car);
