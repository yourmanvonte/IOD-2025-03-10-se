// Calculator component that takes 2 numbers as props and displays the result of their addition, subtraction, multiplication, and division.
import { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');
  const [operation, setOperation] = useState('');

    const calculate = (op) => {
        const a = parseFloat(num1);
        const b = parseFloat(num2);

    if (isNaN(a) || isNaN(b)) {
        setResult('Please enter valid numbers');
        return;
    }

    let res;
    switch (op) {
      case '+':
        res = a + b;
        break;
      case '-':
        res = a - b;
        break;
      case '*':
        res = a * b;
        break;
      case '/':
        res = b !== 0 ? (a / b).toFixed(2) : 'Cannot divide by zero';
        break;
      default:
        res = '';
    }

    setOperation(op);
    setResult(res);
};

const clear = () => {
    setNum1('');
    setNum2('');
    setResult('');
    setOperation('');
}

  return (
    <div className="Calculator">
      <h2>Basic Calculator</h2>

      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        placeholder="First number"
      />

      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        placeholder="Second number"
      />

      <div className="button-group">
        <button onClick={() => calculate('+')}>+</button>
        <button onClick={() => calculate('-')}>−</button>
        <button onClick={() => calculate('*')}>×</button>
        <button onClick={() => calculate('/')}>÷</button>
      </div>

      <button onClick={clear} className="clear-button">Clear</button>

      {operation && (
        <p>
          Result of {num1} {operation} {num2} = <strong>{result}</strong>
        </p>
      )}
    </div>
  );
};

export default Calculator;