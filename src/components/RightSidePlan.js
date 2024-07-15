import React from "react";
import styled from "styled-components";

function RightSidePlan({
  activeSection,
  completedSections = {},
  isCardVisible,
  isLineVisible,
  isLineBetweenDabba2And3Visible,
}) {
  return (
    <>
      <RightContainer>
        <Main>
          <li>
            <Dabba1>1</Dabba1>
            <YourPlanHeading>
              <h4>Your Plan</h4>
            </YourPlanHeading>
            <ServiceCardList isVisible={isLineVisible}>
              <a href="/user-signup/selected-plan" className="selection">
                <SubStepItem
                  active={activeSection === "Your plan"}
                  className={
                    completedSections["Your plan"] ? "selected-plan" : ""
                  }
                >
                  Selected Plan
                </SubStepItem>
              </a>
              {completedSections["Your plan"] && isCardVisible && (
                <ServiceCard>
                  <CardContainer>
                    <CardBox1>
                      <Heading>
                        <h5>Gas</h5>
                      </Heading>
                      <PlanHeading>
                        <h3>1st Saver Plus</h3>
                      </PlanHeading>
                      <Description>
                        <h6>
                          7% guaranteed discount and 3% pay on time discount off
                          market usage charges
                        </h6>
                      </Description>
                    </CardBox1>
                    <CardBox2>
                      <DiscountBox>
                        <Discount>
                          <DiscountPrice>$214</DiscountPrice>
                          <GST>Incl. GST</GST>
                        </Discount>
                        <Monthly>
                          <p>
                            Monthly cost based on average usage of 159.0MJ / day
                          </p>
                        </Monthly>
                      </DiscountBox>
                    </CardBox2>
                    <CardBox3>
                      <a href="">1st Saver Plus Details</a>
                    </CardBox3>
                  </CardContainer>
                </ServiceCard>
              )}
            </ServiceCardList>
          </li>

          <li>
            <ServiceCardList
              // isVisible={
              //   isLineBetweenDabba2And3Visible &&
              //   activeSection === "Life support and concession"
              // }
              isVisible={isLineBetweenDabba2And3Visible}
            >
              <Dabba2>2</Dabba2>
              <AboutYouHeading>
                <h4>About You</h4>
              </AboutYouHeading>

              <SubStepItem
                active={activeSection === "Your details"}
                className={
                  completedSections["Your details"] ? "selected-plan" : ""
                }
              >
                Your details
              </SubStepItem>
              <SubStepItem
                active={activeSection === "Mobile Authentication"}
                className={
                  completedSections["Mobile Authentication"]
                    ? "selected-plan"
                    : ""
                }
              >
                Mobile Authentication
              </SubStepItem>
              <SubStepItem
                active={activeSection === "Your property"}
                className={
                  completedSections["Your property"] ? "selected-plan" : ""
                }
              >
                Your property
              </SubStepItem>
              <SubStepItem
                active={activeSection === "Your identification"}
                className={
                  completedSections["Your identification"]
                    ? "selected-plan"
                    : ""
                }
              >
                Your identification
              </SubStepItem>
            </ServiceCardList>
          </li>

          <li>
            <Dabba3>3</Dabba3>
            <LifeHeading>
              <h4>Life Support and Concession</h4>
            </LifeHeading>

            <SubStepItem
              active={activeSection === "Life support and concession"}
              className={
                completedSections["Life support and concession"]
                  ? "selected-plan"
                  : ""
              }
            >
              Life support and concession
            </SubStepItem>
          </li>
        </Main>
      </RightContainer>
    </>
  );
}

export default RightSidePlan;

const RightContainer = styled.div`
  // background: red;
  position: sticky;
  top: 10px; /* Adjust this value as needed */
  // width: 100%;
  height: calc(100vh - 40px); /* Adjust based on your top value and padding */
  // padding: 20px;
  overflow-y: auto; /* Enable scrolling if content exceeds the container's height */
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.1); /* Optional: Add a shadow for better separation */
`;

const Main = styled.ul`
  padding-left: 60px;
  margin: 0;
  list-style: none;
  li {
    position: relative;
  }
`;
const Dabba1 = styled.span`
  position: absolute;
  width: 32px;
  height: 32px;
  background: rgb(233, 122, 59);
  color: rgb(255, 255, 255);
  border-radius: 50%;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  left: -60px;
  font-family: Montserrat, sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  z-index: 9;
`;

const Dabba2 = styled(Dabba1)`
  &::after {
    content: "";
    height: 100%;
    background: rgb(233, 122, 59); /* Default color, can be adjusted */
    width: 2px;
    position: absolute;
    top: 16px;
    left: -45px;
    z-index: 1;
    transition: opacity 0.3s ease-in-out; /* Smooth transition */
    opacity: ${({ isVisible }) =>
      isVisible ? 1 : 0}; /* Use opacity for smooth transition */
  }
`;
const Dabba3 = styled(Dabba1)``;

const YourPlanHeading = styled.div`
  margin-bottom: 3px;

  h4 {
    font-size: 18px;
    line-height: 27px;
    font-style: normal;
    font-family: "Montserrat", sans-serif;
    font-weight: 500;
    text-transform: initial;
    margin-bottom: 0;
    margin-top: 0;
  }
`;

const ServiceCardList = styled.div`
  // &::after{
  //   content: "";
  //   height: 100%;
  //   background:rgb(233, 122, 59);
  //     width: 2px;
  //     position: absolute;
  //     top: 16px;
  //     left: -45px;
  //     z-index: 1;
  //     }

  // position: relative; /* Ensure relative positioning for absolute children */

  // &::after {
  //   content: "";
  //   height: 100%;
  //   background: rgb(233, 122, 59); /* Default color, can be adjusted */
  //   width: 2px;
  //   position: absolute;
  //   top: 16px;
  //   left: -45px;
  //   z-index: 1;
  //   // display: ${(props) =>
    props.isVisible ? "block" : "none"}; /* Conditionally show/hide */
  //     display: ${({ isVisible }) =>
    isVisible ? "block" : "none"}; // Toggle visibility based on prop

  //   }

  &::after {
    content: "";
    height: 100%;
    background: rgb(233, 122, 59); /* Default color, can be adjusted */
    width: 2px;
    position: absolute;
    top: 16px;
    left: -45px;
    z-index: 1;
    transition: opacity 0.3s ease-in-out; /* Smooth transition */
    opacity: ${({ isVisible }) =>
      isVisible ? 1 : 0}; /* Use opacity for smooth transition */
  }

  .selection {
    position: relative;
    margin: 4px 0px;
    // display: block;
    cursor: pointer;
    color: #59aeeb;
    font-family: Montserrat, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 21px;
    text-decoration: none;
  }

  .selected-plan {
    position: relative;
    margin: 4px 0px;
    // display: block;
    cursor: pointer;
    color: #59aeeb;
    font-family: Montserrat, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 21px;
    text-decoration: none;
  }

  .selected-plan::before {
    content: "";
    position: absolute;
    left: -18px;
    top: 1px;
    width: 15px;
    height: 15px;
    background-repeat: no-repeat;
    background-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"%3E%3Cpath fill="green" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"%3E%3C/path%3E%3C/svg%3E');
  }
  margin-bottom: 15px;
`;

const ServiceCard = styled.div`
  border: 1px solid rgb(118, 118, 118);
  margin-bottom: 10px;
  border-radius: 10px;
  background: white;
`;

const CardContainer = styled.div`
  margin: 15px;
  display: flex;
  flex-direction: column;
`;
const CardBox1 = styled.div``;
const Heading = styled.div`
  margin-bottom: 3px;
  h5 {
    font-size: 13px;
    line-height: 15px;
    margin: 0px;
    color: rgb(102, 102, 102);
    text-transform: uppercase;
    font-style: normal;
    font-family: "Montserrat", sans-serif;
    font-weight: 700;
    // line-height: 1.2;
    letter-spacing: -0.0125em;
    margin: 0;
  }
`;
const PlanHeading = styled.div`
  margin-bottom: 3px;
  h3 {
    margin: 0;
    color: rgb(0, 173, 238);
    padding: 4px 0px;
    font-size: 19px;
    font-style: normal;
    font-family: "Montserrat", sans-serif;
    font-weight: 700;
    // line-height: 1.2;
    letter-spacing: -1px;
    text-transform: initial;
  }
`;
const Description = styled.div`
  margin-bottom: 3px;
  box-sixing: border-box;
  h6 {
    // line-height: 1.2;
    font-size: 16px;
    font-style: normal;
    font-family: "Montserrat", sans-serif;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.87);
    margin: 0;
  }
`;

const CardBox2 = styled.div`
  margin-bottom: 10px;
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
  color: rgb(0, 173, 238);
  letter-spacing: -1px;
`;

const GST = styled.span`
  font-size: 16px;
  margin-left: 5px;
  color: rgba(0, 0, 0, 0.87);
  font-style: normal;
  font-family: "Montserrat", sans-serif;
  font-weight: normal;
  line-height: 22px;
`;

const Monthly = styled.span`
  font-size: 13px;
  line-height: 15px;
  color: rgb(84, 84, 95);
  font-style: normal;
  font-family: "Montserrat", sans-serif;
  font-weight: normal;
  margin-bottom: 3px;
`;

const CardBox3 = styled.div`
  a {
    text-decoration: underline;
    font-size: 14px;
    cursor: pointer;
    color: rgb(0, 173, 238);
  }
`;

const AboutYouHeading = styled.div`
  margin-bottom: 3px;

  h4 {
    font-size: 18px;
    line-height: 27px;
    font-style: normal;
    font-family: "Montserrat", sans-serif;
    font-weight: 500;
    text-transform: initial;
    margin-bottom: 0;
    margin-top: 0;
  }
`;

const SubSteps = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  margin-bottom: 15px;
  //   display: block;

  li {
    position: relative;
    list-style: none;
  }
`;

// const SubStepItem = styled.span`
//   position: relative;
//   margin: 4px 0px;
//   display: block;
//   cursor: not-allowed;
//   font-family: Montserrat, sans-serif;
//   font-style: normal;
//   font-weight: normal;
//   font-size: 14px;
//   line-height: 21px;
//   // color: rgb(0, 173, 238);
//     color: ${({ active }) => (active ? 'red' : 'grey')};

// `;

const SubStepItem = styled.span`
  position: relative;
  margin: 4px 0px;
  display: block;
  cursor: not-allowed;
  font-family: Montserrat, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 21px;
  color: ${({ active }) => (active ? "grey" : "darkgrey")};

  &:before {
    content: ${({ completed }) =>
      completed
        ? 'url("data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"%3E%3Cpath fill="green" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"%3E%3C/path%3E%3C/svg%3E")'
        : "none"};
    position: absolute;
    left: -20px;
    top: 0;
    width: 16px;
    height: 16px;
  }
`;

const LifeHeading = styled.div`
  margin-bottom: 3px;

  h4 {
    font-size: 18px;
    line-height: 27px;
    font-style: normal;
    font-family: "Montserrat", sans-serif;
    font-weight: 500;
    text-transform: initial;
    margin-bottom: 0;
    margin-top: 0;
  }
`;

// const SubSteps2 = styled(SubSteps)`
//   padding-bottom: 10px;
// `;
// const SubStepItem2 = styled(SubStepItem)`
//   position: relative;
//   list-style: none;
//   padding: 0;
//   // color: ${({ active }) => (active ? "red" : "grey")};
// `;
