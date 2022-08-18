import React from "react";

const CarItem = ({ car }) => {
  const { placa, marca, modelo, id: serie, color } = car;
  return (
    <tr className="table-active">
      <th scope="row">{serie}</th>
      <td>{placa}</td>
      <td>{marca}</td>
      <td>{modelo}</td>
      <td>{color}</td>
      <td className="d-flex justify-content-center">
        <button className="btn btn-danger me-3">Eliminar</button>
        <button className="btn btn-warning">Modificar carro</button>
      </td>
    </tr>
  );
};

export default CarItem;
