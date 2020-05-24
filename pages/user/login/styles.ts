import styled from '@emotion/styled';
import { colors } from '../../../ui';
import { css } from '@emotion/core';

const LoginWrapper = styled.div`
  background: ${colors.white};
  height: 60vh;
  width: 75%;
  display: grid;
  grid-template-rows: 1fr 2fr 4fr 3fr;
`;

const GuestLinkStyle = css`
  place-self: start end;
  padding: 4px;
  color: ${colors.grey};
  font-size: 0.75rem;
`;

const RegistrationLinkStyle = css``;

const LoginTitleWrapper = styled.p`
  color: ${colors.black};
  font-size: 2rem;
  font-weight: 600;
  line-height: 1.125;
  place-self: center;
`;

const LoginFormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const RegistrationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  place-self: center;
`;

const RegistrationTextWrapper = styled.p`
  font-size: 1rem;
`;

export {
  LoginWrapper,
  LoginTitleWrapper,
  LoginFormWrapper,
  RegistrationWrapper,
  RegistrationTextWrapper,
  GuestLinkStyle,
  RegistrationLinkStyle,
};
