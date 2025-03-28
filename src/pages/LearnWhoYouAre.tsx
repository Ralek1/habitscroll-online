
import React from 'react';
import { Link } from 'react-router-dom';
import PixelButton from '../components/PixelButton';
import { Brain, User, Users, Briefcase, Heart, Shield, DollarSign } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

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
  
  // Set page title
  React.useEffect(() => {
    document.title = language === 'de' ? 'Du' : 'You';
  }, [language]);
  
  // Translated text elements
  const pageTitle = language === 'de' ? 'Lerne, wer du bist' : 'Learn Who You Are';
  const pageSubtitle = language === 'de' ? 'Du' : 'You Are';
  const homeButtonText = language === 'de' ? 'Startseite' : 'Home';
  const whyPersonalityTestsTitle = language === 'de' ? 'Warum Persönlichkeitstests?' : 'Why Personality Tests?';
  const personalityTestsQuote = language === 'de' 
    ? 'Du kannst nicht verbessern, was du nicht verstehst.' 
    : 'You can\'t improve what you don\'t understand.';
  const takeAssessmentText = language === 'de' ? 'Test durchführen →' : 'Take the Assessment →';
  
  const benefitItems = [
    {
      icon: <Brain className="h-5 w-5 text-retro-purple-700 mt-1" />,
      text: language === 'de' 
        ? 'Gewinne datengestütztes Selbstbewusstsein' 
        : 'Gain data-backed self-awareness'
    },
    {
      icon: <Briefcase className="h-5 w-5 text-retro-purple-700 mt-1" />,
      text: language === 'de' 
        ? 'Bringe deine Karriere und deinen Lebensstil mit deinen Eigenschaften in Einklang' 
        : 'Align your career and lifestyle with your traits'
    },
    {
      icon: <Users className="h-5 w-5 text-retro-purple-700 mt-1" />,
      text: language === 'de' 
        ? 'Verstehe Teamdynamiken und deinen Kommunikationsstil' 
        : 'Understand team dynamics and your communication style'
    },
    {
      icon: <Heart className="h-5 w-5 text-retro-purple-700 mt-1" />,
      text: language === 'de' 
        ? 'Baue emotionale Intelligenz und Widerstandsfähigkeit auf' 
        : 'Build emotional intelligence and resilience'
    }
  ];
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-start py-12 px-4">
      <div className="text-center mb-8 animate-appear flex flex-col items-center">
        <div className="inline-block bg-retro-purple-700 px-4 py-1 rounded mb-2">
          <h1 className="font-pixel text-retro-light text-xs">PURPLE HABIT SCROLLS</h1>
        </div>
        <h2 className="font-pixel text-2xl text-retro-purple-200 leading-relaxed text-center">
          {language === 'de' ? 'Lerne, wer' : 'Learn Who'} <br /> 
          <span className="text-retro-accent">{pageSubtitle}</span>
        </h2>
        <div className="mt-2">
          <Link to="/?showHabit=true">
            <PixelButton onClick={() => {}}>
              {homeButtonText}
            </PixelButton>
          </Link>
        </div>
      </div>
      
      <div className="w-full max-w-3xl flex flex-col items-center">
        <div className="mb-8 w-full p-6 scroll-paper rounded-lg">
          <h3 className="font-pixel-text text-xl mb-6 text-center text-amber-950">{whyPersonalityTestsTitle}</h3>
          <p className="font-pixel-text text-lg mb-4 text-center italic text-amber-950">
            "{personalityTestsQuote}"
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            {benefitItems.map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                {item.icon}
                <p className="font-pixel-text text-amber-950">{item.text}</p>
              </div>
            ))}
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
                    {test.title[language]}
                  </h3>
                  <p className="font-pixel-text text-amber-950 mb-3 text-base">
                    {test.description[language]}
                  </p>
                  
                  <div className="scroll-section mt-4 mb-3">
                    <h4 className="font-pixel text-amber-950 text-xs mb-1 flex items-center">
                      <DollarSign className="h-4 w-4 mr-1 text-retro-purple-700" />
                      {language === 'de' ? 'PREISGESTALTUNG' : 'PRICING'}
                    </h4>
                    <p className="font-pixel-text text-amber-950 text-sm">{test.pricing[language]}</p>
                  </div>
                  
                  <div className="scroll-section mb-3">
                    <h4 className="font-pixel text-amber-950 text-xs mb-1 flex items-center">
                      <Brain className="h-4 w-4 mr-1 text-retro-purple-700" />
                      {language === 'de' ? 'WISSENSCHAFTLICHER HINWEIS' : 'SCIENTIFIC NOTE'}
                    </h4>
                    <p className="font-pixel-text text-amber-950 text-sm">{test.scienceNote[language]}</p>
                  </div>
                  
                  <a 
                    href={test.url} 
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="inline-block mt-2 text-xs bg-retro-purple-600 hover:bg-retro-purple-700 text-white font-pixel py-1 px-3 rounded transition-colors"
                  >
                    {takeAssessmentText}
                  </a>
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
