import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
} from "react";

import styles from "./styles.module.scss";
import classNames from "classnames";

const ViewVariantStyle = {
  primary: styles.primary,
  secondary: styles.secondary,
  inline: styles.inline,
};

const ThemeStyle = {
  default: styles.default,
  alternative: styles.alternative,
};

export const Button = forwardRef(function Button(
  { children, onClick, disabled, className, viewVariant = "primary" },
  ref
) {
  const buttonRef = useRef(null);

  useImperativeHandle(ref, () => {
    return {
      focus() {
        buttonRef.current.focus();
      },
    };
  });

  return (
    <button
      ref={buttonRef}
      onClick={onClick}
      disabled={disabled}
      className={classNames(
        styles.root,
        className,
        ViewVariantStyle[viewVariant],
        {
          [styles.disabled]: disabled,
        }
      )}
    >
      {children}
    </button>
  );
});
