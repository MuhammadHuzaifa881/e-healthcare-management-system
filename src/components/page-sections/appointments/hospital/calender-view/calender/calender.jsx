import { Button } from "@/components/ui/button";
import React from "react";
import { FiChevronLeft, FiChevronRight, FiClock, FiUser } from "react-icons/fi";

const Calender = ({ setCurrentMonth, currentMonth, setSelectedDate,selectedDate }) => {
  const daysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    return new Date(year, month + 1, 0).getDate();
  };

  const firstDayOfMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    return new Date(year, month, 1).getDay();
  };

  const generateCalendarDays = () => {
    const totalDays = daysInMonth(currentMonth);
    const firstDay = firstDayOfMonth(currentMonth);
    const days = [];

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      days.push(
        <div
          key={`empty-${i}`}
          className="h-24 border border-gray-200 bg-gray-50"
        ></div>
      );
    }

    // Add cells for each day of the month
    for (let day = 1; day <= totalDays; day++) {
      const date = new Date(
        currentMonth.getFullYear(),
        currentMonth.getMonth(),
        day
      );
      const isToday = date.toDateString() === new Date().toDateString();
      const isSelected = date.toDateString() === selectedDate.toDateString();

      // Sample appointments - in a real app, this would come from your data
      const dayAppointments = [
        { id: 1, time: "09:00", patient: "John Doe" },
        { id: 2, time: "14:30", patient: "Jane Smith" },
      ].filter((_, i) => day % (i + 2) === 0); // Just for demo purposes

      days.push(
        <div
          key={`day-${day}`}
          className={`h-24 border border-gray-200 p-1 overflow-y-auto ${
            isSelected ? "bg-blue-50" : "hover:bg-gray-50"
          } ${isToday ? "border-blue-300 border-2" : ""}`}
          onClick={() => setSelectedDate(date)}
        >
          <div
            className={`flex justify-center items-center w-6 h-6 mx-auto rounded-full ${
              isToday ? "bg-blue-500 text-white" : ""
            }`}
          >
            {day}
          </div>
          {dayAppointments.map((appt) => (
            <div
              key={appt.id}
              className="text-xs p-1 mb-1 bg-blue-100 rounded truncate"
            >
              <div className="flex items-center">
                <FiClock className="mr-1" size={10} />
                <span className="font-medium">{appt.time}</span>
              </div>
              <div className="flex items-center truncate">
                <FiUser className="mr-1" size={10} />
                <span>{appt.patient}</span>
              </div>
            </div>
          ))}
        </div>
      );
    }

    return days;
  };

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const navigateMonth = (direction) => {
    const newMonth = new Date(currentMonth);
    newMonth.setMonth(
      currentMonth.getMonth() + (direction === "prev" ? -1 : 1)
    );
    setCurrentMonth(newMonth);
  };
  return (
    <div>
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-6 border-b">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold text-gray-900">
                Calendar View
              </h2>
              <p className="text-gray-600">
                {monthNames[currentMonth.getMonth()]}{" "}
                {currentMonth.getFullYear()}
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <Button
                onClick={() => navigateMonth("prev")}
                className="p-2 border rounded-md hover:bg-gray-50"
              >
                <FiChevronLeft />
              </Button>
              <Button
                onClick={() => setCurrentMonth(new Date())}
                className="px-4 py-2 border rounded-md hover:bg-gray-50"
              >
                Today
              </Button>
              <Button
                onClick={() => navigateMonth("next")}
                className="p-2 border rounded-md hover:bg-gray-50"
              >
                <FiChevronRight />
              </Button>
            </div>
          </div>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-7 gap-0">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
              <div
                key={day}
                className="text-center font-medium py-2 border-b border-gray-200"
              >
                {day}
              </div>
            ))}
            {generateCalendarDays()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calender;
