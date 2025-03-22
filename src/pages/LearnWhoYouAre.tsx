
import React from 'react';
import { Link } from 'react-router-dom';
import PixelButton from '../components/PixelButton';
import { ArrowLeft, Brain, User, Users, Briefcase, Heart, Shield, DollarSign } from 'lucide-react';

interface PersonalityTest {
  id: string;
  title: string;
  description: string;
  url: string;
  icon: React.ReactNode;
  pricing: string;
  scienceNote: string;
}

const personalityTests: PersonalityTest[] = [
  {
    id: "mbti",
    title: "Myers-Briggs Type Indicator (MBTI)",
    description: "A comprehensive cognitive function analysis that categorizes individuals into 16 distinct archetypes based on their psychological preferences for perception and judgment.",
    url: "https://www.16personalities.com/",
    icon: <Brain className="h-6 w-6" />,
    pricing: "Free basic assessment; $49-175 for official versions with detailed reports.",
    scienceNote: "While widely used in corporate settings, the MBTI has faced critique for test-retest reliability issues, with ~50% of respondents receiving different results upon retesting."
  },
  {
    id: "big5",
    title: "Big Five Personality Test",
    description: "Empirically validated assessment measuring the five primary dimensions of personality: Openness, Conscientiousness, Extraversion, Agreeableness, and Neuroticism (OCEAN).",
    url: "https://www.truity.com/test/big-five-personality-test",
    icon: <User className="h-6 w-6" />,
    pricing: "Free basic assessment; $19-29 for comprehensive reports.",
    scienceNote: "Considered the gold standard in personality psychology, with strong cross-cultural validity and predictive power across multiple domains of human behavior."
  },
  {
    id: "disc",
    title: "DISC Assessment",
    description: "Behavioral assessment tool analyzing temperament across four primary dimensions: Dominance, Influence, Steadiness, and Conscientiousness. Particularly valuable for workplace dynamics.",
    url: "https://www.discprofile.com/",
    icon: <Users className="h-6 w-6" />,
    pricing: "Free simplified versions available; $30-100 for complete assessments with interpretations.",
    scienceNote: "Widely implemented in organizational contexts, the DISC provides actionable insights for team building, though it has less research validation than the Big Five."
  },
  {
    id: "strengthsfinder",
    title: "CliftonStrengths (StrengthsFinder)",
    description: "Positive psychology assessment identifying an individual's dominant talents across 34 themes, enabling strategic talent optimization and strength-based development.",
    url: "https://www.gallup.com/cliftonstrengths/",
    icon: <Briefcase className="h-6 w-6" />,
    pricing: "$19.99 for Top 5 Strengths; $49.99 for complete 34 Strengths profile.",
    scienceNote: "Developed by Gallup through extensive research with over 1.7 million professionals, this assessment focuses on leveraging natural talents rather than remediating weaknesses."
  },
  {
    id: "enneagram",
    title: "Enneagram",
    description: "Ancient typological system examining core motivations, fears, and defense mechanisms through nine interconnected personality archetypes and their various levels of development.",
    url: "https://www.truity.com/test/enneagram-personality-test",
    icon: <Heart className="h-6 w-6" />,
    pricing: "Free basic test; $19-48 for in-depth reports and type development guides.",
    scienceNote: "While gaining popularity in personal development circles, the Enneagram combines psychological insights with spiritual traditions and has less empirical research than other frameworks."
  },
  {
    id: "via",
    title: "VIA Character Strengths",
    description: "Positive psychology assessment identifying signature character strengths across 24 universal virtues, facilitating enhanced well-being through authentic strength utilization.",
    url: "https://www.viacharacter.org/",
    icon: <Shield className="h-6 w-6" />,
    pricing: "Free basic assessment; Premium reports $20-50.",
    scienceNote: "Developed through extensive cross-cultural research, the VIA framework has strong empirical support in positive psychology literature for enhancing well-being and life satisfaction."
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
        
        <div className="grid grid-cols-1 gap-6 w-full mb-8">
          {personalityTests.map((test) => (
            <div key={test.id} className="scroll-paper p-5 border-retro-purple-300">
              <div className="flex justify-between items-start gap-4">
                <div className="flex-1">
                  <h3 className="font-pixel-text text-xl text-amber-950 mb-2 flex items-center gap-2">
                    <span className="text-retro-purple-700">
                      {test.icon}
                    </span>
                    {test.title}
                  </h3>
                  <p className="font-pixel-text text-amber-950 mb-3 text-base">
                    {test.description}
                  </p>
                  
                  <div className="scroll-section mt-4 mb-3">
                    <h4 className="font-pixel text-amber-950 text-xs mb-1 flex items-center">
                      <DollarSign className="h-4 w-4 mr-1 text-retro-purple-700" />
                      PRICING
                    </h4>
                    <p className="font-pixel-text text-amber-950 text-sm">{test.pricing}</p>
                  </div>
                  
                  <div className="scroll-section mb-3">
                    <h4 className="font-pixel text-amber-950 text-xs mb-1 flex items-center">
                      <Brain className="h-4 w-4 mr-1 text-retro-purple-700" />
                      SCIENTIFIC NOTE
                    </h4>
                    <p className="font-pixel-text text-amber-950 text-sm">{test.scienceNote}</p>
                  </div>
                  
                  <a 
                    href={test.url} 
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="inline-block mt-2 text-xs bg-retro-purple-600 hover:bg-retro-purple-700 text-white font-pixel py-1 px-3 rounded transition-colors"
                  >
                    Take the Assessment →
                  </a>
                </div>
              </div>
            </div>
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
