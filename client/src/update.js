const { autoUpdater } = require("electron-updater");

let url = "https://prd-bs-oss.oss-cn-shanghai.aliyuncs.com/down/updates/";

module.exports = function updater(win) {
  // 配置安装包远端服务器
  autoUpdater.setFeedURL(url);
  //执行自动更新检查
  autoUpdater.checkForUpdates();

  // 自动更新模块
  autoUpdater.on("error", function (error) {});
  autoUpdater.on("checking-for-update", function () {
    win.webContents.send("message", "开始检测自动更新");
  });
  autoUpdater.on("update-available", function (info) {});
  autoUpdater.on("update-not-available", function (info) {});

  // 更新下载进度事件
  autoUpdater.on("download-progress", function (progressObj) {
    win.webContents.send("updateAppProgress", progressObj);
  });

  // 更新下载完成事件
  autoUpdater.on(
    "update-downloaded",
    function (
      event,
      releaseNotes,
      releaseName,
      releaseDate,
      updateUrl,
      quitAndUpdate
    ) {
      autoUpdater.quitAndInstall();
    }
  );
};
