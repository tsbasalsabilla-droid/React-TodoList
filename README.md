---

# React Todo App 📝

React Todo App adalah aplikasi Todo List sederhana yang dibuat menggunakan **React Functional Component dan Hooks**.
Aplikasi ini memiliki tampilan **elegan dengan tema Black & Gold** serta mendukung penyimpanan data menggunakan **localStorage**, sehingga data todo tidak hilang saat halaman di-refresh.

---

## 🚀 Fitur Aplikasi

* Menampilkan daftar todo
* Menambahkan todo baru
* Menandai todo sebagai selesai
* Menghapus todo
* Data tersimpan otomatis (tidak hilang saat refresh)
* Tampilan modern, elegan, dan mudah digunakan

---

## 🛠️ Teknologi yang Digunakan

* React (Functional Component)
* React Hooks (`useState`, `useEffect`)
* Vite
* CSS (Custom Styling)
* localStorage

---

## 📂 Struktur Folder

```
react-todo-app/
├── src/
│   ├── App.jsx        # Komponen utama aplikasi
│   ├── main.jsx       # Entry point React
│   └── index.css      # Styling aplikasi (Black & Gold theme)
├── public/
├── package.json
└── README.md
```

---

## ⚙️ Cara Menjalankan Project

1. Clone repository:

```
git clone https://github.com/username/react-todo-app.git
```

2. Masuk ke folder project:

```
cd react-todo-app
```

3. Install dependency:

```
npm install
```

4. Jalankan aplikasi:

```
npm run dev
```

5. Buka browser dan akses:

```
http://localhost:5173
```

---

## 🔄 Alur Aplikasi

* Todo disimpan menggunakan state React (`useState`)
* Saat aplikasi pertama kali dijalankan, data diambil dari `localStorage`
* Setiap perubahan data otomatis disimpan kembali ke `localStorage` menggunakan `useEffect`
* Pengguna dapat menandai todo sebagai selesai atau menghapusnya melalui tombol aksi

---

## 👤 Author

**Salsabilla**
Siswi **SMK Negeri 4 Malang**
Jurusan **Rekayasa Perangkat Lunak (RPL)**

---