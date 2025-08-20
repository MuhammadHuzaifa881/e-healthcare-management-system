import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FiCalendar, FiEdit, FiMail, FiPhone } from "react-icons/fi";

const QuickActions = () => {
  return (
    <>
      <Card>
        <CardHeader className="pb-3">
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-2 gap-3">
          <Button variant="outline" className="h-16 flex flex-col">
            <FiCalendar className="h-5 w-5 mb-1" />
            <span className="text-xs">Schedule</span>
          </Button>
          <Button variant="outline" className="h-16 flex flex-col">
            <FiEdit className="h-5 w-5 mb-1" />
            <span className="text-xs">Prescribe</span>
          </Button>
          <Button variant="outline" className="h-16 flex flex-col">
            <FiMail className="h-5 w-5 mb-1" />
            <span className="text-xs">Message</span>
          </Button>
          <Button variant="outline" className="h-16 flex flex-col">
            <FiPhone className="h-5 w-5 mb-1" />
            <span className="text-xs">Call</span>
          </Button>
        </CardContent>
      </Card>
    </>
  );
};

export default QuickActions;
