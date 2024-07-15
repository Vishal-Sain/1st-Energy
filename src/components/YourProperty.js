import React from 'react'
import styled from 'styled-components';
// import Form from './Form';
import StepsFooter from './StepsFooter';
import PropertyForm from './PropertyForm';


function YourProperty({onNext , onBack}) {
  return (
    <>
        <Card>
          <CardHeading>
            <h4>Your Property</h4>
          </CardHeading>

          
            <Container >
              <ContainerInside>
                <MapContainer>
                        <ImageContainer>
fvfv
                        </ImageContainer>
                        <BasicDetails>
                            <h3>14 MELBOURNE PL</h3>
                            <h4>Melbourne</h4>
                            <h4>Vic 3000</h4>
                            <h4>Australia</h4>
                        </BasicDetails>
                </MapContainer>
                <Plan>
                    <PlanBox>
                        <h5>What is your plan here?</h5>
                        <SvgIcon aria-hidden="true" focusable="false" data-prefix="fas" data-icon="info-circle" className="svg-inline--fa fa-info-circle fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
  <path fill="currentColor" d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 110c28.667 0 52 23.333 52 52s-23.333 52-52 52-52-23.333-52-52 23.333-52 52-52zm57.25 330h-111c-9.667 0-17.25-7.833-17.25-17.5V370c0-9.667 7.833-17.5 17.25-17.5h24.5V267h-24.5c-9.667 0-17.25-7.833-17.25-17.5s7.833-17.5 17.25-17.5h63c9.667 0 17.25 7.833 17.25 17.5V352h24.5c9.667 0 17.25 7.833 17.25 17.5v60c0 9.667-7.833 17.5-17.25 17.5z"></path>
</SvgIcon>

                    </PlanBox>
                    <Buttons>
                        <Button>
                            <span>
                                I'm changing retailers
                            </span>
                            </Button>
                        <Button2>
                            <span>
                                I'm moving
                            </span>
                            </Button2>
                        
                    </Buttons>
                </Plan>
                <Confirmation>
                    <p>Please confirm your postal address below.</p>
                </Confirmation>
               <PropertyForm state={['Sydney','Melbourne','Cranberra','Hobart']} onSubmit={onNext} onBack={onBack}/>
              </ContainerInside>
            </Container>
          {/* <StepsFooter /> */}
        </Card>
    </>
  )
}

export default YourProperty

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

const Container = styled.div`
  // border: 1px solid black;
  border-radius: 10px;
  // margin-bottom: 50px;
`;

const ContainerInside = styled.div`
//   padding: 30px;
`;

const Confirmation = styled.div`
  p{
    margin-bottom: 10px;
    padding: 0;
    font-size: 16px;
    font-style: normal;
    font-family: 'Montserrat', sans-serif;
    font-weight: normal;
    line-height: 22px;
    letter-spacing: .2px;
  }
`

const Plan = styled.div`
margin-bottom: 40px;
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
  background-color: grey; /* Red background for the second button */

  &:hover {
    background-color: darkgrey; /* Darker red on hover */
  }
`;

const MapContainer = styled.div`
//   background: red;
  // border: 1px solid red;
  border-radius: 4px;
  display: flex;
  
`

const ImageContainer = styled.div`
background: yellow;
width: 200px;
box-sizing: border-box;
padding: 16px;
border-radius: 10px;
`
const BasicDetails = styled.div`
// background: green;
margin: 30px;
display: flex;
justify-content: center;
align-items: flex-start;;
flex-direction: column;
text-transform: uppercase;

h3{
    margin: 0;
    font-size: 24px;
    line-height: 36px;
    color: rgb(0, 173, 238);
    font-style: normal;
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    line-height: 1.2;
    letter-spacing: -1px;
    // text-transform: initial;
}
h4{
    margin: 0;
    font-size: 18px;
    font-style: normal;
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    line-height: 27px;
    // text-transform: initial;
    color: rgba(0, 0, 0, 0.87);

}
`

const SvgIcon = styled.svg`
// position: absolute;
  left: 30px;
  width: 16px;
  height: 20px;
  z-index: 2;  /* Ensure the SVG is above the input */
  pointer-events: none; /* Prevent the SVG from interfering with input focus */

`