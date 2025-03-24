
import React from "react";
import { Link } from "react-router-dom";
import PixelButton from "../components/PixelButton";

const Deploy: React.FC = () => {
  React.useEffect(() => {
    document.title = 'Deployment Successful';
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-12 px-4 bg-retro-purple-900">
      <div className="text-center mb-8 animate-appear">
        <div className="inline-block bg-retro-purple-700 px-4 py-1 rounded mb-2">
          <h1 className="font-pixel text-retro-light text-xs">PURPLE HABIT SCROLLS</h1>
        </div>
        <h2 className="font-pixel text-2xl text-retro-purple-200 leading-relaxed">
          Build <br /> 
          <span className="text-retro-accent">Successful!</span>
        </h2>
      </div>

      <div className="text-center text-retro-purple-200 mb-8 font-pixel-text">
        Your application has been successfully built and deployed.
      </div>
      
      <Link to="/">
        <PixelButton onClick={() => {}}>
          Return Home
        </PixelButton>
      </Link>
    </div>
  );
};

export default Deploy;
