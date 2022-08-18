import React, { useState } from "react";

const Filtro = ({ carList, setfilteredCarList }) => {
  const [filtro, setFiltro] = useState("marca");
  const [patron, setPatron] = useState("");
  const handleChange = (e) => {
    if (e.target.name === "filtro") {
      setFiltro((prev) => e.target.value);
    } else {
      setPatron((prev) => e.target.value);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    filtrar(filtro, patron);
  };

  const filtrar = (tipo, patron) => {
    console.log("TIPO", tipo);
    console.log("PATRON", patron);

    let resultado = carList.filter((car) =>
      car[tipo].toString().toLowerCase().includes(patron.toLowerCase())
    );
    console.log(resultado);
    setfilteredCarList(resultado);
  };

  const quitarFiltro = () => {
    setfilteredCarList(carList);
  };

  return (
    <div className="container text-center">
      <form className="row g-3 my-3" onSubmit={handleSubmit}>
        <div className="col-md-3 offset-md-1">
          <div className="form-floating">
            <select
              className="form-select"
              id="floatingSelect"
              aria-label="Floating label select example"
              onChange={handleChange}
              name="filtro"
            >
              <option value={"marca"}>Marca</option>
              <option value={"modelo"}>Modelo</option>
              <option value={"color"}>Color</option>
            </select>
            <label htmlFor="floatingSelect">Filtrado por</label>
          </div>
        </div>

        <div className="col-md-5">
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              onChange={handleChange}
              name="patron"
            />
            <label htmlFor="floatingInput">Coincidencia</label>
          </div>
        </div>
        <div className="col-md-2">
          <button type="submit" className="btn btn-primary mb-3 btn-lg">
            Filtrar
          </button>
        </div>
      </form>
      <button
        type="button"
        className="btn btn-primary mb-3 btn-lg"
        onClick={quitarFiltro}
      >
        Quitar filtro
      </button>
    </div>
  );
};

export default Filtro;
