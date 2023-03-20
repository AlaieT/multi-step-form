import React from "react";

import Button from "../../Button";

import styles from "../../../styles/components/steps/pickAddOns.module.scss";
import Checkbox from "../../Checkbox";

interface PickAddOnsProps {}

const PickAddOns = () => {
  return (
    <div id={styles.step}>
      <div id={styles.header}>
        <h1>Pick add-ons</h1>
        <h2>Add-ons help enhance your gaming experience.</h2>
      </div>
      <div className={styles.option}>
        <Checkbox />
      </div>
      <div className={styles.option}>
        <Checkbox />
      </div>
      <div className={styles.option}>
        <Checkbox />
      </div>
      <Button id={styles.go_back}>Go Back</Button>
      <Button id={styles.next_step}>Next Step</Button>
    </div>
  );
};

export type { PickAddOnsProps };
export default PickAddOns;
