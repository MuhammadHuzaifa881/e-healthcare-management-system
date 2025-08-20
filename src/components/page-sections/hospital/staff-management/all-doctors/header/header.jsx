import { Button } from "@/components/ui/button";
import React from "react";
import { FaPlus, FaUserMd } from "react-icons/fa";

const AllDoctorHeader = ({setCurrentDoctor,setIsDialogOpen}) => {
  return (
    <>
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold flex items-center text-gray-800">
          <FaUserMd className="mr-3 text-blue-600" /> Doctors Management
        </h2>
        <Button
          onClick={() => {
            setCurrentDoctor(null);
            setIsDialogOpen(true);
          }}
          className="bg-primary-600 hover:bg-primary-700 text-white"
        >
          <FaPlus className="mr-2" /> Add New Doctor
        </Button>
      </div>
    </>
  );
};

export default AllDoctorHeader;
