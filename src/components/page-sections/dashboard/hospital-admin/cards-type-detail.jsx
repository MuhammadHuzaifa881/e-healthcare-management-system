import MetricCard from '@/components/common/metric-cards'
import React from 'react'
import { FaBed, FaCalendarAlt, FaFlask, FaMoneyBillWave, FaUserInjured, FaUserNurse } from 'react-icons/fa'

const CardTypeDetail = () => {
  return (
 <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-6">
              <MetricCard
                icon={<FaUserInjured className="h-4 w-4 text-blue-500" />}
                value="1,248"
                label="Total Patients Today"
              />
              <MetricCard
                icon={<FaCalendarAlt className="h-4 w-4 text-green-500" />}
                value="86"
                label="Active Appointments"
              />
              <MetricCard
                icon={<FaBed className="h-4 w-4 text-purple-500" />}
                value="72%"
                label="Bed Occupancy"
              />
              <MetricCard
                icon={<FaMoneyBillWave className="h-4 w-4 text-yellow-500" />}
                value="$28,450"
                label="Revenue Today"
              />
              <MetricCard
                icon={<FaFlask className="h-4 w-4 text-red-500" />}
                value="23"
                label="Pending Tests"
              />
              <MetricCard
                icon={<FaUserNurse className="h-4 w-4 text-teal-500" />}
                value="42"
                label="Staff On Duty"
              />
            </div>
  )
}

export default CardTypeDetail