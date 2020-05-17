/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import { breakPoints } from '../ui';

const DefaultLayout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 90%;
  @media (max-width: ${breakPoints.small}) {
    width: 100%;
  }
`;

const Index = ({}: {}): JSX.Element => (
  <DefaultLayout>
    <div>header</div>
    <div>contents</div>
    <div>footer</div>
  </DefaultLayout>
);

export default Index;
