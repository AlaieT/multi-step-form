import React from "react";

import styles from "../../../styles/components/steps/yourInfo.module.scss";

interface YourInfoProps {}

const YourInfo = ({}: YourInfoProps) => {
  return (
    <div id={styles.step}>
      <div id={styles.header}>
        <h1>Personal info</h1>
        <h2>Please provide your name, email address, and phone number.</h2>
      </div>
    </div>
  );
};

export type { YourInfoProps };
export default YourInfo;
