import React from 'react';
import { useState } from 'react';
import { styled } from 'styled-components';

function Modal() {
  const [isOpen, setIsOpen] = useState(false);
  const [clickedButton, setClickedButton] = useState('');

  const toggleModal = (buttonName) => {
    setIsOpen((prev) => !prev);
    setClickedButton(buttonName);
  };

  return (
    <>
      <h3>MODAL</h3>
      <StBtnG onClick={() => toggleModal('StBtnG')}>OPEN Modal</StBtnG>
      <StBtnR onClick={() => toggleModal('StBtnR')}>OPEN Modal</StBtnR>

      {isOpen && (
        <ModalContainer>
          <Outer onClick={() => toggleModal('StBtnR')}>
            <Inner>
              {clickedButton === 'StBtnG' ? (
                <>
                  <p>
                    닫기와 확인 버튼 2개가 있고, 외부 영역을 눌러도 모달이
                    닫히지 않아요.
                  </p>
                  <button onClick={() => toggleModal('StBtnG')}>닫기</button>
                  <button>확인</button>
                </>
              ) : (
                <>
                  <p>닫기 버튼 1개가 있고, 외부 영역을 누르면 모달이 닫혀요.</p>
                  <button onClick={() => toggleModal('StBtnR')}>닫기</button>
                </>
              )}
            </Inner>
          </Outer>
        </ModalContainer>
      )}
    </>
  );
}

export default Modal;

const StBtnG = styled.button`
  cursor: pointer;
  background-color: #72e0c7;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 20px;
  margin: 10px;
  margin-bottom: 20px;

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
  border-radius: 5px;
  padding: 20px;
  margin: 10px;
  margin-bottom: 20px;

  &:active {
    background-color: white;
    color: black;
    box-shadow: 0 0 15px 2px lightgray;
  }
`;

const ModalContainer = styled.div``;

const Outer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
`;

const Inner = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
`;
