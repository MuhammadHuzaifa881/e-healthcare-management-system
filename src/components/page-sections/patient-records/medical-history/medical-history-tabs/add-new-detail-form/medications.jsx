import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

const Medications = ({formData,handleInputChange}) => {
  return (
    <>
      <div className="space-y-2">
        <Label htmlFor="dosage">Dosage</Label>
        <Input
          id="dosage"
          name="dosage"
          value={formData.dosage}
          onChange={handleInputChange}
          placeholder="Enter dosage"
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="frequency">Frequency</Label>
        <Input
          id="frequency"
          name="frequency"
          value={formData.frequency}
          onChange={handleInputChange}
          placeholder="Enter frequency"
          required
        />
      </div>
    </>
  );
};

export default Medications;
