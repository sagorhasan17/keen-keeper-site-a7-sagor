import { FaPlus } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="py-10 sm:py-14 lg:py-16 font-geist">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#1f2937] text-center pb-4 leading-tight">
          Friends to keep close in your life
        </h1>

        <p className="text-sm sm:text-base text-[#64748b] text-center font-semibold max-w-xl sm:max-w-2xl mx-auto">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>
        <div className="flex justify-center mt-5">
          <button className="mt-4 px-4 py-2 text-base bg-[#244d3f] hover:bg-[#1f2937] text-white font-semibold rounded-sm shadow-md transition duration-300 ease-in-out cursor-pointer">
            <FaPlus className="inline-block mr-2" /> Add a Friend
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
