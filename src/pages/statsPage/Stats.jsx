import { useContext } from "react";
import { Legend, Pie, PieChart, Tooltip } from "recharts";
import FriendContext from "../../context/FriendContext";

const StatsPage = () => {
  const { addTimeLine } = useContext(FriendContext);

  if (!addTimeLine || addTimeLine.length === 0) {
    return (
      <div className="text-center py-20 text-gray-500">
        No stats data available
      </div>
    );
  }

  const stats = addTimeLine.reduce(
    (acc, item) => {
      if (item.type === "video") acc.video += 1;
      if (item.type === "message") acc.message += 1;
      if (item.type === "call") acc.call += 1;
      return acc;
    },
    { video: 0, message: 0, call: 0 },
  );

  const data = [
    { name: "Video", value: stats.video, fill: "#37a163" },
    { name: "Message", value: stats.message, fill: "#7e35e1" },
    { name: "Call", value: stats.call, fill: "#244d3f" },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-16">
      <div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#1f2937] pb-18 leading-tight font-geist">
          Friendship Analytics
        </h1>
        <p className="text-sm sm:text-base text-[#64748b] text-center font-semibold max-w-xl sm:max-w-2xl mx-auto pb-10">
          By Interaction Type
        </p>
      </div>

      {/* Chart */}
      <div className="flex items-center justify-center">
        <PieChart
          style={{
            width: "100%",
            maxWidth: "500px",
            maxHeight: "80vh",
            aspectRatio: 1,
            paddingBottom: "20px",
          }}
          responsive
        >
          <Pie
            data={data}
            innerRadius="80%"
            outerRadius="100%"
            // Corner radius is the rounded edge of each pie slice
            cornerRadius="50%"
            fill="#8884d8"
            // padding angle is the gap between each pie slice
            paddingAngle={5}
            dataKey="value"
          />
          <Legend />
          <Tooltip />
        </PieChart>
      </div>
    </div>
  );
};

export default StatsPage;
