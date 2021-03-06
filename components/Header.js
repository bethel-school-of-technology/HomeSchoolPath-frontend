import React, { useState, useEffect } from "react";
import Link from "next/link";
import Router from "next/router";
import { APP_NAME } from "../config";
import { signout, isAuth } from "../actions/auth";
import NProgress from "nprogress";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";

import "../node_modules/nprogress/nprogress.css";
import Search from "./blog/Search";

Router.onRouteChangeStart = (url) => NProgress.start();
Router.onRouteChangeComplete = (url) => NProgress.done();
Router.onRouteChangeError = (url) => NProgress.done();

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [authenicated, setAuthenticated] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    setAuthenticated(isAuth());
  }, []);

  return (
    <React.Fragment>
      <div style={{ color: "red", backgroundColor: "yellow" }}>
        <Navbar color='light' light expand='md'>
          <Link href='/'>
            <NavLink className='font-weight-bold'>{APP_NAME}</NavLink>
          </Link>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className='ml-auto' navbar>
              <React.Fragment>
                <NavItem>
                  <Link href='/blogs'>
                    <NavLink className='font-weight-bold'>Blogs</NavLink>
                  </Link>
                </NavItem>

                <NavItem>
                  <Link href='/contact'>
                    <NavLink className='font-weight-bold'>Contact</NavLink>
                  </Link>
                </NavItem>
              </React.Fragment>

              {!isAuth() && (
                <React.Fragment>
                  <NavItem>
                    <Link href='/signin'>
                      <NavLink className='font-weight-bold'>Signin</NavLink>
                    </Link>
                  </NavItem>
                  <NavItem>
                    <Link href='/signup'>
                      <NavLink className='font-weight-bold'>Signup</NavLink>
                    </Link>
                  </NavItem>
                </React.Fragment>
              )}

              {isAuth() && isAuth().role === 0 && (
                <NavItem>
                  <Link href='/user'>
                    <NavLink>{`${isAuth().name}'s Dashboard`}</NavLink>
                  </Link>
                </NavItem>
              )}

              {isAuth() && isAuth().role === 1 && (
                <NavItem>
                  <Link href='/admin'>
                    <NavLink>{`${isAuth().name}'s Dashboard`}</NavLink>
                  </Link>
                </NavItem>
              )}

              {isAuth() && (
                <NavItem>
                  <NavLink
                    style={{ cursor: "pointer" }}
                    onClick={() => signout(() => Router.replace(`/signin`))}
                  >
                    Signout
                  </NavLink>
                </NavItem>
              )}

              <NavItem>
                <Link href='/book.index'>
                  <NavLink className='font-weight-bold'>Book-Finder</NavLink>
                </Link>
              </NavItem>
            </Nav>
            <NavbarText id='hsp'>The Home School Path Blog</NavbarText>
          </Collapse>
        </Navbar>
        <Search />
      </div>
    </React.Fragment>
  );
};

export default Header;
