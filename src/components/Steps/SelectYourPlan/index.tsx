import React from "react";

import styles from "../../../styles/components/steps/selectYourPlan.module.scss";

interface SelectYourPlanProps {}

const SelectYourPlan = () => {
  return (
    <div id={styles.step}>
      <div id={styles.header}>
        <h1>Select your plan</h1>
        <h2>You have the option of monthly or yearly billing.</h2>
      </div>
      <div></div>
    </div>
  );
};

export type { SelectYourPlanProps };
export default SelectYourPlan;
