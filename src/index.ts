import { app, BrowserWindow, dialog, ipcMain } from "electron";
import fs from "fs";
import path from "path";

declare const MAIN_WINDOW_WEBPACK_ENTRY: string;
declare const MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY: string;

const musicExtensions = [
  ".au",
  ".snd",
  ".mid",
  ".rmi",
  ".mp3",
  ".mp4",
  ".aif",
  ".aifc",
  ".aiff",
  ".m3u",
  ".ra",
  ".ram",
  ".ogg",
  ".wav",
];

async function handleFolderOpen() {
  const { canceled, filePaths } = await dialog.showOpenDialog({
    title: "Open folder with local files you want to import.",
    properties: ["openDirectory"],
  });

  if (canceled) return [];

  const dirPath = filePaths[0];

  const dirFiles = fs.readdirSync(dirPath);

  const dirMusicFiles = dirFiles.filter((file) =>
    musicExtensions.some((ext) => ext === path.extname(file))
  );

  return dirMusicFiles;
}

// eslint-disable-next-line global-require
if (require("electron-squirrel-startup")) {
  app.quit();
}

const createWindow = (): void => {
  const mainWindow = new BrowserWindow({
    height: 1080,
    width: 1920,
    webPreferences: {
      contextIsolation: true,
      sandbox: true,
      preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY,
    },
  });

  mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);

  mainWindow.webContents.openDevTools();
};

app.on("ready", () => {
  ipcMain.handle("dialog:openFolder", handleFolderOpen);

  createWindow();
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

process.env.ELECTRON_DISABLE_SECURITY_WARNINGS = "true";
