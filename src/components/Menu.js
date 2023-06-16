import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/esm/Container";
import { Link } from "react-router-dom";

const Menu = () => {
 return (
  <Navbar bg="dark" variant="dark" expand="lg">
   <Container>
    <Navbar.Brand as={Link} to="/">
     Menu
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
     <Nav className="ms-auto">
      <Nav.Link as={Link} to="/addtask">
       Add Task
      </Nav.Link>
      <Nav.Link as={Link} to="/tasklist">
       Task List
      </Nav.Link>
     </Nav>
    </Navbar.Collapse>
   </Container>
  </Navbar>
 );
};
export default Menu;
