/** @jsx jsx */
import { jsx, css } from '@emotion/core';

const ButtonStyle = css`
  width: 100%;
  border-radius: 4px;
  background-color: orange;
  box-sizing: border-box;
  padding 15px 0;
`;

const Button = ({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick: () => void;
}): JSX.Element => (
  <button css={ButtonStyle} onClick={onClick}>
    {children}
  </button>
);

export default Button;
