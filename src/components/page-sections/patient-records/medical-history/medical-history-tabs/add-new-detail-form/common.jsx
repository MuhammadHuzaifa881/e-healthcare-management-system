import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

const Common = ({ formData, handleInputChange, activeTab }) => {
  return (
    <>
      <div className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder={`Enter ${activeTab.slice(0, -1)} name`}
          required
        />
      </div>

      <div className="space-y-2 max-w-full">
        <Label htmlFor="date">Date</Label>
        <div className="relative">
          <Input
            id="date"
            name="date"
            type="date"
            className="w-full max-w-full pr-10"  // Extra padding for icon
            value={formData.date}
            onChange={handleInputChange}
            required
          />
          {/* This hides the default icon and replaces it with a custom positioned one */}
          <style jsx>{`
            input[type="date"]::-webkit-calendar-picker-indicator {
              position: absolute;
              right: 10px; /* Adjust position */
              padding: 0;
              margin: 0;
              opacity: 1;
              cursor: pointer;
            }
            input[type="date"] {
              appearance: none; /* Hide default styling (Firefox) */
            }
          `}</style>
        </div>
      </div>
    </>
  );
};

export default Common;