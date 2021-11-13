import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Header.css'

const Header = () => {
    const { user, logOut } = useAuth();
    return (

        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/home">
                    <img
                        alt=""
                        src="https://scontent.fdac27-1.fna.fbcdn.net/v/t1.6435-9/32631946_1787336821332338_8374491215592161280_n.png?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=FsN_1I4gj-MAX-gaGQw&_nc_ht=scontent.fdac27-1.fna&oh=e9d5e71d4ba0969055434c63a2e08740&oe=61AEB17B"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    <span className='text-warning'> Glamstar</span>
                </Navbar.Brand>

                <Nav className="me-auto px-3">
                    <NavLink className='navlists'
                        to="/home"
                        activeStyle={{
                            fontWeight: "bold",
                            color: "red"
                        }}
                    >
                        Home
                    </NavLink>
                    <NavLink className='navlists'
                        to="/explore"
                        activeStyle={{
                            fontWeight: "bold",
                            color: "red"
                        }}
                    >
                        Explore
                    </NavLink>
                    {/* <NavLink className='navlists'
                        to="/purchase"
                        activeStyle={{
                            fontWeight: "bold",
                            color: "red"
                        }}
                    >
                        Purchassss
                    </NavLink> */}
                    {user?.email &&
                        <NavLink className='navlists'
                            to="/dashboard"
                            activeStyle={{
                                fontWeight: "bold",
                                color: "red"
                            }}
                        >
                            Dashboard
                        </NavLink>
                    }

                    {user?.email ?
                        <Button className='ms-5' onClick={logOut} variant="light">Logout</Button> :
                        <NavLink className='navlists'
                            to="/login"
                            activeStyle={{
                                fontWeight: "bold",
                                color: "red"
                            }}
                        >
                            Login or Register
                        </NavLink>}
                    <Navbar.Text className='ms-5'>
                        Signed in as: <a href="#login">{user?.displayName}</a>
                    </Navbar.Text>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Header;