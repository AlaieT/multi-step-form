import React from "react";

import Button from "../../Button";
import Wrap from "../Wrap";

import type { StepProps } from "../../MultiStepForm";

import styles from "../../../styles/components/steps/summary.module.scss";

const Summary = ({ getValues }: Omit<StepProps, "register" | "errors">) => {
  return (
    <Wrap>
      <div id={styles.content}>
        <div id={styles.header}>
          <h1>Finishing up</h1>
          <h2>Double-check everything looks OK before confirming.</h2>
        </div>
        <div id={styles.info}>
          <div id={styles.plan}>
            <label>Arcade ({getValues("yearly") ? "Yearly" : "Monthly"})</label>
            <p>Change</p>
            <p>$90/yr</p>
          </div>
          <div className={styles.add_ons}>
            <span>Online service</span>
            <span>+$10/yr</span>
          </div>
          <div className={styles.add_ons}>
            <span>Larger storage</span>
            <span>+$20/yr</span>
          </div>
        </div>
        <div id={styles.total}>
          <span>Total (per year)</span>
          <span>$120/yr</span>
        </div>
      </div>
      <div id={styles.controls}>
        <Button id={styles.go_back}>Go Back</Button>
        <Button id={styles.next_step}>Confirm</Button>
      </div>
    </Wrap>
  );
};

export default Summary;
