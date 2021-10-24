import { Card, CardHeader, CardBody, CardTitle, CardText, CardLink } from 'reactstrap'
import { toast } from 'react-toastify'

const SecondPage = () => {
  const notify = () => toast("Wow so easy!")

  return (
    <Card>
      <CardHeader>
        <CardTitle>Create Awesome 🙌</CardTitle>
      </CardHeader>
      <CardBody>
        <button onClick={notify}>Notify!</button>
        <CardText>This is your second page.</CardText>
        <CardText>
          Chocolate sesame snaps pie carrot cake pastry pie lollipop muffin. Carrot cake dragée chupa chups jujubes.
          Macaroon liquorice cookie wafer tart marzipan bonbon. Gingerbread jelly-o dragée chocolate.
        </CardText>
      </CardBody>
    </Card>
  )
}

export default SecondPage
