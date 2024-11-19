"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useActivityTracker } from "../hooks/useActivityTracker";
import { FaHome, FaCalendarAlt, FaChartLine, FaCog } from 'react-icons/fa';

export default function Dashboard() {
  const { activityData, addActivity } = useActivityTracker();
  const [activeDay, setActiveDay] = useState(new Date().getDate());
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const icons = [<FaHome size={24}/>, <FaCalendarAlt />, <FaChartLine />, <FaCog />];

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white font-sans">
      {/* Top Navigation */}
      <div className="flex justify-between items-center p-4 bg-[#2b2b2b]">
        <h1 className="text-xl font-bold">Dashboard</h1>
        <Link href="/login">
          <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded transition">
            Login
          </button>
        </Link>
      </div>

      <div className="p-8 pb-20 grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-8">
        {/* Sidebar */}
        <aside
          className={`flex flex-col gap-6 items-center lg:items-start p-4 bg-[#2b2b2b] rounded-lg transition-width duration-[20000s] ease-in-out ${isSidebarOpen ? "w-55" : "w-16"}`}
          onMouseEnter={() => setIsSidebarOpen(true)}
          onMouseLeave={() => setIsSidebarOpen(false)}
          onClick={() => setIsSidebarOpen((prev) => !prev)}
        >
          <div className={`${isSidebarOpen ? "block" : "hidden"} text-3xl font-semibold`}>
            Hello, Alex!
          </div>
          <p className={`${isSidebarOpen ? "block" : "hidden"}`}>Ready for today's challenge?</p>
          <nav className="flex flex-col gap-4 mt-8">
            {["Home"].map((label, i) => (
              <button
                key={i}
                className="flex items-center gap-2 p-3 hover:bg-[#383838] rounded-full"
              >
                {icons[i]}
                {isSidebarOpen && <span>{label}</span>}
              </button>
            ))}

            <Link href="/calender">
              <button className="flex items-center gap-2 p-3 hover:bg-[#383838] rounded-full">
                <FaCalendarAlt size={24}/>
                {isSidebarOpen && <span>Calendar</span>}
              </button>
            </Link>

            {/* Link for Statistics */}
            <Link href="/statistics">
              <button className="flex items-center gap-2 p-3 hover:bg-[#383838] rounded-full">
                <FaChartLine size={24} />
                {isSidebarOpen && <span>Statistics</span>}
              </button>
            </Link>

            {/* Link for Settings */}
            <Link href="/settings">
              <button className="flex items-center gap-2 p-3 hover:bg-[#383838] rounded-full">
                <FaCog size={24}/>
                {isSidebarOpen && <span>Settings</span>}
              </button>
            </Link>
          </nav>
        </aside>

        {/* Main content */}
        <main className="flex flex-col gap-8">
          {/* Physical Activity Section */}
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

            {/* Calendar Section */}
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

          {/* Additional Sections */}
          {/* ... (rest of your code) */}
        </main>
      </div>
    </div>
  );
}
