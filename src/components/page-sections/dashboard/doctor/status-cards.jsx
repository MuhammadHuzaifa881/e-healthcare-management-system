import { FaBell, FaCalendarAlt, FaClipboardList } from "react-icons/fa";
import { MdPeople } from "react-icons/md";

const StatusCards = () => {
  const stats = [
    {
      title: "Total Patients",
      value: "1,248",
      icon: <MdPeople className="w-6 h-6" />,
      change: "+12%",
    },
    {
      title: "Today Appointments",
      value: "18",
      icon: <FaCalendarAlt className="w-6 h-6" />,
      change: "+2",
    },
    {
      title: "Pending Tests",
      value: "7",
      icon: <FaClipboardList className="w-6 h-6" />,
      change: "-3",
    },
    {
      title: "Alerts",
      value: "3",
      icon: <FaBell className="w-6 h-6" />,
      change: "+1",
    },
  ];
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">
                  {stat.title}
                </p>
                <p className="text-2xl font-semibold mt-1">{stat.value}</p>
              </div>
              <div className="p-3 rounded-lg bg-blue-50 text-blue-600">
                {stat.icon}
              </div>
            </div>
            <p className="text-sm mt-4 text-green-600">
              {stat.change} from last week
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default StatusCards;
