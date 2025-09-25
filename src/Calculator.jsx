import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clear, inputNumber, inputOperator, inputDecimal, evaluate } from './calculatorSlice';

const Calculator = () => {
  const dispatch = useDispatch();
  const display = useSelector(state => state.calculator.display);

  return (
    <div className="calculator">
      <div id="display">{display}</div>
      <div className="buttons">
        <button id="clear" onClick={() => dispatch(clear())}>AC</button>

        <button id="divide" onClick={() => dispatch(inputOperator("/"))}>/</button>
        <button id="multiply" onClick={() => dispatch(inputOperator("*"))}>*</button>
        <button id="subtract" onClick={() => dispatch(inputOperator("-"))}>-</button>
        <button id="add" onClick={() => dispatch(inputOperator("+"))}>+</button>

        <button id="equals" onClick={() => dispatch(evaluate())}>=</button>

        <button id="zero" onClick={() => dispatch(inputNumber("0"))}>0</button>
        <button id="one" onClick={() => dispatch(inputNumber("1"))}>1</button>
        <button id="two" onClick={() => dispatch(inputNumber("2"))}>2</button>
        <button id="three" onClick={() => dispatch(inputNumber("3"))}>3</button>
        <button id="four" onClick={() => dispatch(inputNumber("4"))}>4</button>
        <button id="five" onClick={() => dispatch(inputNumber("5"))}>5</button>
        <button id="six" onClick={() => dispatch(inputNumber("6"))}>6</button>
        <button id="seven" onClick={() => dispatch(inputNumber("7"))}>7</button>
        <button id="eight" onClick={() => dispatch(inputNumber("8"))}>8</button>
        <button id="nine" onClick={() => dispatch(inputNumber("9"))}>9</button>

        <button id="decimal" onClick={() => dispatch(inputDecimal())}>.</button>
      </div>
    </div>
  );
};

export default Calculator;
