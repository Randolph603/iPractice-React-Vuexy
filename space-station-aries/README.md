# Space Station - Aries

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## :monkey_face: Template
Project is based on Vuexy. more details:
* [Docs](https://pixinvent.com/demo/vuexy-react-admin-dashboard-template/documentation/docs/)
* [Demo](https://pixinvent.com/demo/vuexy-react-admin-dashboard-template/landing/)

## :+1: Target :whale:
* Database from TC Cloud
* **CRA Website** or **Electron** windows/mac desktop app

## :student: Tech keypoints
### Web Vitals

Web Vitals是Google的一项重大举措，旨在为质量信号提供统一的指导，这对于在Web上提供出色的用户体验来说很重要。

### Adding a Sass Stylesheet
> npm install node-sass -D

### Electron

Electron make it easy to display css+html as desktop application on windows and mac.

> Step 1 install packages
`npm i electron electron-is-dev wait-on concurrently cross-env -P`
* electron (core packages)
* electron-is-dev (detected whether run under dev or not)
* wait-on (wait-on is a cross-platform command line utility which will wait for files, ports, sockets, and http(s) resources to become available)
* concurrently (make it Run multiple commands concurrently)
* cross-env

> Step 2 Add commond scrpts

```json
"scripts": {
    ...
    "dev": "concurrently -k \"cross-env BROWSER=none npm start\" \"npm:electron\"",
    "electron": "wait-on tcp:3000 && electron ."
  },
```

> Step 3 Add electron.js for app windows
```json
{
    ...
    "main": "public/electron.js",
}
```

```javascript
const path = require('path')
const { app, BrowserWindow } = require('electron')
const isDev = require('electron-is-dev')

function createWindow() {
    // Create the browser window.
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    })

    // and load the index.html of the app.
    // win.loadFile("index.html");
    win.loadURL(isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../build/index.html')}`)
    // Open the DevTools.
    if (isDev) {
        win.webContents.openDevTools({ mode: 'detach' })
    }
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(createWindow)

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
```


### lazy, Suspense
React.lazy and Suspense are not yet available for server-side rendering

### react-toastify
Super easy notification [link](https://www.npmjs.com/package/react-toastify)

### resolve-url-loader vs sass-loader
react-script has its build-in webpack and we need to modify it's config under node_modules, which is inconvenient. Considering react-app-rewired

### react-app-rewired
此工具可以在不 'eject' 也不创建额外 react-scripts 的情况下修改 create-react-app 内置的 webpack 配置，然后你将拥有 create-react-app 的一切特性，且可以根据你的需要去配置 webpack 的 plugins, loaders 等。

* 在根目录中创建一个 config-overrides.js 文件
* 替换 package.json 中 scripts 执行部分
```diff
  /* package.json */
  "scripts": {
-   "start": "react-scripts start",
+   "start": "react-app-rewired start",
-   "build": "react-scripts build",
+   "build": "react-app-rewired build",
-   "test": "react-scripts test --env=jsdom",
+   "test": "react-app-rewired test --env=jsdom",
    "eject": "react-scripts eject"
}
```

> npm i react-app-rewired react-app-rewire-sass-rule react-app-rewire-postcss react-app-rewire-alias -D
