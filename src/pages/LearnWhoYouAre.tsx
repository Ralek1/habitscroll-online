
import React from 'react';
import { Link } from 'react-router-dom';
import PixelButton from '../components/PixelButton';
import { ArrowLeft, Brain, User, Users, Briefcase, Heart, Shield } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface PersonalityTest {
  id: string;
  title: string;
  description: string;
  url: string;
  icon: React.ReactNode;
}

const personalityTests: PersonalityTest[] = [
  {
    id: "mbti",
    title: "Myers-Briggs Type Indicator (MBTI)",
    description: "Discover your personality type among 16 different types. Learn how you perceive the world and make decisions.",
    url: "https://www.16personalities.com/",
    icon: <Brain className="h-6 w-6" />
  },
  {
    id: "big5",
    title: "Big Five Personality Test",
    description: "Measure the five core dimensions of your personality: Openness, Conscientiousness, Extraversion, Agreeableness, and Neuroticism.",
    url: "https://www.truity.com/test/big-five-personality-test",
    icon: <User className="h-6 w-6" />
  },
  {
    id: "disc",
    title: "DISC Assessment",
    description: "Understand your behavioral style: Dominance, Influence, Steadiness, and Conscientiousness. Great for workplace dynamics.",
    url: "https://www.discprofile.com/",
    icon: <Users className="h-6 w-6" />
  },
  {
    id: "strengthsfinder",
    title: "CliftonStrengths (StrengthsFinder)",
    description: "Identify your top 5 talents from 34 themes to maximize your potential in work and life.",
    url: "https://www.gallup.com/cliftonstrengths/",
    icon: <Briefcase className="h-6 w-6" />
  },
  {
    id: "enneagram",
    title: "Enneagram",
    description: "Explore your core motivations and fears through nine interconnected personality types.",
    url: "https://www.truity.com/test/enneagram-personality-test",
    icon: <Heart className="h-6 w-6" />
  },
  {
    id: "via",
    title: "VIA Character Strengths",
    description: "Discover your top character strengths that contribute to your sense of well-being and fulfillment.",
    url: "https://www.viacharacter.org/",
    icon: <Shield className="h-6 w-6" />
  }
];

const LearnWhoYouAre: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start py-12 px-4">
      <div className="text-center mb-8 animate-appear">
        <div className="inline-block bg-retro-purple-700 px-4 py-1 rounded mb-2">
          <h1 className="font-pixel text-retro-light text-xs">PURPLE HABIT SCROLLS</h1>
        </div>
        <h2 className="font-pixel text-2xl text-retro-purple-200 leading-relaxed">
          Learn Who <br /> 
          <span className="text-retro-accent">You Are</span>
        </h2>
      </div>
      
      <div className="w-full max-w-3xl flex flex-col items-center">
        <div className="mb-8 w-full p-6 scroll-paper rounded-lg">
          <h3 className="font-pixel-text text-xl mb-6 text-center text-amber-950">Why Personality Tests?</h3>
          <p className="font-pixel-text text-lg mb-4 text-center italic text-amber-950">
            "You can't improve what you don't understand."
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <div className="flex items-start gap-3">
              <Brain className="h-5 w-5 text-retro-purple-700 mt-1" />
              <p className="font-pixel-text text-amber-950">Gain data-backed self-awareness</p>
            </div>
            <div className="flex items-start gap-3">
              <Briefcase className="h-5 w-5 text-retro-purple-700 mt-1" />
              <p className="font-pixel-text text-amber-950">Align your career and lifestyle with your traits</p>
            </div>
            <div className="flex items-start gap-3">
              <Users className="h-5 w-5 text-retro-purple-700 mt-1" />
              <p className="font-pixel-text text-amber-950">Understand team dynamics and your communication style</p>
            </div>
            <div className="flex items-start gap-3">
              <Heart className="h-5 w-5 text-retro-purple-700 mt-1" />
              <p className="font-pixel-text text-amber-950">Build emotional intelligence and resilience</p>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mb-8">
          {personalityTests.map((test) => (
            <Card key={test.id} className="border-retro-purple-300 bg-white/95">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-center">
                  <CardTitle className="font-pixel-text text-lg text-retro-purple-700">
                    {test.title}
                  </CardTitle>
                  <div className="text-retro-purple-600">
                    {test.icon}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="font-pixel-text text-sm mb-4">
                  {test.description}
                </CardDescription>
                <a 
                  href={test.url} 
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="inline-block text-xs bg-retro-purple-600 hover:bg-retro-purple-700 text-white font-pixel py-1 px-3 rounded transition-colors"
                >
                  Take the Test →
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <Link to="/">
          <PixelButton onClick={() => {}}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </PixelButton>
        </Link>
      </div>
    </div>
  );
};

export default LearnWhoYouAre;
