// ** React Imports
import { lazy, Suspense } from 'react'
import ReactDOM from 'react-dom';
// ** Performace Optimize
import reportWebVitals from './reportWebVitals';

// ** Redux Imports
import { Provider } from 'react-redux';
import { store } from './redux/storeConfig/store';

// ** ThemeColors Context
import { ThemeContext } from './utility/context/ThemeColors';

// ** Spinner (Splash Screen)
import SpinnerComponent from './components/spinner/FallbackSpinner';

// ** React Toastify & Toast
import { ToastContainer } from 'react-toastify';
import '@styles/react/libs/toastify/toastify.scss';

// ** React Perfect Scrollbar
import 'react-perfect-scrollbar/dist/css/styles.css';

// ** Core styles
import './@core/assets/fonts/feather/iconfont.css';
import './@core/scss/core.scss';
import './index.scss';

import { PublicClientApplication } from "@azure/msal-browser";
import { MsalProvider } from "@azure/msal-react";
import { msalConfig } from "./auth/authConfig";
const msalInstance = new PublicClientApplication(msalConfig);


// const LazyApp = lazy(() => import('./App'));
const DelayLazyApp = lazy(() => {
  return Promise.all([
    import("./App"),
    new Promise(resolve => setTimeout(resolve, 2000))
  ])
    .then(([moduleExports]) => moduleExports);
});

ReactDOM.render(
  <Provider store={store}>
    <Suspense fallback={<SpinnerComponent />}>
      <MsalProvider instance={msalInstance}>
        <ThemeContext>
          <DelayLazyApp />
          <ToastContainer newestOnTop />
        </ThemeContext>
      </MsalProvider>
    </Suspense>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
