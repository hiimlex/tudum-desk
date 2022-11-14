const path = require("path");

const { app, BrowserWindow, ipcMain } = require("electron");
const isDev = require("electron-is-dev");
const ipc = ipcMain;

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    minWidth: 720,
    minHeight: 420,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      nodeIntegrationInWorker: false,
      worldSafeExecuteJavaScript: true,
      preload: path.join(app.getAppPath(), "public/pre-load.js"),
    },
    frame: false,
  });

  win.loadURL(
    isDev
      ? "http://localhost:3000"
      : `file://${path.join(__dirname, "../build/index.html")}`
  );

  if (isDev) {
    win.webContents.openDevTools();
  }

  ipc.on("closeMain", () => {
    win.close();
  });

  ipc.on("minimizeMain", () => {
    win.minimize();
  });
}

app.whenReady().then(createWindow);

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
