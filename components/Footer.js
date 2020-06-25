// FOOTER FROM HEADER
import React, { useState } from "react";
import Link from "next/link";
import Router from "next/router";
//import { APP_NAME } from "../config";
//import { signout, isAuth } from "../actions/auth";


const Footer = () => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <reactstrap.Navbar style={{backgroundColor: 'yellow'}} >
        <reactstrap.NavbarBrand className="pt-60px" >
        <reactstrap.NavbarBrand>
      &copy; {new Date().getFullYear()} 
      All Rights Reserved. Kingdom Coders.
      
</reactstrap.NavbarBrand>
</reactstrap.NavbarBrand>

        
      </reactstrap.Navbar>
    </div>
  );
}

export default Footer;

//const divner = styled.footer`
  //background: #344;
  //height: 4rem;
  //left: 0;
  //bottom: 0;
  //width:100%;
//`;