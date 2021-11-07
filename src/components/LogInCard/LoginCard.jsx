import { Card, Button } from 'react-bootstrap';

const LoginCard = () => {
  return (
    <>
      <Card>
        <Card.Header as='h5'>Already have an account?</Card.Header>
        <Card.Body>
          <Card.Title>LogIn!</Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional
            content.
          </Card.Text>
          <Button className='my-button'>LogIn</Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default LoginCard;
