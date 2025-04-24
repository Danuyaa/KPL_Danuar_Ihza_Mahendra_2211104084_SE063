<div align="center">

**TUGAS PENDAHULUAN**  
**KONSTRUKSI PERANGKAT LUNAK**

**MODUL VII**  
**AUTOMATA & TABLE-DRIVEN CONSTRUCTION**

<img src="https://github.com/user-attachments/assets/637271ab-0240-4561-a7a6-04cb1169f636" alt="Logo Vertikal Telkom University" width="350"/>

Disusun Oleh :

**Danuar Ihza Mahendra (2211104084)**  
**SE06-03**

Asisten Praktikum :  
Vaninside
rizqiiirz

Dosen Pengampu :  
riyandwwi

PROGRAM STUDI S1 REKAYASA PERANGKAT LUNAK  
FAKULTAS DIREKTORAT KAMPUS PURWOKERTO  
TELKOM UNIVERSITY PURWOKERTO  
2024

</div>

---

# TUGAS JURNAL

## A. Soal Nomor 1

MENAMBAHKAN JSON DESERIALIZATION 1
Buatlah branch baru dengan nama branch “irpan” dan checkout kesana.
A. Download file “jurnal7_1_2211104084.json” dan rename file tersebut dengan mengganti “nim”
dengan NIM praktikan kemudian pindahkan file json tersebut di folder solution projectnya.
B. Ganti isi dari file json tersebut dengan detail yang benar dari praktikan.
C. Buatlah sebuah file class baru dengan nama “DataMahasiswa<2211104084_PRAKTIKAN>”.
D. Buat method “ReadJSON() yang melakukan parsing untuk file tersebut menjadi object
sesuai.
E. Pada method tersebut, lakukan print hasil deserialisasi dari object yang dibuat dengan
format bebas asalkan semua nilai ditampilkan di console/output.

## A. Soal Nomor 2

MENAMBAHKAN JSON DESERIALIZATION 2
Buatlah branch baru dengan nama branch “irpan” dan checkout kesana.
A. Download file “jurnal7_2_2211104084.json” dan rename file tersebut dengan mengganti “nim”
dengan NIM praktikan kemudian pindahkan file json tersebut di folder solution projectnya.
B. Ubah isi dari file json tersebut dengan daftar anggota kelompok (untuk tubes).
C. Buatlah sebuah file class baru dengan nama “TeamMembers<2211104084_PRAKTIKAN>”.
D. Buat method “ReadJSON() yang melakukan parsing untuk file tersebut menjadi object
sesuai.
E. Pada method tersebut, lakukan print hasil deserialisasi dari object yang dibuat dengan
format:
“Team member list:”
“<2211104084> <danuar + ihza + mahendra> (<22> <L>) ”
“<2211104084> <firman + maulana> (<22> <L>) ”
dst.

**Input**

- jurnal7_1_2211104084

```json
{
  "nama": "Danuar Ihza Mahendra",
  "nim": "2211104084",
  "fakultas": "Direktorat Kampus Purwokerto",
  "prodi": "Rekayasa Perangkat Lunak",
  "angkatan": 2022
}
```

- DataMahasiswa2211104084

```js
const fs = require("fs");

class DataMahasiswa2211104084 {
  static ReadJSON() {
    const filePath = "./jurnal7_1_2211104084.json";
    const jsonData = fs.readFileSync(filePath, "utf-8");
    const mhs = JSON.parse(jsonData);

    console.log("===== DATA MAHASISWA =====");
    console.log(`Nama      : ${mhs.nama}`);
    console.log(`NIM       : ${mhs.nim}`);
    console.log(`Fakultas  : ${mhs.fakultas}`);
    console.log(`Prodi     : ${mhs.prodi}`);
    console.log(`Angkatan  : ${mhs.angkatan}`);
    console.log("===========================");
  }
}

module.exports = DataMahasiswa2211104084;
```

- jurnal7_2_2211104084

```json
{
  "anggota": [
    {
      "nim": "2211104084",
      "nama": "Danuar Ihza Mahendra",
      "angkatan": "22",
      "jenis_kelamin": "L"
    },
    {
      "nim": "2211104083",
      "nama": "firman maulana",
      "angkatan": "22",
      "jenis_kelamin": "L"
    },
    {
      "nim": "2211104073",
      "nama": "Naufal Aflakh Wijayanto",
      "angkatan": "22",
      "jenis_kelamin": "L"
    }
  ]
}
```

- TeamMembers2211104084

```js
const fs = require("fs");

class TeamMembers2211104084 {
  static ReadJSON() {
    const filePath = "./jurnal7_2_2211104084.json";
    const jsonData = fs.readFileSync(filePath, "utf-8");
    const data = JSON.parse(jsonData);

    console.log("Team member list:");
    data.anggota.forEach((anggota) => {
      console.log(
        `- ${anggota.nim} ${anggota.nama} ${anggota.angkatan} ${anggota.jenis_kelamin}`
      );
    });
  }
}

module.exports = TeamMembers2211104084;
```

- index

```js
const DataMahasiswa = require("./DataMahasiswa2211104084");

DataMahasiswa.ReadJSON();

const TeamMembers = require("./TeamMembers2211104084");

TeamMembers.ReadJSON();
```

**Output**

![image](https://github.com/user-attachments/assets/4cffaa31-ec77-4114-8a46-0dd2b60922b6)

---