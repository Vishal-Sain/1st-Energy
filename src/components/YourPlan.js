import React from 'react'
import styled from 'styled-components';
import StepsFooter from './StepsFooter';

function YourPlan({data1 = [], onNext , onBack}) {
    const plan  = data1[0];
    const handleNextClick = () => {
      if (onNext) {
        onNext();
        console.log("yes");
      }
    };

    // const handleBackClick = () => {
    //   if (onBack) {
    //     onBack();
    //   }
    // };
    
  return (
    <>
    <StepsHeader>
        <Heading1>

    <h2>Your Plan</h2>
        </Heading1>
        <Heading2>
    <p>Find plans and deals</p>

        </Heading2>
    </StepsHeader>
    <div>
        <FormContainer>
        <Card>
        <CardHeading>
            <h4>Gas Plan</h4>
        </CardHeading>
        {/* {Array.isArray(data1) && data1.map((plan, index) => (
            <div key={index}> */}
                {plan && (
          <Container key={plan.id}>
            <ContainerInside>
        <Box1>
                  <Title>
                    <h5>{plan.title}</h5>
                  </Title>
                  <SaverTitle>
                    <h3>{plan.saverTitle}</h3>
                  </SaverTitle>
                  <CombinedLess>
                   
                    <DefaultOffer>
                      <h6>{plan.defaultOffer}</h6>
                    </DefaultOffer>
                  </CombinedLess>
                </Box1>
                <Box2>
                  
                  
                  <DiscountBox>
                    <Discount>
                      <DiscountPrice>{plan.discountPrice}</DiscountPrice>
                      <GST>{plan.gst}</GST>
                    </Discount>
                    <Monthly>
                      <p>{plan.monthlyCost}</p>
                    </Monthly>
                  </DiscountBox>
                </Box2>
                <Box3>
                    <ButtonBox>
                        <button><span>1st Saver Plus details</span></button>
                    </ButtonBox>
                </Box3>
                </ContainerInside>
        </Container>
                //   ))}
                  )}

        <LastHeading>
            <h5>Great Savings for your Home and Business</h5>
        </LastHeading>
       <StepsFooter onNext={handleNextClick} onBack={onBack}/>
        </Card>

    </FormContainer>
    </div>
    </>
  )
}

export default YourPlan

const FormContainer = styled.form`
  // width: 100%;
  max-width: 800px;
  margin: 0 auto;
  //   padding: 20px;
`;


const StepsHeader = styled.div`
margin-top: 40px;
margin-bottom: 30px;
`
const Heading1 = styled.div`
h2{
    margin: 0;
    padding: 0;

    font-size: 36px;
    font-style: normal;
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    line-height: 54px;
    letter-spacing: -1px;
    text-transform: initial;
}
`
const Heading2 = styled.div`
margin-top: 10px;   
p{
    margin: 0;
    padding: 0;
    font-size: 16px;
    font-style: normal;
    font-family: 'Montserrat', sans-serif;
    font-weight: normal;
    line-height: 22px;
    color: rgba(0, 0, 0, 0.87);
    

}
`



const Box1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
//   padding: 30px 20px;
`;
const Title = styled.div`
  font-size: 22px;
  margin-top: 15px;
  h5 {
    margin: 0;
    font-style: normal;
    font-family: "Montserrat", sans-serif;
    font-weight: 700;
    line-height: 1.2;
    letter-spacing: -0.0125em;
    color: rgb(102, 102, 102);
    text-transform: uppercase;
  }
`;
const SaverTitle = styled.div`
  font-size: 39px;
  h3 {
    padding: 14px 0px;
    margin: 0;
    color: rgb(0, 173, 238);
    font-style: normal;
    font-family: "Montserrat", sans-serif;
    font-weight: 700;
    line-height: 1.2;
    letter-spacing: -1px;
    text-transform: initial;
  }
`;
const Box2 = styled.div`
//   padding: 30px 20px;
`;


const CombinedLess = styled.div`
  display: flex;
  flex-direction: column;
//   text-align: flex-start;
justify-content: center;
align-items: center;
`;


const DefaultOffer = styled.div`
  margin-top: -5px;
  h6 {
    color: rgb(102, 102, 102);
    // color: rgba(0, 0, 0, 0.87);

    margin: 0;
    font-size: 16px;
    font-style: normal;
    font-family: "Montserrat", sans-serif;
    font-weight: 400;
    line-height: 1.2;
    letter-spacing: -0.0125em;
    text-transform: initial;
  }
`;
const DiscountBox = styled.div`
  p {
    margin: 0;
  }
`;

const Discount = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: baseline;
`;

const DiscountPrice = styled.span`
  font-size: 32px;
  font-weight: 700;
  // margin-left: 5px;
  color: rgb(0, 173, 238);
  letter-spacing: -1px;
`;

const GST = styled.span`
  font-size: 16px;
  margin-left: 5px;
`;

const Monthly = styled.span`
  font-size: 12.5px;
  color: rgb(84, 84, 95);
  font-style: normal;
  font-family: "Montserrat", sans-serif;
  font-weight: normal;
`;

const Card = styled.div`
  padding: 30px;
  // border: 1px solid orange;
  background: white;
  border-radius: 10px;

`

const CardHeading = styled.div`
h4{
    font-size: 18px;
    font-style: normal;
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    line-height: 27px;
    text-transform: initial;
    margin-bottom: 1.37rem;
    margin-top: 0px;
}
`

const Container = styled.div`
    border: 1px solid black;
    border-radius: 10px;
    margin-bottom: 50px;
`

const ContainerInside = styled.div`
    padding: 30px;
`

const Box3 = styled.div`
margin-top: 1.375rem !important;

`
const ButtonBox = styled.div`
display: flex;
justify-content: center;
align-items: center;

button{
    color: rgb(255, 255, 255);
    background-color: rgb(0, 173, 238);
    display: flex;
    padding: 0.875rem 1.25rem !important;
    font-size: 14px;
    min-width: 64px;
    box-sizing: border-box;
    font-style: normal;
    text-align: center;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    align-items: center;
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    line-height: 1.2;
    border-radius: 10px;
    text-transform: initial;
    border: none;
}
`
const LastHeading= styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    h5{
        padding: 0;
        margin: 0;
        font-size: 20px;
        font-style: normal;
        font-family: 'Montserrat', sans-serif;
        font-weight: 700;
        line-height: 1.2;
        letter-spacing: -0.0125em;
        text-transform: initial;
    }
  
`

