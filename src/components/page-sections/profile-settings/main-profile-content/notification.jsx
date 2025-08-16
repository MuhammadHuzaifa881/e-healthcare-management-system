import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { TabsContent } from "@/components/ui/tabs";
const Notification = ({ handleSwitchChange, formData }) => {
  return (
    <>
      <TabsContent value="notifications">
        <Card>
          <CardHeader>
            <CardTitle>Notification Preferences</CardTitle>
            <CardDescription>
              Customize how you receive notifications.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <h4 className="font-medium">Email Notifications</h4>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Appointment Reminders</p>
                  <p className="text-sm text-gray-500">
                    Receive reminders for upcoming appointments
                  </p>
                </div>
                <Switch
                  checked={formData.notifications}
                  onCheckedChange={(checked) =>
                    handleSwitchChange("notifications", checked)
                  }
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Newsletter</p>
                  <p className="text-sm text-gray-500">
                    Receive our monthly newsletter
                  </p>
                </div>
                <Switch
                  checked={formData.newsletter}
                  onCheckedChange={(checked) =>
                    handleSwitchChange("newsletter", checked)
                  }
                />
              </div>
            </div>

            <Separator className="my-4" />

            <div className="space-y-4">
              <h4 className="font-medium">Push Notifications</h4>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">New Messages</p>
                  <p className="text-sm text-gray-500">
                    Notify when you receive new messages
                  </p>
                </div>
                <Switch />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Test Results</p>
                  <p className="text-sm text-gray-500">
                    Notify when test results are available
                  </p>
                </div>
                <Switch />
              </div>
            </div>

            <Separator className="my-4" />

            <div className="flex justify-end">
              <Button>Save Preferences</Button>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </>
  );
};

export default Notification;
