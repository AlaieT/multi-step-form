import React from "react";

import styles from "../../styles/components/checkbox.module.scss";

type CheckboxProps = Omit<
  React.ComponentPropsWithoutRef<"input">,
  "type" | "children"
>;

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ ...rest }, ref) => {
    return (
      <input {...rest} ref={ref} className={styles.checkbox} type="checkbox" />
    );
  }
);

export default Checkbox;
