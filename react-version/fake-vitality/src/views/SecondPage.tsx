import BreadCrumbs from '@src/components/breadcrumbs'
import { Card, CardHeader, CardBody, CardTitle, CardText } from 'reactstrap'
import { Link, Mail } from 'react-feather'

const SecondPage = () => {
  return (
    <>
      <BreadCrumbs breadCrumbTitle={(<Mail size={20} />)} breadCrumbParent='Fake Vitality' breadCrumbActive={(<Link to='/'>Second Page</Link>)} />
      <Card>
        <CardHeader>
          <CardTitle>Hello World!</CardTitle>
        </CardHeader>
        <CardBody>
          <CardText>This is your second page.</CardText>
        </CardBody>
      </Card>
    </>
  )
}

export default SecondPage
