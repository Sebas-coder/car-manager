import React, { useEffect, useState } from "react";
import FormsContainer from "./FormsContainer";
import { useDispatch, useSelector } from "react-redux";
import { selectCars, getCars } from "../features/cars/car.slice";
import CarItem from "./CarItem";

const CarList = () => {
  const dispath = useDispatch();
  const { cars, loading, error } = useSelector(selectCars);
  const [carList, setCarList] = useState([]);
  const [filteredCarList, setfilteredCarList] = useState([]);

  useEffect(() => {
    dispath(getCars());
  }, []);

  useEffect(() => {
    setCarList(prev => cars);
    setfilteredCarList(prev =>cars);
  }, [cars]);

  if (loading) {
    return (
      <div className="d-flex justify-content-center mt-5">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <FormsContainer
        carList={carList}
        setfilteredCarList={setfilteredCarList}
      />
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">Serie</th>
            <th scope="col">Placa</th>
            <th scope="col">Marca</th>
            <th scope="col">Modelo</th>
            <th scope="col">Color</th>
            <th scope="col">Mas acciones</th>
          </tr>
        </thead>
        <tbody>
          {filteredCarList.map((car) => (
            <CarItem car={car} key={car.id} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CarList;
