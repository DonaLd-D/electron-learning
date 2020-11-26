const { app, BrowserWindow, BrowserView,globalShortcut} = require('electron')
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
  globalShortcut.register('ctrl+e',()=>{
    win.loadURL('https://jspang.com')  
  })
  win.loadFile('index7.html')
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

app.on('will-quit',function(){
  //注销全局快捷键的监听
  globalShortcut.unregister('ctrl+e')
  globalShortcut.unregisterAll()

})
