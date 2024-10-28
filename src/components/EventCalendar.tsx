"use client";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

import Image from "next/image";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const events = [
  {
    id: 1,
    title: "Event 1",
    time: "10:00 AM - 12:00 PM",
    description: "Description of event 1",
  },
  {
    id: 1,
    title: "Event 1",
    time: "10:00 AM - 12:00 PM",
    description: "Description of event 1",
  },
  {
    id: 1,
    title: "Event 1",
    time: "10:00 AM - 12:00 PM",
    description: "Description of event 1",
  },
  {
    id: 1,
    title: "Event 1",
    time: "10:00 AM - 12:00 PM",
    description: "Description of event 1",
  },
];

const EventCalendar = () => {
  const [value, onChange] = useState<Value>(new Date());
  return (
    <div className="bg-white p-4 rounded">
      <Calendar onChange={onChange} value={value} />
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold my-4">Events</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20} />
      </div>
      <div className="flex flex-col gap-4">
        {events.map((event) => (
          <div
            className="p-5  rounded-md border-2 border-gray-100 border-t-4"
            key={event.id}
          >
            <div className="flex items-center justify-between">
              <h1>{event.title}</h1>
              <span>{event.time}</span>
            </div>
            <p>{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventCalendar;

// 1.13.54
// https://www.youtube.com/watch?v=myYlGLFxZas