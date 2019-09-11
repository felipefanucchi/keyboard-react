import React from 'react';
import Key from './Key';
import './Keyboard.css';

function Keyboard() {
  return (
    <div className="keyboard">
      <Key note="Fa" trigger="Enter" /> 
    </div>
  );
}
export default Keyboard;