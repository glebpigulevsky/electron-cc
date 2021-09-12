const win = require('../../../main');

const clearItems = () => {
  win.webContents.send('item:clear')
}
module.exports = clearItems;