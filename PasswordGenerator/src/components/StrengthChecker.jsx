/* eslint-disable react/prop-types */
const StrengthChecker = ({ password }) => {
  const getPasswordLength = () => {
    const passwordLength = password.length;

    if (passwordLength < 1) {
      return "";
    } else if (passwordLength < 4) {
      return "Very Weak";
    } else if (passwordLength < 6) {
      return "Poor";
    } else if (passwordLength < 8) {
      return "Medium";
    } else if (passwordLength < 10) {
      return "Strong";
    } else {
      return "Very Strong";
    }
  };

  const passwordStrength = getPasswordLength();
  if (!passwordStrength) {
    return <></>;
  }
  return (
    <div className="password__strength">
      Strength :{" "}
      <span
        style={{
          fontWeight: "bold",
        }}
      >
        {passwordStrength}
      </span>
    </div>
  );
};

export default StrengthChecker;
