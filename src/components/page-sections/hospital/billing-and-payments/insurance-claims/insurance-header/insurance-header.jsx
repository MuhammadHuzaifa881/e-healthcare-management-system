import { Button } from "@/components/ui/button";
import React from "react";
import { FiPlus } from "react-icons/fi";

const InsuranceHeader = ({ onNewClaimClick }) => {
  return (
    <>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Insurance Claims</h1>
        <Button className="flex items-center gap-2 cursor-pointer bg-primary-600 z-50 hover:bg-primary-700 text-white"
            onClick={onNewClaimClick}
        >
          <FiPlus className="h-4 w-4" />
          New Claim
        </Button>
      </div>
    </>
  );
};

export default InsuranceHeader;
