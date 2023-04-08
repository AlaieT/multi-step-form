import React, { useState } from "react";

import ToggleSwitch from "../../ToggleSwitch";
import Button from "../../Button";
import Wrap from "../Wrap";

import type { SelectYourPlanProps } from "../../../types";

import { ReactComponent as IconArcade } from "../../../assets/images/icon-arcade.svg";
import { ReactComponent as IconAdvacned } from "../../../assets/images/icon-advanced.svg";
import { ReactComponent as IconPro } from "../../../assets/images/icon-pro.svg";

import styles from "../../../styles/components/steps/selectYourPlan.module.scss";

const SelectYourPlan = ({
  title,
  subTitle,
  plans: { arcade, advanced, pro },
  register,
  getValues,
  changeStep
}: SelectYourPlanProps) => {
  const [planMode, setPlanMode] = useState(getValues("planMode"));

  return (
    <Wrap>
      <div id={styles.content}>
        <div id={styles.header}>
          <h1>{title}</h1>
          <h2>{subTitle}</h2>
        </div>
        <div className={styles.option}>
          <input
            {...register("plan")}
            id="arcade"
            type="radio"
            value="arcade"
            defaultChecked={getValues("plan") === "arcade"}
          />
          <IconArcade width={40} height={40} />
          <label htmlFor="arcade">Arcade</label>
          <p>
            $
            {planMode
              ? `${arcade.pricing.yearly}/yr`
              : `${arcade.pricing.monthly}/mo`}
          </p>
          {planMode && <p>2 months free</p>}
        </div>
        <div className={styles.option}>
          <input
            {...register("plan")}
            id="advanced"
            type="radio"
            value="advanced"
            defaultChecked={getValues("plan") === "advanced"}
          />
          <IconAdvacned width={40} height={40} />
          <label htmlFor="advanced">Advanced</label>
          <p>
            $
            {planMode
              ? `${advanced.pricing.yearly}/yr`
              : `${advanced.pricing.monthly}/mo`}
          </p>
          {planMode && <p>2 months free</p>}
        </div>
        <div className={styles.option}>
          <input
            {...register("plan")}
            id="pro"
            type="radio"
            value="pro"
            defaultChecked={getValues("plan") === "pro"}
          />
          <IconPro width={40} height={40} />
          <label htmlFor="pro">Pro</label>
          <p>
            $
            {planMode
              ? `${pro.pricing.yearly}/yr`
              : `${pro.pricing.monthly}/mo`}
          </p>
          {planMode && <p>2 months free</p>}
        </div>
        <div id={styles.switch}>
          <label id={!planMode ? styles.selected : undefined} htmlFor="switch">
            Monthly
          </label>
          <ToggleSwitch
            {...register("planMode")}
            id="switch"
            onClick={() => setPlanMode((item) => !item)}
            defaultChecked={getValues("planMode")}
          />
          <label id={planMode ? styles.selected : undefined} htmlFor="switch">
            Yearly
          </label>
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
