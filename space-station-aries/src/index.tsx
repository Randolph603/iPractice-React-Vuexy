// ** React Imports
import { lazy, Suspense } from 'react'
import ReactDOM from 'react-dom';
// ** Performace Optimize
import reportWebVitals from './reportWebVitals';

// ** Redux Imports
import { Provider } from 'react-redux';
import { store } from './redux/storeConfig/store';


// ** Toast & ThemeColors Context
import { ToastContainer } from 'react-toastify';
import { ThemeContext } from './utility/context/ThemeColors';

// ** Spinner (Splash Screen)
import Spinner from './@core/components/spinner/Fallback-spinner';


// ** Ripple Button
import './@core/components/ripple-button';

// // ** PrismJS
// import 'prismjs';
// import 'prismjs/themes/prism-tomorrow.css';
// import 'prismjs/components/prism-jsx.min';

// ** React Perfect Scrollbar
import 'react-perfect-scrollbar/dist/css/styles.css';

// ** React Toastify
import '@styles/react/libs/toastify/toastify.scss';

// ** Core styles
import './@core/assets/fonts/feather/iconfont.css';
import './@core/scss/core.scss';
import './index.scss';

const LazyApp = lazy(() => import('./App'));

ReactDOM.render(
  <Provider store={store}>
  <Suspense fallback={<Spinner />}>
    <ThemeContext>
      <LazyApp />
      <ToastContainer newestOnTop />
    </ThemeContext>
  </Suspense>
</Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
