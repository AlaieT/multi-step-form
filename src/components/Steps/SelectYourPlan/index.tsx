import React, { useState } from "react";

import ToggleSwitch from "../../ToggleSwitch";
import Button from "../../Button";
import Wrap from "../Wrap";

import type { SelectYourPlanProps } from "../../../types";

import styles from "../../../styles/components/steps/selectYourPlan.module.scss";

const SelectYourPlan = ({
  title,
  subTitle,
  plans,
  register,
  getValues,
  changeStep,
}: SelectYourPlanProps) => {
  const [planMode, setPlanMode] = useState(getValues("planMode"));

  return (
    <Wrap>
      <div id={styles.content}>
        <div id={styles.header}>
          <h1>{title}</h1>
          <h2>{subTitle}</h2>
        </div>
        {Object.keys(plans).map((key) => {
          const { label, image, pricing } = plans[key];

          return (
            <div key={key} className={styles.option}>
              <input
                {...register("plan")}
                type="radio"
                value={key}
                defaultChecked={getValues("plan") === key}
              />
              <img src={image} width={40} height={40} alt={`icon-${key}`} />
              <label>{label}</label>
              <p>
                ${planMode ? `${pricing.yearly}/yr` : `${pricing.monthly}/mo`}
              </p>
            </div>
          );
        })}
        <div id={styles.switch}>
          <label id={!planMode ? styles.selected : undefined}>Monthly</label>
          <ToggleSwitch
            {...register("planMode")}
            onClick={() => setPlanMode((item) => (item = !item))}
            defaultChecked={getValues("planMode")}
          />
          <label id={planMode ? styles.selected : undefined}>Yearly</label>
        </div>
      </div>
      <div id={styles.controls}>
        <Button id={styles.go_back} type="button" onClick={() => changeStep(0)}>
          Go Back
        </Button>
        <Button
          id={styles.next_step}
          type="button"
          onClick={() => changeStep(2)}
        >
          Next Step
        </Button>
      </div>
    </Wrap>
  );
};

export default SelectYourPlan;
