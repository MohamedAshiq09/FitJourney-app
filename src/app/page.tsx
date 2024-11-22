// "use client";

// import Image from 'next/image';
// import Link from 'next/link';
// import { useState } from 'react';
// import { useActivityTracker } from "../hooks/useActivityTracker";
// import { FaHome, FaCalendarAlt, FaChartLine, FaCog } from 'react-icons/fa';

// export default function Dashboard() {
//   const { activityData, addActivity } = useActivityTracker();
//   const [activeDay, setActiveDay] = useState(new Date().getDate());
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const icons = [<FaHome size={24}/>, <FaCalendarAlt />, <FaChartLine />, <FaCog />];
  
  

//   return (
    
//     <div className="min-h-screen p-8 pb-20 grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-8 bg-[#1a1a1a] text-white font-sans">
      
//       <aside
//         className={`flex flex-col gap-6 items-center lg:items-start p-4 bg-[#2b2b2b] rounded-lg transition-width duration-[20000s] ease-in-out ${isSidebarOpen ? "w-55" : "w-16"}`}
//         onMouseEnter={() => setIsSidebarOpen(true)}
//         onMouseLeave={() => setIsSidebarOpen(false)}
//         onClick={() => setIsSidebarOpen((prev) => !prev)}
//       >
//         <div className={`${isSidebarOpen ? "block" : "hidden"} text-3xl font-semibold`}>
//           Hello, Alex!
//         </div>
//         <p className={`${isSidebarOpen ? "block" : "hidden"}`}>Ready for today's challenge?</p>
//         <nav className="flex flex-col gap-4 mt-8">
//           {["Home"].map((label, i) => (
//             <button
//               key={i}
//               className="flex items-center gap-2 p-3 hover:bg-[#383838] rounded-full"
//             >
//               {icons[i]}
//               {isSidebarOpen && <span>{label}</span>}
//             </button>
//           ))}

//           <Link href="/calender">
//             <button className="flex items-center gap-2 p-3 hover:bg-[#383838] rounded-full">
//               <FaCalendarAlt size={24}/>
//               {isSidebarOpen && <span>Calendar</span>}
//             </button>
//           </Link>

           
//           <Link href="/statistics">
//             <button className="flex items-center gap-2 p-3 hover:bg-[#383838] rounded-full">
//               <FaChartLine size={24} />
//               {isSidebarOpen && <span>Statistics</span>}
//             </button>
//           </Link>

           
//           <Link href="/settings">
//             <button className="flex items-center gap-2 p-3 hover:bg-[#383838] rounded-full">
//               <FaCog size={24}/>
//               {isSidebarOpen && <span>Settings</span>}
//             </button>
//           </Link>

//         </nav>
//       </aside>

      
//       <main className="flex flex-col gap-8">
        
//         <section className="flex gap-8">
//           <div className="bg-[#2b2b2b] rounded-lg p-6 flex-1">
//             <h2 className="text-xl mb-4">Physical Activity</h2>
//             <div className="flex justify-between">
//               <div>
//                 <p>Steps</p>
//                 <p className="text-2xl font-bold">8,745</p>
//               </div>
//               <div>
//                 <p>Calories burned</p>
//                 <p className="text-2xl font-bold">700</p>
//               </div>
//               <div>
//                 <p>Activity time</p>
//                 <p className="text-2xl font-bold">2h 45min</p>
//               </div>
//             </div>
//           </div>

           
//           <div className="bg-[#2b2b2b] rounded-lg p-6 w-90">
//             <h2 className="text-xl mb-4">Your Active Days</h2>
//             <div className="grid grid-cols-7 gap-4 text-center">
//               {Array.from({ length: 30 }, (_, i) => (
//                 <button
//                   key={i + 1}
//                   onClick={() => setActiveDay(i + 1)}
//                   className={`w-12 h-12 flex items-center justify-center text-center text-white text-base font-medium rounded-full ${
//                     i + 1 === activeDay ? "bg-blue-500" : "bg-[#383838]"
//                   }`}
//                 >
//                   {i + 1}
//                 </button>
//               ))}
//             </div>
//           </div>
//         </section>

         
//         <section className="flex gap-8">
//           <div className="bg-[#2b2b2b] rounded-lg p-6 w-1/2">
//             <h2 className="text-xl mb-4">Sleep Time</h2>
//             <p>You're almost there</p>
//             <div className="relative w-24 h-24 mt-4 rounded-full border-4 border-green-500 flex items-center justify-center">
//               <span className="text-xl">7.45h</span>
//             </div>
//           </div>
//           <div className="bg-[#2b2b2b] rounded-lg p-6 w-1/2">
//             <h2 className="text-xl mb-4">Weight Loss Plan</h2>
//             <p>80% completed</p>
//             <div className="w-full bg-[#383838] rounded-full h-4 mt-4">
//               <div
//                 className="bg-green-500 h-4 rounded-full transition-all"
//                 style={{ width: "80%" }}
//               ></div>
//             </div>
//             <p className="mt-2">
//               80kg <span className="float-right">70kg</span>
//             </p>
//           </div>
//         </section>

         
//         <section className="bg-[#2b2b2b] rounded-lg p-6">
//           <h2 className="text-xl mb-4">My Activities</h2>
//           <button
//             onClick={() => addActivity("Running", 30)}
//             className="rounded-full bg-blue-500 text-white py-2 px-4 mb-4 hover:bg-blue-700 transition"
//           >
//             Add Running Activity (30 minutes)
//           </button>
//           <ul className="list-inside list-decimal text-sm font-mono">
//             {activityData.length > 0 ? (
//               activityData.map((activity) => (
//                 <li key={activity.id} className="mb-2">
//                   {activity.date} - {activity.type} for {activity.duration} minutes
//                 </li>
//               ))
//             ) : (
//               <li>No activities yet. Start adding some!</li>
//             )}
//           </ul>
//         </section>
//       </main>
//     </div>
//   );
// }
"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useActivityTracker } from "../hooks/useActivityTracker";
import { FaHome, FaCalendarAlt, FaChartLine, FaCog } from "react-icons/fa";

export default function Dashboard() {
  const { activityData, addActivity } = useActivityTracker();
  const [activeDay, setActiveDay] = useState(new Date().getDate());
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex bg-[#1a1a1a] text-white font-sans">
      {/* Sidebar */}
      <aside
        className={`flex flex-col gap-6 items-center lg:items-start p-4 bg-[#2b2b2b] rounded-lg transition-[width] duration-300 ${
          isSidebarOpen ? "w-64" : "w-16"
        }`}
        onMouseEnter={() => setIsSidebarOpen(true)}
        onMouseLeave={() => setIsSidebarOpen(false)}
      >
        <div className={`${isSidebarOpen ? "block" : "hidden"} text-3xl font-semibold`}>
          Hello, Alex!
        </div>
        <p className={`${isSidebarOpen ? "block" : "hidden"}`}>
          Ready for today's challenge?
        </p>
        <nav className="flex flex-col gap-4 mt-8">
          {["Home", "Calendar", "Statistics", "Settings"].map((label, i) => (
            <Link key={i} href={`/${label.toLowerCase()}`}>
              <button className="flex items-center gap-2 p-3 hover:bg-[#383838] rounded-full">
                {[<FaHome />, <FaCalendarAlt />, <FaChartLine />, <FaCog />][i]}
                {isSidebarOpen && <span>{label}</span>}
              </button>
            </Link>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main
        className={`flex-1 p-8 pb-20 transition-[margin-left] duration-300 ${
          isSidebarOpen ? "ml-64" : "ml-16"
        }`}
      >
        {/* Section 1 */}
        <section className="flex gap-8">
          <div className="bg-[#2b2b2b] rounded-lg p-6 flex-1">
            <h2 className="text-xl mb-4">Physical Activity</h2>
            <div className="flex justify-between">
              <div>
                <p>Steps</p>
                <p className="text-2xl font-bold">8,745</p>
              </div>
              <div>
                <p>Calories burned</p>
                <p className="text-2xl font-bold">700</p>
              </div>
              <div>
                <p>Activity time</p>
                <p className="text-2xl font-bold">2h 45min</p>
              </div>
            </div>
          </div>

          <div className="bg-[#2b2b2b] rounded-lg p-6 w-90">
            <h2 className="text-xl mb-4">Your Active Days</h2>
            <div className="grid grid-cols-7 gap-4 text-center">
              {Array.from({ length: 30 }, (_, i) => (
                <button
                  key={i + 1}
                  onClick={() => setActiveDay(i + 1)}
                  className={`w-12 h-12 flex items-center justify-center text-center text-white text-base font-medium rounded-full ${
                    i + 1 === activeDay ? "bg-blue-500" : "bg-[#383838]"
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Section 2 */}
        <section className="flex gap-8">
          <div className="bg-[#2b2b2b] rounded-lg p-6 w-1/2">
            <h2 className="text-xl mb-4">Sleep Time</h2>
            <p>You're almost there</p>
            <div className="relative w-24 h-24 mt-4 rounded-full border-4 border-green-500 flex items-center justify-center">
              <span className="text-xl">7.45h</span>
            </div>
          </div>
          <div className="bg-[#2b2b2b] rounded-lg p-6 w-1/2">
            <h2 className="text-xl mb-4">Weight Loss Plan</h2>
            <p>80% completed</p>
            <div className="w-full bg-[#383838] rounded-full h-4 mt-4">
              <div
                className="bg-green-500 h-4 rounded-full transition-all"
                style={{ width: "80%" }}
              ></div>
            </div>
            <p className="mt-2">
              80kg <span className="float-right">70kg</span>
            </p>
          </div>
        </section>

        {/* Section 3 */}
        <section className="bg-[#2b2b2b] rounded-lg p-6">
          <h2 className="text-xl mb-4">My Activities</h2>
          <button
            onClick={() => addActivity("Running", 30)}
            className="rounded-full bg-blue-500 text-white py-2 px-4 mb-4 hover:bg-blue-700 transition"
          >
            Add Running Activity (30 minutes)
          </button>
          <ul className="list-inside list-decimal text-sm font-mono">
            {activityData.length > 0 ? (
              activityData.map((activity) => (
                <li key={activity.id} className="mb-2">
                  {activity.date} - {activity.type} for {activity.duration} minutes
                </li>
              ))
            ) : (
              <li>No activities yet. Start adding some!</li>
            )}
          </ul>
        </section>
      </main>
    </div>
  );
}
