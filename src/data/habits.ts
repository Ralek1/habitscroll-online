
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
  },
  {
    "id": 9,
    "title": "Evening Reflection",
    "description": "End your day with intentional thought and self-awareness",
    "howToGain": "Spend 5-10 minutes before bed reflecting on what went well and what could improve. Use a journal if helpful.",
    "perfectFor": "Deep thinkers and those seeking personal growth. Great for anyone wanting to improve self-awareness and sleep better.",
    "benefits": "Improved emotional regulation, better sleep, personal insight, and more thoughtful daily decisions."
  },
  {
    "id": 10,
    "title": "Digital Declutter",
    "description": "Create a calmer digital space by reducing unnecessary noise",
    "howToGain": "Unsubscribe from unused newsletters, organize files, delete apps you don’t use. Start with one area per week.",
    "perfectFor": "Overwhelmed multitaskers and digital minimalists. Perfect for those seeking focus in a cluttered world.",
    "benefits": "Increased focus, lower stress, easier navigation of your digital life, and a sense of control."
  },
  {
    "id": 11,
    "title": "Stretching Ritual",
    "description": "Keep your body agile and pain-free through daily stretching",
    "howToGain": "Start with 5 minutes each morning or evening focusing on tight areas. Follow a simple routine or video.",
    "perfectFor": "Desk workers, athletes, and anyone wanting more mobility. Great for those experiencing stiffness or minor aches.",
    "benefits": "Improved flexibility, reduced injury risk, better posture, and enhanced relaxation."
  },
  {
    "id": 12,
    "title": "One Act of Kindness",
    "description": "Bring positivity into your life by giving it to others",
    "howToGain": "Perform one small kind act daily: a compliment, holding the door, or a helpful message.",
    "perfectFor": "Empathetic people who want to lift others. Ideal for those looking to build stronger social connections.",
    "benefits": "Boosted mood, improved relationships, stronger sense of purpose, and ripple effects of positivity."
  },
  {
    "id": 13,
    "title": "Nature Connection",
    "description": "Reground yourself by spending time outside every day",
    "howToGain": "Take a 10-minute walk in nature or sit quietly outside. Leave your phone behind if possible.",
    "perfectFor": "Urban dwellers and nature lovers alike. Great for those seeking peace and clarity away from screens.",
    "benefits": "Reduced anxiety, better mood, improved creativity, and stronger immune system."
  },
  {
    "id": 14,
    "title": "Financial Check-In",
    "description": "Build financial awareness by reviewing your money daily",
    "howToGain": "Spend 5 minutes each day tracking your spending, budgeting, or reviewing goals.",
    "perfectFor": "Budgeters, entrepreneurs, and anyone aiming to improve financial health.",
    "benefits": "More control over money, reduced financial stress, smarter spending, and clearer savings goals."
  },
  {
    "id": 15,
    "title": "Early Wake-Up",
    "description": "Win the morning and take back your time",
    "howToGain": "Shift your wake-up time gradually by 15 minutes. Use the extra time intentionally, not for your phone.",
    "perfectFor": "Busy professionals and morning seekers who want more control over their day.",
    "benefits": "More productivity, increased energy, better morning routine, and stronger discipline."
  },
  {
    "id": 16,
    "title": "Breath Awareness",
    "description": "Calm your mind by focusing on your breath",
    "howToGain": "Take 3-5 deep breaths during transitions throughout your day. Anchor your focus in the present.",
    "perfectFor": "Anyone dealing with stress or anxiety. Great for those new to mindfulness or seeking quick calm.",
    "benefits": "Lowered stress, increased calm, better decision-making, and improved emotional control."
  },
  {
    "id": 17,
    "title": "Declutter One Item",
    "description": "Simplify your environment by removing one thing daily",
    "howToGain": "Each day, find one item to donate, throw away, or relocate. Focus on things you no longer need.",
    "perfectFor": "Minimalists and clarity-seekers. Great for overwhelmed individuals who don’t know where to start.",
    "benefits": "Less mess, more clarity, a feeling of progress, and better use of your space."
  },
  {
    "id": 18,
    "title": "Power Down Ritual",
    "description": "End your day with a calming wind-down routine",
    "howToGain": "Create a 30-minute buffer before sleep: dim lights, no screens, light reading, or soft music.",
    "perfectFor": "Night owls and restless sleepers. Ideal for those who struggle to fall asleep or unwind.",
    "benefits": "Improved sleep quality, reduced overthinking, more relaxed evenings, and healthier sleep cycles."
  },{
    "id": 19,
    "title": "Cold Shower Challenge",
    "description": "Boost your resilience and energy through cold exposure",
    "howToGain": "Start with 30 seconds of cold water at the end of your regular shower. Gradually extend the time.",
    "perfectFor": "Adventurous minds, biohackers, and anyone looking for a natural energy boost.",
    "benefits": "Increased alertness, stronger immune system, enhanced discipline, and improved circulation."
  },
  {
    "id": 20,
    "title": "No Snooze Rule",
    "description": "Train your discipline by rising as soon as your alarm rings",
    "howToGain": "Place your alarm across the room. Commit to standing up and not lying back down.",
    "perfectFor": "Late risers and productivity enthusiasts. Ideal for those looking to win back their mornings.",
    "benefits": "Stronger willpower, more energy in the morning, better time management, and improved sleep rhythm."
  },
  {
    "id": 21,
    "title": "One Big Task",
    "description": "Focus your energy on one important task every day",
    "howToGain": "Each morning, define the one task that would make the day a success. Prioritize it.",
    "perfectFor": "Goal-driven individuals and productivity seekers. Great for those prone to multitasking or procrastination.",
    "benefits": "Increased clarity, greater productivity, reduced overwhelm, and a sense of accomplishment."
  },
  {
    "id": 22,
    "title": "Phone-Free Mornings",
    "description": "Reclaim your mental space by avoiding your phone after waking",
    "howToGain": "Avoid checking your phone for the first 30–60 minutes of your day. Use an analog alarm if needed.",
    "perfectFor": "Focus-driven individuals and mindful morning builders. Great for anyone feeling digitally overwhelmed.",
    "benefits": "More focus, reduced anxiety, stronger morning routine, and improved presence."
  },
  {
    "id": 23,
    "title": "Compliment Someone",
    "description": "Strengthen connections with daily positive reinforcement",
    "howToGain": "Give one sincere compliment each day—spoken, written, or online. Be specific and authentic.",
    "perfectFor": "People-focused individuals and community builders. Great for introverts working on social confidence.",
    "benefits": "Improved relationships, more positivity, enhanced social confidence, and mutual happiness."
  },
  {
    "id": 24,
    "title": "15-Minute Walk",
    "description": "Boost your mental and physical health through short daily walks",
    "howToGain": "Commit to 15 minutes of walking—morning, lunch break, or evening. Go phone-free if possible.",
    "perfectFor": "Busy professionals and health-conscious individuals. Great for those who sit for long hours.",
    "benefits": "Improved mood, reduced stress, better digestion, and increased daily energy."
  },
  {
    "id": 25,
    "title": "Learn One New Thing",
    "description": "Grow your knowledge base with daily micro-learning",
    "howToGain": "Watch a 5-minute video, read an article, or listen to a short podcast each day on a new topic.",
    "perfectFor": "Lifelong learners and curious minds. Perfect for anyone with limited time and big ambitions.",
    "benefits": "Enhanced memory, broader perspective, increased creativity, and daily growth momentum."
  },
  {
    "id": 26,
    "title": "Digital Sunset",
    "description": "Disconnect in the evening for better rest and presence",
    "howToGain": "Turn off screens 1 hour before bed. Replace screen time with calming habits like reading or journaling.",
    "perfectFor": "Overstimulated minds and poor sleepers. Great for those wanting better evening habits.",
    "benefits": "Improved sleep, reduced blue light exposure, better evening focus, and reduced restlessness."
  },
  {
    "id": 27,
    "title": "Weekly Planning",
    "description": "Set intentions and organize your life every week",
    "howToGain": "Every Sunday, review your calendar, goals, and priorities. Plan the top 3 for each day.",
    "perfectFor": "Organizers, planners, and those looking to reduce chaos. Great for overwhelmed multitaskers.",
    "benefits": "More clarity, reduced stress, better productivity, and stronger follow-through."
  },
  {
    "id": 28,
    "title": "Say No Gracefully",
    "description": "Protect your time and energy by setting healthy boundaries",
    "howToGain": "Practice saying ‘no’ to one unnecessary request each week. Be polite but firm.",
    "perfectFor": "People pleasers and burnt-out professionals. Great for those regaining control over their schedule.",
    "benefits": "More time, stronger self-respect, less stress, and healthier relationships."
  }
];
