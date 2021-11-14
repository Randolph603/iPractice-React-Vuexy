import './Login.scss';

import { useSkin } from '@hooks/useSkin';
import { Link } from 'react-router-dom';
import InputPasswordToggle from '@components/input-password-toggle';
import { Row, Col, CardTitle, CardText, Form, FormGroup, Label, Input, CustomInput } from 'reactstrap';
import logo from '@src/assets/images/logo/logo_x35.png';
import microsoft from '@src/assets/images/icons/file-icons/microsoft.png';
import RippleButton from '@src/components/ripple-button/RippleButton';
import { useMsal } from "@azure/msal-react";
import { toast, Slide } from 'react-toastify';
import { Coffee } from 'react-feather';
import { handleLogin } from '@store/actions/auth';
import { useDispatch } from 'react-redux';

import { loginRequest } from "@src/auth/authConfig";
import Avatar from '@src/components/avatar';

const ToastContent = ({ name }) => (
  <>
    <div className='toastify-header'>
      <div className='title-wrapper'>
        <Avatar size='sm' color='success' icon={<Coffee size={12} />} />
        <h6 className='toast-title font-weight-bold'>Welcome, {name}</h6>
      </div>
    </div>
    <div className='toastify-body'>
      <span>You have successfully logged in to Fake Vitality. Now you can start to explore. Enjoy!</span>
    </div>
  </>
)

const Login: React.FC = () => {
  useSkin();
  const dispatch = useDispatch();
  const { instance } = useMsal();

  const source = require(`@src/assets/images/pages/login-v2-dark.svg`).default;

  const msLogin = async (instance) => {
    const userAgent = navigator.userAgent.toLowerCase();
    const isElectron = userAgent.indexOf(' electron/') !== -1;
    if (isElectron) {
      const electron = require("electron");
      electron.ipcRenderer.send('LOGIN');
    } else {
      instance.loginPopup(loginRequest).then(res => {
        // instance.loginRedirect(loginRequest).then(res => {
        console.log(res);
        const data = { ...res.account, accessToken: res.accessToken };
        dispatch(handleLogin(data))
        toast.success(
          <ToastContent name={data.name} />,
          { transition: Slide, hideProgressBar: true, autoClose: 2000, icon: false }
        )
      }).catch(e => {
        console.error(e);
      });
    }
  }

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
                <Input type='email' id='login-email' placeholder='Example@vulcan.co' autoFocus />
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
              <RippleButton color='facebook' onClick={() => msLogin(instance)} block>
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
