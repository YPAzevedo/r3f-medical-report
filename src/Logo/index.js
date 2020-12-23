import React from 'react';
import styled from '@emotion/styled'

import logo from '../assets/logo.svg'

function Logo(props) {
  return <StyledImg alt="logo" {...props} src={logo} />;
}

export default Logo;

// 💅🏻 styles
const StyledImg = styled.img`
  position: absolute;
  top: 15px;
  left: 15px;
  z-index: 100;
`;
