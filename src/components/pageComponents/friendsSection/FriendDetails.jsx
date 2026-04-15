import { use } from "react";
import { FaPhoneAlt, FaVideo } from "react-icons/fa";
import { HiOutlineChatBubbleLeft } from "react-icons/hi2";
import { useParams } from "react-router";

const friendsPromise = fetch("/friends.json").then((res) => res.json());
const FriendDetails = () => {
  const { friendId } = useParams();

  const friends = use(friendsPromise);
  const selectedFriend = friends.find((f) => f.id === parseInt(friendId));

  return (
    <section className="bg-gray-100 min-h-screen p-4 font-sans">
      <div className="max-w-7/12 mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 font-geist pt-26">
        {/* profile */}
        <div className="bg-white rounded-2xl shadow p-6 text-center space-y-3">
          <img
            src={selectedFriend.picture}
            alt={selectedFriend.name}
            className="w-20 h-20 rounded-full mx-auto"
          />
          <h2 className="text-xl font-semibold">{selectedFriend.name}</h2>
          <div className="flex justify-center gap-2">
            <span
              className={`text-[10px] sm:text-xs px-3 py-1 rounded-full font-semibold ${
                selectedFriend.status === "Overdue"
                  ? "bg-[#ef4444] text-white"
                  : selectedFriend.status === "Almost Due"
                    ? "bg-[#efad44] text-white"
                    : "bg-[#244d3f] text-white"
              }`}
            >
              {selectedFriend.status}
            </span>
          </div>
          <div className="flex justify-center gap-2">
            {selectedFriend.tags?.map((tag, idx) => (
              <span
                key={idx}
                className="text-[12px] sm:text-xs px-2 py-1 rounded-full bg-[#cbfadb] text-[#244d3f] font-semibold"
              >
                {tag}
              </span>
            ))}
          </div>

          <p className="text-md text-[#64748b] ">{selectedFriend.bio}</p>

          <p className="text-md text-[#64748b] italic">
            Preferred: {selectedFriend.email}
          </p>
          <div className="space-y-2 pt-4">
            <button className="w-full bg-gray-100 hover:bg-gray-200 py-2 rounded-lg text-sm cursor-pointer">
              Snooze 2 Weeks
            </button>
            <button className="w-full bg-gray-100 hover:bg-gray-200 py-2 rounded-lg text-sm cursor-pointer">
              Archive
            </button>
            <button className="w-full bg-red-50 hover:bg-red-100 text-red-500 py-2 rounded-lg text-sm cursor-pointer">
              Delete
            </button>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="lg:col-span-2 space-y-6">
          {/* TOP STATS */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white rounded-xl shadow p-5 text-center">
              <h3 className="text-3xl font-bold text-[#244d3f]">{`${selectedFriend.days_since_contact} ago`}</h3>
              <p className="text-sm text-[#64748b]">Days Since Contact</p>
            </div>

            <div className="bg-white rounded-xl shadow p-5 text-center">
              <h3 className="text-3xl font-bold text-[#244d3f]">
                {selectedFriend.goal}
              </h3>
              <p className="text-sm text-[#64748b]">Goal (Days)</p>
            </div>

            <div className="bg-white rounded-xl shadow p-5 text-center">
              <h3 className="text-3xl font-semibold text-[#244d3f]">
                {/* {new Date().toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })} */}
                {selectedFriend.next_due_date}
              </h3>
              <p className="text-sm text-[#64748b]">Next Due</p>
            </div>
          </div>

          {/* RELATIONSHIP  */}
          <div className="bg-white rounded-xl shadow p-5 flex justify-between items-center">
            <div>
              <h3 className="font-medium text-[#244d3f] text-xl">
                Relationship Goal
              </h3>
              <p className="text-sm text-[#64748b]">
                Connect every{" "}
                <span className="font-bold text-xl">
                  {selectedFriend.goal} days
                </span>
              </p>
            </div>
            <button className="text-sm bg-gray-100 px-3 py-1 rounded-lg cursor-pointer">
              Edit
            </button>
          </div>

          {/* QUICK CHECK-IN */}
          <div className="bg-white rounded-xl shadow p-5">
            <h3 className="mb-4 font-medium">Quick Check-In</h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <button className="flex flex-col items-center gap-2 bg-gray-100 hover:bg-gray-200 py-6 rounded-xl cursor-pointer">
                <FaPhoneAlt />
                <span className="text-sm">Call</span>
              </button>

              <button className="flex flex-col items-center gap-2 bg-gray-100 hover:bg-gray-200 py-6 rounded-xl cursor-pointer">
                <HiOutlineChatBubbleLeft />
                <span className="text-sm">Text</span>
              </button>

              <button className="flex flex-col items-center gap-2 bg-gray-100 hover:bg-gray-200 py-6 rounded-xl cursor-pointer">
                <FaVideo />
                <span className="text-sm">Video</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FriendDetails;
