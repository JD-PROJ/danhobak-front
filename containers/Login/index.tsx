/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { Button, TextInput } from '../../components/shared';

const LoginContainerStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  height: 80vh;
  width: 40vh;
`;

const LoginTitleStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-basis: 20%;
`;

const LoginFormStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 80%;
  flex-basis: 25%;
`;

const LoginDescriptionStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-basis: 20%;
`;

const LoginContainer = (): JSX.Element => {
  return (
    <div css={LoginContainerStyle}>
      <h2 css={LoginTitleStyle}>LOGIN</h2>
      <div css={LoginFormStyle}>
        <div
          css={css`
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            height: 50%;
          `}
        >
          <TextInput placeHolder="이메일" />
          <TextInput placeHolder="비밀번호" />
        </div>

        <Button
          onClick={(): void => {
            console.log('!');
          }}
        >
          로그인
        </Button>
      </div>
      <div css={LoginDescriptionStyle}>
        <h4>계정이 없으신가요?</h4>
        <div>
          <a href="#">회원가입</a> <a href="#">둘러보기</a>
        </div>
      </div>
    </div>
  );
};
export default LoginContainer;
