/* eslint-disable react/prop-types */
const Button = ({ className, onClick, text }) => {
  return (
    <button className={className} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
