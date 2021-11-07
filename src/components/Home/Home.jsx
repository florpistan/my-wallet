import NewUserCard from '../NewUserCard/NewUserCard';
import { Container, Row, Col } from 'react-bootstrap';
import LoginCard from '../LogInCard/LoginCard';

const Home = () => {
  return (
    <Row className='mt-3'>
      <h2>Home Section</h2>
      <Col md={6}>
        <NewUserCard />
      </Col>
      <Col md={6}>
        <LoginCard />
      </Col>
    </Row>
  );
};

export default Home;
