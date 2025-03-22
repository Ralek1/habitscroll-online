
export interface Habit {
  id: number;
  title: string;
  description: string;
  howToGain: string;
  perfectFor: string;
  benefits: string;
}

export const habits: Habit[] = [
  {
    id: 1,
    title: "Morning Meditation",
    description: "Start your day with a clear mind through mindful meditation",
    howToGain: "Begin with just 2 minutes each morning before checking your phone. Gradually increase to 10-15 minutes as it becomes comfortable.",
    perfectFor: "Mindful individuals who seek mental clarity and emotional balance. Ideal for those who want to start their day with intention rather than reaction.",
    benefits: "Reduced stress, improved focus, better emotional regulation, and enhanced self-awareness over time."
  },
  {
    id: 2,
    title: "Daily Reading",
    description: "Feed your mind with knowledge through consistent reading",
    howToGain: "Set aside 20 minutes daily. Start with books that genuinely interest you to build momentum.",
    perfectFor: "Lifelong learners and curious minds who value knowledge acquisition. Great for those who want to expand their perspectives and grow intellectually.",
    benefits: "Expanded vocabulary, improved concentration, greater knowledge base, and enhanced cognitive function."
  },
  {
    id: 3,
    title: "Hydration Habit",
    description: "Transform your health by properly hydrating throughout the day",
    howToGain: "Start your morning with a full glass of water. Keep a water bottle visible at all times. Set reminders if needed.",
    perfectFor: "Health-conscious individuals who want a simple yet effective way to improve their wellbeing. Ideal for busy people who often forget to drink enough water.",
    benefits: "Improved energy levels, better skin health, enhanced cognitive function, and proper organ function."
  },
  {
    id: 4,
    title: "Gratitude Practice",
    description: "Cultivate joy by acknowledging the good in your life",
    howToGain: "Every evening, write down three things you're grateful for. Be specific and try not to repeat items.",
    perfectFor: "Optimistic souls who want to train their minds to focus on the positive. Great for those struggling with negative thought patterns or seeking more joy in life.",
    benefits: "Increased happiness, reduced depression, better sleep quality, and stronger resilience to stress."
  },
  {
    id: 5,
    title: "Tech-Free Time",
    description: "Reclaim your attention through daily digital detox periods",
    howToGain: "Designate 30-60 minutes each day where all screens are put away. Start with dinner time or before bed.",
    perfectFor: "Digital natives who feel overwhelmed by constant connectivity. Ideal for those who want to be more present in their relationships and personal time.",
    benefits: "Reduced anxiety, improved real-life connections, better sleep, and increased mindfulness."
  },
  {
    id: 6,
    title: "Daily Movement",
    description: "Energize your body with consistent physical activity",
    howToGain: "Start with just 5 minutes of any movement you enjoy. Schedule it at the same time each day to build consistency.",
    perfectFor: "Energy-seekers who want to feel more alive and vibrant. Great for desk workers, busy professionals, or anyone who tends to be sedentary.",
    benefits: "Improved mood, increased energy, better cardiovascular health, and enhanced cognitive function."
  },
  {
    id: 7,
    title: "Mindful Eating",
    description: "Transform your relationship with food through present-moment awareness",
    howToGain: "For one meal a day, eat without distractions. Notice flavors, textures, and your body's hunger signals.",
    perfectFor: "Sensory appreciators who want to enjoy their food more deeply. Ideal for fast eaters, emotional eaters, or those who eat while distracted.",
    benefits: "Better digestion, natural portion control, increased enjoyment of food, and healthier food choices."
  },
  {
    id: 8,
    title: "Creative Expression",
    description: "Nurture your imagination through regular creative practice",
    howToGain: "Set aside 15 minutes daily for any creative activity: drawing, writing, music, etc. Focus on the process, not the result.",
    perfectFor: "Expressive souls who need an outlet for their thoughts and emotions. Great for analytical thinkers looking to balance their logical side with creativity.",
    benefits: "Reduced stress, enhanced problem-solving skills, improved emotional processing, and greater self-discovery."
  }
];
