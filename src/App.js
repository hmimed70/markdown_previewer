import React, { useState } from "react";

function App() {
  const [input, setInput] = useState('0');
  const [formula, setFormula] = useState('');
  const [evaluated, setEvaluated] = useState(false);

  const handleClear = () => {
    setInput('0');
    setFormula('');
    setEvaluated(false);
  };

  const handleNumberClick = (number) => {
    if (evaluated) {
      setInput(number);
      setFormula(number);
      setEvaluated(false);
    } else {
      if (input === '0' && number === '0') return;
      if (input === '0') {
        setInput(number);
        setFormula(number);
      } else {
        setInput(input + number);
        setFormula(formula + number);
      }
    }
  };

  const handleOperatorClick = (operator) => {
    if (evaluated) {
      setFormula(input + operator);
      setInput(operator);
      setEvaluated(false);
    } else {
      // If the last character in the formula is an operator and the new operator is not a minus sign
      if (/[\+\-\*\/]$/.test(formula)) {
        if (operator === '-') {
          setFormula(formula + operator);
        } else {
          // Replace the last operator with the new operator
          setFormula(formula.replace(/[\+\-\*\/]+$/, operator));
        }
      } else {
        setFormula(formula + operator);
      }
      setInput(operator);
    }
  };
  

  const handleDecimalClick = () => {
    if (evaluated) {
      setInput('0.');
      setFormula('0.');
      setEvaluated(false);
    } else if (!input.includes('.')) {
      setInput(input + '.');
      setFormula(formula + '.');
    }
  };

  const handleEqualsClick = () => {
    try {
      const result = eval(formula);
      setInput(result.toString());
      setFormula(result.toString());
      setEvaluated(true);
    } catch (e) {
      setInput('Error');
      setFormula('');
    }
  };

  return (
    <div id="calculator">
      <div id="display">{input}</div>
      <button id="clear" onClick={handleClear}>AC</button>
      <button id="divide" onClick={() => handleOperatorClick('/')}>/</button>
      <button id="multiply" onClick={() => handleOperatorClick('*')}>*</button>
      <button id="subtract" onClick={() => handleOperatorClick('-')}>-</button>
      <button id="add" onClick={() => handleOperatorClick('+')}>+</button>
      <button id="equals" onClick={handleEqualsClick}>=</button>
      <button id="decimal" onClick={handleDecimalClick}>.</button>
      <button id="zero" onClick={() => handleNumberClick('0')}>0</button>
      <button id="one" onClick={() => handleNumberClick('1')}>1</button>
      <button id="two" onClick={() => handleNumberClick('2')}>2</button>
      <button id="three" onClick={() => handleNumberClick('3')}>3</button>
      <button id="four" onClick={() => handleNumberClick('4')}>4</button>
      <button id="five" onClick={() => handleNumberClick('5')}>5</button>
      <button id="six" onClick={() => handleNumberClick('6')}>6</button>
      <button id="seven" onClick={() => handleNumberClick('7')}>7</button>
      <button id="eight" onClick={() => handleNumberClick('8')}>8</button>
      <button id="nine" onClick={() => handleNumberClick('9')}>9</button>
    </div>
  );
}

export default App;
