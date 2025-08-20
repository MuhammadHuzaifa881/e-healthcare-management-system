import { Button } from "@/components/ui/button";
import { FiPrinter, FiSave } from "react-icons/fi";

const LabTestOrderHeader = () => {
  return (
    <>
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Diagnostic Lab Orders</h1>
          <p className="text-muted-foreground">
            Order laboratory tests for patients
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <FiPrinter className="mr-2" /> Print
          </Button>
          <Button className="bg-primary-600 hover:bg-primary-700 text-white">
            <FiSave className="mr-2" /> Save Draft
          </Button>
        </div>
      </div>
    </>
  );
};

export default LabTestOrderHeader;
