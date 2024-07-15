import React, { useEffect, useRef } from "react";
import styled from "styled-components";

function StepsFooter({ onNext, onBack }) {
  // const formSubmitRef = useRef(null);
  // useEffect(() => {
  //   if (onNext) {
  //     // onNext(formSubmitRef);
  //     // onNext(() => formSubmitRef.current && formSubmitRef.current());
  //     onNext(() => {
  //       if (formSubmitRef.current) {
  //         formSubmitRef.current();
  //       }
  //     });
  //   }
  // }, [onNext]);

  // const handleNextClick = () => {
  //   if (formSubmitRef.current) {
  //     formSubmitRef.current();
  //   }
  // };

  return (
    <>
      <StepsFooters>
        <Buttons>
          <button className="button1" onClick={onBack} type="button">
            <span>Back</span>
          </button>
          <button onClick={onNext} type="button">
            <span>Next</span>
          </button>
        </Buttons>
      </StepsFooters>
    </>
  );
}

export default StepsFooter;

const StepsFooters = styled.div`
  margin-top: 30px;
`;

const Buttons = styled.div`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
  align-items: center;
  button {
    color: rgb(255, 255, 255);
    background-color: rgb(0, 173, 238);
    display: flex;
    padding: 0.875rem 1.25rem !important;
    font-size: 14px;
    min-width: 64px;
    box-sizing: border-box;
    font-style: normal;
    text-align: center;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
      box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
      border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    align-items: center;
    font-family: "Montserrat", sans-serif;
    font-weight: 700;
    line-height: 1.2;
    border-radius: 10px;
    text-transform: initial;
    border: none;
    cursor: pointer;

    &:hover{
    background: #0C359E;
    }
  }
  .button1{
    background: transparent;
    color: rgb(0, 173, 238);

    &:hover{
      background: #DFF5FF;
    }
  }
`;
