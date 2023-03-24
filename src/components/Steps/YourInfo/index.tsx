import React from "react";

import Input from "../../Input";
import Button from "../../Button";

import styles from "../../../styles/components/steps/yourInfo.module.scss";

interface YourInfoProps {}

const YourInfo = ({}: YourInfoProps) => {
  return (
    <div id={styles.step}>
      <div id={styles.content}>
        <div id={styles.header}>
          <h1>Personal info</h1>
          <h2>Please provide your name, email address, and phone number.</h2>
        </div>
        <div id={styles.fields}>
          <Input
            className={styles.field}
            label="Name"
            error=""
            placeholder="e.g. Stephen King"
          />
          <Input
            className={styles.field}
            label="Email Addres"
            error=""
            placeholder="e.g. stephenking@lorem.com"
          />
          <Input
            className={styles.field}
            label="Phone Number"
            error="Some error!"
            placeholder="e.q. +1 234 567 890"
          />
        </div>
      </div>
      <div id={styles.controls}>
        <Button>Next Step</Button>
      </div>
    </div>
  );
};

export type { YourInfoProps };
export default YourInfo;
