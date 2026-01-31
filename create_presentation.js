const pptxgen = require("pptxgenjs");

let pres = new pptxgen();
pres.layout = 'LAYOUT_16x9';
pres.author = 'Hackathon Team';
pres.title = 'MoodBeats - AI Music Generator';

// Color Palette (Teal Trust theme)
const colors = {
  primary: "028090",    // Teal
  secondary: "00A896",  // Seafoam
  accent: "02C39A",     // Mint
  dark: "212121",       // Black
  light: "F2F2F2",      // Off-white
  white: "FFFFFF"
};

// ============================================
// SLIDE 1: TITLE SLIDE
// ============================================
let slide1 = pres.addSlide();
slide1.background = { color: colors.primary };

slide1.addText("MoodBeats", {
  x: 0.5, y: 1.5, w: 9, h: 1,
  fontSize: 60, bold: true, color: colors.white,
  align: "center"
});

slide1.addText("🎵", {
  x: 4.5, y: 0.7, w: 1, h: 0.8,
  fontSize: 80
});

slide1.addText("AI-Powered Music Generator", {
  x: 0.5, y: 2.8, w: 9, h: 0.6,
  fontSize: 28, color: colors.light,
  align: "center"
});

slide1.addText("Generate Unique Music Tracks with Artificial Intelligence", {
  x: 0.5, y: 3.5, w: 9, h: 0.5,
  fontSize: 18, color: colors.light,
  align: "center", italic: true
});

// ============================================
// SLIDE 2: THE PROBLEM
// ============================================
let slide2 = pres.addSlide();
slide2.background = { color: colors.white };

slide2.addText("The Problem", {
  x: 0.5, y: 0.4, w: 9, h: 0.6,
  fontSize: 44, bold: true, color: colors.primary
});

slide2.addShape(pres.shapes.LINE, {
  x: 0.5, y: 1.1, w: 2, h: 0,
  line: { color: colors.accent, width: 4 }
});

const problems = [
  { emoji: "💰", title: "Expensive", desc: "Music production costs thousands of dollars" },
  { emoji: "⏰", title: "Time-Consuming", desc: "Creating tracks takes weeks or months" },
  { emoji: "🎓", title: "Requires Expertise", desc: "Need years of musical training" },
  { emoji: "🔒", title: "Limited Options", desc: "Stock music lacks customization" }
];

let startY = 1.6;
problems.forEach((problem, index) => {
  const xPos = (index % 2) * 5 + 0.5;
  const yPos = startY + Math.floor(index / 2) * 1.5;
  
  slide2.addShape(pres.shapes.RECTANGLE, {
    x: xPos, y: yPos, w: 4.5, h: 1.2,
    fill: { color: colors.light }
  });
  
  slide2.addText(problem.emoji, {
    x: xPos + 0.3, y: yPos + 0.1, w: 0.8, h: 0.8,
    fontSize: 48
  });
  
  slide2.addText(problem.title, {
    x: xPos + 1.2, y: yPos + 0.2, w: 3, h: 0.4,
    fontSize: 20, bold: true, color: colors.dark
  });
  
  slide2.addText(problem.desc, {
    x: xPos + 1.2, y: yPos + 0.6, w: 3, h: 0.4,
    fontSize: 14, color: "666666"
  });
});

// ============================================
// SLIDE 3: THE SOLUTION
// ============================================
let slide3 = pres.addSlide();
slide3.background = { color: colors.white };

slide3.addText("Our Solution", {
  x: 0.5, y: 0.4, w: 9, h: 0.6,
  fontSize: 44, bold: true, color: colors.primary
});

slide3.addShape(pres.shapes.LINE, {
  x: 0.5, y: 1.1, w: 2.5, h: 0,
  line: { color: colors.accent, width: 4 }
});

slide3.addShape(pres.shapes.RECTANGLE, {
  x: 0.5, y: 1.6, w: 9, h: 2.8,
  fill: { color: colors.primary }
});

slide3.addText([
  { text: "MoodBeats uses ", options: { color: colors.white, fontSize: 24 } },
  { text: "AI algorithms", options: { color: colors.accent, fontSize: 24, bold: true } },
  { text: " to generate custom music tracks in ", options: { color: colors.white, fontSize: 24 } },
  { text: "seconds", options: { color: colors.accent, fontSize: 24, bold: true } },
  { text: ".", options: { color: colors.white, fontSize: 24 } }
], {
  x: 1, y: 2, w: 8, h: 1,
  align: "center", valign: "middle"
});

slide3.addText("Users select mood, genre, tempo, and style — our AI does the rest.", {
  x: 1, y: 3, w: 8, h: 0.6,
  fontSize: 18, color: colors.light,
  align: "center", italic: true
});

// ============================================
// SLIDE 4: KEY FEATURES
// ============================================
let slide4 = pres.addSlide();
slide4.background = { color: colors.white };

slide4.addText("Key Features", {
  x: 0.5, y: 0.4, w: 9, h: 0.6,
  fontSize: 44, bold: true, color: colors.primary
});

slide4.addShape(pres.shapes.LINE, {
  x: 0.5, y: 1.1, w: 2.3, h: 0,
  line: { color: colors.accent, width: 4 }
});

const features = [
  { icon: "🤖", title: "AI-Powered", desc: "Markov Chain melody generation" },
  { icon: "🎼", title: "Multi-Track", desc: "Melody, bass, and drums" },
  { icon: "🎭", title: "4 Moods", desc: "Happy, Sad, Energetic, Calm" },
  { icon: "🎸", title: "4 Genres", desc: "Pop, Rock, Jazz, Electronic" },
  { icon: "⏱️", title: "Adjustable Tempo", desc: "60-180 BPM control" },
  { icon: "✍️", title: "AI Lyrics", desc: "Mood-based lyric generation" }
];

startY = 1.6;
features.forEach((feature, index) => {
  const col = index % 3;
  const row = Math.floor(index / 3);
  const xPos = 0.5 + col * 3.2;
  const yPos = startY + row * 1.8;
  
  slide4.addShape(pres.shapes.OVAL, {
    x: xPos + 0.4, y: yPos, w: 0.8, h: 0.8,
    fill: { color: colors.secondary }
  });
  
  slide4.addText(feature.icon, {
    x: xPos + 0.45, y: yPos + 0.1, w: 0.7, h: 0.6,
    fontSize: 32, align: "center"
  });
  
  slide4.addText(feature.title, {
    x: xPos, y: yPos + 0.9, w: 2.8, h: 0.3,
    fontSize: 18, bold: true, color: colors.primary,
    align: "center"
  });
  
  slide4.addText(feature.desc, {
    x: xPos, y: yPos + 1.25, w: 2.8, h: 0.4,
    fontSize: 14, color: "666666",
    align: "center"
  });
});

// ============================================
// SLIDE 5: HOW IT WORKS
// ============================================
let slide5 = pres.addSlide();
slide5.background = { color: colors.white };

slide5.addText("How It Works", {
  x: 0.5, y: 0.4, w: 9, h: 0.6,
  fontSize: 44, bold: true, color: colors.primary
});

slide5.addShape(pres.shapes.LINE, {
  x: 0.5, y: 1.1, w: 2.6, h: 0,
  line: { color: colors.accent, width: 4 }
});

const steps = [
  { num: "1", title: "User Input", desc: "Select mood, genre, tempo, style" },
  { num: "2", title: "AI Generation", desc: "Markov Chain creates melody" },
  { num: "3", title: "Multi-Track", desc: "Add bass and drum layers" },
  { num: "4", title: "Synthesis", desc: "Convert MIDI to audio (WAV)" },
  { num: "5", title: "Download", desc: "User gets unique track" }
];

steps.forEach((step, index) => {
  const xPos = 0.5 + index * 1.9;
  const yPos = 1.8;
  
  // Number circle
  slide5.addShape(pres.shapes.OVAL, {
    x: xPos + 0.45, y: yPos, w: 0.6, h: 0.6,
    fill: { color: colors.primary }
  });
  
  slide5.addText(step.num, {
    x: xPos + 0.45, y: yPos, w: 0.6, h: 0.6,
    fontSize: 24, bold: true, color: colors.white,
    align: "center", valign: "middle"
  });
  
  // Step title
  slide5.addText(step.title, {
    x: xPos, y: yPos + 0.75, w: 1.5, h: 0.3,
    fontSize: 14, bold: true, color: colors.primary,
    align: "center"
  });
  
  // Step description
  slide5.addText(step.desc, {
    x: xPos, y: yPos + 1.05, w: 1.5, h: 0.6,
    fontSize: 11, color: "666666",
    align: "center"
  });
  
  // Arrow (except last)
  if (index < steps.length - 1) {
    slide5.addText("→", {
      x: xPos + 1.5, y: yPos + 0.2, w: 0.4, h: 0.4,
      fontSize: 32, color: colors.accent
    });
  }
});

// Technical note
slide5.addShape(pres.shapes.RECTANGLE, {
  x: 0.5, y: 4.2, w: 9, h: 0.8,
  fill: { color: colors.light }
});

slide5.addText("Built with: FastAPI (Python) • MIDI Synthesis • FluidSynth • Modern Web UI", {
  x: 1, y: 4.4, w: 8, h: 0.4,
  fontSize: 14, color: colors.dark,
  align: "center", italic: true
});

// ============================================
// SLIDE 6: TECHNICAL ARCHITECTURE
// ============================================
let slide6 = pres.addSlide();
slide6.background = { color: colors.white };

slide6.addText("Technical Architecture", {
  x: 0.5, y: 0.4, w: 9, h: 0.6,
  fontSize: 44, bold: true, color: colors.primary
});

slide6.addShape(pres.shapes.LINE, {
  x: 0.5, y: 1.1, w: 4, h: 0,
  line: { color: colors.accent, width: 4 }
});

// Architecture layers
const layers = [
  { title: "Frontend", items: ["HTML/CSS/JavaScript", "Responsive Design", "Audio Visualizer"], color: colors.secondary },
  { title: "Backend", items: ["FastAPI Framework", "Python Logic", "RESTful API"], color: colors.primary },
  { title: "AI Engine", items: ["Markov Chain Algorithm", "Scale Mapping", "Lyric Generator"], color: colors.accent },
  { title: "Audio", items: ["MIDI Generation", "FluidSynth Synthesis", "WAV Export"], color: "F59E0B" }
];

layers.forEach((layer, index) => {
  const xPos = 0.5 + index * 2.35;
  const yPos = 1.8;
  
  slide6.addShape(pres.shapes.RECTANGLE, {
    x: xPos, y: yPos, w: 2.15, h: 2.5,
    fill: { color: layer.color }
  });
  
  slide6.addText(layer.title, {
    x: xPos, y: yPos + 0.2, w: 2.15, h: 0.4,
    fontSize: 18, bold: true, color: colors.white,
    align: "center"
  });
  
  slide6.addShape(pres.shapes.LINE, {
    x: xPos + 0.2, y: yPos + 0.7, w: 1.75, h: 0,
    line: { color: colors.white, width: 2 }
  });
  
  const itemsText = layer.items.map((item, i) => ({
    text: item,
    options: { breakLine: i < layer.items.length - 1 }
  }));
  
  slide6.addText(itemsText, {
    x: xPos + 0.2, y: yPos + 0.9, w: 1.75, h: 1.4,
    fontSize: 12, color: colors.white,
    align: "center", valign: "top"
  });
});

// ============================================
// SLIDE 7: DEMO SCREENSHOTS
// ============================================
let slide7 = pres.addSlide();
slide7.background = { color: colors.white };

slide7.addText("User Interface", {
  x: 0.5, y: 0.4, w: 9, h: 0.6,
  fontSize: 44, bold: true, color: colors.primary
});

slide7.addShape(pres.shapes.LINE, {
  x: 0.5, y: 1.1, w: 2.5, h: 0,
  line: { color: colors.accent, width: 4 }
});

// Screenshot placeholders
slide7.addShape(pres.shapes.RECTANGLE, {
  x: 0.5, y: 1.6, w: 4.5, h: 3,
  fill: { color: colors.light },
  line: { color: colors.primary, width: 2 }
});

slide7.addText("Homepage\nUser selects mood, genre,\ntempo & style", {
  x: 0.5, y: 2.3, w: 4.5, h: 1.5,
  fontSize: 16, color: "666666",
  align: "center", valign: "middle"
});

slide7.addShape(pres.shapes.RECTANGLE, {
  x: 5.2, y: 1.6, w: 4.5, h: 3,
  fill: { color: colors.light },
  line: { color: colors.primary, width: 2 }
});

slide7.addText("Result Page\nAudio player + lyrics +\ndownload button", {
  x: 5.2, y: 2.3, w: 4.5, h: 1.5,
  fontSize: 16, color: "666666",
  align: "center", valign: "middle"
});

// ============================================
// SLIDE 8: MARKET POTENTIAL
// ============================================
let slide8 = pres.addSlide();
slide8.background = { color: colors.white };

slide8.addText("Market Potential", {
  x: 0.5, y: 0.4, w: 9, h: 0.6,
  fontSize: 44, bold: true, color: colors.primary
});

slide8.addShape(pres.shapes.LINE, {
  x: 0.5, y: 1.1, w: 3, h: 0,
  line: { color: colors.accent, width: 4 }
});

const markets = [
  { emoji: "🎬", title: "Content Creators", desc: "YouTubers, podcasters need royalty-free music" },
  { emoji: "🎮", title: "Game Developers", desc: "Indie game studios need affordable soundtracks" },
  { emoji: "🎪", title: "Event Planners", desc: "Quick custom tracks for weddings, parties" },
  { emoji: "📱", title: "App Developers", desc: "Background music for mobile apps" }
];

markets.forEach((market, index) => {
  const col = index % 2;
  const row = Math.floor(index / 2);
  const xPos = 0.5 + col * 5;
  const yPos = 1.8 + row * 1.5;
  
  slide8.addShape(pres.shapes.RECTANGLE, {
    x: xPos, y: yPos, w: 4.5, h: 1.2,
    fill: { color: colors.light }
  });
  
  slide8.addText(market.emoji, {
    x: xPos + 0.3, y: yPos + 0.15, w: 0.7, h: 0.7,
    fontSize: 40
  });
  
  slide8.addText(market.title, {
    x: xPos + 1.1, y: yPos + 0.2, w: 3.1, h: 0.3,
    fontSize: 18, bold: true, color: colors.primary
  });
  
  slide8.addText(market.desc, {
    x: xPos + 1.1, y: yPos + 0.6, w: 3.1, h: 0.4,
    fontSize: 13, color: "666666"
  });
});

// ============================================
// SLIDE 9: COMPETITIVE ADVANTAGE
// ============================================
let slide9 = pres.addSlide();
slide9.background = { color: colors.white };

slide9.addText("Why We Win", {
  x: 0.5, y: 0.4, w: 9, h: 0.6,
  fontSize: 44, bold: true, color: colors.primary
});

slide9.addShape(pres.shapes.LINE, {
  x: 0.5, y: 1.1, w: 2.2, h: 0,
  line: { color: colors.accent, width: 4 }
});

const advantages = [
  { title: "100% Original", desc: "No copyright issues, every track is unique", icon: "✨" },
  { title: "Instant Generation", desc: "Tracks ready in under 5 seconds", icon: "⚡" },
  { title: "Free to Use", desc: "No subscription or licensing fees", icon: "💝" },
  { title: "Easy to Use", desc: "No musical knowledge required", icon: "🎯" },
  { title: "Customizable", desc: "Full control over mood and style", icon: "🎨" },
  { title: "Open Source", desc: "Transparent AI, community-driven", icon: "🌍" }
];

advantages.forEach((adv, index) => {
  const col = index % 3;
  const row = Math.floor(index / 3);
  const xPos = 0.5 + col * 3.2;
  const yPos = 1.7 + row * 1.4;
  
  slide9.addShape(pres.shapes.RECTANGLE, {
    x: xPos, y: yPos, w: 3, h: 1.1,
    fill: { color: colors.primary }
  });
  
  slide9.addText(adv.icon, {
    x: xPos + 0.2, y: yPos + 0.15, w: 0.6, h: 0.6,
    fontSize: 32
  });
  
  slide9.addText(adv.title, {
    x: xPos + 0.9, y: yPos + 0.2, w: 2, h: 0.3,
    fontSize: 16, bold: true, color: colors.white
  });
  
  slide9.addText(adv.desc, {
    x: xPos + 0.9, y: yPos + 0.55, w: 2, h: 0.4,
    fontSize: 12, color: colors.light
  });
});

// ============================================
// SLIDE 10: THANK YOU / CALL TO ACTION
// ============================================
let slide10 = pres.addSlide();
slide10.background = { color: colors.primary };

slide10.addText("🎵", {
  x: 4.5, y: 1, w: 1, h: 0.8,
  fontSize: 80
});

slide10.addText("Thank You!", {
  x: 0.5, y: 2, w: 9, h: 0.8,
  fontSize: 48, bold: true, color: colors.white,
  align: "center"
});

slide10.addText("Let's Make Music with AI", {
  x: 0.5, y: 2.9, w: 9, h: 0.5,
  fontSize: 28, color: colors.light,
  align: "center"
});

slide10.addShape(pres.shapes.RECTANGLE, {
  x: 2, y: 3.8, w: 6, h: 0.8,
  fill: { color: colors.accent }
});

slide10.addText("Try MoodBeats Today!", {
  x: 2, y: 3.8, w: 6, h: 0.8,
  fontSize: 24, bold: true, color: colors.white,
  align: "center", valign: "middle"
});

// Generate the presentation
pres.writeFile({ fileName: "MoodBeats-Presentation.pptx" });
console.log("Presentation created successfully!");
