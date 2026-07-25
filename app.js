/* ================================================
   AURORA MUSIC PLAYER - Main Application Logic
   ================================================ */

// ─── Track Library ───
const TRACKS = [
  {
    id: 1,
    title: 'Seedhe Maut',
    artist: '11K',
    album: 'Voicenotes',
    cover: 'assets/11k.jpg',
    audio: 'assets/Music/11k.mp3',
    colors: ['#8b0000', '#cc6600', '#6b1a1a']
  },
  {
    id: 2,
    title: 'Shubh',
    artist: 'Balenci',
    album: 'Loud',
    cover: 'assets/Balenci.jpg',
    audio: 'assets/Music/Balenci.mp3',
    colors: ['#7a0028', '#991a1a', '#8b2252']
  },
  {
    id: 3,
    title: 'Arijit Singh',
    artist: 'Tu Hi Hai Aashiqui',
    album: 'Rolling Papers',
    cover: 'assets/Aashiqui.jpg',
    audio: 'assets/Music/Aashiqui.mp3',
    colors: ['#8b7300', '#9e5a00', '#1a1a1a']
  },
  {
    id: 4,
    title: 'Armaan Khan, Rashmi Virag',
    artist: 'Mujhko Barsaat Bana Lo',
    album: 'Island Vibes',
    cover: 'assets/Barsaat.jpg',
    audio: 'assets/Music/Barsaat.mp3',
    colors: ['#1a5c32', '#8b5e00', '#7a1a1a']
  },
  {
    id: 5,
    title: 'Shubh',
    artist: 'Bounce',
    album: 'Pink Friday',
    cover: 'assets/Bounce.jpg',
    audio: 'assets/Music/Bounce.mp3',
    colors: ['#801a55', '#5c2d82', '#8b2252']
  },
  {
    id: 6,
    title: 'Seedhe Maut',
    artist: 'Champions',
    album: 'After Hours',
    cover: 'assets/smx.jpg',
    audio: 'assets/Music/Champions.mp3',
    colors: ['#2d1a6b', '#4a3a8b', '#0a4a7a']
  },
  {
    id: 7,
    title: 'Arijit Singh, Parampara Thakur',
    artist: 'Pal Pal Dil Ke Pass',
    album: 'Fearless',
    cover: 'assets/Dil.jpg',
    audio: 'assets/Music/Dil.mp3',
    colors: ['#8b7700', '#9e7a00', '#7a3a2a']
  },
  {
    id: 8,
    title: 'Vishal Vaid',
    artist: 'Fakira',
    album: 'Nothing but the Beat',
    cover: 'assets/Fakira.jpg',
    audio: 'assets/Music/Fakira.mp3',
    colors: ['#0a4a5c', '#1a3a5c', '#0d2a3a']
  },
  {
    id: 9,
    title: 'Jyotica Tangri, Kumaar',
    artist: 'Ishq De Fanniyar',
    album: 'It Might as Well Be Swing',
    cover: 'assets/Fanniyar.jpg',
    audio: 'assets/Music/Fanniyar.mp3',
    colors: ['#2a1a00', '#4a3520', '#1a1020']
  },
  {
    id: 10,
    title: 'The PropheC',
    artist: 'Kina Chir',
    album: 'Hotel California',
    cover: 'assets/Chir.jpg',
    audio: 'assets/Music/Chir.mp3',
    colors: ['#6b3a1a', '#8b5a2a', '#3a1a0a']
  },
  {
    id: 11,
    title: 'Javed Ali, Banjyotsna',
    artist: 'Gale Lag Ja',
    album: 'Study Session',
    cover: 'assets/Gale.jpg',
    audio: 'assets/Music/Gale.mp3',
    colors: ['#1a1a3a', '#2a1a4a', '#0a2a3a']
  },
  {
    id: 12,
    title: 'Deep Dhaliwal, Anker Deol',
    artist: 'Hypotonic',
    album: 'Starboy',
    cover: 'assets/Hypotonic.jpg',
    audio: 'assets/Music/Hypnotic.mp3',
    colors: ['#1a0a3a', '#3a1a5a', '#0a1a2a']
  },
  {
    id: 13,
    title: 'Pritam, Javed Bashir, Nikhil D\'Souza, Shefali Alvares, Irshad Kamil',
    artist: 'Tera Naam Japdi Phiraan',
    album: 'Divide',
    cover: 'assets/Japdi.jpg',
    audio: 'assets/Music/Japdi.mp3',
    colors: ['#5a3a1a', '#7a5a2a', '#2a1a0a']
  },
  {
    id: 14,
    title: 'Seedhe Maut',
    artist: 'Khatta Flow',
    album: 'Future Nostalgia',
    cover: 'assets/smx.jpg',
    audio: 'assets/Music/Khatta.mp3',
    colors: ['#5a1a5a', '#3a0a4a', '#7a2a6a']
  },
  {
    id: 15,
    title: 'Seedhe Maut',
    artist: 'KODAK',
    album: 'A Night at the Opera',
    cover: 'assets/Kodak.jpg',
    audio: 'assets/Music/Kodak.mp3',
    colors: ['#3a1a0a', '#5a2a1a', '#1a0a0a']
  },
  {
    id: 16,
    title: 'Anand Raj Anand',
    artist: 'Uncha Lamba Kad',
    album: 'Hollywood\'s Bleeding',
    cover: 'assets/Lamba.jpg',
    audio: 'assets/Music/Lamba.mp3',
    colors: ['#2a1a3a', '#1a2a3a', '#3a2a4a']
  },
  {
    id: 17,
    title: 'Navaan Sandhu',
    artist: 'Moodshift',
    album: 'Spider-Verse Soundtrack',
    cover: 'assets/Moodshift.jpg',
    audio: 'assets/Music/Moodshift.mp3',
    colors: ['#5a4a00', '#7a5a10', '#3a2a00']
  },
  {
    id: 18,
    title: 'Zher Vibe, Intense, Sardar Khehra',
    artist: 'Sensation',
    album: 'Hurry Up, We\'re Dreaming',
    cover: 'assets/Sensation.jpg',
    audio: 'assets/Music/Sensation.mp3',
    colors: ['#1a0a4a', '#0a2a5a', '#2a1a3a']
  },
  {
    id: 19,
    title: 'Arijit Singh, White Noise Collectives, Amitabh Bhattacharya',
    artist: 'Sitaare',
    album: 'Fine Line',
    cover: 'assets/Sitaare.jpg',
    audio: 'assets/Music/Sitaare.mp3',
    colors: ['#5a2a1a', '#7a4a2a', '#3a1a0a']
  },
  {
    id: 20,
    title: 'Zher Vibe, Intense',
    artist: 'One Wish',
    album: 'Classical Masterpieces',
    cover: 'assets/Wish.jpg',
    audio: 'assets/Music/Wish.mp3',
    colors: ['#0a0a1a', '#1a1a2a', '#0a0a0a']
  }
];

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
audio.crossOrigin = 'anonymous';
audio.preload = 'metadata';

const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

// ─── Initialize ───
document.addEventListener('DOMContentLoaded', () => {
  buildCoverFlow();
  setupPlayerControls();
  setupProgressBar();
  setupVolumeControl();
  setupDragSwipe();
  setupKeyboard();
  buildLibrary();
  setupLibrary();
  loadTrack(currentTrackIndex, false);
  updateAmbientBackground();
  startVisualizerFallback();
  startPhysicsEngine();
});

// ─── Build Cover Flow Cards ───
function buildCoverFlow() {
  const track = $('.coverflow-track');
  TRACKS.forEach((t, i) => {
    const card = document.createElement('div');
    card.className = 'album-card';
    card.dataset.index = i;
    card.innerHTML = `
      <div class="card-image-wrapper">
        <img class="card-image" src="${t.cover}" alt="${t.album}" loading="lazy">
      </div>
      <div class="card-info">
        <div class="card-artist">${t.artist}</div>
        <div class="card-title">${t.title}</div>
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

// ─── Build Song Library Sidebar (240+ FPS pre-cached) ───
const trackSearchIndex = [];

function buildLibrary() {
  const list = $('.library-list');
  if (!list) return;
  list.innerHTML = '';
  trackSearchIndex.length = 0;

  TRACKS.forEach((t, i) => {
    trackSearchIndex.push(`${t.title} ${t.artist} ${t.album}`.toLowerCase());

    const item = document.createElement('div');
    item.className = 'library-item' + (i === currentTrackIndex ? ' active' : '');
    item.dataset.index = i;
    item.innerHTML = `
      <img class="library-item-cover" src="${t.cover}" alt="${t.album}" loading="lazy">
      <div class="library-item-info">
        <div class="library-item-title">${t.title}</div>
        <div class="library-item-artist">${t.artist}</div>
      </div>
      <div class="library-item-badge">
        <span class="wave-container mini-btn-wave library-item-wave" role="status">
          <span class="wave-bar" style="--i: 0; height: 50%"></span>
          <span class="wave-bar" style="--i: 1; height: 75%"></span>
          <span class="wave-bar" style="--i: 2; height: 100%"></span>
        </span>
        <span class="library-item-duration">1:35</span>
      </div>
    `;
    item.addEventListener('click', () => {
      navigateTo(i);
      updateLibraryActive();
    });
    list.appendChild(item);
  });
}

function updateLibraryActive() {
  const items = $$('.library-item');
  items.forEach((item, i) => {
    item.classList.toggle('active', i === currentTrackIndex);
  });
}

function setupLibrary() {
  const toggleBtn = $('.library-toggle');
  const panel = $('.library-panel');
  const backdrop = $('#libraryBackdrop');

  function closeLibrary() {
    if (panel) panel.classList.remove('open');
    if (toggleBtn) toggleBtn.classList.remove('active-toggle');
  }

  if (toggleBtn && panel) {
    toggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      panel.classList.toggle('open');
      toggleBtn.classList.toggle('active-toggle');
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

// ─── Uncapped 240+ FPS Infinite Circular Loop ───
function startPhysicsEngine() {
  function renderFrame(now) {
    const dt = Math.min((now - lastPhysicsTime) / 1000, 0.05);
    lastPhysicsTime = now;

    // Frame-rate independent exponential lerp for 1s smooth transition
    const lerpRate = 1 - Math.exp(-6.0 * dt);
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

      card.style.transform = `translateX(${tx.toFixed(2)}px) translateZ(${tz.toFixed(2)}px) rotateY(${ry.toFixed(2)}deg) scale(${scale.toFixed(3)})`;
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
function navigateTo(index) {
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
function loadTrack(index, autoplay) {
  const track = TRACKS[index];

  // Update now playing info
  const npThumb = $('.now-playing-thumb');
  const npTitle = $('.np-title');
  const npArtist = $('.np-artist');

  if (npThumb) npThumb.src = track.cover;
  if (npTitle) npTitle.textContent = track.artist;
  if (npArtist) npArtist.textContent = track.title;

  // Audio file support
  if (track.audio) {
    audio.src = track.audio;
    audio.currentTime = 0;
    if (autoplay) {
      isPlaying = true;
      updatePlayButton();
      audio.play().catch(() => {});
    }
  } else {
    audio.pause();
    audio.src = '';
    audio.currentTime = 0;
    updateProgressUI(0, SIMULATED_DURATION);
    if (autoplay) {
      simulatePlayback();
    }
  }
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
  audio.pause();
  if (simulationInterval) {
    cancelAnimationFrame(simulationInterval);
    simulationInterval = null;
  }
}

function togglePlay() {
  const track = TRACKS[currentTrackIndex];
  if (isPlaying) {
    pausePlayback();
  } else {
    if (track && track.audio) {
      if (!audio.src || !audio.src.includes(encodeURI(track.audio))) {
        audio.src = track.audio;
      }
      audio.play().then(() => {
        isPlaying = true;
        updatePlayButton();
      }).catch(err => {
        console.log('Audio play error, falling back:', err);
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

  // Real HTML5 Audio Event Listeners
  audio.addEventListener('timeupdate', () => {
    if (audio.duration && !isNaN(audio.duration)) {
      updateProgressUI(audio.currentTime, audio.duration);
    }
  });

  audio.addEventListener('ended', () => {
    if (repeatMode === 2) {
      audio.currentTime = 0;
      audio.play().catch(() => {});
    } else {
      nextTrack();
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
  if (!btnPlay) return;
  const svg = btnPlay.querySelector('svg');
  if (isPlaying) {
    svg.innerHTML = '<rect x="6" y="4" width="4" height="16" rx="1"/><rect x="14" y="4" width="4" height="16" rx="1"/>';
  } else {
    svg.innerHTML = '<path d="M8 5v14l11-7z"/>';
  }
}

// ─── Volume ───
function setupVolumeControl() {
  const slider = $('.volume-slider');
  if (!slider) return;
  slider.value = 80;
  slider.addEventListener('input', (e) => {
    const vol = e.target.value / 100;
    audio.volume = vol;
    // Update icon
    const volBtn = $('.btn-volume');
    if (volBtn) {
      const svg = volBtn.querySelector('svg');
      if (vol === 0) {
        svg.innerHTML = '<path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/>';
      } else if (vol < 0.5) {
        svg.innerHTML = '<path d="M18.5 12c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM5 9v6h4l5 5V4L9 9H5z"/>';
      } else {
        svg.innerHTML = '<path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>';
      }
    }
  });
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

// ─── Canvas Visualizer (Smooth lerp) ───
let canvasBarTargets = [];
let canvasBarCurrents = [];

function drawCanvasVisualizer() {
  const canvas = $('.audio-visualizer-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  canvas.width = canvas.offsetWidth * 2;
  canvas.height = canvas.offsetHeight * 2;
  ctx.scale(2, 2);

  const w = canvas.offsetWidth;
  const h = canvas.offsetHeight;
  const barCount = 64;
  const barWidth = w / barCount - 2;
  let track = TRACKS[currentTrackIndex];

  canvasBarTargets = new Array(barCount).fill(2);
  canvasBarCurrents = new Array(barCount).fill(2);
  let targetCounter = 0;

  function draw() {
    track = TRACKS[currentTrackIndex];
    ctx.clearRect(0, 0, w, h);

    targetCounter++;
    // Update targets every ~8 frames for organic movement
    if (targetCounter % 8 === 0) {
      for (let i = 0; i < barCount; i++) {
        canvasBarTargets[i] = isPlaying
          ? Math.random() * h * 0.8 + 2
          : 2;
      }
    }

    const lerpFactor = 0.14;
    for (let i = 0; i < barCount; i++) {
      canvasBarCurrents[i] += (canvasBarTargets[i] - canvasBarCurrents[i]) * lerpFactor;
      const barHeight = canvasBarCurrents[i];

      const gradient = ctx.createLinearGradient(0, h, 0, h - barHeight);
      gradient.addColorStop(0, track.colors[0] + '60');
      gradient.addColorStop(1, track.colors[1] + '30');
      ctx.fillStyle = gradient;

      const x = i * (barWidth + 2);
      ctx.fillRect(x, h - barHeight, barWidth, barHeight);
    }

    requestAnimationFrame(draw);
  }
  draw();
}

// Start canvas visualizer after DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(drawCanvasVisualizer, 500);
});
