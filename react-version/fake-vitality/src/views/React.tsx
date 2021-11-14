
import BreadCrumbs from '@src/components/breadcrumbs'
import { Card, CardHeader, CardBody, CardTitle, CardText, CardLink, Col, Row } from 'reactstrap'
import { Home, Star, Link as LinkIcon } from 'react-feather'
import { Link } from 'react-router-dom'
import reduxImg from 'src/assets/images/code/react-redux.jpg'
import Rating from 'react-rating'

const React = () => {

  return (
    <>
      <BreadCrumbs breadCrumbTitle={(<Home size={20} />)} breadCrumbParent='Fake Vitality' breadCrumbActive={(<Link to='/react'>React JS</Link>)} />

      <Card>
        <CardHeader>
          <CardTitle tag="h4">🚀 React JS</CardTitle>
        </CardHeader>
        <CardBody>
          <CardText>
            We already have may project based on React.JS. It is quite lighter and mature to use. Due to it's community, there is a lot UI lib and framework we could use.
          </CardText>
          <CardText>
            This Fake Vitility is build by React.JS Version 17, which including "Hooks" pattern and support typescript.
          </CardText>
          <CardText>
            Based on my persional experience, React is quite awesome for small team/project. When project grows huge, different style and pattern will lay everwhere.
            Even the version of packages became a nightmare to maintain and continue integration.
          </CardText>
          <hr />
          <Row>
            <Col md='5' sm='12'>
              <CardTitle tag='h4'>Keypoints</CardTitle>
              <CardText>Defacto standard for building applications : <CardLink href='https://reactjs.org/docs/create-a-new-react-app.html' target="_blank">Create React App (CRA)</CardLink></CardText>
              <CardText>Developed By: <CardLink href='https://www.facebook.com/' target="_blank">Facebook</CardLink></CardText>
              <CardText>Initial Release: March 2013</CardText>
              <CardText>Data Binding: One-way</CardText>
              <CardText>DOM: Virtual</CardText>
            </Col>
            <Col md='3' sm='12'>
              <CardTitle tag='h4'>Personal Rating</CardTitle>
              <h6>Easy to start: <Rating
                emptySymbol={<Star size={16} fill='#babfc7' stroke='#babfc7' />}
                fullSymbol={<Star size={16} fill='#ff9f43' stroke='#ff9f43' />}
                readonly
                initialRating={4}
                direction={'ltr'}
              /> 4 Stars</h6>
              <h6>Community: <Rating
                emptySymbol={<Star size={16} fill='#babfc7' stroke='#babfc7' />}
                fullSymbol={<Star size={16} fill='#ff9f43' stroke='#ff9f43' />}
                readonly
                initialRating={5}
                direction={'ltr'}
              /> 5 Stars</h6>
              <h6>Popularity: <Rating
                emptySymbol={<Star size={16} fill='#babfc7' stroke='#babfc7' />}
                fullSymbol={<Star size={16} fill='#ff9f43' stroke='#ff9f43' />}
                readonly
                initialRating={5}
                direction={'ltr'}
              /> 5 Stars</h6>
              <h6>Performance: <Rating
                emptySymbol={<Star size={16} fill='#babfc7' stroke='#babfc7' />}
                fullSymbol={<Star size={16} fill='#ff9f43' stroke='#ff9f43' />}
                readonly
                initialRating={4}
                direction={'ltr'}
              /> 4 Stars</h6>
              <h6>Overall: <Rating
                emptySymbol={<Star size={16} fill='#babfc7' stroke='#babfc7' />}
                fullSymbol={<Star size={16} fill='#ff9f43' stroke='#ff9f43' />}
                readonly
                initialRating={4.5}
                direction={'ltr'}
              /> 4.5 Stars</h6>
            </Col>
            <Col md='4' sm='12'>
              <CardTitle tag='h4'>Sample Project</CardTitle>
              <CardText>
                Fake Vitality web project (<CardLink href='https://vulcansteel.visualstudio.com/Vitality/_git/Exp-Randolph?path=/react-version/fack-vitality' target="_blank">Link <LinkIcon size={16} /></CardLink>)
              </CardText>
              <CardText>
                React b2c project (<CardLink href='https://vulcansteel.visualstudio.com/Vitality/_git/Exp-Randolph?path=/react-version/b2c-sample' target="_blank">Link <LinkIcon size={16} /></CardLink>)
              </CardText>
            </Col>
          </Row>
        </CardBody>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle><h4>🔒 Authentication MSAL </h4></CardTitle>
        </CardHeader>
        <CardBody>
          <CardText> According to Microsoft tutorial{' '}
            <CardLink href='https://docs.microsoft.com/en-us/azure/active-directory/develop/tutorial-v2-react' target="_blank">
              React SPA using MSAL
            </CardLink>, it is quite easy to implement Azure Active Directory (AAD) using below two npm packages:
          </CardText>
          <CardText> "@azure/msal-browser" </CardText>
          <CardText> "@azure/msal-react" </CardText>
          <CardText>Following the tutorial makes no hard to implement.</CardText>
        </CardBody>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle><h4>🔑 Access Control </h4></CardTitle>
        </CardHeader>
        <CardBody>
          <CardText>
            <CardLink href='https://casl.js.org/v5/en/' target="_blank">CASL</CardLink> is a prety good library for Isomorphic Autiorization.
            It has a react version which is powerful to use.
          </CardText>
          <CardText> "@casl/ability" </CardText>
          <CardText> "@casl/react" </CardText>
        </CardBody>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle><h4>🚦 Router </h4></CardTitle>
        </CardHeader>
        <CardBody>
          <CardText>
            React router is based on 'react-router-dom', which is nice to implement and handle the auth and exception in a high level.
            Fake Vitality use the wrapper router
          </CardText>
          <pre>
            <code className='language-jsx'>
              {`
import { Suspense, lazy } from 'react';
import { BrowserRouter, HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import { DefaultRoute, IRoute, Routes } from './routes';
...

const Router = () => {

  ...
  const FinalRoute = props => {
    const route = props.route;
    if (
      (!isAuthenticated && route.meta === undefined) ||
      (!isAuthenticated && route.meta && !route.meta.authRoute)
    ) {
      return <Redirect to='/login' />
    } else if (route.meta && route.meta.authRoute && isAuthenticated) {
      return <Redirect to='/' />
    } else {
      return <route.component {...props} />
    }
  }
  ...
  return (
    <BaseRouter basename={process.env.REACT_APP_BASENAME}>
      <Switch>
        <Route exact path='/' render={() => isAuthenticated ? <Redirect to={DefaultRoute} /> : <Redirect to='/login' />} />
        <Route exact path='/not-authorized' render={() => (<BlankLayout><NotAuthorized /></BlankLayout>)} />
        {FinalRoute()}
        <Route path='*' component={Error} />/
      </Switch>
    </BaseRouter>
  )
}

export default Router;
`}
            </code>
          </pre>
        </CardBody>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle><h4>☕ State Management </h4></CardTitle>
        </CardHeader>
        <CardBody>
          <CardText>
            The hook of useState is the improvement of React to management component state, but{' '}
            <CardLink href='https://react-redux.js.org/' target="_blank">react-redux</CardLink> helps component more encapsulated. It enable
            react components to interact with the Redux store, so we don't have to write that logic.
          </CardText>
          <img className='img-fluid' src={reduxImg} alt='' />
        </CardBody>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle><h4>🍳 UI & Component Framework </h4></CardTitle>
        </CardHeader>
        <CardBody>
          <CardText>
            The React is more like a compiler to me than a framework. All popular html 5 + css 3 UI lib could be use together with React.
            <br />
            For example,
            <br /><CardLink href='https://getbootstrap.com/' target="_blank">bootstrap</CardLink>
            <br /><CardLink href='https://mui.com/' target="_blank">material-ui</CardLink>.
            <br />And React has it's react version: 'reactstrap' and '@mui/material'
          </CardText>
          <CardText>
            Also a large group of component libs:
            <br />"react-apexcharts"
            <br />"react-chartjs-2"
            <br />"react-select"
            <br />"react-toastify"
            <br />...
          </CardText>
        </CardBody>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle><h4>🍦 Customize Webpack </h4></CardTitle>
        </CardHeader>
        <CardBody>
          <CardText>Create React App (CRA) has become the defacto standard for building React applications, even it is great but still hard to customize
            and some package version under it could not update time to time. The <CardLink href='https://www.npmjs.com/package/react-app-rewired' target="_blank">react-app-rewired</CardLink> library
            to customize CRA and its Webpack config without ejecting.</CardText>
          <pre>
            <code className='language-json'>
              {`
            {
             ...
              {
                ...
                "scripts": {
                "start": "react-app-rewired start",
                "build": "react-app-rewired build",
                "build-electron": "cross-env USE_ELECTRON=true react-app-rewired build",
                "test": "react-app-rewired test",
                "eject": "react-scripts eject",
                ...
              },
              ...
            }`}
            </code>
          </pre>

          <pre>
            <code className='language-js'>
              {`
           const path = require('path');
           const SassRuleRewire = require('react-app-rewire-sass-rule');

           module.exports = function override(config, env) {
             config = new SassRuleRewire()
               .withRuleOptions({
                 test: /\\.s[ac]ss$/i,
                 use: [
                   {
                     loader: 'sass-loader',
                     options: {
                       sassOptions: {
                         includePaths: ['node_modules', 'src/assets']
                       }
                     }
                   }
                 ]
               })
               .rewire(config, env)
             return config
           }
              `}
            </code>
          </pre>
        </CardBody>
      </Card>
    </>
  )
}

export default React
