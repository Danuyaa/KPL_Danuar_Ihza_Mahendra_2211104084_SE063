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