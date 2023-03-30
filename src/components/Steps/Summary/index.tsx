import React from "react";

import Button from "../../Button";
import Wrap from "../Wrap";

import type { SummaryProps } from "../../../types";

import styles from "../../../styles/components/steps/summary.module.scss";

const Summary = ({
  title,
  subTitle,
  plans,
  addOns,
  isValid,
  setValue,
  getValues,
  changeStep,
}: SummaryProps) => {
  const planType = getValues("plan");
  const planMode = getValues("planMode") ? "yearly" : "monthly";
  const planPostfix = planMode === "yearly" ? "yr" : "mo";
  const totalPrice =
    plans[planType].pricing[planMode] +
    Object.keys(addOns)
      .map((key) => (getValues(key) ? addOns[key].pricing[planMode] : 0))
      .reduce((prev, curr) => prev + curr);

  setValue("totalPrice", totalPrice, { shouldValidate: false });

  return (
    <Wrap>
      <div id={styles.content}>
        <div id={styles.header}>
          <h1>{title}</h1>
          <h2>{subTitle}</h2>
        </div>
        <div id={styles.info}>
          <div id={styles.plan}>
            <label>
              {planType} ({planMode})
            </label>
            <Button id={styles.change_plan} onClick={() => changeStep(1)}>
              Change
            </Button>
            <p>${`${plans[planType].pricing[planMode]}/${planPostfix}`}</p>
          </div>
          {Object.keys(addOns).map((key) =>
            getValues(key) ? (
              <div key={"summary_" + key} className={styles.add_ons}>
                <span>{addOns[key].label}</span>
                <span>
                  + ${addOns[key].pricing[planMode]}/{planPostfix}
                </span>
              </div>
            ) : null
          )}
        </div>
        <div id={styles.total}>
          <span>Total (per year)</span>
          <span>
            ${totalPrice}/{planPostfix}
          </span>
        </div>
      </div>
      <div id={styles.controls}>
        <Button id={styles.go_back} onClick={() => changeStep(2)}>
          Go Back
        </Button>
        <Button id={styles.next_step} type="submit" disabled={!isValid}>
          Confirm
        </Button>
      </div>
    </Wrap>
  );
};

export default Summary;
