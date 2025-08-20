import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FiMail, FiMessageSquare, FiPhone } from "react-icons/fi";

const ContactOption = () => {
  return (
    <>
      <Card className="lg:col-span-1">
        <CardHeader>
          <CardTitle>Contact Support</CardTitle>
          <CardDescription>Get in touch with our support team</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center gap-4 p-4 border rounded-lg cursor-pointer">
            <div className="bg-blue-100 p-3 rounded-full">
              <FiMessageSquare className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h3 className="font-medium">Live Chat</h3>
              <p className="text-sm text-gray-500">
                Available 24/7 for immediate assistance
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-4 border rounded-lg cursor-pointer">
            <div className="bg-green-100 p-3 rounded-full">
              <FiMail className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <h3 className="font-medium">Email Us</h3>
              <p className="text-sm text-gray-500">support@ehealthcare.com</p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-4 border rounded-lg cursor-pointer">
            <div className="bg-purple-100 p-3 rounded-full">
              <FiPhone className="h-6 w-6 text-purple-600" />
            </div>
            <div>
              <h3 className="font-medium">Call Us</h3>
              <p className="text-sm text-gray-500">
                (800) 555-HELP (Mon-Fri, 8am-8pm EST)
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default ContactOption;
