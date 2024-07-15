import React from 'react';
import styled from 'styled-components';
import photo from '../Assets/1st energy image.png'

const StyledNavbar = styled.nav`
  display: block;
  height: 70px;
//   width: 100vw;
`;

function Navbar() {
  return (
    <StyledNavbar>
      <div>
        <img
          src={photo}
          alt=""
          style={{ height: '60px', paddingLeft: '10px' }}
        />
      </div>
    </StyledNavbar>
  );
}

export default Navbar;
