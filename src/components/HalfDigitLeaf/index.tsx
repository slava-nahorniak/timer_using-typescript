import * as React from 'react';

const UPPER = '[part] upper';
const LOWER = '[part] lower';

type HalfDigitLiefProps = {
  digit: number,
  nextDigit: number,
  isTurning: {} | false,
};

const HalfDigitLief: React
  .FunctionComponent<HalfDigitLiefProps> = ({ digit, nextDigit }) => {
  return (
    <div></div>
  );
};

export default HalfDigitLief;