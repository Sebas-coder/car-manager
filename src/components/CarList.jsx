import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCars, getCars } from "../features/cars/car.slice";
import Filtro from "./Filtro";
import CarsTable from "./CarsTable";
import CarForm from "./CarForm";

const CarList = () => {
  const dispath = useDispatch();
  const { cars, loading, error } = useSelector(selectCars);
  const [carList, setCarList] = useState([]);
  const [filteredCarList, setfilteredCarList] = useState([]);
  const [mode, setMode] = useState("filtrar");
  const [modifiedCar, setModifiedCar] = useState({});

  useEffect(() => {
    dispath(getCars());
  }, []);

  useEffect(() => {
    setCarList((prev) => cars);
    setfilteredCarList((prev) => cars);
  }, [cars]);

  const initChanges = (car) => {
    setModifiedCar(car);
    setMode("modificar");
  };

  const initAdd = () => {
    setModifiedCar(null);
    setMode("agregar");
  };

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
      {mode === "filtrar" ? (
        <Filtro carList={carList} setfilteredCarList={setfilteredCarList} />
      ) : (
        <CarForm setMode={setMode} mode={mode} car={modifiedCar} />
      )}

      {mode === "agregar" || (
        <button className="btn btn-primary" onClick={initAdd}>
          Agregar vehiculo
        </button>
      )}
      {filteredCarList.length === 0 ? (
        <div className="mx-auto" style={{ width: "200px" }}>
          <h1>Sin coincidencia :(</h1>
        </div>
      ) : (
        <CarsTable
          filteredCarList={filteredCarList}
          initChanges={initChanges}
        />
      )}
    </div>
  );
};

export default CarList;
