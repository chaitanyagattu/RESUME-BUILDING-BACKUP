import React, { useState } from "react";
import Stepper from "./Stepper";
import DigitalMarketing from "../components/DigitalMarketing";
import TechnologyInnovation from "../components/Technology&Innovation";
import InfluencerMarketing from "../components/InfluencerMarketing";
import ContentProduction from "../components/ContentProduction";
import PublicRelations from "../components/PublicRelations";
import BrandingDesign from "../components/Branding&Design";

function Mobilestepper() {
  const steps = [
    <div>
      <TechnologyInnovation />
    </div>,
    <div>
      <DigitalMarketing />
    </div>,
    <div>
      <InfluencerMarketing />
    </div>,
    <div>
      <ContentProduction />
    </div>,
    <div>
      <PublicRelations />
    </div>,
    <div>
      <BrandingDesign />
    </div>,
  ];
  //   const [activeStep, setActiveStep] = useState(0);

  //   const handleNext = () => {
  //     setActiveStep((prevStep) => prevStep + 1);
  //   };

  //   const handleBack = () => {
  //     setActiveStep((prevStep) => prevStep - 1);
  //   };

  return (
    <div>
      <Stepper steps={steps} />
    </div>
    // <div>
    //   <div>
    //     Step {activeStep + 1} of {steps.length}
    //   </div>
    //   <Stepper />
    //   <button disabled={activeStep === 0} onClick={handleBack}>Back</button>
    //   <button disabled={activeStep === steps.length - 1} onClick={handleNext}>Next</button>
    // </div>
  );
}

export default Mobilestepper;
