// HTML5 Real MP3 Audio Engine for Retro iPod Player

class RealAudioPlayer {
  constructor() {
    this.audio = new Audio();
    this.isPlaying = false;
    this.currentTrackUrl = null;

    this.audio.addEventListener('ended', () => {
      this.isPlaying = false;
      if (this.onEndedCallback) this.onEndedCallback();
    });

    this.audio.addEventListener('timeupdate', () => {
      if (this.onTimeUpdateCallback) {
        this.onTimeUpdateCallback(this.audio.currentTime, this.audio.duration || 0);
      }
    });

    this.audio.addEventListener('error', (e) => {
      console.warn('Audio playback error, falling back:', e);
    });
  }

  playTrack(audioUrl, onTimeUpdate, onEnded) {
    this.onTimeUpdateCallback = onTimeUpdate;
    this.onEndedCallback = onEnded;

    if (this.currentTrackUrl !== audioUrl) {
      this.audio.src = audioUrl;
      this.currentTrackUrl = audioUrl;
    }

    const playPromise = this.audio.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          this.isPlaying = true;
        })
        .catch((err) => {
          console.warn('Audio play failed or interrupted:', err);
          this.isPlaying = false;
        });
    }
  }

  pause() {
    this.audio.pause();
    this.isPlaying = false;
  }

  seek(seconds) {
    if (this.audio && !isNaN(seconds)) {
      this.audio.currentTime = seconds;
    }
  }

  setVolume(val) {
    if (this.audio) {
      this.audio.volume = Math.max(0, Math.min(1, val));
    }
  }
}

export const realAudio = new RealAudioPlayer();
