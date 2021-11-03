import RippleButton from '@src/components/ripple-button/RippleButton';
import { Link } from 'react-router-dom';
import notAuthImg from '@src/assets/images/pages/not-authorized.svg';
import logo from '@src/assets/images/logo/logo_x35.png';

import '@styles/base/pages/page-misc.scss';

const NotAuthorized = () => {
  return (
    <div className='misc-wrapper'>
      <a className='brand-logo' href='/'>
        <img src={logo} alt='logo' />
        <h2 className='brand-text text-primary ml-1'>Fake Vitality</h2>
      </a>
      <div className='misc-inner p-2 p-sm-3'>
        <div className='w-100 text-center'>
          <h2 className='mb-1'>401 - You are not authorized! 🔐</h2>
          <p className='mb-2'>
            The Webtrends Marketing Lab website in IIS uses the default IUSR account credentials to access the web pages
            it serves.
          </p>
          <RippleButton tag={Link} to='/' color='primary' className='btn-sm-block mb-1'>
            Back to home
          </RippleButton>
          <img className='img-fluid' src={notAuthImg} alt='Not authorized page' />
        </div>
      </div>
    </div>
  )
}
export default NotAuthorized
