import { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaFilter } from "react-icons/fa";

const ControlFilters = ({viewMode,setViewMode,selectedStatus,setSelectedStatus}) => {
        const [currentDate, setCurrentDate] = useState(new Date());
      
       // Navigation functions
        const goToPreviousWeek = () => {
          const newDate = new Date(currentDate);
          newDate.setDate(newDate.getDate() - 7);
          setCurrentDate(newDate);
        };
      
        const goToNextWeek = () => {
          const newDate = new Date(currentDate);
          newDate.setDate(newDate.getDate() + 7);
          setCurrentDate(newDate);
        };
      
        const goToToday = () => {
          setCurrentDate(new Date());
        };
      
  return (
    <>
      <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-4 lg:space-y-0">
          {/* Date Navigation */}
          <div className="flex items-center space-x-3">
            <button
              onClick={goToPreviousWeek}
              className="p-2 hover:bg-gray-100 rounded-full"
            >
              <FaChevronLeft />
            </button>
            <button
              onClick={goToToday}
              className="px-4 py-2 bg-blue-50 text-blue-600 rounded-lg"
            >
              Today
            </button>
            <button
              onClick={goToNextWeek}
              className="p-2 hover:bg-gray-100 rounded-full"
            >
              <FaChevronRight />
            </button>
            <span className="font-semibold">
              {currentDate.toLocaleDateString("en-US", {
                month: "long",
                year: "numeric",
              })}
            </span>
          </div>

          {/* View Mode Toggle */}
          <div className="flex space-x-2">
            <button
              onClick={() => setViewMode("day")}
              className={`px-3 py-1 rounded-lg ${
                viewMode === "day"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-700"
              }`}
            >
              Day
            </button>
            <button
              onClick={() => setViewMode("week")}
              className={`px-3 py-1 rounded-lg ${
                viewMode === "week"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-700"
              }`}
            >
              Week
            </button>
            <button
              onClick={() => setViewMode("month")}
              className={`px-3 py-1 rounded-lg ${
                viewMode === "month"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-700"
              }`}
            >
              Month
            </button>
          </div>

          {/* Status Filter */}
          <div className="flex items-center space-x-2">
            <FaFilter className="text-gray-400" />
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2"
            >
              <option value="all">All Appointments</option>
              <option value="confirmed">Confirmed</option>
              <option value="pending">Pending</option>
              <option value="cancelled">Cancelled</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
};

export default ControlFilters;
