export type Ref = HTMLInputElement;

export type PropTypes = {
  disabled?: boolean;
  /** aria-label **/
  ariaLabel?: string;
  /** Input label*/
  label?: React.ReactNode;
  isTitle?: boolean;
} & React.InputHTMLAttributes<HTMLInputElement>;
