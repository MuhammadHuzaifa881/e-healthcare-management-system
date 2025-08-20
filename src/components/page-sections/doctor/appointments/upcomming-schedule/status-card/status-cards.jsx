import { FaCalendarAlt, FaVideo } from "react-icons/fa";
import { MdAccessTime, MdPeople } from "react-icons/md";

const UpcommingScheduleStatusCards = ({upcomingAppointments,weekDates}) => {
  const stats = [
    {
      title: "Total Upcoming",
      value: upcomingAppointments.length,
      icon: <FaCalendarAlt className="w-5 h-5" />,
      color: "blue",
    },
    {
      title: "This Week",
      value: upcomingAppointments.filter((app) => weekDates.includes(app.date))
        .length,
      icon: <MdPeople className="w-5 h-5" />,
      color: "green",
    },
    {
      title: "Telemedicine",
      value: upcomingAppointments.filter(
        (app) => app.location === "Telemedicine"
      ).length,
      icon: <FaVideo className="w-5 h-5" />,
      color: "purple",
    },
    {
      title: "High Priority",
      value: upcomingAppointments.filter((app) => app.priority === "high")
        .length,
      icon: <MdAccessTime className="w-5 h-5" />,
      color: "red",
    },
  ];
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm font-medium text-gray-500">
                  {stat.title}
                </p>
                <p className="text-2xl font-semibold">{stat.value}</p>
              </div>
              <div
                className={`p-2 rounded-full ${
                  stat.color === "blue"
                    ? "bg-blue-50 text-blue-600"
                    : stat.color === "green"
                    ? "bg-green-50 text-green-600"
                    : stat.color === "purple"
                    ? "bg-purple-50 text-purple-600"
                    : "bg-red-50 text-red-600"
                }`}
              >
                {stat.icon}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default UpcommingScheduleStatusCards;
