const {app, BrowserWindow} = require('electron') 
const url = require('url') 
const path = require('path')  
let win  


function createWindow() { 
   win = new BrowserWindow({width: 1024, height: 768}) 
   win.loadURL(url.format ({ 
      pathname: path.join(__dirname, 'app/contactos/contactos.html'), 
      protocol: 'file:', 
      slashes: true 
   })) 
}  

app.on('ready', createWindow) 
