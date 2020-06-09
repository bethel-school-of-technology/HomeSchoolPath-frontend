import React from "react";
import styled from "styled-components";
import spinner from "../hsp-spinner-1.gif";
import {Link} from "react-router-dom";

const Articles = ({ posts }) => {
  return (
    <MainContainer>
    {!posts.length ? (
        <img src={spinner} alt="THE HOMESCHOOL PATH.." />
  ) : (
      posts.map((article, key={key}) => (<div className="container">
        <h2>{article.title}</h2>
        <p>{article.article}</p>
        <span className="badge badge-secondary p-2">
          {article.authorname}
        </span>
        <div className="row my-5">
          <div className="col-sm-2">
            <Link to="/edit-article" className="btn btn-outline-success">
                           Edit Article
            </Link>
          </div>
          <div className="col-sm-2">
            <button to="/" className="btn btn-outline-danger">
              Delete Article
            </button>
          </div>
        </div>
        <hr />
      </div>)))}
    </MainContainer>
  );
};

export default Articles;

// main container
const MainContainer = styled.div`
  margin: 7rem 0;

  img {
      width: 10rem;
      display: block;
      margin: 0 auto;
  }
`;
