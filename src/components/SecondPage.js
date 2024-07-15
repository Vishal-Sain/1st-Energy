import React, { useState, useRef, useEffect } from "react";
import YourPlan from "./YourPlan";
import styled from "styled-components";
import AboutYou from "./AboutYou";
import YourProperty from "./YourProperty";
import YourIdentification from "./YourIdentification";
import Concessions from "./Concessions";
import RightSidePlan from "./RightSidePlan";
import MobileAuthentication from "./MobileAuthentication";

function SecondPage({ data1 }) {
  const [activeSection, setActiveSection] = useState("Your details");
  const sections = useRef([]);
  const mobileAuthRef = useRef(null); // Ref to store the MobileAuthentication component
  const [completedSections, setCompletedSections] = useState({});
  const [isCardVisible, setIsCardVisible] = useState(false); // State for card visibility
  const [isLineVisible, setIsLineVisible] = useState(false);
  const [isLineBetweenDabba2And3Visible, setIsLineBetweenDabba2And3Visible] =
    useState(false);

  const handleScroll = () => {
    const sectionOffsets = sections.current.map(
      (section) => section?.offsetTop ?? 0
    );

    const scrollPosition = window.scrollY + window.innerHeight / 2;

    const currentSectionIndex = sectionOffsets.findIndex((offset, index) => {
      const nextOffset = sectionOffsets[index + 1] || Infinity;
      return scrollPosition >= offset && scrollPosition < nextOffset;
    });

    const sectionNames = [
      "Your plan",
      "Your details",
      "Mobile Authentication",
      "Your property",
      "Your identification",
      "Life support and concession",
    ];

    // if (
    //   sectionNames[currentSectionIndex] &&
    //   sectionNames[currentSectionIndex] !== activeSection
    // ) {
    //   setActiveSection(sectionNames[currentSectionIndex]);
    // }
    const newActiveSection = sectionNames[currentSectionIndex];
    if (newActiveSection && newActiveSection !== activeSection) {
      setActiveSection(newActiveSection);
    }
  };

  
  

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeSection]);

  // Function to handle the "Next" button click

  const handleNextClick = (currentSection) => {
    console.log("Next Clicked: ", currentSection);

    setCompletedSections((prev) => ({ ...prev, [currentSection]: true }));

    if (currentSection === "Your plan") {
      setActiveSection("Your details");
      setIsCardVisible(true); // Show the card when moving to the next section
      setIsLineVisible(true);
    } else if (currentSection === "Your identification") {
      setActiveSection("Life support and concession");
      setIsLineBetweenDabba2And3Visible(true); // Show the line between Dabba2 and Dabba3
    } else if (currentSection === "Life support and concession") {
      // Handle form submission and display green tick
      // Stay on the same section
      // You can add your form submission logic here if needed
      alert("Form submitted successfully!");
      setCompletedSections((prev) => ({
        ...prev,
        ["Life support and concession"]: true,
      }));
      return;
    }

    const currentIndex = sections.current.findIndex(
      (section) => section && section.dataset.section === currentSection
    );
    if (currentIndex < sections.current.length - 1) {
      sections.current[currentIndex + 1].scrollIntoView({ behavior: "smooth" });
    }

    console.log("isCardVisible", isCardVisible);
    console.log("completedSections:", completedSections);
  };

  const handleBackClick = (currentSection) => {
    console.log("Back Clicked: ", currentSection);

    setCompletedSections((prev) => ({ ...prev, [currentSection]: false }));
    if (currentSection === "Your details") {
      setActiveSection("Your plan");
      setIsCardVisible(false); // Hide the card when moving back to the previous section
      setIsLineVisible(false);
    } else if (currentSection === "Life support and concession") {
      setActiveSection("Your identification");
      setIsLineBetweenDabba2And3Visible(false); // Hide the line between Dabba2 and Dabba3
    }

    const currentIndex = sections.current.findIndex(
      (section) => section && section.dataset.section === currentSection
    );
    if (currentIndex > 0) {
      sections.current[currentIndex - 1].scrollIntoView({ behavior: "smooth" });
    }
    console.log("isCardVisible", isCardVisible);
  };

  useEffect(() => {
    console.log("isCardVisible updated:", isCardVisible);
  }, [isCardVisible]);

  return (
    <>
      <Main>
        <MainPage>
          {/* <PageCenter> */}
          <Left>
            <LeftInner>
              <div>
                <SectionWrapper
                  ref={(el) => (sections.current[0] = el)}
                  data-section="Your plan"
                  isActive={activeSection === "Your plan"}
                isFirst
                >
                  <YourPlan
                    data1={data1}
                    onNext={() => handleNextClick("Your plan")}
                    onBack={() => handleBackClick("Your plan")}
                  />
                </SectionWrapper>
                <SectionWrapper
                  ref={(el) => (sections.current[1] = el)}
                  data-section="Your details"
                  isActive={activeSection === "Your details"}

                >
                  {/* Pass handleNextClick as handleNext prop */}
                  <AboutYou
                    onNext={() => handleNextClick("Your details")}
                    onBack={() => handleBackClick("Your details")}
                  />
                </SectionWrapper>
                <SectionWrapper
                  ref={(el) => (sections.current[2] = el)}
                  data-section="Mobile Authentication"
                  isActive={activeSection === "Mobile Authentication"}

                >
                  {/* Set ref to MobileAuthentication component */}
                  <MobileAuthentication
                    onNext={() => handleNextClick("Mobile Authentication")}
                    onBack={() => handleBackClick("Mobile Authentication")}
                  />
                </SectionWrapper>
                <SectionWrapper
                  ref={(el) => (sections.current[3] = el)}
                  data-section="Your property"
                  isActive={activeSection === "Your property"}

                >
                  <YourProperty
                    onNext={() => handleNextClick("Your property")}
                    onBack={() => handleBackClick("Your property")}
                  />
                </SectionWrapper>
                <SectionWrapper
                  ref={(el) => (sections.current[4] = el)}
                  data-section="Your identification"
                  isActive={activeSection === "Your identification"}

                >
                  <YourIdentification
                    onNext={() => handleNextClick("Your identification")}
                    onBack={() => handleBackClick("Your identification")}
                  />
                </SectionWrapper>
                <SectionWrapper
                  ref={(el) => (sections.current[5] = el)}
                  data-section="Life support and concession"
                  isActive={activeSection === "Life support and concession"}

                >
                  <Concessions
                    onNext={() =>
                      handleNextClick("Life support and concession")
                    }
                    onBack={() =>
                      handleBackClick("Life support and concession")
                    }
                  />
                </SectionWrapper>
              </div>
            </LeftInner>
          </Left>
          <Right>
            <RightInner>
              <RightSidePlan
                activeSection={activeSection}
                completedSections={completedSections}
                isCardVisible={isCardVisible}
                isLineVisible={isLineVisible}
                isLineBetweenDabba2And3Visible={isLineBetweenDabba2And3Visible}
              />
            </RightInner>
          </Right>
          {/* </PageCenter> */}
        </MainPage>
      </Main>
    </>
  );
}

export default SecondPage;

const Main = styled.section`
  display: flex;
  justify-content: center;
  padding: 40px 0;
  background: #eef7fd;
`;

const MainPage = styled.div`
  // border: 1px solid red;
  // padding: 0 30px;
  // display: flex;
  // justify-content: center;
  // align-items: center;

  display: flex;
  justify-content: space-between;
  width: 90%; /* Adjust this to control the overall width */
  max-width: 1280px; /* Maximum width to ensure it doesn't stretch too much */
  margin: 0 auto;
`;
const Left = styled.div`
  // border: 1px solid green;
  flex-grow: 0;
  max-width: 66.666667%;
  flex-basis: 66.666667%;
  margin-left: 60px;
`;
const Right = styled.div`
  // border: 1px solid blue;
  flex-grow: 0;
  max-width: 33.333333%;
  flex-basis: 33.333333%;
  margin-right: 60px;
  position: relative;
`;
const LeftInner = styled.div`
  margin-right: 40px;
  // border: 1px solid pink;
`;

const RightInner = styled.div`
  height: 100%;
  position: relative;
`;

const SectionWrapper = styled.div`
  opacity: ${(props) => (props.isActive || props.isFirst ? 1 : 0.5)};
  pointer-events: ${(props) => (props.isActive || props.isFirst ? "auto" : "none")};
  cursor: ${(props) => (props.isActive || props.isFirst ? "auto" : "default")};
`;  

