import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { TabsContent } from '@/components/ui/tabs'
import { prescriptionHistory } from '@/constants/doctor/e-perscriptions/create-new/create-new'
import { FiEdit } from 'react-icons/fi'

const History = () => {
  return (
    <>
              <TabsContent value="history">
                <Card>
                  <CardHeader>
                    <CardTitle>Prescription History</CardTitle>
                    <CardDescription>
                      View past and current prescriptions
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="rounded-md border">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Patient</TableHead>
                            <TableHead>Date</TableHead>
                            <TableHead>Medications</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {prescriptionHistory.map((prescription) => (
                            <TableRow key={prescription.id}>
                              <TableCell className="font-medium">
                                {prescription.patient}
                              </TableCell>
                              <TableCell>{prescription.date}</TableCell>
                              <TableCell>
                                <div className="max-w-xs">
                                  {prescription.medications.join(", ")}
                                </div>
                              </TableCell>
                              <TableCell>
                                <Badge
                                  variant={
                                    prescription.status === "active"
                                      ? "default"
                                      : "secondary"
                                  }
                                >
                                  {prescription.status}
                                </Badge>
                              </TableCell>
                              <TableCell className="text-right">
                                <Button variant="ghost" size="sm">
                                  <FiEdit className="h-4 w-4" />
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
  )
}

export default History