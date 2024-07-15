import React from 'react';
import styled from 'styled-components';
import Search from './Search'
import { useState } from 'react';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 880px;
  margin: -40px auto;
`;

const ButtonContainer = styled.div`
  position: relative;
  flex: 0 0 calc(33.33% - 10px);
  margin-bottom: 20px;

  @media (max-width: 768px) {
    flex: 0 0 calc(100% - 10px);
  }
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  padding: 14px 0;
  background-color: #2196f3;
  border: 1px solid #f7f7f7;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s;


  text-transform: uppercase;
  font-size: 16px;
  font-weight: 700;
  font-family: Montserrat, sans-serif;
  color: rgb(255, 255, 255);

  &:hover {
    background-color: #0d47a1;
  }

  & svg {
    margin-right: 10px;
  }
`;

const Dropdown = styled.div`
  position: absolute;
//   top: 100%;
  top: -40px;

  padding: 14px;
  
  left: 0;
  width: 90.1%;
  background-color: #2196f3;
  color: white;
//   border: 1px solid #ccc;
  border-top: none;
//   border-radius: 0 0 10px 10px;
border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1;
  text-transform: uppercase;
  font-size: 16px;
  font-weight: 700;
  font-family: Montserrat, sans-serif;
  color: rgb(255, 255, 255);
  
  
`;

const DropdownItem = styled.div`

  padding: 10px;
  cursor: pointer;
  transition: background-color .3s;

  &:hover {
    // background-color: #0d47a1;
    background-color: white;
    color: #0d47a1;
    border-radius: 10px;
  }
`;

const SearchButton = styled(Button)`
  // background-color: #4caf50;
  background-color: ${props => props.darkBackground ? '#24e02c' : '#4caf50'}; // Toggle background color


  &:hover {
     background-color: #087f23;
  }
`;

const SunIcon = styled.svg`
`;



// const SearchSection = () => {
    const SearchSection = ({ options , options2 }) => {
            const [selectedOption, setSelectedOption] = useState(options[0]);
            const [selectedNewOption, setSelectedNewOption] = useState(options2[0]);
            const [showDropdown, setShowDropdown] = useState(false);
            const [showDropdown2, setShowDropdown2] = useState(false);
            const [isClicked, setIsClicked] = useState(false);
            const [darkBackground, setDarkBackground] = useState(false); // Define darkBackground state


            
          
            const toggleDropdown = () => {
              setShowDropdown(!showDropdown);
            };
            const toggleDropdown2 = () => {
              setShowDropdown2(!showDropdown2);
            };
          
            const handleOptionSelect = (option) => {
              setSelectedOption(option);
              toggleDropdown(); // Close the dropdown after selecting an option
            };
            const handleOptionNewSelect = (option) => {
              setSelectedNewOption(option);
              toggleDropdown2(); // Close the dropdown after selecting an option
            };

            
const handleButtonClick = () => {
  setIsClicked(!isClicked);
  setDarkBackground(!isClicked); // Toggle background color based on isClicked

};

  return (
    <Container>
      <ButtonContainer>
        {/* <Button> */}
        <Button onClick={toggleDropdown}>
            
          <svg
          height="20px"
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="bolt"
            className="svg-inline--fa fa-bolt fa-w-10"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
          >
            <path
              fill="currentColor"
              d="M296 160H180.6l42.6-129.8C227.2 15 215.7 0 200 0H56C44 0 33.8 8.9 32.2 20.8l-32 240C-1.7 275.2 9.5 288 24 288h118.7L96.6 482.5c-3.6 15.2 8 29.5 23.3 29.5 8.4 0 16.4-4.4 20.8-12l176-304c9.3-15.9-2.2-36-20.7-36z"
            ></path>
          </svg>
          {selectedOption}
          <svg height="20px" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-down" class="svg-inline--fa fa-caret-down fa-w-10 css-14i2jwe" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path></svg>
        </Button>
        {showDropdown && (
            <Dropdown>
              {options.map((option, index) => (
                // option !== selectedOption && (
                  <DropdownItem key={index} onClick={() => handleOptionSelect(option)}>
                    {option}
                  </DropdownItem>
                // )
              ))}
            </Dropdown>
          )}
      </ButtonContainer>
      <ButtonContainer>
        <Button onClick={toggleDropdown2}>
          <svg
                    height="20px"

            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="home"
            className="svg-inline--fa fa-home fa-w-18"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
          >
            <path
              fill="currentColor"
              d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"
            ></path>
          </svg>
          {selectedNewOption}
          <svg height="20px" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-down" class="svg-inline--fa fa-caret-down fa-w-10 css-14i2jwe" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path></svg>
        </Button>
        {showDropdown2 && (
            <Dropdown>
              {options2.map((option, index) => (
                // option !== selectedOption && (
                  <DropdownItem key={index} onClick={() => handleOptionNewSelect(option)}>
                    {option}
                  </DropdownItem>
                // )
              ))}
            </Dropdown>
          )}
      </ButtonContainer>
      <ButtonContainer>
        <SearchButton darkBackground={darkBackground} onClick={handleButtonClick}>
          <SunIcon
                    height="20px"

            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="sun"
            className="svg-inline--fa fa-sun fa-w-16"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
    fill={isClicked ? '#FFD700' : 'currentColor'} // Change the color when clicked
    d="M256 160c-52.9 0-96 43.1-96 96s43.1 96 96 96 96-43.1 96-96-43.1-96-96-96zm246.4 80.5l-94.7-47.3 33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5-47.4-94.8c-6.4-12.8-24.6-12.8-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4-94.7 47.4c-12.8 6.4-12.8 24.6 0 31l94.7 47.3-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.4-33.5 47.3 94.7c6.4 12.8 24.6 12.8 31 0l47.3-94.7 100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4 94.7-47.3c13-6.5 13-24.7.2-31.1zm-155.9 106c-49.9 49.9-131.1 49.9-181 0-49.9-49.9-49.9-131.1 0-181 49.9-49.9 131.1-49.9 181 0 49.9 49.9 49.9 131.1 0 181z"
            ></path>
          </SunIcon>
          I have solar
          <svg height="20px" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="times" class="svg-inline--fa fa-times fa-w-11 css-14i2jwe" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512"><path fill="currentColor" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path></svg>
        </SearchButton>
      </ButtonContainer>
      <Search />
    </Container>
  );
};

export default SearchSection;




// import React, { useState } from 'react';
// import styled from 'styled-components';
// import Search from './Search';

// const Container = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: space-between;
//   width: 880px;
//   margin: -40px auto;
// `;

// const ButtonContainer = styled.div`
//   position: relative;
//   flex: 0 0 calc(33.33% - 10px);
//   margin-bottom: 20px;

//   @media (max-width: 768px) {
//     flex: 0 0 calc(100% - 10px);
//   }
// `;

// const Button = styled.button`
//   display: flex;
//   align-items: center;
//   justify-content: space-evenly;
//   width: 100%;
//   padding: 14px;
//   background-color: #2196f3;
//   color: #fff;
//   border: 1px solid #f7f7f7;
//   border-radius: 10px;
//   cursor: pointer;
//   transition: background-color 0.3s;
//   font-size: 20px;

//   &:hover {
//     background-color: #0d47a1;
//   }

//   & svg {
//     margin-right: 10px;
//   }
// `;

// const Dropdown = styled.div`
//   position: absolute;
//   top: 100%;
//   left: 0;
//   width: 100%;
//   background-color: #fff;
//   border: 1px solid #ccc;
//   border-top: none;
//   border-radius: 0 0 10px 10px;
//   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
//   z-index: 1;
// `;

// const DropdownItem = styled.div`
//   padding: 10px;
//   cursor: pointer;
//   transition: background-color 0.3s;

//   &:hover {
//     background-color: #f7f7f7;
//   }
// `;

// const SearchButton = styled(Button)`
//   background-color: #4caf50;

//   &:hover {
//     background-color: #087f23;
//   }
// `;

// const SearchSection = ({ options }) => {
//     const [selectedOption, setSelectedOption] = useState(options[0]);
//     const [showDropdown, setShowDropdown] = useState(false);
  
//     const toggleDropdown = () => {
//       setShowDropdown(!showDropdown);
//     };
  
//     const handleOptionSelect = (option) => {
//       setSelectedOption(option);
//       toggleDropdown(); // Close the dropdown after selecting an option
//     };
  
//     return (
//       <Container>
//         <ButtonContainer>
//           <Button onClick={toggleDropdown}>
//             {selectedOption}
//             <svg
//               height="20px"
//               aria-hidden="true"
//               focusable="false"
//               data-prefix="fas"
//               data-icon="caret-down"
//               className="svg-inline--fa fa-caret-down fa-w-10 css-14i2jwe"
//               role="img"
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="0 0 320 512"
//             >
//               <path
//                 fill="currentColor"
//                 d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
//               ></path>
//             </svg>
//           </Button>
//           {showDropdown && (
//             <Dropdown>
//               {options.map((option, index) => (
//                 option !== selectedOption && (
//                   <DropdownItem key={index} onClick={() => handleOptionSelect(option)}>
//                     {option}
//                   </DropdownItem>
//                 )
//               ))}
//             </Dropdown>
//           )}
//         </ButtonContainer>
//         <ButtonContainer>
//           {/* Other buttons */}
//         </ButtonContainer>
//         <ButtonContainer>
//           {/* Other buttons */}
//         </ButtonContainer>
//         <Search />
//       </Container>
//     );
//   };
  
//   export default SearchSection;
