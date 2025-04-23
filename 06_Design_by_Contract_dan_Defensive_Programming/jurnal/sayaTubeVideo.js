class SayaTubeVideo {
    constructor(title) {
      if (!title || typeof title !== "string" || title.length > 100) {
        throw new Error("Judul video harus string dan maksimal 100 karakter.");
      }
  
      this.id = this.#generateRandomId();
      this.title = title;
      this.playCount = 0;
    }
  
    #generateRandomId() {
      return Math.floor(10000 + Math.random() * 90000);
    }
  
    increasePlayCount(count) {
      if (typeof count !== "number" || count <= 0 || count > 10000000) {
        throw new Error(
          "Penambahan playCount harus antara 1 sampai 10.000.000."
        );
      }
  
      this.playCount += count;
    }
  
    printVideoDetails() {
      console.log(`ID: ${this.id}`);
      console.log(`Title: ${this.title}`);
      console.log(`Play Count: ${this.playCount}`);
    }
  }
  
  module.exports = SayaTubeVideo;