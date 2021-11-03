import { Coffee } from 'react-feather';

const Footer = () => {
  return (
    <p className='clearfix mb-0'>
      <span className='float-md-right d-block d-md-inline-block mt-25'>
        COPYRIGHT © 2021-{new Date().getFullYear()}{' '}
        <a href="/">Vulcan Steel Ltd.</a>
        <Coffee size={16} />
      </span>
    </p>
  )
}

export default Footer
