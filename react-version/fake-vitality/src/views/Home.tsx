
import BreadCrumbs from '@src/components/breadcrumbs'
import { Card, CardHeader, CardBody, CardTitle, CardText, CardLink } from 'reactstrap'
import { Home as HomeIcon } from 'react-feather'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <BreadCrumbs breadCrumbTitle={(<HomeIcon size={20} />)} breadCrumbParent='Fake Vitality' breadCrumbActive={(<Link to='/'>Home</Link>)} />

      <Card>
        <CardHeader>
          <CardTitle><h4>React version - fake vitality 🚀</h4></CardTitle>
        </CardHeader>
        <CardBody>
          <CardText>Buddha bless no bug!</CardText>
          <CardText>
            Please make sure to read our{' '}
            <CardLink href='/second-page'                         >
              Template Documentation
            </CardLink>{' '}
            to understand where to go from here and how to use our template.
          </CardText>
        </CardBody>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle><h4>MSAL Auth 🔒</h4></CardTitle>
        </CardHeader>
        <CardBody>
          <CardText>
            "@azure/msal-browser": "^2.19.0",
            "@azure/msal-react": "^1.1.1",
          </CardText>
          <CardText>
            Please read{' '}
            <CardLink
              href='https://https://docs.microsoft.com/en-us/azure/active-directory/develop/tutorial-v2-react'
              target='_blank'
            >
              Tutorial: Sign in users and call the Microsoft Graph API from a React single-page app (SPA) using auth code flow
            </CardLink>{' '}
            to get more out of MSAL authentication.
          </CardText>
        </CardBody>
      </Card>
    </>
  )
}

export default Home
