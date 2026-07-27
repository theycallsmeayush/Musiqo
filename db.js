/* ================================================
   MUSIQO - IndexedDB & Storage Engine (Tracks & Playlists)
   ================================================ */

const DB_NAME = 'MusiqoDB';
const DB_VERSION = 3; // Incremented for users store
const STORE_TRACKS = 'custom_tracks';
const STORE_PLAYLISTS = 'custom_playlists';
const STORE_USERS = 'users';

const LOCAL_STORAGE_TRACKS = 'musiqo_custom_tracks_backup';
const LOCAL_STORAGE_PLAYLISTS = 'musiqo_custom_playlists_backup';
const LOCAL_STORAGE_USERS = 'musiqo_users_backup';
const LOCAL_STORAGE_SESSION = 'musiqo_active_session';

// Pre-seeded default Owner Account (theycallsmeayush promoted to OWNER!)
const DEFAULT_ADMIN = {
  username: 'theycallsmeayush',
  password: '161189',
  role: 'owner',
  displayName: 'Ayush',
  created: 1700000000000
};

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
        this.ensureDefaultAdminLocalStorage();
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
        if (!db.objectStoreNames.contains(STORE_USERS)) {
          const uStore = db.createObjectStore(STORE_USERS, { keyPath: 'username' });
          uStore.createIndex('role', 'role', { unique: false });
        }
      };

      request.onsuccess = async (event) => {
        this.db = event.target.result;
        await this.ensureDefaultAdminIDB();
        this.ensureDefaultAdminLocalStorage();
        resolve(this.db);
      };

      request.onerror = (event) => {
        console.error('MusiqoDB IndexedDB error:', event.target.error);
        this.ensureDefaultAdminLocalStorage();
        resolve(null);
      };
    });
  }

  async ensureDefaultAdminIDB() {
    if (!this.db || !this.db.objectStoreNames.contains(STORE_USERS)) return;
    try {
      const tx = this.db.transaction(STORE_USERS, 'readwrite');
      const store = tx.objectStore(STORE_USERS);
      const req = store.get(DEFAULT_ADMIN.username);
      req.onsuccess = () => {
        if (!req.result) {
          store.put(DEFAULT_ADMIN);
        } else if (req.result.username === 'theycallsmeayush' && req.result.role !== 'owner') {
          req.result.role = 'owner';
          if (!req.result.displayName) req.result.displayName = 'Ayush';
          store.put(req.result);
        }
      };
    } catch (e) {
      console.warn('Failed to ensure default admin in IndexedDB:', e);
    }
  }

  ensureDefaultAdminLocalStorage() {
    try {
      const raw = localStorage.getItem(LOCAL_STORAGE_USERS);
      let users = raw ? JSON.parse(raw) : [];
      if (!Array.isArray(users)) users = [];
      const idx = users.findIndex(u => u.username.toLowerCase() === DEFAULT_ADMIN.username.toLowerCase());
      if (idx === -1) {
        users.push(DEFAULT_ADMIN);
      } else {
        users[idx].role = 'owner';
        if (!users[idx].displayName) users[idx].displayName = 'Ayush';
      }
      localStorage.setItem(LOCAL_STORAGE_USERS, JSON.stringify(users));
    } catch (e) {
      console.warn('Failed to ensure default admin in localStorage:', e);
    }
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

  // ─── USER & AUTH API ───

  // Get all users
  async getAllUsers() {
    try {
      const db = await this.init();
      if (db && db.objectStoreNames.contains(STORE_USERS)) {
        const idbUsers = await new Promise((resolve) => {
          const tx = db.transaction(STORE_USERS, 'readonly');
          const store = tx.objectStore(STORE_USERS);
          const request = store.getAll();
          request.onsuccess = () => resolve(request.result || []);
          request.onerror = () => resolve([]);
        });
        if (idbUsers && idbUsers.length > 0) return idbUsers;
      }
    } catch (e) {}

    try {
      const raw = localStorage.getItem(LOCAL_STORAGE_USERS);
      if (raw) return JSON.parse(raw);
    } catch (e) {}

    return [DEFAULT_ADMIN];
  }

  // Save/update user
  async saveUser(user) {
    try {
      const db = await this.init();
      if (db && db.objectStoreNames.contains(STORE_USERS)) {
        const tx = db.transaction(STORE_USERS, 'readwrite');
        const store = tx.objectStore(STORE_USERS);
        store.put(user);
      }
    } catch (e) {}

    try {
      const users = await this.getAllUsers();
      const idx = users.findIndex(u => u.username.toLowerCase() === user.username.toLowerCase());
      if (idx !== -1) users[idx] = user;
      else users.push(user);
      localStorage.setItem(LOCAL_STORAGE_USERS, JSON.stringify(users));
    } catch (e) {}

    return user;
  }

  // Validate username format: Only lowercase letters, numbers, and underscores allowed!
  validateUsernameFormat(username) {
    const clean = (username || '').trim().toLowerCase();
    if (!clean) {
      throw new Error('Username is required.');
    }
    if (clean.length < 3) {
      throw new Error('Username must be at least 3 characters long.');
    }
    if (clean.length > 20) {
      throw new Error('Username cannot exceed 20 characters.');
    }
    if (!/^[a-z0-9_]+$/.test(clean)) {
      throw new Error('⚠️ Usernames must contain ONLY lowercase characters (a-z), numbers (0-9), and underscores (_). Uppercase or spaces are not allowed.');
    }
    return clean;
  }

  // Register new User (Always creates regular "user" role with strict unique username check)
  async registerUser({ username, password }) {
    const cleanUsername = this.validateUsernameFormat(username);
    const cleanPassword = (password || '').trim();

    if (!cleanPassword) {
      throw new Error('Password is required.');
    }

    const users = await this.getAllUsers();
    const exists = users.some(u => u.username.toLowerCase() === cleanUsername);
    if (exists) {
      throw new Error(`⚠️ Username "${cleanUsername}" is already taken. Each user must have a unique username.`);
    }

    const newUser = {
      username: cleanUsername,
      password: cleanPassword,
      role: 'user', // Always user on self-registration
      created: Date.now()
    };

    await this.saveUser(newUser);
    return newUser;
  }

  // Authenticate user with role validation
  async authenticateUser({ username, password, requestedRole = 'user' }) {
    const cleanUsername = (username || '').trim();
    const cleanPassword = (password || '').trim();

    if (!cleanUsername || !cleanPassword) {
      throw new Error('Please enter both username and password.');
    }

    const users = await this.getAllUsers();
    const found = users.find(u => u.username.toLowerCase() === cleanUsername.toLowerCase());

    if (!found) {
      throw new Error('⚠️ Incorrect username or password.');
    }

    if (found.password !== cleanPassword) {
      throw new Error('⚠️ Incorrect username or password.');
    }

    if (requestedRole === 'admin' && (found.role !== 'admin' && found.role !== 'owner')) {
      throw new Error(`⛔ Access Denied: User "${found.username}" is not an Admin or Owner.`);
    }

    // Persist active session
    this.setCurrentUser(found);
    return found;
  }

  // Get active logged-in user
  getCurrentUser() {
    try {
      const raw = localStorage.getItem(LOCAL_STORAGE_SESSION);
      if (raw) return JSON.parse(raw);
    } catch (e) {}
    return null; // Guest user by default
  }

  // Set active logged-in user
  setCurrentUser(user) {
    if (!user) {
      localStorage.removeItem(LOCAL_STORAGE_SESSION);
    } else {
      localStorage.setItem(LOCAL_STORAGE_SESSION, JSON.stringify({
        username: user.username,
        displayName: user.displayName || user.username,
        avatar: user.avatar || '',
        role: user.role,
        loginTime: Date.now()
      }));
    }
  }

  // Logout current user
  logoutUser() {
    localStorage.removeItem(LOCAL_STORAGE_SESSION);
  }

  // Promote a regular user to Admin
  async promoteUserToAdmin(targetUsername) {
    const active = this.getCurrentUser();
    if (!active || (active.role !== 'admin' && active.role !== 'owner')) {
      throw new Error('Only logged-in Admins or Owners can promote users to Admin.');
    }

    const users = await this.getAllUsers();
    const target = users.find(u => u.username.toLowerCase() === targetUsername.toLowerCase());
    if (!target) {
      throw new Error(`User "${targetUsername}" not found.`);
    }

    target.role = 'admin';
    await this.saveUser(target);
    return target;
  }

  // Promote a user/admin to Owner (Only available for logged-in Owners)
  async promoteUserToOwner(targetUsername) {
    const active = this.getCurrentUser();
    if (!active || active.role !== 'owner') {
      throw new Error('Only logged-in Owners can promote users to Owner.');
    }

    const users = await this.getAllUsers();
    const target = users.find(u => u.username.toLowerCase() === targetUsername.toLowerCase());
    if (!target) {
      throw new Error(`User "${targetUsername}" not found.`);
    }

    target.role = 'owner';
    await this.saveUser(target);
    return target;
  }

  // Demote an Admin to User role (Only available for logged-in Owners)
  async demoteAdminToUser(targetUsername) {
    const active = this.getCurrentUser();
    if (!active || active.role !== 'owner') {
      throw new Error('⛔ Access Denied: Only Owners can demote Admins to User role.');
    }

    const users = await this.getAllUsers();
    const target = users.find(u => u.username.toLowerCase() === targetUsername.toLowerCase());
    if (!target) {
      throw new Error(`User "${targetUsername}" not found.`);
    }

    if (target.role === 'owner') {
      throw new Error('⛔ Cannot demote an Owner.');
    }

    target.role = 'user';
    await this.saveUser(target);
    return target;
  }

  // Delete user account permanently (Only available for logged-in Owners)
  async deleteUserAccount(targetUsername) {
    const active = this.getCurrentUser();
    if (!active || active.role !== 'owner') {
      throw new Error('⛔ Access Denied: Only the Owner can delete accounts.');
    }

    if (active.username.toLowerCase() === targetUsername.toLowerCase()) {
      throw new Error('⛔ You cannot delete your own active Owner account.');
    }

    const users = await this.getAllUsers();
    const targetIndex = users.findIndex(u => u.username.toLowerCase() === targetUsername.toLowerCase());
    if (targetIndex === -1) {
      throw new Error(`User "${targetUsername}" not found.`);
    }

    const target = users[targetIndex];
    if (target.role === 'owner') {
      throw new Error('⛔ Cannot delete an Owner account.');
    }

    // Delete from IndexedDB
    try {
      const db = await this.init();
      if (db && db.objectStoreNames.contains(STORE_USERS)) {
        const tx = db.transaction(STORE_USERS, 'readwrite');
        const store = tx.objectStore(STORE_USERS);
        store.delete(target.username);
      }
    } catch (e) {
      console.warn('Failed to delete user from IndexedDB:', e);
    }

    // Delete from localStorage fallback
    try {
      const raw = localStorage.getItem(LOCAL_STORAGE_USERS);
      let lsUsers = raw ? JSON.parse(raw) : [];
      if (Array.isArray(lsUsers)) {
        lsUsers = lsUsers.filter(u => u.username.toLowerCase() !== targetUsername.toLowerCase());
        localStorage.setItem(LOCAL_STORAGE_USERS, JSON.stringify(lsUsers));
      }
    } catch (e) {
      console.warn('Failed to delete user from localStorage:', e);
    }

    return true;
  }

  // Get full user object by username
  async getUserByUsername(username) {
    if (!username) return null;
    const users = await this.getAllUsers();
    return users.find(u => u.username.toLowerCase() === username.toLowerCase()) || null;
  }

  // Update User Profile (PFP, Display Name, Username, Password, Theme)
  async updateUserProfile(originalUsername, { displayName, username, currentPassword, newPassword, avatar, theme }) {
    const users = await this.getAllUsers();
    const targetIndex = users.findIndex(u => u.username.toLowerCase() === originalUsername.toLowerCase());

    if (targetIndex === -1) {
      throw new Error(`User "${originalUsername}" not found.`);
    }

    const target = users[targetIndex];

    // Password change validation
    if (newPassword && newPassword.trim() !== '') {
      if (!currentPassword || currentPassword !== target.password) {
        throw new Error('Current password is incorrect.');
      }
      if (newPassword.trim().length < 4) {
        throw new Error('New password must be at least 4 characters.');
      }
      target.password = newPassword.trim();
    }

    // Username change validation with strict lowercase & 1-to-1 uniqueness check
    if (username !== undefined && username.trim() !== '') {
      const cleanUsername = this.validateUsernameFormat(username);
      if (cleanUsername !== originalUsername.toLowerCase()) {
        const exists = users.some(u => u.username.toLowerCase() === cleanUsername);
        if (exists) {
          throw new Error(`⚠️ Username "${cleanUsername}" is already taken by another user. Each user must have a unique username.`);
        }
        target.username = cleanUsername;
      }
    }

    if (displayName !== undefined) {
      target.displayName = (displayName || '').trim();
    }
    if (avatar !== undefined) {
      target.avatar = avatar;
    }
    if (theme !== undefined) {
      target.theme = theme;
    }

    // Save updated user
    await this.saveUser(target);

    // If username changed, delete old key from storage
    if (cleanUsername && cleanUsername.toLowerCase() !== originalUsername.toLowerCase()) {
      try {
        const db = await this.init();
        if (db && db.objectStoreNames.contains(STORE_USERS)) {
          const tx = db.transaction(STORE_USERS, 'readwrite');
          const store = tx.objectStore(STORE_USERS);
          store.delete(originalUsername);
        }
      } catch (e) {}
    }

    // Update active session
    this.setCurrentUser(target);
    return target;
  }

  // Admin & Owner method to update details or reset password for users
  // (Constraint: Admins CANNOT modify details or passwords of Admins/Owners. Owners can modify Admins and Users!)
  async adminUpdateUserProfile(targetUsername, { displayName, username, newPassword }) {
    const active = this.getCurrentUser();
    if (!active || (active.role !== 'admin' && active.role !== 'owner')) {
      throw new Error('Only logged-in Admins or Owners can edit user profiles.');
    }

    const users = await this.getAllUsers();
    const target = users.find(u => u.username.toLowerCase() === targetUsername.toLowerCase());
    if (!target) {
      throw new Error(`User "${targetUsername}" not found.`);
    }

    // Protection Guard:
    // Regular Admins CANNOT modify other Admins or Owners!
    // Owners CAN modify Admins and Users (but not other Owners).
    const isTargetAdminOrOwner = target.role === 'admin' || target.role === 'owner';
    const isTargetSameUser = target.username.toLowerCase() === active.username.toLowerCase();

    if (active.role === 'admin' && isTargetAdminOrOwner && !isTargetSameUser) {
      throw new Error('⛔ Access Denied: Admins cannot modify credentials or details of other Admins or Owners.');
    }
    if (active.role === 'owner' && target.role === 'owner' && !isTargetSameUser) {
      throw new Error('⛔ Access Denied: Owners cannot modify credentials of other Owners.');
    }

    // Password reset override by Admin
    if (newPassword && newPassword.trim() !== '') {
      if (newPassword.trim().length < 4) {
        throw new Error('Password must be at least 4 characters.');
      }
      target.password = newPassword.trim();
    }

    // Username change validation with strict lowercase & 1-to-1 uniqueness check
    if (username !== undefined && username.trim() !== '') {
      const cleanUsername = this.validateUsernameFormat(username);
      if (cleanUsername !== targetUsername.toLowerCase()) {
        const exists = users.some(u => u.username.toLowerCase() === cleanUsername);
        if (exists) {
          throw new Error(`⚠️ Username "${cleanUsername}" is already taken by another user. Each user must have a unique username.`);
        }
        target.username = cleanUsername;
      }
    }

    if (displayName !== undefined) {
      target.displayName = (displayName || '').trim();
    }

    // Save updated user
    await this.saveUser(target);

    // If username changed, delete old key from storage
    if (cleanUsername && cleanUsername.toLowerCase() !== targetUsername.toLowerCase()) {
      try {
        const db = await this.init();
        if (db && db.objectStoreNames.contains(STORE_USERS)) {
          const tx = db.transaction(STORE_USERS, 'readwrite');
          const store = tx.objectStore(STORE_USERS);
          store.delete(targetUsername);
        }
      } catch (e) {}
    }

    return target;
  }
}

// Global singleton instance
window.musiqoDB = new MusiqoDatabase();
