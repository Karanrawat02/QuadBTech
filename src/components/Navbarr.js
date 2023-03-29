import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Navbarr() {
  return (
    <Navbar expand="lg" variant="dark" bg="dark">
      <Container>
        <Navbar.Brand href="#">MovieHub</Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Navbarr;