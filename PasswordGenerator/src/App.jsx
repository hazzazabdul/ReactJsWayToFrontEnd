import { useState } from "react";
import Button from "./components/Button";
import Checkbox from "./components/Checkbox";
import StrengthChecker from "./components/StrengthChecker";
import { usePasswordGenerator } from "./hooks/usePasswordGenerator";

const App = () => {
  const [length, setLength] = useState(4);
  const [checkboxData, setCheckboxData] = useState([
    { title: "Include UpperCase Letter", state: false },
    { title: "Include LowerCase Letter", state: false },
    { title: "Include Number", state: false },
    { title: "Include Symbols", state: false },
  ]);
  const [copied, setCopied] = useState(false);

  const { password, error, generatePassword } = usePasswordGenerator();

  const handleChecked = (i) => {
    const updateChecked = [...checkboxData];
    updateChecked[i].state = !updateChecked[i].state;
    setCheckboxData(updateChecked);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(password);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

  return (
    <div className="container">
      {password ? (
        <div className="header">
          <div className="title">{password}</div>
          <Button
            className={"copy__btn"}
            onClick={handleCopy}
            text={copied ? "Copied" : "Copy"}
          />
        </div>
      ) : (
        <div className="title">Set your password</div>
      )}
      <div className="char__length">
        <span>
          <label>Password Length</label>
          <label>{length}</label>
        </span>
        <input
          type="range"
          min={4}
          max={18}
          value={length}
          onChange={(e) => setLength(e.target.value)}
        />
      </div>
      <div className="checkBoxes">
        {checkboxData.map((checkBox, index) => (
          // <div key={checkBox.id}>
          //   <input
          //     type="checkbox"
          //     checked={checkBox.state}
          //     onChange={() => handleChecked(index)}
          //   />
          //   <label>{checkBox.title}</label>
          // </div>
          <Checkbox
            key={index}
            checked={checkBox.state}
            onChange={() => handleChecked(index)}
            title={checkBox.title}
          />
        ))}
      </div>
      <StrengthChecker password={password} />
      {error && <div className="error__message">{error}</div>}
      <div className="generate__btn">
        <Button
          className={"generate__password"}
          onClick={() => generatePassword(checkboxData, length)}
          text={"Generate Password"}
        />
      </div>
    </div>
  );
};

export default App;
