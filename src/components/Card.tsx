
import graph from "../assets/Icons/schart.svg";

const Card = () => {
  return (
    <div className=" h-[80px] flex w-full items-center  justify-between p-2 bg-[#ffffff] rounded-sm ">
      <div className=" w-full">
        <h1 className="text-xs capitalize text-[#787C90]">dialy transaction volume</h1>
        <h2
          className="text-[#262626] text-[18px] "

        >
          1234000
        </h2>
          </div>
          <img src={graph} alt="" className="w-14 h-24" />
    </div>
  );
};

export default Card;
