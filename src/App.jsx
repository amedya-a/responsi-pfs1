import React, { useState, useEffect } from "react";
import $ from "jquery";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import StatsCard from "./components/StatsCard";
import ItemModal from "./components/ItemModal";

export default function App() {
  const [items, setItems] = useState([
    {
      id: 1,
      name: "Kertas HVS A4 80gr",
      category: "Perlengkapan Kantor",
      buyPrice: 45000,
      sellPrice: 55000,
      stock: 25,
    },
    {
      id: 2,
      name: "Tinta Printer Epson L-Series",
      category: "Perlengkapan Kantor",
      buyPrice: 90000,
      sellPrice: 115000,
      stock: 5,
    },
    {
      id: 3,
      name: "Proyektor Epson EB-X500",
      category: "Elektronik",
      buyPrice: 4500000,
      sellPrice: 4900000,
      stock: 0,
    },
    {
      id: 4,
      name: "Indomie Goreng (Box)",
      category: "Konsumsi",
      buyPrice: 125000,
      sellPrice: 145000,
      stock: 15,
    },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("inventaris");

  // DOM & jQuery: Efek visual fade-in saat halaman dimuat
  useEffect(() => {
    $(".main-content").hide().fadeIn(700);
  }, []);

  // Statistik Stok
  const totalItemsCount = items.length;
  const safeStockCount = items.filter((i) => i.stock > 10).length;
  const lowStockCount = items.filter(
    (i) => i.stock > 0 && i.stock <= 10,
  ).length;
  const outOfStockCount = items.filter((i) => i.stock === 0).length;

  const getStockStatusBadge = (stock) => {
    if (stock === 0)
      return <span className="badge bg-danger rounded-pill px-3">Habis</span>;
    if (stock <= 10)
      return (
        <span className="badge bg-warning text-dark rounded-pill px-3">
          Menipis
        </span>
      );
    return <span className="badge bg-success rounded-pill px-3">Aman</span>;
  };

  const handleSaveItem = (formData) => {
    if (currentItem) {
      setItems(
        items.map((item) =>
          item.id === currentItem.id
            ? {
                ...formData,
                id: item.id,
                buyPrice: Number(formData.buyPrice),
                sellPrice: Number(formData.sellPrice),
                stock: Number(formData.stock),
              }
            : item,
        ),
      );
    } else {
      const newItem = {
        ...formData,
        id: items.length > 0 ? Math.max(...items.map((i) => i.id)) + 1 : 1,
        buyPrice: Number(formData.buyPrice),
        sellPrice: Number(formData.sellPrice),
        stock: Number(formData.stock),
      };
      setItems([...items, newItem]);
    }
    setCurrentItem(null);
  };

  const handleDelete = (id) => {
    if (
      window.confirm(
        "Apakah Anda yakin ingin menghapus barang ini dari daftar inventaris?",
      )
    ) {
      setItems(items.filter((item) => item.id !== id));
    }
  };

  const filteredItems = items.filter(
    (item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.category.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const categories = [...new Set(items.map((i) => i.category))];

  return (
    <div className="container-fluid p-0">
      <Navbar />

      {/* Tombol Hamburger Khusus Tampilan Mobile di Atas (Sticky saat di-scroll) */}
      <div className="bg-navy text-white p-2 d-lg-none d-flex justify-content-between align-items-center px-3 shadow-sm mobile-sticky-header">
        <span className="fw-bold fs-6">
          <i className="fa-solid fa-warehouse me-2"></i> Menu Navigasi
        </span>
        <button
          className="btn btn-outline-light btn-sm"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <i
            className={`fa-solid ${mobileMenuOpen ? "fa-xmark" : "fa-bars"}`}
          ></i>{" "}
          Menu
        </button>
      </div>

      {/* Dropdown Menu Sidebar untuk Mobile */}
      {mobileMenuOpen && (
        <div
          className="d-lg-none bg-sidebar text-white p-3 border-bottom border-secondary animate__animated animate__fadeIn"
          style={{ position: "sticky", top: "48px", zIndex: 1029 }}
        >
          <Sidebar
            activeMenu={activeMenu}
            onSelect={setActiveMenu}
            onNavClick={() => setMobileMenuOpen(false)}
          />
        </div>
      )}

      <div className="row g-0">
        {/* Sidebar Sticky untuk Desktop */}
        <div className="col-lg-2 d-none d-lg-block sticky-sidebar">
          <Sidebar activeMenu={activeMenu} onSelect={setActiveMenu} />
        </div>

        {/* Konten Utama Dashboard */}
        <div
          className="col-12 col-lg-10 p-3 p-md-4 main-content"
          id="inventaris"
        >
          {/* Header & Tombol Tambah */}
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-4 gap-3">
            <div>
              <h3 className="fw-bold text-navy mb-1">
                Dashboard Manajemen Inventaris Barang Gudang
              </h3>
              <p className="text-muted small mb-0">
                Implementasi Responsi Fullstack 6 Materi (HTML, CSS, Bootstrap,
                JS, jQuery, React 19).
              </p>
            </div>
            <button
              className="btn btn-dark bg-navy text-white shadow-sm px-4"
              onClick={() => {
                setCurrentItem(null);
                setShowModal(true);
              }}
            >
              <i className="fa-solid fa-plus me-2"></i> Tambah Barang Baru
            </button>
          </div>

          {/* Kartu Statistik Atas (Total Jenis Barang) */}
          <div className="row g-3 mb-4">
            <StatsCard
              title="Total Jenis Barang"
              value={totalItemsCount}
              icon="fa-solid fa-boxes-stacked"
              colorClass="border-primary"
            />
          </div>

          {/* Panel Tabel & Pencarian */}
          <div className="card shadow-sm mb-4">
            <div className="card-body">
              <div className="row mb-3">
                <div className="col-12 col-md-5">
                  <div className="input-group">
                    <span className="input-group-text bg-white">
                      <i className="fa-solid fa-search text-muted"></i>
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Cari berdasarkan nama barang atau kategori..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              <div className="table-responsive">
                <table className="table table-hover align-middle mb-0">
                  <thead className="table-dark bg-navy">
                    <tr>
                      <th>#ID</th>
                      <th>Nama Barang</th>
                      <th>Kategori</th>
                      <th>Harga Beli</th>
                      <th>Harga Jual</th>
                      <th>Stok</th>
                      <th>Status</th>
                      <th className="text-center">Aksi (CRUD)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredItems.length > 0 ? (
                      filteredItems.map((item, index) => (
                        <tr key={item.id}>
                          <td className="fw-bold text-secondary">#{item.id}</td>
                          <td className="fw-semibold">{item.name}</td>
                          <td>
                            <span className="badge bg-secondary rounded-pill px-2">
                              {item.category}
                            </span>
                          </td>
                          <td>Rp {item.buyPrice.toLocaleString("id-ID")}</td>
                          <td>Rp {item.sellPrice.toLocaleString("id-ID")}</td>
                          <td className="fw-bold">{item.stock}</td>
                          <td>{getStockStatusBadge(item.stock)}</td>
                          <td className="text-center">
                            <button
                              className="btn btn-sm btn-outline-primary me-2 px-2 py-1"
                              title="Edit Data"
                              onClick={() => {
                                setCurrentItem(item);
                                setShowModal(true);
                              }}
                            >
                              <i className="fa-solid fa-pen-to-square"></i>
                            </button>
                            <button
                              className="btn btn-sm btn-outline-danger px-2 py-1"
                              title="Hapus Data"
                              onClick={() => handleDelete(item.id)}
                            >
                              <i className="fa-solid fa-trash"></i>
                            </button>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="8" className="text-center py-4 text-muted">
                          Tidak ada data barang inventaris yang ditemukan.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Target Navigasi: Analitik Stok */}
          <div id="analitik" className="card shadow-sm mb-4">
            <div className="card-body">
              <h5 className="fw-bold text-navy mb-3">
                <i className="fa-solid fa-chart-pie me-2 text-earth"></i>{" "}
                Analitik Ringkasan Stok
              </h5>
              <p className="text-muted small">
                Distribusi persentase kondisi inventaris gudang saat ini:
              </p>
              <div className="row g-3">
                <div className="col-md-4">
                  <div className="p-3 bg-light rounded border-start border-4 border-success">
                    <h6 className="text-muted mb-1">
                      Stok Aman (Lebih dari 10)
                    </h6>
                    <h4 className="fw-bold mb-0 text-success">
                      {safeStockCount} Barang
                    </h4>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="p-3 bg-light rounded border-start border-4 border-warning">
                    <h6 className="text-muted mb-1">Stok Menipis (1 - 10)</h6>
                    <h4 className="fw-bold mb-0 text-warning">
                      {lowStockCount} Barang
                    </h4>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="p-3 bg-light rounded border-start border-4 border-danger">
                    <h6 className="text-muted mb-1">Stok Habis (0)</h6>
                    <h4 className="fw-bold mb-0 text-danger">
                      {outOfStockCount} Barang
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Target Navigasi: Kategori Barang */}
          <div id="kategori" className="card shadow-sm mb-4">
            <div className="card-body">
              <h5 className="fw-bold text-navy mb-3">
                <i className="fa-solid fa-tags me-2 text-earth"></i> Daftar
                Kategori Barang Terdaftar
              </h5>
              <div className="d-flex flex-wrap gap-2">
                {categories.map((cat, idx) => (
                  <span key={idx} className="badge bg-secondary px-3 py-2 fs-6">
                    <i className="fa-solid fa-tag me-1"></i> {cat}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Komponen Modal Form */}
      <ItemModal
        show={showModal}
        onClose={() => setShowModal(false)}
        onSave={handleSaveItem}
        currentItem={currentItem}
      />
    </div>
  );
}
