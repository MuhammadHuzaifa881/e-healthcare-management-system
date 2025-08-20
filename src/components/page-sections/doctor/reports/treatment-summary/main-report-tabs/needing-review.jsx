import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";

const NeedingReview = () => {
  return (
    <>
      <Card>
        <CardHeader className="pb-2">
          <CardDescription>Needing Review</CardDescription>
          <CardTitle className="text-4xl">3</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-xs text-muted-foreground">
            Due for assessment
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default NeedingReview;
