// ** React Imports
import { lazy, Suspense } from 'react'
import ReactDOM from 'react-dom';
// ** Performace Optimize
import reportWebVitals from './reportWebVitals';

// ** stylesheet & Toast
import './index.scss'
import { ToastContainer } from 'react-toastify';

// ** Spinner (Splash Screen)
import Spinner from './@core/components/spinner/Fallback-spinner';

// ** Core styles
import './@core/assets/fonts/feather/iconfont.css'
import './@core/scss/core.scss'


// Short code
// const LazyApp = lazy(() => import('./App'))

// delay code to display spinner
const LazyApp = lazy(() => {
  return Promise.all([
    import('./App'),
    new Promise(resolve => setTimeout(resolve, 5000))
  ]).then(([moduleExports]) => moduleExports);
});

ReactDOM.render(
  <Suspense fallback={<Spinner />}>
    <LazyApp />
    <ToastContainer newestOnTop />
  </Suspense>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
