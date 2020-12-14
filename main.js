const path = require("path");
const url = require("url");
// eslint-disable-next-line import/no-extraneous-dependencies
const { app, BrowserWindow } = require("electron");

const isDev = process.env.NODE_ENV === "development";
let mainWindow;

function createMainWindow() {
  mainWindow = new BrowserWindow({
    width: 1100,
    height: 800,
    show: false,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  const indexPath = isDev
    ? url.format({
        protocol: "http:",
        host: "localhost:8080",
        pathname: "index.html",
        slashes: true,
      })
    : url.format({
        protocol: "file:",
        pathname: path.join(__dirname, "dist", "index.html"),
        slashes: true,
      });

  mainWindow.loadURL(indexPath);

  mainWindow.once("ready-to-show", () => {
    mainWindow.show();
  });

  mainWindow.on("closed", () => {
    mainWindow = null;
  });
}

app.on("ready", createMainWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (mainWindow === null) {
    createMainWindow();
  }
});
