import styled from "styled-components";

function FuelPlansHeader({ fuelPlansSelected, buttonClicked }) {
  return (
    <>
      <Header>
        <Inside>
          <Plans>
            <div>
              <span>Plans</span>
              <span>Selected</span>
            </div>
            <Electricity fuelPlansSelected={fuelPlansSelected}>
              <a href="">
                {fuelPlansSelected ? (
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="check-circle"
                    className="svg-inline--fa fa-check-circle fa-w-16 icon"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"
                    ></path>
                  </svg>
                ) : (
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="circle"
                    className="svg-inline--fa fa-circle fa-w-16 icon"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z"
                    ></path>
                  </svg>
                )}
                <div>
                  <span>Electricity</span>
                  <span>Service</span>
                </div>
              </a>
            </Electricity>
          </Plans>
          <PlansButton buttonClicked={buttonClicked}>
            <button>
              {fuelPlansSelected
                ? "Proceed with selected"
                : "Select Fuel Plans"}
            </button>
          </PlansButton>
        </Inside>
      </Header>
    </>
  );
}

export default FuelPlansHeader;

const Header = styled.div`
  // background: red;
  background-color: rgb(22, 68, 152);
`;
const Inside = styled.div`
  margin: auto 10px;
  display: flex;
  justify-content: space-between;
  padding: 15px;
`;
const Plans = styled.div`
  display: flex;
  // background-color: green;
  color: white;

  div {
    display: flex;
    flex-direction: column;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 21px;
    letter-spacing: 1px;
  }
`;
const Electricity = styled.div`
  margin-left: 100px;
  justify-content: center;
  align-items: center;

  div {
    text-transform: uppercase;
    margin-left: 5px;
  }
  a {
    text-decoration: none;
    color: white;
    opacity: ${({ fuelPlansSelected }) => (fuelPlansSelected ? "1" : ".5")};
    display: flex;
    justify-content: space-between;

    &:hover {
      opacity: 1;
    }
  }
  span {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
`;
const PlansButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  button {
    padding: 14px 20px;
    font-style: normal;
    font-family: "Montserrat", sans-serif;
    font-weight: 700;
    font-size: 20px;
    border-radius: 10px;
    border: 1px solid orange;
    cursor: pointer;
    background: ${({ buttonClicked }) =>
      buttonClicked ? "rgb(233, 122, 59)" : "rgb(22, 68, 152)"};

    color: white;
    opacity: ${({ buttonClicked }) => (buttonClicked ? "1" : ".5")};

    &:hover {
      background: ${({ buttonClicked }) =>
        buttonClicked ? "rgb(220 ,90, 54)" : "rgb(233, 122, 59)"};
      cursor: ${({ buttonClicked }) =>
        buttonClicked ? "pointer" : "not-allowed"};
    }
  }
`;
