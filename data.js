/* Healloo — mock data. No backend; everything here is fake sample content. */
window.HEALLOO = {
  user: {
    name: "Madelyn Dias",
    gems: { diamond: 0, star: 2, sapphire: 0 }
  },

  program: {
    title: "Renew Spirits",
    subtitle: "Personal program created by AI",
    tasksDone: 8,
    goalTasks: 40,
    parts: [
      { id: 1, name: "Part One",   done: 8, total: 10, locked: false },
      { id: 2, name: "Part Two",   done: 0, total: 10, locked: true },
      { id: 3, name: "Part Three", done: 0, total: 10, locked: true },
      { id: 4, name: "Part Four",  done: 0, total: 10, locked: true }
    ]
  },

  /* Part One task deck */
  tasks: [
    { n: 1,  done: true,  text: "Take a 20-minute walk outside and note the sights, sounds, and smells you experience", hint: "Leave the headphones at home. The point is the noticing, not the distance." },
    { n: 2,  done: true,  text: "Call an old friend and catch up with them", hint: "Ten minutes counts. You do not have to explain everything that happened." },
    { n: 3,  done: true,  text: "Cook or bake something new by trying out a recipe you've never made before", hint: "Something with a smell. Kitchens are good at pulling you into the present." },
    { n: 4,  done: true,  text: "Write a letter to a friend or family member you haven't spoken to in a while", hint: "You can send it or keep it. Both versions do the work." },
    { n: 5,  done: false, text: "Put music from a happy period of your life, and just dance!", hint: "This could evoke positive memories and boost your mood during the challenging time." },
    { n: 6,  done: true,  text: "Write 5 good things that happened to you today", hint: "Small ones count double. The coffee, the light, the seat on the train." },
    { n: 7,  done: true,  text: "Make a playlist of songs that make you feel strong", hint: "Build it for the version of you six months from now." },
    { n: 8,  done: true,  text: "Tidy one small corner of your home and notice how it feels", hint: "One corner. Not the whole room — that is a different task." },
    { n: 9,  done: false, text: "Watch the sunset without your phone", hint: "Leave it inside, face down. Twenty minutes." },
    { n: 10, done: true,  text: "Write down one thing you're proud of this week", hint: "It does not have to be big to be true." }
  ],

  /* Home carousel */
  cards: [
    { key: "tasks", theme: "tasks", kind: "progress",
      cta: "Tasks", link: "Go to The Details", go: "program" },
    { key: "diary", theme: "diary", title: "Your Diary",
      desc: "Capture thoughts and experiences. Organize entries. Reflect on progress and personal growth",
      icon: "pencil", cta: "Write a Page", link: "Go To The Diary", go: "moodsheet" },
    { key: "mood", theme: "mood", title: "Mood Tracking",
      desc: "Logs emotions daily. Identifies patterns. Supports well-being and self-awareness",
      icon: "smile", cta: "Track Your Mood", link: "Go To Mood Gantt", go: "diary" },
    { key: "sos", theme: "sos", title: "Sos Button",
      desc: "Immediate emotional support during breakups. Connects to helpful resources",
      icon: "smile", cta: "Get Help", link: "Go To Support", go: "sos" }
  ],

  vod: [
    { title: "Meditation", tag: "Meditation", icon: "leaf", locked: false, len: "12 min", art: "mist" },
    { title: "Podcast",    tag: "Podcast",    icon: "mic",  locked: true,  len: "38 min", art: "dusk" },
    { title: "Breathwork", tag: "Meditation", icon: "leaf", locked: false, len: "8 min",  art: "sea" },
    { title: "Sleep Story", tag: "Podcast",   icon: "mic",  locked: true,  len: "25 min", art: "night" }
  ],

  moods: [
    { key: "okay",     label: "Okay",     emoji: "🙂", tone: "good" },
    { key: "gratful",  label: "Gratful",  emoji: "🙏", tone: "good" },
    { key: "great",    label: "Great",    emoji: "😀", tone: "good" },
    { key: "sad",      label: "Sad",      emoji: "😞", tone: "low" },
    { key: "stressed", label: "Stressed", emoji: "😣", tone: "low" },
    { key: "anxious",  label: "Anxious",  emoji: "😰", tone: "low" },
    { key: "annoyed",  label: "Annoyed",  emoji: "😒", tone: "hot" },
    { key: "angry",    label: "Angry",    emoji: "😠", tone: "hot" },
    { key: "furious",  label: "Furious",  emoji: "😡", tone: "hot" }
  ],

  entries: [
    { day: 1,  mood: "anxious",  time: "1 Somptember, 2024, 20:10", title: "So sad",
      note: "He drove past the street tonight and I felt it in my chest before I understood why." },
    { day: 4,  mood: "great",    time: "4 September, 2024, 09:12", title: "Danced in the kitchen",
      note: "Played the 2016 playlist. Burned the eggs. Worth it." },
    { day: 8,  mood: "stressed", time: "8 September, 2024, 22:40", title: "Long day",
      note: "Too many meetings, not enough water. Walked home the long way." },
    { day: 12, mood: "okay",     time: "12 September, 2024, 18:05", title: "Level",
      note: "Nothing happened today and that was fine." },
    { day: 17, mood: "gratful",  time: "17 September, 2024, 07:50", title: "Coffee with Noa",
      note: "She remembered the thing I told her in March." }
  ],

  /* Profile → Statistic, weekly */
  stats: {
    range: "Weekly",
    bars: [
      { label: "3/10", value: 0 },
      { label: "4/10", value: 100 },
      { label: "5/10", value: 25 },
      { label: "6/10", value: 0 },
      { label: "7/10", value: 0 },
      { label: "8/10", value: 70 },
      { label: "9/10", value: 0 }
    ]
  },

  levels: [
    { name: "First Steps",   sub: "Finish 5 tasks",           got: true },
    { name: "Seven Days",    sub: "A week of mood entries",   got: true },
    { name: "Open Book",     sub: "Write 10 diary pages",     got: false },
    { name: "Renew Spirits", sub: "Finish all 40 tasks",      got: false }
  ],

  sos: [
    { emoji: "✏️", text: "Give me a task that will take my mind off" },
    { emoji: "🙇", text: "Tell me why I shouldn't go back" },
    { emoji: "😐", text: "I'm about to text him/her" },
    { emoji: "💔", text: "I feel lost, I need some hope" },
    { emoji: "😃", text: "I just need to laugh, tell me a joke" },
    { emoji: "🗣️", text: "I just need to talk with someone" }
  ],

  helper: {
    headline: "I really understand the pain...",
    sub: "Lets see if a HEALLOO community member is connected...",
    name: "Alina Sccoth",
    role: "Psychotherapis"
  },

  aiPrompts: [
    "What is one thing you handled today that past-you would have avoided?",
    "Describe the room you are in using only sounds.",
    "Write the sentence you wish someone would say to you right now.",
    "What did you miss today — the person, or the routine?"
  ]
};

/* ---- VOD paid content ---- */
window.HEALLOO.courses = [
  {
    brand: "SONIC YOGI", days: "12 Days",
    title: "Self Esteem & Confidence Building Programs",
    body: [
      "Throughout this 12-day course we will look at the origins of unconscious (chronic) stress and how it may affect the rhythms and cycles of the body. We will look at how to encourage the rhythms of relaxation in the body and mind, as well as releasing stress and tension, using sound frequency and breath rhythms. We will also learn how these concepts may apply to meditation and awakening. This course will explore more about sound and frequency, in conjunction with conscious breathing, as a tool for releasing stress and accessing deeper states of meditation and relaxation.",
      "It will expand on some of the ideas from the previous course, \"Heal Through the Power of Sound and Frequency\", where we discussed some of the fundamentals of resonance, entrainment and the nervous system."
    ],
    price: "Lifetime access to all content: 2$"
  },
  {
    brand: "NIGHT HOURS", days: "9 Nights",
    title: "Sleeping Through the First Weeks",
    body: [
      "The first weeks after a separation break sleep in a particular way: you fall asleep fine and wake at four with the whole conversation replaying. This nine-night course treats that pattern directly, with wind-down sequences that start ninety minutes before bed rather than at the pillow.",
      "Each night pairs a short body scan with a written offload, so the thoughts that wake you have somewhere to go before the lights are off."
    ],
    price: "Lifetime access to all content: 2$"
  },
  {
    brand: "SONIC YOGI", days: "6 Days",
    title: "Breathwork for the Panic Moments",
    body: [
      "Six short sessions for the moments that arrive without warning — their name on a screen, a street you used to walk together, a song in a shop. Each session is under nine minutes and can be done sitting, standing or on a bus.",
      "You will learn the physiological sigh, extended exhale counting, and a grounding sequence you can run with your eyes open in public."
    ],
    price: "Lifetime access to all content: 2$"
  },
  {
    brand: "HEALLOO ORIGINALS", days: "5 Episodes",
    title: "The Story You Tell About the Breakup",
    body: [
      "Five conversations with people two years past the worst of it, on how the story they told themselves changed — and how changing it changed what they felt.",
      "Not advice. Just the version of it people only say out loud once enough time has passed."
    ],
    price: "Lifetime access to all content: 2$"
  }
];
window.HEALLOO.vod[0].course = 2;
window.HEALLOO.vod[1].course = 3;
window.HEALLOO.vod[2].course = 0;
window.HEALLOO.vod[3].course = 1;

/* ---- Community thread ---- */
window.HEALLOO.thread = {
  title: "Tread",
  post: {
    author: "Hanna Natali", active: true, ago: "7 h ago", art: "bloom",
    text: "I focused on self-care and spent time with supportive friends and family. It helped me heal and move forward.",
    likes: 12
  },
  replies: [
    { author: "Jasmin Petrichenko", ago: "5 h ago", likes: 12,
      text: "I sought therapy to process my emotions and gain a new perspective on the relationship and myself. It was a game-changer for me.",
      mention: "@Jasmin Petrichenko" },
    { author: "Anita O", ago: "5 h ago", likes: 4,
      text: "Deleted the photos into an archive folder instead of the bin. Knowing they exist somewhere made it possible to stop looking at them." },
    { author: "Mor Levi", ago: "3 h ago", likes: 7,
      text: "Ran the same loop every morning for a month. Did not fix anything, but it gave the day a shape when nothing else had one." }
  ]
};
