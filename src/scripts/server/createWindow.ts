import { app, BrowserWindow } from 'electron'
import { createProtocol } from 'vue-cli-plugin-electron-builder/lib'
interface Options {
  width: number;
  height: number;
}

/**
 * @description Создает еще одно окно приложения
 * @param {Options} options
 */
export default async function createWindow (options: Options): Promise<BrowserWindow> {
  // Мы должны создавать окно
  const window = new BrowserWindow({
    ...options,
    webPreferences: {
      enableRemoteModule: true,
      nodeIntegration: true,
      webSecurity: false
    }
  })
  // Делать проверку на разработку, если это разработка, то подключаем плагины для разработки
  if (process.env.WEBPACK_DEV_SERVER_URL) {
    createProtocol('app')
    await window.loadURL(process.env.WEBPACK_DEV_SERVER_URL as string)
    window.webContents.openDevTools()
  } else {
    createProtocol('app')
    await window.loadURL('app://./index.html')
  }
  // Функция должна возвращать объект окна для работы с ним если потребуется
  return window
}
