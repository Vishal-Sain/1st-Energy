import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styled from "styled-components";
import { GiKingJuMask } from "react-icons/gi";
// import GasPlanCarousel from "./GasPlanCarousel";

function PlanCarousel({
  data,
  toggleFuelPlans,
  handleFuelPlansSelect,
  handleButtonClicked,
}) {
  const [background, setBackground] = useState(false);
  const [border, setBorder] = useState(false);

  const handleBackground = () => {
    setBackground((prevBackground) => !prevBackground);
  };
  const handleBorder = () => {
    setBorder((prevBorder) => !prevBorder);
  };

  const Selected = () => {
    toggleFuelPlans();
    handleFuelPlansSelect();
    handleButtonClicked();
    handleBackground();
    handleBorder();
  };
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <>
      <div
        style={{
          backgroundColor: "#eef7fd",
          overflow: "hidden",
          padding: "20px",
          marginTop: "20px",
        }}
      >
        <Slider {...settings}>
          {data.map((plan, index) => (
            <div key={index}>
              <Slide
                background={background}
                border={border}
                className="slide-content"
                style={{
                  margin: "0 10px",
                }}
              >
                <Box1>
                  <Title>
                    <h5>{plan.title}</h5>
                  </Title>
                  <SaverTitle>
                    <h3>{plan.saverTitle}</h3>
                  </SaverTitle>
                </Box1>
                <Seperation>
                  <hr />
                </Seperation>
                <Box2>
                  <CombinedLess>
                    <Less>
                      <h3>{plan.less}</h3>
                    </Less>
                    <DefaultOffer>
                      <h5>{plan.defaultOffer}</h5>
                    </DefaultOffer>
                  </CombinedLess>
                  <OfferDesc>
                    <p>{plan.description}</p>
                  </OfferDesc>
                  <DiscountBox>
                    <Discount>
                      <OgPrice>{plan.originalPrice}</OgPrice>
                      <DiscountPrice>{plan.discountPrice}</DiscountPrice>
                      <GST>{plan.gst}</GST>
                    </Discount>
                    <Monthly>
                      <p>{plan.monthlyCost}</p>
                    </Monthly>
                  </DiscountBox>
                </Box2>
                <Box3>
                  <PlanBenefits>
                    <BenefitsHeading>
                      <h6>{plan.planBenefitsHeading}</h6>
                    </BenefitsHeading>
                    <List>
                      {plan.benefits.map((benefit, benefitIndex) => (
                        <ListItem key={benefitIndex} data-test-id={benefit}>
                          <div className="flex">
                            <CheckIcon
                              aria-hidden="true"
                              focusable="false"
                              data-prefix="fas"
                              data-icon="check-circle"
                              class="svg-inline--fa fa-check-circle fa-w-16 fa-sm icon-marker check-icon"
                              role="img"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 512 512"
                            >
                              <path
                                fill="currentColor"
                                d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"
                              ></path>
                            </CheckIcon>
                            <div class="typography__container ">
                              <Description class="MuiTypography-root MuiTypography-subtitle1">
                                {benefit}
                              </Description>
                            </div>
                          </div>
                        </ListItem>
                      ))}
                    </List>
                  </PlanBenefits>
                </Box3>
                <Box4>
                  <Rates>
                    <RatesHeading>
                      <div>{plan.ratesHeading}</div>
                    </RatesHeading>
                    <RatesButton>
                      <div>
                        <button onClick={Selected}>{plan.buttonText}</button>
                      </div>
                    </RatesButton>
                    <FactSheet>
                      <div>
                        <p>
                          <a
                            href={plan.factSheetUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {plan.energyFact}
                          </a>
                        </p>
                      </div>
                    </FactSheet>
                  </Rates>
                </Box4>
              </Slide>
            </div>
          ))}
        </Slider>
      </div>
      {/* <GasPlanCarousel /> */}
    </>
  );
}

export default PlanCarousel;

const Slide = styled.div`
  background: ${(props) =>
    props.background ? "rgba(0, 173, 238, 0.1)" : "white"};
  border: ${(props) =>
    props.border ? "1px solid rgb(0, 173, 238)" : "1px solid black"};
  height: "100%";
  margin: "0 10px";
`;
const Box1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px 20px;
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
  padding: 30px 20px;
`;
const Seperation = styled.div`
  padding: 0 20px;
  hr {
    border-color: 00000014;
  }
`;

const CombinedLess = styled.div`
  display: flex;
  flex-direction: column;
  text-align: flex-start;
`;

const Less = styled.div`
  h3 {
    font-size: 36px;
    color: rgb(0, 173, 238);

    margin: 0;
    font-style: normal;
    font-family: "Montserrat", sans-serif;
    font-weight: 700;
    line-height: 1.2;
    letter-spacing: -0.0125em;
    text-transform: initial;
  }
`;
const DefaultOffer = styled.div`
  margin-top: -5px;
  h5 {
    color: rgb(102, 102, 102);

    margin: 0;
    font-size: 20px;
    font-style: normal;
    font-family: "Montserrat", sans-serif;
    font-weight: 700;
    line-height: 1.2;
    letter-spacing: -0.0125em;
    text-transform: initial;
  }
`;
const OfferDesc = styled.div``;
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
const OgPrice = styled.span`
  font-size: 28px;
  color: rgb(0, 173, 238);

  font-weight: 600;
  position: relative;
  font-style: normal;
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  letter-spacing: -2px;

  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    border-top: 4px solid rgba(255, 0, 0, 0.8);
    height: 60%;
    height: calc(60% - 7px);
    width: 100%;
    -webkit-transform: rotateZ(-10deg);
    transform: rotateZ(-10deg);
  }
`;
const DiscountPrice = styled.span`
  font-size: 32px;
  font-weight: 700;
  margin-left: 5px;
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
const Box3 = styled.div``;

const PlanBenefits = styled.div`
  min-height: 190px;
  padding: 20px 30px;
  -webkit-box-flex: 1;
  flex-grow: 1;
  background: linear-gradient(
    90deg,
    rgb(45, 51, 146) 0%,
    rgb(0, 173, 238) 100%
  );
  color: rgb(255, 255, 255);
`;

const BenefitsHeading = styled.div`
  // padding-top:24px;
  margin: 0;
  font-size: 24px;
  h6 {
    font-weight: 500;
    font-size: 24px;
    margin: 0;
  }
`;
const List = styled.ul`
  list-style: none;
  //   background-color: red;
  padding: 10px 0;
  margin: 0;
`;

// const ListItem = styled.li`
// // padding: 3px 0;
// //   display: flex;
// //   align-items: center;
//   margin-bottom: 10px;

//   div {
//     display: flex;
//     align-items: center;
//   }
// `;

const CheckIcon = styled.svg`
  height: 18px;
  margin-right: 10px;
  width: 18px;
`;

// const Description = styled.p`
//   margin: 0;
//   font-size: 16px;
// `;

const ListItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  /* Adjust flex properties */
  div {
    display: flex;
    align-items: flex-start;
    flex: 1; /* Expand to fill available space */
  }
`;

const Description = styled.p`
  margin: 0;
  font-size: 14px;

  white-space: wrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Box4 = styled.div`
  padding: 20px 30px;
`;

const Rates = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const RatesHeading = styled.div`
  margin-bottom: 20px;
  font-size: 16px;
  font-weight: 500;
  color: rgb(68, 68, 79);
  font-style: normal;
  font-family: "Montserrat", sans-serif;
`;
const RatesButton = styled.div`
  margin-bottom: 10px;
  button {
    font-size: 24px !important;
    font-weight: 700 !important;
    background-color: rgb(233, 122, 59);
    border: none;
    padding: 20px 30px;
    border-radius: 10px;
    color: white;
  }
`;
const FactSheet = styled.div`
  // margin-bottom: 10px;
  a {
    font-size: 16px;
    font-weight: 500;
    color: rgb(68, 68, 79);
    text-decoration: none;
    font-style: normal;
    font-family: "Montserrat", sans-serif;

    &:hover {
      color: red;
      text-decoration: underline;
      color: rgb(68, 68, 79);
    }
  }
`;
