import * as react_jsx_runtime from 'react/jsx-runtime';

interface ButtonProps {
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset';
    variant?: 'primary' | 'secondary' | 'primary-line' | 'secondary-line' | 'gost';
    label?: string;
    size?: 'xxs' | 'xs' | 'sm' | 'lg' | 'xl' | 'xxl';
}

interface TextProps {
    value: string;
    size: 'xxs' | 'xs' | 'md' | 'lg' | 'xl' | "xxl";
    color: string;
}

declare const CiuButton: (props: ButtonProps) => react_jsx_runtime.JSX.Element;
declare const CiuText: (props: TextProps) => react_jsx_runtime.JSX.Element;

export { CiuButton, CiuText };
