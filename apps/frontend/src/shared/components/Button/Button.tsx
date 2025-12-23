import type { ButtonHTMLAttributes, ReactNode } from 'react';
import * as S from './Button.styled';

type Props = {
  width?: string;
  children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({
  width = '100%',
  children,
  disabled = false,
  type = 'button',
  ...props
}: Props) => {
  return (
    <S.Button width={width} disabled={disabled} type={type} {...props}>
      {children}
    </S.Button>
  );
};

export default Button;
