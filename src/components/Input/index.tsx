import React from "react";

import classNames from "../../utils/classNames";

import styles from "../../styles/components/input.module.scss";

interface InputProps
  extends Omit<React.ComponentPropsWithoutRef<"input">, "children"> {
  label: string;
  error: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className, ...rest }, ref) => {
    return (
      <div className={classNames(styles.input, className)}>
        <div className={styles.badges}>
          <label>{label}</label>
          {error && <label>{error}</label>}
        </div>
        <input {...rest} ref={ref} className={error && styles.error} />
      </div>
    );
  }
);

export type { InputProps };
export default Input;
