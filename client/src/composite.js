const path = require("path");
const fs = require("fs");
const { spawn } = require("child_process");
const log = require("electron-log");
const { app, dialog, ipcMain } = require("electron");
const cachePath = path.join(app.getPath("temp"), "/VE_web");

let ffmpeg = "ffmpeg";
if (app.isPackaged) {
  ffmpeg = path.join(
    path.dirname(app.getPath("exe")),
    "/resources/ffmpeg/bin/ffmpeg.exe"
  );
} else {
  ffmpeg = path.join(app.getAppPath(), "../ffmpeg/bin/ffmpeg.exe");
}

module.exports = function exportVideo(videoPath, endTime, fileName, win) {
  win.webContents.send("ffmpeg-start");

  ipcMain.once("stopExport", () => {
    ls.kill();
  });

  const ls = spawn(ffmpeg, [
    "-i",
    path.normalize(videoPath).replace("file:\\", ""),
    "-i",
    path.resolve(cachePath, "./cache/watermark_%d.png"),
    "-filter_complex",
    "overlay=0:0:enable='between(t,0," + endTime + ")'",
    "-max_muxing_queue_size",
    "1024",
    "-y",
    path.resolve(cachePath, "./cache/" + fileName),
  ]);
  ls.stdout.on("data", (data) => {
    log.info(`stdout: ${data}`);
  });

  ls.stderr.on("data", (data) => {
    let frame = /frame=(.*)fps=/g.exec(data.toString());
    if (frame) {
      // console.log(frame[1])
      win.webContents.send("ffmpeg-progress", frame[1].trim());
    }
    log.info(`stderr: ${data}`);
  });

  ls.on("close", (code) => {
    win.webContents.send("ffmpeg-finish");
    log.info(`child process exited with code ${code}`);
    if (code === 0) {
      saveDialog();
    }
  });

  function saveDialog() {
    dialog
      .showSaveDialog({
        title: "Save File",
        filters: [{ name: "Movies", extensions: ["mp4"] }],
      })
      .then((res) => {
        log.info(res.filePath);
        if (res.filePath) {
          let exportVideo = path.resolve(cachePath, "./cache/" + fileName);

          var readStream = fs.createReadStream(exportVideo);

          var writeStream = fs.createWriteStream(res.filePath);

          //覆盖原有数据
          readStream.pipe(writeStream);
        }
      })
      .catch((err) => {
        log.info(err);
      });
  }
};
