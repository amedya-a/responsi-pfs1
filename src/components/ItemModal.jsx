import React, { useEffect, useState } from "react";

export default function ItemModal({ show, onClose, onSave, currentItem }) {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    buyPrice: "",
    sellPrice: "",
    stock: "",
  });

  useEffect(() => {
    if (currentItem) {
      setFormData(currentItem);
    } else {
      setFormData({
        name: "",
        category: "",
        buyPrice: "",
        sellPrice: "",
        stock: "",
      });
    }
  }, [currentItem]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
    onClose();
  };

  if (!show) return null;

  return (
    <div
      className="modal show d-block"
      tabIndex="-1"
      style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header bg-navy text-white">
            <h5 className="modal-title">
              {currentItem ? "Edit Barang Inventaris" : "Tambah Barang Baru"}
            </h5>
            <button
              type="button"
              className="btn-close btn-close-white"
              onClick={onClose}
            ></button>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="modal-body">
              <div className="mb-3">
                <label className="form-label fw-bold">Nama Barang</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label fw-bold">Kategori</label>
                <select
                  className="form-select"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  required
                >
                  <option value="">Pilih Kategori...</option>
                  <option value="Elektronik">Elektronik</option>
                  <option value="Perlengkapan Kantor">
                    Perlengkapan Kantor
                  </option>
                  <option value="Konsumsi">Konsumsi</option>
                  <option value="Alat Kebersihan">Alat Kebersihan</option>
                </select>
              </div>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label className="form-label fw-bold">Harga Beli (Rp)</label>
                  <input
                    type="number"
                    className="form-control"
                    name="buyPrice"
                    value={formData.buyPrice}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label fw-bold">Harga Jual (Rp)</label>
                  <input
                    type="number"
                    className="form-control"
                    name="sellPrice"
                    value={formData.sellPrice}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="mb-3">
                <label className="form-label fw-bold">Jumlah Stok</label>
                <input
                  type="number"
                  className="form-control"
                  name="stock"
                  value={formData.stock}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={onClose}
              >
                Batal
              </button>
              <button type="submit" className="btn btn-dark bg-navy">
                Simpan Data
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
