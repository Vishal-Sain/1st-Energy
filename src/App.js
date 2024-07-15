import React from "react";
import Navbar from "./components/Navbar";
import MainSection from "./components/MainSection";
import PlanWrapper from "./components/PlanWrapper";
import PlanCarousel from "./components/PlanCarousel";
import Footer from "./components/Footer";
import FuelPlansHeader from "./components/FuelPlansHeader";
import { useState } from "react";
import GasPlanCarousel from "./components/GasPlanCarousel";
import plansData from "./plansData";
import SecondPage from "./components/SecondPage";

function App() {
  const [showFuelPlans, setShowFuelPlans] = useState(false); // State to manage visibility of FuelPlansHeader
  const [fuelPlansSelected, setFuelPlansSelected] = useState(false); // State to manage visibility of FuelPlansHeader
  const [buttonClicked, setButtonClicked] = useState(false); // State to manage visibility of FuelPlansHeader

  const toggleFuelPlans = () => {
    setShowFuelPlans((prevState) => !prevState);
  };

  const handleFuelPlansSelect = () => {
    setFuelPlansSelected(true);
  };

  const handleButtonClicked = () => {
    setButtonClicked(true);
  };

  return (
    <>
      <Navbar />
      <MainSection />
      <PlanWrapper />
      <PlanCarousel
      data = {plansData}
        toggleFuelPlans={toggleFuelPlans}
        handleFuelPlansSelect={handleFuelPlansSelect}
        handleButtonClicked={handleButtonClicked}
      />
      <GasPlanCarousel />
      {showFuelPlans && (
        <FuelPlansHeader
          fuelPlansSelected={fuelPlansSelected}
          buttonClicked={buttonClicked}
        />
      )}
      <Footer />
      <SecondPage  data1 = {plansData} />
    </>
  );
}

export default App;
