# 🎵 MoodBeats - AI Music Generator

**An AI-powered web application that generates unique music tracks based on mood, genre, tempo, and style preferences.**

## 🌟 Features

### Core Features
- **AI-Powered Melody Generation**: Uses Markov Chain algorithm for probabilistic note selection
- **Multi-Track Composition**: Automatically generates melody, bass, and drum tracks
- **4 Moods**: Happy, Sad, Energetic, Calm - each with unique musical scales
- **4 Genres**: Pop, Rock, Jazz, Electronic - different instrument presets
- **Adjustable Tempo**: 60-180 BPM slider for speed control
- **2 Styles**: Simple (clean) or Complex (rich rhythmic variation)
- **AI-Generated Lyrics**: Mood-based lyric templates
- **Instant Audio**: Real-time MIDI to WAV conversion
- **Download Ready**: Save tracks as .wav files

### Technical Highlights
- FastAPI backend for high performance
- MIDI synthesis with midiutil
- FluidSynth audio rendering
- Responsive modern UI with animations
- Audio visualizer bars
- Dark theme with gradient design

---

## 🚀 Quick Start Guide

### Prerequisites
1. **Python 3.8+** installed ([Download Python](https://www.python.org/downloads/))
2. **FluidSynth** installed on your system
3. **SoundFont file** (.sf2) - for audio synthesis

### Installation Steps

#### Step 1: Download FluidSynth

**For Windows:**
1. Download from [FluidSynth GitHub](https://github.com/FluidSynth/fluidsynth/releases)
2. Extract and add to PATH

**For Mac:**
```bash
brew install fluid-synth
```

**For Linux:**
```bash
sudo apt-get install fluidsynth
```

#### Step 2: Get a SoundFont File

Download a General MIDI SoundFont (.sf2 file):
- [FluidR3_GM.sf2](http://www.musescore.org/download/fluid-soundfont.tar.gz)
- Or search "free general midi soundfont download"

Place the `soundfont.sf2` file in the project root directory.

#### Step 3: Install Python Packages

Open terminal/command prompt in project folder:

```bash
pip install -r requirements.txt
```

#### Step 4: Run the Application

```bash
uvicorn main:app --reload
```

The app will start at: **http://127.0.0.1:8000**

---

## 📖 How to Use

1. **Open your browser** and go to `http://127.0.0.1:8000`
2. **Select Mood** (Happy, Sad, Energetic, or Calm)
3. **Choose Genre** (Pop, Rock, Jazz, or Electronic)
4. **Adjust Tempo** (60-180 BPM using slider)
5. **Pick Style** (Simple or Complex)
6. **Click "Generate My Track"**
7. **Listen** to your AI-generated music
8. **Read** the AI-generated lyrics
9. **Download** your track or generate another!

---

## 🎯 Project Structure

```
genai-hackathon-project/
│
├── main.py                 # FastAPI backend & AI logic
├── requirements.txt        # Python dependencies
├── soundfont.sf2          # SoundFont file (you need to add this)
│
├── templates/
│   ├── index.html         # Homepage with form
│   └── result.html        # Results page with player
│
├── static/
│   ├── style.css          # Modern UI styling
│   └── output/            # Generated audio files (auto-created)
│
└── README.md              # This file
```

---

## 🎼 How It Works

### 1. Markov Chain Melody Generation
```python
# Each note probabilistically leads to the next
# Closer notes in the scale have higher probability
melody = markov_melody(scale, num_notes=16)
```

### 2. Mood → Scale Mapping
- **Happy**: C Major (bright, uplifting)
- **Sad**: C Minor (melancholic, emotional)
- **Energetic**: C Whole Tone (tense, dynamic)
- **Calm**: C Pentatonic (peaceful, simple)

### 3. Multi-Track MIDI Creation
- **Track 0**: Melody (genre-specific instrument)
- **Track 1**: Bass (one octave lower)
- **Track 2**: Drums (kick & snare pattern)

### 4. Audio Synthesis
FluidSynth converts MIDI → WAV using the SoundFont

---

## 🏆 Why This Wins Hackathons

### Innovation
✅ Combines multiple AI concepts (Markov Chains, generative music)  
✅ Adds AI lyrics generation (unique feature)  
✅ Real-time music synthesis  

### Technical Excellence
✅ Clean, well-documented code  
✅ Proper architecture (FastAPI, MVC pattern)  
✅ Multi-track audio generation  

### User Experience
✅ Beautiful, modern UI with animations  
✅ Audio visualizer for engagement  
✅ Instant results (< 5 seconds)  
✅ Download functionality  

### Presentation Ready
✅ Live demo capability  
✅ Technical depth to explain  
✅ Clear value proposition  

---

## 🎨 Customization Ideas

Want to make it even better? Try adding:

1. **More Moods**: Mysterious, Romantic, Angry
2. **More Genres**: Hip-Hop, Classical, Country
3. **Custom Instruments**: Let users select specific instruments
4. **Longer Tracks**: Generate 30-60 second compositions
5. **Export Formats**: Add MP3, OGG export
6. **User Accounts**: Save favorite tracks
7. **Social Sharing**: Share tracks on social media
8. **Advanced AI**: Use neural networks (RNN, LSTM) for melody

---

## 🐛 Troubleshooting

### "FluidSynth not found"
- Make sure FluidSynth is installed and in your PATH
- Try reinstalling: `pip install pyfluidsynth --force-reinstall`

### "SoundFont file not found"
- Make sure `soundfont.sf2` is in the project root
- Check the path in `main.py` (line 30)

### "Module not found" errors
- Run: `pip install -r requirements.txt --upgrade`

### Audio not playing
- Check browser compatibility (Chrome/Firefox recommended)
- Ensure WAV files are being generated in `static/output/`

---

## 📊 Demo for Judges

### 30-Second Pitch
"MoodBeats is an AI music generator that creates unique tracks in seconds. Using Markov Chain algorithms and multi-track MIDI synthesis, it combines your mood and genre preferences into original compositions complete with AI-generated lyrics."

### Live Demo Script
1. Show homepage → explain UI/UX design choices
2. Generate "Happy + Pop" track → let it play
3. Show AI-generated lyrics
4. Generate "Sad + Jazz" track → demonstrate variety
5. Explain technical architecture (show code briefly)
6. Download and play track in media player

### Technical Deep-Dive
- Explain Markov Chain algorithm with diagram
- Show mood → scale mappings
- Demonstrate multi-track MIDI structure
- Walk through FluidSynth synthesis pipeline

---

## 🎓 Learning Outcomes

By building this project, you learned:
- ✅ FastAPI web framework
- ✅ Music theory basics (scales, tempo, rhythm)
- ✅ MIDI file structure and creation
- ✅ Audio synthesis with FluidSynth
- ✅ Markov Chain algorithms
- ✅ Frontend development (HTML/CSS/JS)
- ✅ File handling and downloads
- ✅ Project structure and organization

---

## 📝 License

This project is created for educational purposes for hackathon participation.

---

## 🤝 Credits

Built with:
- FastAPI (Python web framework)
- midiutil (MIDI file creation)
- FluidSynth (Audio synthesis)
- Modern CSS & JavaScript

---

## 🚀 Next Steps

1. **Test thoroughly** - Generate 10+ tracks with different settings
2. **Practice your demo** - Time yourself, aim for 3-5 minutes
3. **Prepare slides** - Use the included presentation template
4. **Know your code** - Be ready to explain any part
5. **Have fun!** - Confidence is key 😊

**Good luck with your hackathon! 🎉**
