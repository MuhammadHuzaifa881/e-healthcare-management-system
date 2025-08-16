import { FiDownload } from "react-icons/fi";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const PatientStatisticDetail = ({patientStats}) => {
  return (
    <>
        <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle>Detailed Patient Statistics</CardTitle>
            <Button
              variant="outline"
              size="sm"
              className="flex items-center gap-2"
            >
              <FiDownload className="h-4 w-4" />
              Export
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Month</TableHead>
                <TableHead className="text-right">New Patients</TableHead>
                <TableHead className="text-right">Follow-ups</TableHead>
                <TableHead className="text-right">Admissions</TableHead>
                <TableHead className="text-right">Discharges</TableHead>
                <TableHead className="text-right">Avg. Stay (days)</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {patientStats.map((stat) => (
                <TableRow key={stat.month}>
                  <TableCell className="font-medium">{stat.month}</TableCell>
                  <TableCell className="text-right">
                    {stat.newPatients}
                  </TableCell>
                  <TableCell className="text-right">{stat.followUps}</TableCell>
                  <TableCell className="text-right">
                    {stat.admissions}
                  </TableCell>
                  <TableCell className="text-right">
                    {stat.discharges}
                  </TableCell>
                  <TableCell className="text-right">3.2</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card> 
    </>
  )
}

export default PatientStatisticDetail