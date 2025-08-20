import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FiArchive, FiBell, FiCheck, FiTrash2 } from "react-icons/fi";
const NotificationsTabs = ({
  activeTab,
  setActiveTab,
  filteredNotifications,
  setNotifications,
  notifications

}) => {
  const archiveNotification = (id) => {
    setNotifications(
      notifications.map((notification) =>
        notification.id === id
          ? { ...notification, archived: !notification.archived }
          : notification
      )
    );
  };

  const deleteNotification = (id) => {
    setNotifications(
      notifications.filter((notification) => notification.id !== id)
    );
  };
    const markAsRead = (id) => {
    setNotifications(
      notifications.map((notification) =>
        notification.id === id ? { ...notification, read: true } : notification
      )
    );
  };

  return (
    <>
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-3 mb-6">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="unread">Unread</TabsTrigger>
          <TabsTrigger value="archived">Archived</TabsTrigger>
        </TabsList>

        <div className="space-y-4">
          {filteredNotifications.length === 0 ? (
            <Card>
              <CardContent className="py-12 text-center">
                <FiBell className="mx-auto h-12 w-12 text-gray-400" />
                <h3 className="mt-4 text-lg font-medium">
                  No notifications found
                </h3>
                <p className="mt-2 text-gray-500">
                  {activeTab === "all"
                    ? "You're all caught up!"
                    : activeTab === "unread"
                    ? "No unread notifications"
                    : "No archived notifications"}
                </p>
              </CardContent>
            </Card>
          ) : (
            filteredNotifications.map((notification) => (
              <Card
                key={notification.id}
                className={`${
                  !notification.read ? "border-l-4 border-blue-500" : ""
                }`}
              >
                <CardHeader className="flex flex-row items-start justify-between space-y-0 p-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <CardTitle className="text-lg">
                        {notification.title}
                      </CardTitle>
                      <Badge variant="outline" className="capitalize">
                        {notification.type}
                      </Badge>
                    </div>
                    <CardDescription>{notification.message}</CardDescription>
                    <div className="text-sm text-gray-500">
                      {notification.time}
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    {!notification.read && (
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => markAsRead(notification.id)}
                      >
                        <FiCheck className="h-4 w-4" />
                      </Button>
                    )}
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => archiveNotification(notification.id)}
                    >
                      <FiArchive className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => deleteNotification(notification.id)}
                    >
                      <FiTrash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </CardHeader>
              </Card>
            ))
          )}
        </div>
      </Tabs>
    </>
  );
};

export default NotificationsTabs;
