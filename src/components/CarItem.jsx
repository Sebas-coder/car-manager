import React from "react";

const CarItem = ({ car, initChanges }) => {
  const { id: placa, marca, modelo, serie, color } = car;
  return (
    <tr className="table-active">
      <th scope="row">{placa}</th>
      <td>{serie}</td>
      <td>{marca}</td>
      <td>{modelo}</td>
      <td>{color}</td>
      <td className="d-flex justify-content-center">
        <button className="btn btn-danger me-3">Eliminar</button>
        <button className="btn btn-warning" onClick={() => initChanges(car)}>
          Modificar carro
        </button>
      </td>
    </tr>
  );
};

export default CarItem;
