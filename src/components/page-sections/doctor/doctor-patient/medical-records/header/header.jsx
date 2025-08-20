import { Button } from "@/components/ui/button";
import React from "react";

const DoctorPatientMedicalRecord = () => {
  return (
    <>
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Medical Records</h1>
        <Button>New Patient</Button>
      </div>
    </>
  );
};

export default DoctorPatientMedicalRecord;
