import React from "react";
import styled from "styled-components";
import StepsFooter from "./StepsFooter";

function Concessions({onSubmit , onNext , onBack, completedSections}) {

  const handlePhoneSubmit = (event) => {
    event.preventDefault();

    if (onSubmit) {
      onSubmit();
    }
    alert("Form submitted successfully!");
    console.log("submitted");

      // Update completedSections state when form is submitted
      if (!completedSections["Life support and concession"]) {
        completedSections["Life support and concession"] = true; // Update state to mark section as completed
      }
    
  };

  const handleNextClick = () => {
    if (onNext) {
      onNext();
      console.log("Next clicked");
    }
  };

  const handleBackClick = () => {
    if (onBack) {
      onBack();
      console.log("Back clicked");
    }
  };

  

  return (
    <>
        <FormContainer onSubmit={handlePhoneSubmit}>
      <StepsHeader>
        <Heading1>
          <h2>Concessions</h2>
        </Heading1>
      </StepsHeader>
      <div>
        <Card>
          <Plan>
            <PlanBox>
              <h5>Is anyone at your property on life support?</h5>
              <SvgIcon
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="info-circle"
                className="svg-inline--fa fa-info-circle fa-w-16"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 110c28.667 0 52 23.333 52 52s-23.333 52-52 52-52-23.333-52-52 23.333-52 52-52zm57.25 330h-111c-9.667 0-17.25-7.833-17.25-17.5V370c0-9.667 7.833-17.5 17.25-17.5h24.5V267h-24.5c-9.667 0-17.25-7.833-17.25-17.5s7.833-17.5 17.25-17.5h63c9.667 0 17.25 7.833 17.25 17.5V352h24.5c9.667 0 17.25 7.833 17.25 17.5v60c0 9.667-7.833 17.5-17.25 17.5z"
                ></path>
              </SvgIcon>
            </PlanBox>
            <Buttons>
              <Button>
                <span>No</span>
              </Button>
              <Button2>
                <span>Yes</span>
              </Button2>
            </Buttons>
            <LifeSupport>
                <p>If you have life support equipment powered by electricity, please let your current electricity retailer know.</p>
            </LifeSupport>
          </Plan>
          <Plan>
            <PlanBox>
              <h5>Do you have a concession card?</h5>
              <SvgIcon
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="info-circle"
                className="svg-inline--fa fa-info-circle fa-w-16"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 110c28.667 0 52 23.333 52 52s-23.333 52-52 52-52-23.333-52-52 23.333-52 52-52zm57.25 330h-111c-9.667 0-17.25-7.833-17.25-17.5V370c0-9.667 7.833-17.5 17.25-17.5h24.5V267h-24.5c-9.667 0-17.25-7.833-17.25-17.5s7.833-17.5 17.25-17.5h63c9.667 0 17.25 7.833 17.25 17.5V352h24.5c9.667 0 17.25 7.833 17.25 17.5v60c0 9.667-7.833 17.5-17.25 17.5z"
                ></path>
              </SvgIcon>
            </PlanBox>
            <Buttons>
              <Button>
                <span>No</span>
              </Button>
              <Button2>
                <span>Yes</span>
              </Button2>
            </Buttons>
          </Plan>
          <StepsFooter onNext={handleNextClick} onBack={handleBackClick} />
          </Card>
      </div>
        </FormContainer>
    </>
  );
}

export default Concessions;

const FormContainer = styled.form`
  // width: 100%;
  max-width: 800px;
  margin: 0 auto;
  //   padding: 20px;
`;

const StepsHeader = styled.div`
  margin-top: 40px;
  margin-bottom: 30px;
`;
const Heading1 = styled.div`
  h2 {
    margin: 0;
    padding: 0;

    font-size: 36px;
    font-style: normal;
    font-family: "Montserrat", sans-serif;
    font-weight: 700;
    line-height: 54px;
    letter-spacing: -1px;
    text-transform: initial;
  }
`;


const Card = styled.div`
  padding: 30px;
  // border: 1px solid orange;
  background: white;
  border-radius: 10px;
`;



const Plan = styled.div`
margin-bottom: 30px;
`
const PlanBox = styled.div`
display: flex;
// justify-content: center;
align-items: center;
gap: 10px;
h5{
    font-size: 16px;
    font-style: normal;
    font-family: 'Montserrat', sans-serif;
    font-weight: normal;
    line-height: 22px;
    letter-spacing: .2px;
    margin: 10px 0;
    padding: 0;
    
    // position: relative;
}
`


const Buttons = styled.div`
  display: flex;
  gap: 10px;
`;

const Button = styled.button`
  background-color: rgb(22, 68, 152); /* Default button background color */
  color: white;
  padding: 14px 20px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-size: 14px;
  box-sizing: border-box;
       font-style: normal;
       text-align: center;
       transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
       align-items: center;
       font-family: 'Montserrat', sans-serif;
       font-weight: 700;
    

  span {
    display: inline-block;
    margin-left: 5px;
  }

  &:hover {
    background-color: #0056b3; /* Darker blue on hover */
  }
`;

const Button2 = styled(Button)`
  background-color: #C7C8CC; /* Red background for the second button */
color: black;

  &:hover {
    background-color: darkgrey; /* Darker red on hover */
  }
`;


const SvgIcon = styled.svg`
// position: absolute;
  left: 30px;
  width: 16px;
  height: 20px;
  z-index: 2;  /* Ensure the SVG is above the input */
  pointer-events: none; /* Prevent the SVG from interfering with input focus */

`

const LifeSupport = styled.div`
p{
    font-size: 12px;
    font-style: normal;
    font-family: 'Montserrat', sans-serif;
    font-weight: normal;
    line-height: 18px;
    color: grey;
    margin-bottom: 0;
    letter-spacing: .3px;
}
`