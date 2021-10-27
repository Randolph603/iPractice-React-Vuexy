import { lazy, Suspense } from 'react'
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

import './index.scss'

// Short code
// const LazyApp = lazy(() => import('./App'))

// delay code to display spinner
const LazyApp = lazy(() => {
  return Promise.all([
    import('./App'),
    new Promise(resolve => setTimeout(resolve, 2000))
  ]).then(([moduleExports]) => moduleExports);
});

ReactDOM.render(
  <Suspense fallback={<>Loading...</>}>
    <LazyApp />
  </Suspense>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
