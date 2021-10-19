import React from 'react';
import ReactIcon from 'assets/react.png';
import styled from '@emotion/styled';
import { spinReverse } from 'styles/keyframes';

const Header = () => {
  return (
    <StyledHeader>
      <nav>
        <ReactImg src={ReactIcon} alt="webpack" />
        ragnarok-forU
      </nav>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  z-index: 99999;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 60px;
  font-size: 20px;
  font-weight: 600;
  padding: 0px 24px;
  border-bottom: 1px solid #3c3f43;
  & nav {
    display: flex;
    flex-direction: row;
    align-items: center;
    & h2 {
      font-size: 28px;
      margin-right: 8px;
    }
  }
`;

const ReactImg = styled.img`
  width: 25px;
  margin: 0px 5px;
  transition: 0.5s all linear;
  animation: ${spinReverse} 15s linear infinite;
`;
