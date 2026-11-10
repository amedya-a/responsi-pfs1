import React, { useEffect } from "react";
import $ from "jquery";

export default function Sidebar({ activeMenu, onSelect, onNavClick }) {
  useEffect(() => {
    // DOM & jQuery: Efek interaktif hover item sidebar
    $(".sidebar-item").hover(
      function () {
        if (!$(this).hasClass("active-custom")) {
          $(this).css("background-color", "#334155");
        }
      },
      function () {
        if (!$(this).hasClass("active-custom")) {
          $(this).css("background-color", "transparent");
        }
      },
    );
  }, []);

  const getLinkClass = (menuName) => {
    return activeMenu === menuName
      ? "nav-link active bg-navy text-white sidebar-item fw-bold shadow-sm"
      : "nav-link text-secondary sidebar-item";
  };

  return (
    <aside className="bg-sidebar text-white p-3 d-flex flex-column justify-content-between h-100">
      <div>
        <div className="d-flex align-items-center mb-4 px-2 pt-2">
          <i className="fa-solid fa-layer-group text-warning fs-4 me-2"></i>
          <h5 className="text-uppercase fs-6 fw-bold mb-0 text-light">
            Navigasi Admin
          </h5>
        </div>
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item mb-2">
            <a
              href="#inventaris"
              onClick={() => {
                onSelect("inventaris");
                if (onNavClick) onNavClick();
              }}
              className={getLinkClass("inventaris")}
            >
              <i className="fa-solid fa-boxes-stacked me-2"></i> Data Inventaris
            </a>
          </li>
          <li className="nav-item mb-2">
            <a
              href="#analitik"
              onClick={() => {
                onSelect("analitik");
                if (onNavClick) onNavClick();
              }}
              className={getLinkClass("analitik")}
            >
              <i className="fa-solid fa-chart-pie me-2"></i> Analitik Stok
            </a>
          </li>
          <li className="nav-item mb-2">
            <a
              href="#kategori"
              onClick={() => {
                onSelect("kategori");
                if (onNavClick) onNavClick();
              }}
              className={getLinkClass("kategori")}
            >
              <i className="fa-solid fa-tags me-2"></i> Kategori Barang
            </a>
          </li>
        </ul>
      </div>
      <div className="text-secondary small px-2 py-3 border-top border-secondary">
        <p className="mb-1 fw-semibold text-light">Responsi Fullstack 2026</p>
        <p className="mb-0">© Universitas 'Aisyiyah Yogyakarta</p>
      </div>
    </aside>
  );
}
