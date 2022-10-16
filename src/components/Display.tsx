import React from 'react';
import { StyledDisplay } from './styles/StyledDisplay';

interface IDisplay {
  gameOver?: boolean;
  text: string;
}

const Display = ({ gameOver, text }:IDisplay) => (
  <StyledDisplay gameOver={!!gameOver}>{text}</StyledDisplay>
);
 
export default Display;
