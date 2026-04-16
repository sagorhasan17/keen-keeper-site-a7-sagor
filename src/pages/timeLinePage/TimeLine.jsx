import { useContext } from "react";
import { BiSolidPhoneCall } from "react-icons/bi";
import { FcVideoCall } from "react-icons/fc";
import { MdTextsms } from "react-icons/md";
import FriendContext from "../../context/FriendContext";

const TimeLinePage = () => {
  const friendContext = useContext(FriendContext);

  const { addTimeLine } = friendContext;

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold pt-4 text-[#1f2937] leading-tight">
        Timeline :
      </h1>
      <div className="border border-[#1f293740] w-full mb-4"></div>
      <div className="mb-6">
        {addTimeLine.map((friend, index) => (
          <div key={index} className="flex gap-4 pb-4 shadow-md">
            <div className="flex flex-col items-center justify-center text-4xl">
              {friend.type === "call" && <BiSolidPhoneCall />}
              {friend.type === "video" && <FcVideoCall />}
              {friend.type === "message" && <MdTextsms />}
            </div>
            <div className="flex flex-col gap-2 py-2">
              <h2 className="font-bold text-xl capitalize text-[#244d3f]">
                {friend.type}
                <span className="text-[#64748b] text-lg px-1">with</span>
                <span className="text-[#64748b] text-lg">{friend.name}</span>
              </h2>
              <p className="text-md text-[#64748b] font-semibold">
                {friend.time}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimeLinePage;
