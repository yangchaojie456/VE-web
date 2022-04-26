import {
  BorderOutlined,
  CloseOutlined,
  MinusOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import {
  message,
  Menu,
  Dropdown,
  Button,
  Input,
  Space,
  Modal,
  notification,
  Progress,
} from "antd";
// import ts from "typescript";
import useIpcRenderer from "hooks/ipcRenderer";
import { useStore } from "Provider";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { defaultValue } from "editor/extra-lib/defaultValue";
import "./index.scss";
import useShell from "hooks/shell";

let timer: any;
let captureData: Array<any> = [];
let timeRange = {
  index: 0,
  startTime: 0,
  endTime: 0,
};

export default function Header() {
  const [store, setStore] = useStore();
  const [widgetName, setWidgetName] = useState("");

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [timeBucket, setTimeBucket] = useState<number[]>([]);
  const [ipcRenderer] = useIpcRenderer();

  const [isModalVisibleProgress, setIsModalVisibleProgress] = useState(false);
  const [captureProgress, setCaptureProgress] = useState(0);
  const [cachePngProgress, setCachePngProgress] = useState(0);
  const [compositeProgress, setCompositeProgress] = useState(0);
  const [showSave, setShowSave] = useState(false);

  const showTweenExample = () => {
    ipcRenderer.send("showTweenExample");
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setWidgetName("");
  };
  const minimize = () => {
    console.log("最小化");
    ipcRenderer.send("minimize");
  };
  const maximize = () => {
    console.log("最大化");
    ipcRenderer.send("maximize");
  };
  const closeProgram = () => {
    console.log("关闭程序");
    ipcRenderer.send("close");
  };
  const cancelExport = () => {
    console.log("取消");
    if (store.video.videoRef && store.video.videoRef.current)
      store.video.videoRef.current.pause();

    clearInterval(timer);
    setTimeBucket([]);
    ipcRenderer.send("stopExport");
    setIsModalVisibleProgress(false);
  };
  const saveExport = () => {
    ipcRenderer.send("save-export");
  };
  const exportVideo = () => {
    if (!store.video.videoRef) {
      message.info("Please add video first", 3);
      return;
    }
    setIsModalVisibleProgress(true);
    if (store.video.videoRef.current) {
      store.video.videoRef.current.currentTime = 0;
      store.video.videoRef.current.muted = true;

      let widgets = Object.values(store.widgetList);
      let timeBucketTemp: number[] = new Array(
        Math.ceil(store.video.duration) + 1
      );
      widgets.forEach((widget) => {
        let startTime = Math.floor(widget.start);
        let endTime = Math.ceil(widget.end) + 1;

        timeBucketTemp.fill(1, startTime, endTime);
      });
      setTimeBucket(timeBucketTemp);
      // 导出成功后 setTimeBucket([]);
      console.log(timeBucket);

      if (store.canvas.canvasRef && store.canvas.canvasRef.current) {
        let canvas = store.canvas.canvasRef.current;

        timeRange.index = 0;
        setCompositeProgress(0);
        setCachePngProgress(0);
        setCaptureProgress(0);
        setShowSave(false);
        let totalIndex =
          (timeBucketTemp.join("").match(/1/g) || []).length * 25;

        // init timeRange.startTime timeRange.endTime
        if (store.video.videoRef && store.video.videoRef.current) {
          console.log(timeBucketTemp);
          console.log("=========max");
          let nextTime = timeBucketTemp.indexOf(1);
          if (nextTime == -1) {
            message.info("no current widget", 3);
            return;
          }
          timeRange.startTime = nextTime;
          let i = nextTime;
          while (timeBucketTemp[i] == 1) {
            i++;
          }
          timeRange.endTime = i - 1;
          console.log(timeRange.startTime);
        }
        captureData = [];
        timer = setInterval(() => {
          setCaptureProgress(Math.floor((timeRange.index / totalIndex) * 100));
          captureData.push({
            name: "yang",
            index: timeRange.index++,
            startTime: timeRange.startTime,
            endTime: timeRange.endTime,
            base64_URL: canvas.toDataURL(),
          });
          console.log(timeRange.index);
          console.log(new Date().getTime());
        }, 40);

        ipcRenderer.send("start-parsing", { videoPath: store.video.path });
      }

      setTimeout(() => {
        if (store.video.videoRef && store.video.videoRef.current)
          store.video.videoRef.current.play();
      }, 0);
      console.log("play");
    }

    console.log("导出视频");
  };

  useEffect(() => {
    if (timeBucket.length == 0) return;
    console.log("time======", store.video.currentTime);
    let min = Math.floor(store.video.currentTime);
    let max = Math.ceil(store.video.currentTime);
    if (!(timeBucket[min] == 1 && timeBucket[max] == 1)) {
      console.log("timeBucket[min] == 1 && timeBucket[max] == 1");
      let nextTime = timeBucket.indexOf(1, max);
      if (nextTime == -1) {
        if (store.video.videoRef && store.video.videoRef.current) {
          store.video.videoRef.current.pause();
          clearInterval(timer);
          setTimeBucket([]);
          ipcRenderer.send("sendScreenshot", { captureData });
          // ipcRenderer.send("end-parsing");
          setCaptureProgress(100);
          ipcRenderer.on("cache-data", (event: any, data: number) => {
            setCachePngProgress(Math.floor(data * 100));
          });
          ipcRenderer.on("ffmpeg-progress", (event: any, data: number) => {
            console.log(data);

            let totalFrame = store.video.duration * 25;
            setCompositeProgress(Math.ceil((data / totalFrame) * 100));
          });
          ipcRenderer.on("ffmpeg-finish", (event: any, data: number) => {
            setShowSave(true);
          });
        }
        return;
      }
      if (store.video.videoRef && store.video.videoRef.current) {
        store.video.videoRef.current.currentTime = nextTime;

        timeRange.index = nextTime * 25;
        timeRange.startTime = nextTime;
        let i = nextTime;
        while (timeBucket[i] == 1) {
          i++;
        }
        timeRange.endTime = i - 1;
      }
    }
  }, [store.video.currentTime]);

  const addWidget = () => {
    if (!store.video.videoRef) {
      message.info("Please add video first", 3);
      return;
    }
    setIsModalVisible(true);
  };

  const createWidgetName = () => {
    if (widgetName) {
      setIsModalVisible(false);
      let id = new Date().getTime();
      let newWidget = {
        id: id,
        name: widgetName,
        start: 0,
        end: 0,
        code: defaultValue,
        jscode: "",
        codeError: [],
        saveFlag: false,
        lastModify: new Date().getTime(),
      };

      if (store.activeWidget.length == 0) {
        store.activeWidget.push(newWidget);
      } else {
        let index = store.activeWidget.findIndex(
          (widget) => widget.id == store.currentWidgetId
        );

        store.activeWidget.splice(index + 1, 0, newWidget);
      }
      setStore({
        ...store,
        currentWidgetId: id,
        currentWidgetSaveFlag: false,
        activeWidget: [...store.activeWidget],
      });

      setWidgetName("");

      console.log("add widget");
    }
  };

  const saveWidget = () => {
    if (!store.currentWidgetId) {
      message.info("Please add widgets first", 3);
      return;
    }
    // 保存部件
    let index = store.activeWidget.findIndex(
      (widget) => widget.id == store.currentWidgetId
    );
    let currentWidget = store.activeWidget[index];
    if (currentWidget.codeError.length > 0) {
      currentWidget.codeError.forEach((err) => {
        notification[err.severity == 1 ? "warning" : "error"]({
          duration: null,
          message:
            (err.severity == 1 ? "warning" : "error") +
            " " +
            err.endLineNumber +
            ":" +
            err.endColumn,
          description: err.message,
        });
      });
      return;
    }

    currentWidget.saveFlag = true;
    currentWidget.lastModify = new Date().getTime();

    const compilerOptions = {
      compilerOptions: {
        baseUrl: "./src",
        target: "es5",
        lib: ["dom", "dom.iterable", "esnext"],
        downlevelIteration: true,
        allowJs: true,
        skipLibCheck: true,
        esModuleInterop: true,
        allowSyntheticDefaultImports: true,
        strict: true,
        forceConsistentCasingInFileNames: true,
        noFallthroughCasesInSwitch: true,
        module: "esnext",
        moduleResolution: "node",
        resolveJsonModule: true,
        isolatedModules: true,
        noEmit: true,
        jsx: "react-jsx",
      },
    };
    // @ts-ignore
    const tsc = ts.transpileModule(currentWidget.code || "", compilerOptions);
    // ipcRenderer.send("ts2js", currentWidget.code);
    // ipcRenderer.once("ts2js", function (event: any, code: any) {
    // console.log(code);

    currentWidget.jscode = tsc.outputText;
    setStore({
      ...store,
      currentWidgetSaveFlag: true,
      activeWidget: [...store.activeWidget],
      // widgetList: {
      //   ...store.widgetList,
      //   [store.currentWidgetId]: currentWidget,
      // },
    });
    // });
    console.log("save widget");
  };

  const menu = (
    <Menu>
      <Menu.Item>
        <label htmlFor="file-id">
          <span>choose video</span>
        </label>
      </Menu.Item>
    </Menu>
  );
  const info = () => {
    message.info("to be continued");
  };
  const [shell] = useShell();
  return (
    <div className="header-container">
      <div className="header-container-title">
        <div className="header-container-title-left">
          <div className="header-container-title-logo">
            <img src="/logo.png" alt="" />
          </div>
          <div className="header-container-menu">
            <Dropdown overlay={menu} placement="bottomLeft" trigger={["click"]}>
              {/* <Button onClick={()=>{console.log(123)}}>File</Button> */}
              <span className="header-container-menu-item">File</span>
            </Dropdown>
            <span
              key={2}
              className="header-container-menu-item"
              onClick={exportVideo}
            >
              Export
            </span>
            <span
              onClick={() => {
                shell.openExternal("https://github.com/yangchaojie456/VE-web");
              }}
              key={3}
              className="header-container-menu-item"
            >
              Doc
            </span>
          </div>
        </div>
        <div className="header-container-title-right"></div>
      </div>
      <div className="header-container-action">
        <div className="header-container-action-widget">
          <button onClick={addWidget}>New Widget</button>
          <button onClick={saveWidget}>Save Widget</button>
          <button onClick={info}>Material</button>
          <button onClick={info}>Share Widget</button>
          <button onClick={showTweenExample}>Tween Ex.</button>
        </div>
        <div className="header-container-action-app">
          <MinusOutlined style={{ fontSize: "14px" }} onClick={minimize} />
          <BorderOutlined style={{ fontSize: "13px" }} onClick={maximize} />
          <CloseOutlined style={{ fontSize: "14px" }} onClick={closeProgram} />
        </div>
      </div>
      <div className="header-container-action-widget-name">
        <Modal
          key={1}
          destroyOnClose={true}
          title="Widget Name"
          onCancel={handleCancel}
          visible={isModalVisible}
          footer={[
            <Button key={2} size="small" onClick={createWidgetName}>
              OK
            </Button>,
          ]}
        >
          <Input
            key={3}
            autoFocus={true}
            value={widgetName}
            status={widgetName == "" ? "warning" : ""}
            onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
              setWidgetName(e.target.value);
            }}
            style={{ width: "100%" }}
            placeholder=""
          />
        </Modal>
      </div>

      <Modal
        title="Render..."
        visible={isModalVisibleProgress}
        closable={false}
        maskClosable={false}
        footer={[
          showSave ? (
            <Button key={1} size="small" onClick={saveExport}>
              Save
            </Button>
          ) : null,
          <Button key={2} size="small" onClick={cancelExport}>
            Cancel
          </Button>,
        ]}
      >
        <p>Since requestAnimationFrame, make sure your program is visible </p>
        <span>capture</span>
        <Progress percent={captureProgress} />
        <span>cache data</span>
        <Progress percent={cachePngProgress} />
        <span>composite</span>
        <Progress percent={compositeProgress} />
      </Modal>
    </div>
  );
}
