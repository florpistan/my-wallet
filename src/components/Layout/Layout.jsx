import { Container, Row, Col } from 'react-bootstrap';
import Navigation from '../Navigation/Navigation';
import Footer from '../FooterComponent/Footer';
const Layout = ({ children }) => {
  return (
    <>
      <div>
        <Navigation />
      </div>
      <Container>
        <Row>
          <Col>{children}</Col>
        </Row>
      </Container>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
