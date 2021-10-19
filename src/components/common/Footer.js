import React from 'react';
import styled from '@emotion/styled';

const Footer = () => {
  return (
    <StyledFooter>
      <a
        href="https://github.com/ragnarok-forU"
        target="_blank"
        rel="noreferrer noopener"
      >
        <img
          src="https://img.shields.io/badge/-GitHub-black?style=flat-square&logo=github&logoColor=white&link=https://github.com/gparkkii"
          alt="GitHub"
        />
      </a>
      <a
        href="mailto:vjinhyeokv@gmail.com"
        target="_blank"
        rel="noreferrer noopener"
      >
        <img
          src="https://img.shields.io/badge/Gmail-d14836?style=flat-square&logo=Gmail&logoColor=white&link=mailto:jyp933@gmail.com"
          alt="Gmail"
        />
      </a>
    </StyledFooter>
  );
};

export default Footer;

const StyledFooter = styled.footer`
  position: absolute;
  right: 0;
  left: 0;
  bottom: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80px;
  padding: 0px 24px;
  font-size: 14px;
  color: #999;
  & a {
    margin: 0px 4px;
    & img {
      box-shadow: 0px 4px 8px rgba(100, 100, 100, 0.15);
    }
  }
`;
