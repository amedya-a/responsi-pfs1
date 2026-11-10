📦 Dashboard Manajemen Inventaris Barang Gudang

Aplikasi Dashboard Admin Interaktif berbasis Web untuk pengelolaan inventaris stok barang gudang. Proyek ini dibangun sebagai solusi manajemen stok yang efisien sekaligus untuk memenuhi tugas Responsi 1 Pemrograman Fullstack di Universitas 'Aisyiyah Yogyakarta.

🎯 Tujuan Pembuatan Proyek

Implementasi Komprehensif: Mengintegrasikan seluruh materi perkuliahan Pemrograman Fullstack (HTML, CSS, Bootstrap, JavaScript, DOM & jQuery, serta React 19) ke dalam satu aplikasi web berbasis komponen modern.

Manajemen Stok Real-Time: Membantu admin gudang dalam mengelola data barang, memonitor status stok (Aman, Menipis, Habis), serta mengatur harga jual/beli secara praktis.

Penerapan Operasi CRUD: Menyediakan fitur Create, Read, Update, Delete data barang secara dinamis pada client-side menggunakan state lokal React.

Desain Multiperangkat: Menyajikan antarmuka admin dengan skema warna Corporate Earth Tone yang responsif dan nyaman diakses dari desktop, tablet, maupun mobile.

👤 Informasi Mahasiswa

Nama: Adis Medya Nuragustin

NIM: 2511501008

Program Studi: Teknologi Informasi (A1)

Studi Kasus: Kasus 1 - Dashboard Manajemen Inventaris Barang Gudang

🛠️ Integrasi 6 Materi Perkuliahan & Rubrik Penilaian

Proyek ini dibangun dengan mengintegrasikan 6 materi perkuliahan utama:

HTML Dasar & Semantik: Penggunaan tag semantik (<aside>, <nav>, <main>), elemen formulir modal (<form>, <input>, <select>), serta struktur modal HTML.

CSS Styling & Responsive Design: Skema warna Corporate Earth Tone (Navy #1b263b, Cream #fdfbf7, Warm Brown #8d6e63), tata letak responsif media query, serta indikator warna status stok.

Bootstrap 5 CSS: Pemanfaatan utility classes (container-fluid, row, col-12 col-lg-10, shadow-sm, badge rounded-pill, modal) dan navbar responsif mobile.

JavaScript Dasar & ES6: Pengelolaan data entitas menggunakan Array of Objects, fungsi panah (arrow functions), logika pengondisian (if/else), serta metode array modern (map(), filter()).

DOM Manipulation & jQuery: Efek visual fadeIn() saat halaman dimuat serta efek interaktif hover pada menu sidebar.

React JS (React 19 & Vite): Arsitektur berbasis komponen terpisah (Navbar, Sidebar, StatsCard, ItemModal) dengan manajemen state reaktif (useState, useEffect).

🚀 Fitur Utama Dashboard

📝 Fitur CRUD Client-Side: Tambah barang baru, tampilkan daftar inventaris, edit harga & stok, serta hapus barang dari gudang.

🏷️ Indikator Status Stok Otomatis:

Aman: Stok > 10

Menipis: Stok 1 – 10

Habis: Stok = 0

🔍 Pencarian Reaktif: Filter pencarian otomatis berdasarkan nama barang atau kategori secara real-time.

📊 Analitik & Kategori: Ringkasan persentase stok serta daftar kategori barang yang terdaftar.

📱 Desain Fully Responsive: Tampilan menyesuaikan perangkat desktop, tablet, maupun mobile (dilengkapi sticky header dan hamburger menu di HP).

💻 Cara Menjalankan Proyek di Komputer Lokal

1. Prasyarat

Pastikan komputer kamu sudah terpasang:

Node.js (Versi 18 LTS atau yang terbaru)

Package manager npm

2. Langkah-Langkah Menjalankan

Clone Repositori (atau unduh file proyek ini):

git clone <URL_REPOSITORI_GITHUB_KAMU>
cd inventory-dashboard


Instal Dependensi:
Jalankan perintah berikut di terminal untuk memasang seluruh paket dependensi (React, Bootstrap, jQuery, FontAwesome):

npm install


Jalankan Development Server:

npm run dev


Buka Aplikasi di Browser:
Buka browser kamu dan akses alamat lokal yang muncul di terminal (biasanya http://localhost:5173).

📁 Struktur Direktori Proyek

inventory-dashboard/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── ItemModal.jsx   # Form Modal Tambah/Edit Data
│   │   ├── Navbar.jsx      # Navigation Bar Atas
│   │   ├── Sidebar.jsx     # Navigation Sidebar
│   │   └── StatsCard.jsx   # Kartu Ringkasan Statistik
│   ├── App.jsx             # Komponen Utama & State Management
│   ├── index.css           # Custom CSS Earth Tone & Responsive Rules
│   └── main.jsx            # Entry Point React 19
├── index.html              # HTML Utama (Integrasi Bootstrap & jQuery)
├── package.json
└── README.md               # Dokumentasi Proyek
