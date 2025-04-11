
import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { 
  User,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail
} from "firebase/auth";
import { auth } from "../config/firebase";
import { useToast } from "@/hooks/use-toast";

interface AuthContextProps {
  currentUser: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<User>;
  signup: (email: string, password: string) => Promise<User>;
  logout: () => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const login = async (email: string, password: string) => {
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      toast({
        title: "Login successful",
        description: "You've been successfully logged in",
        duration: 3000,
      });
      return result.user;
    } catch (error: any) {
      let errorMessage = "Failed to login";
      if (error.code === "auth/user-not-found" || error.code === "auth/wrong-password") {
        errorMessage = "Invalid email or password";
      } else if (error.code === "auth/too-many-requests") {
        errorMessage = "Too many unsuccessful login attempts. Please try again later.";
      }
      toast({
        title: "Login Error",
        description: errorMessage,
        variant: "destructive",
        duration: 5000,
      });
      throw error;
    }
  };

  const signup = async (email: string, password: string) => {
    try {
      const result = await createUserWithEmailAndPassword(auth, email, password);
      toast({
        title: "Account created",
        description: "Your account has been created successfully",
        duration: 3000,
      });
      return result.user;
    } catch (error: any) {
      let errorMessage = "Failed to create an account";
      if (error.code === "auth/email-already-in-use") {
        errorMessage = "Email already in use";
      } else if (error.code === "auth/weak-password") {
        errorMessage = "Password is too weak";
      } else if (error.code === "auth/invalid-email") {
        errorMessage = "Invalid email address";
      }
      toast({
        title: "Registration Error",
        description: errorMessage,
        variant: "destructive",
        duration: 5000,
      });
      throw error;
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      toast({
        title: "Logged out",
        description: "You've been successfully logged out",
        duration: 3000,
      });
    } catch (error) {
      toast({
        title: "Logout Error",
        description: "There was a problem logging you out",
        variant: "destructive",
        duration: 5000,
      });
      throw error;
    }
  };

  const resetPassword = async (email: string) => {
    try {
      await sendPasswordResetEmail(auth, email);
      toast({
        title: "Password Reset Email Sent",
        description: "Check your email for password reset instructions",
        duration: 5000,
      });
    } catch (error: any) {
      let errorMessage = "Failed to send password reset email";
      if (error.code === "auth/user-not-found") {
        errorMessage = "No account found with that email";
      } else if (error.code === "auth/invalid-email") {
        errorMessage = "Invalid email address";
      }
      toast({
        title: "Reset Password Error",
        description: errorMessage,
        variant: "destructive",
        duration: 5000,
      });
      throw error;
    }
  };

  const value = {
    currentUser,
    loading,
    login,
    signup,
    logout,
    resetPassword,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
