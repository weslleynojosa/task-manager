import { PropTypes, Ref } from "~/components/input/Input.types";
import { forwardRef } from "react";
import { Div, StyledInput, StyledLabel } from "~/components/input/Input.styles";

const Input = forwardRef<Ref, PropTypes>(
  (
    {
      className,
      id,
      label,
      ariaLabel = "",
      required,
      value,
      disabled,
      isTitle,
      ...remainingProps
    },
    ref
  ) => {
    return (
      <Div className={className}>
        <StyledLabel htmlFor={id} aria-label={ariaLabel} isTitle={isTitle}>
          {label}
        </StyledLabel>
        <StyledInput
          ref={ref}
          aria-label={ariaLabel}
          id={id}
          required={required}
          value={value}
          disabled={disabled}
          isTitle={isTitle}
          {...remainingProps}
        />
      </Div>
    );
  }
);

Input.displayName = "Input";

export default Input;
