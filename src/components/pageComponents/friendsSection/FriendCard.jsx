const FriendCard = ({ friend }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition duration-300 p-5 sm:p-6 text-center cursor-pointer">
      <div className="flex justify-center mb-4">
        <img
          src={friend.picture}
          alt={friend.name}
          className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover"
        />
      </div>

      <h3 className="text-base sm:text-lg font-semibold text-[#1f2937]">
        {friend.name}
      </h3>

      <p className="text-xs text-gray-400 mb-2">
        {`${friend.days_since_contact} ago`}
      </p>

      <div className="flex items-center justify-center gap-2 flex-wrap mb-3">
        {friend.tags?.map((tag, idx) => (
          <span
            key={idx}
            className="text-[10px] sm:text-xs px-2 py-1 rounded-full bg-[#cbfadb] text-[#244d3f] font-semibold"
          >
            {tag}
          </span>
        ))}
      </div>

      <span
        className={`text-[10px] sm:text-xs px-3 py-1 rounded-full font-semibold ${
          friend.status === "Overdue"
            ? "bg-[#ef4444] text-white"
            : friend.status === "Almost Due"
              ? "bg-[#efad44] text-white"
              : "bg-[#244d3f] text-white"
        }`}
      >
        {friend.status}
      </span>
    </div>
  );
};

export default FriendCard;
