import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.div`
  height: 80px;
  text-align: center;
  box-shadow: 10px 5px 5px lightgray;
`;

export const Link = styled(NavLink)`
  color: black;
  margin-left: 30px;
  font-family: serif;
  font-size: 50px;
  :hover {
    color: #3f51b5;
  }
`;
