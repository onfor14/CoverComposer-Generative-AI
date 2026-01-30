"""
MoodBeats - AI Music Generator
Enhanced version with lyrics generation and advanced features
"""

from fastapi import FastAPI, Form, Request
from fastapi.responses import HTMLResponse, FileResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
from midiutil import MIDIFile
from midi2audio import FluidSynth
import os
import random
from datetime import datetime

# Initialize FastAPI app
app = FastAPI()

# Define paths
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
STATIC_DIR = os.path.join(BASE_DIR, "static")
TEMPLATE_DIR = os.path.join(BASE_DIR, "templates")
OUTPUT_FOLDER = os.path.join(STATIC_DIR, "output")

# Mount static files and templates
app.mount("/static", StaticFiles(directory=STATIC_DIR), name="static")
templates = Jinja2Templates(directory=TEMPLATE_DIR)

# Ensure output folder exists
os.makedirs(OUTPUT_FOLDER, exist_ok=True)

# SoundFont path (you'll need to provide this - download a free .sf2 file)
SOUNDFONT_PATH = os.path.join(BASE_DIR, "soundfont.sf2")

# ============================
# MUSIC GENERATION CONSTANTS
# ============================

# Map genres to MIDI instrument numbers
GENRE_INSTRUMENTS = {
    "Pop": 0,        # Acoustic Grand Piano
    "Rock": 30,      # Overdriven Guitar
    "Jazz": 32,      # Acoustic Bass
    "Electronic": 81 # Lead 2 (sawtooth)
}

# Map moods to musical scales
MOOD_SCALES = {
    "Happy": [60, 62, 64, 65, 67, 69, 71, 72],      # C Major
    "Sad": [60, 62, 63, 65, 67, 68, 70, 72],        # C Minor
    "Energetic": [60, 62, 64, 66, 67, 69, 71, 72],  # C Whole Tone
    "Calm": [60, 62, 64, 67, 69, 72]                # C Pentatonic
}

# Lyrics templates by mood
LYRICS_TEMPLATES = {
    "Happy": [
        "Dancing in the sunlight, feeling so free",
        "Every moment's brighter when you're with me",
        "Life is like a melody, sweet and true",
        "Happiness is all around, breaking through"
    ],
    "Sad": [
        "Tears fall like rain on empty streets",
        "Memories fade but the pain repeats",
        "Lonely nights and silent cries",
        "Wishing on stars in darkened skies"
    ],
    "Energetic": [
        "Can't stop, won't stop, feeling alive",
        "Electric energy, ready to dive",
        "Turn it up loud, feel the beat",
        "Moving so fast, can't be beat"
    ],
    "Calm": [
        "Breathing slow, finding peace within",
        "Gentle waves where dreams begin",
        "Quiet moments, soft and still",
        "Peace and calm, time to heal"
    ]
}

# ============================
# AI MUSIC GENERATION LOGIC
# ============================

def markov_melody(scale, num_notes=16):
    """
    Generate melody using Markov Chain approach
    Each note probabilistically leads to the next
    """
    melody = [random.choice(scale)]
    
    for _ in range(num_notes - 1):
        current = melody[-1]
        current_idx = scale.index(current)
        
        # Create weighted probabilities for next note
        weights = []
        for i, note in enumerate(scale):
            distance = abs(i - current_idx)
            # Prefer notes closer to current note
            weight = max(1, 5 - distance)
            weights.append(weight)
        
        # Choose next note based on weights
        next_note = random.choices(scale, weights=weights)[0]
        melody.append(next_note)
    
    return melody

def stylize_notes(melody, tempo, style):
    """
    Add rhythm and dynamics based on style
    """
    styled = []
    
    for note in melody:
        if style == "Simple":
            duration = 1.0  # Quarter notes
            velocity = 80   # Medium volume
        else:  # Complex
            duration = random.choice([0.5, 1.0, 1.5, 2.0])
            velocity = random.randint(60, 100)
        
        styled.append({
            "note": note,
            "duration": duration,
            "velocity": velocity
        })
    
    return styled

def generate_notes_by_mood(mood, num_notes=16):
    """
    Generate notes based on selected mood
    """
    scale = MOOD_SCALES.get(mood, MOOD_SCALES["Happy"])
    return markov_melody(scale, num_notes)

def generate_lyrics(mood, num_lines=4):
    """
    Generate simple lyrics based on mood
    """
    templates = LYRICS_TEMPLATES.get(mood, LYRICS_TEMPLATES["Happy"])
    return random.sample(templates, min(num_lines, len(templates)))

def create_midi_with_tracks(filepath, melody_notes, genre, tempo):
    """
    Create multi-track MIDI file
    """
    midi = MIDIFile(3)  # 3 tracks: melody, bass, drums
    
    # Track 0: Melody
    track = 0
    channel = 0
    time = 0
    midi.addTempo(track, time, tempo)
    midi.addProgramChange(track, channel, time, GENRE_INSTRUMENTS[genre])
    
    for note_data in melody_notes:
        midi.addNote(
            track, channel, note_data["note"], time,
            note_data["duration"], note_data["velocity"]
        )
        time += note_data["duration"]
    
    # Track 1: Bass (octave lower)
    track = 1
    channel = 1
    time = 0
    midi.addProgramChange(track, channel, time, 32)  # Acoustic Bass
    
    for note_data in melody_notes:
        midi.addNote(
            track, channel, note_data["note"] - 12, time,
            note_data["duration"], note_data["velocity"] - 20
        )
        time += note_data["duration"]
    
    # Track 2: Drums (simple kick and snare)
    track = 2
    channel = 9  # MIDI channel 9 is reserved for drums
    time = 0
    
    beat_duration = 1.0
    total_beats = int(sum([n["duration"] for n in melody_notes]))
    
    for i in range(total_beats):
        if i % 2 == 0:
            midi.addNote(track, channel, 36, time, beat_duration, 90)  # Kick
        else:
            midi.addNote(track, channel, 38, time, beat_duration, 80)  # Snare
        time += beat_duration
    
    # Write MIDI file
    with open(filepath, "wb") as f:
        midi.writeFile(f)

def convert_midi_to_wav(midi_path, wav_path):
    """
    Convert MIDI to WAV using FluidSynth
    """
    fs = FluidSynth(sound_font=SOUNDFONT_PATH)
    fs.midi_to_audio(midi_path, wav_path)

# ============================
# WEB ROUTES
# ============================

@app.get("/", response_class=HTMLResponse)
async def home(request: Request):
    """
    Homepage with form
    """
    return templates.TemplateResponse("index.html", {"request": request})

@app.post("/", response_class=HTMLResponse)
async def generate_track(
    request: Request,
    mood: str = Form(...),
    genre: str = Form(...),
    tempo: int = Form(...),
    style: str = Form(...)
):
    """
    Generate music track based on user inputs
    """
    # Generate melody
    raw_melody = generate_notes_by_mood(mood, num_notes=16)
    styled_melody = stylize_notes(raw_melody, tempo, style)
    
    # Generate lyrics
    lyrics = generate_lyrics(mood, num_lines=4)
    
    # Create unique filenames
    timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
    filename_base = f"{mood}_{genre}_{tempo}bpm_{style}_{timestamp}"
    midi_filename = f"{filename_base}.mid"
    wav_filename = f"{filename_base}.wav"
    
    midi_path = os.path.join(OUTPUT_FOLDER, midi_filename)
    wav_path = os.path.join(OUTPUT_FOLDER, wav_filename)
    
    # Generate MIDI
    create_midi_with_tracks(midi_path, styled_melody, genre, tempo)
    
    # Convert to WAV
    convert_midi_to_wav(midi_path, wav_path)
    
    # Render result page
    return templates.TemplateResponse("result.html", {
        "request": request,
        "mood": mood,
        "genre": genre,
        "tempo": tempo,
        "style": style,
        "audio_file": f"/static/output/{wav_filename}",
        "download_link": f"/download/{wav_filename}",
        "lyrics": lyrics
    })

@app.get("/download/{filename}")
async def download_file(filename: str):
    """
    Download generated audio file
    """
    file_path = os.path.join(OUTPUT_FOLDER, filename)
    return FileResponse(
        file_path,
        media_type="audio/wav",
        filename=filename
    )

# Run the app
if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
