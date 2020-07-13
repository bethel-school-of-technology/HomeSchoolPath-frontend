import React, { Component } from "react";
import Books from "../components/book/Books";
import MyBook from "../pages/book/bookHeader";
import { render } from "nprogress";

class BookAp extends Component {
  render() {
    return (
      <div className='BookAp'>
        <MyBook />
        <Books />
      </div>
    );
  }
}

export default BookAp;
