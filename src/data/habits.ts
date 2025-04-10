
export interface Habit {
  id: number;
  title: {
    en: string;
    de: string;
  };
  description: {
    en: string;
    de: string;
  };
  howToGain: {
    en: string;
    de: string;
  };
  perfectFor: {
    en: string;
    de: string;
  };
  benefits: {
    en: string;
    de: string;
  };
}

export const habits: Habit[] = [
  {
    id: 1,
    title: {
      en: "Morning Meditation",
      de: "Morgenmeditation"
    },
    description: {
      en: "Start your day with a clear mind through mindful meditation",
      de: "Beginne deinen Tag mit einem klaren Kopf durch achtsame Meditation"
    },
    howToGain: {
      en: "Begin with just 2 minutes each morning before checking your phone. Gradually increase to 10-15 minutes as it becomes comfortable.",
      de: "Beginne mit nur 2 Minuten jeden Morgen vor dem Checken deines Handys. Steigere dich allmählich auf 10-15 Minuten, wenn es sich angenehm anfühlt."
    },
    perfectFor: {
      en: "Mindful individuals who seek mental clarity and emotional balance. Ideal for those who want to start their day with intention rather than reaction.",
      de: "Achtsame Personen, die nach mentaler Klarheit und emotionalem Gleichgewicht suchen. Ideal für Menschen, die ihren Tag bewusst beginnen möchten."
    },
    benefits: {
      en: "Reduced stress, improved focus, better emotional regulation, and enhanced self-awareness over time.",
      de: "Reduzierter Stress, verbesserte Konzentration, bessere emotionale Regulierung und gesteigertes Selbstbewusstsein mit der Zeit."
    }
  },
  {
    id: 2,
    title: {
      en: "Daily Reading",
      de: "Tägliches Lesen"
    },
    description: {
      en: "Feed your mind with knowledge through consistent reading",
      de: "Füttere deinen Geist mit Wissen durch regelmäßiges Lesen"
    },
    howToGain: {
      en: "Set aside 20 minutes daily. Start with books that genuinely interest you to build momentum.",
      de: "Nimm dir täglich 20 Minuten Zeit. Beginne mit Büchern, die dich wirklich interessieren, um Schwung zu bekommen."
    },
    perfectFor: {
      en: "Lifelong learners and curious minds who value knowledge acquisition. Great for those who want to expand their perspectives and grow intellectually.",
      de: "Lebenslange Lerner und neugierige Köpfe, die den Erwerb von Wissen schätzen. Ideal für alle, die ihre Perspektiven erweitern und intellektuell wachsen möchten."
    },
    benefits: {
      en: "Expanded vocabulary, improved concentration, greater knowledge base, and enhanced cognitive function.",
      de: "Erweiterter Wortschatz, verbesserte Konzentration, größere Wissensbasis und verbesserte kognitive Funktionen."
    }
  },
  {
    id: 3,
    title: {
      en: "Hydration Habit",
      de: "Hydrations-Gewohnheit"
    },
    description: {
      en: "Transform your health by properly hydrating throughout the day",
      de: "Verbessere deine Gesundheit durch richtige Flüssigkeitszufuhr über den Tag"
    },
    howToGain: {
      en: "Start your morning with a full glass of water. Keep a water bottle visible at all times. Set reminders if needed.",
      de: "Beginne deinen Morgen mit einem vollen Glas Wasser. Halte eine Wasserflasche immer sichtbar. Setze bei Bedarf Erinnerungen."
    },
    perfectFor: {
      en: "Health-conscious individuals who want a simple yet effective way to improve their wellbeing. Ideal for busy people who often forget to drink enough water.",
      de: "Gesundheitsbewusste Menschen, die einen einfachen, aber effektiven Weg suchen, ihr Wohlbefinden zu verbessern. Ideal für vielbeschäftigte Personen, die oft vergessen, genug zu trinken."
    },
    benefits: {
      en: "Improved energy levels, better skin health, enhanced cognitive function, and proper organ function.",
      de: "Verbesserter Energielevel, bessere Hautgesundheit, verbesserte kognitive Funktion und ordnungsgemäße Organfunktion."
    }
  },
  {
    id: 4,
    title: {
      en: "Gratitude Practice",
      de: "Dankbarkeitsübung"
    },
    description: {
      en: "Cultivate joy by acknowledging the good in your life",
      de: "Freude kultivieren, indem du das Gute in deinem Leben anerkennst"
    },
    howToGain: {
      en: "Every evening, write down three things you're grateful for. Be specific and try not to repeat items.",
      de: "Schreibe jeden Abend drei Dinge auf, für die du dankbar bist. Sei spezifisch und versuche, keine Elemente zu wiederholen."
    },
    perfectFor: {
      en: "Optimistic souls who want to train their minds to focus on the positive. Great for those struggling with negative thought patterns or seeking more joy in life.",
      de: "Optimistische Seelen, die ihren Geist darauf trainieren möchten, sich auf das Positive zu konzentrieren. Ideal für diejenigen, die mit negativen Denkmustern zu kämpfen haben oder mehr Freude im Leben suchen."
    },
    benefits: {
      en: "Increased happiness, reduced depression, better sleep quality, and stronger resilience to stress.",
      de: "Erhöhtes Glück, reduzierte Depression, bessere Schlafqualität und stärkere Widerstandsfähigkeit gegen Stress."
    }
  },
  {
    id: 5,
    title: {
      en: "Tech-Free Time",
      de: "Technikfreie Zeit"
    },
    description: {
      en: "Reclaim your attention through daily digital detox periods",
      de: "Gewinne deine Aufmerksamkeit durch tägliche digitale Entgiftungsphasen zurück"
    },
    howToGain: {
      en: "Designate 30-60 minutes each day where all screens are put away. Start with dinner time or before bed.",
      de: "Lege jeden Tag 30-60 Minuten fest, in denen alle Bildschirme weggelegt werden. Beginne mit der Abendessenszeit oder vor dem Schlafengehen."
    },
    perfectFor: {
      en: "Digital natives who feel overwhelmed by constant connectivity. Ideal for those who want to be more present in their relationships and personal time.",
      de: "Digitale Native, die sich von ständiger Konnektivität überfordert fühlen. Ideal für diejenigen, die in ihren Beziehungen und ihrer persönlichen Zeit präsenter sein möchten."
    },
    benefits: {
      en: "Reduced anxiety, improved real-life connections, better sleep, and increased mindfulness.",
      de: "Reduzierte Angstzustände, verbesserte reale Verbindungen, besserer Schlaf und erhöhte Achtsamkeit."
    }
  },
  {
    id: 6,
    title: {
      en: "Daily Movement",
      de: "Tägliche Bewegung"
    },
    description: {
      en: "Energize your body with consistent physical activity",
      de: "Belebe deinen Körper mit konsequenter körperlicher Aktivität"
    },
    howToGain: {
      en: "Start with just 5 minutes of any movement you enjoy. Schedule it at the same time each day to build consistency.",
      de: "Beginne mit nur 5 Minuten jeder Bewegung, die dir Spaß macht. Plane es jeden Tag zur gleichen Zeit, um Konsistenz aufzubauen."
    },
    perfectFor: {
      en: "Energy-seekers who want to feel more alive and vibrant. Great for desk workers, busy professionals, or anyone who tends to be sedentary.",
      de: "Energiesuchende, die sich lebendiger und dynamischer fühlen möchten. Ideal für Büroangestellte, vielbeschäftigte Berufstätige oder alle, die dazu neigen, sitzend zu sein."
    },
    benefits: {
      en: "Improved mood, increased energy, better cardiovascular health, and enhanced cognitive function.",
      de: "Verbesserte Stimmung, gesteigerte Energie, bessere Herz-Kreislauf-Gesundheit und verbesserte kognitive Funktion."
    }
  },
  {
    id: 7,
    title: {
      en: "Mindful Eating",
      de: "Achtsames Essen"
    },
    description: {
      en: "Transform your relationship with food through present-moment awareness",
      de: "Verändere deine Beziehung zum Essen durch das Bewusstsein des gegenwärtigen Moments"
    },
    howToGain: {
      en: "For one meal a day, eat without distractions. Notice flavors, textures, and your body's hunger signals.",
      de: "Iss eine Mahlzeit am Tag ohne Ablenkungen. Achte auf Aromen, Texturen und die Hungersignale deines Körpers."
    },
    perfectFor: {
      en: "Sensory appreciators who want to enjoy their food more deeply. Ideal for fast eaters, emotional eaters, or those who eat while distracted.",
      de: "Sensorische Genießer, die ihr Essen tiefer genießen möchten. Ideal für schnelle Esser, emotionale Esser oder diejenigen, die abgelenkt essen."
    },
    benefits: {
      en: "Better digestion, natural portion control, increased enjoyment of food, and healthier food choices.",
      de: "Bessere Verdauung, natürliche Portionskontrolle, erhöhter Genuss von Essen und gesündere Lebensmittelauswahl."
    }
  },
  {
    id: 8,
    title: {
      en: "Creative Expression",
      de: "Kreativer Ausdruck"
    },
    description: {
      en: "Nurture your imagination through regular creative practice",
      de: "Fördern Sie Ihre Fantasie durch regelmäßige kreative Übung"
    },
    howToGain: {
      en: "Set aside 15 minutes daily for any creative activity: drawing, writing, music, etc. Focus on the process, not the result.",
      de: "Nehmen Sie sich täglich 15 Minuten für jede kreative Aktivität: Zeichnen, Schreiben, Musik usw. Konzentrieren Sie sich auf den Prozess, nicht auf das Ergebnis."
    },
    perfectFor: {
      en: "Expressive souls who need an outlet for their thoughts and emotions. Great for analytical thinkers looking to balance their logical side with creativity.",
      de: "Expressive Seelen, die ein Ventil für ihre Gedanken und Gefühle brauchen. Großartig für analytische Denker, die ihre logische Seite mit Kreativität ausgleichen möchten."
    },
    benefits: {
      en: "Reduced stress, enhanced problem-solving skills, improved emotional processing, and greater self-discovery.",
      de: "Reduzierter Stress, verbesserte Fähigkeiten zur Problemlösung, verbesserte emotionale Verarbeitung und größere Selbstentdeckung."
    }
  },
  {
    id: 9,
    title: {
      "en": "Evening Reflection",
      "de": "Abendliche Reflexion"
    },
    description: {
      "en": "End your day with intentional thought and self-awareness",
      "de": "Beende deinen Tag mit absichtsvollen Gedanken und Selbstbewusstsein"
    },
    howToGain: {
      "en": "Spend 5-10 minutes before bed reflecting on what went well and what could improve. Use a journal if helpful.",
      "de": "Verbringe 5-10 Minuten vor dem Schlafengehen damit, darüber nachzudenken, was gut gelaufen ist und was verbessert werden könnte. Verwende ein Tagebuch, wenn es hilfreich ist."
    },
    perfectFor: {
      "en": "Deep thinkers and those seeking personal growth. Great for anyone wanting to improve self-awareness and sleep better.",
      "de": "Tiefe Denker und diejenigen, die persönliches Wachstum suchen. Großartig für alle, die das Selbstbewusstsein verbessern und besser schlafen möchten."
    },
    benefits: {
      "en": "Improved emotional regulation, better sleep, personal insight, and more thoughtful daily decisions.",
      "de": "Verbesserte emotionale Regulierung, besserer Schlaf, persönliche Einsichten und durchdachtere tägliche Entscheidungen."
    }
  },
  {
    id: 10,
    title: {
      "en": "Digital Declutter",
      "de": "Digitale Entrümpelung"
    },
    description: {
      "en": "Create a calmer digital space by reducing unnecessary noise",
      "de": "Schaffe einen ruhigeren digitalen Raum, indem du unnötige Geräusche reduzierst"
    },
    howToGain: {
      "en": "Unsubscribe from unused newsletters, organize files, delete apps you don’t use. Start with one area per week.",
      "de": "Melde dich von ungenutzten Newslettern ab, organisiere Dateien, lösche Apps, die du nicht verwendest. Beginne mit einem Bereich pro Woche."
    },
    perfectFor: {
      "en": "Overwhelmed multitaskers and digital minimalists. Perfect for those seeking focus in a cluttered world.",
      "de": "Überforderte Multitasker und digitale Minimalisten. Perfekt für diejenigen, die in einer unübersichtlichen Welt nach Fokus suchen."
    },
    benefits: {
      "en": "Increased focus, lower stress, easier navigation of your digital life, and a sense of control.",
      "de": "Erhöhter Fokus, weniger Stress, einfachere Navigation in deinem digitalen Leben und ein Gefühl der Kontrolle."
    }
  },
  {
    id: 11,
    title: {
      "en": "Stretching Ritual",
      "de": "Dehnungsritual"
    },
    description: {
      "en": "Keep your body agile and pain-free through daily stretching",
      "de": "Halte deinen Körper durch tägliches Dehnen agil und schmerzfrei"
    },
    howToGain: {
      "en": "Start with 5 minutes each morning or evening focusing on tight areas. Follow a simple routine or video.",
      "de": "Beginne jeden Morgen oder Abend mit 5 Minuten und konzentriere dich auf angespannte Bereiche. Folge einer einfachen Routine oder einem Video."
    },
    perfectFor: {
      "en": "Desk workers, athletes, and anyone wanting more mobility. Great for those experiencing stiffness or minor aches.",
      "de": "Büroangestellte, Sportler und alle, die mehr Mobilität wünschen. Großartig für diejenigen, die Steifheit oder leichte Schmerzen verspüren."
    },
    benefits: {
      "en": "Improved flexibility, reduced injury risk, better posture, and enhanced relaxation.",
      "de": "Verbesserte Flexibilität, reduziertes Verletzungsrisiko, bessere Körperhaltung und verbesserte Entspannung."
    }
  },
  {
    id: 12,
    title: {
      "en": "One Act of Kindness",
      "de": "Eine freundliche Tat"
    },
    description: {
      "en": "Bring positivity into your life by giving it to others",
      "de": "Bringe Positivität in dein Leben, indem du sie an andere weitergibst"
    },
    howToGain: {
      "en": "Perform one small kind act daily: a compliment, holding the door, or a helpful message.",
      "de": "Führe täglich eine kleine freundliche Tat aus: ein Kompliment, das Aufhalten der Tür oder eine hilfreiche Nachricht."
    },
    perfectFor: {
      "en": "Empathetic people who want to lift others. Ideal for those looking to build stronger social connections.",
      "de": "Empathische Menschen, die andere aufbauen möchten. Ideal für diejenigen, die stärkere soziale Verbindungen aufbauen möchten."
    },
    benefits: {
      "en": "Boosted mood, improved relationships, stronger sense of purpose, and ripple effects of positivity.",
      "de": "Verbesserte Stimmung, verbesserte Beziehungen, stärkeres Gefühl der Zielstrebigkeit und Welleneffekte der Positivität."
    }
  },
  {
    id: 13,
    title: {
      "en": "Nature Connection",
      "de": "Naturverbindung"
    },
    description: {
      "en": "Reground yourself by spending time outside every day",
      "de": "Erde dich neu, indem du jeden Tag Zeit im Freien verbringst"
    },
    howToGain: {
      "en": "Take a 10-minute walk in nature or sit quietly outside. Leave your phone behind if possible.",
      "de": "Mache einen 10-minütigen Spaziergang in der Natur oder sitze ruhig draußen. Lass dein Handy wenn möglich zu Hause."
    },
    perfectFor: {
      "en": "Urban dwellers and nature lovers alike. Great for those seeking peace and clarity away from screens.",
      "de": "Stadtbewohner und Naturliebhaber gleichermaßen. Großartig für diejenigen, die Ruhe und Klarheit abseits von Bildschirmen suchen."
    },
    benefits: {
      "en": "Reduced anxiety, better mood, improved creativity, and stronger immune system.",
      "de": "Reduzierte Angstzustände, bessere Stimmung, verbesserte Kreativität und ein stärkeres Immunsystem."
    }
  },
  {
    id: 14,
    title: {
      "en": "Financial Check-In",
      "de": "Finanzieller Check-in"
    },
    description: {
      "en": "Build financial awareness by reviewing your money daily",
      "de": "Baue finanzielles Bewusstsein auf, indem du täglich dein Geld überprüfst"
    },
    howToGain: {
      "en": "Spend 5 minutes each day tracking your spending, budgeting, or reviewing goals.",
      "de": "Verbringe jeden Tag 5 Minuten damit, deine Ausgaben zu verfolgen, zu budgetieren oder Ziele zu überprüfen."
    },
    perfectFor: {
      "en": "Budgeters, entrepreneurs, and anyone aiming to improve financial health.",
      "de": "Budgetierer, Unternehmer und alle, die ihre finanzielle Gesundheit verbessern möchten."
    },
    benefits: {
      "en": "More control over money, reduced financial stress, smarter spending, and clearer savings goals.",
      "de": "Mehr Kontrolle über Geld, reduzierter finanzieller Stress, intelligentere Ausgaben und klarere Sparziele."
    }
  },
  {
    id: 15,
    title: {
      "en": "Early Wake-Up",
      "de": "Frühes Aufwachen"
    },
    description: {
      "en": "Win the morning and take back your time",
      "de": "Gewinne den Morgen und nimm dir deine Zeit zurück"
    },
    howToGain: {
      "en": "Shift your wake-up time gradually by 15 minutes. Use the extra time intentionally, not for your phone.",
      "de": "Verschiebe deine Aufwachzeit schrittweise um 15 Minuten. Nutze die zusätzliche Zeit bewusst, nicht für dein Handy."
    },
    perfectFor: {
      "en": "Busy professionals and morning seekers who want more control over their day.",
      "de": "Vielbeschäftigte Berufstätige und Morgensucher, die mehr Kontrolle über ihren Tag haben möchten."
    },
    benefits: {
      "en": "More productivity, increased energy, better morning routine, and stronger discipline.",
      "de": "Mehr Produktivität, gesteigerte Energie, bessere Morgenroutine und stärkere Disziplin."
    }
  },
  {
    id: 16,
    title: {
      "en": "Breath Awareness",
      "de": "Atembewusstsein"
    },
    description: {
      "en": "Calm your mind by focusing on your breath",
      "de": "Beruhige deinen Geist, indem du dich auf deinen Atem konzentrierst"
    },
    howToGain: {
      "en": "Take 3-5 deep breaths during transitions throughout your day. Anchor your focus in the present.",
      "de": "Nimm während des Tages 3-5 tiefe Atemzüge. Verankere deinen Fokus in der Gegenwart."
    },
    perfectFor: {
      "en": "Anyone dealing with stress or anxiety. Great for those new to mindfulness or seeking quick calm.",
      "de": "Jeder, der mit Stress oder Angst zu kämpfen hat. Großartig für diejenigen, die neu in der Achtsamkeit sind oder schnelle Ruhe suchen."
    },
    benefits: {
      "en": "Lowered stress, increased calm, better decision-making, and improved emotional control.",
      "de": "Reduzierter Stress, erhöhte Ruhe, bessere Entscheidungsfindung und verbesserte emotionale Kontrolle."
    }
  },
  {
    id: 17,
    title: {
      "en": "Declutter One Item",
      "de": "Ein Element entrümpeln"
    },
    description: {
      "en": "Simplify your environment by removing one thing daily",
      "de": "Vereinfache deine Umgebung, indem du täglich eine Sache entfernst"
    },
    howToGain: {
      "en": "Each day, find one item to donate, throw away, or relocate. Focus on things you no longer need.",
      "de": "Finde jeden Tag einen Gegenstand, den du spenden, wegwerfen oder umplatzieren kannst. Konzentriere dich auf Dinge, die du nicht mehr brauchst."
    },
    perfectFor: {
      "en": "Minimalists and clarity-seekers. Great for overwhelmed individuals who don’t know where to start.",
      "de": "Minimalisten und Klarheitssuchende. Großartig für überforderte Personen, die nicht wissen, wo sie anfangen sollen."
    },
    benefits: {
      "en": "Less mess, more clarity, a feeling of progress, and better use of your space.",
      "de": "Weniger Unordnung, mehr Klarheit, ein Gefühl des Fortschritts und eine bessere Nutzung deines Raums."
    }
  },
  {
    id: 18,
    title: {
      "en": "Power Down Ritual",
      "de": "Abendliches Abschalt-Ritual"
    },
    description: {
      "en": "End your day with a calming wind-down routine",
      "de": "Beende deinen Tag mit einer beruhigenden Routine zum Entspannen"
    },
    howToGain: {
      "en": "Create a 30-minute buffer before sleep: dim lights, no screens, light reading, or soft music.",
      "de": "Schaffe einen 30-minütigen Puffer vor dem Schlafengehen: gedämpftes Licht, keine Bildschirme, leichte Lektüre oder sanfte Musik."
    },
    perfectFor: {
      "en": "Night owls and restless sleepers. Ideal for those who struggle to fall asleep or unwind.",
      "de": "Nachtschwärmer und unruhige Schläfer. Ideal für diejenigen, denen es schwerfällt, einzuschlafen oder sich zu entspannen."
    },
    benefits: {
      "en": "Improved sleep quality, reduced overthinking, more relaxed evenings, and healthier sleep cycles.",
      "de": "Verbesserte Schlafqualität, reduziertes Grübeln, entspanntere Abende und gesündere Schlafzyklen."
    }
  }, {
    id: 19,
    title: {
      "en": "Cold Shower Challenge",
      "de": "Kalte Dusche Herausforderung"
    },
    description: {
      "en": "Boost your resilience and energy through cold exposure",
      "de": "Steigere deine Widerstandsfähigkeit und Energie durch Kälteexposition"
    },
    howToGain: {
      "en": "Start with 30 seconds of cold water at the end of your regular shower. Gradually extend the time.",
      "de": "Beginne mit 30 Sekunden kaltem Wasser am Ende deiner regulären Dusche. Verlängere die Zeit schrittweise."
    },
    perfectFor: {
      "en": "Adventurous minds, biohackers, and anyone looking for a natural energy boost.",
      "de": "Abenteuerlustige Köpfe, Biohacker und alle, die einen natürlichen Energieschub suchen."
    },
    benefits: {
      "en": "Increased alertness, stronger immune system, enhanced discipline, and improved circulation.",
      "de": "Erhöhte Aufmerksamkeit, stärkeres Immunsystem, verbesserte Disziplin und verbesserte Durchblutung."
    }
  },
  {
    id: 20,
    title: {
      "en": "No Snooze Rule",
      "de": "Keine Schlummer-Regel"
    },
    description: {
      "en": "Train your discipline by rising as soon as your alarm rings",
      "de": "Trainiere deine Disziplin, indem du aufstehst, sobald dein Wecker klingelt"
    },
    howToGain: {
      "en": "Place your alarm across the room. Commit to standing up and not lying back down.",
      "de": "Platziere deinen Wecker auf der anderen Seite des Raumes. Verpflichte dich, aufzustehen und dich nicht wieder hinzulegen."
    },
    perfectFor: {
      "en": "Late risers and productivity enthusiasts. Ideal for those looking to win back their mornings.",
      "de": "Spätaufsteher und Produktivitäts-Enthusiasten. Ideal für diejenigen, die ihre Morgen zurückgewinnen möchten."
    },
    benefits: {
      "en": "Stronger willpower, more energy in the morning, better time management, and improved sleep rhythm.",
      "de": "Stärkere Willenskraft, mehr Energie am Morgen, besseres Zeitmanagement und verbesserter Schlafrhythmus."
    }
  },
  {
    id: 21,
    title: {
      "en": "One Big Task",
      "de": "Eine große Aufgabe"
    },
    description: {
      "en": "Focus your energy on one important task every day",
      "de": "Konzentriere deine Energie jeden Tag auf eine wichtige Aufgabe"
    },
    howToGain: {
      "en": "Each morning, define the one task that would make the day a success. Prioritize it.",
      "de": "Definiere jeden Morgen die eine Aufgabe, die den Tag zu einem Erfolg machen würde. Priorisiere sie."
    },
    perfectFor: {
      "en": "Goal-driven individuals and productivity seekers. Great for those prone to multitasking or procrastination.",
      "de": "Zielorientierte Personen und Produktivitätssuchende. Großartig für diejenigen, die zu Multitasking oder Aufschieberitis neigen."
    },
    benefits: {
      "en": "Increased clarity, greater productivity, reduced overwhelm, and a sense of accomplishment.",
      "de": "Erhöhte Klarheit, größere Produktivität, reduziertes Gefühl der Überforderung und ein Gefühl der Erfüllung."
    }
  },
  {
    id: 22,
    title: {
      "en": "Phone-Free Mornings",
      "de": "Telefonfreie Morgen"
    },
    description: {
      "en": "Reclaim your mental space by avoiding your phone after waking",
      "de": "Gewinne deinen mentalen Raum zurück, indem du nach dem Aufwachen dein Telefon vermeidest"
    },
    howToGain: {
      "en": "Avoid checking your phone for the first 30–60 minutes of your day. Use an analog alarm if needed.",
      "de": "Vermeide es, dein Telefon in den ersten 30–60 Minuten deines Tages zu überprüfen. Verwende bei Bedarf einen analogen Wecker."
    },
    perfectFor: {
      "en": "Focus-driven individuals and mindful morning builders. Great for anyone feeling digitally overwhelmed.",
      "de": "Fokusgetriebene Personen und achtsame Morgengestalter. Großartig für alle, die sich digital überfordert fühlen."
    },
    benefits: {
      "en": "More focus, reduced anxiety, stronger morning routine, and improved presence.",
      "de": "Mehr Fokus, reduzierte Angstzustände, stärkere Morgenroutine und verbesserte Präsenz."
    }
  },
  {
    id: 23,
    title: {
      "en": "Compliment Someone",
      "de": "Jemandem ein Kompliment machen"
    },
    description: {
      "en": "Strengthen connections with daily positive reinforcement",
      "de": "Stärke Verbindungen mit täglicher positiver Verstärkung"
    },
    howToGain: {
      "en": "Give one sincere compliment each day—spoken, written, or online. Be specific and authentic.",
      "de": "Gib jeden Tag ein aufrichtiges Kompliment – mündlich, schriftlich oder online. Sei spezifisch und authentisch."
    },
    perfectFor: {
      "en": "People-focused individuals and community builders. Great for introverts working on social confidence.",
      "de": "Menschenorientierte Personen und Community-Builder. Großartig für Introvertierte, die an ihrem sozialen Selbstvertrauen arbeiten."
    },
    benefits: {
      "en": "Improved relationships, more positivity, enhanced social confidence, and mutual happiness.",
      "de": "Verbesserte Beziehungen, mehr Positivität, gesteigertes soziales Selbstvertrauen und gegenseitiges Glück."
    }
  },
  {
    id: 24,
    title: {
      "en": "15-Minute Walk",
      "de": "15-Minuten-Spaziergang"
    },
    description: {
      "en": "Boost your mental and physical health through short daily walks",
      "de": "Steigere deine geistige und körperliche Gesundheit durch kurze tägliche Spaziergänge"
    },
    howToGain: {
      "en": "Commit to 15 minutes of walking—morning, lunch break, or evening. Go phone-free if possible.",
      "de": "Verpflichte dich zu 15 Minuten Spazierengehen – morgens, in der Mittagspause oder abends. Gehe wenn möglich ohne Telefon."
    },
    perfectFor: {
      "en": "Busy professionals and health-conscious individuals. Great for those who sit for long hours.",
      "de": "Vielbeschäftigte Berufstätige und gesundheitsbewusste Personen. Großartig für diejenigen, die lange sitzen."
    },
    benefits: {
      "en": "Improved mood, reduced stress, better digestion, and increased daily energy.",
      "de": "Verbesserte Stimmung, reduzierter Stress, bessere Verdauung und gesteigerte tägliche Energie."
    }
  },
  {
    id: 25,
    title: {
      "en": "Learn One New Thing",
      "de": "Eine neue Sache lernen"
    },
    description: {
      "en": "Grow your knowledge base with daily micro-learning",
      "de": "Erweitere deine Wissensbasis mit täglichem Mikrolernen"
    },
    howToGain: {
      "en": "Watch a 5-minute video, read an article, or listen to a short podcast each day on a new topic.",
      "de": "Sieh dir jeden Tag ein 5-minütiges Video an, lies einen Artikel oder höre einen kurzen Podcast zu einem neuen Thema."
    },
    perfectFor: {
      "en": "Lifelong learners and curious minds. Perfect for anyone with limited time and big ambitions.",
      "de": "Lebenslange Lerner und neugierige Köpfe. Perfekt für alle mit begrenzter Zeit und großen Ambitionen."
    },
    benefits: {
      "en": "Enhanced memory, broader perspective, increased creativity, and daily growth momentum.",
      "de": "Verbessertes Gedächtnis, breitere Perspektive, gesteigerte Kreativität und tägliche Wachstumsdynamik."
    }
  },
  {
    id: 26,
    title: {
      "en": "Digital Sunset",
      "de": "Digitaler Sonnenuntergang"
    },
    description: {
      "en": "Disconnect in the evening for better rest and presence",
      "de": "Trenne dich am Abend für bessere Erholung und Präsenz"
    },
    howToGain: {
      "en": "Turn off screens 1 hour before bed. Replace screen time with calming habits like reading or journaling.",
      "de": "Schalte Bildschirme 1 Stunde vor dem Schlafengehen aus. Ersetze die Bildschirmzeit durch beruhigende Gewohnheiten wie Lesen oder Tagebuch schreiben."
    },
    perfectFor: {
      "en": "Overstimulated minds and poor sleepers. Great for those wanting better evening habits.",
      "de": "Überstimulierte Geister und schlechte Schläfer. Großartig für diejenigen, die bessere Abendgewohnheiten wünschen."
    },
    benefits: {
      "en": "Improved sleep, reduced blue light exposure, better evening focus, and reduced restlessness.",
      "de": "Verbesserter Schlaf, reduzierte Blaulichtexposition, besserer Fokus am Abend und reduzierte Unruhe."
    }
  },
  {
    id: 27,
    title: {
      "en": "Weekly Planning",
      "de": "Wöchentliche Planung"
    },
    description: {
      "en": "Set intentions and organize your life every week",
      "de": "Setze Absichten und organisiere dein Leben jede Woche"
    },
    howToGain: {
      "en": "Every Sunday, review your calendar, goals, and priorities. Plan the top 3 for each day.",
      "de": "Überprüfe jeden Sonntag deinen Kalender, deine Ziele und Prioritäten. Plane die Top 3 für jeden Tag."
    },
    perfectFor: {
      "en": "Organizers, planners, and those looking to reduce chaos. Great for overwhelmed multitaskers.",
      "de": "Organisatoren, Planer und diejenigen, die das Chaos reduzieren möchten. Großartig für überforderte Multitasker."
    },
    benefits: {
      "en": "More clarity, reduced stress, better productivity, and stronger follow-through.",
      "de": "Mehr Klarheit, reduzierter Stress, bessere Produktivität und stärkere Umsetzung."
    }
  },
  {
    id: 28,
    title: {
      "en": "Say No Gracefully",
      "de": "Anmutig Nein sagen"
    },
    description: {
      "en": "Protect your time and energy by setting healthy boundaries",
      "de": "Schütze deine Zeit und Energie, indem du gesunde Grenzen setzt"
    },
    howToGain: {
      "en": "Practice gentle but firm refusals. Lead with appreciation before declining. Use 'I don't' rather than 'I can't'.",
      "de": "Übe sanfte, aber feste Ablehnungen. Beginne mit Wertschätzung, bevor du ablehnst. Verwende 'Ich mache nicht' anstatt 'Ich kann nicht'."
    },
    perfectFor: {
      "en": "People-pleasers and those who feel overcommitted. Great for individuals seeking to reclaim their personal time.",
      "de": "Menschen-Gefallende und diejenigen, die sich überverpflichtet fühlen. Großartig für Personen, die ihre persönliche Zeit zurückgewinnen möchten."
    },
    benefits: {
      "en": "More time for priorities, reduced burnout, increased self-respect, and deeper connections with fewer obligations.",
      "de": "Mehr Zeit für Prioritäten, reduziertes Burnout, erhöhter Selbstrespekt und tiefere Verbindungen mit weniger Verpflichtungen."
    }
  }
];
