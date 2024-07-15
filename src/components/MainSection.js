import React from 'react';
import styled from 'styled-components';
import SearchSection from './SearchSection';

const StyledMainSection = styled.section`
  height: calc(100vh - 70px);
  background: linear-gradient(90deg, rgb(45, 51, 146) 0%, rgb(0, 173, 238) 100%);
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: white;
  padding: 80px;
`;

const Text1 = styled.div`
  margin-bottom: 15px;
`;

const Heading1 = styled.h1`
  color: #fff;
  line-height: 1;
  letter-spacing: -0.05em;
  font-size: 60px;
  font-style: normal;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  margin: 0;
`;

const Text2 = styled.div`
  margin-bottom: 15px;
`;

const Heading2 = styled.p`
  font-size: 24px;
  margin: 0;
`;

function MainSection() {
  return (
    <StyledMainSection>
      <Container>
        <Text1>
          <Heading1>Compare 1st Energy Plans</Heading1>
        </Text1>
        <Text2>
          <Heading2>To find a plan that's right for you, we just need a few details...</Heading2>
        </Text2>
        {/* Add rest of your main section content here */}
      </Container>
      {/* <SearchSection /> */}
      <SearchSection options={['Electricity & Gas', 'Electricity', 'Gas']} options2={['Residential','Business']} />

    </StyledMainSection>
  );
}

export default MainSection;
