/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";

const ProgressBar = ({ value = 0, onComplete = () => {} }) => {
  const [parcent, setParcent] = useState(value);
  useEffect(() => {
    setParcent(Math.min(100, Math.max(value, 0)));
    if (parcent >= 100) {
      onComplete();
    }
  }, [value]);
  return (
    <div className="progressbar">
      <span
        style={{
          color: parcent > 49 ? "White" : "black",
        }}
      >
        {parcent.toFixed()}%
      </span>
      <div style={{
        width: `${parcent}%`
      }}></div>
    </div>
  );
};

export default ProgressBar;
