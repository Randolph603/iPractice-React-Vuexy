import { toast, Slide } from 'react-toastify'

// ** Handle User Login
export const handleLogin = data => {
  return dispatch => {
    dispatch({
      type: 'LOGIN',
      data
    })

    localStorage.setItem('userData', JSON.stringify(data))
  }
}

// ** Handle User Logout
export const handleLogout = instance => {
  return dispatch => {
    dispatch({ type: 'LOGOUT' })

    const userAgent = navigator.userAgent.toLowerCase();
    const isElectron = userAgent.indexOf(' electron/') !== -1;
    if (isElectron) {
      const electron = require("electron");
      electron.ipcRenderer.send('LOGOUT');
    } else {
      // instance.logoutPopup().then(res => {
      instance.logoutRedirect().then(res => {
        dispatch(handleLogout())
        toast.success(
          'Sign out success!',
          { transition: Slide, hideProgressBar: true, autoClose: 2000 }
        )
      }).catch(e => {
        console.error(e)
      })

      localStorage.removeItem('userData')
    }
  }
}
