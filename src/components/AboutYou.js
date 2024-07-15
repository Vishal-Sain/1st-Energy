import React, { useState, useRef } from "react";
import styled from "styled-components";
import StepsFooter from "./StepsFooter";
import Form from "./Form";

function AboutYou({ handleNext , onNext , onBack}) {
  const formSubmitRef = useRef(null);

  // const handleFormSubmit = (submitHandler) => {
  //   formSubmitRef.current = submitHandler;
  // };

  // const handleNextClick = () => {
  //   if (formSubmitRef.current) {
  //     handleNext(formSubmitRef.current); // Pass the form submit handler to the parent component
  //   }

  //   console.log(handleNextClick);
  // };

  return (
    <>
      <StepsHeader>
        <Heading1>
          <h2>About You</h2>
        </Heading1>
        <Heading2>
          <p>Tell us a bit more about yourself</p>
        </Heading2>
      </StepsHeader>
      <div>
        <Card>
          <CardHeading>
            <h4>Your Details</h4>
          </CardHeading>

          <Container>
            <ContainerInside>
              <Form
                title={["Mr", "Mrs", "Miss", "Ms", "Mx", "Dr"]}
                // onSubmit={handleFormSubmit}
                onSubmit={onNext} onBack={onBack}
              />
            </ContainerInside>
          </Container>
          {/* <StepsFooter onNext={handleNextClick}/> */}
        </Card>
      </div>
    </>
  );
}

export default AboutYou;

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
const Heading2 = styled.div`
  margin-top: 10px;
  p {
    margin: 0;
    padding: 0;
    font-size: 16px;
    font-style: normal;
    font-family: "Montserrat", sans-serif;
    font-weight: normal;
    line-height: 22px;
    color: rgba(0, 0, 0, 0.87);
  }
`;

const Card = styled.div`
  padding: 30px;
  // border: 1px solid orange;
  background: white;
  border-radius: 10px;
`;

const CardHeading = styled.div`
  h4 {
    font-size: 18px;
    font-style: normal;
    font-family: "Montserrat", sans-serif;
    font-weight: 500;
    line-height: 27px;
    text-transform: initial;
    margin-bottom: 1.37rem;
    margin-top: 0px;
  }
`;

const Container = styled.div`
  // border: 1px solid black;
  border-radius: 10px;
  // margin-bottom: 50px;
`;

const ContainerInside = styled.div`
  //   padding: 30px;
`;
