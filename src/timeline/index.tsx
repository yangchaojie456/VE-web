import React, { useEffect, useRef, useState } from "react";
import "./index.scss";
import GridLayout, { WidthProvider, Responsive } from "react-grid-layout";
import "/node_modules/react-grid-layout/css/styles.css";
import "/node_modules/react-resizable/css/styles.css";
import { Twidget, useStore } from "Provider";
import { Button, Input, Modal, Popover } from "antd";
import { formatter2mill, mill2formatter } from "utils/tools";
import {
  Menu,
  Item,
  Separator,
  Submenu,
  useContextMenu,
  ItemParams,
} from "react-contexify";
import "react-contexify/dist/ReactContexify.css";
import {
  MinusCircleOutlined,
  MinusOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";

const ResponsiveGridLayout = WidthProvider(Responsive);
export default function Timeline() {
  const [store, setStore] = useStore();
  const [videoDur, setVideoDur] = useState(10);
  const [widgetArr, setWidgetArr] = useState<Twidget[]>([]);
  const [layout, setLayout] = useState<any[]>([]);
  const [layoutWidth, setLayoutWidth] = useState(0);
  const [scale, setScale] = useState(1);
  const [widgetName, setWidgetName] = useState("");
  const [currentId, setCurrentId] = useState(0);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const MENU_ID = "abcdef";
  const layoutRef = useRef<HTMLDivElement>(null);
  const { show } = useContextMenu({
    id: MENU_ID,
  });

  useEffect(() => {
    if (layoutRef.current) {
      setLayoutWidth(layoutRef.current.offsetWidth * scale);
      window.onresize = function (e) {
        console.log(e);
        if (layoutRef.current) {
          setLayoutWidth(layoutRef.current.offsetWidth * scale);
        }
      };
    }
  }, [scale]);

  useEffect(() => {
    if (store.video.duration) setVideoDur(Math.ceil(store.video.duration));
  }, [store.video.duration]);

  useEffect(() => {
    let widgetArray = Object.values(store.widgetList);
    setWidgetArr(widgetArray);

    console.log(widgetArray);

    let widgetArray2 = widgetArray.map((widget) => {
      return {
        i: String(widget.id),
        x: widget.start,
        y: 0,
        w: widget.end - widget.start,
        h: 1,
        static: true,
      };
    });

    setLayout(widgetArray2);

    // setVideoDur(store.video.duration);
  }, [store.widgetList]);

  // console.log(videoDur);
  // console.log(layout);
  // console.log(widgetArr);

  const formatTime = (time: any) => {
    if (typeof time == "number") {
      return mill2formatter(time * 1000);
    } else {
      return time;
    }
  };
  const handleItemClick = (args: ItemParams<any, any>) => {
    const { data, props, event } = args;
    let id = props;
    if (data == "rename") {
      setIsModalVisible(true);
      setCurrentId(id);
    } else if (data == "delete") {
      console.log(store.widgetList);
      delete store.widgetList[id];
      console.log(store.widgetList);

      setStore({
        ...store,
        currentWidgetSaveFlag: false,
        widgetList: {
          ...store.widgetList,
        },
      });
    }
  };
  const modifyWidgetName = () => {
    store.widgetList[currentId].name = widgetName;

    store.activeWidget.forEach((widget) => {
      if (widget.id == currentId) {
        widget.name = widgetName;
      }
    });

    setStore({
      ...store,
    });
    setIsModalVisible(false);
  };
  const changeStoreCurrentId = (id: number) => {
    setStore({
      ...store,
      currentWidgetId: id,
    });
  };
  return (
    <div className="timeline-container">
      <div className="timeline-container-des">
        <div className="timeline-container-des-time">
          {/* <ul>
            <li>00:00:00:00</li>
            <li>00:00:00:00</li>
          </ul> */}
          {/* <p>Widgets that have been added</p> */}
          <p>
            <PlusCircleOutlined
              style={{ fontSize: "18px", color: "#CACCCE" }}
              onClick={() => {
                setScale(scale + 1);
              }}
            />
            <MinusOutlined style={{ fontSize: "18px", color: "#CACCCE" }} />
            <MinusCircleOutlined
              style={{ fontSize: "18px", color: "#CACCCE" }}
              onClick={() => {
                setScale(scale - 1 > 1 ? scale - 1 : 1);
              }}
            />
          </p>
        </div>
        <Modal
          key={1}
          destroyOnClose={true}
          title="Widget Name"
          onCancel={handleCancel}
          visible={isModalVisible}
          footer={[
            <Button key={2} size="small" onClick={modifyWidgetName}>
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
        <div className="timeline-container-des-part">
          <Menu id={MENU_ID}>
            <Item onClick={handleItemClick} data="rename">
              rename
            </Item>
            <Item onClick={handleItemClick} data="delete">
              delete
            </Item>
          </Menu>
          <div className="timeline-container-des-part-box" ref={layoutRef}>
            <GridLayout
              className="layout"
              style={{ width: 100 * scale + "%" }}
              layout={layout}
              cols={videoDur}
              width={layoutWidth}
              rowHeight={50}
            >
              {widgetArr.map((widget) => {
                return (
                  <div
                    onContextMenu={(event: React.MouseEvent) => {
                      event.preventDefault();
                      show(event, {
                        props: widget.id,
                      });
                    }}
                    onClick={() => {
                      changeStoreCurrentId(widget.id);
                    }}
                    title={`start:${formatTime(
                      widget.start
                    )} - end:${formatTime(widget.end)}`}
                    className={
                      "timeline-container-des-part-widget" +
                      (store.currentWidgetId == widget.id ? " current" : "")
                    }
                    key={String(widget.id)}
                  >
                    <p>{widget.name}</p>
                  </div>
                );
              })}
            </GridLayout>
          </div>
        </div>
      </div>
    </div>
  );
}
