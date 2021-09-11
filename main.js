const electron = require('electron');

const { app, BrowserWindow } = electron;

function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600
  })

  win.loadFile('mainWindow.html')
}

app.whenReady().then(() => {
  createWindow()
})