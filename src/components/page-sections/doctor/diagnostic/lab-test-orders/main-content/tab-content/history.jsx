import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { TabsContent } from '@/components/ui/tabs'
import { testOrdersHistory } from '@/constants/doctor/diagnostic/lab-test-orders'
import { FiFileText, FiFilter, FiSearch } from 'react-icons/fi'

const HistoryTab = () => {
  return (
    <>
       <TabsContent value="history">
          <Card>
            <CardHeader>
              <CardTitle>Test Order History</CardTitle>
              <CardDescription>
                View past and current test orders
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4 mb-4">
                <div className="relative flex-1">
                  <FiSearch className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search test orders..."
                    className="pl-10"
                  />
                </div>
                <Button variant="outline" className="flex items-center gap-2">
                  <FiFilter /> Filter
                </Button>
              </div>

              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Order ID</TableHead>
                      <TableHead>Patient</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Tests</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Results</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {testOrdersHistory.map((order) => (
                      <TableRow key={order.id}>
                        <TableCell className="font-medium">
                          #L-{order.id.toString().padStart(4, "0")}
                        </TableCell>
                        <TableCell>{order.patient}</TableCell>
                        <TableCell>{order.date}</TableCell>
                        <TableCell>
                          <div className="max-w-xs">
                            {order.tests.join(", ")}
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge
                            variant={
                              order.status === "completed"
                                ? "default"
                                : order.status === "in-progress"
                                ? "secondary"
                                : "destructive"
                            }
                          >
                            {order.status}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Badge
                            variant={
                              order.results === "available"
                                ? "default"
                                : "outline"
                            }
                          >
                            {order.results}
                          </Badge>
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
  )
}

export default HistoryTab