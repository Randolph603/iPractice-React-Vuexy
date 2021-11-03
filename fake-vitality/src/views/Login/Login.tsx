import './page-auth.scss';

import { useSkin } from '@hooks/useSkin';
import { Link } from 'react-router-dom';
import InputPasswordToggle from '@components/input-password-toggle';
import { Row, Col, CardTitle, CardText, Form, FormGroup, Label, Input, CustomInput } from 'reactstrap';
import logo from '@src/assets/images/logo/logo_x35.png';
import microsoft from '@src/assets/images/icons/file-icons/microsoft.png';
import RippleButton from '@src/components/ripple-button/RippleButton';

const Login: React.FC = () => {
  const [skin] = useSkin();

  const illustration = skin === 'dark' ? 'login-v2-dark.svg' : 'login-v2.svg';
  const source = require(`@src/assets/images/pages/${illustration}`).default;

  return (
    <div className='auth-wrapper auth-v2'>
      <Row className='auth-inner m-0'>
        <Link className='brand-logo' to='/'>
          <img src={logo} alt='logo' />
          <h2 className='brand-text text-primary ml-1'>Fake Vitality</h2>
        </Link>

        <Col className='d-none d-lg-flex align-items-center p-5' lg='8' sm='12'>
          <div className='w-100 d-lg-flex align-items-center justify-content-center px-5'>
            <img className='img-fluid' src={source} alt='Login V2' />
          </div>
        </Col>
        <Col className='d-flex align-items-center auth-bg px-2 p-lg-5' lg='4' sm='12'>
          <Col className='px-xl-2 mx-auto' sm='8' md='6' lg='12'>
            <CardTitle tag='h2' className='font-weight-bold mb-1'>
              Welcome to Fake Vitality! 👋
            </CardTitle>
            <CardText className='mb-2'>Please sign-in to your account and start the adventure</CardText>
            <Form className='auth-login-form mt-2' onSubmit={e => e.preventDefault()}>
              <FormGroup>
                <Label className='form-label' for='login-email'>
                  Email
                </Label>
                <Input type='email' id='login-email' placeholder='Randolph.Liu@vulcan.co' autoFocus />
              </FormGroup>
              <FormGroup>
                <div className='d-flex justify-content-between'>
                  <Label className='form-label' for='login-password'>
                    Password
                  </Label>
                  <Link to='/'>
                    <small>Forgot Password?</small>
                  </Link>
                </div>
                <InputPasswordToggle className='input-group-merge' id='login-password' />
              </FormGroup>
              <FormGroup>
                <CustomInput type='checkbox' className='custom-control-Primary' id='remember-me' label='Remember Me' />
              </FormGroup>
              <RippleButton tag={Link} to='/' color='primary' block>
                Sign in
              </RippleButton>
            </Form>
            <div className='divider my-2'>
              <div className='divider-text'>or</div>
            </div>
            <div className='auth-footer-btn d-flex justify-content-center'>
              <RippleButton color='facebook' block>
                <img className='mr-1' src={microsoft} alt='' />
                Microsoft
              </RippleButton>
            </div>
          </Col>
        </Col>
      </Row>
    </div>
  )
}

export default Login;
