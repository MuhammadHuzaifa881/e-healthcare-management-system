// import { Button } from "@/components/ui/button";
// import { FiPlus } from "react-icons/fi";

const CalenderViewHeader = () => {
  return (
    <>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-gray-900">
          Appointment Calendar
        </h1>
        {/* <Button className="flex items-center px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-md transition-colors">
          <FiPlus className="mr-2" /> New Appointment
        </Button> */}
      </div>
    </>
  );
};

export default CalenderViewHeader;
