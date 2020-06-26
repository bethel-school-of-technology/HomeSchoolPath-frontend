// FOOTER FROM HEADER
import React, { useState } from "react";
import Link from "next/link";
import Router from "next/router";
//import { APP_NAME } from "../config";
//import { signout, isAuth } from "../actions/auth";
import NProgress from 'nprogress';



import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

const Footer = () => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar style={{backgroundColor: 'yellow'}} >
        <NavbarBrand className="pt-60px" >
        <small className="text-muted">
      &copy; {new Date().getFullYear()} 
      All Rights Reserved. Kingdom Coders.
      
</small>
</NavbarBrand>

        
      </Navbar>
    </div>
  );
}

export default Footer;
