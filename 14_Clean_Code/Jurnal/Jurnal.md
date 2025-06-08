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
- Source Code SayaTubeVideo.js
```
class SayaTubeVideo {
  constructor(title) {
    if (title === null) throw new Error("Judul video tidak boleh null");
    if (title.length > 200) throw new Error("Judul video maksimal 200 karakter");

    this.id = this.#generateRandomId();
    this.title = title;
    this.playCount = 0;
  }

  // Generate ID acak untuk video
  #generateRandomId() {
    return Math.floor(10000 + Math.random() * 90000);
  }

  // Tambahkan jumlah play dengan validasi
  increasePlayCount(amount) {
    try {
      if (amount < 0) throw new Error("Play count tidak boleh negatif");
      if (amount > 25000000) throw new Error("Maksimal penambahan 25.000.000 per panggilan");

      if (this.playCount + amount > Number.MAX_SAFE_INTEGER) {
        throw new Error("Overflow play count");
      }

      this.playCount += amount;
    } catch (error) {
      console.error(`[Video Error] ${error.message}`);
    }
  }

  // Cetak detail video
  printVideoDetails() {
    console.log(`Video Details:
ID: ${this.id}
Title: ${this.title}
Play Count: ${this.playCount.toLocaleString()}\n`);
  }
}

module.exports = SayaTubeVideo;
```

- Source Code SayaTubeUser.js
```
const SayaTubeVideo = require('./SayaTubeVideo');

class SayaTubeUser {
  constructor(username) {
    if (username === null) throw new Error("Username tidak boleh null");
    if (username.length > 100) throw new Error("Username maksimal 100 karakter");

    this.id = this.#generateRandomId();
    this.username = username;
    this.uploadedVideos = [];
  }

  // Generate ID acak untuk user
  #generateRandomId() {
    return Math.floor(10000 + Math.random() * 90000);
  }

  // Tambahkan video dengan validasi
  addVideo(video) {
    try {
      if (video === null) throw new Error("Video tidak boleh null");
      if (!(video instanceof SayaTubeVideo)) throw new Error("Tipe video tidak valid");
      if (video.playCount >= Number.MAX_SAFE_INTEGER) {
        throw new Error("Play count video mencapai batas maksimal");
      }

      if (this.uploadedVideos.length >= 10) {
        throw new Error("Maksimal 10 video per user");
      }

      this.uploadedVideos.push(video);
    } catch (error) {
      console.error(`[User Error] ${error.message}`);
    }
  }

  // Hitung total play count semua video
  getTotalVideoPlayCount() {
    return this.uploadedVideos.reduce(
      (total, video) => total + video.playCount, 0
    );
  }

  // Cetak judul maksimal 8 video
  printAllVideoPlayCount() {
    console.log(`User: ${this.username}`);
    this.uploadedVideos.slice(0, 8).forEach((video, index) => {
      console.log(`Video ${index + 1} judul: ${video.title}`);
    });
  }
}

module.exports = SayaTubeUser;
```

- Source Code main.js
```
const SayaTubeUser = require('./SayaTubeUser');
const SayaTubeVideo = require('./SayaTubeVideo');

const namaPraktikan = "danuyaa";

const filmList = [
  "Jumbo",
  "The Siege at Thorn High",
  "Captain America: Brave New World ",
  "1 Kakak 7 Ponakan",
  "Perayaan Mati Rasa",
  "Komang"

];

try {
  const user = new SayaTubeUser(namaPraktikan);

  // Tambahkan 10 video
  filmList.forEach((film) => {
    const title = `Review Film ${film} oleh ${namaPraktikan}`;
    const video = new SayaTubeVideo(title);

    video.increasePlayCount(Math.floor(Math.random() * 25000000));
    user.addVideo(video);
  });

  console.log("\nDaftar Video (Maks 8):");
  user.printAllVideoPlayCount();

  // Uji overflow
  console.log("\nTesting Overflow:");
  const stressVideo = new SayaTubeVideo("Stress Test");
  for (let i = 0; i < 100; i++) {
    stressVideo.increasePlayCount(25000000);
  }

  // Uji precondition gagal
  console.log("\nTesting Precondition:");
  try {
    new SayaTubeVideo("a".repeat(201));
  } catch (e) {
    console.log(e.message);
  }

  try {
    user.addVideo(null);
  } catch (e) {
    console.log(e.message);
  }

} catch (error) {
  console.error(`[System Error] ${error.message}`);
}
```
---
**Output**
---
![image](https://github.com/user-attachments/assets/2cf6742c-1ab7-4822-a24b-fd7cd7244599)
