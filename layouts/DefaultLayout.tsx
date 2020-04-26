/** @jsx jsx */
import { jsx } from '@emotion/core';

const DefaultLayout = ({
  Component,
}: {
  Component: JSX.Element;
}): JSX.Element => <div>{Component}</div>;

export default DefaultLayout;
