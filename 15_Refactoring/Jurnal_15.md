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
- Source Code modul15_2211104076.js
```
const fs = require("fs");
const readline = require("readline");
const crypto = require("crypto");

// Fungsi hashing password
function hashPassword(password) {
  return crypto.createHash("sha256").update(password).digest("hex");
}

// Validasi input
function isValidUsername(username) {
  const regex = /^[A-Za-z]+$/;
  return username.length >= 4 && username.length <= 20 && regex.test(username);
}

function isValidPassword(password, username) {
  const regexSpecial = /[!@#$%^&*]/;
  return (
    password.length >= 8 &&
    password.length <= 20 &&
    regexSpecial.test(password) &&
    !password.toLowerCase().includes(username.toLowerCase())
  );
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function register() {
  rl.question("Masukkan username: ", (username) => {
    if (!isValidUsername(username)) {
      console.log("❌ Username tidak valid. Harus 4-20 huruf alfabet ASCII.");
      return rl.close();
    }

    rl.question("Masukkan password: ", (password) => {
      if (!isValidPassword(password, username)) {
        console.log("❌ Password tidak valid. Panjang 8-20 karakter, mengandung karakter unik, dan tidak boleh mengandung username.");
        return rl.close();
      }

      const hashed = hashPassword(password);
      const user = { username, password: hashed };

      let users = [];
      if (fs.existsSync("users.json")) {
        users = JSON.parse(fs.readFileSync("users.json"));
      }

      // Cek apakah user sudah terdaftar
      if (users.find(u => u.username === username)) {
        console.log("❌ Username sudah terdaftar.");
        return rl.close();
      }

      users.push(user);
      fs.writeFileSync("users.json", JSON.stringify(users, null, 2));
      console.log("✅ Registrasi berhasil.");
      rl.close();
    });
  });
}

function login() {
  rl.question("Masukkan username: ", (username) => {
    rl.question("Masukkan password: ", (password) => {
      const hashed = hashPassword(password);
      if (!fs.existsSync("users.json")) {
        console.log("❌ Tidak ada user terdaftar.");
        return rl.close();
      }

      const users = JSON.parse(fs.readFileSync("users.json"));
      const user = users.find(u => u.username === username && u.password === hashed);
      if (user) {
        console.log("✅ Login berhasil!");
      } else {
        console.log("❌ Username atau password salah.");
      }
      rl.close();
    });
  });
}

rl.question("Ketik '1' untuk Register, '2' untuk Login: ", (choice) => {
  if (choice === "1") {
    register();
  } else if (choice === "2") {
    login();
  } else {
    console.log("Pilihan tidak valid.");
    rl.close();
  }
});
```

- Source Code users.json
```
[
  {
    "username": "Danuyaa",
    "password": "a2603d8400c8cf008ac5039d02b795b8447c5a1c3910e569c97f872138af5a0d"
  }
]
```
---
**Output**
---
![image](https://github.com/user-attachments/assets/a3add607-58a5-4d59-ba4c-0885aa62acc4)
