import React, { useState } from "react";
import AddCarForm from "./AddCarForm";
import Filtro from "./Filtro";

const FormsContainer = ({ carList, setfilteredCarList }) => {
  return (
    <>
      <ul className="nav nav-tabs" role="tablist">
        <li className="nav-item" role="presentation">
          <a
            className="nav-link"
            data-bs-toggle="tab"
            href="#home"
            aria-selected="false"
            role="tab"
            tabIndex={-1}
          >
            Filtro
          </a>
        </li>
        <li className="nav-item" role="presentation">
          <a
            className="nav-link active"
            data-bs-toggle="tab"
            href="#profile"
            aria-selected="true"
            role="tab"
          >
            Agregar carro
          </a>
        </li>
      </ul>
      <div id="myTabContent" className="tab-content">
        <div className="tab-pane fade" id="home" role="tabpanel">
          <Filtro carList={carList} setfilteredCarList={setfilteredCarList} />
        </div>
        <div className="tab-pane fade active show" id="profile" role="tabpanel">
          <AddCarForm />
        </div>
      </div>
    </>
  );
};

export default FormsContainer;
