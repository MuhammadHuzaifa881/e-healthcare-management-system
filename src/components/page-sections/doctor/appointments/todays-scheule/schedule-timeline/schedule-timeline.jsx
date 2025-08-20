import { FaCheckCircle, FaClock, FaEllipsisV, FaNotesMedical, FaStethoscope, FaTimesCircle } from "react-icons/fa"
import { MdAccessTime } from "react-icons/md"

const ScheduleTimeline = ({appointments}) => {
  return (
    <>
        <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-6">
             <div className="p-4 border-b border-gray-200">
               <h2 className="text-lg font-semibold text-gray-800">
                 Appointment Timeline
               </h2>
             </div>
     
             <div className="divide-y divide-gray-200">
               {appointments.map((appointment) => (
                 <div
                   key={appointment.id}
                   className="p-4 hover:bg-gray-50 transition"
                 >
                   <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                     {/* Appointment Info */}
                     <div className="flex items-start space-x-4">
                       <div
                         className={`p-3 rounded-lg ${
                           appointment.status === "confirmed"
                             ? "bg-green-50 text-green-600"
                             : appointment.status === "pending"
                             ? "bg-yellow-50 text-yellow-600"
                             : "bg-red-50 text-red-600"
                         }`}
                       >
                         {appointment.status === "confirmed" ? (
                           <FaCheckCircle className="w-5 h-5" />
                         ) : appointment.status === "pending" ? (
                           <MdAccessTime className="w-5 h-5" />
                         ) : (
                           <FaTimesCircle className="w-5 h-5" />
                         )}
                       </div>
                       <div>
                         <h3 className="font-medium text-gray-900">
                           {appointment.patient}
                         </h3>
                         <div className="flex flex-wrap items-center mt-1 text-sm text-gray-500 space-x-4">
                           <span className="flex items-center">
                             <FaClock className="mr-1" /> {appointment.time}
                           </span>
                           <span className="flex items-center">
                             <FaStethoscope className="mr-1" /> {appointment.type}
                           </span>
                           <span
                             className="px-2 py-0.5 rounded-full text-xs font-medium ${
                             appointment.condition === 'Hypertension' ? 'bg-purple-100 text-purple-800' :
                             appointment.condition === 'Diabetes' ? 'bg-blue-100 text-blue-800' :
                             appointment.condition === 'Asthma' ? 'bg-green-100 text-green-800' :
                             appointment.condition === 'Migraine' ? 'bg-yellow-100 text-yellow-800' :
                             'bg-gray-100 text-gray-800'
                           }"
                           >
                             {appointment.condition}
                           </span>
                         </div>
                         {appointment.notes && (
                           <p className="mt-2 text-sm text-gray-600 flex items-start">
                             <FaNotesMedical className="mr-2 mt-0.5 flex-shrink-0" />{" "}
                             {appointment.notes}
                           </p>
                         )}
                       </div>
                     </div>
     
                     {/* Actions */}
                     <div className="mt-3 sm:mt-0 flex items-center space-x-3 sm:space-x-2">
                       <button className="px-3 py-1 text-sm bg-blue-50 text-blue-600 rounded-md hover:bg-blue-100 transition">
                         Start
                       </button>
                       <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition">
                         <FaEllipsisV />
                       </button>
                     </div>
                   </div>
                 </div>
               ))}
             </div>
           </div> 
    </>
  )
}

export default ScheduleTimeline