/** @jsx jsx */
import { jsx, css } from '@emotion/core';

const TextInputStyle = css`
width: 100%;
border 2px solid #aaa;
border-radius: 4px
margin: 8px 0;
outline: none;
padding: 8px;
box-sizing: border-box;
&:focus {border-color: dodgerBlue;}`;

const TextInput = ({ placeHolder }: { placeHolder: string }): JSX.Element => (
  <input placeholder={placeHolder} css={TextInputStyle} />
);

export default TextInput;
