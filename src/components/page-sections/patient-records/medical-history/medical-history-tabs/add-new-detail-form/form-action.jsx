import { Button } from "@/components/ui/button";
import React from "react";

const FormAction = ({setShowAddForm}) => {
  return (
    <>
      <div className="flex justify-end space-x-2 mt-6">
        <Button variant="outline" onClick={() => setShowAddForm(false)}>
          Cancel
        </Button>
        <Button type="submit">Save</Button>
      </div>
    </>
  );
};

export default FormAction;
