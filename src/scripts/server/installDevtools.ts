import installExtension, { VUEJS_DEVTOOLS } from 'electron-devtools-installer'
import createWindow from '@/scripts/server/createWindow'
import { BrowserWindow } from 'electron'
const isDevelopment = process.env.NODE_ENV !== 'production'

export default async function installDevtools (): Promise<BrowserWindow> {
  if (isDevelopment && !process.env.IS_TEST) {
    // Install Vue Devtools
    try {
      await installExtension(VUEJS_DEVTOOLS)
    } catch (e) {
      console.error('Vue Devtools failed to install:', e.toString())
    }
  }
  return await createWindow({
    width: 800,
    height: 600
  })
}
