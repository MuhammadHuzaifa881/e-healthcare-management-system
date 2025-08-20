import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { FiFilter } from "react-icons/fi"


const NotificationHeader = ({setFilterType}) => {

  const markAllAsRead = () => {
    setNotifications(
      notifications.map((notification) => ({ ...notification, read: true }))
    );
  };
  return (
    <>
       <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold">Notifications</h1>
          <p className="text-gray-500">
            Manage your alerts and notifications
          </p>
        </div>
        <div className="flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="flex items-center gap-2">
                <FiFilter className="h-4 w-4" />
                Filter
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={() => setFilterType("all")}>
                All Types
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setFilterType("appointment")}>
                Appointments
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setFilterType("prescription")}>
                Prescriptions
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setFilterType("test")}>
                Test Results
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setFilterType("billing")}>
                Billing
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button variant="outline" onClick={markAllAsRead}>
            Mark All as Read
          </Button>
        </div>
      </div>
    </>
  )
}

export default NotificationHeader