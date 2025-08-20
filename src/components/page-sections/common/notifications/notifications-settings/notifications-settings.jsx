
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";


const NotificationSettings = () => {
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Notification Preferences</CardTitle>
          <CardDescription>
            Customize how you receive notifications
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <h4 className="font-medium">Notification Types</h4>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="appointment-notifications">
                    Appointment Reminders
                  </Label>
                  <p className="text-sm text-gray-500">
                    Receive reminders for upcoming appointments
                  </p>
                </div>
                <Switch id="appointment-notifications" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="prescription-notifications">
                    Prescription Updates
                  </Label>
                  <p className="text-sm text-gray-500">
                    Notify when new prescriptions are available
                  </p>
                </div>
                <Switch id="prescription-notifications" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="test-notifications">Test Results</Label>
                  <p className="text-sm text-gray-500">
                    Notify when test results are available
                  </p>
                </div>
                <Switch id="test-notifications" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="billing-notifications">Billing Alerts</Label>
                  <p className="text-sm text-gray-500">
                    Notify about payments and invoices
                  </p>
                </div>
                <Switch id="billing-notifications" defaultChecked />
              </div>
            </div>
          </div>

          <Separator className="my-4" />

          <div className="space-y-4">
            <h4 className="font-medium">Notification Channels</h4>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="email-notifications">Email</Label>
                  <p className="text-sm text-gray-500">
                    Receive notifications via email
                  </p>
                </div>
                <Switch id="email-notifications" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="push-notifications">Push Notifications</Label>
                  <p className="text-sm text-gray-500">
                    Receive push notifications on your device
                  </p>
                </div>
                <Switch id="push-notifications" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="sms-notifications">SMS</Label>
                  <p className="text-sm text-gray-500">
                    Receive text message notifications
                  </p>
                </div>
                <Switch id="sms-notifications" />
              </div>
            </div>
          </div>

          <Separator className="my-4" />

          <div className="flex justify-end">
            <Button className="bg-primary-600 hover:bg-primary-700 text-white">Save Preferences</Button>
          </div>
        </CardContent>
      </Card>
    </>
  )
}

export default NotificationSettings