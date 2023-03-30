import React from "react";

import type { ToggleSwitchProps } from "../../types";

import styles from "../../styles/components/toggleSwitch.module.scss";

const ToggleSwitch = React.forwardRef<HTMLInputElement, ToggleSwitchProps>(
  ({ ...rest }, ref) => {
    return (
      <div className={styles.switch}>
        <input {...rest} ref={ref} type="checkbox" />
      </div>
    );
  }
);

ToggleSwitch.displayName = "ToggleSwitch";

export default ToggleSwitch;
