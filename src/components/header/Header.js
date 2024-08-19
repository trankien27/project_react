import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink, useNavigate } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import { useSelector } from 'react-redux';

const Header = () => {
    const account = useSelector(state => state.user.account);
    console.log(account)
    const isAuthenticated = useSelector(state => state.user.isAuthenticated);
    console.log(isAuthenticated)
    const navigate = useNavigate()
    const handleLogin = () => {
        navigate("/login")
    }
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <NavLink to="/" className="navbar-brand">KShop</NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink to="/" className="nav-link">Home</NavLink>

                        {account.roles === "ADMIN" ?
                            <NavDropdown title="Quản lý" id="basic-nav-dropdown">
                                <NavDropdown.Item>
                                    <NavLink to="/User">Người dùng</NavLink>
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item>
                                    <NavLink to="/Admin">Admin</NavLink></NavDropdown.Item>
                            </NavDropdown> :
                            ""
                        }

                    </Nav>
                    {
                        !isAuthenticated ?
                            <Nav>
                                <button className='btn-login' onClick={() => handleLogin()}>Login</button>
                                <button className='btn-signup'><NavLink to='/register'>Sign up</NavLink></button>
                            </Nav>
                            : <NavDropdown title="Cài đặt" id="basic-nav-dropdown">
                                <NavDropdown.Item>
                                    <NavLink to="/User">Thông tin</NavLink>
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item>
                                    <NavLink to="/login">Đăng xuất</NavLink></NavDropdown.Item>
                            </NavDropdown>
                    }

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;