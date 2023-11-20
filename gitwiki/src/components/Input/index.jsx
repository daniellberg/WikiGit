import React from 'react';
import { InputContainer } from './styles';

function CustomInput({value, onChange}) {
  return (
    <InputContainer>
      <input value={value} onChange={onChange} placeholder="user/repo-name"/>
    </InputContainer>
  );
}

export default CustomInput;
