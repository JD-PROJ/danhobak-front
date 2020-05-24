/** @jsx jsx */
import { jsx } from '@emotion/core';

const Button = ({ children }: { children: React.ReactNode }): JSX.Element => {
  return <button>{children}</button>;
};

export default Button;
