import React from "react";

import Button from "../../Button";

import styles from "../../../styles/components/steps/pickAddOns.module.scss";
import Checkbox from "../../Checkbox";

interface PickAddOnsProps {}

const PickAddOns = () => {
  return (
    <div id={styles.step}>
      <div id={styles.content}>
        <div id={styles.header}>
          <h1>Pick add-ons</h1>
          <h2>Add-ons help enhance your gaming experience.</h2>
        </div>
        <div className={styles.option}>
          <Checkbox />
          <div className={styles.title}>
            <label>Online service</label>
            <p>Access to multiplayer games</p>
          </div>
          <span>+$10/yr</span>
        </div>
        <div className={styles.option}>
          <Checkbox />
          <div className={styles.title}>
            <label>Larger storage</label>
            <p>Extra 1TB of cloud save</p>
          </div>
          <span>+$20/yr</span>
        </div>
        <div className={styles.option}>
          <Checkbox />
          <div className={styles.title}>
            <label>Customizable profile</label>
            <p>Custom theme on your profile</p>
          </div>
          <span>+$20/yr</span>
        </div>
      </div>
      <div id={styles.controls}>
        <Button id={styles.go_back}>Go Back</Button>
        <Button id={styles.next_step}>Next Step</Button>
      </div>
    </div>
  );
};

export type { PickAddOnsProps };
export default PickAddOns;
