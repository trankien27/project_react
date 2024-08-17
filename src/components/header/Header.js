import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink, useNavigate } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import { useSelector } from 'react-redux';

const Header = () => {
    const navigate = useNavigate()
    const handleLogin = () => {
        navigate("/login")
    }
    const account = useSelector(state => state.user.account);
    const isAuthenticated = useSelector(state => state.user.isAuthenticated);
    console.log(isAuthenticated);
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <NavLink to="/" className="navbar-brand">KShop</NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink to="/" className="nav-link">Home</NavLink>
                        <NavDropdown title="Vai trò" id="basic-nav-dropdown">
                            <NavDropdown.Item>
                                <NavLink to="/User">Người dùng</NavLink>
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item>
                                <NavLink to="/Admin">Admin</NavLink></NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    {isAuthenticated ?
                        <Nav>
                            <button className='btn-login' onClick={() => handleLogin()}>Login</button>
                            <button className='btn-signup'><NavLink to='/register'>Sign up</NavLink></button>
                        </Nav> :
                        <NavDropdown title="Cài đặt" id="setting-nav-bar">
                            <NavDropdown.Item>
                                <NavLink to="/">Log out</NavLink>
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item>
                                <NavLink to="/">Profile</NavLink></NavDropdown.Item>
                        </NavDropdown>

                    }

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;