
import { useAuth } from "../context/AuthContext";
import { Button } from "@/components/ui/button";
import { LogOut, UserCircle } from "lucide-react";

const AuthButtons: React.FC = () => {
  const { currentUser, logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  console.log("AuthButtons rendering, currentUser:", currentUser?.email);

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

  return null; // No buttons to show when user is not logged in
};

export default AuthButtons;
