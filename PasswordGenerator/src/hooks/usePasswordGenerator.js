import { useState } from "react";

export const usePasswordGenerator = () => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const generatePassword = (checkboxData, length) => {
    let charset = "";
    let generatedPassword = "";

    const selectedOption = checkboxData.filter((checkbox) => checkbox.state);

    if (selectedOption.length === 0) {
      setError("Select at least one option");
      setPassword("");
      return;
    }

    selectedOption.forEach((option) => {
      switch (option.title) {
        case "Include UpperCase Letter":
          charset += "ABCDEFGGIJKLMNOPQRSTUVWXYZ";
          break;
        case "Include LowerCase Letter":
          charset += "abcdefghijklmnopqrstuvwxyz";
          break;
        case "Include Number":
          charset += "123456789";
          break;
        case "Include Symbols":
          charset += "!@#$%^&*()~+-";
          break;
        default:
          break;
      }
    });

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      generatedPassword += charset[randomIndex];
    }
    setPassword(generatedPassword);
    setError("");
  };

  return { password, error, generatePassword };
};
