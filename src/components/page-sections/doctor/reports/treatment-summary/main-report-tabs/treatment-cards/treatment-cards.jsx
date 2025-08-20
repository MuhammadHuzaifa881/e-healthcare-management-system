import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress"
import { FiActivity, FiCheckCircle, FiHeart } from "react-icons/fi"

const TreatmentCard = ({ treatment }) => {
      // Get status badge
const getStatusBadge = (status) => {
  switch (status) {
    case "active":
      return <Badge className="bg-green-500">Active</Badge>;
    case "completed":
      return <Badge variant="secondary">Completed</Badge>;
    case "paused":
      return <Badge variant="outline">Paused</Badge>;
    case "cancelled":
      return <Badge variant="destructive">Cancelled</Badge>;
    default:
      return <Badge variant="outline">Unknown</Badge>;
  }
};
  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle>{treatment.planName}</CardTitle>
            <CardDescription>
              {treatment.startDate} to {treatment.endDate} •{" "}
              {treatment.physician}
            </CardDescription>
          </div>
          {getStatusBadge(treatment.status)}
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center gap-2">
          <Progress value={treatment.progress} className="h-2 flex-1" />
          <span className="text-sm font-medium">
            {treatment.progress}% Complete
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold text-sm mb-2">Medications</h4>
            <ul className="text-sm space-y-1">
              {treatment.medications.map((med, index) => (
                <li key={index} className="flex items-center">
                  <FiCheckCircle className="h-3 w-3 text-green-500 mr-2" />
                  {med}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-2">Interventions</h4>
            <ul className="text-sm space-y-1">
              {treatment.interventions.map((intervention, index) => (
                <li key={index} className="flex items-center">
                  <FiActivity className="h-3 w-3 text-blue-500 mr-2" />
                  {intervention}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-sm mb-2">Treatment Goals</h4>
          <ul className="text-sm space-y-1">
            {treatment.goals.map((goal, index) => (
              <li key={index} className="flex items-center">
                <FiHeart className="h-3 w-3 text-amber-500 mr-2" />
                {goal}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex justify-between items-center pt-2 border-t">
          <div className="text-sm text-muted-foreground">
            Last reviewed: {treatment.lastReview}
          </div>
          <Button variant="outline" size="sm">
            View Details
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
export default TreatmentCard;