const electron = require("electron");

const { BrowserWindow } = electron;

let addWind;

const addWindow = () => {
  addWind = new BrowserWindow({
    width: 250,
    height: 200,
    title: 'Add shopping list item',
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,

    }
  });
  
  addWind.loadFile('addWindow.html')
  addWind.on('closed', () => {
    addWind = null;
  })
};
const closeAddWindow = () => {
  addWind.close();
  addWind = null;
}
module.exports = {addWindow, closeAddWindow};