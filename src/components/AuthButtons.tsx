
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Button } from "@/components/ui/button";
import { LogIn, LogOut, UserCircle } from "lucide-react";

const AuthButtons: React.FC = () => {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  if (currentUser) {
    return (
      <div className="flex items-center gap-2">
        <div className="hidden sm:flex items-center text-retro-light text-xs mr-2">
          <UserCircle className="h-4 w-4 mr-1" />
          <span className="truncate max-w-[100px]">{currentUser.email}</span>
        </div>
        <Button 
          variant="outline" 
          size="sm" 
          onClick={handleLogout}
          className="bg-retro-purple-800/50 text-retro-light border-retro-purple-700 hover:bg-retro-purple-700"
        >
          <LogOut className="h-4 w-4 mr-1" />
          <span className="sm:block hidden">Logout</span>
        </Button>
      </div>
    );
  }

  return (
    <div className="flex gap-2">
      <Button 
        variant="outline" 
        size="sm" 
        onClick={() => navigate("/login")}
        className="bg-retro-purple-800/50 text-retro-light border-retro-purple-700 hover:bg-retro-purple-700"
      >
        <LogIn className="h-4 w-4 mr-1" />
        <span className="sm:block hidden">Login</span>
      </Button>
      <Button 
        size="sm" 
        onClick={() => navigate("/signup")}
        className="bg-retro-purple-600 text-retro-light hover:bg-retro-purple-500"
      >
        <span className="sm:block hidden">Sign Up</span>
        <span className="sm:hidden block">+</span>
      </Button>
    </div>
  );
};

export default AuthButtons;
