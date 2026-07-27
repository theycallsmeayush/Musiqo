/* ================================================
   AURORA MUSIC PLAYER - Main Application Logic
   ================================================ */

// ─── Track Library ───
const TRACKS = [
  {
    id: 1,
    artist: 'Seedhe Maut',
    title: '11K',
    album: 'Voicenotes',
    cover: 'assets/11k.jpg',
    audio: 'assets/Music/11k.mp3',
    duration: 171,
    colors: ['#8b0000', '#cc6600', '#6b1a1a']
  },
  {
    id: 2,
    artist: 'Shubh',
    title: 'Balenci',
    album: 'Loud',
    cover: 'assets/Balenci.jpg',
    audio: 'assets/Music/Balenci.mp3',
    duration: 146,
    colors: ['#7a0028', '#991a1a', '#8b2252']
  },
  {
    id: 3,
    artist: 'Arijit Singh',
    title: 'Tu Hi Hai Aashiqui',
    album: 'Rolling Papers',
    cover: 'assets/Aashiqui.jpg',
    audio: 'assets/Music/Aashiqui.mp3',
    duration: 298,
    colors: ['#8b7300', '#9e5a00', '#1a1a1a']
  },
  {
    id: 4,
    artist: 'Armaan Khan, Rashmi Virag',
    title: 'Mujhko Barsaat Bana Lo',
    album: 'Island Vibes',
    cover: 'assets/Barsaat.jpg',
    audio: 'assets/Music/Barsaat.mp3',
    duration: 264,
    colors: ['#1a5c32', '#8b5e00', '#7a1a1a']
  },
  {
    id: 5,
    artist: 'Shubh',
    title: 'Bounce',
    album: 'Pink Friday',
    cover: 'assets/Bounce.jpg',
    audio: 'assets/Music/Bounce.mp3',
    duration: 142,
    colors: ['#801a55', '#5c2d82', '#8b2252']
  },
  {
    id: 6,
    artist: 'Seedhe Maut',
    title: 'Champions',
    album: 'After Hours',
    cover: 'assets/smx.jpg',
    audio: 'assets/Music/Champions.mp3',
    duration: 208,
    colors: ['#2d1a6b', '#4a3a8b', '#0a4a7a']
  },
  {
    id: 7,
    artist: 'Arijit Singh, Parampara Thakur',
    title: 'Pal Pal Dil Ke Pass',
    album: 'Fearless',
    cover: 'assets/Dil.jpg',
    audio: 'assets/Music/Dil.mp3',
    duration: 252,
    colors: ['#8b7700', '#9e7a00', '#7a3a2a']
  },
  {
    id: 8,
    artist: 'Vishal Vaid',
    title: 'Fakira',
    album: 'Nothing but the Beat',
    cover: 'assets/Fakira.jpg',
    audio: 'assets/Music/Fakira.mp3',
    duration: 288,
    colors: ['#0a4a5c', '#1a3a5c', '#0d2a3a']
  },
  {
    id: 9,
    artist: 'Jyotica Tangri, Kumaar',
    title: 'Ishq De Fanniyar',
    album: 'It Might as Well Be Swing',
    cover: 'assets/Fanniyar.jpg',
    audio: 'assets/Music/Fanniyar.mp3',
    duration: 180,
    colors: ['#2a1a00', '#4a3520', '#1a1020']
  },
  {
    id: 10,
    artist: 'The PropheC',
    title: 'Kina Chir',
    album: 'Hotel California',
    cover: 'assets/Chir.jpg',
    audio: 'assets/Music/Chir.mp3',
    duration: 134,
    colors: ['#6b3a1a', '#8b5a2a', '#3a1a0a']
  },
  {
    id: 11,
    artist: 'Javed Ali, Banjyotsna',
    title: 'Gale Lag Ja',
    album: 'Study Session',
    cover: 'assets/Gale.jpg',
    audio: 'assets/Music/Gale.mp3',
    duration: 254,
    colors: ['#1a1a3a', '#2a1a4a', '#0a2a3a']
  },
  {
    id: 12,
    artist: 'Deep Dhaliwal, Anker Deol',
    title: 'Hypotonic',
    album: 'Starboy',
    cover: 'assets/Hypotonic.jpg',
    audio: 'assets/Music/Hypnotic.mp3',
    duration: 148,
    colors: ['#1a0a3a', '#3a1a5a', '#0a1a2a']
  },
  {
    id: 13,
    artist: 'Pritam, Javed Bashir, Nikhil D\'Souza, Shefali Alvares, Irshad Kamil',
    title: 'Tera Naam Japdi Phiraan',
    album: 'Divide',
    cover: 'assets/Japdi.jpg',
    audio: 'assets/Music/Japdi.mp3',
    duration: 222,
    colors: ['#5a3a1a', '#7a5a2a', '#2a1a0a']
  },
  {
    id: 14,
    artist: 'Seedhe Maut',
    title: 'Khatta Flow',
    album: 'Future Nostalgia',
    cover: 'assets/smx.jpg',
    audio: 'assets/Music/Khatta.mp3',
    duration: 155,
    colors: ['#5a1a5a', '#3a0a4a', '#7a2a6a']
  },
  {
    id: 15,
    artist: 'Seedhe Maut',
    title: 'KODAK',
    album: 'A Night at the Opera',
    cover: 'assets/Kodak.jpg',
    audio: 'assets/Music/Kodak.mp3',
    duration: 366,
    colors: ['#3a1a0a', '#5a2a1a', '#1a0a0a']
  },
  {
    id: 16,
    artist: 'Anand Raj Anand',
    title: 'Uncha Lamba Kad',
    album: 'Hollywood\'s Bleeding',
    cover: 'assets/Lamba.jpg',
    audio: 'assets/Music/Lamba.mp3',
    duration: 282,
    colors: ['#2a1a3a', '#1a2a3a', '#3a2a4a']
  },
  {
    id: 17,
    artist: 'Navaan Sandhu',
    title: 'Moodshift',
    album: 'Spider-Verse Soundtrack',
    cover: 'assets/Moodshift.jpg',
    audio: 'assets/Music/Moodshift.mp3',
    duration: 198,
    colors: ['#5a4a00', '#7a5a10', '#3a2a00']
  },
  {
    id: 18,
    artist: 'Zher Vibe, Intense, Sardar Khehra',
    title: 'Sensation',
    album: 'Hurry Up, We\'re Dreaming',
    cover: 'assets/Sensation.jpg',
    audio: 'assets/Music/Sensation.mp3',
    duration: 169,
    colors: ['#1a0a4a', '#0a2a5a', '#2a1a3a']
  },
  {
    id: 19,
    artist: 'Arijit Singh, White Noise Collectives, Amitabh Bhattacharya',
    title: 'Sitaare',
    album: 'Fine Line',
    cover: 'assets/Sitaare.jpg',
    audio: 'assets/Music/Sitaare.mp3',
    duration: 244,
    colors: ['#5a2a1a', '#7a4a2a', '#3a1a0a']
  },
  {
    id: 20,
    artist: 'Zher Vibe, Intense',
    title: 'One Wish',
    album: 'Classical Masterpieces',
    cover: 'assets/Wish.jpg',
    audio: 'assets/Music/Wish.mp3',
    duration: 137,
    colors: ['#0a0a1a', '#1a1a2a', '#0a0a0a']
  }
];

// Pre-fetch exact audio metadata durations
function fetchTrackDurations() {
  TRACKS.forEach((track) => {
    if (track.audio) {
      const tempAudio = new Audio();
      tempAudio.muted = true;
      tempAudio.volume = 0;
      tempAudio.preload = 'metadata';
      tempAudio.src = track.audio;
      tempAudio.onloadedmetadata = () => {
        if (tempAudio.duration && !isNaN(tempAudio.duration)) {
          track.duration = Math.round(tempAudio.duration);
          const itemEl = document.querySelector(`.library-item[data-id="${track.id}"] .library-item-duration`);
          if (itemEl) {
            itemEl.textContent = formatTime(track.duration);
          }
        }
        tempAudio.src = '';
      };
    }
  });
}

// ─── Application State ───
let currentTrackIndex = 0;
let isPlaying = false;
let isShuffle = false;
let repeatMode = 0; // 0=off, 1=all, 2=one
let isDragging = false;
let dragStartX = 0;
let dragOffset = 0;
let lyricsOpen = false;
let audioContext = null;
let analyser = null;
let dataArray = null;
let sourceNode = null;
let visualizerAnimId = null;

// ─── DOM References ───
const audio = new Audio();
audio.preload = 'auto';

const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

// ─── Initialize ───
document.addEventListener('DOMContentLoaded', async () => {
  await loadCustomTracksFromDB();
  buildCoverFlow();
  setupPlayerControls();
  setupProgressBar();
  setupVolumeControl();
  setupDragSwipe();
  setupKeyboard();
  buildLibrary();
  setupLibrary();

  // Check URL play parameter
  const urlParams = new URLSearchParams(window.location.search);
  const autoPlayId = urlParams.get('play');
  let autoPlayIndex = 0;

  if (autoPlayId) {
    const foundIdx = TRACKS.findIndex(t => t.id == autoPlayId || t.id === autoPlayId);
    if (foundIdx !== -1) {
      autoPlayIndex = foundIdx;
    }
  }

  currentTrackIndex = autoPlayIndex;
  targetTrackIndex = autoPlayIndex;
  currentVisualIndex = autoPlayIndex;

  loadTrack(currentTrackIndex, !!autoPlayId);
  updateAmbientBackground();
  startVisualizerFallback();
  startPhysicsEngine();
  fetchTrackDurations();
});

// Load user uploaded songs from IndexedDB (appended to ending of existing list)
async function loadCustomTracksFromDB() {
  if (window.musiqoDB) {
    try {
      const customTracks = await window.musiqoDB.getAllTracks();
      if (customTracks && customTracks.length > 0) {
        const existingIds = new Set(TRACKS.map(t => String(t.id)));
        const newTracks = customTracks.filter(t => !existingIds.has(String(t.id)));
        // Append new uploaded songs to the ending of the existing Songs List
        TRACKS.push(...newTracks);
      }
    } catch (e) {
      console.warn('Could not load custom tracks from IndexedDB:', e);
    }
  }
}

// ─── Build Cover Flow Cards ───
function buildCoverFlow() {
  const track = $('.coverflow-track');
  if (!track) return;
  track.innerHTML = '';
  TRACKS.forEach((t, i) => {
    const card = document.createElement('div');
    card.className = 'album-card';
    card.dataset.index = i;
    card.innerHTML = `
      <div class="card-image-wrapper">
        <img class="card-image" src="${t.cover}" alt="${t.album}" loading="lazy">
      </div>
      <div class="card-info">
        <div class="card-title">${t.title}</div>
        <div class="card-artist">${t.artist}</div>
      </div>
    `;
    card.addEventListener('click', () => {
      if (parseInt(card.dataset.index) !== currentTrackIndex) {
        navigateTo(parseInt(card.dataset.index));
      }
    });
    track.appendChild(card);
  });
  positionCards();
}

// ─── Build Song Library Sidebar ───
const trackSearchIndex = [];
let activePlaylistFilter = null; // null = all songs, or playlist object

function buildLibrary() {
  const list = $('.library-list');
  if (!list) return;
  list.innerHTML = '';
  trackSearchIndex.length = 0;

  let displayTracks = TRACKS;
  if (activePlaylistFilter && activePlaylistFilter.trackIds) {
    const filterSet = new Set(activePlaylistFilter.trackIds.map(String));
    displayTracks = TRACKS.filter(t => filterSet.has(String(t.id)));
  }

  const countText = $('#libraryCountText') || $('.library-count');
  if (countText) countText.textContent = `${displayTracks.length} ${displayTracks.length === 1 ? 'Song' : 'Songs'}`;

  if (displayTracks.length === 0) {
    list.innerHTML = `
      <div class="empty-library-state">
        <svg viewBox="0 0 24 24" width="36" height="36" fill="rgba(255,255,255,0.2)"><path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55C7.79 13 6 14.79 6 17s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/></svg>
        <p>No songs found in this playlist</p>
      </div>
    `;
    return;
  }

  displayTracks.forEach((t) => {
    const originalIndex = TRACKS.findIndex(trackItem => String(trackItem.id) === String(t.id));
    trackSearchIndex.push(`${t.title} ${t.artist} ${t.album}`.toLowerCase());

    const durationText = t.duration ? formatTime(t.duration) : '3:15';

    const item = document.createElement('div');
    item.className = 'library-item' + (originalIndex === currentTrackIndex ? ' active' : '');
    item.dataset.index = originalIndex;
    item.dataset.id = t.id;

    item.innerHTML = `
      <img class="library-item-cover" src="${t.cover}" alt="${t.album}" loading="lazy">
      <div class="library-item-info">
        <div class="library-item-title-row">
          <span class="library-item-title">${t.title}</span>
        </div>
        <div class="library-item-artist">${t.artist}</div>
      </div>
      <div class="library-item-badge">
        <span class="wave-container mini-btn-wave library-item-wave" role="status">
          <span class="wave-bar" style="--i: 0; height: 50%"></span>
          <span class="wave-bar" style="--i: 1; height: 75%"></span>
          <span class="wave-bar" style="--i: 2; height: 100%"></span>
        </span>
        <span class="library-item-duration">${durationText}</span>
      </div>
      <button class="library-item-options-btn" title="Song Options" aria-label="Song Options">
        <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg>
      </button>
    `;

    item.addEventListener('click', (e) => {
      if (!e.target.closest('.library-item-options-btn')) {
        navigateTo(originalIndex, true);
        updateLibraryActive();
      }
    });

    // Options button click handler
    const optionsBtn = item.querySelector('.library-item-options-btn');
    if (optionsBtn) {
      optionsBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        openSongOptionsMenu(t, optionsBtn);
      });
    }

    list.appendChild(item);
  });
}

function updateLibraryActive() {
  const items = $$('.library-item');
  items.forEach((item) => {
    const isCurrent = parseInt(item.dataset.index) === currentTrackIndex;
    item.classList.toggle('active', isCurrent);
  });
  updateWaveAnimationState();
}

function setupLibrary() {
  const toggleBtns = $$('.library-toggle');
  const panel = $('.library-panel');
  const backdrop = $('#libraryBackdrop');

  function closeLibrary() {
    if (panel) panel.classList.remove('open');
    toggleBtns.forEach(b => b.classList.remove('active-toggle'));
  }

  toggleBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      if (panel) panel.classList.toggle('open');
      btn.classList.toggle('active-toggle');
    });
  });

  const dockFavoritesBtn = $('#dockFavoritesBtn');
  if (dockFavoritesBtn) {
    dockFavoritesBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      if (panel && !panel.classList.contains('open')) {
        panel.classList.add('open');
      }
      const tabPlaylistsBtn = $('#tabPlaylistsBtn');
      if (tabPlaylistsBtn) tabPlaylistsBtn.click();
    });
  }

  if (backdrop) {
    backdrop.addEventListener('click', closeLibrary);
  }

  // Click outside listener
  document.addEventListener('click', (e) => {
    if (!panel || !panel.classList.contains('open')) return;
    if (!panel.contains(e.target) && toggleBtn && !toggleBtn.contains(e.target)) {
      closeLibrary();
    }
  });

  const searchInput = $('#librarySearchInput');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const q = e.target.value.toLowerCase().trim();
      const items = $$('.library-item');
      if (!q) {
        items.forEach(item => item.classList.remove('hidden'));
        return;
      }
      items.forEach((item, i) => {
        const match = trackSearchIndex[i] && trackSearchIndex[i].includes(q);
        item.classList.toggle('hidden', !match);
      });
    });
  }
}

// ─── 240+ FPS Infinite Circular Physics Engine State ───
let targetTrackIndex = 0;
let currentVisualIndex = 0;
let physicsAnimId = null;
let lastPhysicsTime = performance.now();

// ─── Uncapped 500+ FPS Hardware-Accelerated Physics Engine Loop ───
function startPhysicsEngine() {
  function renderFrame(now) {
    const dt = Math.min((now - lastPhysicsTime) / 1000, 0.033);
    lastPhysicsTime = now;

    // Frame-rate independent exponential physics lerp for ultra-smooth 500+ FPS transition
    const lerpRate = 1 - Math.exp(-5.5 * dt);
    currentVisualIndex += (targetTrackIndex - currentVisualIndex) * lerpRate;

    const N = TRACKS.length;
    const cards = $$('.album-card');

    // Normalized visual index on ring [0, N)
    const normVisual = ((currentVisualIndex % N) + N) % N;

    cards.forEach((card, i) => {
      // Calculate shortest signed distance on ring of size N
      let rawOffset = i - normVisual;
      let offset = ((rawOffset % N) + N) % N;
      if (offset > N / 2) {
        offset -= N;
      }

      const abs = Math.abs(offset);
      
      card.classList.toggle('active', abs < 0.1);

      let tx = offset * 180;
      let tz = -abs * 80;
      let ry = -Math.max(-1, Math.min(1, offset)) * 35;
      let opacity = Math.max(0, 1 - abs * 0.25);
      let scale = Math.max(0.65, 1 - abs * 0.1);

      if (abs < 1) {
        const centerBlend = 1 - abs;
        tz = -abs * 80 + centerBlend * 160;
        scale = centerBlend * 1.05 + abs * 0.9;
      }

      card.style.transform = `translate3d(${tx.toFixed(2)}px, 0px, ${tz.toFixed(2)}px) rotateY(${ry.toFixed(2)}deg) scale(${scale.toFixed(3)})`;
      card.style.opacity = opacity.toFixed(3);
      card.style.zIndex = Math.round(10 - abs);
      card.style.pointerEvents = abs <= 2.5 ? 'auto' : 'none';
    });

    physicsAnimId = requestAnimationFrame(renderFrame);
  }

  if (physicsAnimId) cancelAnimationFrame(physicsAnimId);
  lastPhysicsTime = performance.now();
  physicsAnimId = requestAnimationFrame(renderFrame);
}

function positionCards() {
  targetTrackIndex = currentTrackIndex;
}

// ─── Circular Infinite Navigation ───
function navigateTo(index, forcePlay = null) {
  if (index < 0 || index >= TRACKS.length) return;
  const N = TRACKS.length;

  // Find shortest circular difference
  let diff = index - currentTrackIndex;
  let circularDiff = ((diff % N) + N) % N;
  if (circularDiff > N / 2) {
    circularDiff -= N;
  }

  currentTrackIndex = index;
  targetTrackIndex += circularDiff;

  if (forcePlay !== null) {
    isPlaying = forcePlay;
  }

  loadTrack(index, isPlaying);
  updateAmbientBackground();
  updateLibraryActive();
}

function nextTrack() {
  const N = TRACKS.length;
  let next;
  if (isShuffle) {
    next = Math.floor(Math.random() * N);
    while (next === currentTrackIndex && N > 1) {
      next = Math.floor(Math.random() * N);
    }
  } else {
    next = (currentTrackIndex + 1) % N;
  }
  navigateTo(next);
}

function prevTrack() {
  if (audio.currentTime > 3) {
    audio.currentTime = 0;
    return;
  }
  const N = TRACKS.length;
  let prev;
  if (isShuffle) {
    prev = Math.floor(Math.random() * N);
  } else {
    prev = (currentTrackIndex - 1 + N) % N;
  }
  navigateTo(prev);
}

// ─── Load Track ───
function loadTrack(index, autoplay = false) {
  const track = TRACKS[index];
  if (!track) return;

  // Stop any active simulation loop
  if (simulationInterval) {
    cancelAnimationFrame(simulationInterval);
    simulationInterval = null;
  }
  simulatedTime = 0;

  // Update now playing info
  const npThumb = $('.now-playing-thumb');
  const npTitle = $('.np-title');
  const npArtist = $('.np-artist');

  if (npThumb) npThumb.src = track.cover;
  if (npTitle) npTitle.textContent = track.title;
  if (npArtist) npArtist.textContent = track.artist;

  // Audio file support
  if (track.audio) {
    const isDifferentTrack = !audio.src || (!audio.src.endsWith(encodeURI(track.audio)) && !audio.src.endsWith(track.audio) && audio.src !== track.audio);
    if (isDifferentTrack) {
      audio.pause();
      audio.src = track.audio;
      audio.currentTime = 0;
    }

    if (autoplay) {
      isPlaying = true;
      updatePlayButton();
      audio.play().catch((err) => {
        console.warn('Audio play failed, switching to simulated playback:', err);
        simulatePlayback();
      });
    } else {
      isPlaying = false;
      audio.pause();
      updatePlayButton();
      updateProgressUI(0, audio.duration || SIMULATED_DURATION);
    }
  } else {
    isPlaying = false;
    audio.pause();
    audio.src = '';
    audio.currentTime = 0;
    updatePlayButton();
    updateProgressUI(0, SIMULATED_DURATION);
    if (autoplay) {
      simulatePlayback();
    }
  }
  updateWaveAnimationState();
}

// ─── Simulated Playback (rAF-based for 120fps) ───
let simulatedTime = 0;
let simulationInterval = null;
let lastFrameTime = 0;
const SIMULATED_DURATION = 95; // seconds

function simulatePlayback() {
  isPlaying = true;
  updatePlayButton();
  if (simulationInterval) cancelAnimationFrame(simulationInterval);
  lastFrameTime = performance.now();

  function tick(now) {
    if (!isPlaying) return;
    const delta = (now - lastFrameTime) / 1000; // seconds elapsed
    lastFrameTime = now;
    simulatedTime += delta;

    if (simulatedTime >= SIMULATED_DURATION) {
      simulatedTime = 0;
      if (repeatMode === 2) {
        simulatePlayback();
      } else if (repeatMode === 1) {
        nextTrack();
      } else {
        if (currentTrackIndex < TRACKS.length - 1) {
          nextTrack();
        } else {
          pausePlayback();
        }
      }
      return;
    }
    updateProgressUI(simulatedTime, SIMULATED_DURATION);
    simulationInterval = requestAnimationFrame(tick);
  }
  simulationInterval = requestAnimationFrame(tick);
}

function pausePlayback() {
  isPlaying = false;
  updatePlayButton();
  try {
    audio.pause();
  } catch (e) {}
  if (simulationInterval) {
    cancelAnimationFrame(simulationInterval);
    simulationInterval = null;
  }
}

function togglePlay() {
  const track = TRACKS[currentTrackIndex];
  if (!track) return;

  if (isPlaying) {
    pausePlayback();
  } else {
    if (track.audio) {
      const isDifferentTrack = !audio.src || (!audio.src.endsWith(encodeURI(track.audio)) && !audio.src.endsWith(track.audio) && audio.src !== track.audio);
      if (isDifferentTrack) {
        audio.src = track.audio;
      }
      isPlaying = true;
      updatePlayButton();
      audio.play().catch(err => {
        console.warn('Audio play error, falling back to simulated playback:', err);
        simulatePlayback();
      });
    } else {
      simulatePlayback();
    }
  }
}

// ─── Progress Bar (GPU-composited scaleX) ───
function updateProgressUI(current, duration) {
  const fill = $('.progress-bar-fill');
  const timeCurrent = $('.time-current');
  const timeTotal = $('.time-total');

  if (fill) {
    const pct = duration > 0 ? current / duration : 0;
    fill.style.transform = `scaleX(${pct})`;
    fill.style.width = '100%';
  }
  if (timeCurrent) timeCurrent.textContent = formatTime(current);
  if (timeTotal) timeTotal.textContent = formatTime(duration);
}

function formatTime(s) {
  if (isNaN(s) || s < 0) return '0:00';
  const m = Math.floor(s / 60);
  const sec = Math.floor(s % 60);
  return `${m}:${sec.toString().padStart(2, '0')}`;
}

function setupProgressBar() {
  const wrapper = $('.progress-bar-wrapper');
  if (!wrapper) return;

  const seek = (e) => {
    const rect = wrapper.getBoundingClientRect();
    const pct = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    const track = TRACKS[currentTrackIndex];
    if (track && track.audio && audio.duration && !isNaN(audio.duration)) {
      audio.currentTime = pct * audio.duration;
      updateProgressUI(audio.currentTime, audio.duration);
    } else {
      simulatedTime = pct * SIMULATED_DURATION;
      updateProgressUI(simulatedTime, SIMULATED_DURATION);
    }
  };

  let seeking = false;
  wrapper.addEventListener('mousedown', (e) => {
    seeking = true;
    seek(e);
  });
  document.addEventListener('mousemove', (e) => {
    if (seeking) seek(e);
  });
  document.addEventListener('mouseup', () => {
    seeking = false;
  });
}

// ─── Player Controls ───
function setupPlayerControls() {
  const btnPlay = $('.btn-play');
  const btnPrev = $('.btn-prev');
  const btnNext = $('.btn-next');
  const btnShuffle = $('.btn-shuffle');
  const btnRepeat = $('.btn-repeat');

  if (btnPlay) btnPlay.addEventListener('click', togglePlay);
  if (btnPrev) btnPrev.addEventListener('click', prevTrack);
  if (btnNext) btnNext.addEventListener('click', nextTrack);

  if (btnShuffle) btnShuffle.addEventListener('click', () => {
    isShuffle = !isShuffle;
    btnShuffle.classList.toggle('active-toggle', isShuffle);
  });

  if (btnRepeat) btnRepeat.addEventListener('click', () => {
    repeatMode = (repeatMode + 1) % 3;
    btnRepeat.classList.toggle('active-toggle', repeatMode > 0);
    const svg = btnRepeat.querySelector('svg');
    if (repeatMode === 2 && svg) {
      svg.style.opacity = '1';
    }
  });

  const playerBarOptionsBtn = $('#playerBarOptionsBtn');
  if (playerBarOptionsBtn) {
    playerBarOptionsBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const track = TRACKS[currentTrackIndex];
      if (track) {
        openSongOptionsMenu(track, playerBarOptionsBtn);
      }
    });
  }

  // Real HTML5 Audio Event Listeners
  audio.addEventListener('play', () => {
    if (simulationInterval) {
      cancelAnimationFrame(simulationInterval);
      simulationInterval = null;
    }
    isPlaying = true;
    updatePlayButton();
  });

  audio.addEventListener('pause', () => {
    if (!simulationInterval) {
      isPlaying = false;
      updatePlayButton();
    }
  });

  audio.addEventListener('error', (e) => {
    console.warn('Audio play error event caught, activating simulation fallback:', e);
    if (isPlaying) {
      simulatePlayback();
    }
  });

  audio.addEventListener('timeupdate', () => {
    if (audio.duration && !isNaN(audio.duration)) {
      updateProgressUI(audio.currentTime, audio.duration);
    }
  });

  audio.addEventListener('ended', () => {
    if (repeatMode === 2) {
      audio.currentTime = 0;
      audio.play().catch(() => {});
    } else if (repeatMode === 1) {
      nextTrack();
    } else {
      if (currentTrackIndex < TRACKS.length - 1) {
        nextTrack();
      } else {
        pausePlayback();
      }
    }
  });

  audio.addEventListener('loadedmetadata', () => {
    if (audio.duration && !isNaN(audio.duration)) {
      updateProgressUI(audio.currentTime, audio.duration);
    }
  });
}

function updatePlayButton() {
  const btnPlay = $('.btn-play');
  if (btnPlay) {
    const svg = btnPlay.querySelector('svg');
    if (isPlaying) {
      svg.innerHTML = '<rect x="6" y="4" width="4" height="16" rx="1"/><rect x="14" y="4" width="4" height="16" rx="1"/>';
    } else {
      svg.innerHTML = '<path d="M8 5v14l11-7z"/>';
    }
  }
  updateWaveAnimationState();
}

function updateWaveAnimationState() {
  const miniWave = $('#miniWave');
  if (miniWave) {
    if (isPlaying) {
      miniWave.classList.add('playing');
    } else {
      miniWave.classList.remove('playing');
    }
  }

  // Update library list active item wave
  const allWaves = $$('.library-item-wave');
  allWaves.forEach(w => w.classList.remove('playing'));

  const activeItem = $('.library-item.active');
  if (activeItem && isPlaying) {
    const activeWave = activeItem.querySelector('.library-item-wave');
    if (activeWave) {
      activeWave.classList.add('playing');
    }
  }
}

// ─── Volume Control (Positioned Left of Slider & Click to Mute/Unmute) ───
function setupVolumeControl() {
  const slider = $('.volume-slider');
  const volBtn = $('.btn-volume');
  if (!slider) return;

  let lastVolume = 80;

  function updateVolumeState(vol) {
    audio.volume = vol;
    const pct = Math.round(vol * 100);
    slider.value = pct;
    slider.style.background = `linear-gradient(to right, #ffffff ${pct}%, rgba(255, 255, 255, 0.18) ${pct}%)`;

    if (volBtn) {
      const svg = volBtn.querySelector('svg');
      if (svg) {
        if (vol === 0) {
          svg.innerHTML = '<path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/>';
        } else if (vol < 0.5) {
          svg.innerHTML = '<path d="M18.5 12c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM5 9v6h4l5 5V4L9 9H5z"/>';
        } else {
          svg.innerHTML = '<path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>';
        }
      }
    }
  }

  // Initialize at 80% volume with active fill
  updateVolumeState(0.8);

  // Slider Input Listener
  slider.addEventListener('input', (e) => {
    const vol = e.target.value / 100;
    if (vol > 0) lastVolume = e.target.value;
    updateVolumeState(vol);
  });

  // Volume Button Click Listener (Mute / Unmute Toggle)
  if (volBtn) {
    volBtn.addEventListener('click', () => {
      if (audio.volume > 0) {
        lastVolume = slider.value > 0 ? slider.value : 80;
        updateVolumeState(0);
      } else {
        const restoreVal = (lastVolume && lastVolume > 0) ? lastVolume / 100 : 0.8;
        updateVolumeState(restoreVal);
      }
    });
  }
}

// ─── Ambient Background ───
function updateAmbientBackground() {
  const track = TRACKS[currentTrackIndex];
  const orbs = $$('.ambient-orb');
  if (orbs.length >= 3 && track.colors.length >= 3) {
    orbs[0].style.background = track.colors[0];
    orbs[1].style.background = track.colors[1];
    orbs[2].style.background = track.colors[2];
  }
}

// ─── Drag / Swipe ───
function setupDragSwipe() {
  const stage = $('.coverflow-stage');
  if (!stage) return;

  let startX = 0;
  let moved = false;

  stage.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.clientX;
    moved = false;
    stage.style.cursor = 'grabbing';
  });

  document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    const dx = e.clientX - startX;
    if (Math.abs(dx) > 10) moved = true;
  });

  document.addEventListener('mouseup', (e) => {
    if (!isDragging) return;
    isDragging = false;
    stage.style.cursor = 'grab';
    const dx = e.clientX - startX;
    if (Math.abs(dx) > 60) {
      if (dx > 0) prevTrack();
      else nextTrack();
    }
  });

  // Touch events
  stage.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
    moved = false;
  }, { passive: true });

  stage.addEventListener('touchend', (e) => {
    const dx = e.changedTouches[0].clientX - startX;
    if (Math.abs(dx) > 50) {
      if (dx > 0) prevTrack();
      else nextTrack();
    }
  });
}

// ─── Keyboard Navigation ───
function setupKeyboard() {
  document.addEventListener('keydown', (e) => {
    // Ignore global media hotkeys when user is typing inside search or input fields
    const tag = e.target && e.target.tagName ? e.target.tagName.toUpperCase() : '';
    if (tag === 'INPUT' || tag === 'TEXTAREA' || e.target.isContentEditable) {
      return;
    }

    switch (e.key) {
      case 'ArrowLeft': prevTrack(); break;
      case 'ArrowRight': nextTrack(); break;
      case ' ':
        e.preventDefault();
        togglePlay();
        break;
    }
  });
}

// ─── Visualizer (Smooth Lerp at native refresh rate) ───
let barTargets = [];
let barCurrents = [];

function startVisualizerFallback() {
  const bars = $$('.v-bar');
  if (!bars.length) return;

  barTargets = new Array(bars.length).fill(3);
  barCurrents = new Array(bars.length).fill(3);
  let targetUpdateCounter = 0;

  function animateBars() {
    targetUpdateCounter++;
    // Update targets every ~6 frames (smooth at 120fps = ~20 target changes/sec)
    if (targetUpdateCounter % 6 === 0) {
      bars.forEach((_, i) => {
        barTargets[i] = isPlaying
          ? Math.random() * 20 + 3
          : 3;
      });
    }

    // Lerp current toward target for buttery interpolation
    const lerpFactor = 0.18;
    bars.forEach((bar, i) => {
      barCurrents[i] += (barTargets[i] - barCurrents[i]) * lerpFactor;
      const scaleY = barCurrents[i] / 24; // normalize to container height
      bar.style.transform = `scaleY(${scaleY})`;
      bar.style.height = '24px';
    });

    visualizerAnimId = requestAnimationFrame(animateBars);
  }
  animateBars();
}

// ─── Canvas Visualizer (Top-Down Smooth Liquid Ocean Waves on 4 Screen Borders) ───
function drawCanvasVisualizer() {
  const canvas = $('.audio-visualizer-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  function resizeCanvas() {
    canvas.width = window.innerWidth * (window.devicePixelRatio || 1);
    canvas.height = window.innerHeight * (window.devicePixelRatio || 1);
  }
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  let wavePhase = 0;
  let currentAmplitude = 0;
  let targetAmplitude = 0;

  function draw() {
    const w = canvas.width;
    const h = canvas.height;
    const dpr = window.devicePixelRatio || 1;

    ctx.clearRect(0, 0, w, h);

    // Sync visibility: canvas wave overlay turns active when playing
    canvas.classList.toggle('active', isPlaying);

    const track = TRACKS[currentTrackIndex] || TRACKS[0];
    const colorPrimary = (track.colors && track.colors[0]) || '#ff6b6b';
    const colorSecondary = (track.colors && track.colors[1]) || '#ff8e8e';

    // Target ocean swell amplitude expands gently when playing, recedes when paused
    targetAmplitude = isPlaying ? 40 * dpr : 0;
    currentAmplitude += (targetAmplitude - currentAmplitude) * 0.05;

    // Slow, organic ocean wave motion speed
    wavePhase += isPlaying ? 0.009 : 0.002;

    if (currentAmplitude > 0.5) {
      // Draw smooth fluid ocean swell wave along a screen border
      const drawOceanBorderWave = (side) => {
        const layers = [
          { color: colorPrimary, opacity: 0.28, freq: 0.005 / dpr, speedMult: 0.9, baseAmp: currentAmplitude * 1.1 },
          { color: colorSecondary, opacity: 0.35, freq: 0.009 / dpr, speedMult: 1.25, baseAmp: currentAmplitude * 0.85 },
          { color: '#ffffff', opacity: 0.45, freq: 0.013 / dpr, speedMult: 1.6, baseAmp: currentAmplitude * 0.5 }
        ];

        const isHorizontal = side === 'top' || side === 'bottom';
        const length = isHorizontal ? w : h;
        const step = 8 * dpr;

        layers.forEach((layer) => {
          ctx.beginPath();

          if (side === 'top') ctx.moveTo(0, 0);
          else if (side === 'bottom') ctx.moveTo(0, h);
          else if (side === 'left') ctx.moveTo(0, 0);
          else if (side === 'right') ctx.moveTo(w, 0);

          for (let pos = 0; pos <= length; pos += step) {
            const waveVal = Math.sin(pos * layer.freq + wavePhase * layer.speedMult) * (layer.baseAmp * 0.5)
                          + Math.cos(pos * layer.freq * 1.6 - wavePhase * layer.speedMult * 0.7) * (layer.baseAmp * 0.35);

            if (side === 'top') {
              const y = layer.baseAmp * 0.4 + waveVal;
              ctx.lineTo(pos, y);
            } else if (side === 'bottom') {
              const y = h - (layer.baseAmp * 0.4 + waveVal);
              ctx.lineTo(pos, y);
            } else if (side === 'left') {
              const x = layer.baseAmp * 0.4 + waveVal;
              ctx.lineTo(x, pos);
            } else if (side === 'right') {
              const x = w - (layer.baseAmp * 0.4 + waveVal);
              ctx.lineTo(x, pos);
            }
          }

          if (side === 'top') {
            ctx.lineTo(w, 0);
            ctx.closePath();
          } else if (side === 'bottom') {
            ctx.lineTo(w, h);
            ctx.closePath();
          } else if (side === 'left') {
            ctx.lineTo(0, h);
            ctx.closePath();
          } else if (side === 'right') {
            ctx.lineTo(w, h);
            ctx.closePath();
          }

          ctx.fillStyle = layer.color;
          ctx.globalAlpha = layer.opacity;
          ctx.fill();
          ctx.globalAlpha = 1.0;
        });
      };

      // Render 4-border top-down liquid ocean waves
      drawOceanBorderWave('top');
      drawOceanBorderWave('bottom');
      drawOceanBorderWave('left');
      drawOceanBorderWave('right');
    }

    requestAnimationFrame(draw);
  }

  requestAnimationFrame(draw);
}

// ─── Dedicated Standalone Search Modal ───
function setupStandaloneSearchModal() {
  const modal = $('#standaloneSearchModal');
  const input = $('#dedicatedSearchInput');
  const resultsContainer = $('#dedicatedSearchResults');
  const clearBtn = $('#dedicatedSearchClear');
  const closeBtn = $('#dedicatedSearchClose');
  const dockSearchBtn = $('#dockSearchBtn');

  if (!modal || !input || !resultsContainer) return;

  function openSearchModal() {
    modal.classList.remove('hidden');
    setTimeout(() => input.focus(), 150);
  }

  function closeSearchModal() {
    modal.classList.add('hidden');
    input.value = '';
    if (clearBtn) clearBtn.classList.remove('visible');
    renderSearchResults('');
  }

  function renderSearchResults(query) {
    const q = query.toLowerCase().trim();
    if (!q) {
      resultsContainer.innerHTML = '<div class="search-empty-state">Start typing to search your music library...</div>';
      return;
    }

    const matches = TRACKS.filter(t => 
      t.title.toLowerCase().includes(q) || 
      t.artist.toLowerCase().includes(q) || 
      (t.album && t.album.toLowerCase().includes(q))
    );

    if (matches.length === 0) {
      resultsContainer.innerHTML = `<div class="search-empty-state">No songs found matching "${query}"</div>`;
      return;
    }

    resultsContainer.innerHTML = matches.map(t => {
      const idx = TRACKS.indexOf(t);
      return `
        <div class="search-result-item" data-index="${idx}">
          <img src="${t.cover}" class="search-result-thumb" alt="${t.title}">
          <div class="search-result-meta">
            <div class="search-result-title">${t.title}</div>
            <div class="search-result-artist">${t.artist}${t.album ? ' • ' + t.album : ''}</div>
          </div>
          <button class="search-result-play-btn" title="Play Song">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
          </button>
        </div>
      `;
    }).join('');

    $$('.search-result-item', resultsContainer).forEach(item => {
      item.addEventListener('click', () => {
        const idx = parseInt(item.getAttribute('data-index'), 10);
        if (!isNaN(idx)) {
          navigateTo(idx, true);
          closeSearchModal();
        }
      });
    });
  }

  // Open Search Modal when clicking left dock search button
  if (dockSearchBtn) {
    dockSearchBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      openSearchModal();
    });
  }

  // Input event
  input.addEventListener('input', (e) => {
    const val = e.target.value;
    if (clearBtn) clearBtn.classList.toggle('visible', val.length > 0);
    renderSearchResults(val);
  });

  // Clear button
  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      input.value = '';
      clearBtn.classList.remove('visible');
      renderSearchResults('');
      input.focus();
    });
  }

  // Close button
  if (closeBtn) {
    closeBtn.addEventListener('click', closeSearchModal);
  }

  // Click outside to close
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeSearchModal();
    }
  });

  // Keyboard shortcut Esc to close
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      closeSearchModal();
    }
  });
}

// Start canvas visualizer after DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(drawCanvasVisualizer, 500);
  setupPlaylistSystem();
  setupSongOptionsMenu();
  setupStandaloneSearchModal();
  setupAuthSystem();
  setupProfileSystem();
});

/* ================================================
   PLAYLISTS & SONG OPTIONS SYSTEM
   ================================================ */

let activeMenuTrack = null;
let selectedTrackForPlaylist = null;

// ─── Setup Playlists System ───
function setupPlaylistSystem() {
  const tabSongsBtn = $('#tabSongsBtn');
  const tabPlaylistsBtn = $('#tabPlaylistsBtn');
  const songsView = $('#songsView');
  const playlistsView = $('#playlistsView');

  if (tabSongsBtn && tabPlaylistsBtn) {
    tabSongsBtn.addEventListener('click', () => {
      tabSongsBtn.classList.add('active');
      tabPlaylistsBtn.classList.remove('active');
      if (songsView) songsView.classList.remove('hidden');
      if (playlistsView) playlistsView.classList.add('hidden');
    });

    tabPlaylistsBtn.addEventListener('click', async () => {
      tabPlaylistsBtn.classList.add('active');
      tabSongsBtn.classList.remove('active');
      if (playlistsView) playlistsView.classList.remove('hidden');
      if (songsView) songsView.classList.add('hidden');
      await buildPlaylistsView();
    });
  }

  // Active playlist filter banner
  const clearPlaylistFilterBtn = $('#clearPlaylistFilterBtn');
  if (clearPlaylistFilterBtn) {
    clearPlaylistFilterBtn.addEventListener('click', () => {
      activePlaylistFilter = null;
      const banner = $('#activePlaylistBanner');
      if (banner) banner.classList.add('hidden');
      buildLibrary();
    });
  }

  // Create Playlist Modal setup
  const openCreatePlaylistBtn = $('#openCreatePlaylistBtn');
  const createPlaylistModal = $('#createPlaylistModal');
  const closeCreatePlaylistModal = $('#closeCreatePlaylistModal');
  const cancelCreatePlaylistBtn = $('#cancelCreatePlaylistBtn');
  const submitCreatePlaylistBtn = $('#submitCreatePlaylistBtn');

  if (openCreatePlaylistBtn && createPlaylistModal) {
    openCreatePlaylistBtn.addEventListener('click', () => {
      createPlaylistModal.classList.remove('hidden');
    });
  }

  if (closeCreatePlaylistModal) {
    closeCreatePlaylistModal.addEventListener('click', () => {
      if (createPlaylistModal) createPlaylistModal.classList.add('hidden');
    });
  }

  if (cancelCreatePlaylistBtn) {
    cancelCreatePlaylistBtn.addEventListener('click', () => {
      if (createPlaylistModal) createPlaylistModal.classList.add('hidden');
    });
  }

  if (submitCreatePlaylistBtn) {
    submitCreatePlaylistBtn.addEventListener('click', async () => {
      const nameInput = $('#newPlaylistName');
      const descInput = $('#newPlaylistDesc');
      const name = nameInput ? nameInput.value.trim() : '';
      const desc = descInput ? descInput.value.trim() : '';

      if (!name) {
        showToast('Please enter a Playlist name', 'error');
        return;
      }

      const createdPl = await window.musiqoDB.savePlaylist({
        name: name,
        description: desc,
        trackIds: selectedTrackForPlaylist ? [selectedTrackForPlaylist.id] : []
      });

      if (nameInput) nameInput.value = '';
      if (descInput) descInput.value = '';
      if (createPlaylistModal) createPlaylistModal.classList.add('hidden');

      showToast(`✨ Created playlist "${name}"!`, 'success');
      await buildPlaylistsView();

      if (selectedTrackForPlaylist) {
        selectedTrackForPlaylist = null;
        const addToPlaylistModal = $('#addToPlaylistModal');
        if (addToPlaylistModal) addToPlaylistModal.classList.add('hidden');

        openPlaylistView(createdPl);
      }
    });
  }

  // Add To Playlist Modal close button
  const closeAddToPlaylistModal = $('#closeAddToPlaylistModal');
  if (closeAddToPlaylistModal) {
    closeAddToPlaylistModal.addEventListener('click', () => {
      const modal = $('#addToPlaylistModal');
      if (modal) modal.classList.add('hidden');
    });
  }

  const modalCreateNewPlaylistBtn = $('#modalCreateNewPlaylistBtn');
  if (modalCreateNewPlaylistBtn) {
    modalCreateNewPlaylistBtn.addEventListener('click', () => {
      const modal = $('#addToPlaylistModal');
      if (modal) modal.classList.add('hidden');
      if (createPlaylistModal) createPlaylistModal.classList.remove('hidden');
    });
  }
}

// ─── Render Playlists View ───
async function buildPlaylistsView() {
  const container = $('#playlistsList');
  if (!container) return;
  container.innerHTML = '';

  const playlists = await window.musiqoDB.getAllPlaylists();

  if (!playlists || playlists.length === 0) {
    container.innerHTML = `
      <div class="empty-library-state">
        <svg viewBox="0 0 24 24" width="36" height="36" fill="rgba(255,255,255,0.2)"><path d="M4 10h12v2H4zm0-4h12v2H4zm0 8h8v2H4zm10 0v6l5-3z"/></svg>
        <p>No playlists created yet</p>
      </div>
    `;
    return;
  }

  playlists.forEach(pl => {
    const card = document.createElement('div');
    card.className = 'playlist-card';
    card.innerHTML = `
      <div class="playlist-card-icon">🎵</div>
      <div class="playlist-card-info">
        <div class="playlist-card-title">${escapeHtml(pl.name)}</div>
        <div class="playlist-card-meta">${pl.trackIds ? pl.trackIds.length : 0} Tracks ${pl.description ? '• ' + escapeHtml(pl.description) : ''}</div>
      </div>
      <div class="playlist-card-actions">
        <button class="playlist-btn play-pl-btn" title="View Playlist Songs">
          <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
          View
        </button>
        <button class="playlist-btn del-pl-btn" title="Delete Playlist">
          <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/></svg>
        </button>
      </div>
    `;

    // Click to view playlist songs
    const openPl = () => openPlaylistView(pl);

    const playBtn = card.querySelector('.play-pl-btn');
    if (playBtn) {
      playBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        openPl();
      });
    }

    card.addEventListener('click', (e) => {
      if (!e.target.closest('.del-pl-btn')) {
        openPl();
      }
    });

    // Delete playlist
    card.querySelector('.del-pl-btn').addEventListener('click', async (e) => {
      e.stopPropagation();
      const confirmed = await showConfirmDialog({
        title: 'Delete Playlist',
        message: `Are you sure you want to delete playlist "${pl.name}"?`,
        confirmText: 'Delete Playlist',
        icon: '🗑️',
        isDanger: true
      });

      if (confirmed) {
        await window.musiqoDB.deletePlaylist(pl.id);
        showToast(`Deleted playlist "${pl.name}"`, 'info');
        if (activePlaylistFilter && activePlaylistFilter.id === pl.id) {
          activePlaylistFilter = null;
          const banner = $('#activePlaylistBanner');
          if (banner) banner.classList.add('hidden');
        }
        await buildPlaylistsView();
      }
    });

    container.appendChild(card);
  });
}

// ─── Open Playlist View Helper ───
async function openPlaylistView(pl) {
  if (!pl) return;
  try {
    const playlists = await window.musiqoDB.getAllPlaylists();
    const freshPl = playlists.find(p => String(p.id) === String(pl.id)) || pl;
    activePlaylistFilter = freshPl;
  } catch (e) {
    activePlaylistFilter = pl;
  }
  
  const banner = $('#activePlaylistBanner');
  const bannerTitle = $('#bannerPlaylistTitle');
  if (bannerTitle) bannerTitle.textContent = activePlaylistFilter.name;
  if (banner) banner.classList.remove('hidden');

  // Switch to Songs tab
  const tabSongsBtn = $('#tabSongsBtn');
  const tabPlaylistsBtn = $('#tabPlaylistsBtn');
  const songsView = $('#songsView');
  const playlistsView = $('#playlistsView');

  if (tabSongsBtn) tabSongsBtn.classList.add('active');
  if (tabPlaylistsBtn) tabPlaylistsBtn.classList.remove('active');
  if (songsView) songsView.classList.remove('hidden');
  if (playlistsView) playlistsView.classList.add('hidden');

  buildLibrary();
}

// ─── Setup Song Options Menu ───
function setupSongOptionsMenu() {
  const menu = $('#songOptionsMenu');
  const menuDelete = $('#menuOptionDelete');
  const menuAddToPlaylist = $('#menuOptionAddToPlaylist');
  const menuDownload = $('#menuOptionDownload');

  // Close menu on click outside
  document.addEventListener('click', (e) => {
    if (menu && !menu.classList.contains('hidden') && !menu.contains(e.target) && !e.target.closest('.library-item-options-btn')) {
      menu.classList.add('hidden');
    }
  });

  // Action 1: Delete Song
  if (menuDelete) {
    menuDelete.addEventListener('click', () => {
      if (menu) menu.classList.add('hidden');
      if (activeMenuTrack) {
        deleteTrackHandler(activeMenuTrack);
      }
    });
  }

  // Action 2: Add to Playlist
  if (menuAddToPlaylist) {
    menuAddToPlaylist.addEventListener('click', () => {
      if (menu) menu.classList.add('hidden');
      if (activeMenuTrack) {
        openAddToPlaylistModal(activeMenuTrack);
      }
    });
  }

  // Action 3: Download Song (With Cover & Details)
  if (menuDownload) {
    menuDownload.addEventListener('click', () => {
      if (menu) menu.classList.add('hidden');
      if (activeMenuTrack) {
        downloadSongHandler(activeMenuTrack);
      }
    });
  }

  // Action 4: Remove from Playlist
  const menuRemoveFromPlaylist = $('#menuOptionRemoveFromPlaylist');
  if (menuRemoveFromPlaylist) {
    menuRemoveFromPlaylist.addEventListener('click', async () => {
      if (menu) menu.classList.add('hidden');
      if (activeMenuTrack && activePlaylistFilter) {
        await window.musiqoDB.removeTrackFromPlaylist(activePlaylistFilter.id, activeMenuTrack.id);
        if (activePlaylistFilter.trackIds) {
          activePlaylistFilter.trackIds = activePlaylistFilter.trackIds.filter(id => String(id) !== String(activeMenuTrack.id));
        }
        showToast(`Removed "${activeMenuTrack.title}" from ${activePlaylistFilter.name}`, 'info');
        buildLibrary();
      }
    });
  }
}

// ─── Open Contextual Options Menu ───
function openSongOptionsMenu(track, triggerBtn) {
  activeMenuTrack = track;
  const menu = $('#songOptionsMenu');
  const menuTitle = $('#menuSongTitle');
  const menuArtist = $('#menuSongArtist');

  if (!menu) return;

  if (menuTitle) menuTitle.textContent = track.title;
  if (menuArtist) menuArtist.textContent = track.artist;

  // Song Deletion Permission: Only OWNER can delete songs!
  const menuDelete = $('#menuOptionDelete');
  const currentUser = window.musiqoDB ? window.musiqoDB.getCurrentUser() : null;
  const isOwner = currentUser && currentUser.role === 'owner';
  if (menuDelete) {
    if (isOwner) {
      menuDelete.classList.remove('hidden');
    } else {
      menuDelete.classList.add('hidden');
    }
  }

  const menuRemoveFromPlaylist = $('#menuOptionRemoveFromPlaylist');
  if (menuRemoveFromPlaylist) {
    if (activePlaylistFilter) {
      menuRemoveFromPlaylist.classList.remove('hidden');
    } else {
      menuRemoveFromPlaylist.classList.add('hidden');
    }
  }

  const rect = triggerBtn.getBoundingClientRect();
  menu.style.top = `${rect.bottom + window.scrollY + 4}px`;
  menu.style.left = `${Math.min(window.innerWidth - 240, rect.left - 180)}px`;

  menu.classList.remove('hidden');
}

// ─── Action 1: Delete Song Handler ───
async function deleteTrackHandler(track) {
  const currentUser = window.musiqoDB ? window.musiqoDB.getCurrentUser() : null;
  if (!currentUser || currentUser.role !== 'owner') {
    showToast('🔒 Only the Owner can delete songs.', 'error');
    return;
  }
  const confirmed = await showConfirmDialog({
    title: 'Delete Song',
    message: `Are you sure you want to delete "${track.title}" from Musiqo?`,
    confirmText: 'Delete Song',
    icon: '🎵',
    isDanger: true
  });

  if (!confirmed) return;

  try {
    // Delete from IndexedDB / LocalStorage
    await window.musiqoDB.deleteTrack(track.id);

    // Remove from in-memory TRACKS array
    const idx = TRACKS.findIndex(t => String(t.id) === String(track.id));
    if (idx !== -1) {
      TRACKS.splice(idx, 1);
    }

    // If currently playing deleted track, switch track
    if (idx === currentTrackIndex) {
      if (TRACKS.length > 0) {
        currentTrackIndex = currentTrackIndex % TRACKS.length;
        loadTrack(currentTrackIndex, isPlaying);
      }
    } else if (idx < currentTrackIndex) {
      currentTrackIndex = Math.max(0, currentTrackIndex - 1);
    }

    // Rebuild UI
    buildCoverFlow();
    buildLibrary();

    showToast(`🗑️ Deleted "${track.title}"`, 'info');
  } catch (err) {
    console.error('Delete song error:', err);
    showToast('Failed to delete song: ' + err.message, 'error');
  }
}

// ─── Action 2: Add to Playlist Handler ───
async function openAddToPlaylistModal(track) {
  selectedTrackForPlaylist = track;
  const modal = $('#addToPlaylistModal');
  const titleSpan = $('#addToPlaylistSongTitle');
  const listContainer = $('#modalPlaylistsList');

  if (titleSpan) titleSpan.textContent = `"${track.title}"`;
  if (!listContainer || !modal) return;

  listContainer.innerHTML = '';
  const playlists = await window.musiqoDB.getAllPlaylists();

  if (!playlists || playlists.length === 0) {
    listContainer.innerHTML = `<p class="modal-subtitle">No playlists found. Create one below!</p>`;
  } else {
    playlists.forEach(pl => {
      const item = document.createElement('div');
      item.className = 'modal-playlist-item';
      const isAlreadyIn = pl.trackIds && pl.trackIds.map(String).includes(String(track.id));

      item.innerHTML = `
        <div class="item-left">
          <span class="pl-icon">🎵</span>
          <span class="pl-name">${escapeHtml(pl.name)}</span>
        </div>
        <span class="pl-status">${isAlreadyIn ? '✓ Added' : '+ Add'}</span>
      `;

      item.addEventListener('click', async () => {
        const added = await window.musiqoDB.addTrackToPlaylist(pl.id, track.id);
        if (added) {
          showToast(`🎵 Added "${track.title}" to ${pl.name}!`, 'success');
          if (activePlaylistFilter && String(activePlaylistFilter.id) === String(pl.id)) {
            if (!activePlaylistFilter.trackIds) activePlaylistFilter.trackIds = [];
            const strId = String(track.id);
            if (!activePlaylistFilter.trackIds.map(String).includes(strId)) {
              activePlaylistFilter.trackIds.push(track.id);
            }
            buildLibrary();
          }
        } else {
          showToast(`"${track.title}" is already in ${pl.name}`, 'info');
        }
        modal.classList.add('hidden');
      });

      listContainer.appendChild(item);
    });
  }

  modal.classList.remove('hidden');
}

// ─── Action 3: Download Song (With Cover image and Details) ───
function downloadSongHandler(track) {
  showToast(`📥 Downloading "${track.title}" audio, cover image & details...`, 'info');

  const sanitize = (name) => name.replace(/[/\\?%*:|"<>]/g, '_');

  // 1. Download Audio File
  if (track.audio) {
    const audioLink = document.createElement('a');
    audioLink.href = track.audio;
    audioLink.download = `${sanitize(track.artist)} - ${sanitize(track.title)}.mp3`;
    document.body.appendChild(audioLink);
    audioLink.click();
    document.body.removeChild(audioLink);
  }

  // 2. Download Cover Image
  if (track.cover) {
    setTimeout(() => {
      const coverLink = document.createElement('a');
      coverLink.href = track.cover;
      coverLink.download = `${sanitize(track.title)}_Cover.jpg`;
      document.body.appendChild(coverLink);
      coverLink.click();
      document.body.removeChild(coverLink);
    }, 400);
  }

  // 3. Download Details Metadata JSON
  setTimeout(() => {
    const details = {
      title: track.title,
      artist: track.artist,
      album: track.album || 'Single',
      duration: track.duration ? formatTime(track.duration) : '3:15',
      ambientColors: track.colors || ['#ff416c', '#ff4b2b', '#1a0a2a'],
      isUserCustomUpload: !!track.isCustom,
      exportedFrom: 'Musiqo Player',
      exportDate: new Date().toISOString()
    };

    const jsonBlob = new Blob([JSON.stringify(details, null, 2)], { type: 'application/json' });
    const jsonUrl = URL.createObjectURL(jsonBlob);

    const jsonLink = document.createElement('a');
    jsonLink.href = jsonUrl;
    jsonLink.download = `${sanitize(track.title)}_Details.json`;
    document.body.appendChild(jsonLink);
    jsonLink.click();
    document.body.removeChild(jsonLink);

    setTimeout(() => URL.revokeObjectURL(jsonUrl), 2000);
  }, 800);
}

// Helper escape function
function escapeHtml(str) {
  if (!str) return '';
  return String(str).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

// ─── Toast System ───
function showToast(message, type = 'info') {
  let container = document.getElementById('toastContainer');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toastContainer';
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;

  let iconSvg = '';
  if (type === 'success') iconSvg = '<svg viewBox="0 0 24 24" width="18" height="18" fill="#4cd964"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>';
  else if (type === 'error') iconSvg = '<svg viewBox="0 0 24 24" width="18" height="18" fill="#ff3b30"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>';
  else iconSvg = '<svg viewBox="0 0 24 24" width="18" height="18" fill="#007aff"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>';

  toast.innerHTML = `
    <div class="toast-icon">${iconSvg}</div>
    <div class="toast-message">${escapeHtml(message)}</div>
  `;

  container.appendChild(toast);

  setTimeout(() => toast.classList.add('toast-show'), 10);
  setTimeout(() => {
    toast.classList.remove('toast-show');
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}

// ─── Custom Confirm Dialog System ───
function showConfirmDialog({ title = 'Confirm Action', message = 'Are you sure?', confirmText = 'Delete', icon = '🗑️', isDanger = true }) {
  return new Promise((resolve) => {
    const modal = document.getElementById('customConfirmModal');
    const titleEl = document.getElementById('confirmModalTitle');
    const msgEl = document.getElementById('confirmModalMessage');
    const iconEl = document.getElementById('confirmModalIcon');
    const okBtn = document.getElementById('confirmModalOkBtn');
    const cancelBtn = document.getElementById('confirmModalCancelBtn');

    if (!modal || !okBtn || !cancelBtn) {
      resolve(confirm(`${title}\n${message}`));
      return;
    }

    if (titleEl) titleEl.textContent = title;
    if (msgEl) msgEl.textContent = message;
    if (iconEl) iconEl.textContent = icon;

    if (okBtn) {
      okBtn.textContent = confirmText;
      if (isDanger) {
        okBtn.className = 'modal-action-btn danger-action';
      } else {
        okBtn.className = 'modal-action-btn primary-action';
      }
    }

    const cleanup = () => {
      modal.classList.add('hidden');
      okBtn.removeEventListener('click', onOk);
      cancelBtn.removeEventListener('click', onCancel);
    };

    const onOk = () => {
      cleanup();
      resolve(true);
    };

    const onCancel = () => {
      cleanup();
      resolve(false);
    };

    okBtn.addEventListener('click', onOk);
    modal.classList.remove('hidden');
  });
}

/* ================================================
   USER & ADMIN AUTHENTICATION SYSTEM
   ================================================ */

let selectedLoginRole = 'user'; // 'user' or 'admin'

async function updateAuthUI() {
  const sessionUser = window.musiqoDB ? window.musiqoDB.getCurrentUser() : null;
  const headerAuthArea = $('#headerAuthArea');
  const uploadLinks = $$('a[href="upload.html"]');
  const closeBtn = $('#closeAuthModalBtn');
  const mainStage = $('.app-container');

  let user = sessionUser;
  if (sessionUser && window.musiqoDB.getUserByUsername) {
    try {
      const fullUser = await window.musiqoDB.getUserByUsername(sessionUser.username);
      if (fullUser) user = fullUser;
    } catch (e) {}
  }

  // Role-Based Upload Access Control:
  // Regular Users: Hide upload links
  // Admins & Owners: Show upload links
  const canUpload = user && (user.role === 'admin' || user.role === 'owner');
  uploadLinks.forEach(link => {
    if (canUpload) {
      link.style.display = '';
    } else {
      link.style.display = 'none';
    }
  });

  if (!user) {
    // Unauthenticated State: Pause playback, lock main page & force mandatory auth gate
    pausePlayback();
    if (mainStage) mainStage.classList.add('app-locked');
    if (closeBtn) closeBtn.style.display = 'none';

    openAuthModal('login');

    if (headerAuthArea) {
      headerAuthArea.innerHTML = `
        <button class="nav-btn auth-nav-btn" id="openAuthModalBtn">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/></svg>
          Login / Signup
        </button>
      `;
      const openBtn = $('#openAuthModalBtn');
      if (openBtn) openBtn.addEventListener('click', () => openAuthModal('login'));
    }
  } else {
    // Authenticated State: Unlock main page
    if (mainStage) mainStage.classList.remove('app-locked');
    if (closeBtn) closeBtn.style.display = '';
    closeAuthModal();

    if (headerAuthArea) {
      const isOwner = user.role === 'owner';
      const isAdmin = user.role === 'admin';

      let roleClass = 'user';
      let roleTag = '👤 USER';
      if (isOwner) {
        roleClass = 'owner';
        roleTag = '💎 OWNER';
      } else if (isAdmin) {
        roleClass = 'admin';
        roleTag = '👑 ADMIN';
      }

      const nameToShow = user.displayName || user.username;
      const avatarSrc = user.avatar || 'assets/logo.jpg';

      let adminManageBtnHtml = '';
      if (isAdmin || isOwner) {
        adminManageBtnHtml = `<button class="profile-action-btn" id="openAdminMgmtBtn" title="Manage Users & Promote Admins/Owners">Users</button>`;
      }

      headerAuthArea.innerHTML = `
        <div class="user-profile-badge">
          <img src="${avatarSrc}" alt="Avatar" class="user-profile-badge-avatar" id="headerProfileAvatar" onerror="this.src='assets/logo.jpg'">
          <div class="profile-info">
            <span class="profile-username" title="@${escapeHtml(user.username)}">${escapeHtml(nameToShow)}</span>
            <span class="profile-role-tag ${roleClass}">${roleTag}</span>
          </div>
          <button class="profile-action-btn" id="openProfileSettingsBtn" title="Profile & Account Settings">⚙️ Profile</button>
          ${adminManageBtnHtml}
          <button class="profile-action-btn" id="logoutBtn" title="Sign Out">Logout</button>
        </div>
      `;

      const settingsBtn = $('#openProfileSettingsBtn');
      if (settingsBtn) {
        settingsBtn.addEventListener('click', openProfileModal);
      }

      const logoutBtn = $('#logoutBtn');
      if (logoutBtn) {
        logoutBtn.addEventListener('click', async () => {
          const confirmed = await showConfirmDialog({
            title: 'Logout Confirmation',
            message: `Are you sure you want to log out of Musiqo, ${nameToShow}?`,
            confirmText: 'Logout',
            icon: '🚪',
            isDanger: true
          });

          if (confirmed) {
            window.musiqoDB.logoutUser();
            showToast('👋 Logged out successfully', 'info');
            updateAuthUI();
          }
        });
      }

      const manageBtn = $('#openAdminMgmtBtn');
      if (manageBtn) {
        manageBtn.addEventListener('click', openAdminUserMgmtModal);
      }
    }
  }
}

function openAuthModal(initialTab = 'login') {
  const modal = $('#authModal');
  if (!modal) return;

  switchAuthTab(initialTab);
  modal.classList.remove('hidden');
}

function closeAuthModal() {
  const user = window.musiqoDB ? window.musiqoDB.getCurrentUser() : null;
  if (!user) return; // Prevent closing login gate if unauthenticated

  const modal = $('#authModal');
  if (modal) modal.classList.add('hidden');
}

function showAuthError(msg, targetId = 'authErrorNote') {
  const note = $(`#${targetId}`);
  if (!note) return;
  note.textContent = msg;
  note.classList.remove('hidden');
  note.style.animation = 'none';
  note.offsetHeight; // trigger reflow
  note.style.animation = 'shakeError 0.35s ease-in-out';
}

function clearAuthErrors() {
  const loginNote = $('#authErrorNote');
  const regNote = $('#registerErrorNote');
  if (loginNote) loginNote.classList.add('hidden');
  if (regNote) regNote.classList.add('hidden');
}

function switchAuthTab(tab) {
  clearAuthErrors();
  const tabLogin = $('#authTabLogin');
  const tabRegister = $('#authTabRegister');
  const loginForm = $('#loginForm');
  const registerForm = $('#registerForm');
  const titleEl = $('#authModalTitle');

  if (tab === 'register') {
    if (tabLogin) tabLogin.classList.remove('active');
    if (tabRegister) tabRegister.classList.add('active');
    if (loginForm) loginForm.classList.add('hidden');
    if (registerForm) registerForm.classList.remove('hidden');
    if (titleEl) titleEl.textContent = 'Create Listener Account';
  } else {
    if (tabRegister) tabRegister.classList.remove('active');
    if (tabLogin) tabLogin.classList.add('active');
    if (registerForm) registerForm.classList.add('hidden');
    if (loginForm) loginForm.classList.remove('hidden');
    if (titleEl) titleEl.textContent = 'Welcome to Musiqo';
  }
}

function setLoginRole(role) {
  clearAuthErrors();
  selectedLoginRole = role;
  const pillUser = $('#rolePillUser');
  const pillAdmin = $('#rolePillAdmin');
  const submitBtn = $('#loginSubmitBtn');

  if (role === 'admin') {
    if (pillUser) pillUser.classList.remove('active');
    if (pillAdmin) pillAdmin.classList.add('active');
    if (submitBtn) submitBtn.textContent = 'Sign In as Admin 👑';
  } else {
    if (pillAdmin) pillAdmin.classList.remove('active');
    if (pillUser) pillUser.classList.add('active');
    if (submitBtn) submitBtn.textContent = 'Sign In as User 👤';
  }
}

function setupAuthSystem() {
  updateAuthUI();

  // Live input formatting: Force strictly lowercase letters, numbers, and underscores (a-z0-9_)
  ['#loginUsername', '#registerUsername', '#profileUsername', '#adminEditUsername'].forEach(selector => {
    const input = $(selector);
    if (input) {
      input.addEventListener('input', (e) => {
        const start = e.target.selectionStart;
        const oldVal = e.target.value;
        const newVal = oldVal.toLowerCase().replace(/[^a-z0-9_]/g, '');
        if (oldVal !== newVal) {
          e.target.value = newVal;
          try { e.target.setSelectionRange(start, start); } catch (err) {}
        }
      });
    }
  });

  if (window.location.search.includes('action=login_admin')) {
    setLoginRole('admin');
    openAuthModal('login');
  }

  const closeBtn = $('#closeAuthModalBtn');
  const modal = $('#authModal');
  const tabLogin = $('#authTabLogin');
  const tabRegister = $('#authTabRegister');
  const pillUser = $('#rolePillUser');
  const pillAdmin = $('#rolePillAdmin');
  const loginForm = $('#loginForm');
  const registerForm = $('#registerForm');

  if (closeBtn) closeBtn.addEventListener('click', closeAuthModal);
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeAuthModal();
    });
  }

  if (tabLogin) tabLogin.addEventListener('click', () => switchAuthTab('login'));
  if (tabRegister) tabRegister.addEventListener('click', () => switchAuthTab('register'));

  if (pillUser) pillUser.addEventListener('click', () => setLoginRole('user'));
  if (pillAdmin) pillAdmin.addEventListener('click', () => setLoginRole('admin'));

  // Clear errors on input typing
  const loginUserIn = $('#loginUsername');
  const loginPassIn = $('#loginPassword');
  if (loginUserIn) loginUserIn.addEventListener('input', clearAuthErrors);
  if (loginPassIn) loginPassIn.addEventListener('input', clearAuthErrors);

  // Login Form Submit
  if (loginForm) {
    loginForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      clearAuthErrors();
      const usernameInput = $('#loginUsername');
      const passwordInput = $('#loginPassword');

      const username = usernameInput ? usernameInput.value : '';
      const password = passwordInput ? passwordInput.value : '';

      try {
        const user = await window.musiqoDB.authenticateUser({
          username,
          password,
          requestedRole: selectedLoginRole
        });

        showToast(`🎉 Logged in as ${user.username} (${user.role.toUpperCase()})`, 'success');
        closeAuthModal();
        updateAuthUI();

        if (usernameInput) usernameInput.value = '';
        if (passwordInput) passwordInput.value = '';
      } catch (err) {
        showAuthError(err.message, 'authErrorNote');
        showToast(err.message, 'error');
      }
    });
  }

  // Register Form Submit (Always creates regular "user" role)
  if (registerForm) {
    registerForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      clearAuthErrors();
      const usernameInput = $('#registerUsername');
      const passwordInput = $('#registerPassword');

      const username = usernameInput ? usernameInput.value : '';
      const password = passwordInput ? passwordInput.value : '';

      try {
        const newUser = await window.musiqoDB.registerUser({ username, password });
        window.musiqoDB.setCurrentUser(newUser);

        showToast(`✨ Account created! Welcome, ${newUser.username}!`, 'success');
        closeAuthModal();
        updateAuthUI();

        if (usernameInput) usernameInput.value = '';
        if (passwordInput) passwordInput.value = '';
      } catch (err) {
        showAuthError(err.message, 'registerErrorNote');
        showToast(err.message, 'error');
      }
    });
  }

  // Admin User Mgmt Close Button
  const closeAdminBtn = $('#closeAdminMgmtBtn');
  const adminModal = $('#adminUserMgmtModal');
  if (closeAdminBtn) closeAdminBtn.addEventListener('click', () => adminModal.classList.add('hidden'));
  if (adminModal) {
    adminModal.addEventListener('click', (e) => {
      if (e.target === adminModal) adminModal.classList.add('hidden');
    });
  }

  // Admin Edit User Form submit handler
  const adminEditForm = $('#adminEditUserForm');
  const closeAdminEditBtn = $('#closeAdminEditUserBtn');
  const cancelAdminEditBtn = $('#cancelAdminEditUserBtn');
  const adminEditModal = $('#adminEditUserModal');

  if (closeAdminEditBtn) closeAdminEditBtn.addEventListener('click', closeAdminEditUserModal);
  if (cancelAdminEditBtn) cancelAdminEditBtn.addEventListener('click', closeAdminEditUserModal);
  if (adminEditModal) {
    adminEditModal.addEventListener('click', (e) => {
      if (e.target === adminEditModal) closeAdminEditUserModal();
    });
  }

  if (adminEditForm) {
    adminEditForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const origUsername = $('#adminTargetOriginalUsername')?.value;
      const displayName = $('#adminEditDisplayName')?.value;
      const username = $('#adminEditUsername')?.value;
      const newPassword = $('#adminEditNewPassword')?.value;

      try {
        await window.musiqoDB.adminUpdateUserProfile(origUsername, {
          displayName,
          username,
          newPassword
        });

        showToast(`🎉 User @${username} profile & password updated by Admin!`, 'success');
        closeAdminEditUserModal();
        openAdminUserMgmtModal(); // Refresh user list
        updateAuthUI();
      } catch (err) {
        showAuthError(err.message, 'adminEditUserErrorNote');
        showToast(err.message, 'error');
      }
    });
  }
}

// Open Admin User Management Modal
async function openAdminUserMgmtModal() {
  const modal = $('#adminUserMgmtModal');
  const listContainer = $('#adminUsersList');
  const searchInput = $('#adminUserSearchInput');
  if (!modal || !listContainer) return;

  const allUsers = await window.musiqoDB.getAllUsers();

  function renderUserList(query = '') {
    listContainer.innerHTML = '';
    const activeUser = window.musiqoDB ? window.musiqoDB.getCurrentUser() : null;
    const isOwner = activeUser && activeUser.role === 'owner';
    const isAdmin = activeUser && activeUser.role === 'admin';

    const cleanQuery = query.trim().toLowerCase();
    const filteredUsers = (allUsers || []).filter(u => {
      if (!cleanQuery) return true;
      const nameMatch = (u.displayName || '').toLowerCase().includes(cleanQuery);
      const handleMatch = (u.username || '').toLowerCase().includes(cleanQuery);
      const roleMatch = (u.role || '').toLowerCase().includes(cleanQuery);
      return nameMatch || handleMatch || roleMatch;
    });

    if (!filteredUsers || filteredUsers.length === 0) {
      listContainer.innerHTML = `<p class="admin-mgmt-subtitle" style="padding: 16px; text-align: center; color: rgba(255,255,255,0.6);">🔍 No registered users match "${escapeHtml(query)}".</p>`;
      return;
    }

    filteredUsers.forEach(u => {
      const row = document.createElement('div');
      row.className = 'admin-user-row';

      const isTargetOwner = u.role === 'owner';
      const isTargetAdmin = u.role === 'admin';
      const isSelf = activeUser && u.username.toLowerCase() === activeUser.username.toLowerCase();

      let roleTag = '<span class="profile-role-tag user">👤 USER</span>';
      if (isTargetOwner) {
        roleTag = '<span class="profile-role-tag owner">💎 OWNER</span>';
      } else if (isTargetAdmin) {
        roleTag = '<span class="profile-role-tag admin">👑 ADMIN</span>';
      }

      let actionButtonsHtml = '';

      // Permission Hierarchy Rules:
      // 1. Target is Owner & not self -> Protected Owner
      // 2. Target is Admin & active user is Admin (not Owner) -> Protected Admin
      // 3. Otherwise -> Edit & Promote options available!
      if (isTargetOwner && !isSelf) {
        actionButtonsHtml = `<span style="font-size:0.75rem; color:rgba(255,215,0,0.8); font-weight:600;">💎 Owner (Protected)</span>`;
      } else if (isAdmin && isTargetAdmin && !isSelf) {
        actionButtonsHtml = `<span style="font-size:0.75rem; color:rgba(255,215,0,0.7); font-weight:600;">👑 Admin (Protected)</span>`;
      } else {
        let extraRoleBtns = '';
        if (isTargetAdmin && isOwner) {
          extraRoleBtns = `
            <button class="promote-btn demote-user-btn" data-username="${escapeHtml(u.username)}" style="background: rgba(255, 75, 75, 0.2); color: #ff6b6b; border: 1px solid rgba(255, 75, 75, 0.4);">Demote to User</button>
            <button class="promote-btn make-admin-btn" data-username="${escapeHtml(u.username)}">Make Owner 💎</button>
          `;
        } else if (!isTargetOwner) {
          extraRoleBtns = `<button class="promote-btn make-admin-btn" data-username="${escapeHtml(u.username)}">Promote to Admin</button>`;
        }

        let deleteBtnHtml = '';
        if (isOwner && !isTargetOwner && !isSelf) {
          deleteBtnHtml = `<button class="promote-btn delete-user-btn" data-username="${escapeHtml(u.username)}" style="background: rgba(220, 38, 38, 0.25); color: #f87171; border: 1px solid rgba(239, 68, 68, 0.4);" title="Delete Account Permanently">🗑️ Delete</button>`;
        }

        actionButtonsHtml = `
          <div style="display:flex; gap:8px; align-items:center; flex-shrink:0;">
            <button class="promote-btn edit-user-btn" data-username="${escapeHtml(u.username)}" style="background: rgba(255,255,255,0.12); color:#fff;">✏️ Edit</button>
            ${extraRoleBtns}
            ${deleteBtnHtml}
          </div>
        `;
      }

      row.innerHTML = `
        <div class="admin-user-info">
          <span class="admin-user-name">${escapeHtml(u.displayName || u.username)} <small style="opacity:0.6; font-size:0.75rem;">(@${escapeHtml(u.username)})</small></span>
          ${roleTag}
        </div>
        <div>${actionButtonsHtml}</div>
      `;

      const editBtn = row.querySelector('.edit-user-btn');
      if (editBtn) {
        editBtn.addEventListener('click', () => openAdminEditUserModal(u));
      }

      const deleteUserBtn = row.querySelector('.delete-user-btn');
      if (deleteUserBtn) {
        deleteUserBtn.addEventListener('click', async () => {
          const confirmed = await showConfirmDialog({
            title: 'Delete Account',
            message: `Are you sure you want to PERMANENTLY delete user account "@${u.username}" (${u.displayName || u.username})? This action cannot be undone.`,
            confirmText: 'Delete Account',
            icon: '🗑️',
            isDanger: true
          });

          if (confirmed) {
            try {
              await window.musiqoDB.deleteUserAccount(u.username);
              showToast(`🗑️ Account "@${u.username}" deleted successfully`, 'info');
              openAdminUserMgmtModal();
              updateAuthUI();
            } catch (err) {
              showToast(err.message, 'error');
            }
          }
        });
      }

      const demoteBtn = row.querySelector('.demote-user-btn');
      if (demoteBtn) {
        demoteBtn.addEventListener('click', async () => {
          const confirmed = await showConfirmDialog({
            title: 'Demote Admin',
            message: `Are you sure you want to demote Admin "@${u.username}" to regular User role?`,
            confirmText: 'Demote to User',
            icon: '👤',
            isDanger: true
          });

          if (confirmed) {
            try {
              await window.musiqoDB.demoteAdminToUser(u.username);
              showToast(`👤 "@${u.username}" moved to User role!`, 'info');
              openAdminUserMgmtModal();
              updateAuthUI();
            } catch (err) {
              showToast(err.message, 'error');
            }
          }
        });
      }

      const makeAdminBtn = row.querySelector('.make-admin-btn');
      if (makeAdminBtn) {
        makeAdminBtn.addEventListener('click', async () => {
          try {
            if (isOwner && u.role === 'admin') {
              await window.musiqoDB.promoteUserToOwner(u.username);
              showToast(`💎 "${u.username}" promoted to Owner!`, 'success');
            } else {
              await window.musiqoDB.promoteUserToAdmin(u.username);
              showToast(`👑 "${u.username}" promoted to Admin!`, 'success');
            }
            openAdminUserMgmtModal(); // Refresh list
            updateAuthUI();
          } catch (err) {
            showToast(err.message, 'error');
          }
        });
      }

      listContainer.appendChild(row);
    });
  }

  // Wire search input listener
  if (searchInput && !searchInput.dataset.listening) {
    searchInput.dataset.listening = 'true';
    searchInput.addEventListener('input', (e) => {
      renderUserList(e.target.value);
    });
  }

  if (searchInput) searchInput.value = '';
  renderUserList('');
  modal.classList.remove('hidden');
}

// Open Admin Edit User Modal
function openAdminEditUserModal(targetUser) {
  const modal = $('#adminEditUserModal');
  if (!modal || !targetUser) return;

  const titleEl = $('#adminEditUserTitle');
  const origUserIn = $('#adminTargetOriginalUsername');
  const nameIn = $('#adminEditDisplayName');
  const usernameIn = $('#adminEditUsername');
  const passIn = $('#adminEditNewPassword');
  const errNote = $('#adminEditUserErrorNote');

  if (errNote) errNote.classList.add('hidden');
  if (titleEl) titleEl.textContent = `Admin Edit User: @${targetUser.username}`;
  if (origUserIn) origUserIn.value = targetUser.username;
  if (nameIn) nameIn.value = targetUser.displayName || '';
  if (usernameIn) usernameIn.value = targetUser.username;
  if (passIn) passIn.value = '';

  modal.classList.remove('hidden');
}

function closeAdminEditUserModal() {
  const modal = $('#adminEditUserModal');
  if (modal) modal.classList.add('hidden');
}

/* ================================================
   USER PROFILE & ACCOUNT SETTINGS SYSTEM
   ================================================ */

let currentProfileAvatar = 'assets/logo.jpg';

async function openProfileModal() {
  const modal = $('#profileModal');
  const user = window.musiqoDB ? window.musiqoDB.getCurrentUser() : null;
  if (!modal || !user) return;

  // Clear previous errors
  const errNote = $('#profileErrorNote');
  if (errNote) errNote.classList.add('hidden');

  // Fetch latest user data from DB
  const fullUser = await window.musiqoDB.getUserByUsername(user.username);
  const activeUser = fullUser || user;

  const displayNameIn = $('#profileDisplayName');
  const usernameIn = $('#profileUsername');
  const curPassIn = $('#profileCurrentPassword');
  const newPassIn = $('#profileNewPassword');
  const avatarPreview = $('#profileAvatarPreview');

  if (displayNameIn) displayNameIn.value = activeUser.displayName || '';
  if (usernameIn) usernameIn.value = activeUser.username || '';
  if (curPassIn) curPassIn.value = '';
  if (newPassIn) newPassIn.value = '';

  currentProfileAvatar = activeUser.avatar || 'assets/logo.jpg';
  if (avatarPreview) avatarPreview.src = currentProfileAvatar;

  modal.classList.remove('hidden');
}

function closeProfileModal() {
  const modal = $('#profileModal');
  if (modal) modal.classList.add('hidden');
}

function setupProfileSystem() {
  const modal = $('#profileModal');
  const closeBtn = $('#closeProfileModalBtn');
  const cancelBtn = $('#cancelProfileBtn');
  const profileForm = $('#profileForm');

  const uploadAvatarBtn = $('#uploadAvatarBtn');
  const avatarFileInput = $('#avatarFileInput');
  const avatarPreview = $('#profileAvatarPreview');
  const presetBtns = $$('.preset-avatar-btn');

  if (closeBtn) closeBtn.addEventListener('click', closeProfileModal);
  if (cancelBtn) cancelBtn.addEventListener('click', closeProfileModal);
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeProfileModal();
    });
  }

  // Upload Custom Avatar File
  if (uploadAvatarBtn && avatarFileInput) {
    uploadAvatarBtn.addEventListener('click', () => avatarFileInput.click());
    avatarFileInput.addEventListener('change', (e) => {
      if (e.target.files && e.target.files[0]) {
        const file = e.target.files[0];
        if (!file.type.startsWith('image/')) {
          showAuthError('Please select a valid image file (PNG, JPG, WEBP).', 'profileErrorNote');
          return;
        }
        const reader = new FileReader();
        reader.onload = (evt) => {
          currentProfileAvatar = evt.target.result;
          if (avatarPreview) avatarPreview.src = currentProfileAvatar;
          showToast('📸 Custom Profile Picture loaded!', 'info');
        };
        reader.readAsDataURL(file);
      }
    });
  }

  // Preset Avatar Buttons
  const presetAvatarsMap = {
    cyber: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=150&auto=format&fit=crop&q=80',
    neon: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?w=150&auto=format&fit=crop&q=80',
    star: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&auto=format&fit=crop&q=80',
    fire: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=150&auto=format&fit=crop&q=80',
    crown: 'https://images.unsplash.com/photo-1563089145-599997674d42?w=150&auto=format&fit=crop&q=80',
    dj: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=150&auto=format&fit=crop&q=80'
  };

  presetBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const presetKey = btn.dataset.preset;
      if (presetAvatarsMap[presetKey]) {
        currentProfileAvatar = presetAvatarsMap[presetKey];
        if (avatarPreview) avatarPreview.src = currentProfileAvatar;
        showToast('✨ Preset avatar selected!', 'info');
      }
    });
  });

  // Profile Form Submit Handler
  if (profileForm) {
    profileForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const user = window.musiqoDB ? window.musiqoDB.getCurrentUser() : null;
      if (!user) return;

      const displayNameIn = $('#profileDisplayName');
      const usernameIn = $('#profileUsername');
      const curPassIn = $('#profileCurrentPassword');
      const newPassIn = $('#profileNewPassword');

      const displayName = displayNameIn ? displayNameIn.value : '';
      const newUsername = usernameIn ? usernameIn.value : '';
      const currentPassword = curPassIn ? curPassIn.value : '';
      const newPassword = newPassIn ? newPassIn.value : '';

      try {
        const updatedUser = await window.musiqoDB.updateUserProfile(user.username, {
          displayName,
          username: newUsername,
          currentPassword,
          newPassword,
          avatar: currentProfileAvatar
        });

        showToast('🎉 Profile & Account Settings updated successfully!', 'success');
        closeProfileModal();
        updateAuthUI();
      } catch (err) {
        showAuthError(err.message, 'profileErrorNote');
        showToast(err.message, 'error');
      }
    });
  }
}

