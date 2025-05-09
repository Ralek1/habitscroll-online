import React from 'react';
import { Link } from 'react-router-dom';
import PixelButton from '../components/PixelButton';
import HeaderNavigation from '../components/HeaderNavigation';
import { Brain, User, Users, Briefcase, Heart, Shield, DollarSign } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { NonScrollableArea } from '../components/ui/non-scrollable-area';

interface PersonalityTest {
  id: string;
  title: {
    en: string;
    de: string;
  };
  description: {
    en: string;
    de: string;
  };
  url: string;
  icon: React.ReactNode;
  pricing: {
    en: string;
    de: string;
  };
  scienceNote: {
    en: string;
    de: string;
  };
}

const personalityTests: PersonalityTest[] = [
  {
    id: "mbti",
    title: {
      en: "Myers-Briggs Type Indicator (MBTI)",
      de: "Myers-Briggs-Typindikator (MBTI)"
    },
    description: {
      en: "A comprehensive cognitive function analysis that categorizes individuals into 16 distinct archetypes based on their psychological preferences for perception and judgment.",
      de: "Eine umfassende kognitive Funktionsanalyse, die Individuen in 16 verschiedene Archetypen basierend auf ihren psychologischen Präferenzen für Wahrnehmung und Urteilsvermögen kategorisiert."
    },
    url: "https://www.16personalities.com/",
    icon: <Brain className="h-6 w-6" />,
    pricing: {
      en: "Free basic assessment; $49-175 for official versions with detailed reports.",
      de: "Kostenlose Grundbewertung; 49-175 € für offizielle Versionen mit detaillierten Berichten."
    },
    scienceNote: {
      en: "While widely used in corporate settings, the MBTI has faced critique for test-retest reliability issues, with ~50% of respondents receiving different results upon retesting.",
      de: "Obwohl im Unternehmensumfeld weit verbreitet, wurde der MBTI für Probleme mit der Test-Retest-Reliabilität kritisiert, wobei etwa 50% der Befragten bei erneuter Testung unterschiedliche Ergebnisse erhalten."
    }
  },
  {
    id: "big5",
    title: {
      en: "Big Five Personality Test",
      de: "Big Five Persönlichkeitstest"
    },
    description: {
      en: "Empirically validated assessment measuring the five primary dimensions of personality: Openness, Conscientiousness, Extraversion, Agreeableness, and Neuroticism (OCEAN).",
      de: "Empirisch validierte Beurteilung, die die fünf primären Dimensionen der Persönlichkeit misst: Offenheit, Gewissenhaftigkeit, Extraversion, Verträglichkeit und Neurotizismus (OCEAN)."
    },
    url: "https://www.truity.com/test/big-five-personality-test",
    icon: <User className="h-6 w-6" />,
    pricing: {
      en: "Free basic assessment; $19-29 for comprehensive reports.",
      de: "Kostenlose Grundbewertung; 19-29 € für umfassende Berichte."
    },
    scienceNote: {
      en: "Considered the gold standard in personality psychology, with strong cross-cultural validity and predictive power across multiple domains of human behavior.",
      de: "Gilt als Goldstandard in der Persönlichkeitspsychologie, mit starker kulturübergreifender Validität und Vorhersagekraft in mehreren Bereichen menschlichen Verhaltens."
    }
  },
  {
    id: "disc",
    title: {
      en: "DISC Assessment",
      de: "DISC-Beurteilung"
    },
    description: {
      en: "Behavioral assessment tool analyzing temperament across four primary dimensions: Dominance, Influence, Steadiness, and Conscientiousness. Particularly valuable for workplace dynamics.",
      de: "Verhaltensbeurteilungsinstrument, das das Temperament anhand von vier primären Dimensionen analysiert: Dominanz, Einfluss, Beständigkeit und Gewissenhaftigkeit. Besonders wertvoll für Arbeitsplatzdynamiken."
    },
    url: "https://www.discprofile.com/",
    icon: <Users className="h-6 w-6" />,
    pricing: {
      en: "Free simplified versions available; $30-100 for complete assessments with interpretations.",
      de: "Kostenlose vereinfachte Versionen verfügbar; 30-100 € für vollständige Beurteilungen mit Interpretationen."
    },
    scienceNote: {
      en: "Widely implemented in organizational contexts, the DISC provides actionable insights for team building, though it has less research validation than the Big Five.",
      de: "In organisatorischen Kontexten weit verbreitet, bietet DISC umsetzbare Einblicke für den Teamaufbau, obwohl es weniger Forschungsvalidierung als die Big Five hat."
    }
  },
  {
    id: "strengthsfinder",
    title: {
      en: "CliftonStrengths (StrengthsFinder)",
      de: "CliftonStrengths (StrengthsFinder)"
    },
    description: {
      en: "Positive psychology assessment identifying an individual's dominant talents across 34 themes, enabling strategic talent optimization and strength-based development.",
      de: "Positive Psychologiebeurteilung, die die dominanten Talente einer Person in 34 Themen identifiziert, was eine strategische Talentoptimierung und stärkenbasierte Entwicklung ermöglicht."
    },
    url: "https://www.gallup.com/cliftonstrengths/",
    icon: <Briefcase className="h-6 w-6" />,
    pricing: {
      en: "$19.99 for Top 5 Strengths; $49.99 for complete 34 Strengths profile.",
      de: "19,99 € für die Top 5 Stärken; 49,99 € für das vollständige 34-Stärken-Profil."
    },
    scienceNote: {
      en: "Developed by Gallup through extensive research with over 1.7 million professionals, this assessment focuses on leveraging natural talents rather than remediating weaknesses.",
      de: "Von Gallup durch umfangreiche Forschung mit über 1,7 Millionen Fachleuten entwickelt, konzentriert sich diese Beurteilung darauf, natürliche Talente zu nutzen, anstatt Schwächen zu beheben."
    }
  },
  {
    id: "enneagram",
    title: {
      en: "Enneagram",
      de: "Enneagramm"
    },
    description: {
      en: "Ancient typological system examining core motivations, fears, and defense mechanisms through nine interconnected personality archetypes and their various levels of development.",
      de: "Altes typologisches System, das Kernmotivationen, Ängste und Abwehrmechanismen durch neun miteinander verbundene Persönlichkeitsarchetypen und ihre verschiedenen Entwicklungsstufen untersucht."
    },
    url: "https://www.truity.com/test/enneagram-personality-test",
    icon: <Heart className="h-6 w-6" />,
    pricing: {
      en: "Free basic test; $19-48 for in-depth reports and type development guides.",
      de: "Kostenloser Grundtest; 19-48 € für eingehende Berichte und Typenentwicklungsführer."
    },
    scienceNote: {
      en: "While gaining popularity in personal development circles, the Enneagram combines psychological insights with spiritual traditions and has less empirical research than other frameworks.",
      de: "Während es in Kreisen der persönlichen Entwicklung an Popularität gewinnt, kombiniert das Enneagramm psychologische Erkenntnisse mit spirituellen Traditionen und hat weniger empirische Forschung als andere Frameworks."
    }
  },
  {
    id: "via",
    title: {
      en: "VIA Character Strengths",
      de: "VIA Charakterstärken"
    },
    description: {
      en: "Positive psychology assessment identifying signature character strengths across 24 universal virtues, facilitating enhanced well-being through authentic strength utilization.",
      de: "Positive psychologische Beurteilung, die Signatur-Charakterstärken über 24 universelle Tugenden identifiziert und ein verbessertes Wohlbefinden durch authentische Stärkenutzung fördert."
    },
    url: "https://www.viacharacter.org/",
    icon: <Shield className="h-6 w-6" />,
    pricing: {
      en: "Free basic assessment; Premium reports $20-50.",
      de: "Kostenlose Grundbewertung; Premium-Berichte 20-50 €."
    },
    scienceNote: {
      en: "Developed through extensive cross-cultural research, the VIA framework has strong empirical support in positive psychology literature for enhancing well-being and life satisfaction.",
      de: "Durch umfangreiche kulturübergreifende Forschung entwickelt, hat das VIA-Framework starke empirische Unterstützung in der positiven Psychologieliteratur zur Verbesserung des Wohlbefindens und der Lebenszufriedenheit."
    }
  }
];

const LearnWhoYouAre: React.FC = () => {
  const { language, translate } = useLanguage();
  
  React.useEffect(() => {
    document.title = language === 'de' ? 'Du' : 'You';
  }, [language]);
  
  const pageTitle = language === 'de' ? 'Lerne, wer du bist' : 'Learn Who You Are';
  const pageSubtitle = language === 'de' ? 'Du bist' : 'You Are';
  const homeButtonText = translate("button.home");
  const takeAssessmentText = language === 'de' ? 'Test durchführen →' : 'Take the Assessment →';
  const whyTestsTitle = language === 'de' ? 'Warum Persönlichkeitstests?' : 'Why Personality Tests?';
  const testsQuote = language === 'de' ? 'Du kannst nicht verbessern, was du nicht verstehst.' : 'You can\'t improve what you don\'t understand.';
  
  const benefitItems = language === 'de' 
    ? [
        'Gewinne datengestütztes Selbstbewusstsein',
        'Bringe deine Karriere und deinen Lebensstil mit deinen Eigenschaften in Einklang',
        'Verstehe Teamdynamiken und deinen Kommunikationsstil',
        'Baue emotionale Intelligenz und Widerstandsfähigkeit auf'
      ]
    : [
        'Gain data-backed self-awareness',
        'Align your career and lifestyle with your traits',
        'Understand team dynamics and your communication style',
        'Build emotional intelligence and resilience'
      ];
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-start py-12 px-4">
      <div className="absolute top-4 right-4 z-10">
        <HeaderNavigation />
      </div>
      
      <div className="text-center mb-8 animate-appear flex flex-col items-center">
        <div className="inline-block bg-retro-purple-700 px-4 py-1 rounded mb-2">
          <h1 className="font-pixel text-retro-light text-xs">PURPLE HABIT SCROLLS</h1>
        </div>
        <h2 className="font-pixel text-2xl text-retro-purple-200 leading-relaxed text-center">
          {language === 'de' ? 'Lerne, wer' : 'Learn Who'} <br /> 
          <span className="text-green-400">{pageSubtitle}</span>
        </h2>
        
        <div className="mt-6 max-w-xl w-full text-center transform hover:scale-[1.02] transition-transform">
          <div className="scroll-closed-body rounded-xl">
            <div className="p-6">
              <h3 className="font-pixel text-lg text-green-400 mb-3">{whyTestsTitle}</h3>
              <p className="font-pixel-text text-retro-purple-700 italic mb-4 text-xl">"{testsQuote}"</p>
              <ul className="text-sm text-retro-purple-700 space-y-2">
                {benefitItems.map((item, index) => (
                  <li key={index} className="font-pixel-text flex items-center justify-center">
                    <span className="inline-block w-2 h-2 bg-green-400 mr-2"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-6">
          <Link to="/?showHabit=true">
            <PixelButton onClick={() => {}}>
              {homeButtonText}
            </PixelButton>
          </Link>
        </div>
      </div>
      
      <div className="w-full max-w-6xl flex flex-col items-center">
        <div className="grid grid-cols-1 gap-8 w-full mb-10">
          {personalityTests.map((test) => (
            <div key={test.id} className="w-full">
              <div className="pixel-scroll-container transform hover:scale-[1.02] transition-transform">
                <div className="pixel-scroll-handle pixel-scroll-handle-top">
                  <div className="pixel-scroll-knob"></div>
                  <div className="pixel-wooden-rod"></div>
                  <div className="pixel-scroll-knob"></div>
                </div>
                
                <div className="scroll-closed-body rounded-xl">
                  <NonScrollableArea className="pixel-scroll-content p-8">
                    <h3 className="font-pixel-text text-xl text-green-400 mb-3 flex items-center gap-2">
                      <span className="text-retro-purple-700">
                        {test.icon}
                      </span>
                      {test.title[language]}
                    </h3>
                    <p className="font-pixel-text text-retro-purple-700 mb-4 text-lg">
                      {test.description[language]}
                    </p>
                    
                    <div className="scroll-section mt-5 mb-4 px-4">
                      <h4 className="font-pixel text-green-400 text-sm mb-2 flex items-center">
                        <DollarSign className="h-4 w-4 mr-1 text-retro-purple-700" />
                        {language === 'de' ? 'PREISGESTALTUNG' : 'PRICING'}
                      </h4>
                      <p className="font-pixel-text text-retro-purple-700 text-base">{test.pricing[language]}</p>
                    </div>
                    
                    <div className="scroll-section mb-4 px-4">
                      <h4 className="font-pixel text-green-400 text-sm mb-2 flex items-center">
                        <Brain className="h-4 w-4 mr-1 text-retro-purple-700" />
                        {language === 'de' ? 'WISSENSCHAFTLICHER HINWEIS' : 'SCIENTIFIC NOTE'}
                      </h4>
                      <p className="font-pixel-text text-retro-purple-700 text-base">{test.scienceNote[language]}</p>
                    </div>
                    
                    <a 
                      href={test.url} 
                      target="_blank"
                      rel="noopener noreferrer" 
                      className="inline-block mt-3 text-sm bg-retro-purple-600 hover:bg-retro-purple-700 text-white font-pixel py-2 px-4 rounded transition-colors"
                    >
                      {takeAssessmentText}
                    </a>
                  </NonScrollableArea>
                </div>
                
                <div className="pixel-scroll-handle pixel-scroll-handle-bottom">
                  <div className="pixel-scroll-knob"></div>
                  <div className="pixel-wooden-rod"></div>
                  <div className="pixel-scroll-knob"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <Link to="/?showHabit=true">
          <PixelButton onClick={() => {}}>
            {homeButtonText}
          </PixelButton>
        </Link>
      </div>
    </div>
  );
};

export default LearnWhoYouAre;
