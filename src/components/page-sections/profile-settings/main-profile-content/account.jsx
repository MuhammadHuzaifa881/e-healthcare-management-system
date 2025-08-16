
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
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import {  TabsContent } from "@/components/ui/tabs";
const Account = () => {
  return (
    <>
             <TabsContent value="account">
                  <Card>
                    <CardHeader>
                      <CardTitle>Account Security</CardTitle>
                      <CardDescription>
                        Manage your password and account security settings.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="space-y-4">
                        <h4 className="font-medium">Change Password</h4>
                        <div className="space-y-4">
                          <div className="space-y-2">
                            <Label htmlFor="currentPassword">Current Password</Label>
                            <Input
                              id="currentPassword"
                              type="password"
                              placeholder="Enter current password"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="newPassword">New Password</Label>
                            <Input
                              id="newPassword"
                              type="password"
                              placeholder="Enter new password"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="confirmPassword">
                              Confirm New Password
                            </Label>
                            <Input
                              id="confirmPassword"
                              type="password"
                              placeholder="Confirm new password"
                            />
                          </div>
                        </div>
                      </div>
      
                      <Separator className="my-4" />
      
                      <div className="space-y-4">
                        <h4 className="font-medium">Two-Factor Authentication</h4>
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">SMS Authentication</p>
                            <p className="text-sm text-gray-500">
                              Receive a code via SMS
                            </p>
                          </div>
                          <Switch />
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">Authenticator App</p>
                            <p className="text-sm text-gray-500">
                              Use an authenticator app
                            </p>
                          </div>
                          <Switch />
                        </div>
                      </div>
      
                      <Separator className="my-4" />
      
                      <div className="flex justify-end">
                        <Button>Update Security Settings</Button>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
    </>
  )
}

export default Account