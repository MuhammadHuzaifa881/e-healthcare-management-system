"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { toast } from 'react-toastify';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useNavigate } from "react-router-dom";

const formSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  password: z.string().min(4, {
    message: "Password must be at least 4 characters.",
  }),
});

const LoginForm = () => {
  const navigate=useNavigate();
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values) => {
    // Dummy authentication
    const validEmails = [
      "hospital@gmail.com",
      "patient@gmail.com",
      "doctor@gmail.com",
    ];
    const validPassword = "1234";

    if (
      validEmails.includes(values.email) &&
      values.password === validPassword
    ) {
      // Generate random token
      const randomToken =
        Math.random().toString(36).substring(2) +
        Math.random().toString(36).substring(2);

      // Store token and user info in localStorage
      localStorage.setItem("authToken", randomToken);
      localStorage.setItem("userEmail", values.email);

      // Determine user role based on email
      let role = "user";
      if (values.email.includes("hospital")) role = "hospital";
      if (values.email.includes("doctor")) role = "doctor";

      localStorage.setItem("userRole", role);

      toast.success("Login successful! Token stored in localStorage.");
      navigate('/')
    } else {
      toast.error("Invalid email or password");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-md shadow-lg rounded-2xl overflow-hidden border-0">
        <div className="bg-gradient-to-r from-indigo-600 to-blue-600 p-6 text-white">
          <CardHeader className="space-y-1 p-0">
            <CardTitle className="text-2xl font-bold">Welcome back</CardTitle>
            <CardDescription className="text-blue-100">
              Enter your email and password to sign in
            </CardDescription>
          </CardHeader>
        </div>

        <CardContent className="pt-6">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="your@email.com"
                        {...field}
                        className="focus-visible:ring-indigo-500"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex items-center justify-between">
                      <FormLabel>Password</FormLabel>
                      <a
                        href="#"
                        className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        Forgot password?
                      </a>
                    </div>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="••••••••"
                        {...field}
                        className="focus-visible:ring-indigo-500"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                className="w-full bg-indigo-600 hover:bg-indigo-700"
              >
                Sign in
              </Button>
            </form>
          </Form>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                Or continue with
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Button variant="outline" className="border-gray-300">
              <FaGithub className="mr-2 h-4 w-4" />
              GitHub
            </Button>
            <Button variant="outline" className="border-gray-300">
              <FaGoogle className="mr-2 h-4 w-4" />
              Google
            </Button>
          </div>
        </CardContent>

        <CardFooter className="flex justify-center text-sm">
          <span className="text-muted-foreground">Don't have an account? </span>
          <a
            href="#"
            className="ml-1 font-medium text-indigo-600 hover:text-indigo-500"
          >
            Sign up
          </a>
        </CardFooter>
      </Card>
    </div>
  );
};

export default LoginForm;
