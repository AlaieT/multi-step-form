import React from "react";

import classNames from "../../utils/classNames";

import type { InputProps } from "../../types";

import styles from "../../styles/components/input.module.scss";

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({
    label, error, className, id, ...rest
  }, ref) => (
    <div className={classNames(styles.input, className)}>
      <div className={styles.badges}>
        <label htmlFor={id}>{label}</label>
        {error && <label htmlFor={id}>{error}</label>}
      </div>
      <input {...rest} id={id} ref={ref} className={error && styles.error} />
    </div>
  )
);

Input.displayName = "Input";

export default Input;
