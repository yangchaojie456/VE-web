import React, {
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import * as monaco from "monaco-editor/esm/vs/editor/editor.api";

export type Twidget = {
  id: number;
  name: string;
  start: number;
  end: number;
  code: string | undefined;
  jscode: string | undefined;
  codeError: monaco.editor.IMarker[];
  saveFlag: boolean;
  lastModify: number;
};
export type Tstore = {
  archive: boolean;
  playFlag: boolean;
  video: {
    videoRef: React.RefObject<HTMLVideoElement> | null;
    path: string;
    width: number;
    height: number;
    duration: number; // seconds
    currentTime: number; // seconds
  };
  canvas: {
    canvasRef: React.RefObject<HTMLCanvasElement> | null;
    width: number;
    height: number;
  };
  currentWidgetId: number;
  currentWidgetSaveFlag: boolean;
  activeWidget: Twidget[];
  widgetList: {
    [key: number]: Twidget;
  };
};

const AppContext = React.createContext<
  [Tstore, React.Dispatch<React.SetStateAction<Tstore>>] | undefined
>(undefined);

export default function Provider({ children }: { children: React.ReactNode }) {
  const [store, setStore] = useState<Tstore>({
    archive: false,
    playFlag: false,
    video: {
      videoRef: null,
      path: "",
      width: 0,
      height: 0,
      duration: 0,
      currentTime: 0,
    },
    canvas: {
      canvasRef: null,
      width: 0,
      height: 0,
    },
    currentWidgetId: 0,
    currentWidgetSaveFlag: false,
    activeWidget: [],
    widgetList: {},
  });

  return (
    <AppContext.Provider value={[store, setStore]}>
      {children}
    </AppContext.Provider>
  );
}

export function useStore() {
  const store = useContext(AppContext);

  if (store) {
    return store;
  }
  return [];
}
