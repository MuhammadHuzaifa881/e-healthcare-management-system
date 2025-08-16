
import { Tabs } from "@/components/ui/tabs";
import Profile from "./profile";
import Account from "./account";
import Notification from "./notification";
import Billing from "./billing";

const MainProfileContent = ({setFormData,activeTab,formData}) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSwitchChange = (name, checked) => {
    setFormData((prev) => ({ ...prev, [name]: checked }));
  };

  const handleSelectChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      {/* Main Content */}
      <div className="flex-1">
        <Tabs value={activeTab} className="w-full">
          {/* Profile Tab */}
          <Profile
          formData={formData}
              handleInputChange={handleInputChange}
          />
       

          {/* Account Tab */}
          <Account/>
   

          {/* Notifications Tab */}
          <Notification
            formData={formData}
            handleSwitchChange={handleSwitchChange}
            handleSelectChange={handleSelectChange}
          />

          {/* Billing Tab */}
        <Billing 
        
        />
        </Tabs>
      </div>
    </>
  );
};

export default MainProfileContent;
