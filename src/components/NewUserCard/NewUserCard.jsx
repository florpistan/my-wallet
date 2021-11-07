import { Card, Button } from 'react-bootstrap';

const NewUserCard = () => {
  return (
    <>
      <Card>
        <Card.Header as='h5'>Are you a new user?</Card.Header>
        <Card.Body>
          <Card.Title>Create an account, it's free!</Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional
            content.
          </Card.Text>
          <Button variant='primary'>Sign Up</Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default NewUserCard;
