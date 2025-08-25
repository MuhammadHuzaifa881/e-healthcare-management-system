import { Button } from "@/components/ui/button";
import { FiDownload, FiPlus, FiPrinter } from "react-icons/fi";

const TreatmentSummaryHeader = () => {
  return (
    <>
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Treatment Summary</h1>
          <p className="text-muted-foreground">
            View and manage patient treatment plans
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="flex items-center gap-2">
            <FiDownload /> Export
          </Button>
          <Button variant="outline" className="flex items-center gap-2">
            <FiPrinter /> Print
          </Button>
          {/* <Button className="flex items-center gap-2 bg-primary-600 text-white hover:bg-primary-700">
            <FiPlus /> New Plan
          </Button> */}
        </div>
      </div>
    </>
  );
};

export default TreatmentSummaryHeader;
