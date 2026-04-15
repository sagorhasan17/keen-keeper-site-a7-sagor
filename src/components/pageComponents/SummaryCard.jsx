import { use } from "react";

const SummaryCard = ({ friendsPromise }) => {
  const friends = use(friendsPromise);

  const onTrack = friends.filter((f) => f.status === "On-Track").length;
  const almostDue = friends.filter((f) => f.status === "Almost Due").length;
  const overdue = friends.filter((f) => f.status === "Overdue").length;

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-10 lg:gap-16 text-center font-geist pb-6">
        <div>
          <h2 className="text-3xl font-bold text-[#244d3f] pb-2">
            {friends.length}
          </h2>
          <p className="text-sm font-semibold text-[#64748b]">Total Friends</p>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-[#244d3f] pb-2">{onTrack}</h2>
          <p className="text-sm font-semibold text-[#64748b]">On Track</p>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-[#244d3f] pb-2">
            {almostDue + overdue}
          </h2>
          <p className="text-sm font-semibold text-[#64748b]">Need Attention</p>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-[#244d3f] pb-2">12</h2>
          <p className="text-sm font-semibold text-[#64748b]">
            Interactions This Month
          </p>
        </div>
      </div>
    </div>
  );
};

export default SummaryCard;
