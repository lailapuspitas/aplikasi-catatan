# Frontend Aplikasi Catatan Bacaan

Ini adalah bagian frontend dari aplikasi Catatan Bacaan, yang memungkinkan pengguna untuk mendaftar, masuk, dan melakukan operasi CRUD pada catatan buku bacaan.

## Repositori Terkait
- [Backend](https://github.com/lailapuspitas/backend-catatan): Repositori backend untuk aplikasi Catatan Bacaan.


## Instalasi

1. Pastikan Anda memiliki [Node.js](https://nodejs.org/) diinstal pada sistem Anda.
2. Clone repositori ini ke dalam direktori lokal:

    ```bash
    git clone https://github.com/lailapuspitas/aplikasi-catatan.git
    cd aplikasi-catatan
    ```

3. Install dependensi:

    ```bash
    npm install
    ```

4. Buat file `.env` di root proyek dan konfigurasikan variabel lingkungan yang diperlukan:

    ```env
    PORT=http://localhost:3000
    ```

    Gantilah `http://localhost:3000` dengan URL PORT backend aplikasi Catatan Bacaan yang Anda gunakan.

5. Jalankan aplikasi:

    ```bash
    npm run dev
    ```

Aplikasi akan berjalan di `http://localhost:3000`.

## Fungsi Utama

- **Mendaftar dan Masuk:** Pengguna dapat mendaftar dan masuk ke dalam aplikasi.
- **Menampilkan Catatan Bacaan:** Melihat daftar catatan buku bacaan yang sudah ada.
- **Menambah, Mengubah, dan Menghapus Catatan Bacaan:** Pengguna dapat menambah, mengubah, dan menghapus catatan buku bacaan mereka sendiri.

## Halaman Tampilan 
- **Masuk**
  
  ![Masuk](https://i.ibb.co/VVPntTb/Screenshot-2024-01-01-212614.png)
  
- **Mendaftar**
  
  ![Mendaftar / Registrasi](https://i.ibb.co/4Rvdgzr/Screenshot-2024-01-01-212636.png)

- **Halaman Utama**
  
  ![Halaman Utama](https://i.ibb.co/y6SF5fy/Screenshot-2024-01-01-213352.png)

## Kontribusi

Jika Anda ingin berkontribusi pada proyek ini, silakan buat _fork_ dari repositori ini dan ajukan _pull request_ dengan perubahan yang diinginkan.
