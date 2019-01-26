
const {app, BrowserWindow} = require('electron')
const path = require('path');
let mainWindow

function createWindow () {
    const browserOptions = {
        width: 800,
        height: 600,
        maximizeable: false,
        icon: path.join(__dirname, '/public/img/logo.png')
    };
  mainWindow = new BrowserWindow(browserOptions)
  mainWindow.loadFile('index.html')

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()


  mainWindow.on('closed', function () {
    mainWindow = null
  })
}


app.on('ready', createWindow)


app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  if (mainWindow === null) {
    createWindow()
  }
})

