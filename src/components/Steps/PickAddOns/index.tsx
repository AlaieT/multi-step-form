import React from "react";

import Button from "../../Button";
import Wrap from "../Wrap";

import type { PickAddOnsProps } from "../../../types";

import styles from "../../../styles/components/steps/pickAddOns.module.scss";

const PickAddOns = ({
  title,
  subTitle,
  addOns,
  register,
  getValues,
  changeStep,
}: PickAddOnsProps) => {
  const planMode = getValues("planMode");

  return (
    <Wrap>
      <div id={styles.content}>
        <div id={styles.header}>
          <h1>{title}</h1>
          <h2>{subTitle}</h2>
        </div>
        {Object.keys(addOns).map((key) => {
          const { label, discription, pricing } = addOns[key];

          return (
            <div key={key} className={styles.option}>
              <input
                type="checkbox"
                defaultChecked={getValues(key)}
                {...register(key)}
              />
              <span></span>
              <div className={styles.title}>
                <label>{label}</label>
                <p>{discription}</p>
              </div>
              +$
              {planMode ? `${pricing.yearly}/yr` : `${pricing.monthly}/mo`}
            </div>
          );
        })}
      </div>
      <div id={styles.controls}>
        <Button id={styles.go_back} onClick={() => changeStep(1)}>
          Go Back
        </Button>
        <Button id={styles.next_step} onClick={() => changeStep(3)}>
          Next Step
        </Button>
      </div>
    </Wrap>
  );
};

export default PickAddOns;
