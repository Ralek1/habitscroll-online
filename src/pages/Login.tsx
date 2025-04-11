
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
const loginSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type LoginFormValues = z.infer<typeof loginSchema>;

const Login: React.FC = () => {
  const { translate } = useLanguage();
  const { login, resetPassword } = useAuth();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [resetEmailSent, setResetEmailSent] = useState(false);
  
  // Set up form with validation
  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: LoginFormValues) => {
    setIsSubmitting(true);
    setError(null);
    
    try {
      await login(data.email, data.password);
      navigate("/"); // Redirect to home page after successful login
    } catch (error) {
      console.error("Login error:", error);
      // Error handling is done in the auth context with toast notifications
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResetPassword = async () => {
    const email = form.getValues("email");
    
    if (!email) {
      setError("Please enter your email address to reset your password.");
      return;
    }
    
    try {
      await resetPassword(email);
      setResetEmailSent(true);
    } catch (error) {
      // Error handling done in auth context
    }
  };

  return (
    <div className="min-h-screen bg-retro-dark flex flex-col items-center justify-center p-4">
      <SEO 
        title={translate('page.login.title') || "Login"} 
        description={translate('page.login.description') || "Login to access your account"} 
        canonicalPath="/login"
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
            <CardTitle className="text-2xl font-pixel text-center text-retro-purple-200">{translate('page.login.title') || "Login"}</CardTitle>
            <CardDescription className="text-gray-400 text-center">
              {translate('page.login.subtitle') || "Enter your credentials to access your account"}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {error && (
              <Alert variant="destructive" className="border-red-500/50 bg-red-900/20">
                <AlertTriangle className="h-4 w-4 text-red-400" />
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
            
            {resetEmailSent && (
              <Alert className="border-green-500/50 bg-green-900/20">
                <AlertDescription className="text-green-400">
                  Password reset instructions have been sent to your email address.
                </AlertDescription>
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
                <Button 
                  type="submit" 
                  className="w-full bg-retro-purple-700 hover:bg-retro-purple-600 text-white"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Logging in..." : "Login"}
                </Button>
              </form>
            </Form>
            
            <div className="flex items-center pt-2">
              <div className="flex-grow border-t border-gray-700"></div>
              <span className="px-2 text-gray-500 text-xs">OR</span>
              <div className="flex-grow border-t border-gray-700"></div>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <Button
              variant="outline"
              onClick={handleResetPassword}
              type="button"
              className="w-full border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-gray-200"
            >
              Reset Password
            </Button>
            <div className="text-center text-sm text-gray-400">
              Don't have an account?{" "}
              <Link to="/signup" className="text-retro-purple-400 hover:text-retro-purple-300 hover:underline transition-colors">
                Sign Up
              </Link>
            </div>
          </CardFooter>
        </Card>
      </div>
      <Toaster />
    </div>
  );
};

export default Login;
