import { Nav } from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import { NavLink } from "react-router-dom"

export default function Sidebar() {
  return (
    <Navbar sticky='top' className='sidebar flex-column'>
        <Nav.Item>
            <Nav.Link as={NavLink} to="/">Matrix Classroom</Nav.Link>     
        </Nav.Item>
        <Nav.Item>
            <Nav.Link as={NavLink} to="/">Posts</Nav.Link>     
        </Nav.Item>
        <Nav.Item>
            <Nav.Link as={NavLink} to="/user-page">User Page</Nav.Link>     
        </Nav.Item>
        <Nav.Item>
            <Nav.Link as={NavLink} to="/login-register">Login</Nav.Link>     
        </Nav.Item>
    </Navbar>
  )
}
