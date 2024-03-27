import { useState } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (e) => {
    if (e.target.value === "C") {
      setValue("");
      setResult("");
    } else if (e.target.value === "=") {
      if (value === "") {
        setResult("Error");
      } else {
        try {
          // eslint-disable-next-line no-eval
          const evalResult = eval(value);
          if (isNaN(evalResult)) {
            setResult("NaN");
          } else if (!isFinite(evalResult)) {
            setResult("Infinity");
          } else {
            setResult(evalResult);
          }
        } catch (error) {
          setResult("Error");
          console.log(error);
        }
      }
    } else {
      setValue((prev) => prev + e.target.value);
    }
  };

  return (
    <div>
      <div className="heading">
        <h1>React Calculator</h1>
      </div>
      <div className="input">
        <input type="text" value={value} readOnly></input>
      </div>
      <div className="result">{result}</div>
      <div className="container">
        <div className="butt-grid">
          <button value="7" onClick={handleClick}>
            7
          </button>
          <button value="8" onClick={handleClick}>
            8
          </button>
          <button value="9" onClick={handleClick}>
            9
          </button>
          <button value="+" onClick={handleClick}>
            +
          </button>
          <button value="4" onClick={handleClick}>
            4
          </button>
          <button value="5" onClick={handleClick}>
            5
          </button>
          <button value="6" onClick={handleClick}>
            6
          </button>
          <button value="-" onClick={handleClick}>
            -
          </button>
          <button value="1" onClick={handleClick}>
            1
          </button>
          <button value="2" onClick={handleClick}>
            2
          </button>
          <button value="3" onClick={handleClick}>
            3
          </button>
          <button value="*" onClick={handleClick}>
            *
          </button>
          <button value="C" onClick={handleClick}>
            C
          </button>
          <button value="0" onClick={handleClick}>
            0
          </button>
          <button value="=" onClick={handleClick}>
            =
          </button>
          <button value="/" onClick={handleClick}>
            /
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
