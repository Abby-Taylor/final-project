import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';

export default function MyNavbar () {
    return (
        <Navbar bg="info" variant="dark" expand="sm" sticky="top">
            <Navbar.Brand href="/">
                <img alt="" src="https://www.nexthome.com/wp-content/uploads/2014/09/Portfolio-LukeTM.jpg" width="50" height="50" className="d-inline-block align-top"></img>{' '}
                Doggo Vacay
            </Navbar.Brand>
            <Nav className="mr-auto">
                <NavLink className="px-2"href="/" exact to= "/">Home</NavLink>
                <NavLink className="px-2"href="/pricing" exact to="/pricing">Pricing</NavLink>
                <NavLink className="px-2"href="/employeeportal" exact to="/employeeportal">Employee Portal</NavLink>
            </Nav>
        </Navbar>
    );
}