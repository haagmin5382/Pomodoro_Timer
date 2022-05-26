import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  width: 100vw;
  height: 10vh;
  text-align: center;
  background-color: tomato;
  color: rgb(16, 134, 70);
  font-size: 3vw;
`;

const Header = () => {
  return <HeaderContainer>Pomodoro Timer</HeaderContainer>;
};

export default Header;
