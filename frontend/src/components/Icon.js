import { IoIosCheckmarkCircle, IoIosCart, IoMdBulb } from "react-icons/io";

const Icon = ({ title }) => {
  return (
    <>
      {title == "Do me." ? (
        <IoIosCheckmarkCircle className="text-white" size={100} />
      ) : title == "notARealStore" ? (
        <IoIosCart className="text-white" size={100} />
      ) : (
        <IoMdBulb className="text-white" size={100} />
      )}
    </>
  );
};

export default Icon;
