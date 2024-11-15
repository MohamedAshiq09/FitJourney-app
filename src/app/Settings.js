"use client";

import { useState } from 'react';
import { FaUser, FaBell, FaMoon, FaSignOutAlt, FaLock } from 'react-icons/fa';

export default function Settings() {
  const [darkMode, setDarkMode] = useState(true);
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  return (
    <div className="min-h-screen p-8 bg-[#1a1a1a] text-white font-sans">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-semibold mb-6">Settings</h1>

        {/* Profile Settings */}
        <section className="bg-[#2b2b2b] p-6 rounded-lg mb-6">
          <h2 className="text-xl mb-4 flex items-center gap-2">
            <FaUser /> Profile Settings
          </h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span>Username</span>
              <input
                type="text"
                className="bg-[#383838] rounded-lg p-2 w-1/2 text-white"
                placeholder="Alex Buckmaster"
              />
            </div>
            <div className="flex justify-between items-center">
              <span>Email</span>
              <input
                type="email"
                className="bg-[#383838] rounded-lg p-2 w-1/2 text-white"
                placeholder="alex@example.com"
              />
            </div>
          </div>
        </section>

        {/* Notification Settings */}
        <section className="bg-[#2b2b2b] p-6 rounded-lg mb-6">
          <h2 className="text-xl mb-4 flex items-center gap-2">
            <FaBell /> Notification Settings
          </h2>
          <div className="flex justify-between items-center">
            <span>Enable Notifications</span>
            <input
              type="checkbox"
              checked={notificationsEnabled}
              onChange={() => setNotificationsEnabled(!notificationsEnabled)}
              className="w-6 h-6"
            />
          </div>
        </section>

        {/* Theme Settings */}
        <section className="bg-[#2b2b2b] p-6 rounded-lg mb-6">
          <h2 className="text-xl mb-4 flex items-center gap-2">
            <FaMoon /> Theme Settings
          </h2>
          <div className="flex justify-between items-center">
            <span>Dark Mode</span>
            <input
              type="checkbox"
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
              className="w-6 h-6"
            />
          </div>
        </section>

        {/* Account Management */}
        <section className="bg-[#2b2b2b] p-6 rounded-lg mb-6">
          <h2 className="text-xl mb-4 flex items-center gap-2">
            <FaLock /> Account Management
          </h2>
          <div className="space-y-4">
            <button className="w-full bg-red-500 text-white p-2 rounded-lg hover:bg-red-700">
              Change Password
            </button>
            <button className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-700">
              Update Email
            </button>
          </div>
        </section>

        {/* Logout Button */}
        <div className="text-center mt-8">
          <button className="bg-red-600 text-white py-2 px-6 rounded-lg flex items-center gap-2 hover:bg-red-800 transition">
            <FaSignOutAlt /> Logout
          </button>
        </div>
      </div>
    </div>
  );
}
