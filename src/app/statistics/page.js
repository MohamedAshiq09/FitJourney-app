import React from 'react';

const Statistics = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-8">
      <div className="flex gap-8">
        {/* Weekly Statistics Section */}
        <div className="bg-white shadow-md rounded-lg p-40 w-110">
          <h2 className="text-4xl font-semibold mb-9">Weekly Statistics</h2>
          <p className="text-gray-700 mb-6">
            <span role="img" aria-label="rocket">🚀</span> This week, you improved <strong>focus</strong> by <strong>15%</strong> and completed <strong>10 tasks</strong> across 3 projects.
          </p>
          <div className="mb-6">
            <div className="flex justify-between mb-2">
              <span className="text-gray-700">Total productive time</span>
              <span className="text-lg font-semibold">32 hr 45 min</span>
            </div>
            <div className="flex justify-between mb-4">
              <span className="text-gray-700">Percent of work hours</span>
              <span className="text-lg font-semibold">85% of 40 hr</span>
            </div>
          </div>
          <div className="flex justify-between items-center mb-6">
            <StatCircle label="Focus" percentage={72} color="blue" />
            <StatCircle label="Meetings" percentage={20} color="green" />
            <StatCircle label="Breaks" percentage={8} color="red" />
          </div>
          <div>
            <h3 className="text-gray-700 mb-2">Top Categories</h3>
            <Category label="Development" percentage={50} time="16 hr 30 min" />
            <Category label="Meetings" percentage={20} time="6 hr 40 min" />
            <Category label="Emails" percentage={10} time="3 hr 20 min" />
          </div>
        </div>

        {/* Recent Activities Section */}
        <div className="bg-white shadow-md rounded-lg p-6 w-80">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">Recent Activities</h2>
            <div className="flex space-x-2">
              <button className="px-3 py-1 bg-gray-200 rounded">This Week</button>
              <button className="px-3 py-1 text-gray-500">Last Week</button>
              <button className="px-3 py-1 text-gray-500">This Month</button>
            </div>
          </div>
          <DaySummary day="6 Nov, Mon" percentage={80} time="7 hr 10 min" />
          <DaySummary day="7 Nov, Tue" percentage={90} time="8 hr 00 min" />
          <DaySummary day="8 Nov, Wed" percentage={85} time="7 hr 30 min" />
          <DaySummary day="9 Nov, Thu" percentage={70} time="6 hr 20 min" />
        </div>
      </div>
    </div>
  );
};

// Helper components
const StatCircle = ({ label, percentage, color }) => (
  <div className="flex flex-col items-center">
    <div className={`w-12 h-12 rounded-full border-4 border-${color}-500 flex items-center justify-center`}>
      <span className="text-lg font-semibold">{percentage}%</span>
    </div>
    <span className="text-xs text-gray-600 mt-2">{label}</span>
  </div>
);

const Category = ({ label, percentage, time }) => (
  <div className="flex justify-between items-center mb-2">
    <span className="text-gray-700">{label}</span>
    <div className="flex items-center">
      <span className="text-gray-500 text-sm mr-4">{percentage}%</span>
      <span className="text-gray-700 font-semibold">{time}</span>
    </div>
  </div>
);

const DaySummary = ({ day, percentage, time }) => (
  <div className="mb-4">
    <div className="flex justify-between items-center">
      <span className="text-gray-700">{day}</span>
      <span className="text-lg font-semibold">{percentage}%</span>
    </div>
    <span className="text-gray-500 text-sm">{time}</span>
    <div className="flex space-x-2 mt-2">
      <div className="w-4 h-4 rounded-full bg-blue-500"></div>
      <div className="w-4 h-4 rounded-full bg-green-500"></div>
      <div className="w-4 h-4 rounded-full bg-red-500"></div>
    </div>
  </div>
);

export default Statistics;
