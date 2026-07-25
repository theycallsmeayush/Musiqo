/* ================================================
   MUSIQO - IndexedDB & Storage Engine (Tracks & Playlists)
   ================================================ */

const DB_NAME = 'MusiqoDB';
const DB_VERSION = 2; // Incremented for playlists store
const STORE_TRACKS = 'custom_tracks';
const STORE_PLAYLISTS = 'custom_playlists';

const LOCAL_STORAGE_TRACKS = 'musiqo_custom_tracks_backup';
const LOCAL_STORAGE_PLAYLISTS = 'musiqo_custom_playlists_backup';

class MusiqoDatabase {
  constructor() {
    this.db = null;
  }

  // Initialize & open database
  async init() {
    if (this.db) return this.db;

    return new Promise((resolve) => {
      if (!window.indexedDB) {
        console.warn('IndexedDB not supported, fallback to localStorage');
        resolve(null);
        return;
      }

      const request = indexedDB.open(DB_NAME, DB_VERSION);

      request.onupgradeneeded = (event) => {
        const db = event.target.result;
        if (!db.objectStoreNames.contains(STORE_TRACKS)) {
          const store = db.createObjectStore(STORE_TRACKS, { keyPath: 'id' });
          store.createIndex('timestamp', 'timestamp', { unique: false });
        }
        if (!db.objectStoreNames.contains(STORE_PLAYLISTS)) {
          const pStore = db.createObjectStore(STORE_PLAYLISTS, { keyPath: 'id' });
          pStore.createIndex('created', 'created', { unique: false });
        }
      };

      request.onsuccess = (event) => {
        this.db = event.target.result;
        resolve(this.db);
      };

      request.onerror = (event) => {
        console.error('MusiqoDB IndexedDB error:', event.target.error);
        resolve(null);
      };
    });
  }

  // ─── TRACKS API ───

  // Get all user-uploaded custom tracks (sorted by oldest first so uploaded songs go to end of list!)
  async getAllTracks() {
    try {
      const db = await this.init();
      if (db && db.objectStoreNames.contains(STORE_TRACKS)) {
        const idbTracks = await new Promise((resolve) => {
          const tx = db.transaction(STORE_TRACKS, 'readonly');
          const store = tx.objectStore(STORE_TRACKS);
          const request = store.getAll();

          request.onsuccess = () => {
            const tracks = request.result || [];
            // Sort by oldest first so newly uploaded songs append to end of existing song list
            tracks.sort((a, b) => (a.timestamp || 0) - (b.timestamp || 0));
            resolve(tracks);
          };

          request.onerror = () => resolve([]);
        });

        if (idbTracks && idbTracks.length > 0) {
          return idbTracks;
        }
      }
    } catch (e) {
      console.warn('IndexedDB getAllTracks failed:', e);
    }

    // Fallback to localStorage
    try {
      const raw = localStorage.getItem(LOCAL_STORAGE_TRACKS);
      if (raw) {
        const parsed = JSON.parse(raw);
        parsed.sort((a, b) => (a.timestamp || 0) - (b.timestamp || 0));
        return parsed;
      }
    } catch (e) {
      console.warn('LocalStorage backup read error:', e);
    }

    return [];
  }

  // Save new custom track
  async saveTrack(trackData) {
    const record = {
      id: trackData.id || `user_${Date.now()}_${Math.random().toString(36).substr(2, 5)}`,
      title: trackData.title || 'Untitled Track',
      artist: trackData.artist || 'Unknown Artist',
      album: trackData.album || 'Single',
      cover: trackData.cover,
      audio: trackData.audio,
      colors: trackData.colors || ['#ff416c', '#ff4b2b', '#1a0a2a'],
      duration: trackData.duration || 0,
      isCustom: true,
      timestamp: Date.now()
    };

    try {
      const db = await this.init();
      if (db && db.objectStoreNames.contains(STORE_TRACKS)) {
        await new Promise((resolve) => {
          const tx = db.transaction(STORE_TRACKS, 'readwrite');
          const store = tx.objectStore(STORE_TRACKS);
          const request = store.put(record);
          request.onsuccess = () => resolve(true);
          request.onerror = () => resolve(false);
        });
      }
    } catch (e) {
      console.warn('IndexedDB save error:', e);
    }

    // Backup to localStorage
    try {
      const existing = await this.getAllTracks();
      const filtered = existing.filter(t => t.id !== record.id);
      filtered.push(record); // Append to end
      const toStore = filtered.slice(-20); // Keep max 20
      localStorage.setItem(LOCAL_STORAGE_TRACKS, JSON.stringify(toStore));
    } catch (e) {
      console.warn('LocalStorage backup write error:', e);
    }

    return record;
  }

  // Delete track by ID
  async deleteTrack(id) {
    try {
      const db = await this.init();
      if (db && db.objectStoreNames.contains(STORE_TRACKS)) {
        const tx = db.transaction(STORE_TRACKS, 'readwrite');
        const store = tx.objectStore(STORE_TRACKS);
        store.delete(id);
      }
    } catch (e) {
      console.warn('IndexedDB delete error:', e);
    }

    try {
      const raw = localStorage.getItem(LOCAL_STORAGE_TRACKS);
      if (raw) {
        const parsed = JSON.parse(raw);
        const filtered = parsed.filter(t => String(t.id) !== String(id));
        localStorage.setItem(LOCAL_STORAGE_TRACKS, JSON.stringify(filtered));
      }
    } catch (e) {
      console.warn('LocalStorage delete error:', e);
    }

    // Remove track from all playlists
    await this.removeTrackFromAllPlaylists(id);

    return true;
  }

  // ─── PLAYLISTS API ───

  // Get all playlists
  async getAllPlaylists() {
    try {
      const db = await this.init();
      if (db && db.objectStoreNames.contains(STORE_PLAYLISTS)) {
        const playlists = await new Promise((resolve) => {
          const tx = db.transaction(STORE_PLAYLISTS, 'readonly');
          const store = tx.objectStore(STORE_PLAYLISTS);
          const request = store.getAll();
          request.onsuccess = () => resolve(request.result || []);
          request.onerror = () => resolve([]);
        });
        if (playlists && playlists.length > 0) return playlists;
      }
    } catch (e) {
      console.warn('IndexedDB getAllPlaylists error:', e);
    }

    try {
      const raw = localStorage.getItem(LOCAL_STORAGE_PLAYLISTS);
      if (raw) return JSON.parse(raw);
    } catch (e) {}

    // Default initial playlists if empty
    return [
      { id: 'pl_favorites', name: '❤️ Favorites', description: 'Your favorite tracks', trackIds: [], created: Date.now() },
      { id: 'pl_chill', name: '🌙 Night Vibes', description: 'Smooth atmospheric songs', trackIds: [], created: Date.now() - 1000 }
    ];
  }

  // Save or update a playlist
  async savePlaylist(playlist) {
    const record = {
      id: playlist.id || `pl_${Date.now()}_${Math.random().toString(36).substr(2, 4)}`,
      name: playlist.name || 'My Playlist',
      description: playlist.description || '',
      trackIds: playlist.trackIds || [],
      created: playlist.created || Date.now()
    };

    try {
      const db = await this.init();
      if (db && db.objectStoreNames.contains(STORE_PLAYLISTS)) {
        await new Promise((resolve) => {
          const tx = db.transaction(STORE_PLAYLISTS, 'readwrite');
          const store = tx.objectStore(STORE_PLAYLISTS);
          const request = store.put(record);
          request.onsuccess = () => resolve(true);
          request.onerror = () => resolve(false);
        });
      }
    } catch (e) {}

    try {
      const playlists = await this.getAllPlaylists();
      const idx = playlists.findIndex(p => p.id === record.id);
      if (idx !== -1) playlists[idx] = record;
      else playlists.push(record);
      localStorage.setItem(LOCAL_STORAGE_PLAYLISTS, JSON.stringify(playlists));
    } catch (e) {}

    return record;
  }

  // Delete playlist
  async deletePlaylist(id) {
    try {
      const db = await this.init();
      if (db && db.objectStoreNames.contains(STORE_PLAYLISTS)) {
        const tx = db.transaction(STORE_PLAYLISTS, 'readwrite');
        const store = tx.objectStore(STORE_PLAYLISTS);
        store.delete(id);
      }
    } catch (e) {}

    try {
      const playlists = await this.getAllPlaylists();
      const filtered = playlists.filter(p => p.id !== id);
      localStorage.setItem(LOCAL_STORAGE_PLAYLISTS, JSON.stringify(filtered));
    } catch (e) {}

    return true;
  }

  // Add track to playlist
  async addTrackToPlaylist(playlistId, trackId) {
    const playlists = await this.getAllPlaylists();
    const target = playlists.find(p => p.id === playlistId);
    if (!target) return false;

    const strId = String(trackId);
    if (!target.trackIds.map(String).includes(strId)) {
      target.trackIds.push(trackId);
      await this.savePlaylist(target);
      return true;
    }
    return false; // Already in playlist
  }

  // Remove track from playlist
  async removeTrackFromPlaylist(playlistId, trackId) {
    const playlists = await this.getAllPlaylists();
    const target = playlists.find(p => p.id === playlistId);
    if (!target) return false;

    target.trackIds = target.trackIds.filter(id => String(id) !== String(trackId));
    await this.savePlaylist(target);
    return true;
  }

  // Remove track from all playlists
  async removeTrackFromAllPlaylists(trackId) {
    const playlists = await this.getAllPlaylists();
    for (const p of playlists) {
      if (p.trackIds.map(String).includes(String(trackId))) {
        p.trackIds = p.trackIds.filter(id => String(id) !== String(trackId));
        await this.savePlaylist(p);
      }
    }
  }
}

// Global singleton instance
window.musiqoDB = new MusiqoDatabase();
