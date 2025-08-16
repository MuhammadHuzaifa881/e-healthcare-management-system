import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import React from 'react'
import { FiFilter } from 'react-icons/fi'

const ActionFilter = ({timeRange,setDateRange,setTimeRange,setReportType,reportType,dateRange}) => {
  return (
    <>
           {/* Filters */}
           <div className="flex flex-col md:flex-row gap-4 mb-8">
             <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-4">
               <Select value={timeRange} onValueChange={setTimeRange} className='bg-white'>
                 <SelectTrigger>
                   <SelectValue placeholder="Select time range" />
                 </SelectTrigger>
                 <SelectContent>
                   <SelectItem value="day">Daily</SelectItem>
                   <SelectItem value="week">Weekly</SelectItem>
                   <SelectItem value="month">Monthly</SelectItem>
                   <SelectItem value="quarter">Quarterly</SelectItem>
                   <SelectItem value="year">Yearly</SelectItem>
                   <SelectItem value="custom">Custom Range</SelectItem>
                 </SelectContent>
               </Select>
     
               <Select value={reportType} onValueChange={setReportType} className='bg-white'>
                 <SelectTrigger>
                   <SelectValue placeholder="Select report type" />
                 </SelectTrigger>
                 <SelectContent>
                   <SelectItem value="revenue">Revenue</SelectItem>
                   <SelectItem value="expenses">Expenses</SelectItem>
                   <SelectItem value="profit">Profit</SelectItem>
                   <SelectItem value="receivables">Receivables</SelectItem>
                   <SelectItem value="payables">Payables</SelectItem>
                 </SelectContent>
               </Select>
     
               {timeRange === "custom" && (
                 <div className="flex items-center gap-2">
                   <Input className='bg-white'
                     type="date"
                     value={dateRange.start}
                     onChange={(e) =>
                       setDateRange({ ...dateRange, start: e.target.value })
                     }
                   />
                   <span>to</span>
                   <Input className='bg-white'
                     type="date"
                     value={dateRange.end}
                     onChange={(e) =>
                       setDateRange({ ...dateRange, end: e.target.value })
                     }
                   />
                 </div>
               )}
             </div>
             <Button variant="outline" className="flex items-center gap-2 h-10">
               <FiFilter className="h-4 w-4" />
               More Filters
             </Button>
           </div> 
    </>
  )
}

export default ActionFilter