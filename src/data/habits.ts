
export interface Habit {
  id: number;
  title: string;
  description: string;
  howToGain: string;
  howToTrack: string;
  benefits: string;
}

export const habits: Habit[] = [
  {
    id: 1,
    title: "Morning Meditation",
    description: "Start your day with a clear mind through mindful meditation",
    howToGain: "Begin with just 2 minutes each morning before checking your phone. Gradually increase to 10-15 minutes as it becomes comfortable.",
    howToTrack: "Use a habit tracker app or a simple calendar where you mark each day you complete your meditation session.",
    benefits: "Reduced stress, improved focus, better emotional regulation, and enhanced self-awareness over time."
  },
  {
    id: 2,
    title: "Daily Reading",
    description: "Feed your mind with knowledge through consistent reading",
    howToGain: "Set aside 20 minutes daily. Start with books that genuinely interest you to build momentum.",
    howToTrack: "Track pages read daily or use a reading app that logs your sessions. Aim for consistency, not speed.",
    benefits: "Expanded vocabulary, improved concentration, greater knowledge base, and enhanced cognitive function."
  },
  {
    id: 3,
    title: "Hydration Habit",
    description: "Transform your health by properly hydrating throughout the day",
    howToGain: "Start your morning with a full glass of water. Keep a water bottle visible at all times. Set reminders if needed.",
    howToTrack: "Use a marked water bottle or an app that reminds you to drink. Aim for 8 glasses daily.",
    benefits: "Improved energy levels, better skin health, enhanced cognitive function, and proper organ function."
  },
  {
    id: 4,
    title: "Gratitude Practice",
    description: "Cultivate joy by acknowledging the good in your life",
    howToGain: "Every evening, write down three things you're grateful for. Be specific and try not to repeat items.",
    howToTrack: "Maintain a dedicated gratitude journal or note in your phone. Review weekly to see patterns.",
    benefits: "Increased happiness, reduced depression, better sleep quality, and stronger resilience to stress."
  },
  {
    id: 5,
    title: "Tech-Free Time",
    description: "Reclaim your attention through daily digital detox periods",
    howToGain: "Designate 30-60 minutes each day where all screens are put away. Start with dinner time or before bed.",
    howToTrack: "Set a recurring alarm as a reminder. Track how you feel during and after these breaks.",
    benefits: "Reduced anxiety, improved real-life connections, better sleep, and increased mindfulness."
  },
  {
    id: 6,
    title: "Daily Movement",
    description: "Energize your body with consistent physical activity",
    howToGain: "Start with just 5 minutes of any movement you enjoy. Schedule it at the same time each day to build consistency.",
    howToTrack: "Use a fitness app or simple calendar. Focus on consistency rather than performance.",
    benefits: "Improved mood, increased energy, better cardiovascular health, and enhanced cognitive function."
  },
  {
    id: 7,
    title: "Mindful Eating",
    description: "Transform your relationship with food through present-moment awareness",
    howToGain: "For one meal a day, eat without distractions. Notice flavors, textures, and your body's hunger signals.",
    howToTrack: "Rate your attentiveness from 1-10 after each mindful meal. Note insights in a journal.",
    benefits: "Better digestion, natural portion control, increased enjoyment of food, and healthier food choices."
  },
  {
    id: 8,
    title: "Creative Expression",
    description: "Nurture your imagination through regular creative practice",
    howToGain: "Set aside 15 minutes daily for any creative activity: drawing, writing, music, etc. Focus on the process, not the result.",
    howToTrack: "Keep a portfolio or journal of your creations, even if they're simple or unfinished.",
    benefits: "Reduced stress, enhanced problem-solving skills, improved emotional processing, and greater self-discovery."
  }
];
