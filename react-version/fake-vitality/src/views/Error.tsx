import RippleButton from 'src/components/ripple-button/RippleButton';
import { Link } from 'react-router-dom'
import errorImg from 'src/assets/images/pages/error.svg'
import logo from 'src/assets/images/logo/logo_x35.png';

import '@styles/base/pages/page-misc.scss'
import { useSkin } from '@src/utility/hooks/useSkin';

const Error = () => {
  useSkin();
  return (
    <div className='misc-wrapper'>
      <a className='brand-logo' href='/'>
      <img src={logo} alt='logo' />
        <h2 className='brand-text text-primary ml-1'>Fake Vitality</h2>
      </a>
      <div className='misc-inner p-2 p-sm-3'>
        <div className='w-100 text-center'>
          <h2 className='mb-1'>Page Not Found 🕵🏻‍♀️</h2>
          <p className='mb-2'>Oops! 😖 The requested URL was not found on this server.</p>
          <RippleButton tag={Link} to='/' color='primary' className='btn-sm-block mb-2'>
            Back to home
          </RippleButton>
          <img className='img-fluid' src={errorImg} alt='Not authorized page' />
        </div>
      </div>
    </div>
  )
}
export default Error
