import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

const Notes = ({formData,handleInputChange}) => {
  return (
    <>
      <div className="md:col-span-2 space-y-2">
        <Label htmlFor="notes">Notes</Label>
        <Input
          id="notes"
          name="notes"
          value={formData.notes}
          onChange={handleInputChange}
          placeholder="Additional notes"
        />
      </div>
    </>
  );
};

export default Notes;
