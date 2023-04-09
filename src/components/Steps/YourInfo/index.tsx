import React from "react";

import Input from "../../Input";
import Button from "../../Button";
import Wrap from "../Wrap";

import type { YourInfoProps } from "../../../types";

import styles from "../../../styles/components/steps/yourInfo.module.scss";

const YourInfo = ({
  trigger,
  register,
  getValues,
  errors,
  changeStep
}: YourInfoProps) => {
  const handleNewStep = async () => {
    const res = await trigger(["name", "email", "phone"]);

    if (res) changeStep(1);
  };

  return (
    <Wrap>
      <div id={styles.content}>
        <div id={styles.header}>
          <h1>Personal info</h1>
          <h2>Please provide your name, email address, and phone number.</h2>
        </div>
        <div id={styles.fields}>
          <Input
            {...register("name")}
            className={styles.field}
            id="name"
            label="Name"
            type="text"
            error={errors.name?.message}
            placeholder="e.g. Stephen King"
            defaultValue={getValues("name")}
          />
          <Input
            {...register("email")}
            className={styles.field}
            id="email"
            label="Email Addres"
            type="email"
            error={errors.email?.message}
            placeholder="e.g. stephenking@lorem.com"
            defaultValue={getValues("email")}
          />
          <Input
            {...register("phone")}
            className={styles.field}
            id="phone-number"
            type="tel"
            label="Phone Number"
            error={errors.phone?.message}
            placeholder="e.q. +1 234 567 890"
            defaultValue={getValues("phone")}
          />
        </div>
      </div>
      <div id={styles.controls}>
        <Button
          id={styles.next_step}
          type="button"
          onClick={() => handleNewStep()}
        >
          Next Step
        </Button>
      </div>
    </Wrap>
  );
};

export default YourInfo;
