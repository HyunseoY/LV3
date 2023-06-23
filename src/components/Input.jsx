import React from 'react';
import { styled } from 'styled-components';

function Input() {
  return (
    <div>
      <h2>INPUT</h2>
      <StInput type="text" />
      <StInput type="" />
      <button
        onClick={() => {
          alert('hi');
        }}
      >
        저장
      </button>
    </div>
  );
}

export default Input;

const StInput = styled.input`
  margin-left: 10px;
`;
