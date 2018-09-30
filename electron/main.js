const {
  app,
  BrowserWindow
} = require('electron');
var path = require('path');

let mainWindow;

function createWindow() {
  mainWindow=new BrowserWindow({
    width: 200,
    height: 200,
    icon: path.join(__dirname,'icon.png')
  });
  mainWindow.loadFile('clock.html');
}

app.on('ready', createWindow);
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit()
  }
});
app.on('activate', function () {
  if (mainWindow === null) {
    createWindow()
  }
});