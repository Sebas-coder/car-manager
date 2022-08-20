import React from "react";
import CarItem from "./CarItem";

const CarsTable = ({ filteredCarList, initChanges }) => {
  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th scope="col">Placa</th>
          <th scope="col">Serie</th>
          <th scope="col">Marca</th>
          <th scope="col">Modelo</th>
          <th scope="col">Color</th>
          <th scope="col">Mas acciones</th>
        </tr>
      </thead>
      <tbody>
        {filteredCarList.map((car) => (
          <CarItem car={car} key={car.id} initChanges={initChanges} />
        ))}
      </tbody>
    </table>
  );
};

export default CarsTable;
