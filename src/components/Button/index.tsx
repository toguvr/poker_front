import React, { ButtonHTMLAttributes } from 'react';

import Loader from 'react-loader-spinner';
import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
  transparent?: boolean;
  primaryColor?: string;
  secondaryColor?: string;
};

const Button: React.FC<ButtonProps> = ({
  children,
  primaryColor,
  secondaryColor,
  transparent,
  loading,
  ...rest
}) => (
  <Container
    transparent={transparent}
    primaryColor={primaryColor || '#fff'}
    secondaryColor={secondaryColor || '#010101'}
    type="button"
    {...rest}
  >
    {loading ? (
      <Loader
        type="Watch"
        color={primaryColor || '#fff'}
        height={20}
        width={20}
      />
    ) : (
      children
    )}
  </Container>
);

export default Button;
