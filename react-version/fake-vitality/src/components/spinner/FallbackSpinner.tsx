import './app-loader.scss';
import logo from '@src/assets/images/logo/logo.png';

const SpinnerComponent = () => {
  return (
    <div className='fallback-spinner vh-100'>
      <div className='layout-box'>
        <img className='fallback-logo' src={logo} alt='logo' />
        <h5 className='title'>Initialising...</h5>
        <div className='loading'>
          <div className='effect-1 effects'></div>
          <div className='effect-2 effects'></div>
          <div className='effect-3 effects'></div>
        </div>
      </div>
    </div>
  )
}

export default SpinnerComponent;
