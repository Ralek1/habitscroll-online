
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "../context/AuthContext";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Toaster } from "@/components/ui/toaster";
import { Eye, EyeOff, AlertTriangle } from "lucide-react";
import HeaderNavigation from "../components/HeaderNavigation";
import SEO from "../components/SEO";
import { useLanguage } from "../context/LanguageContext";

// Form validation schema
const signupSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  confirmPassword: z.string().min(6, "Password must be at least 6 characters"),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
});

type SignupFormValues = z.infer<typeof signupSchema>;

const SignUp: React.FC = () => {
  const { translate } = useLanguage();
  const { signup } = useAuth();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  // Set up form with validation
  const form = useForm<SignupFormValues>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (data: SignupFormValues) => {
    setIsSubmitting(true);
    setError(null);
    
    try {
      await signup(data.email, data.password);
      navigate("/"); // Redirect to home page after successful signup
    } catch (error) {
      console.error("Signup error:", error);
      // Error handling is done in the auth context with toast notifications
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-retro-dark flex flex-col items-center justify-center p-4">
      <SEO 
        title={translate('page.signup.title') || "Sign Up"} 
        description={translate('page.signup.description') || "Create a new account"} 
        canonicalPath="/signup"
      />
      
      <div className="absolute top-4 right-4 z-10">
        <HeaderNavigation />
      </div>
      
      <div className="w-full max-w-md">
        <Card className="backdrop-blur-sm bg-gray-900/70 border-gray-800 text-gray-100">
          <CardHeader className="space-y-1">
            <div className="flex justify-center mb-4">
              <div className="inline-block bg-retro-purple-700 px-4 py-1 rounded mb-2">
                <div className="font-pixel text-retro-light text-xs">{translate('app.title') || "HabitScroll"}</div>
              </div>
            </div>
            <CardTitle className="text-2xl font-pixel text-center text-retro-purple-200">
              {translate('page.signup.title') || "Create an Account"}
            </CardTitle>
            <CardDescription className="text-gray-400 text-center">
              {translate('page.signup.subtitle') || "Enter your details to create a new account"}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {error && (
              <Alert variant="destructive" className="border-red-500/50 bg-red-900/20">
                <AlertTriangle className="h-4 w-4 text-red-400" />
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-300">Email</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="you@example.com" 
                          {...field}
                          className="bg-gray-800/70 border-gray-700 text-gray-200" 
                        />
                      </FormControl>
                      <FormMessage className="text-red-400" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-300">Password</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Input
                            type={showPassword ? "text" : "password"}
                            placeholder="••••••••"
                            {...field}
                            className="bg-gray-800/70 border-gray-700 text-gray-200 pr-10"
                          />
                          <button
                            type="button"
                            className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-400 hover:text-gray-300"
                            onClick={() => setShowPassword(!showPassword)}
                          >
                            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                          </button>
                        </div>
                      </FormControl>
                      <FormMessage className="text-red-400" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="confirmPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-300">Confirm Password</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Input
                            type={showConfirmPassword ? "text" : "password"}
                            placeholder="••••••••"
                            {...field}
                            className="bg-gray-800/70 border-gray-700 text-gray-200 pr-10"
                          />
                          <button
                            type="button"
                            className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-400 hover:text-gray-300"
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                          >
                            {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                          </button>
                        </div>
                      </FormControl>
                      <FormMessage className="text-red-400" />
                    </FormItem>
                  )}
                />
                <Button 
                  type="submit" 
                  className="w-full bg-retro-purple-700 hover:bg-retro-purple-600 text-white"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Creating account..." : "Sign Up"}
                </Button>
              </form>
            </Form>
          </CardContent>
          <CardFooter>
            <div className="text-center w-full text-sm text-gray-400">
              Already have an account?{" "}
              <Link to="/login" className="text-retro-purple-400 hover:text-retro-purple-300 hover:underline transition-colors">
                Login
              </Link>
            </div>
          </CardFooter>
        </Card>
      </div>
      <Toaster />
    </div>
  );
};

export default SignUp;
