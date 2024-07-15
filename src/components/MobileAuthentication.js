import React,{useEffect, useState} from 'react'
import { useRef } from 'react';
import styled from 'styled-components';
import MobileStepsFooter from './MobileStepsFooter';

export default function MobileAuthentication({length = 6, onOtpSubmit = () =>{} , onNext , onBack}) {
    const [otp, setOtp] = useState(new Array(length).fill(""));
    const inputRefs = useRef([]);

    useEffect(()=>{
      console.log("Component mounted, focusing on input field");

        if(inputRefs.current[0]){
            inputRefs.current[0].focus();
        }
    },[]);

    // console.log(inputRefs);

    const handleChange =(index,e)=>{
        const value = e.target.value;
        if(isNaN(value)) return;

        const newOtp = [...otp];
        // Allow only one input

        newOtp[index] = value.substring(value.length - 1);
        setOtp(newOtp);

        // SUbmit Trigger
        const combinedOtp = newOtp.join("");
        if(combinedOtp.length === length)
        onOtpSubmit(combinedOtp);

        // Move to next input if current field is filled
        if(value && index<length-1 && inputRefs.current[index+1]){
            inputRefs.current[index+1].focus(); 
        }
    };


    const handleClick =(index)=>{
        inputRefs.current[index].setSelectionRange(1,1);

        // optional
    //     if(index > 0 && !otp[index - 1]){
    //         inputRefs.current[otp.indexOf("")].focus();
    //     }
    // };

    const firstEmptyIndex = otp.indexOf('');
    if (firstEmptyIndex !== -1 && firstEmptyIndex < index) {
      inputRefs.current[firstEmptyIndex].focus();
    } else {
      inputRefs.current[index].focus();
    }
  };

    const handleKeyDown =(index, e)=>{
        if(
            e.key === "Backspace" &&
            !otp[index] &&
            index > 0 &&
            inputRefs.current[index - 1]
        ){
            // Move focus to the previous input field on backspace
            inputRefs.current[index - 1].focus();                               
        }
    };


    const handleNextClick = () => {
      const combinedOtp = otp.join('');
      if (combinedOtp.length === length) {
        onOtpSubmit(combinedOtp);
        onNext();
      } else {
        alert('Please fill in all OTP fields.');
      }
    };

  return (
    <>
    <FormContainer>
    <Card>
      <CardHeading>
        <h4>Mobile Authentication</h4>
      </CardHeading>
      <Details>
        <div>A message with a verification code has been sent to your mobile number .</div>
        <div>Please enter the code to continue.</div>

      </Details>

      
        <Container >
          <ContainerInside>
         
    <OTP>
        {otp.map((value, index) =>{
            return(
                <input
                    key={index}
                    type="text"
                    value={value}
                    ref={(input) => (inputRefs.current[index] = input)}
                    // ref={(input) => {
                    //     inputRefs.current[index] = input;
                    //     if (index === 0) {
                    //       otpInputRef.current = input;
                    //     }
                    //   }}
                    onChange={(e) => handleChange(index,e)}
                    onClick={() => handleClick(index)}
                    onKeyDown={(e) => handleKeyDown(index,e)}
                    className = "otpInput"
                    />
            );
        
    })}
    </OTP>
    </ContainerInside>
        </Container>
        <MobileStepsFooter onNext={handleNextClick} onBack={onBack} />
        </Card>
    </FormContainer>
    </>
);
};

const OTP = styled.div`
    .otpInput{
        width: 40px;
        height: 40px;
        margin: 5px;
        text-align: center;
        font-size: 1.2em;
        border-radius: 10px;
        border: none;
          border: 1px solid rgb(118, 118, 118);

    }
`
const FormContainer = styled.form`
  // width: 100%;
  max-width: 800px;
  margin: 0 auto;
  //   padding: 20px;
`;


const Card = styled.div`
  padding: 30px;
  margin: 40px 0;   
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

const Details = styled.div`

    margin-bottom: 1.37rem;

    div{
         font-size: 16px;
    font-style: normal;
    font-family: 'Montserrat', sans-serif;
    font-weight: normal;
    line-height: 22px;
    text-transform: initial;
    // margin-bottom: 1.37rem;
    margin-top: 0px;
        color: rgba(0, 0, 0, 0.54);


    }
`

const Container = styled.div`
  // border: 1px solid black;
  border-radius: 10px;
  margin-bottom: 50px;
`;

const ContainerInside = styled.div`
//   padding: 30px;
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
  background-color: grey; /* Red background for the second button */

  &:hover {
    background-color: darkgrey; /* Darker red on hover */
  }
`;

