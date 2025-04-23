const SayaTubeVideo = require("./sayaTubeVideo");

class SayaTubeUser {
  constructor(username) {
    if (!username || typeof username !== "string" || username.length > 100) {
      throw new Error("Username harus string dan maksimal 100 karakter.");
    }

    this.username = username;
    this.uploadedVideos = [];
  }

  addVideo(video) {
    if (!(video instanceof SayaTubeVideo)) {
      throw new Error(
        "Hanya objek dari kelas SayaTubeVideo yang bisa ditambahkan."
      );
    }

    this.uploadedVideos.push(video);
  }

  getTotalVideoPlayCount() {
    return this.uploadedVideos.reduce(
      (total, video) => total + video.playCount,
      0
    );
  }

  printAllVideoPlaycount() {
    console.log(`User: ${this.username}`);
    this.uploadedVideos.forEach((video, index) => {
      console.log(`Video ${index + 1} judul: ${video.title}`);
    });
  }
}

module.exports = SayaTubeUser;