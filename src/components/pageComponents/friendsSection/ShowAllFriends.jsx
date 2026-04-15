import FriendCard from "./FriendCard";

const ShowAllFriends = ({ friends }) => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 font-geist">
      <h3 className="text-xl md:text-2xl font-bold text-[#244d3f] pb-2">All Friends:</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
        {friends.map((friend) => (
          <FriendCard key={friend.id} friend={friend} />
        ))}
      </div>
    </div>
  );
};

export default ShowAllFriends;
