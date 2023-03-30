import React from "react";

import classNames from "../../utils/classNames";

import type { InputProps } from "../../types";

import styles from "../../styles/components/input.module.scss";

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

Input.displayName = "Input";

export default Input;
