import React from "react";
import Link from "next/link";
import { APP_NAME } from "../../config";
import { Navbar, NavLink, NavbarText } from "reactstrap";

const MyBook = () => {
  return (
    <header className='myheader'>
      <div style={{ color: "red", backgroundColor: "yellow" }}>
        <a className='font-weight-bold' href='/blogs'>
          {APP_NAME}
        </a>
      </div>
      <i className='fas fa-book fa-2x'></i>
      <h1 className='myheaderH'>Book Finder</h1>
    </header>
  );
};

export default MyBook;
