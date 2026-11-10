import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-navy shadow-sm px-3 px-md-4 py-3">
      <div className="container-fluid px-0">
        <span className="navbar-brand fw-bold fs-6 fs-md-5 text-truncate">
          <i className="fa-solid fa-warehouse me-2"></i> GudangInovasi | Admin
          Dashboard
        </span>
        <div className="d-flex align-items-center text-white">
          <span className="me-2 me-md-3 small d-none d-sm-inline">
            <i className="fa-solid fa-user-shield me-1"></i> Adis Medya
            Nuragustin (NIM: 2511501008)
          </span>
          <div
            className="bg-secondary rounded-circle d-flex justify-content-center align-items-center flex-shrink-0"
            style={{ width: "35px", height: "35px" }}
          >
            <i className="fa-solid fa-user text-white"></i>
          </div>
        </div>
      </div>
    </nav>
  );
}
