import { Card, CardHeader, CardBody, CardTitle, CardText, CardLink } from 'reactstrap'

const Home = () => {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>This is React version for fake vitality 🚀</CardTitle>
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
          <CardTitle>MSAL Auth 🔒</CardTitle>
        </CardHeader>
        <CardBody>
          <CardText>
            <p>
              "@azure/msal-browser": "^2.19.0",
              "@azure/msal-react": "^1.1.1",
            </p>
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
    </div>
  )
}

export default Home
