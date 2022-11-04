type IpcWindow = Window &
  typeof globalThis & { api: { openFolder(): unknown } };

export default IpcWindow;
