import React from "react";

import ToggleSwitch from "../../ToggleSwitch";
import Button from "../../Button";

import IconArcade from "../../../../public/images/icon-arcade.svg";
import IconAdvanced from "../../../../public/images/icon-advanced.svg";
import IconPro from "../../../../public/images/icon-pro.svg";

import styles from "../../../styles/components/steps/selectYourPlan.module.scss";

interface SelectYourPlanProps {}

const SelectYourPlan = () => {
  return (
    <div id={styles.step}>
      <div id={styles.header}>
        <h1>Select your plan</h1>
        <h2>You have the option of monthly or yearly billing.</h2>
      </div>
      <div className={styles.option}>
        <img src={IconArcade} width={40} height={40} alt="icon-arcade" />
        <label>Arcade</label>
        <p>$9/mo</p>
      </div>
      <div className={styles.option}>
        <img src={IconAdvanced} width={40} height={40} alt="icon-advanced" />
        <label>Advanced</label>
        <p>$12/mo</p>
      </div>
      <div className={styles.option}>
        <img src={IconPro} width={40} height={40} alt="icon-pro" />
        <label>Pro</label>
        <p>$15/mo</p>
      </div>
      <div id={styles.switch}>
        <label>Monthly</label>
        <ToggleSwitch />
        <label>Yearly</label>
      </div>
      <Button id={styles.go_back}>Go Back</Button>
      <Button id={styles.next_step}>Next Step</Button>
    </div>
  );
};

export type { SelectYourPlanProps };
export default SelectYourPlan;
