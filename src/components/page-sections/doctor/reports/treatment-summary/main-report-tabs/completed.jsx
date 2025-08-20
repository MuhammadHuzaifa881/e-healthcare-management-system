import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { treatments } from "@/constants/doctor/reports/treatment-summary";
import React from "react";

const Completed = () => {
  return (
    <>
      <Card>
        <CardHeader className="pb-2">
          <CardDescription>Completed</CardDescription>
          <CardTitle className="text-4xl">
            {treatments.filter((t) => t.status === "completed").length}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-xs text-muted-foreground">
            Successfully completed
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default Completed;
