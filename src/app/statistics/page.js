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

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Line } from "react-chartjs-2";
import "chart.js/auto";
import "./Dashboard.css";

const Dashboard = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: "Great job on your workout!", sender: "Bot" },
    { id: 2, text: "Thanks! Feeling good today.", sender: "User" },
  ]);
  const [newMessage, setNewMessage] = useState("");

  const chartData = {
    labels: ["W1", "W2", "W3", "W4"],
    datasets: [
      {
        label: "Exercise",
        data: [5, 7, 6, 8],
        borderColor: "#4caf50",
        backgroundColor: "rgba(76, 175, 80, 0.2)",
        tension: 0.4,
        fill: true,
        pointRadius: 3,
      },
    ],
  };

  const [filter, setFilter] = useState("All");

  const feedItems = [
    { id: 1, type: "Exercise", text: "10 push-ups completed", time: "2 hrs ago" },
    { id: 2, type: "Meal", text: "Healthy salad with chicken", time: "5 hrs ago" },
    { id: 3, type: "Achievement", text: "7,000 steps reached!", time: "1 day ago" },
    { id: 4, type: "Sleep", text: "8 hours of sleep", time: "1 day ago" },
  ];

  const filteredFeed = feedItems.filter((item) =>
    filter === "All" ? true : item.type === filter
  );

  const handleSend = () => {
    if (newMessage.trim()) {
      setMessages([...messages, { id: messages.length + 1, text: newMessage, sender: "User" }]);
      setNewMessage("");
    }
  };

  return (
    <div className="dashboard-container">
      
      <div className="chat-section">
        <h2>Chat</h2>
        <div className="chat-box">
          {messages.map((msg) => (
            <div key={msg.id} className={`chat-message ${msg.sender.toLowerCase()}`}>
              {msg.text}
            </div>
          ))}
        </div>
        <div className="chat-input">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type..."
          />
          <button onClick={handleSend}>Send</button>
        </div>
      </div>

     
      <div className="content-section">
       
        <div className="progress-chart">
          <h2>Weekly Progress</h2>
          <Line data={chartData} />
        </div>

        
        <div className="feed-filters">
          {["All", "Exercise", "Meal", "Achievement", "Sleep"].map((category) => (
            <motion.button
              key={category}
              onClick={() => setFilter(category)}
              whileHover={{ scale: 1.1 }}
              className={filter === category ? "active-filter" : ""}
            >
              {category}
            </motion.button>
          ))}
        </div>

        
        <div className="feed">
          {filteredFeed.map((item) => (
            <motion.div
              className="feed-item"
              key={item.id}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <h3>{item.type}</h3>
              <p>{item.text}</p>
              <span>{item.time}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
