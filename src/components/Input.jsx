import React, { useState } from 'react';
import { styled } from 'styled-components';

function Input() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);

  return (
    <>
      <h3>INPUT</h3>
      <StForm
        onSubmit={(e) => {
          e.preventDefault();
          const plainPrice = price.replaceAll(',', '');
          alert(`name : ${name} price : ${plainPrice}`);
        }}
      >
        <StInput
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <StInput
          type="text"
          value={price}
          onChange={(e) => {
            const onlyNumber = e.target.value.replace(/[^0-9]/g, '');
            const priceNumber = onlyNumber.replace(
              /\B(?=(\d{3})+(?!\d))/g,
              ','
            );
            setPrice(priceNumber);
          }}
        />
        <StBtn type="submit">저장</StBtn>
      </StForm>
    </>
  );
}

export default Input;

const StForm = styled.form`
  display: flex;
  align-items: center;
`;

const StInput = styled.input`
  margin-left: 10px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #aaaaaa;
  font-size: 10px;

  &:focus {
    outline: none;
    box-shadow: 0 0 3px 1px #72e0c7;
  }
`;

const StBtn = styled.button`
  cursor: pointer;
  margin-left: 10px;
  background-color: #72e0c7;
  color: white;
  font-size: 10px;
  border: none;
  border-radius: 5px;
  padding: 10px;

  &:active {
    background-color: white;
    color: black;
    box-shadow: 0 0 15px 2px lightgray;
  }
`;
