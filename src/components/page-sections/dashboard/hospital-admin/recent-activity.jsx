import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { activityData } from '@/constants/dashboard/hospital-dashboard/hospital-dashboard'
import React from 'react'
import { FaExclamationTriangle, FaFileInvoiceDollar, FaPlus, FaUserInjured } from 'react-icons/fa'

const RecentActivity = () => {
  return (
  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="grid gap-4">
                  <Button variant="outline" className="justify-start gap-2">
                    <FaPlus className="h-4 w-4" />
                    New Appointment
                  </Button>
                  <Button variant="outline" className="justify-start gap-2">
                    <FaUserInjured className="h-4 w-4" />
                    Add Patient
                  </Button>
                  <Button variant="outline" className="justify-start gap-2">
                    <FaFileInvoiceDollar className="h-4 w-4" />
                    Generate Report
                  </Button>
                  <Button variant="outline" className="justify-start gap-2">
                    <FaExclamationTriangle className="h-4 w-4" />
                    View Alerts
                  </Button>
                </CardContent>
              </Card>

              <Card className="lg:col-span-5">
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {activityData.map((activity, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="flex items-center justify-center rounded-full bg-muted p-2">
                        {activity.icon}
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium leading-none">
                          {activity.text}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {activity.time}
                        </p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
  )
}

export default RecentActivity