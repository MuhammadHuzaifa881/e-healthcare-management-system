"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { FaGithub, FaGoogle, FaArrowRight } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { toast } from "react-toastify";
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
import { useState } from "react";

const formSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  password: z.string().min(4, {
    message: "Password must be at least 4 characters.",
  }),
});

const LoginForm = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [isSocialLoading, setIsSocialLoading] = useState(false);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleLogin = async (values) => {
    setIsLoading(true);
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      const validEmails = [
        "hospital@gmail.com",
        "patient@gmail.com",
        "doctor@gmail.com",
      ];
      const validPassword = "1234";

      if (!validEmails.includes(values.email) || values.password !== validPassword) {
        throw new Error("Invalid email or password");
      }

      // Generate random token
      const randomToken =
        Math.random().toString(36).substring(2) +
        Math.random().toString(36).substring(2);

      // Store token and user info
      localStorage.setItem("authToken", randomToken);
      localStorage.setItem("userEmail", values.email);

      // Determine user role
      let role = "user";
      if (values.email.includes("hospital")) role = "hospital";
      if (values.email.includes("doctor")) role = "doctor";

      localStorage.setItem("userRole", role);

      toast.success("Login successful! Redirecting...");
      setTimeout(() => navigate("/"), 1000);
    } catch (error) {
      toast.error(error.message || "Login failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSocialLogin = (provider) => {
    setIsSocialLoading(true);
    // Simulate social login delay
    setTimeout(() => {
      toast.info(`${provider} login is currently disabled for demo purposes`);
      setIsSocialLoading(false);
    }, 2000);
  };

  return (
    <div className="flex items-center justify-center rounded-xl bg-gradient-to-br from-blue-50 to-indigo-100 animate-fade-in">
      <Card className="w-full max-w-md border-0 shadow-xl overflow-hidden bg-white/10 backdrop-blur-lg rounded-2xl animate-zoom-in">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-6 text-white">
          <CardHeader className="space-y-1 p-0">
            <CardTitle className="text-3xl font-bold">Welcome Back</CardTitle>
            <CardDescription className="text-blue-100/90">
              Sign in to access your account
            </CardDescription>
          </CardHeader>
        </div>

        <CardContent className="pt-8 pb-6 px-6">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleLogin)} className="space-y-6">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="animate-fade-in-up delay-100">
                    <FormLabel className="text-gray-700">Email</FormLabel>
                    <FormControl>
                      <div className="relative group">
                        <Input
                          placeholder="your@email.com"
                          {...field}
                          disabled={isLoading}
                          className="pl-10 focus-visible:ring-blue-500 border-gray-300 h-11 rounded-lg transition-all duration-300 group-hover:shadow-sm group-hover:border-blue-400"
                        />
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400 transition-colors duration-300 group-hover:text-blue-500">
                          <svg
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            />
                          </svg>
                        </div>
                      </div>
                    </FormControl>
                    <FormMessage className="text-red-500 animate-shake-x" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem className="animate-fade-in-up delay-200">
                    <div className="flex items-center justify-between">
                      <FormLabel className="text-gray-700">Password</FormLabel>
                      <a
                        href="#"
                        className="text-sm font-medium text-blue-600 hover:text-blue-500 transition-colors duration-200"
                      >
                        Forgot password?
                      </a>
                    </div>
                    <FormControl>
                      <div className="relative group">
                        <Input
                          type="password"
                          placeholder="••••••••"
                          {...field}
                          disabled={isLoading}
                          className="pl-10 focus-visible:ring-blue-500 border-gray-300 h-11 rounded-lg transition-all duration-300 group-hover:shadow-sm group-hover:border-blue-400"
                        />
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400 transition-colors duration-300 group-hover:text-blue-500">
                          <svg
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                            />
                          </svg>
                        </div>
                      </div>
                    </FormControl>
                    <FormMessage className="text-red-500 animate-shake-x" />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 h-11 rounded-lg font-medium text-white shadow-md transition-all duration-300 hover:shadow-lg hover:scale-[1.01] active:scale-[0.99] animate-fade-in-up delay-300"
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                    Signing in...
                  </div>
                ) : (
                  <>
                    Sign In <FaArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </>
                )}
              </Button>
            </form>
          </Form>

          <div className="relative my-6 animate-fade-in-up delay-400">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-2 text-gray-500">
                Or continue with
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 animate-fade-in-up delay-500">
            <Button
              variant="outline"
              className="border-gray-300 hover:bg-gray-50 h-11 rounded-lg transition-all duration-300 hover:shadow-sm hover:-translate-y-0.5"
              onClick={() => handleSocialLogin("GitHub")}
              disabled={isSocialLoading}
            >
              {isSocialLoading ? (
                <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <FaGithub className="mr-2 h-5 w-5" />
              )}
              GitHub
            </Button>
            <Button
              variant="outline"
              className="border-gray-300 hover:bg-gray-50 h-11 rounded-lg transition-all duration-300 hover:shadow-sm hover:-translate-y-0.5"
              onClick={() => handleSocialLogin("Google")}
              disabled={isSocialLoading}
            >
              {isSocialLoading ? (
                <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <FaGoogle className="mr-2 h-5 w-5" />
              )}
              Google
            </Button>
          </div>
        </CardContent>

        {/* <CardFooter className="flex justify-center text-sm bg-gray-50/50 py-4 border-t border-gray-200 animate-fade-in-up delay-600">
          <span className="text-gray-600">Don't have an account? </span>
          <a
            href="#"
            className="ml-1 font-medium text-blue-600 hover:text-blue-700 transition-colors duration-200 hover:underline"
          >
            Sign up
          </a>
        </CardFooter> */}
      </Card>
    </div>
  );
};

export default LoginForm;