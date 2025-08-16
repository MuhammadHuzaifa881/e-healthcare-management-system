import { useState } from "react";

import { LeftSidebar } from "@/components/page-sections/profile-settings/left-sidebar/left-sidebar";
import MainProfileContent from "@/components/page-sections/profile-settings/main-profile-content/main-profile-content";

const ProfileSettings = () => {
  const [activeTab, setActiveTab] = useState("profile");
  const [formData, setFormData] = useState({
    firstName: "Alex",
    lastName: "Johnson",
    email: "alex.johnson@example.com",
    phone: "+1 (555) 123-4567",
    dob: "1985-04-15",
    address: "123 Medical Drive, Boston, MA 02115",
    language: "en",
    notifications: true,
    newsletter: false,
  });

  return (
    <div className="mx-auto px-4 py-8 bg-blue-300  rounded-lg">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left Sidebar */}
        <LeftSidebar formData={formData} setActiveTab={setActiveTab} activeTab={activeTab} />
        {/* Main content */}
        <MainProfileContent setFormData={setFormData} activeTab={activeTab} formData={formData} />
      </div>
    </div>
  );
};

export default ProfileSettings;
