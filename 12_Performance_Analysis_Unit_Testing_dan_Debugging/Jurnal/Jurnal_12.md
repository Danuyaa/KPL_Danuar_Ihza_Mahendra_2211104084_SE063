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

- Source Code matematikaLibraries.js
- Source Code main.js
```
const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 400,
    height: 300,
    webPreferences: {
      preload: path.join(__dirname, 'renderer.js'),
      nodeIntegration: true,
      contextIsolation: false
    }
  });

  win.loadFile('index.html');
}

app.whenReady().then(() => {
  createWindow();
});
```

- Source Code renderer.js
```
window.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('angkaInput');
  const btn = document.getElementById('cekTandaBtn');
  const output = document.getElementById('output');

  btn.addEventListener('click', () => {
    const nilai = Number(input.value);

    if (isNaN(nilai)) {
      output.textContent = 'Hasil: Masukkan angka yang valid';
      return;
    }

    if (nilai > 0) {
      output.textContent = 'Hasil: Positif';
    } else if (nilai < 0) {
      output.textContent = 'Hasil: Negatif';
    } else {
      output.textContent = 'Hasil: Nol';
    }
  });
});
            
```
- Source Code index.html
```
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Cek Tanda Angka</title>
</head>
<body>
  <h2>Masukkan Angka:</h2>
  <input type="number" id="angkaInput" />
  <button id="cekTandaBtn">Cek Tanda</button>
  <p id="output">Hasil: </p>

  <script src="renderer.js"></script>
</body>
</html>
unit test             
```
- Source Code package.json
```
{
  "name": "tpmodul12_2211104076",
  "version": "1.0.0",
  "main": "main.js",
  "scripts": {
    "start": "electron .",
    "test": "node test/test.js"
  },
  "devDependencies": {
    "electron": "^29.0.0"
  }
}          
```
- Source Code test.js
```
const assert = require('assert');
const { cariTandaBilangan } = require('../renderer');

try {
  assert.strictEqual(cariTandaBilangan(-5), "Negatif");
  assert.strictEqual(cariTandaBilangan(10), "Positif");
  assert.strictEqual(cariTandaBilangan(0), "Nol");

  console.log("✅ Semua unit test berhasil.");
} catch (e) {
  console.error("❌ Test gagal:", e.message);
}         
```
**Output**
---
![image](https://github.com/user-attachments/assets/1b7f93ed-2333-42de-ae69-724005327578)
![image](https://github.com/user-attachments/assets/2e5c0e62-8595-40b8-928d-065ee4330b8f)
![image](https://github.com/user-attachments/assets/9f85f82a-f362-423a-9af2-2a11a827f5e6)


