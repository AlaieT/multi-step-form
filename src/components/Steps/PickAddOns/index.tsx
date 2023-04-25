import React, { useContext } from "react";

import Button from "../../Button";
import Wrap from "../Wrap";

import type { PickAddOnsProps } from "../../../types";

import styles from "../../../styles/components/steps/pickAddOns.module.scss";
import { FormContext } from "../../../utils/context";

const PickAddOns = ({
  addOns: { onlineService, largeStorage, customizableProfile },
  register,
  getValues,
  changeStep
}: PickAddOnsProps) => {
  const { form } = useContext(FormContext);

  return (
    <Wrap>
      <div id={styles.content}>
        <div id={styles.header}>
          <h1>Pick add-ons</h1>
          <h2>Add-ons help enhance your gaming experience.</h2>
        </div>
        <div className={styles.option}>
          <input
            id="onlineService"
            type="checkbox"
            defaultChecked={getValues("onlineService")}
            {...register("onlineService")}
          />
          <span />
          <div className={styles.title}>
            <label htmlFor="onlineService">Online service</label>
            <label htmlFor="onlineService">Access to multiplayer games</label>
          </div>
          +$
          {`${onlineService[form.planMode]}/${form.priceMode}`}
        </div>
        <div className={styles.option}>
          <input
            id="largeStorage"
            type="checkbox"
            defaultChecked={getValues("largeStorage")}
            {...register("largeStorage")}
          />
          <span />
          <div className={styles.title}>
            <label htmlFor="largeStorage">Larger storage</label>
            <label htmlFor="largeStorage">Extra 1TB of cloud save</label>
          </div>
          +$
          {`${largeStorage[form.planMode]}/${form.priceMode}`}
        </div>
        <div className={styles.option}>
          <input
            id="customizableProfile"
            type="checkbox"
            defaultChecked={getValues("customizableProfile")}
            {...register("customizableProfile")}
          />
          <span />
          <div className={styles.title}>
            <label htmlFor="customizableProfile">Customizable profile</label>
            <label htmlFor="customizableProfile">
              Custom theme on your profile
            </label>
          </div>
          +$
          {`${customizableProfile[form.planMode]}/${form.priceMode}`}
        </div>
      </div>
      <div id={styles.controls}>
        <Button id={styles.go_back} type="button" onClick={() => changeStep(1)}>
          Go Back
        </Button>
        <Button
          id={styles.next_step}
          type="button"
          onClick={() => changeStep(3)}
        >
          Next Step
        </Button>
      </div>
    </Wrap>
  );
};

export default PickAddOns;
