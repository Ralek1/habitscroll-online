
import React from "react";
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import PixelButton from "../components/PixelButton";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-12 px-4 bg-retro-purple-900">
      <div className="text-center mb-8 animate-appear">
        <div className="inline-block bg-retro-purple-700 px-4 py-1 rounded mb-2">
          <h1 className="font-pixel text-retro-light text-xs">PURPLE HABIT SCROLLS</h1>
        </div>
        <h2 className="font-pixel text-2xl text-retro-purple-200 leading-relaxed">
          404 <br /> 
          <span className="text-retro-accent">Page Not Found</span>
        </h2>
      </div>

      <div className="text-center text-retro-purple-200 mb-8 font-pixel-text">
        The scroll you seek does not exist in this realm.
      </div>
      
      <Link to="/">
        <PixelButton onClick={() => {}}>
          Return Home
        </PixelButton>
      </Link>
    </div>
  );
};

export default NotFound;
