const ipcRenderer = window.require("electron").ipcRenderer;

export default function useIpcRenderer() {
  return [ipcRenderer];
}
