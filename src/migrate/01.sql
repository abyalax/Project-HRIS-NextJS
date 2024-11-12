CREATE TABLE "karyawan" (
  "id_karyawan" INTEGER GENERATED BY DEFAULT AS IDENTITY UNIQUE PRIMARY KEY,
  "nama" varchar,
  "alamat" varchar,
  "no_telepon" varchar,
  "tanggal_lahir" date,
  "jabatan" varchar,
  "departemen" varchar,
  "status_karyawan" varchar,
  "tanggal_bergabung" date
);

CREATE TABLE "absensi" (
  "id_absensi" INTEGER GENERATED BY DEFAULT AS IDENTITY UNIQUE PRIMARY KEY,
  "karyawan_id" integer,
  "tanggal" date,
  "waktu_checkin" time,
  "waktu_checkout" time,
  "status" varchar
);

CREATE TABLE "cuti" (
  "id_cuti" INTEGER GENERATED BY DEFAULT AS IDENTITY UNIQUE PRIMARY KEY,
  "karyawan_id" integer,
  "tanggal_pengajuan" date,
  "tanggal_mulai" date,
  "tanggal_selesai" date,
  "status" varchar,
  "jenis_cuti" varchar
);

CREATE TABLE "penggajian" (
  "id_penggajian" INTEGER GENERATED BY DEFAULT AS IDENTITY UNIQUE PRIMARY KEY,
  "karyawan_id" integer,
  "bulan" varchar,
  "tahun" integer,
  "gaji_pokok" decimal,
  "tunjangan" decimal,
  "potongan" decimal,
  "total_gaji" decimal
);

CREATE TABLE "penilaian_performa" (
  "id_penilaian" INTEGER GENERATED BY DEFAULT AS IDENTITY UNIQUE PRIMARY KEY,
  "karyawan_id" integer,
  "periode" varchar,
  "skor" integer,
  "kpi" text,
  "feedback" text,
  "tanggal_penilaian" date
);

CREATE TABLE "admin" (
  "id_admin" INTEGER GENERATED BY DEFAULT AS IDENTITY UNIQUE PRIMARY KEY,
  "username" varchar UNIQUE,
  "password" varchar,
  "nama" varchar,
  "email" varchar UNIQUE
);

CREATE TABLE "notifikasi" (
  "id_notifikasi" INTEGER GENERATED BY DEFAULT AS IDENTITY UNIQUE PRIMARY KEY,
  "karyawan_id" integer,
  "tipe" varchar,
  "pesan" text,
  "tanggal_notifikasi" date
);

CREATE TABLE "jabatan" (
  "id_jabatan" INTEGER GENERATED BY DEFAULT AS IDENTITY UNIQUE PRIMARY KEY,
  "nama_jabatan" varchar,
  "departemen" varchar,
  "deskripsi" text
);

CREATE TABLE "departemen" (
  "id_departemen" INTEGER GENERATED BY DEFAULT AS IDENTITY UNIQUE PRIMARY KEY,
  "nama_departemen" varchar,
  "lokasi" varchar
);

ALTER TABLE "absensi" ADD FOREIGN KEY ("karyawan_id") REFERENCES "karyawan" ("id_karyawan");

ALTER TABLE "cuti" ADD FOREIGN KEY ("karyawan_id") REFERENCES "karyawan" ("id_karyawan");

ALTER TABLE "penggajian" ADD FOREIGN KEY ("karyawan_id") REFERENCES "karyawan" ("id_karyawan");

ALTER TABLE "penilaian_performa" ADD FOREIGN KEY ("karyawan_id") REFERENCES "karyawan" ("id_karyawan");

ALTER TABLE "notifikasi" ADD FOREIGN KEY ("karyawan_id") REFERENCES "karyawan" ("id_karyawan");

ALTER TABLE "karyawan" ADD FOREIGN KEY ("jabatan") REFERENCES "jabatan" ("id_jabatan");

ALTER TABLE "karyawan" ADD FOREIGN KEY ("departemen") REFERENCES "departemen" ("id_departemen");