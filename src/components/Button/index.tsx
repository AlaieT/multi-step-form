import React from "react";

import styles from "../../styles/components/button.module.scss";

type ButtonProps = Omit<React.ComponentPropsWithoutRef<"button">, "className">;

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, ...rest }, ref) => {
    return (
      <button {...rest} ref={ref} className={styles.button}>
        {children}
      </button>
    );
  }
);

export type { ButtonProps };
export default Button;
