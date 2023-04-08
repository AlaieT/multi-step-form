import React from "react";

import { ReactComponent as IconFinish } from "../../../assets/images/icon-thank-you.svg";

import styles from "../../../styles/components/steps/finish.module.scss";

const Finish = () => (
  <div id={styles.step}>
    <IconFinish width={80} height={80} />
    <h1>Thank you!</h1>
    <p>
      Thanks for confirming your subscription! We hope you have fun using our
      platform. If you ever need support, please feel free to email us at
      support@loremgaming.com.
    </p>
  </div>
);

export default Finish;
