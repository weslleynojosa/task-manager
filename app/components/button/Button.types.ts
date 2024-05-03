export type ButtonTypes = {
    primary?: boolean;
    secondary?: boolean;
    warning?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export type StylingProps = Pick<ButtonTypes, 'primary' | 'secondary'>;