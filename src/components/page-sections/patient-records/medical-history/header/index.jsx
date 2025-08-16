import React from "react";
import { FiCalendar, FiUser } from "react-icons/fi";

const MedicalHistoryHeader = () => {
  return (
    <>
      <div className="flex items-center justify-between mb-8 ">
        <h1 className="text-3xl font-bold text-gray-900">Medical History</h1>
        <div className="flex items-center space-x-2">
          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
            <FiUser className="inline mr-1" /> Patient: John Doe
          </span>
          <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
            <FiCalendar className="inline mr-1" /> DOB: 1985-07-22
          </span>
        </div>
      </div>
    </>
  );
};

export default MedicalHistoryHeader;
