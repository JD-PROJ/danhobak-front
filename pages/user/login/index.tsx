/** @jsx jsx */
import { jsx } from '@emotion/core';
import { FullSizeLayout } from '../../../layouts';

import Link from '../../../components/shared/Link';
import {
  LoginWrapper,
  LoginTitleWrapper,
  LoginFormWrapper,
  RegistrationWrapper,
  RegistrationTextWrapper,
  GuestLinkStyle,
  RegistrationLinkStyle,
} from './styles';
import LoginForm from './LoginForm';

const Login = ({}: {}): JSX.Element => (
  <FullSizeLayout>
    <LoginWrapper>
      <Link href="/" linkStyle={GuestLinkStyle}>
        둘러보기
      </Link>
      <LoginTitleWrapper>LOGIN</LoginTitleWrapper>
      <LoginFormWrapper>
        <LoginForm />
      </LoginFormWrapper>
      <RegistrationWrapper>
        <RegistrationTextWrapper>가입하고 구경하세요!</RegistrationTextWrapper>
        <Link href="user/registration" css={RegistrationLinkStyle}>
          가입하고 둘러보기
        </Link>
      </RegistrationWrapper>
    </LoginWrapper>
  </FullSizeLayout>
);

export default Login;
