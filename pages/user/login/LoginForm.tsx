/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useForm } from 'react-hook-form';
import Input from '../../../components/shared/Input';

type LoginFormFields = {
  email: string;
  password: string;
};

const LoginForm = (): JSX.Element => {
  const { register, handleSubmit } = useForm<LoginFormFields>();
  return (
    <>
      <Input
        label="이메일"
        name="email"
        register={register({ required: true })}
      />
      <Input
        label="비밀번호"
        name="password"
        register={register({ required: true })}
      />
      <button onClick={handleSubmit(console.log)}>로그인</button>
    </>
  );
};

export default LoginForm;
