const path = require("path")
const { app, ipcMain, BrowserWindow } = require("electron")
const isDev = require("electron-is-dev")
const AuthProvider = require('./AuthProvider')

const authProvider = new AuthProvider();
let mainWindow;

function createWindow() {
    // Create the browser window.
    mainWindow = new BrowserWindow({
        width: 1200,
        height: 800,
        webPreferences: {
            nodeIntegration: true,
            enableRemoteModule: true,
            contextIsolation: false,
            // TODO: fix diff config target and require func
            // nodeIntegration: false, // is default value after Electron v5
            // contextIsolation: true, // protect against prototype pollution
            // enableRemoteModule: false, // turn off remote
            // preload: path.join(__dirname, "preload.js") // use a preload script
        }
    })

    // and load the index.html of the app.
    // win.loadFile("index.html")
    mainWindow.loadURL(isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../build/index.html')}`)
    // Open the DevTools.
    if (isDev) {
        mainWindow.webContents.openDevTools({ mode: 'detach' })
    }
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
    createWindow()
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
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

// Event handlers
ipcMain.on('LOGIN', async (event, arg) => {
    await authProvider.login(mainWindow);
    mainWindow.loadURL(isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../build/index.html')}`);
});
ipcMain.on('LOGOUT', async () => {
    await authProvider.logout();
    mainWindow.loadURL(isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../build/index.html')}`);
});


ipcMain.handle('GETACCOUNT', async () => {
    const account = await authProvider.getAccount();
    console.log('GETACCOUNT', account);
    return account
});

