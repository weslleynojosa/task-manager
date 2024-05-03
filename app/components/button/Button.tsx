import { forwardRef } from "react";
import {StyledButton} from "~/components/button/Button.styles";
import { ButtonTypes } from "~/components/button/Button.types";



const Button = forwardRef<HTMLButtonElement, ButtonTypes>((props, ref) => {
  const { disabled, children, ...remainingProps } = props;

  const content =
    typeof children === "string" ? <span>{children}</span> : children;

  return (
    <StyledButton ref={ref} disabled={disabled} {...remainingProps}>
      {content}
    </StyledButton>
  );
});

Button.displayName = 'Button';

export default Button;
