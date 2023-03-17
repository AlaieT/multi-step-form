import React from "react";

import styles from "../../styles/components/input.module.scss";

interface InputProps
  extends Omit<React.ComponentPropsWithoutRef<"input">, "children"> {
  label: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, ...rest }, ref) => {
    return (
      <div className={styles.input}>
        <label>{label}</label>
        <input {...rest} ref={ref} />
      </div>
    );
  }
);

export type { InputProps };
export default Input;
