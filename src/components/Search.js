import React from 'react';
import styled from 'styled-components';

const StyledSearch = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: 850px;
  border-radius: 10px;
  width: 100%;
  // background-color: pink;
`;

const AddressContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  // background-color: green;
  padding: 20px 0;
`;

const AddressLabel = styled.label`
  color: white;
  padding-left: 10px;
  margin-bottom: -10px;
`;

const SearchAddress = styled.div`
  display: flex;
  position: relative; /* Set position to relative */
  width: 66.66%;
  margin-right: 4px; /* Added margin to create space between input and button */
  input {
    padding: 17px 40px !important;
    // flex: 0 0 calc(66.66% - 10px); /* Adjusted width to take up 2 parts */
    border-radius: 10px;
    border: none;
    width: 100%;
    font-size:17px;
    margin-right: 0;
    // padding-left: 40px; /* Adjusted padding-left to accommodate the icon */
  }
  svg {
    position: absolute; /* Set position to absolute */
    left: 10px; /* Adjusted left position to position the icon */
    top: 50%; /* Align the icon vertically */
    transform: translateY(-50%); 
    height: 20px;
    width: 20px;}
`;

const SearchButton = styled.button`
margin-left: 10px;
  padding: 15px 8px; /* Adjusted padding to match the input field */
  flex: 0 0 calc(33.33% - 10px); /* Adjusted width to take up 1 part */
  border: 1px solid #f7f7f7;
  border-radius: 10px;
  color: white;
  background-color: orange;
  cursor: pointer;
  transition: background-color 0.3s;
  font-size: 20px;
  font-weight: 700;

  
  &:hover{
    background-color: orangered;
  }
`;

const Searching = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  width: 100%;
  // width: 880px;
  // background-color: red;
  // margin-top: 20px;

`

const PromoCodeLink = styled.a`
  text-decoration: none;
  color: #f7f7f7;
  transition: color 0.3s;
  text-align: center;
  justify-content: center;
  margin: 0 auto;
  margin-top: 30px;
  cursor: pointer;

  &:hover {
    color: #fff;
    text-decoration: underline;
  }
`;

function Search() {
  return (
    <StyledSearch>
      <AddressContainer>
        <AddressLabel>Enter your Address, Postcode or NMI for personalised results</AddressLabel>
      </AddressContainer>
      <Searching >
        <SearchAddress>
          <svg height="20px" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" class="svg-inline--fa fa-search fa-w-16 css-1tgf9yz" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path></svg>
          <input
            aria-invalid="false"
            autoComplete="off"
            id="google-map-demo"
            placeholder="Unit 12, 34 My Street Lane, MyTown"
            type="text"
          />
        </SearchAddress>
        <SearchButton>Search</SearchButton>
      </Searching>
      <PromoCodeLink>Got a promo code?</PromoCodeLink>
    </StyledSearch>
  );
}

export default Search;





















