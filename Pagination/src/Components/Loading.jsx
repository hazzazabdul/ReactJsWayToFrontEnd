import DotLoader from "react-spinners/DotLoader";
import Style from "../Style/Loading.module.css"

const Loading = () => {
  return (
    <div className={Style.loading__parent}>
      <DotLoader color="#36d7b7" size={80} />
    </div>
  );
};

export default Loading;
