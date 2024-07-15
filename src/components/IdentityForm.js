import React, {useState , useEffect} from 'react'
import styled from 'styled-components';
import StepsFooter from './StepsFooter';

function IdentityForm({type , onSubmit , onBack}) {
  const [selectedType, setSelectedType] = useState('Type of ID*');
    const [showDropdown, setShowDropdown] = useState(false);


    
    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
      };
    
      const handleSelectedType = (type) => {
        setSelectedType(type);
        toggleDropdown(); // Close the dropdown after selecting an option
      };

      const handlePhoneSubmit = (event) => {
        event.preventDefault();
    
       
  
    
        if (onSubmit) {
          onSubmit();
        }
        alert("Form submitted successfully!");
        console.log("submitted");
      };
    
      // useEffect(() => {
      //   if (onSubmit) {
      //     onSubmit(handlePhoneSubmit);
      //   }
      // }, [onSubmit]);
     
  return (
    <>

    <FormContainer onSubmit={handlePhoneSubmit}>
        <Row>
        <InputWrapper   onClick={toggleDropdown}>      
              <Input id="title" placeholder="" />
              {/* <DownArrow /> */}
              <SvgIcon aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-down" className="svg-inline--fa fa-caret-down fa-w-10 css-14i2jwe" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
          <path fill="currentColor" d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path>
        </SvgIcon>            
        <Fieldset>
              <Legend>Type of ID*</Legend>
            </Fieldset>
            <Label htmlFor="type"> {selectedType} </Label>
          {showDropdown && (
            <Dropdown>
              {type.map((ty, index) => (
                // option !== selectedOption && (
                  <DropdownItem key={index} onClick={() => handleSelectedType(ty)}>
                    {ty}
                  </DropdownItem>
                // )
              ))}
            </Dropdown>
                      )}
          </InputWrapper>
          <InputWrapper>
            <Input id="country" placeholder="Valid ID Number" />
            <Fieldset>
              <Legend>Valid ID Number*</Legend>
            </Fieldset>
            <Label htmlFor="country">Valid ID Number*</Label>
          </InputWrapper>
        </Row>
        <Row>
          <InputWrapperDate>
            <Input
              id="field7"
              type="text"
              placeholder="Expiry Date (DD/MM/YYYY)*"
            />
             <Fieldset>
              <Legend>Expiry Date (DD/MM/YYYY)*</Legend>
            </Fieldset>
            <Label htmlFor="field7">Expiry Date (DD/MM/YYYY)*</Label>
          </InputWrapperDate>
        </Row>
        <StepsFooter  onNext={handlePhoneSubmit} onBack={onBack} />
        </FormContainer>
    </>
  )
}

export default IdentityForm


const FormContainer = styled.form`
  // width: 100%;
  max-width: 800px;
  margin: 0 auto;
  //   padding: 20px;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  flex-wrap: wrap;
  // gap: 20px;

  &:nth-child(4),
  &:nth-child(5) {
    flex-direction: column;
  }
`;

const RowTitle = styled(Row)`
  justify-content: flex-start;
`;

const InputWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  margin-right: 10px;
  position: relative;

  &:last-child {
    margin-right: 0;
  }
`;

const InputWrapperDate = styled(InputWrapper)`
// flex: 1 0 50%; 
// flex: 0 0 calc(50% + 5px); /* 50% width minus half the gap */

  display: flex;
  width: calc(50% - 5px);
  flex-grow: 0;
        max-width: calc(50% - 5px);
        flex-basis: calc(50% - 5px);
//    margin-right: 20px;
//   flex:2;
  `


const Input = styled.input`
  width: 100%;
  padding: 12px;
  border-radius: 10px;
  box-sizing: border-box;
  outline: none;
  border: none;
  position: relative;
  border: 1px solid rgb(118, 118, 118);



  &::placeholder {
    font-size: 16px; /* Change this to your desired font size */
    color: #aaa; /* Optionally change the color as well */
  }

  &:focus + fieldset {
    visibility: visible;
  }

  &:focus + fieldset legend {
    // color: blue;
    // font-size: 12px;
    visibility: hidden;
  }

  &:focus + fieldset + label {
    
    font-size: 12px;
    color: blue;
    transform: translate(-10px, -20px) scale(0.75);
    // visibility: visible;
  }

  &:placeholder-shown + fieldset + label {
    visibility: visible;
}
&:not(:placeholder-shown) + fieldset + label {
    visibility: hidden;
      }

      &:hover{
        border: 1px solid rgb(0,173,238);
        transition: border 0.3s ease;

      }
      
`;

// const TitleInput = styled(Input)`
//   width: 40%;  /* Set the width to 50% specifically for the title input */
// `;

const FullWidthInput = styled(Input)`
  width: 100%;
`;

const DownArrow = styled.span`
  position: relative;
  display: inline-block;
  width: 20px;
  height: 20px;
  margin-left: -30px;
  pointer-events: none;

  &::after {
    content: "▼";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 12px;
    color: #666;
  }
`;

const Fieldset = styled.fieldset`
  position: absolute;
  top: -8px;
  left: 0;
  right: 0;
  bottom: 0;
  margin: 0;
  padding: 0;
  pointer-events: none;
  border: 1.2px solid rgb(4,128,222);
  border-radius: 10px;
  transition: border-color 0.3s ease;
  visibility: hidden;
`;

const Legend = styled.legend`
  padding: 0 10px;
  font-size: 12px;
  color: #666;
//   transition: color 0.3s ease, font-size 0.3s ease;
`;

const Label = styled.label`
  position: absolute;
  top: 8px;
  left: 6px;
    background: white;
    // margin: auto 4px;

  padding: 0 5px;
  font-size: 16px;
  color: #666;
  pointer-events: none;
  // transform: translate(14px, 20px) scale(1);
  transition: top 0.3s ease, left 0.3s ease, font-size 0.3s ease,
    color 0.3s ease, transform 0.3s ease;
  ${Input}:focus ~ & {
      visibility: visible;
    top: -2px;
    left: 6px;
    font-size: 12px;
    color: rgb(4,128,222);
    // background: none;
    transform: translateY(-50%);
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
  z-index: 10;
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

const SvgIcon = styled.svg`
  position: absolute;
  right: 10px;
  width: 20px;
  height: 20px;
  z-index: 2;  /* Ensure the SVG is above the input */
  pointer-events: none; /* Prevent the SVG from interfering with input focus */
`;
