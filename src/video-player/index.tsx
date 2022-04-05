import React, { useEffect, useMemo, useRef, useState } from "react";
import "./index.scss";
import { Slider } from "antd";
import { Input } from "antd";
import {
  CaretRightFilled,
  FolderOpenFilled,
  PauseOutlined,
  StepBackwardFilled,
  StepForwardFilled,
  PlusOutlined,
} from "@ant-design/icons";
import { useStore } from "Provider";
import { formatter2mill, mill2formatter } from "utils/tools";
import * as PIXI from "pixi.js";
import { Tween } from "utils/animate/tween";

let timer: NodeJS.Timeout;
let animateTimer: any;
export default function VideoPlayer() {
  const [store, setStore] = useStore();
  const videoEl = useRef<HTMLVideoElement>(null);
  const canvasEl = useRef<HTMLCanvasElement>(null);

  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [videoPath, setVideoPath] = useState("");
  const [videoWH, setVideoWH] = useState({ width: 0, height: 0 });

  const changeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    let files = e.target.files;
    if (files && files[0]) {
      const file = files[0];
      let path = (file as unknown as { path: string }).path;
      // let path = "https://prd-bs-oss.oss-cn-shanghai.aliyuncs.com/mkl/25.mp4";
      setVideoPath(path);
    }
  };
  const cancelAnimationFrame = () => {
    window.cancelAnimationFrame(animateTimer);
  };
  const setVideoBaseInfo = (currentVideo: HTMLVideoElement) => {
    setDuration(currentVideo.duration - 0.1);
    setVideoWH({
      width: currentVideo.videoWidth,
      height: currentVideo.videoHeight,
    });
    setCurrentTime(0);
    setPlayFlag(false);
  };
  const videoOnload = () => {
    console.log("videoloaded");
    cancelAnimationFrame();
    clearInterval(timer);

    if (videoEl.current) {
      setVideoBaseInfo(videoEl.current);
      setStore({
        archive: false,
        playFlag: false,
        canvas: {
          canvasRef: canvasEl,
          width: videoEl.current.videoWidth,
          height: videoEl.current.videoHeight,
        },
        video: {
          videoRef: videoEl,
          path: videoEl.current.src,
          width: videoEl.current.videoWidth,
          height: videoEl.current.videoHeight,
          duration: videoEl.current.duration - 0.1,
          currentTime: videoEl.current.currentTime,
        },
        currentWidgetId: store.currentWidgetId,
        currentWidgetSaveFlag: store.currentWidgetSaveFlag,
        activeWidget: [...store.activeWidget],
        widgetList: {},
      });
    }
  };

  useEffect(() => {
    (window as any).PIXI = PIXI;
    (window as any).Tween = Tween;
  }, []);

  let app = useMemo(
    () =>
      new PIXI.Application({
        width: videoWH.width,
        height: videoWH.height,
        view: canvasEl.current as unknown as HTMLCanvasElement,
        preserveDrawingBuffer: true, // webgl toDataUrl
        antialias: true, // default: false 反锯齿
        resolution: 1, // default: 1 分辨率
        transparent: true, // default: false 透明度
      }),
    [videoWH, canvasEl]
  );

  let tickerMap = useMemo(
    () => new Map<number, Set<(t: number) => void>>(),
    [videoWH, canvasEl]
  );

  const videoTimeUpdate = (e: React.ChangeEvent<HTMLVideoElement>) => {
    console.log("videoTimeUpdate:", e.target.currentTime);
    setCurrentTime(e.target.currentTime);
    if (!playFlag) {
      draw(e.target.currentTime);
    }
  };

  useEffect(() => {
    setStore({
      ...store,
      video: {
        ...store.video,
        currentTime: currentTime,
      },
    });
  }, [currentTime]);

  const [time, setTime] = useState<string>("00:00:00:00");

  const [silderTime, setSilderTime] = useState<number>(0);

  const [playFlag, setPlayFlag] = useState(false);
  const [lastPlayFlag, setLastPlayFlag] = useState(false);

  const seekVideoTime = (value: number) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      if (videoEl && videoEl.current) {
        videoEl.current.currentTime = value / 1000;
      }
    }, 40);
  };

  useEffect(() => {
    setTime(mill2formatter(silderTime));
    seekVideoTime(silderTime);
  }, [silderTime]);

  const changeSliderTime = (millTime: number) => {
    console.log("changeSliderTime");
    setSilderTime(millTime);
  };

  const enterChange = (e: any) => {
    let value = e.target.value;
    let millTime = formatter2mill(value);

    setTime(mill2formatter(millTime));
    setSilderTime(millTime);

    seekVideoTime(millTime);
  };
  const changeTime = (e: any) => {
    let value = e.target.value;
    if (value)
      if (/^([0-9]|:)*$/g.test(value)) {
        if (value.match(/:/g) && value.match(/:/g).length > 3) {
          return;
        }
        setTime(value);
      }
  };

  const backward = () => {
    if (silderTime - 100 > 0) {
      setSilderTime(silderTime - 100);
    } else {
      setSilderTime(0);
    }
  };
  const forward = () => {
    if (silderTime + 100 < store.video.duration * 1000) {
      setSilderTime(silderTime + 100);
    } else {
      setSilderTime(store.video.duration * 1000);
    }
  };

  const currentTimeFrame = () => {
    if (videoEl && videoEl.current) {
      console.log("currentTimeFrame:", videoEl.current.currentTime);

      let time = videoEl.current.currentTime;
      let millTime = time * 1000;
      setSilderTime(millTime);
      setTime(mill2formatter(millTime));

      animateTimer = window.requestAnimationFrame(currentTimeFrame);

      draw(time);
    }
  };
  const draw = (currentTime: number) => {
    for (const ticker of tickerMap.values()) {
      for (const fn of ticker) {
        fn(currentTime);
      }
    }
  };

  useEffect(() => {
    console.log("currentWidgetSaveFlag", store);

    if (store.currentWidgetSaveFlag) {
      try {
        // 重裝
        app.stage.removeChildren();

        let currentWidget = store.activeWidget.find(
          (widget) => widget.id == store.currentWidgetId
        );
        if (currentWidget) {
          let id = currentWidget.id;
          tickerMap.set(id, new Set<(t: number) => void>());
          const widgetStartTime = (t: number | string) => {
            if (typeof t == "string") {
              if (currentWidget) currentWidget.start = formatter2mill(t) / 1000;
            } else {
              if (currentWidget) currentWidget.start = t;
            }
          };
          const widgetEndTime = (t: number | string) => {
            if (typeof t == "string") {
              if (currentWidget) currentWidget.end = formatter2mill(t) / 1000;
            } else {
              if (currentWidget) currentWidget.end = t;
            }
          };
          eval(
            currentWidget.jscode +
              "\n" +
              "widget(app, widgetStartTime, widgetEndTime, tickerMap.get(id))"
          );
          store.widgetList[id] = currentWidget;
        }

        Object.values(store.widgetList).forEach((widget) => {
          let id = widget.id;
          tickerMap.set(id, new Set<(t: number) => void>());
          console.log(tickerMap.get(id));

          const widgetStartTime = (t: number | string) => {
            if (typeof t == "string") {
              widget.start = formatter2mill(t) / 1000;
            } else {
              widget.start = t;
            }
          };

          const widgetEndTime = (t: number | string) => {
            if (typeof t == "string") {
              widget.end = formatter2mill(t) / 1000;
            } else {
              widget.end = t;
            }
          };
          eval(
            widget.jscode +
              "\n" +
              "widget(app, widgetStartTime, widgetEndTime, tickerMap.get(id))"
          );
        });
        draw(currentTime);

        setStore({
          ...store,
          widgetList: {
            ...store.widgetList,
          },
        });
        // widget(app, widgetStartTime, widgetEndTime, tickerMap.get(id));
      } catch (error) {
        console.log(error);
      }
    }
  }, [store.currentWidgetSaveFlag]);

  const videoPlayHandle = () => {
    setPlayFlag(true);

    animateTimer = window.requestAnimationFrame(currentTimeFrame);
  };
  const palyVideo = () => {
    if (videoEl && videoEl.current) {
      videoEl.current.play();
    }
  };

  const videoPauseHandle = () => {
    setPlayFlag(false);

    cancelAnimationFrame();
  };

  const pauseVideo = () => {
    if (videoEl && videoEl.current) {
      videoEl.current.pause();
    }
  };

  // 滑动的时候状态暂存不播放
  const silderMouseDown = () => {
    console.log("down");
    setLastPlayFlag(playFlag);
    pauseVideo();
  };
  const silderMouseUp = () => {
    console.log("up");
    if (lastPlayFlag) palyVideo();
  };
  return (
    <div className="video-player-container">
      {/* 播放窗口 */}
      <div className="canvas-player">
        <div
          className="canvas-player-box"
          style={{
            position: videoPath != "" ? "relative" : "fixed",
            top: videoPath != "" ? "0" : "-1000px",
          }}
        >
          <video
            ref={videoEl}
            src={videoPath}
            onPlay={videoPlayHandle}
            onPause={videoPauseHandle}
            onLoadedData={videoOnload}
            onTimeUpdate={videoTimeUpdate}
          ></video>
          <canvas
            style={{
              transform: videoWH.width
                ? `translate(-50%, -50%) scale(${
                    videoWH.width > videoWH.height
                      ? 640 / videoWH.width
                      : 480 / videoWH.height
                  })`
                : "",
            }}
            ref={canvasEl}
            width={videoWH.width}
            height={videoWH.height}
          ></canvas>
        </div>
        <label
          htmlFor="file-id"
          className="canvas-player-label"
          style={{ position: videoPath == "" ? "static" : "fixed" }}
        >
          <div className="canvas-player-file">
            <PlusOutlined />
            <div className="canvas-player-file-tip">ADD VIDEO</div>

            <input
              onChange={changeFile}
              className="canvas-player-file-input"
              type="file"
              id="file-id"
            />
          </div>
        </label>
      </div>
      {/* 控制台 */}
      <div className="control-panel">
        <div onMouseUp={silderMouseUp} onMouseDownCapture={silderMouseDown}>
          <Slider
            onChange={changeSliderTime}
            max={duration * 1000}
            min={0}
            value={silderTime}
            disabled={false}
            tooltipVisible={false}
          />
        </div>
        <div className="control-panel-footer">
          <Input
            onChange={changeTime}
            onPressEnter={enterChange}
            onBlur={enterChange}
            value={time}
            min={0}
            placeholder="Basic usage"
          />
          <div className="control-panel-action">
            <StepBackwardFilled title="BACK 100ms" onClick={backward} />
            <StepForwardFilled title="FORWARD 100ms" onClick={forward} />
            {!playFlag ? (
              <CaretRightFilled title="PLAY" onClick={palyVideo} />
            ) : (
              <PauseOutlined title="PAUSE" onClick={pauseVideo} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
