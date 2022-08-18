import React from "react";

const AddCarForm = () => {
  return (
    <div className="container mt-2 mb-4">
      <h2>Registro de nuevo carro</h2>
      <form>
        <div className="row">
          <div className="col">
            <div className="mb-3 row">
              <label className="col-sm-2 col-form-label">Placa</label>
              <div className="col-sm-10">
                <input type="text" className="form-control" />
              </div>
            </div>

            <div className="mb-3 row">
              <label className="col-sm-2 col-form-label">Marca</label>
              <div className="col-sm-10">
                <input type="text" className="form-control" />
              </div>
            </div>
            <div className="mb-3 row">
              <label className="col-sm-2 col-form-label">Modelo</label>
              <div className="col-sm-10">
                <input type="text" className="form-control" />
              </div>
            </div>
          </div>
          <div className="col">
            <div className="mb-3 row">
              <label className="col-sm-2 col-form-label">Serie</label>
              <div className="col-sm-10">
                <input type="text" className="form-control" />
              </div>
            </div>

            <div className="mb-3 row">
              <label className="col-sm-2 col-form-label">Color</label>
              <div className="col-sm-10">
                <input type="text" className="form-control" />
              </div>
            </div>
            <div className="mx-auto" style={{ width: 200 }}>
              <button type="button" className="btn btn-primary ">
                Registrar nuevo automovil
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddCarForm;
