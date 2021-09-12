const electron = require("electron");
const menuTemplate = require('./src/menu/menuTemplate');
const {closeAddWindow} = require('./src/menu/menuAction/addItem');

const { BrowserWindow, Menu, app, ipcMain } = electron;
let win;

const createWindow = () => {
    win = new BrowserWindow({
    width: 300,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    }
  });

  win.loadFile('mainWindow.html')

  win.on('closed', () => {
    app.quit()
  })
}

ipcMain.on('item:add', (event, item) => {
  win.webContents.send('item:add', item);
  closeAddWindow();
})



app.whenReady().then(() => {
  createWindow();
  const clearItems = () => {
    win.webContents.send('item:clear');
  }
  const mainMenu = Menu.buildFromTemplate(menuTemplate(clearItems));
  
  Menu.setApplicationMenu(mainMenu);
});
