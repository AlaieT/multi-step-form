import React from "react";

import styles from "../../styles/components/toggleSwitch.module.scss";

type ToggleSwitchProps = Omit<
  React.ComponentPropsWithoutRef<"input">,
  "type" | "children"
>;

const ToggleSwitch = React.forwardRef<HTMLInputElement, ToggleSwitchProps>(
  ({ ...rest }, ref) => {
    return (
      <div className={styles.switch}>
        <input {...rest} ref={ref} type="checkbox" />
      </div>
    );
  }
);

export type { ToggleSwitchProps };
export default ToggleSwitch;
