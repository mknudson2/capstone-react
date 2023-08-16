import { FormEvent, useContext, useRef } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { NavLink, useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/UserProvider";

function OffCanvasNav() {
  const { user } = useContext(UserContext);
  const usernameField = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  function handleUserSearch(e: FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    console.log("Searching....");
    navigate(`/user-page/${usernameField.current!.value}`);
  }

  return (
    <>
      {[false].map((expand, i) => (
        <Navbar
          key={i}
          expand={expand}
          className="bg-body-black mb-3 offcanvas-navbar"
          sticky="top"
        >
          <Container fluid>
            <Navbar.Brand as={NavLink} to="/">
              <img
                alt="Viking Ship"
                src="/NorrLogo.png"
                width="75"
                height="65"
                className="d-inline-block align-top"
              />{" "}
              <span className="nav-title">NORRŒNA</span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              {user.token && (
                <>
                  <Nav.Item>
                    <Nav.Link as={NavLink} to={`/user-page/${user.username}`}>
                      {user.username}
                    </Nav.Link>
                  </Nav.Item>
                </>
              )}
              <Offcanvas.Header closeButton>
                <Offcanvas.Title
                  id={`offcanvasNavbarLabel-expand-${expand}`}
                  className="offcanvas-menu-text"
                >
                  Explore Norrœna
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Form className="d-flex" onSubmit={handleUserSearch}>
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    ref={usernameField}
                  />
                  <Button variant="outline-success" type="submit">
                    Search
                  </Button>
                </Form>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link as={NavLink} to="/">
                    Home
                  </Nav.Link>
                  <Nav.Link as={NavLink} to={`/user-page/${user.username}`}>
                    My Page
                  </Nav.Link>
                  <Nav.Link as={NavLink} to="/">
                    Link
                  </Nav.Link>
                  <NavDropdown
                    title="Dropdown"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item as={NavLink} to="/">
                      Action
                    </NavDropdown.Item>
                    <NavDropdown.Item as={NavLink} to="/">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item as={NavLink} to="/">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default OffCanvasNav;
