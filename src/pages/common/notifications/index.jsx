import { useState } from "react";

import { Separator } from "@/components/ui/separator";

import NotificationHeader from "@/components/page-sections/common/notifications/header/header";
import NotificationsTabs from "@/components/page-sections/common/notifications/notifications-tabs/notifications-tabs";
import NotificationSettings from "@/components/page-sections/common/notifications/notifications-settings/notifications-settings";

const Notification = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [filterType, setFilterType] = useState("all");
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: "appointment",
      title: "Upcoming Appointment",
      message: "You have an appointment with Dr. Smith tomorrow at 10:00 AM",
      time: "2 hours ago",
      read: false,
      archived: false,
    },
    {
      id: 2,
      type: "prescription",
      title: "New Prescription",
      message: "Dr. Johnson has prescribed new medication for you",
      time: "1 day ago",
      read: true,
      archived: false,
    },
    {
      id: 3,
      type: "test",
      title: "Test Results Available",
      message: "Your lab test results from 10/15/2023 are now available",
      time: "3 days ago",
      read: false,
      archived: false,
    },
    {
      id: 4,
      type: "billing",
      title: "Payment Received",
      message: "Your payment of $150.00 has been processed successfully",
      time: "1 week ago",
      read: true,
      archived: true,
    },
    {
      id: 5,
      type: "system",
      title: "System Maintenance",
      message: "Scheduled maintenance this Sunday from 2:00 AM to 4:00 AM",
      time: "2 weeks ago",
      read: true,
      archived: false,
    },
  ]);

  const filteredNotifications = notifications
    .filter((notification) => {
      if (activeTab === "all") return !notification.archived;
      if (activeTab === "unread")
        return !notification.read && !notification.archived;
      if (activeTab === "archived") return notification.archived;
      return true;
    })
    .filter((notification) => {
      if (filterType === "all") return true;
      return notification.type === filterType;
    });

  return (
    <div className=" mx-auto px-4 py-8 bg-blue-300 rounded-lg ">
      <NotificationHeader setFilterType={setFilterType} />

      <NotificationsTabs
        filteredNotifications={filteredNotifications}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        setNotifications={setNotifications}
        notifications={notifications}
      />

      <Separator className="my-8" />

      {/* notification settings */}
      <NotificationSettings />
    </div>
  );
};

export default Notification;
