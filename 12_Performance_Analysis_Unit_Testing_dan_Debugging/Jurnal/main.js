const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  // Membuat jendela browser baru dengan ukuran 400x400
  const win = new BrowserWindow({
    width: 400,
    height: 400,
    webPreferences: {
      // Menggunakan preload script untuk komunikasi antara renderer dan main process
      preload: path.join(__dirname, 'renderer.js'),
      // Mengaktifkan nodeIntegration jika diperlukan
      nodeIntegration: true,
      // Mematikan contextIsolation (pastikan ini sesuai kebutuhan keamanan aplikasi)
      contextIsolation: false,
    },
  });

  // Memuat file HTML utama
  win.loadFile('index.html');
}

// Membuat jendela saat aplikasi siap
app.whenReady().then(createWindow);

// Event handling agar aplikasi tetap berjalan di macOS meskipun semua window ditutup
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

// Membuat window baru jika aplikasi diaktifkan kembali (khusus macOS)
app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
