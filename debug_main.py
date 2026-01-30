# Copy your entire main.py content HERE, but REPLACE the convert_midi_to_wav function:

def convert_midi_to_wav(midi_path, wav_path):
    """
    FIXED VERSION - Uses working method from test_fluid.py
    """
    print(f"🎵 Converting {midi_path} -> {wav_path}")
    print(f"Soundfont exists: {os.path.exists(SOUNDFONT_PATH)}")
    
    try:
        from midi2audio import FluidSynth
        fs = FluidSynth(sound_font=SOUNDFONT_PATH)
        fs.midi_to_audio(midi_path, wav_path)
        print("✅ AUDIO GENERATED SUCCESS!")
        return True
    except Exception as e:
        print(f"❌ AUDIO ERROR: {e}")
        return False
