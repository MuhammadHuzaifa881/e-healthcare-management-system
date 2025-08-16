import { CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";

const TableCardHead = ({ title, description }) => {
  return (
    <>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
    </>
  );
};

export default TableCardHead;
