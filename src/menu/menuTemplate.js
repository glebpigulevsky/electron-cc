const electron = require("electron");
const { addWindow } = require("./menuAction/addItem");

const { app } = electron;
const menuTemplate = (clearItems) => {
  return [
    {
      label: "File",
      submenu: [
        {
          label: "Add item",
          click() {
            addWindow();
          },
          accelerator: process.platform === "darwin" ? "Command+A" : "Ctrl+A",
        },
        {
          label: "Clear item",
          click() {
            clearItems();
          },
        },
        {
          label: "Quit",
          accelerator: process.platform === "darwin" ? "Command+Q" : "Ctrl+Q",
          click() {
            app.quit();
          },
        },
      ],
    },
  ]
};

if (process.env.NODE_ENV !== "production") {
  menuTemplate().push({
    label: "Developer tools",
    submenu: [
      {
        label: "Dev.Tools",
        accelerator: process.platform === "darwin" ? "Command+I" : "Ctrl+I",
        click(item, focusedWindow) {
          focusedWindow.toggleDevTools();
        },
      },
      { role: "reload" },
    ],
  });
}

module.exports = menuTemplate;
