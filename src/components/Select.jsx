import React from 'react';
import { styled } from 'styled-components';
import FirstSelect from './selects/FirstSelect';
import SecondSelect from './selects/SecondSelect';

function Select() {
  return (
    <>
      <h3>SELECT</h3>
      <StContainer>
        <FirstSelect />
        <SecondSelect />
      </StContainer>
    </>
  );
}

export default Select;

const StContainer = styled.div`
  width: 100%;
  height: 150px;
  border: 2px solid #d3d3d3;
  box-sizing: border-box;
  overflow: hidden;
  display: flex;
`;
