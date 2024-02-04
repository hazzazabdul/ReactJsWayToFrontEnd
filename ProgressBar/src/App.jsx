import { useState } from "react";
import ProgressBar from "./components/ProgressBar";
import { useEffect } from "react";

const App = () => {
  const [value, setValue] = useState(0);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    setInterval(() => {
      setValue((value) => value + 1);
    }, 100);
  }, []);
  return (
    <div className="wrapper">
      <h2 className="title">Progress Bar</h2>
      <ProgressBar value={value} onComplete={() => setSuccess(true)} />
      <div
        style={{
          textAlign: "center",
          margin: "1rem 0 "
        }}
      >
        {success ? "Complete!" : "Loading..."}
      </div>
    </div>
  );
};

export default App;
