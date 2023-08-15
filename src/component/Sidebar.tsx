import { Nav } from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'

export default function Sidebar() {
  return (
    <Navbar sticky='top' className='sidebar flex-column'>
        <Nav.Item>
            <Nav.Link href="/">Matrix Classroom</Nav.Link>     
        </Nav.Item>
        <Nav.Item>
            <Nav.Link href="/">Posts</Nav.Link>     
        </Nav.Item>
        <Nav.Item>
            <Nav.Link href="/user-page">User Page</Nav.Link>     
        </Nav.Item>
        <Nav.Item>
            <Nav.Link href="/login">Login</Nav.Link>     
        </Nav.Item>
    </Navbar>
  )
}
