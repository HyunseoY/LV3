import React from 'react';
import { styled } from 'styled-components';

function Select() {
  return (
    <StContainer>
      <h3>SELECT</h3>
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
