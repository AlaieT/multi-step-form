import React, { useState } from "react";

import ToggleSwitch from "../../ToggleSwitch";
import Button from "../../Button";
import Wrap from "../Wrap";

import type { StepProps } from "../../MultiStepForm";

import IconArcade from "../../../../public/images/icon-arcade.svg";
import IconAdvanced from "../../../../public/images/icon-advanced.svg";
import IconPro from "../../../../public/images/icon-pro.svg";

import styles from "../../../styles/components/steps/selectYourPlan.module.scss";

const SelectYourPlan = ({ register, getValues }: Omit<StepProps, "errors">) => {
  const [yearly, setYearly] = useState(getValues("yearly"));

  return (
    <Wrap>
      <div id={styles.content}>
        <div id={styles.header}>
          <h1>Select your plan</h1>
          <h2>You have the option of monthly or yearly billing.</h2>
        </div>
        <div className={styles.option}>
          <input
            type="radio"
            value={1}
            defaultChecked={getValues("plan") === "arcade"}
            {...register("plan")}
          />
          <img src={IconArcade} width={40} height={40} alt="icon-arcade" />
          <label>Arcade</label>
          <p>${yearly ? "90/yr" : "9/mo"}</p>
        </div>
        <div className={styles.option}>
          <input
            type="radio"
            value={2}
            defaultChecked={getValues("plan") === "advanced"}
            {...register("plan")}
          />
          <img src={IconAdvanced} width={40} height={40} alt="icon-advanced" />
          <label>Advanced</label>
          <p>${yearly ? "120/yr" : "12/mo"}</p>
        </div>
        <div className={styles.option}>
          <input
            type="radio"
            value={3}
            defaultChecked={getValues("plan") === "pro"}
            {...register("plan")}
          />
          <img src={IconPro} width={40} height={40} alt="icon-pro" />
          <label>Pro</label>
          <p>${yearly ? "150/yr" : "15/mo"}</p>
        </div>
        <div id={styles.switch}>
          <label>Monthly</label>
          <ToggleSwitch
            onClick={() => setYearly((item) => (item = !item))}
            defaultChecked={getValues("yearly")}
            {...register("yearly")}
          />
          <label>Yearly</label>
        </div>
      </div>
      <div id={styles.controls}>
        <Button id={styles.go_back}>Go Back</Button>
        <Button id={styles.next_step}>Next Step</Button>
      </div>
    </Wrap>
  );
};

export default SelectYourPlan;
