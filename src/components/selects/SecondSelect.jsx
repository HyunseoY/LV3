import React, { useState } from 'react';
import { styled } from 'styled-components';

function SecondSelect() {
  const options = ['고양이', '개', '앵무새'];

  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  const clickOptions = (option) => {
    setSelected(option);
    setIsOpen(false);
  };

  return (
    <>
      <DropDownWrapper>
        <DropDownHeader
          onClick={() => {
            setIsOpen((prev) => !prev);
          }}
        >
          <span>{selected || '선택하세요'}</span>
          <span>▽</span>
        </DropDownHeader>
        {isOpen && (
          <DropDownList>
            {options.map((option) => {
              return (
                <DropDownItem key={option} onClick={() => clickOptions(option)}>
                  {option}
                </DropDownItem>
              );
            })}
          </DropDownList>
        )}
      </DropDownWrapper>
    </>
  );
}

export default SecondSelect;

const DropDownWrapper = styled.div`
  width: 200px;
  margin-left: 20px;
  border-radius: 5px;
  border: 1px solid lightgray;
`;

const DropDownHeader = styled.div`
  padding: 10px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
`;

const DropDownList = styled.div`
  border-top: 1px solid #ccc;
`;

const DropDownItem = styled.div`
  padding: 10px;
  cursor: pointer;
  &:hover {
    background-color: lightgray;
  }
`;
