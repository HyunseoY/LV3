import React, { useState } from 'react';
import { styled } from 'styled-components';

function Select() {
  const optionList = ['고양이', '개', '앵무새'];
  const [selected, setSelected] = useState('선택하세요');

  return (
    <StContainer>
      <h3>SELECT</h3>

      <select
        value={selected}
        onChange={(e) => {
          setSelected(e.target.value);
        }}
      >
        {optionList.map((item) => {
          return (
            <>
              <option value={item} key={item}>
                {console.log(item)}
                {selected}
              </option>
            </>
          );
        })}
      </select>
    </StContainer>
  );
}

export default Select;

const StContainer = styled.div`
  width: 100%;
  height: 100px;
  border: 2px solid #d3d3d3;
  box-sizing: border-box;
`;
