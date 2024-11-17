// "use client" ;

// import React, { useRef, useEffect } from "react";
// import FullCalendar from "@fullcalendar/react"; 
// import dayGridPlugin from "@fullcalendar/daygrid"; 
// import interactionPlugin from "@fullcalendar/interaction"; 

// const ActivityCalendar = () => {
//   const calendarRef = useRef(null);

//   const events = [
//     { title: "Workout", start: "2024-11-14", color: "#6A5ACD" },
//     { title: "Team Meeting", start: "2024-11-15", end: "2024-11-15", color: "#1E90FF" },
//     { title: "Project Deadline", start: "2024-11-16", color: "#FF6347" },
//   ];

//   return (
//     <div className="bg-white shadow-lg rounded-xl p-6">
//       {/* Header */}
//       <div className="flex justify-between items-center mb-6">
//         <h2 className="text-xl sm:text-2xl font-bold text-gray-800">Activity Calendar</h2>
//         <div className="flex space-x-2">
//           <button className="px-3 py-1 bg-blue-500 text-white rounded-md text-sm hover:bg-blue-600">
//             This Week
//           </button>
//           <button className="px-3 py-1 bg-gray-200 text-gray-700 rounded-md text-sm hover:bg-gray-300">
//             This Month
//           </button>
//         </div>
//       </div>

//       {/* Calendar */}
//       <div className="rounded-lg overflow-hidden shadow-md">
//         <FullCalendar
//           ref={calendarRef}
//           plugins={[dayGridPlugin, interactionPlugin]}
//           initialView="dayGridMonth"
//           editable={true}
//           selectable={true}
//           events={events}
//           headerToolbar={{
//             left: "prev,next today",
//             center: "title",
//             right: "dayGridMonth,dayGridWeek,dayGridDay",
//           }}
//           eventClick={(info) => alert(`Event: ${info.event.title}`)} 
//           className="p-4 bg-white"
//         />
//       </div>
//     </div>
//   );
// };

// export default ActivityCalendar;

"use client";

import React, { useRef } from "react";
import FullCalendar from "@fullcalendar/react"; 
import dayGridPlugin from "@fullcalendar/daygrid"; 
import interactionPlugin from "@fullcalendar/interaction"; 

const ActivityCalendar = () => {
  const calendarRef = useRef(null);

  const events = [
    { title: "Workout", start: "2024-11-14", color: "#6A5ACD" },
    { title: "Team Meeting", start: "2024-11-15", end: "2024-11-15", color: "#1E90FF" },
    { title: "Project Deadline", start: "2024-11-16", color: "#FF6347" },
  ];

  return (
    <div className="bg-white shadow-lg rounded-xl p-6 max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-0">
          Activity Calendar
        </h2>
        <div className="flex space-x-3">
          <button className="px-4 py-2 bg-blue-500 text-white font-medium rounded-lg shadow hover:bg-blue-600 transition">
            This Week
          </button>
          <button className="px-4 py-2 bg-gray-200 text-gray-700 font-medium rounded-lg shadow hover:bg-gray-300 transition">
            This Month
          </button>
        </div>
      </div>

      {/* Calendar */}
      <div className="overflow-hidden rounded-lg shadow-md bg-gray-50 p-4">
        <FullCalendar
          ref={calendarRef}
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          editable={true}
          selectable={true}
          events={events}
          headerToolbar={{
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,dayGridWeek,dayGridDay",
          }}
          eventClick={(info) =>
            alert(`Event: ${info.event.title}`)
          }
          className="p-2 bg-white rounded-lg"
        />
      </div>

      {/* Footer Info */}
      <div className="mt-6 text-center text-gray-600">
        <p className="text-sm">
          Click on any event to see details or interact with the calendar to add/edit events.
        </p>
      </div>
    </div>
  );
};

export default ActivityCalendar;

