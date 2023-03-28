import React from "react";

import Input from "../../Input";
import Button from "../../Button";
import Wrap from "../Wrap";

import type { StepProps } from "../../MultiStepForm";

import styles from "../../../styles/components/steps/yourInfo.module.scss";

const YourInfo = ({ register, getValues, errors }: StepProps) => {
  return (
    <Wrap>
      <div id={styles.content}>
        <div id={styles.header}>
          <h1>Personal info</h1>
          <h2>Please provide your name, email address, and phone number.</h2>
        </div>
        <div id={styles.fields}>
          <Input
            className={styles.field}
            label="Name"
            error={errors.name?.message}
            placeholder="e.g. Stephen King"
            defaultValue={getValues("name")}
            {...register("name")}
          />
          <Input
            className={styles.field}
            label="Email Addres"
            error={errors.email?.message}
            placeholder="e.g. stephenking@lorem.com"
            defaultValue={getValues("email")}
            {...register("email")}
          />
          <Input
            className={styles.field}
            label="Phone Number"
            error={errors.phone?.message}
            placeholder="e.q. +1 234 567 890"
            defaultValue={getValues("phone")}
            {...register("phone")}
          />
        </div>
      </div>
      <div id={styles.controls}>
        <Button id={styles.next_step}>Next Step</Button>
      </div>
    </Wrap>
  );
};

export default YourInfo;
