import React from 'react';
import styled from 'styled-components';

const Header = () => {
    return (
      <MainContainer>
        <h1> 
          Welcome to <br />
          The Home School Path
        </h1>
      </MainContainer>
    );
};

export default Header;

// main container
const MainContainer = styled.header`
    background: url(../../images/header-bg3.jpg)no-repeat center center fixed; 
    -webkit-background-size: cover; 
    height: 25rem;


  h1 {
      transform: translate(-50%, -50%);
      color: #ffa500;
      font-weight: 900;
      position: absolute;
      top: 25%;
      left: 50%;
  }
`;
