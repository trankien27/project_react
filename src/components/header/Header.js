import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';

const Header = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <NavLink to="/" className="navbar-brand">KShop</NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink to="/" className="nav-link">Home</NavLink>
                        <NavDropdown title="Quản lý" id="basic-nav-dropdown">
                            <NavDropdown.Item>
                                <NavLink to="/User">Người dùng</NavLink>
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item>
                                <NavLink to="/Admin">Admin</NavLink></NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <button className='btn-login'><NavLink to='/login'>Login</NavLink></button>
                        <button className='btn-signup'><NavLink to='/register'>Sign up</NavLink></button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;