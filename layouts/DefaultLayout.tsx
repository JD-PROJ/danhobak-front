/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import { breakPoints } from '../ui';

const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 90%;
  @media (max-width: ${breakPoints.small}) {
    width: 100%;
  }
`;

const HeaderWrapper = styled.div`
  display: flex;
  height: 10vh;
`;
const ContentWrapper = styled.div`
  display: flex;
  flex: 1;
  overflow: auto;
`;
const MenuWrapper = styled.div`
  display: flex;
  height: 10vh;
`;

const DefaultLayout = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => (
  <LayoutWrapper>
    <HeaderWrapper>header</HeaderWrapper>
    <ContentWrapper>{children}</ContentWrapper>
    <MenuWrapper>menu</MenuWrapper>
  </LayoutWrapper>
);

export default DefaultLayout;
