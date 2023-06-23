import React from 'react';

function Input() {
  return (
    <div>
      <h2>INPUT</h2>
      <input type="text" />
      <input type="" />
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
