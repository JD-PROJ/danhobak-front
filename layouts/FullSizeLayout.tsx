/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';

const LayoutWrapper = styled.div`
  display: flex;
  height: 100vh;
`;

const FullSizeLayout = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => <LayoutWrapper>{children}</LayoutWrapper>;

export default FullSizeLayout;
