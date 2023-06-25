import React from 'react';
import { styled } from 'styled-components';
import { BiRightArrow } from 'react-icons/bi';
import { RiAlarmWarningLine } from 'react-icons/ri';

function Button() {
  const btnList = ['large', 'medium', 'small'];

  const getBtnSize = (size) => {
    switch (size) {
      case 'large':
        return {
          height: '50px',
          width: '200px',
        };
      case 'medium':
        return {
          height: '45px',
          width: '130px',
        };
      case 'small':
        return {
          height: '40px',
          width: '100px',
        };
      default:
        return {
          height: '40px',
          width: '100px',
        };
    }
  };

  return (
    <div>
      <h3>BUTTON</h3>
      <BtnContainer>
        {btnList.map((size) => {
          if (size === 'large') {
            return (
              <StBtnG
                key={size}
                style={getBtnSize(size)}
                onClick={() => window.alert('버튼을 만들어보세요!')}
              >
                Large Primary Button
                <BiRightArrow />
              </StBtnG>
            );
          } else {
            return (
              <StBtnG key={size} style={getBtnSize(size)}>
                {size}
              </StBtnG>
            );
          }
        })}
      </BtnContainer>
      <BtnContainer>
        {btnList.map((size) => {
          if (size === 'large') {
            return (
              <StBtnR
                key={size}
                style={getBtnSize(size)}
                onClick={() => window.prompt('어렵나요?')}
              >
                Large Primary Button
                <RiAlarmWarningLine />
              </StBtnR>
            );
          } else {
            return (
              <StBtnR key={size} style={getBtnSize(size)}>
                {size}
              </StBtnR>
            );
          }
        })}
      </BtnContainer>
    </div>
  );
}

export default Button;

const BtnContainer = styled.div`
  display: flex;
  align-items: center;
`;

const StBtnG = styled.button`
  cursor: pointer;
  background-color: #72e0c7;
  color: white;
  border: none;
  border-radius: 10px;
  margin: 5px;

  &:active {
    background-color: white;
    color: black;
    box-shadow: 0 0 15px 2px lightgray;
  }
`;
const StBtnR = styled.button`
  cursor: pointer;
  background-color: #f37871;
  color: white;
  border: none;
  border-radius: 10px;
  margin: 5px;

  &:active {
    background-color: white;
    color: black;
    box-shadow: 0 0 15px 2px lightgray;
  }
`;
