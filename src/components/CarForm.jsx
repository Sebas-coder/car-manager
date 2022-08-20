import React, { useEffect, useState } from "react";

const AddCarForm = ({ setMode, mode, car }) => {
  const initial = {
    id: "",
    marca: "",
    modelo: "",
    color: "",
    serie: "",
  };

  const [currentCar, setcurrentCar] = useState(initial);

  const handleChange = (e) =>
    setcurrentCar({ ...currentCar, [e.target.name]: e.target.value });

  useEffect(() => {
    if (car) {
      setcurrentCar(car);
    } else {
      setcurrentCar(initial);
    }
  }, [car, mode]);

  return (
    <div className="container mt-2 mb-4">
      <h2>Registro de nuevo carro</h2>
      <form>
        <div className="row">
          <div className="col">
            {mode === "modificar" || (
              <div className="mb-3 row">
                <label className="col-sm-2 col-form-label">Placa</label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    name="placa"
                    onChange={handleChange}
                    value={currentCar.placa}
                    autoFocus
                  />
                </div>
              </div>
            )}

            <div className="mb-3 row">
              <label className="col-sm-2 col-form-label">Marca</label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  name="marca"
                  onChange={handleChange}
                  value={currentCar.marca}
                />
              </div>
            </div>
            <div className="mb-3 row">
              <label className="col-sm-2 col-form-label">Modelo</label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  name="modelo"
                  onChange={handleChange}
                  value={currentCar.modelo}
                />
              </div>
            </div>
          </div>
          <div className="col">
            <div className="mb-3 row">
              <label className="col-sm-2 col-form-label">Serie</label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  name="serie"
                  onChange={handleChange}
                  value={currentCar.serie}
                />
              </div>
            </div>

            <div className="mb-3 row">
              <label className="col-sm-2 col-form-label">Color</label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  name="color"
                  onChange={handleChange}
                  value={currentCar.color}
                />
              </div>
            </div>

            {mode === "modificar" || (
              <div className="mx-auto" style={{ width: 200 }}>
                <button type="button" className="btn btn-primary ">
                  Registrar nuevo automovil
                </button>
              </div>
            )}
          </div>

          {mode === "modificar" && (
            <div className="mx-auto" style={{ width: 200 }}>
              <button type="button" className="btn btn-primary ">
                Modificar vehiculo
              </button>
            </div>
          )}
        </div>
      </form>
      <div className="mx-auto" style={{ width: "200px" }}>
        <button className="btn btn-light" onClick={() => setMode("filtrar")}>
          Cancelar
        </button>
      </div>
    </div>
  );
};

export default AddCarForm;
