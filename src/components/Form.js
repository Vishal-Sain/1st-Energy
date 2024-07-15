import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import MobileAuthentication from "./MobileAuthentication";
import StepsFooter from "./StepsFooter";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

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
  // flex: 0 0 50%;
  // flex: 0 0 calc(50% - 5px); /* 50% width minus half the gap */

  display: flex;
  width: calc(50% - 5px);
  flex-grow: 0;
  max-width: 50%;
  flex-basis: 50%;
  //    margin-right: 20px;
  //   flex:2;

  .react-datepicker-wrapper {
    width: 100%;
    
 

  .react-datepicker__input-container {
    width: 100%;
  }

  input {
    width: 100%;
  }
`;

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

  &:hover {
    border: 1px solid rgb(0, 173, 238);
    transition: border 0.3s ease;
  }
`;

// const TitleInput = styled(Input)`
//   width: 40%;  /* Set the width to 50% specifically for the title input */
// `;

const FullWidthInput = styled(Input)`
  width: 100%;
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
  border: 1.2px solid rgb(4, 128, 222);
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
    color: rgb(4, 128, 222);
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
  transition: background-color 0.3s;

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
  z-index: 12; /* Ensure the SVG is above the input */
  cursor: pointer;  // Add this line
`;

const TitleInputWrapper = styled.div`
  flex: 0 0 30%; /* 40% width */
  display: flex;
  align-items: center;
  margin-right: 10px;
  position: relative;
`;

const CountryInputWrapper = styled.div`
  flex: 0 0 60%; /* 60% width */
  display: flex;
  align-items: center;
  position: relative;
`;

const InputWrapperEmail = styled(InputWrapper)`
  flex-direction: column;
`;

const Mail = styled.div`
  font-size: 13px;
  flex-basis: 100%;
  margin-top: 3px;
  line-height: 16px;
  margin-left: 12px;
  margin-right: 14px;
  // letter-spacing: 0.1px;
  color: rgba(0, 0, 0, 0.54);
  font-family: "Montserrat", sans-serif;
  font-weight: normal;
`;

const CalendarIcon = styled.div`
  position: absolute;
  top: 12px;
  right: 10px;
  // top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  background: red;
   z-index: 20;


   &:hover {
    color: #000; // Optional: Change color on hover to give a visual feedback
  }
`;
const DateInputWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  position: relative;
`;




const Form = ({ title, onSubmit , onBack }) => {
  const [selectedTitle, setSelectedTitle] = useState("Title*");
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleSelectedTitle = (title) => {
    setSelectedTitle(title);
    toggleDropdown(); // Close the dropdown after selecting an option
  };

  const [phoneNumber, setPhoneNumber] = useState("");
  const otpInputRef = useRef(null);

  const [selectedDate, setSelectedDate] = useState(null);
  // const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
  const inputRef = useRef(null);

  const handlePhoneNumber = (event) => {
    setPhoneNumber(event.target.value);
  };
  const handlePhoneSubmit = (event) => {
    event.preventDefault();

    // Log phone number for debugging
    console.log("Phone Number:", phoneNumber);

    // Phone Validations

    const regex = /^\d{10}$/; // Allow only 10 digits
    if (!regex.test(phoneNumber)) {
      alert("Invalid Phone Number");
      return;
    }

    // Call BE API
    // Show OTP field

    //  Set focus to the first OTP input
    setTimeout(() => {
      if (otpInputRef.current) {
        otpInputRef.current.focus();
      }
    }, 100);

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

  // const handleIconClick = () => {
  //   setIsDatePickerOpen(!isDatePickerOpen);
  //   inputRef.current.focus();
  // };

  const [selectedDateString, setSelectedDateString] = useState('');


  // const handleIconClick = () => {
  //   if (inputRef.current) {
  //     inputRef.current.setFocus();
  //   }
  // };

  
  const formatDateString = (value) => {
    const cleaned = value.replace(/\D/g, ''); // Remove non-digit characters
    const match = cleaned.match(/^(\d{0,2})(\d{0,2})(\d{0,4})$/);
    if (match) {
      const [, day, month, year] = match;
      return [day, month, year].filter(Boolean).join('/');
    }
    return value;
  };
  

  const [inputDate, setInputDate] = useState('');
  // const handleDateChangeRaw = (e) => {
  //   const value = e.target.value;
  //   setInputDate(value);

  //   // Check if the input matches the desired format
  //   const datePattern = /^(\d{2})\/(\d{2})\/(\d{4})$/;
  //   const match = value.match(datePattern);

  //   if (match) {
  //     const [_, day, month, year] = match;
  //     const parsedDate = new Date(`${year}-${month}-${day}`);

  //     if (!isNaN(parsedDate.getTime())) {
  //       setSelectedDate(parsedDate);
  //     }
  //   }
  // };


  const handleDateChange = (e) => {
    const value = e.target.value;
    const formattedDate = formatDateString(value);
    setSelectedDateString(formattedDate);
  
    const datePattern = /^(\d{2})\/(\d{2})\/(\d{4})$/;
    const match = formattedDate.match(datePattern);
  
    if (match) {
      const [_, day, month, year] = match;
      const parsedDate = new Date(`${year}-${month}-${day}`);
      if (!isNaN(parsedDate.getTime())) {
        setSelectedDate(parsedDate);
      }
    }
  };


  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);

  const handleIconClick = () => {
    setIsDatePickerOpen(!isDatePickerOpen);
  };
  

  return (
    <>
      <FormContainer onSubmit={handlePhoneSubmit}>
        <RowTitle>
          <TitleInputWrapper onClick={toggleDropdown}>
            <Input id="title" placeholder="" />
            {/* <DownArrow /> */}
            <SvgIcon
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="caret-down"
              className="svg-inline--fa fa-caret-down fa-w-10 css-14i2jwe"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
            >
              <path
                fill="currentColor"
                d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
              ></path>
            </SvgIcon>
            <Fieldset>
              <Legend>Title*</Legend>
            </Fieldset>
            <Label htmlFor="title"> {selectedTitle} </Label>
            {showDropdown && (
              <Dropdown>
                {title.map((titl, index) => (
                  // option !== selectedOption && (
                  <DropdownItem
                    key={index}
                    onClick={() => handleSelectedTitle(titl)}
                  >
                    {titl}
                  </DropdownItem>
                  // )
                ))}
              </Dropdown>
            )}
          </TitleInputWrapper>

          <CountryInputWrapper>
            <Input id="country" placeholder="First Name"/>
            <Fieldset>
              <Legend>First Name*</Legend>
            </Fieldset>
            <Label htmlFor="country">First Name*</Label>
          </CountryInputWrapper>
        </RowTitle>
        <Row>
          <InputWrapper>
            <Input id="country" placeholder="Middle Name" />
            <Fieldset>
              <Legend>Middle Name</Legend>
            </Fieldset>
            <Label htmlFor="country">Middle Name</Label>
          </InputWrapper>
          <InputWrapper>
            <Input id="country" placeholder="Last Name" />
            <Fieldset>
              <Legend>Last Name*</Legend>
            </Fieldset>
            <Label htmlFor="country">Last Name*</Label>
          </InputWrapper>
        </Row>
        <Row>
          <InputWrapper>
            <Input
              type="text"
              id="country"
              placeholder="Mobile Number"
              value={phoneNumber}
              onChange={handlePhoneNumber}
            />
            <Fieldset>
              <Legend>Mobile Number*</Legend>
            </Fieldset>
            <Label htmlFor="country">Mobile Number*</Label>
          </InputWrapper>

          <InputWrapper>
            <Input id="country" placeholder="Home Phone Number" />
            <Fieldset>
              <Legend>Home Phone Number</Legend>
            </Fieldset>
            <Label htmlFor="country">Home Phone Number</Label>
          </InputWrapper>
        </Row>

        {/* <Row>
          <InputWrapperDate>
            <Input
              id="field7"
              type="text"
              placeholder="Date of birth (DD/MM/YYYY)*"
            />
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="calendar-alt" className="svg-inline--fa fa-calendar-alt fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
    <path fill="currentColor" d="M12 64C12 28.7 40.7 0 76 0H372c35.3 0 64 28.7 64 64H448V128H0V64H12zM416 128V85.3c0-14.7-12.6-27.3-27.3-27.3H59.3c-14.7 0-27.3 12.6-27.3 27.3V128H416zM0 160V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V160H0zM384 448H64c-8.8 0-16-7.2-16-16V256H400V432C400 440.8 392.8 448 384 448z"></path>
  </svg>
            <Fieldset>
              <Legend>Date of birth (DD/MM/YYYY)*</Legend>
            </Fieldset>
            <Label htmlFor="field7">Date of birth (DD/MM/YYYY)*</Label>
          </InputWrapperDate>
        </Row> */}

        {/* <Row>
          <InputWrapperDate>
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              customInput={
                <Input
                  id="field7"
                  type="text"
                  placeholder="Date of birth (DD/MM/YYYY)*"
                  ref={inputRef}
                />
              }
              dateFormat="dd/MM/yyyy"
              open={isDatePickerOpen}
              onClickOutside={() => setIsDatePickerOpen(false)}
              onSelect={() => setIsDatePickerOpen(false)}
            />
            <CalendarIcon onClick={handleIconClick}>
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="calendar-alt"
                className="svg-inline--fa fa-calendar-alt fa-w-14"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  fill="currentColor"
                  d="M12 64C12 28.7 40.7 0 76 0H372c35.3 0 64 28.7 64 64H448V128H0V64H12zM416 128V85.3c0-14.7-12.6-27.3-27.3-27.3H59.3c-14.7 0-27.3 12.6-27.3 27.3V128H416zM0 160V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V160H0zM384 448H64c-8.8 0-16-7.2-16-16V256H400V432C400 440.8 392.8 448 384 448z"
                ></path>
              </svg>
            </CalendarIcon>
            <Fieldset>
              <Legend>Date of birth (DD/MM/YYYY)*</Legend>
            </Fieldset>
            <Label htmlFor="field7">Date of birth (DD/MM/YYYY)*</Label>
          </InputWrapperDate>
        </Row> */}

        <Row>
          <InputWrapperDate>
            <DatePicker
                ref={inputRef}

              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              dateFormat="dd/MM/yyyy"
              customInput={
                <DateInputWrapper>
                  <FullWidthInput
                    ref={inputRef}
                    id="field7"
                    type="text"
                    // value={
                    //   selectedDate
                    //     ? selectedDate.toLocaleDateString("en-GB")
                    //     : ""
                    // }
                    // value={inputDate}
                    // onChange={handleDateChangeRaw}
                    value={selectedDateString}
                    onChange={handleDateChange}
                    placeholder="Date of birth (DD/MM/YYYY)*"
                  />
                  <Fieldset>
                    <Legend>Date of birth (DD/MM/YYYY)*</Legend>
                  </Fieldset>
                  <Label htmlFor="field2">Date of birth (DD/MM/YYYY)*</Label>
                  <CalendarIcon onClick={handleIconClick}>
                    <SvgIcon
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="calendar-alt"
                      className="svg-inline--fa fa-calendar-alt fa-w-14 css-15utj56"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path
                        fill="currentColor"
                        d="M152 64h-40V40c0-13.3-10.7-24-24-24S64 26.7 64 40v24H24C10.7 64 0 74.7 0 88v48h448V88c0-13.3-10.7-24-24-24h-40V40c0-13.3-10.7-24-24-24s-24 10.7-24 24v24h-40V40c0-13.3-10.7-24-24-24s-24 10.7-24 24v24H152V40c0-13.3-10.7-24-24-24s-24 10.7-24 24v24zm296 72H0v320c0 13.3 10.7 24 24 24h400c13.3 0 24-10.7 24-24V136zm-32 320H32V192h384v264zM384 384H64c-8.8 0-16-7.2-16-16V256c0-8.8 7.2-16 16-16h320c8.8 0 16 7.2 16 16v112c0 8.8-7.2 16-16 16zm-32-96H96v64h256v-64z"
                      ></path>
                    </SvgIcon>
                  </CalendarIcon>
                </DateInputWrapper>
              }
              open={isDatePickerOpen}
  onClickOutside={() => setIsDatePickerOpen(false)}
  onSelect={() => setIsDatePickerOpen(false)}
            />
          </InputWrapperDate>
        </Row>

        <Row>
          <InputWrapperEmail>
            <FullWidthInput
              id="field7"
              type="text"
              placeholder="Email Address*"
            />
            <Fieldset>
              <Legend>Email Address*</Legend>
            </Fieldset>
            <Label htmlFor="field7">Email Address*</Label>
          </InputWrapperEmail>
          <Mail>
            Please make sure the email address is correct. This is where we'll
            send you your bills.
          </Mail>
        </Row>
        {/* <StepsFooter onNext={onSubmit} /> */}
        <StepsFooter onNext={handlePhoneSubmit} onBack={onBack} />
      </FormContainer>
    </>
  );
};

export default Form;
