const Loader = () => {
  return (
    <div className="min-h-[60vh] sm:min-h-[70vh] lg:min-h-[75vh] flex items-center justify-center bg-white px-4">
      <div className="flex flex-col items-center gap-4 sm:gap-5">
        <div className="relative flex items-center justify-center">
          <div className="h-14 w-14 sm:h-16 sm:w-16 lg:h-20 lg:w-20 rounded-full border-[5px] sm:border-[6px] border-gray-200 border-t-[#244d3f] animate-spin"></div>

          <div className="absolute h-3 w-3 sm:h-4 sm:w-4 rounded-full bg-[#244d3f] shadow-lg shadow-blue-500/50"></div>
        </div>

        <div className="text-center">
          <h2 className="text-lg sm:text-xl font-bold text-gray-800 tracking-wide">
            Loading...
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 mt-1">
            Please wait for data fetching...
          </p>
        </div>

        <div className="flex gap-1.5 sm:gap-2 mt-1">
          <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-[#244d3f] rounded-full animate-bounce [animation-delay:-0.3s]"></span>
          <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-[#244d3f] rounded-full animate-bounce [animation-delay:-0.15s]"></span>
          <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-[#244d3f] rounded-full animate-bounce"></span>
        </div>
      </div>
    </div>
  );
};

export default Loader;
