import { FaCalendarAlt, FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { MdAccessTime } from "react-icons/md";

const StatusCards = ({appointments}) => {
        // Filter appointments by status
  const confirmedAppointments = appointments.filter(app => app.status === 'confirmed');
  const pendingAppointments = appointments.filter(app => app.status === 'pending');
  const cancelledAppointments = appointments.filter(app => app.status === 'cancelled');

  
      // Stats for the day
        const stats = [
          { title: 'Total Appointments', value: appointments.length, icon: <FaCalendarAlt className="w-5 h-5" /> },
          { title: 'Confirmed', value: confirmedAppointments.length, icon: <FaCheckCircle className="w-5 h-5" /> },
          { title: 'Pending', value: pendingAppointments.length, icon: <MdAccessTime className="w-5 h-5" /> },
          { title: 'Cancelled', value: cancelledAppointments.length, icon: <FaTimesCircle className="w-5 h-5" /> }
        ];
  return (
    <>
      {/* Stats Cards */}
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
              <div className="p-2 rounded-full bg-blue-50 text-blue-600">
                {stat.icon}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default StatusCards;
