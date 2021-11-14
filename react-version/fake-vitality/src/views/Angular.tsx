import BreadCrumbs from '@src/components/breadcrumbs'
import { Card, CardHeader, CardBody, CardTitle, CardText, CardLink, Col, Row } from 'reactstrap'
import { Home, Star, Link as LinkIcon } from 'react-feather'
import { Link } from 'react-router-dom'
import Rating from 'react-rating'

const Angular = () => {
  return (
    <>
      <BreadCrumbs breadCrumbTitle={(<Home size={20} />)} breadCrumbParent='Fake Vitality' breadCrumbActive={(<Link to='/angular'>Angular JS</Link>)} />

      <Card>
        <CardHeader>
          <CardTitle tag='h4'>🚀 Angular JS</CardTitle>
        </CardHeader>
        <CardBody>
          <CardText>
            Angular is a development platform for building mobile (PWA) and desktop web applications, using Typescript/JavaScript and other languages.
            <br />
            It is MVC Architecture implementation and has a fast server performacne. It is a smart choice for a large project with a large team.
          </CardText>
          <hr />
          <Row>
            <Col md='5' sm='12'>
              <CardTitle tag='h4'>Keypoints</CardTitle>
              <CardText>Defacto standard for building applications : <CardLink href='https://angular.io/cli' target="_blank">@angular/cli</CardLink></CardText>
              <CardText>Developed By: <CardLink href='https://www.google.com/' target="_blank">Google</CardLink></CardText>
              <CardText>Initial Release: September 2016</CardText>
              <CardText>Data Binding: Two-way</CardText>
              <CardText>DOM: Real</CardText>
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
                Agular V11 project support MSAL 2.0 (<CardLink href='https://vulcansteel.visualstudio.com/Vitality/_git/Exp-Randolph?path=/angular-version' target="_blank">Link <LinkIcon size={16} /></CardLink>)
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
            <CardLink href='https://docs.microsoft.com/en-us/azure/active-directory/develop/tutorial-v2-angular-auth-code' target="_blank">
              Angular SPA using MSAL
            </CardLink>, it is quite easy to implement Azure Active Directory (AAD) using below two npm packages:
          </CardText>
          <CardText>  "@azure/msal-angular": "^2.0.0", </CardText>
          <CardText> "@azure/msal-browser": "^2.14.2", </CardText>
          <CardText>Following the tutorial makes no hard to implement.</CardText>
        </CardBody>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle tag='h4'>🚦 Router</CardTitle>
        </CardHeader>
        <CardBody>
          <CardText> Build-in lib make it super easy to manage router for Angular Website.</CardText>
          <CardText> "@azure/msal-angular": "^2.0.0" </CardText>
        </CardBody>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle><h4>☕ State Management </h4></CardTitle>
        </CardHeader>
        <CardBody>
          <CardText>
            Due to two-way data binding, it is not quite necessary to manage statement.
          </CardText>
          <CardText>
            But if still keen a state management, <CardLink href='https://ngrx.io/' target="_blank">NgRx</CardLink> Store provides reactive state management for Angular apps inspired by Redux. Unify the events in your application and derive state using RxJS.
          </CardText>
        </CardBody>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle><h4>🍳 Theme & UI Framework </h4></CardTitle>
        </CardHeader>
        <CardBody>
          <CardText> <CardLink href='https://www.primefaces.org/primeng/#/' target="_blank">PrimeNG</CardLink> consists of a diverse collection of over 70 different UI components. </CardText>
          <CardText> <CardLink href='http://angular-ui.github.io/bootstrap/' target="_blank">UI Bootstrap</CardLink> is an AngularJS UI framework that uses one of the most robust front-end tools, Bootstrap.</CardText>
          <CardText> <CardLink href='https://material.angular.io/components/categories' target="_blank">Angular Material</CardLink> is built Angular as a comprehensive library of reusable UI components. </CardText>
        </CardBody>
      </Card>
    </>
  )
}

export default Angular
