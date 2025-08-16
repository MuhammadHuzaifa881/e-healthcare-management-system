import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import React from "react";

const ShowSeverity = ({formData,setFormData}) => {
  return (
    <>
      <div className="space-y-2">
        <Label htmlFor="severity">Severity</Label>
        <Select
          name="severity"
          value={formData.severity}
          onValueChange={(value) =>
            setFormData({ ...formData, severity: value })
          }
          required
        >
          <SelectTrigger>
            <SelectValue placeholder="Select severity" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Mild">Mild</SelectItem>
            <SelectItem value="Moderate">Moderate</SelectItem>
            <SelectItem value="Severe">Severe</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </>
  );
};

export default ShowSeverity;
