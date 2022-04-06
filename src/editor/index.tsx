import "./index.scss";
import * as monacoEditor from "monaco-editor/esm/vs/editor/editor.api";
import MonacoEditor, { monaco } from "react-monaco-editor";
import {
  LegacyRef,
  useCallback,
  useEffect,
  useReducer,
  useRef,
  useState,
} from "react";
import addExtraLib from "./extra-lib/index";
import { useStore } from "Provider";
import { defaultValue } from "./extra-lib/defaultValue";
import { Tabs, Button, Modal, notification } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import useIpcRenderer from "hooks/ipcRenderer";
// import ts from "typescript";

const { TabPane } = Tabs;

let timer: NodeJS.Timeout;
export default function Editor() {
  const [store, setStore] = useStore();
  const [ipcRenderer] = useIpcRenderer();

  const [defaultCode, setDefaultCode] = useState(defaultValue);
  const [code, setCode] = useState("");
  const [errors, setErrors] = useState<monacoEditor.editor.IMarker[]>([]);
  const [visible, setVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const editorRef = useRef(null);

  const editorDidMount = (
    editor: monacoEditor.editor.IStandaloneCodeEditor,
    monaco: typeof monacoEditor
  ) => {
    handleEditorValidate(editor, monaco);
    console.log("editorDidMount", editor);
    editor.focus();
    addExtraLib(monaco);
  };

  // 错误提示
  let changeMarkersListener: monacoEditor.IDisposable;
  useEffect(() => {
    return () => {
      changeMarkersListener?.dispose();
    };
  }, []);
  const handleEditorValidate = (
    editor: monacoEditor.editor.IStandaloneCodeEditor,
    monaco: typeof monacoEditor
  ) => {
    changeMarkersListener = monaco.editor.onDidChangeMarkers((uris) => {
      const editorUri = editor.getModel()?.uri;

      if (editorUri) {
        const currentEditorHasMarkerChanges = uris.find(
          (uri) => uri.path === editorUri.path
        );
        if (currentEditorHasMarkerChanges) {
          const markers = monaco.editor.getModelMarkers({
            resource: editorUri,
          });
          setErrors(markers);
        }
      }
    });
  };
  const onChange = (
    newValue: string,
    e: monacoEditor.editor.IModelContentChangedEvent
  ) => {
    setCode(newValue);
  };
  useEffect(() => {
    if (store.currentWidgetId) {
      if (store.activeWidget[activeIndex].code != code) {
        store.activeWidget[activeIndex].saveFlag = false;
        store.activeWidget[activeIndex].code = code;
      }
      store.activeWidget[activeIndex].codeError = errors;
      store.activeWidget[activeIndex].lastModify = new Date().getTime();

      setStore({
        ...store,
        currentWidgetSaveFlag: false,
        activeWidget: [...store.activeWidget],
      });
    }
  }, [code, errors]);

  useEffect(() => {
    if (store.currentWidgetId) {
      console.log("useEffect", store.currentWidgetId);

      let index = store.activeWidget.findIndex(
        (widget) => widget.id == Number(store.currentWidgetId)
      );
      console.log("赋值active", index);

      if (editorRef.current) {
        let MonacoEditor = editorRef.current as MonacoEditor;
        let editor =
          MonacoEditor.editor as monacoEditor.editor.IStandaloneCodeEditor;
        editor && editor.focus();

        if (index > -1) {
          let code = store.activeWidget[index].code;
          editor.setValue(code || "");
          setCode(code || "");
        }
      }
      setActiveIndex(index);
    }
  }, [store.currentWidgetId]);

  useEffect(() => {
    if (editorRef.current) {
      let MonacoEditor = editorRef.current as MonacoEditor;
      let editor =
        MonacoEditor.editor as monacoEditor.editor.IStandaloneCodeEditor;

      editor.addAction({
        id: "ctrl+s-yang", // 菜单项 id
        label: "保存", // 菜单项名称
        keybindings: [monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyS], // 绑定快捷键
        run: () => {
          console.log("保存", activeIndex);
          setTimeout(() => {
            saveWidget();
          }, 500);
        },
      });
    }
  }, [activeIndex, code, errors]);

  const onTabsChange = (activeId: string) => {
    console.log("onTabsChange:" + activeId);
    setStore({
      ...store,
      currentWidgetId: Number(activeId),
    });
  };

  const onTabsEdit = (
    targetKey:
      | string
      | React.MouseEvent<Element, MouseEvent>
      | React.KeyboardEvent<Element>,
    action: "add" | "remove"
  ) => {
    console.log("onTabsEdit:", targetKey, action);
    if (action == "remove") {
      let index = store.activeWidget.findIndex(
        (widget) => widget.id == Number(targetKey)
      );
      setStore({
        ...store,
        currentWidgetId: Number(targetKey),
      });
      if (store.activeWidget[index].saveFlag == false) {
        setVisible(true);
        return;
      }
      removeFromActive(index);
    }
  };
  const removeFromActive = (index: number) => {
    store.activeWidget.splice(index, 1);
    setStore({
      ...store,
      activeWidget: [...store.activeWidget],
    });
    setVisible(false);
    // show last modify file
    if (store.activeWidget.length > 0) {
      let lastModifyWidget = store.activeWidget[0];
      store.activeWidget.forEach((widget) => {
        if (widget.lastModify > lastModifyWidget.lastModify) {
          lastModifyWidget = widget;
        }
      });
      setStore({
        ...store,
        currentWidgetId: lastModifyWidget.id,
      });
    } else {
      setStore({
        ...store,
        currentWidgetId: 0,
      });
    }
  };
  const saveWidget = (close?: boolean) => {
    notification.destroy();

    let errors = store.activeWidget[activeIndex].codeError;
    // error?
    if (errors.length > 0) {
      errors.forEach((err) => {
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

    store.activeWidget[activeIndex].saveFlag = true;
    store.activeWidget[activeIndex].lastModify = new Date().getTime();
    console.log(activeIndex, "============");
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
    const tsc = ts.transpileModule(
      store.activeWidget[activeIndex].code || "",
      // @ts-ignore
      compilerOptions
    );
    // ipcRenderer.send("ts2js", store.activeWidget[activeIndex].code);
    // ipcRenderer.once("ts2js", function (event: any, code: any) {
    console.log("回调", activeIndex);
    store.activeWidget[activeIndex].jscode = tsc.outputText;
    setStore({
      ...store,
      currentWidgetSaveFlag: true,
      activeWidget: [...store.activeWidget],
      // widgetList: {
      //   ...store.widgetList,
      //   [store.currentWidgetId]: store.activeWidget[activeIndex],
      // },
    });
    if (close) removeFromActive(activeIndex);
    console.log("save widget", activeIndex);
    // });
  };
  const notSaveWidget = () => {
    notification.destroy();
    removeFromActive(activeIndex);
  };
  const cancelChange = () => {
    setVisible(false);
  };

  console.log("=======");

  return (
    <div className="editor-container">
      <Tabs
        hideAdd
        onChange={onTabsChange}
        onEdit={onTabsEdit}
        activeKey={store.currentWidgetId + ""}
        type="editable-card"
      >
        {store.activeWidget.map((widget) => (
          <TabPane
            closeIcon={
              widget.id == store.currentWidgetId ? (
                <CloseOutlined />
              ) : widget.saveFlag ? (
                <span></span>
              ) : (
                <span>●</span>
              )
            }
            tab={
              <span
                style={{
                  display: "inline-block",
                  minWidth: "30px",
                  textAlign: "center",
                  color: widget.saveFlag ? "#55e5c5" : "#E2C08D",
                }}
              >
                {widget.name ? widget.name : "Untitled"}
              </span>
            }
            key={widget.id}
          ></TabPane>
        ))}
      </Tabs>
      <Modal
        visible={visible}
        onOk={() => {
          saveWidget(true);
        }}
        onCancel={cancelChange}
        footer={[
          <Button
            key="back"
            onClick={() => {
              saveWidget(true);
            }}
          >
            save
          </Button>,
          <Button key="submit" type="primary" onClick={notSaveWidget}>
            not save
          </Button>,
          <Button key="cancel" onClick={cancelChange}>
            cancel
          </Button>,
        ]}
      >
        <p>The file contents have not been saved</p>
      </Modal>
      {store.activeWidget.length ? (
        <MonacoEditor
          ref={editorRef}
          width={"100%"}
          language="typescript"
          theme="vs-dark"
          defaultValue={defaultCode}
          options={{
            minimap: {
              enabled: false,
            },
            automaticLayout: true,
          }}
          onChange={onChange}
          editorDidMount={editorDidMount}
        />
      ) : null}
    </div>
  );
}
