import React, { useState } from "react";

import Button from "../../Button";
import Wrap from "../Wrap";

import type { StepProps } from "../../MultiStepForm";

import styles from "../../../styles/components/steps/pickAddOns.module.scss";

const PickAddOns = ({ register, getValues }: Omit<StepProps, "errors">) => {
  const yearly = getValues("yearly");

  return (
    <Wrap>
      <div id={styles.content}>
        <div id={styles.header}>
          <h1>Pick add-ons</h1>
          <h2>Add-ons help enhance your gaming experience.</h2>
        </div>
        <div className={styles.option}>
          <input
            type="checkbox"
            defaultChecked={getValues("onlineSerivce")}
            {...register("onlineSerivce")}
          />
          <span></span>
          <div className={styles.title}>
            <label>Online service</label>
            <p>Access to multiplayer games</p>
          </div>
          +${yearly ? "10/yr" : "1/mo"}
        </div>
        <div className={styles.option}>
          <input
            type="checkbox"
            defaultChecked={getValues("largeStorage")}
            {...register("largeStorage")}
          />
          <span></span>
          <div className={styles.title}>
            <label>Larger storage</label>
            <p>Extra 1TB of cloud save</p>
          </div>
          +${yearly ? "20/yr" : "2/mo"}
        </div>
        <div className={styles.option}>
          <input
            type="checkbox"
            defaultChecked={getValues("customizableProfile")}
            {...register("customizableProfile")}
          />
          <span></span>
          <div className={styles.title}>
            <label>Customizable profile</label>
            <p>Custom theme on your profile</p>
          </div>
          +${yearly ? "30/yr" : "2/mo"}
        </div>
      </div>
      <div id={styles.controls}>
        <Button id={styles.go_back}>Go Back</Button>
        <Button id={styles.next_step}>Next Step</Button>
      </div>
    </Wrap>
  );
};

export default PickAddOns;
