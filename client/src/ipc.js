const { ipcMain, BrowserWindow } = require("electron");
const fs = require("fs-extra");
const path = require("path");
const exportVideo = require("./composite");
const { app, dialog } = require("electron");
const log = require("electron-log");
const config = require("./config.js");
const cachePath = path.join(app.getPath("temp"), "/VE_web");

const pngBase64placeholder = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDozQkMwRjM1RUI0MjUxMUVDQjAyOTgxMzFEQjZCMTExOCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDozQkMwRjM1RkI0MjUxMUVDQjAyOTgxMzFEQjZCMTExOCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjNCQzBGMzVDQjQyNTExRUNCMDI5ODEzMURCNkIxMTE4IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjNCQzBGMzVEQjQyNTExRUNCMDI5ODEzMURCNkIxMTE4Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+4joF3AAAABBJREFUeNpi+P//PwNAgAEACPwC/tuiTRYAAAAASUVORK5CYII=`;
let base64Cache = [];
let base64ObjCache = {};
let videoPath = "";
module.exports = function initIpc(win) {
  ipcMain.on("start-parsing", (event, preload) => {
    base64Cache = [];
    base64ObjCache = {};
    videoPath = preload.videoPath;
    const _dir = path.resolve(cachePath, `./cache/`);
    fs.emptyDir(_dir, (err) => {
      if (err) {
        log.info(err);
      }
    });
  });

  ipcMain.on("sendScreenshot", (event, preload) => {
    let captureData = preload.captureData;
    captureData.forEach((item) => {
      let { name, index, startTime, endTime, base64_URL } = item;
      console.log(startTime, endTime);
      if (!base64ObjCache[`${startTime}_${endTime}`]) {
        base64ObjCache[`${startTime}_${endTime}`] = [];
      }
      base64ObjCache[`${startTime}_${endTime}`].push(base64_URL);
    });

    let cancelFlag = false;
    ipcMain.once("stopExport", () => {
      cancelFlag = true;
    });

    let end = 0;
    Object.keys(base64ObjCache).forEach((key) => {
      end = key.split("_")[1];
    });
    base64Cache = new Array(end * 25);
    base64Cache.fill(pngBase64placeholder);
    // fps 25 处理多余图片
    for (const key in base64ObjCache) {
      if (Object.hasOwnProperty.call(base64ObjCache, key)) {
        const framesArr = base64ObjCache[key];
        let [startTime, endTime] = key.split("_");

        let shouldFrames = (endTime - startTime) * 25;

        let direction = true;
        while (framesArr.length < shouldFrames) {
          if (direction) {
            framesArr.push(pngBase64placeholder);
          } else {
            framesArr.unshift(pngBase64placeholder);
          }
          direction = !direction;
        }
        direction = true;
        while (framesArr.length > shouldFrames) {
          if (direction) {
            framesArr.pop();
          } else {
            framesArr.shift();
          }
          direction = !direction;
        }

        framesArr.forEach((base64png, index) => {
          base64Cache[startTime * 25 + index] = base64png;
        });
      }
    }

    let i = 0;
    new Promise((resolve, reject) => {
      if (cancelFlag) reject();
      base64Cache.forEach((base64_URL, index) => {
        if (cancelFlag) return;

        const base64 = base64_URL.replace(/^data:image\/\w+;base64,/, "");
        const _dir = path.resolve(cachePath, `./cache/`);
        const _path = path.resolve(cachePath, `./cache/watermark_${index}.png`);
        fs.ensureDir(_dir, (err) => {
          if (err) {
            log.info(err);
          } else {
            fs.writeFile(_path, base64, "base64", function (err) {
              if (err) {
                log.info(err);
              } else {
                log.info("写入成功！" + _path);
                i++;
                win.webContents.send("cache-data", i / base64Cache.length);
                if (base64Cache.length == i) {
                  resolve();
                }
              }
            });
          }
        });
      });
    }).then(() => {
      exportVideo(videoPath, end, "export.mp4", win);
    });
  });

  ipcMain.on(
    "screenshot",
    (event, { name, index, startTime, endTime, base64_URL }) => {
      if (!base64ObjCache[`${startTime}_${endTime}`]) {
        base64ObjCache[`${startTime}_${endTime}`] = [];
      }
      base64ObjCache[`${startTime}_${endTime}`].push(base64_URL);
      console.log(`${startTime}_${endTime}`);
    }
  );
  ipcMain.on("minimize", () => {
    win.minimize();
  });
  ipcMain.on("maximize", () => {
    if (win.isMaximized()) {
      win.unmaximize();
    } else {
      win.maximize();
    }
  });
  ipcMain.on("close", () => {
    win.close();
  });

  ipcMain.on("showTweenExample", () => {
    newWin = new BrowserWindow({
      width: 1200,
      height: 600,
      frame: true, //是否显示边缘框
      fullscreen: false, //是否全屏显示
    });
    const mode = process.argv[2];
    const isDev = mode == "dev";

    if (isDev) {
      newWin.loadURL("http://localhost:3000/tween/index.html");
    } else {
      const addr = `http://${config.host}:${config.port}`;

      newWin.loadURL(`${addr}/tween/index.html`);
    }
  });

  ipcMain.on("save-export", () => {
    dialog
      .showSaveDialog({
        title: "Save File",
        filters: [{ name: "Movies", extensions: ["mp4"] }],
      })
      .then((res) => {
        log.info(res.filePath);
        if (res.filePath) {
          let exportVideo = path.resolve(cachePath, "./cache/export.mp4");

          var readStream = fs.createReadStream(exportVideo);

          var writeStream = fs.createWriteStream(res.filePath);

          //覆盖原有数据
          readStream.pipe(writeStream);
        }
      })
      .catch((err) => {
        log.info(err);
      });
  });
};
