const SayaTubeVideo = require("./sayaTubeVideo");
const SayaTubeUser = require("./sayaTubeUser");

function main() {
  const username = "Danuar Ihza Mahendra";
  const user = new SayaTubeUser(username);

  const judulFilm = [
    "Review Film Masa Lalu Tetap Pemenangnya oleh Danuar Ihza Mahendra",
    "Review Film Interstellar oleh Danuar Ihza Mahendra",
    "Review Film Inception oleh Danuar Ihza Mahendra",
    "Review Film Parasite oleh Danuar Ihza Mahendra",
    "Review Film The Social Network Danuar Ihza Mahendra",
    "Review Film The Dark Knight oleh Danuar Ihza Mahendra",
    "Review Film Whiplash oleh Danuar Ihza Mahendra",
    "Review Film Your Name oleh Danuar Ihza Mahendra",
    "Review Film Everything Everywhere All At Once oleh Danuar Ihza Mahendra",
    "Review Film The Secret Life of Walter Mitty oleh Danuar Ihza Mahendra",
  ];

  for (let judul of judulFilm) {
    const video = new SayaTubeVideo(judul);
    video.increasePlayCount(Math.floor(Math.random() * 100000));
    user.addVideo(video);
  }

  console.log("=== Detail Video ===");
  user.uploadedVideos.forEach((video) => video.printVideoDetails());

  console.log("\n=== Statistik User ===");
  user.printAllVideoPlaycount();
  console.log(`Total Play Count: ${user.getTotalVideoPlayCount()}`);
}

main();