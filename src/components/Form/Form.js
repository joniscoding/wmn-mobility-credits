import React, { useState } from 'react';
import Step1 from 'components/Form/Step1/Step1';
import Step2 from 'components/Form/Step2/Step2';
import ProgressIndicator from './ProgressIndicator/ProgressIndicator';
// Import styling
import s from './Form.module.scss';

const Form = () => {
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <div className="wmnds-col-1 wmnds-col-md-3-4 ">
      <ProgressIndicator currentStep={currentStep} />
      <div className={`wmnds-p-lg ${s.formWrapper}`}>
        {currentStep === 1 && <Step1 setCurrentStep={setCurrentStep} />}
        {currentStep === 2 && <Step2 setCurrentStep={setCurrentStep} />}
      </div>
    </div>
  );
};

export default Form;
