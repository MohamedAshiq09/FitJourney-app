// import React from 'react';

// const Statistics = () => {
//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4 sm:p-8">
//       <div className="flex flex-col sm:flex-row gap-8 w-full max-w-6xl">
//         {/* Weekly Statistics Section */}
//         <div className="bg-white shadow-lg rounded-xl p-6 sm:p-12 w-full sm:w-2/3 lg:w-3/4">
//           <h2 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8">Weekly Statistics</h2>
//           <p className="text-gray-700 mb-4 sm:mb-6">
//             <span role="img" aria-label="rocket">
//               🚀
//             </span>{" "}
//             Great job! You improved your <strong>focus</strong> by <strong>15%</strong> and completed <strong>10 tasks</strong> across 3 projects.
//           </p>
//           <div className="mb-6">
//             <div className="flex justify-between mb-2">
//               <span className="text-gray-600">Total productive time</span>
//               <span className="text-lg font-semibold">32 hr 45 min</span>
//             </div>
//             <div className="flex justify-between mb-4">
//               <span className="text-gray-600">Work hour efficiency</span>
//               <span className="text-lg font-semibold">85% of 40 hr</span>
//             </div>
//           </div>
//           <div className="flex justify-between items-center mb-8">
//             <StatCircle label="Focus" percentage={72} color="blue" />
//             <StatCircle label="Meetings" percentage={20} color="green" />
//             <StatCircle label="Breaks" percentage={8} color="red" />
//           </div>
//           <div>
//             <h3 className="text-xl font-semibold mb-4">Top Categories</h3>
//             <Category label="Development" percentage={50} time="16 hr 30 min" />
//             <Category label="Meetings" percentage={20} time="6 hr 40 min" />
//             <Category label="Emails" percentage={10} time="3 hr 20 min" />
//           </div>
//         </div>

//         {/* Recent Activities Section */}
//         <div className="bg-white shadow-lg rounded-xl p-6 sm:w-1/3 lg:w-1/4">
//           <div className="flex justify-between items-center mb-6">
//             <h2 className="text-xl sm:text-2xl font-bold">Recent Activities</h2>
//             <div className="flex space-x-2">
//               <button className="px-3 py-1 bg-blue-500 text-white rounded-md text-sm sm:text-base hover:bg-blue-600">
//                 This Week
//               </button>
//               <button className="px-3 py-1 bg-gray-200 text-gray-500 rounded-md text-sm sm:text-base hover:bg-gray-300">
//                 Last Week
//               </button>
//               <button className="px-3 py-1 bg-gray-200 text-gray-500 rounded-md text-sm sm:text-base hover:bg-gray-300">
//                 This Month
//               </button>
//             </div>
//           </div>
//           <DaySummary day="6 Nov, Mon" percentage={80} time="7 hr 10 min" />
//           <DaySummary day="7 Nov, Tue" percentage={90} time="8 hr 00 min" />
//           <DaySummary day="8 Nov, Wed" percentage={85} time="7 hr 30 min" />
//           <DaySummary day="9 Nov, Thu" percentage={70} time="6 hr 20 min" />
//         </div>
//       </div>
//     </div>
//   );
// };

// // Helper components
// const StatCircle = ({ label, percentage, color }) => (
//   <div className="flex flex-col items-center">
//     <div
//       className={`w-16 h-16 rounded-full border-4 border-${color}-500 flex items-center justify-center`}
//     >
//       <span className="text-lg font-semibold">{percentage}%</span>
//     </div>
//     <span className="text-sm text-gray-600 mt-2">{label}</span>
//   </div>
// );

// const Category = ({ label, percentage, time }) => (
//   <div className="flex justify-between items-center mb-2">
//     <span className="text-gray-700">{label}</span>
//     <div className="flex items-center">
//       <span className="text-gray-500 text-sm mr-4">{percentage}%</span>
//       <span className="text-gray-700 font-semibold">{time}</span>
//     </div>
//   </div>
// );

// const DaySummary = ({ day, percentage, time }) => (
//   <div className="mb-4">
//     <div className="flex justify-between items-center">
//       <span className="text-gray-700 font-medium">{day}</span>
//       <span className="text-lg font-semibold">{percentage}%</span>
//     </div>
//     <span className="text-gray-500 text-sm">{time}</span>
//     <div className="flex space-x-2 mt-2">
//       <div className="w-4 h-4 rounded-full bg-blue-500"></div>
//       <div className="w-4 h-4 rounded-full bg-green-500"></div>
//       <div className="w-4 h-4 rounded-full bg-red-500"></div>
//     </div>
//   </div>
// );

// export default Statistics;
"use client"

import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

// Register components for Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// Chart data
const data = {
  labels: ['Steps', 'Calories', 'Distance', 'Workouts', 'Sleep'],
  datasets: [
    {
      label: 'Daily Stats',
      data: [5000, 350, 7.5, 3, 8],
      backgroundColor: [
        'rgba(255, 99, 132, 0.6)',
        'rgba(54, 162, 235, 0.6)',
        'rgba(255, 206, 86, 0.6)',
        'rgba(75, 192, 192, 0.6)',
        'rgba(153, 102, 255, 0.6)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
      ],
      borderWidth: 2,
      hoverBackgroundColor: 'rgba(255, 255, 255, 0.8)', // Change color on hover
      hoverBorderColor: 'rgba(0, 0, 0, 1)',
    },
  ],
};

// Chart options
const options = {
  responsive: true,
  plugins: {
    legend: {
      display: true,
      position: 'top',
      labels: {
        font: {
          size: 14,
          family: 'Arial',
        },
        color: '#333',
        boxWidth: 20,
      },
    },
    title: {
      display: true,
      text: 'Activity Tracker - Daily Statistics',
      font: {
        size: 18,
        weight: 'bold',
        family: 'Arial',
      },
      color: '#111',
    },
    tooltip: {
      enabled: true,
      backgroundColor: 'rgba(0,0,0,0.8)',
      titleColor: '#fff',
      bodyColor: '#eee',
      borderColor: '#fff',
      borderWidth: 1,
    },
  },
  animation: {
    duration: 2000, // Animation duration in ms
    easing: 'easeOutBounce', // Smooth bounce effect
  },
  scales: {
    x: {
      grid: {
        color: 'rgba(200, 200, 200, 0.2)',
        borderDash: [5, 5],
      },
      ticks: {
        color: '#666',
        font: {
          size: 12,
          family: 'Arial',
        },
      },
    },
    y: {
      beginAtZero: true,
      grid: {
        color: 'rgba(200, 200, 200, 0.2)',
        borderDash: [5, 5],
      },
      ticks: {
        color: '#666',
        font: {
          size: 12,
          family: 'Arial',
        },
        callback: function (value) {
          return value + ' units'; // Add 'units' to y-axis ticks
        },
      },
    },
  },
  hover: {
    mode: 'nearest',
    intersect: true,
  },
};

// Component
const BarChart = () => {
  return (
    <div
      style={{
        width: '90%',
        margin: '20px auto',
        padding: '20px',
        backgroundColor: '#f9f9f9',
        borderRadius: '15px',
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
      }}
    >
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
