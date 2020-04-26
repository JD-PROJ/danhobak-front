/** @jsx jsx */
import { jsx, css } from '@emotion/core';

const FullSizeLayoutStyle = css`
  background-color: grey;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const FuillSizeLayout = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => <div css={FullSizeLayoutStyle}>{children}</div>;

export default FuillSizeLayout;
