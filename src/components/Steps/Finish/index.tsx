import React from "react";

import { ReactComponent as IconFinish } from "../../../assets/images/icon-thank-you.svg";

import styles from "../../../styles/components/steps/finish.module.scss";
import Wrap from "../Wrap";

const Finish = () => (
  <Wrap>
    <div id={styles.content}>
      <IconFinish width={80} height={80} />
      <h1>Thank you!</h1>
      <p>
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </div>
  </Wrap>
);

export default Finish;
