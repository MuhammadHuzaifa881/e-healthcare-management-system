import { Button } from '@/components/ui/button'
import React from 'react'
import { FiCalendar, FiPlus } from 'react-icons/fi'

const ScheduleHeader = ({setDate,setShowAddForm,date}) => {
  return (
    <>
         <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-gray-900">
          Appointment Schedule
        </h1>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <FiCalendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="pl-10 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <Button
            onClick={() => setShowAddForm(true)}
            className="flex items-center px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-md  transition-colors"
          >
            <FiPlus className="mr-2" /> New Appointment
          </Button>
        </div>
      </div>
    </>
  )
}

export default ScheduleHeader