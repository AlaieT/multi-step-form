import React, { useState } from "react";

import Steps from "../Steps";

import styles from "../../styles/components/multiStepFrom.module.scss";

const MultiStepForm = () => {
  const [step, setStep] = useState<number>(0);

  return (
    <div id={styles.box}>
      <div id={styles.steps}>
        <nav>
          <ul>
            <li onClick={() => setStep(0)}>
              <label>STEP 1</label>
              <h3>YOUR INFO</h3>
            </li>
            <li onClick={() => setStep(1)}>
              <label>STEP 2</label>
              <h3>SELECT PLAN</h3>
            </li>
            <li onClick={() => setStep(2)}>
              <label>STEP 3</label>
              <h3>ADD-ONS</h3>
            </li>
            <li onClick={() => setStep(3)}>
              <label>STEP 4</label>
              <h3>SUMMARY</h3>
            </li>
          </ul>
        </nav>
      </div>
      {step == 0 && <Steps.YourInfo/>}
      {step == 1 && <Steps.SelectYourPlan/>}
      {step == 2 && <Steps.PickAddOns/>}
      {step == 3 && <Steps.Summary/>}
    </div>
  );
};

export default MultiStepForm;
