/** @jsx jsx */
import { jsx } from '@emotion/core';
import { FullSizeLayout } from '../layouts';
import LoginContainer from '../containers/Login';

const Index = (): JSX.Element => (
  <FullSizeLayout>
    <LoginContainer />
  </FullSizeLayout>
);

export default Index;
