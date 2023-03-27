import React from "react";

import styles from "../../../styles/components/steps/wrap.module.scss";

const Wrap = ({ children }: React.PropsWithChildren) => {
  return <div id={styles.step}>{children}</div>;
};

export default Wrap;
