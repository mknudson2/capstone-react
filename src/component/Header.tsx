import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import { Nav, NavbarBrand } from 'react-bootstrap'

export default function Header() {
  return (
    <Navbar bg='grey' sticky='top' className='header'>
        <Container>
            <Navbar.Brand><img className="navbar-img" src='/NorrLogo.png'/></Navbar.Brand>
            <NavbarBrand><h1 className='navbar-title'>Norrœna</h1></NavbarBrand>
        </Container>
        <Nav.Item>
          <Nav.Link href='/login'>Login</Nav.Link>
        </Nav.Item>
    </Navbar>
  )
}
