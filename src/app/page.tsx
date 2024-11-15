"use client";

import Image from 'next/image';
import { useActivityTracker } from "../hooks/useActivityTracker"; 

export default function Home() {
  // Destructure activityData and addActivity from the custom hook
  const { activityData, addActivity } = useActivityTracker();

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-2xl font-semibold">Activity Tracker</h1>

        {/* Button to add activity */}
        <button
          onClick={() => addActivity("Running", 30)} // Example activity: Running for 30 minutes
          className="rounded-full border bg-blue-500 text-white py-2 px-4 mb-4 hover:bg-blue-700 transition"
        >
          Add Running Activity (30 minutes)
        </button>

        {/* Displaying the list of activities */}
        <ul className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
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

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          {/* Example links */}
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
      </footer>
    </div>
  );
}