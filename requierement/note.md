# Sistem Informasi Karyawan (HRIS) - Requirement

## 1. Fungsionalitas Utama
   Sistem ini memungkinkan **Admin HR** dan **Karyawan** untuk mengelola dan mengakses data karyawan, absensi, penggajian, dan performa secara terstruktur.

## 2. Role Pengguna
   - **Admin HR**: Mengelola data karyawan, absensi, penggajian, dan penilaian performa.
   - **Karyawan**: Mengakses profil, riwayat absensi, slip gaji, dan penilaian kinerja pribadi.

---

## Functional Requirements

### 1. Manajemen Data Karyawan
   - Admin HR dapat **menambahkan, mengedit, dan menghapus** data karyawan.
   - Karyawan dapat **melihat profil** mereka sendiri.
   - Data karyawan yang disimpan meliputi:
     - **Identitas pribadi**: Nama lengkap, alamat, tanggal lahir, kontak.
     - **Informasi pekerjaan**: Jabatan, departemen, status karyawan, tanggal bergabung.
     - **Data tambahan**: Pendidikan, keahlian, pengalaman kerja.

### 2. Sistem Absensi
   - **Pencatatan Kehadiran**: Karyawan dapat **check-in dan check-out** di aplikasi.
   - **Pengelolaan Cuti**: Karyawan dapat **mengajukan cuti**; Admin HR dapat **menyetujui/menolak** cuti.
   - **Laporan Absensi**: Admin HR dapat **melihat laporan absensi bulanan** dan **riwayat absensi** karyawan.

### 3. Penggajian (Payroll)
   - Admin HR dapat **mengatur dan menghitung gaji** berdasarkan komponen:
     - Gaji pokok
     - Tunjangan
     - Potongan (absensi, pinjaman, dll.)
   - Admin HR dapat **menghasilkan slip gaji bulanan** yang dapat diakses karyawan.
   - **History Slip Gaji**: Karyawan dapat **mengakses riwayat slip gaji**.

### 4. Penilaian Performa Karyawan
   - **Pengisian Evaluasi**: Admin HR/supervisor dapat **mengisi dan memperbarui penilaian performa**.
   - **KPI (Key Performance Indicators)**: Buat KPI dengan skor untuk tiap periode evaluasi.
   - **Feedback**: Admin HR/supervisor dapat memberikan **feedback untuk karyawan**.
   - **Akses Penilaian**: Karyawan dapat **melihat penilaian kinerja mereka**.

### 5. Dashboard dan Pelaporan
   - **Dashboard HR**: Menampilkan statistik jumlah karyawan, tingkat kehadiran rata-rata, total cuti, dan performa.
   - **Laporan Bulanan dan Tahunan**: Admin HR dapat **membuat laporan absensi, performa, dan gaji**.
   - **Grafik dan Visualisasi Data**: Menampilkan data absensi dan performa karyawan dalam bentuk grafik.

### 6. Sistem Notifikasi
   - **Notifikasi untuk karyawan** saat cuti disetujui/ditolak.
   - Notifikasi saat **slip gaji terbaru** tersedia.
   - Notifikasi untuk evaluasi performa saat **feedback baru ditambahkan**.

---

## Non-Functional Requirements

### 1. Keamanan
   - **Autentikasi** menggunakan next-auth untuk melindungi akses.
   - Pembatasan akses berdasarkan **role**.
   - Data sensitif harus **dienkripsi**.

### 2. Ketersediaan dan Responsivitas
   - Aplikasi **responsif** dan dapat diakses dari desktop, tablet, dan mobile.
   - Aplikasi harus **optimal** untuk beban data besar.

### 3. Skalabilitas
   - Desain database yang mendukung **penambahan karyawan** tanpa menurunkan performa.
   - Memungkinkan penambahan **fitur baru** tanpa mengubah arsitektur utama.

### 4. Audit Trail
   - **Log aktivitas** untuk melacak perubahan data karyawan, absensi, penggajian, dan performa.

### 5. Backup dan Recovery
   - **Backup otomatis** untuk memastikan data dapat dipulihkan.

---

## Teknologi yang Digunakan

- **Frontend**: Next.js, TypeScript, dan Tailwind CSS.
- **Backend**: Prisma untuk manajemen database (misalnya PostgreSQL), Clerk untuk autentikasi, dan Chart.js/Recharts untuk visualisasi data.
- **Opsional**: Cloudinary untuk menyimpan foto profil karyawan.

---

## Use Case Utama

1. **Admin Menambahkan Karyawan Baru**: Mengisi data lengkap karyawan dan menyimpannya di sistem.
2. **Karyawan Melakukan Check-in**: Karyawan check-in/check-out, dan data kehadiran tercatat.
3. **Admin Mengelola Penggajian**: Mengatur komponen gaji dan menghasilkan slip gaji bulanan.
4. **Karyawan Melihat Slip Gaji**: Karyawan mengakses slip gaji terbaru atau riwayat gaji.
5. **Admin Memberikan Evaluasi**: Admin HR/supervisor menilai dan memberikan feedback.
6. **Karyawan Melihat Evaluasi**: Karyawan mengakses evaluasi dan feedback performa.

---

Proyek ini menunjukkan kemampuan dalam mengembangkan aplikasi yang aman, terstruktur, dan menarik bagi perusahaan di bidang pengelolaan sumber daya manusia.
