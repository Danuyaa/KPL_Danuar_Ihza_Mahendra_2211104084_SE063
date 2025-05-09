<div align="center">

**TUGAS JURNAL**  
**KONSTRUKSI PERANGKAT LUNAK**

**MODUL IV**  
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

MENAMBAHKAN KODE DENGAN TEKNIK TABLE-DRIVEN
Dari project yang sudah dibuat sebelumnya:
Dari project yang sudah dibuat sebelumnya:
A. Buatlah sebuah class bernama “KodeBuah”.
B. Pada class tersebut, tambahkan sebuah method dengan nama “getKodeBuah” yang mengembalikan kode buah dari tabel yang diberikan di bawah ini.
C. Setelah method ditambahkan, panggil method tersebut pada class utama/main.

**Input**

- kodeBuah

```js
class KodeBuah {
  constructor() {
    this.kodeBuahTable = {
      Apel: "A00",
      Aprikot: "B00",
      Alpukat: "C00",
      Pisang: "D00",
      Paprika: "E00",
      Blackberry: "F00",
      Ceri: "H00",
      Kelapa: "I00",
      Jagung: "J00",
      Kurma: "K00",
      Durian: "L00",
      Anggur: "M00",
      Melon: "N00",
      Semangka: "O00",
    };
  }

  getKodeBuah(buah) {
    return this.kodeBuahTable[buah] || "Buah tidak ditemukan";
  }
}

module.exports = KodeBuah;
```

- index

```js
const KodeBuah = require("./kodeBuah");
const PosisiKarakterGame = require("./posisiKarakterGame");

const kodeBuah = new KodeBuah();
console.log("Kode Buah Apel: " + kodeBuah.getKodeBuah("Apel"));
console.log("Kode Buah Pisang: " + kodeBuah.getKodeBuah("Pisang"));

const posisiKarakter = new PosisiKarakterGame(123456);
posisiKarakter.simulateKeyPress("S");
posisiKarakter.simulateKeyPress("W");

console.log("Posisi karakter: " + posisiKarakter.getState());
```

## A. Soal Nomor 2

MENAMBAHKAN KODE DENGAN TEKNIK STATE-BASED CONSTRUCTION
Pada folder project yang sama:
A. Buatlah sebuah class bernama “PosisiKarakterGame”
B. Tambahkan implementasi yang menerapkan kasus di bawah ini menggunakan teknik state-based construction (asumsikan state awal adalah berdiri):
C. Berikan implementasi tambahkan berdasarkan hasil mod dari NIM
D. Berikan implementasi tambahkan berdasarkan hasil mod dari NIM

1. NIM % 3 == 0:

- Pada saat TombolS ditekan, maka akan ada output “tombol arah bawah ditekan”
- Pada saat TombolW ditekan, maka akan ada output “tombola rah atas ditekan”

2. NIM % 3 == 1:

- Pada saat state berubah ke “Berdiri”, akan ada output “posisi standby”
- Pada saat state berubah ke “Tengkurap”, akan ada output “posisi istirahat”

3. NIM % 3 == 2:

- Pada saat state berubah dari “Terbang” ke “Jongkok”, ada output “posisi landing”
- Pada saat state berubah dari “Berdiri” ke “Terbang”, ada output “posisi take off”

E. Tambahkan kode implementasi yang memanggil/mensimulasi perubahan state di class utama atau
method main:

1. Pastikan semua perubahan state disimulasikan
2. Pastikan semua ouput yang ada di bagian C dapat dihasilkan pada saat run

**Input**

- posisiKarakterGame

```js
class PosisiKarakterGame {
  constructor(NIM) {
    this.NIM = NIM;
    this.state = "Berdiri";
  }

  changeState(newState) {
    this.state = newState;
  }

  simulateKeyPress(key) {
    if (this.NIM % 3 === 0) {
      if (key === "S") {
        console.log("Tombol arah bawah ditekan");
      } else if (key === "W") {
        console.log("Tombol arah atas ditekan");
      }
    } else if (this.NIM % 3 === 1) {
      if (this.state === "Berdiri") {
        console.log("Posisi standby");
      } else if (this.state === "Tengkurap") {
        console.log("Posisi istirahat");
      }
    } else if (this.NIM % 3 === 2) {
      if (this.state === "Terbang") {
        console.log("Posisi take off");
      } else if (this.state === "Jongkok") {
        console.log("Posisi landing");
      }
    }
  }

  getState() {
    return this.state;
  }
}

module.exports = PosisiKarakterGame;
```

- index

```js
const KodeBuah = require("./kodeBuah");
const PosisiKarakterGame = require("./posisiKarakterGame");

const kodeBuah = new KodeBuah();
console.log("Kode Buah Apel: " + kodeBuah.getKodeBuah("Apel"));
console.log("Kode Buah Pisang: " + kodeBuah.getKodeBuah("Pisang"));

const posisiKarakter = new PosisiKarakterGame(123456);
posisiKarakter.simulateKeyPress("S");
posisiKarakter.simulateKeyPress("W");

console.log("Posisi karakter: " + posisiKarakter.getState());
```

**Output**

![output]![image](https://github.com/user-attachments/assets/30d9c840-60d5-483d-a564-d103c27daf8f)


---
