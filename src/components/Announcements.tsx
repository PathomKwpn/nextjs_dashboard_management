import React from "react";

const Announcements = () => {
  return (
    <div className="bg-white p-4 rounded">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Announcement</h1>
        <span className="text-xs text-gray-600">View All</span>
      </div>
      <div className="flex flex-col gap-4 mt-4">
        <div className="bg-blue-100 rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2>Lorem ipsum sit</h2>
            <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
              2025-01-01
            </span>
          </div>
          <p className="text-xs text-gray-300 mt-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa velit
            nesciunt blanditiis illo sint possimus eos veritatis
          </p>
        </div>
        <div className="bg-blue-100 rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2>Lorem ipsum sit</h2>
            <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
              2025-01-01
            </span>
          </div>
          <p className="text-xs text-gray-300 mt-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa velit
            nesciunt blanditiis illo sint possimus eos veritatis
          </p>
        </div>
        <div className="bg-blue-100 rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2>Lorem ipsum sit</h2>
            <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
              2025-01-01
            </span>
          </div>
          <p className="text-xs text-gray-300 mt-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa velit
            nesciunt blanditiis illo sint possimus eos veritatis
          </p>
        </div>
      </div>
    </div>
  );
};

export default Announcements;
