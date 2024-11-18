"use client";

import React, { useRef } from "react";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid"; 
import interactionPlugin from "@fullcalendar/interaction"; 
import dayGridPlugin from "@fullcalendar/daygrid"; 

const ActivityCalendar = () => {
  const calendarRef = useRef(null);

  const events = [
    { title: "Company training", start: "2024-11-18T13:00:00", end: "2024-11-18T14:00:00", color: "#F39C12" },
    { title: "Lunch Break", start: "2024-11-18T14:00:00", end: "2024-11-18T14:30:00", color: "#3498DB" },
    { title: "Planning", start: "2024-11-18T15:00:00", end: "2024-11-18T16:30:00", color: "#27AE60" },
    { title: "Team Meeting", start: "2024-11-19T10:00:00", end: "2024-11-19T11:30:00", color: "#1ABC9C" },
    { title: "Client Call", start: "2024-11-19T13:30:00", end: "2024-11-19T14:30:00", color: "#9B59B6" },
  ];

  return (
    <div className="bg-white shadow-lg rounded-xl p-6 max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Activity Calendar</h2>
      </div>

      {/* Calendar */}
      <div className="rounded-lg bg-gray-50 p-4">
        <FullCalendar
          ref={calendarRef}
          plugins={[timeGridPlugin, interactionPlugin, dayGridPlugin]}
          initialView="timeGridWeek"
          events={events}
          slotMinTime="05:00:00"
          slotMaxTime="19:00:00"
          headerToolbar={{
            left: "prev,next today",
            center: "title",
            right: "timeGridWeek,timeGridDay",
          }}
          eventClassNames={(info) => "rounded-lg text-white shadow-md"}
          eventContent={(info) => (
            <div className="p-2 text-xs">
              <strong>{info.event.title}</strong>
              <br />
              <span>{info.timeText}</span>
            </div>
          )}
          height="auto"
          className="rounded-lg shadow-lg"
        />
      </div>

      {/* Footer */}
      <div className="mt-6 text-center text-gray-600">
        <p className="text-sm">Interactive calendar with detailed weekly views!</p>
      </div>
    </div>
  );
};

export default ActivityCalendar;
