/* eslint-disable react/prop-types */
const Cell = ({ onClick, filled, isDisable }) => {
  return (
    <button
    disabled={isDisable}
      className={filled ? "cell cell__activated" : "cell"}
      onClick={onClick}
    ></button>
  );
};

export default Cell;
