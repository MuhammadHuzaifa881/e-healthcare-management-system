import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import React, { useState, useRef } from "react";
import { FiBell, FiCreditCard, FiLock, FiUser, FiCamera, FiCheck } from "react-icons/fi";
import { toast } from "react-toastify";

export const LeftSidebar = ({ formData, setActiveTab, activeTab }) => {
  const [avatarSrc, setAvatarSrc] = useState("/avatars/doctor-profile.jpg");
  const [isEditingAvatar, setIsEditingAvatar] = useState(false);
  const fileInputRef = useRef(null);

  const handleAvatarClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (!file.type.startsWith("image/")) {
        toast.error("Please upload an image file (JPEG, PNG, etc.)");
        return;
      }

      const reader = new FileReader();
      reader.onload = (event) => {
        setAvatarSrc(event.target.result);
        setIsEditingAvatar(false);
        toast.success("Profile picture updated successfully!");
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="w-full md:w-80 space-y-6">
      {/* Profile Card */}
      <Card className="p-6 shadow-sm hover:shadow-md transition-shadow">
        <div className="flex flex-col items-center space-y-4">
          <div className="relative group">
            <Avatar className="h-36 w-36 border-4 border-white shadow-lg">
              <AvatarImage 
                src={avatarSrc} 
                alt={`${formData.firstName} ${formData.lastName}`}
                className="object-cover"
              />
              <AvatarFallback className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-3xl font-medium">
                {formData.firstName?.[0]}{formData.lastName?.[0]}
              </AvatarFallback>
            </Avatar>
            <Button
              variant="ghost"
              size="icon"
              className="absolute bottom-2 right-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 h-10 w-10 transition-all shadow-md"
              onClick={handleAvatarClick}
            >
              <FiCamera className="h-5 w-5" />
            </Button>
            <Input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              accept="image/*"
              className="hidden"
            />
          </div>
          
          <div className="text-center space-y-2">
            <h3 className="text-2xl font-bold text-gray-800">
              {formData.firstName} {formData.lastName}
            </h3>
            <p className="text-sm text-gray-500 bg-blue-50 px-3 py-1 rounded-full inline-block">
              Cardiologist
            </p>
          </div>
          
          <Button 
            variant="outline" 
            className="w-full gap-2 border-blue-500 text-blue-600 hover:bg-blue-50 hover:text-blue-700"
            onClick={handleAvatarClick}
          >
            <FiCamera className="h-4 w-4" />
            Update Profile Photo
          </Button>
        </div>
      </Card>

      {/* Navigation Card */}
      <Card className='bg-gradient-to-b from-blue-600 to-blue-700 border-none shadow-lg'>
        <CardHeader className="pb-4">
          <CardTitle className="text-xl text-white font-semibold">Profile Settings</CardTitle>
        </CardHeader>
        <CardContent className="px-2 pb-4">
          <Tabs value={activeTab} orientation="vertical" className="w-full">
            <TabsList className="flex flex-col h-auto p-1 gap-1 bg-transparent">
              <TabsTrigger
                value="profile"
                className="w-full justify-start h-14 px-3 rounded-lg text-white hover:bg-blue-500/30 data-[state=active]:bg-white data-[state=active]:text-blue-700 data-[state=active]:shadow-sm transition-colors"
                onClick={() => setActiveTab("profile")}
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-white/20 border-2 border-primary-400 data-[state=active]:border-primary-950 data-[state=active]:bg-blue-100">
                    <FiUser className="h-4 w-4" />
                  </div>
                  <div className="text-left">
                    <p className="font-medium">Personal Info</p>
                    <p className="text-xs  data-[state=active]:text-blue-600/80">Update your details</p>
                  </div>
                </div>
              </TabsTrigger>
              
              <TabsTrigger
                value="account"
                className="w-full justify-start h-14 px-3 rounded-lg text-white hover:bg-blue-500/30 data-[state=active]:bg-white data-[state=active]:text-blue-700 data-[state=active]:shadow-sm transition-colors"
                onClick={() => setActiveTab("account")}
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-white/20 border-2 border-primary-400 data-[state=active]:border-primary-950 data-[state=active]:bg-blue-100">
                    <FiLock className="h-4 w-4" />
                  </div>
                  <div className="text-left">
                    <p className="font-medium">Security</p>
                    <p className="text-xs  data-[state=active]:text-blue-600/80">Password & privacy</p>
                  </div>
                </div>
              </TabsTrigger>
              
              <TabsTrigger
                value="notifications"
                className="w-full justify-start h-14 px-3 rounded-lg text-white hover:bg-blue-500/30 data-[state=active]:bg-white data-[state=active]:text-blue-700 data-[state=active]:shadow-sm transition-colors"
                onClick={() => setActiveTab("notifications")}
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-white/20 border-2 border-primary-400 data-[state=active]:border-primary-950 data-[state=active]:bg-blue-100">
                    <FiBell className="h-4 w-4" />
                  </div>
                  <div className="text-left">
                    <p className="font-medium">Notifications</p>
                    <p className="text-xs data-[state=active]:text-blue-600/80">Alerts settings</p>
                  </div>
                </div>
              </TabsTrigger>
              
              <TabsTrigger
                value="billing"
                className="w-full justify-start h-14 px-3 rounded-lg text-white hover:bg-blue-500/30 data-[state=active]:bg-white data-[state=active]:text-blue-700 data-[state=active]:shadow-sm transition-colors"
                onClick={() => setActiveTab("billing")}
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-white/20 border-2 border-primary-400 data-[state=active]:border-primary-950 data-[state=active]:bg-blue-100">
                    <FiCreditCard className="h-4 w-4" />
                  </div>
                  <div className="text-left">
                    <p className="font-medium">Billing</p>
                    <p className="text-xs data-[state=active]:text-blue-600/80">Payments & plans</p>
                  </div>
                </div>
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};