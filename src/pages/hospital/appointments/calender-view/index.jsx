import CalenderFormList from "@/components/page-sections/appointments/hospital/calender-view/calender-form-list/calender-form-list";
import Calender from "@/components/page-sections/appointments/hospital/calender-view/calender/calender";
import CalenderViewHeader from "@/components/page-sections/appointments/hospital/calender-view/header/header";
import { useState } from "react";


const CalendarView = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  // Generate days for the current month view

  return (
    <div className="container mx-auto px-4 py-8">
      <CalenderViewHeader />
      <Calender
        setCurrentMonth={setCurrentMonth}
        currentMonth={currentMonth}
        setSelectedDate={setSelectedDate}
        selectedDate={selectedDate}
      />

      <CalenderFormList selectedDate={selectedDate} />
    </div>
  );
};

export default CalendarView;
