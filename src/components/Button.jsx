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
      <h2>BUTTON</h2>
      {btnList.map((size) => {
        if (size === 'large') {
          return (
            <StBtnG
              style={getBtnSize(size)}
              onClick={() => window.alert('버튼을 만들어보세요!')}
            >
              Large Primary Button
              <BiRightArrow />
            </StBtnG>
          );
        } else {
          return <StBtnG style={getBtnSize(size)}>{size}</StBtnG>;
        }
      })}

      {btnList.map((size) => {
        if (size === 'large') {
          return (
            <StBtnR
              style={getBtnSize(size)}
              onClick={() => window.prompt('어렵나요?')}
            >
              Large Primary Button
              <RiAlarmWarningLine />
            </StBtnR>
          );
        } else {
          return <StBtnR style={getBtnSize(size)}>{size}</StBtnR>;
        }
      })}
    </div>
  );
}

export default Button;

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
