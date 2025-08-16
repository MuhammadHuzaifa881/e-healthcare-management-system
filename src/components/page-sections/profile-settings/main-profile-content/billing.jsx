import { FiCreditCard } from "react-icons/fi";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import {  TabsContent } from "@/components/ui/tabs";
const Billing = () => {
  return (
    <>
      <TabsContent value="billing">
        <Card>
          <CardHeader>
            <CardTitle>Billing Information</CardTitle>
            <CardDescription>
              Manage your payment methods and billing details.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <h4 className="font-medium">Payment Methods</h4>
              <Card className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-16 bg-gray-100 rounded-md flex items-center justify-center">
                      <FiCreditCard className="h-5 w-5 text-gray-500" />
                    </div>
                    <div>
                      <p className="font-medium">Visa ending in 4242</p>
                      <p className="text-sm text-gray-500">Expires 12/2025</p>
                    </div>
                  </div>
                  <Button variant="outline">Edit</Button>
                </div>
              </Card>
              <Button variant="outline" className="w-full">
                Add Payment Method
              </Button>
            </div>

            <Separator className="my-4" />

            <div className="space-y-4">
              <h4 className="font-medium">Billing Address</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="billingFirstName">First Name</Label>
                  <Input id="billingFirstName" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="billingLastName">Last Name</Label>
                  <Input id="billingLastName" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="billingAddress">Address</Label>
                <Input id="billingAddress" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="billingCity">City</Label>
                  <Input id="billingCity" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="billingState">State/Province</Label>
                  <Input id="billingState" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="billingZip">ZIP/Postal Code</Label>
                  <Input id="billingZip" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="billingCountry">Country</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select country" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="us">United States</SelectItem>
                    <SelectItem value="ca">Canada</SelectItem>
                    <SelectItem value="uk">United Kingdom</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <Separator className="my-4" />

            <div className="flex justify-end">
              <Button>Update Billing Information</Button>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </>
  );
};

export default Billing;
