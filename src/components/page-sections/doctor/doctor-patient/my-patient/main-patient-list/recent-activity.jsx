import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FiActivity, FiCalendar, FiEdit } from "react-icons/fi"

const RecentActivity = () => {
  return (
    <>
        <Card>
            <CardHeader className="pb-3">
              <CardTitle>Recent Activity</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-2 rounded-full">
                  <FiActivity className="h-4 w-4 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm font-medium">Lab results reviewed</p>
                  <p className="text-xs text-muted-foreground">
                    Sarah Johnson - 2 hours ago
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-green-100 p-2 rounded-full">
                  <FiEdit className="h-4 w-4 text-green-600" />
                </div>
                <div>
                  <p className="text-sm font-medium">Prescription updated</p>
                  <p className="text-xs text-muted-foreground">
                    Michael Chen - Yesterday
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-amber-100 p-2 rounded-full">
                  <FiCalendar className="h-4 w-4 text-amber-600" />
                </div>
                <div>
                  <p className="text-sm font-medium">Appointment scheduled</p>
                  <p className="text-xs text-muted-foreground">
                    Emma Rodriguez - 2 days ago
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
    </>
  )
}

export default RecentActivity