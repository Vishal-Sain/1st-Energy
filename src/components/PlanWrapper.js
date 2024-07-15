import React from 'react'
import styled from 'styled-components';

function PlanWrapper() {
  return (
    <>
    <PlanWrap>
        <Plan>
            <PlanHeading>
                <h2>Comparing energy prices for</h2>
                <span>3000</span>
            </PlanHeading>
        </Plan>
        <ProductPlanWrapper>
            <Plan>
                <AlertMessage>
                    <SearchMessageBox>
                        {/* <SearchIcon> */}
                        <svg
          height="20px"
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="bolt"
            className="svg-inline--fa fa-bolt fa-w-10"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
          >
            <path
              fill="currentColor"
              d="M296 160H180.6l42.6-129.8C227.2 15 215.7 0 200 0H56C44 0 33.8 8.9 32.2 20.8l-32 240C-1.7 275.2 9.5 288 24 288h118.7L96.6 482.5c-3.6 15.2 8 29.5 23.3 29.5 8.4 0 16.4-4.4 20.8-12l176-304c9.3-15.9-2.2-36-20.7-36z"
            ></path>
          </svg>
                        {/* </SearchIcon> */}
                        <SearchMessage>
                            You are viewing <SearchFor>Electricity</SearchFor>
                        </SearchMessage>
                    </SearchMessageBox>
                </AlertMessage>
            </Plan>
        </ProductPlanWrapper>
    </PlanWrap>
    </>
  )
}

export default PlanWrapper


const PlanWrap = styled.section`
    
`
const Plan = styled.div`
 box-sizing: border-box;
 max-width: 1280px;
//  background-color: green;
 padding: 0 24px;
 `
 const PlanHeading = styled.div`
//  background: red;
 display: flex;
 justify-content: center;
 align-items: center;

 h2{
    font-size: 36px;
    font-weight: normal;
    // letter-spacing: -0.05em;
    color: rgb(22, 68, 152);

 }
 span{
    font-size: 36px;
    color: rgb(233, 122, 59);
    font-weight: bold;
    padding-left: 3px;
 }

`
const ProductPlanWrapper = styled.div`

`

const AlertMessage = styled.div`
`

const SearchMessageBox = styled.div`
display: flex;
flex-direction: row;
justify-content: flex-start;
align-items: center;
background-color: pink;
padding: 15px;
font-size:16px;
color: rgb(23, 23, 37);
background-color: rgb(254, 224, 0, 0.2);
border-radius: 10px;

svg{
    color: rgb(135, 206, 235);
}
`
const SearchMessage = styled.div`
margin-left: 8px;
`

const SearchFor = styled.span`
font-weight: bold;
`