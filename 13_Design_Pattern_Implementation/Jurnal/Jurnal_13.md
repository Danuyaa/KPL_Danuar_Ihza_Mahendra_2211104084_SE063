<div align="center">

**TUGAS JURNAL**  
**KONSTRUKSI PERANGKAT LUNAK**

**MODUL XII**  
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

---
- Source Code main.js
```
const PusatDataSingleton = require('./PusatDataSingleton');

// A. Buat dua variabel data1 dan data2
const data1 = PusatDataSingleton.getDataSingleton();
const data2 = PusatDataSingleton.getDataSingleton();

// B. Tambah data ke data1
data1.addSebuahData("Nama1 - yantok");
data1.addSebuahData("Nama2 - ramdan 2");
data1.addSebuahData("Asisten - zakary");

// C. Cetak isi data2
console.log("Cetak data dari data2:");
data2.printSemuaData();

// D. Hapus data asisten pada data2
data2.hapusSebuahData(2); // index ke-2 asisten

// E. Cetak ulang isi data dari data1
console.log("\nCetak ulang dari data1 setelah penghapusan:");
data1.printSemuaData();

// F. Cetak jumlah data dari keduanya
console.log(`\nJumlah elemen data1: ${data1.getSemuaData().length}`);
console.log(`Jumlah elemen data2: ${data2.getSemuaData().length}`);

```

- Source Code PusatDataSingleton.js
```
class PusatDataSingleton {
  constructor() {
    if (PusatDataSingleton._instance) {
      throw new Error("Gunakan getDataSingleton() untuk mendapatkan instance.");
    }
    this.DataTersimpan = [];
    PusatDataSingleton._instance = this;
  }

  static getDataSingleton() {
    if (!PusatDataSingleton._instance) {
      new PusatDataSingleton();
    }
    return PusatDataSingleton._instance;
  }

  getSemuaData() {
    return this.DataTersimpan;
  }

  printSemuaData() {
    console.log("Data Tersimpan:");
    this.DataTersimpan.forEach((item, index) => {
      console.log(`${index}: ${item}`);
    });
  }

  addSebuahData(input) {
    this.DataTersimpan.push(input);
  }

  hapusSebuahData(index) {
    if (index >= 0 && index < this.DataTersimpan.length) {
      this.DataTersimpan.splice(index, 1);
    } else {
      console.log("Index tidak valid");
    }
  }
}

module.exports = PusatDataSingleton;
```
---
**Output**
---
![image](https://github.com/user-attachments/assets/5c249854-c848-4ebc-aa96-46bbb28ce756)


