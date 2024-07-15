import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  gap: 20px;
  align-items: center;
  text-align: center;
  padding: 10px 30px;
  margin: 20px 5px;
  border: none;
  color: white;
  border-radius: 10px;
  box-shadow: none;
  background-color: rgb(233, 122, 59);
  text-align: left;
  border: 1px solid white;
  font-size: 17px;
  text-transform: uppercase;
  font-weight: 700;
  cursor: pointer;

  &:hover {
    background-color: rgb(46, 46, 156);
    transition: 0.3s ease-in-out;
  }
`;

function Button({ children }) {
  return <StyledButton>{children}</StyledButton>;
}

export default Button;
