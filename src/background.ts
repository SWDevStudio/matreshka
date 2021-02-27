'use strict'

import { app, protocol, ipcMain } from 'electron'
import installDevtools from '@/scripts/server/installDevtools'


// Scheme must be registered before the app is ready
protocol.registerSchemesAsPrivileged([
  { scheme: 'app', privileges: { secure: true, standard: true } }
])
// Слушает события electron, когда приложение будет готово, выполнит функцию
app.on('ready', installDevtools)

// Выполнить когда все окна приложения будут закрыты
app.on('window-all-closed', () => { app.quit() })

ipcMain.on('message', async (event, args) => {})
