/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { colors } from '../../ui';
import styled from '@emotion/styled';

type InputProps = {
  label: string;
  name: string;
  register: any;
};

const InputWrapper = styled.div`
  margin: 20px 10px 10px 10px;
  display: flex;
  align-items: center;
  width: 80%;
`;

const InputStyle = css`
  padding: 10px 0px 10px 15px;
  border: 1px solid ${colors.primary};
  border-radius: 3px;
  outline: 0;
  width: 100%;
  font-size: 16px;
  line-height: 1.15;
  text-indent: 64px;
  transition: all 0.3s ease-in-out;
  &:focus {
    text-indent: 0;
    + label {
      transform: translateY(-24px);
      font-size: 12px;
      background: ${colors.white};
      padding: 0px 5px;
      margin: 0px 10px;
      border-radius: 3px;
    }
  }
`;

const LabelStyle = css`
  position: absolute;
  padding: 5px 15px;
  color: ${colors.primary};
  font-size: 16px;
  font-weight: 700;
  transition: all 0.3s ease-in-out;
`;

const Input = ({ label, name, register }: InputProps): JSX.Element => {
  return (
    <InputWrapper>
      <input name={name} ref={register} css={InputStyle} />
      <label css={LabelStyle}>{label}</label>
    </InputWrapper>
  );
};

export default Input;
