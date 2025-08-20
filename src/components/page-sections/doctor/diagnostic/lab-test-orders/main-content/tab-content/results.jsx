import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TabsContent } from "@/components/ui/tabs";
import { testOrdersHistory } from "@/constants/doctor/diagnostic/lab-test-orders";
import React from "react";
import { FiDownload, FiFileText, FiFilter, FiSearch } from "react-icons/fi";

const Results = () => {
  return (
    <>
      <TabsContent value="results">
        <Card>
          <CardHeader>
            <CardTitle>Test Results</CardTitle>
            <CardDescription>
              View and manage laboratory test results
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-4 mb-4">
              <div className="relative flex-1">
                <FiSearch className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search test results..." className="pl-10" />
              </div>
              <Button variant="outline" className="flex items-center gap-2">
                <FiFilter /> Filter
              </Button>
              <Button variant="outline" className="flex items-center gap-2">
                <FiDownload /> Export
              </Button>
            </div>

            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Patient</TableHead>
                    <TableHead>Test</TableHead>
                    <TableHead>Order Date</TableHead>
                    <TableHead>Result Date</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {testOrdersHistory
                    .filter((order) => order.results === "available")
                    .map((order) => (
                      <TableRow key={order.id}>
                        <TableCell className="font-medium">
                          {order.patient}
                        </TableCell>
                        <TableCell>{order.tests[0]}</TableCell>
                        <TableCell>{order.date}</TableCell>
                        <TableCell>{order.date}</TableCell>
                        <TableCell>
                          <Badge variant="default">Completed</Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="sm">
                            <FiFileText className="h-4 w-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </>
  );
};

export default Results;
