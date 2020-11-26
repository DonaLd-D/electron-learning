const { app, BrowserWindow, BrowserView} = require('electron')
require('@electron/remote/main').initialize()

function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true
    }
  })

  win.webContents.openDevTools()
  win.loadFile('index3.html')
  require('./main/main.js')

//   var view = new BrowserView()
//   win.setBrowserView(view)
//   view.setBounds({x:0,y:100,width:600, height:400})
//   view.webContents.loadURL('https://jspang.com')
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})
