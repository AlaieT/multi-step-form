import React from "react";

import type { ButtonProps } from "../../types";

import styles from "../../styles/components/button.module.scss";

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, ...rest }, ref) => {
    return (
      <button {...rest} ref={ref} className={styles.button}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
