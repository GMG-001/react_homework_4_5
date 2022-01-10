import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';

const Header = () => {
    return (
        <>
            <Navbar
                color="light"
                expand="md"
                light
            >
                <NavbarBrand href="/" >
                                მთავარი
                </NavbarBrand>
            </Navbar>
        </>
    )
}

export default Header;
