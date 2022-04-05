const { app, nativeTheme, BrowserWindow, Menu } = require("electron");

const updater = require("./update");
const initIpc = require("./ipc");
const path = require("path");
const log = require("electron-log");

const Store = require("electron-store");
const store = new Store();
const mode = process.argv[2];
const isDev = mode == "dev";
const config = require("./config.js");
const Server = require("./server.js");

/*隐藏electron创听的菜单栏*/
Menu.setApplicationMenu(null);
nativeTheme.themeSource = "system";

let server = null;
let win = null;

// 单例启动
const gotTheLock = app.requestSingleInstanceLock();
if (!gotTheLock) {
  app.quit();
} else {
  app.on("second-instance", (event, commandLine, workingDirectory) => {
    // 当运行第二个实例时,将会聚焦到win这个窗口
    if (win) {
      if (win.isMinimized()) win.restore();
      win.focus();
    }
  });
  // 创建 win, 加载应用的其余部分, etc...
  app.whenReady().then(async () => {
    createWindow();
    app.on("activate", () => {
      if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
      }
    });
  });
}

app.on("window-all-closed", () => {
  // 存储store数据
  if (process.platform !== "darwin") {
    app.quit();
    server && server.close();
  }
});

function createWindow() {
  win = new BrowserWindow({
    frame: false,
    width: 1300,
    height: 760,
    minWidth: 1200,
    minHeight: 760,
    x: 0,
    y: 0,
    webPreferences: {
      nodeIntegration: true, // 渲染进程中 使用require 配置
      contextIsolation: false, // 渲染进程中 使用require 配置
      webviewTag: true,
      allowDisplayingInsecureContent: true,
      webSecurity: false,
      allowRunningInsecureContent: true,
    },
    icon: path.join(__dirname, "./assets/icon.ico"),
  });
  if (!isDev) {
    updater(win);
  }
  initIpc(win);

  win.on("ready-to-show", (e) => {
    // 启动后
  });

  if (isDev) {
    win.webContents.openDevTools({ mode: "undocked" });

    win.loadURL("http://localhost:3000/");
  } else {
    const addr = `http://${config.host}:${config.port}`;

    server = Server.createServer(path.join(app.getAppPath(), "../build"));
    Server.listen(() => {
      win.loadURL(`${addr}/index.html`);
    });
  }
}
