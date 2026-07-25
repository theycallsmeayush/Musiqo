/* ================================================
   MUSIQO STUDIO - Upload Page Script
   ================================================ */

document.addEventListener('DOMContentLoaded', () => {
  // Elements
  const audioDropzone = document.getElementById('audioDropzone');
  const audioInput = document.getElementById('audioInput');
  const audioDropContent = document.getElementById('audioDropContent');
  const audioPreview = document.getElementById('audioPreview');
  const audioFileName = document.getElementById('audioFileName');
  const audioFileSize = document.getElementById('audioFileSize');
  const audioPreviewPlayer = document.getElementById('audioPreviewPlayer');
  const removeAudioBtn = document.getElementById('removeAudioBtn');

  const coverDropzone = document.getElementById('coverDropzone');
  const coverInput = document.getElementById('coverInput');
  const coverDropContent = document.getElementById('coverDropContent');
  const coverPreview = document.getElementById('coverPreview');
  const coverPreviewImg = document.getElementById('coverPreviewImg');
  const removeCoverBtn = document.getElementById('removeCoverBtn');

  const songTitleInput = document.getElementById('songTitle');
  const artistNameInput = document.getElementById('artistName');
  const albumNameInput = document.getElementById('albumName');

  const primaryColorInput = document.getElementById('primaryColor');
  const secondaryColorInput = document.getElementById('secondaryColor');
  const accentColorInput = document.getElementById('accentColor');
  const extractColorsBtn = document.getElementById('extractColorsBtn');

  const orb1 = document.getElementById('orb1');
  const orb2 = document.getElementById('orb2');
  const orb3 = document.getElementById('orb3');

  const uploadForm = document.getElementById('uploadForm');
  const submitBtn = document.getElementById('submitBtn');
  const uploadedTracksList = document.getElementById('uploadedTracksList');
  const customCountBadge = document.getElementById('customCountBadge');

  // State
  let audioDataUrl = null;
  let audioDuration = 0;
  let coverDataUrl = null;

  // Initial load
  loadUploadedTracksList();
  updateAmbientOrbs();

  // ─── Ambient Orbs Live Color Update ───
  function updateAmbientOrbs() {
    if (orb1) orb1.style.background = primaryColorInput.value;
    if (orb2) orb2.style.background = secondaryColorInput.value;
    if (orb3) orb3.style.background = accentColorInput.value;
  }

  primaryColorInput.addEventListener('input', updateAmbientOrbs);
  secondaryColorInput.addEventListener('input', updateAmbientOrbs);
  accentColorInput.addEventListener('input', updateAmbientOrbs);

  // ─── Audio Drag & Drop Setup ───
  audioDropzone.addEventListener('click', (e) => {
    if (e.target !== removeAudioBtn) {
      audioInput.click();
    }
  });

  setupDragAndDrop(audioDropzone, (files) => {
    if (files.length > 0 && (files[0].type.startsWith('audio/') || files[0].name.match(/\.(mp3|wav|m4a|aac|ogg|flac)$/i))) {
      handleAudioFile(files[0]);
    } else {
      showToast('Please select a valid audio file (.mp3, .wav, .m4a, etc.)', 'error');
    }
  });

  audioInput.addEventListener('change', (e) => {
    if (e.target.files.length > 0) {
      handleAudioFile(e.target.files[0]);
    }
  });

  removeAudioBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    resetAudioInput();
  });

  function resetAudioInput() {
    audioInput.value = '';
    audioDataUrl = null;
    audioDuration = 0;
    audioPreviewPlayer.src = '';
    audioDropContent.classList.remove('hidden');
    audioPreview.classList.add('hidden');
    audioDropzone.style.borderColor = '';
  }

  function handleAudioFile(file) {
    audioDropzone.style.borderColor = '';
    const sizeMb = (file.size / (1024 * 1024)).toFixed(1);
    audioFileName.textContent = file.name;

    // Auto populate song title if empty
    if (!songTitleInput.value) {
      const titleWithoutExt = file.name.replace(/\.[^/.]+$/, "").replace(/_/g, " ");
      songTitleInput.value = titleWithoutExt;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      audioDataUrl = e.target.result;
      audioPreviewPlayer.src = audioDataUrl;

      // Extract duration when loaded
      audioPreviewPlayer.onloadedmetadata = () => {
        audioDuration = Math.round(audioPreviewPlayer.duration || 0);
        const mins = Math.floor(audioDuration / 60);
        const secs = (audioDuration % 60).toString().padStart(2, '0');
        audioFileSize.textContent = `${sizeMb} MB • ${mins}:${secs}`;
      };

      audioDropContent.classList.add('hidden');
      audioPreview.classList.remove('hidden');
      showToast('Audio file loaded successfully!', 'success');
    };
    reader.readAsDataURL(file);
  }

  // ─── Cover Image Drag & Drop Setup ───
  coverDropzone.addEventListener('click', (e) => {
    if (e.target !== removeCoverBtn) {
      coverInput.click();
    }
  });

  setupDragAndDrop(coverDropzone, (files) => {
    if (files.length > 0 && files[0].type.startsWith('image/')) {
      handleCoverFile(files[0]);
    } else {
      showToast('Please select a valid image file (.jpg, .png, .webp)', 'error');
    }
  });

  coverInput.addEventListener('change', (e) => {
    if (e.target.files.length > 0) {
      handleCoverFile(e.target.files[0]);
    }
  });

  removeCoverBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    resetCoverInput();
  });

  function resetCoverInput() {
    coverInput.value = '';
    coverDataUrl = null;
    coverPreviewImg.src = '';
    coverDropContent.classList.remove('hidden');
    coverPreview.classList.add('hidden');
    coverDropzone.style.borderColor = '';
  }

  function handleCoverFile(file) {
    coverDropzone.style.borderColor = '';
    const reader = new FileReader();
    reader.onload = (e) => {
      coverDataUrl = e.target.result;
      coverPreviewImg.src = coverDataUrl;
      coverDropContent.classList.add('hidden');
      coverPreview.classList.remove('hidden');

      // Auto extract colors
      extractColorsFromImage(coverDataUrl);
      showToast('Cover art uploaded!', 'success');
    };
    reader.readAsDataURL(file);
  }

  // ─── Drag & Drop Helper ───
  function setupDragAndDrop(element, onDropCallback) {
    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
      element.addEventListener(eventName, (e) => {
        e.preventDefault();
        e.stopPropagation();
      }, false);
    });

    ['dragenter', 'dragover'].forEach(eventName => {
      element.addEventListener(eventName, () => {
        element.classList.add('drag-over');
      }, false);
    });

    ['dragleave', 'drop'].forEach(eventName => {
      element.addEventListener(eventName, () => {
        element.classList.remove('drag-over');
      }, false);
    });

    element.addEventListener('drop', (e) => {
      const files = e.dataTransfer.files;
      onDropCallback(files);
    });
  }

  // ─── Image Color Extraction ───
  extractColorsBtn.addEventListener('click', () => {
    if (coverDataUrl) {
      extractColorsFromImage(coverDataUrl);
    } else {
      showToast('Please upload a cover image first to extract colors', 'warning');
    }
  });

  function extractColorsFromImage(imgUrl) {
    const img = new Image();
    img.crossOrigin = 'Anonymous';
    img.onload = () => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      canvas.width = 50;
      canvas.height = 50;
      ctx.drawImage(img, 0, 0, 50, 50);

      const imgData = ctx.getImageData(0, 0, 50, 50).data;
      let r = 0, g = 0, b = 0;
      let count = 0;

      for (let i = 0; i < imgData.length; i += 16) {
        r += imgData[i];
        g += imgData[i + 1];
        b += imgData[i + 2];
        count++;
      }

      r = Math.floor(r / count);
      g = Math.floor(g / count);
      b = Math.floor(b / count);

      const hex1 = rgbToHex(r, g, b);
      const hex2 = rgbToHex(Math.min(255, r + 40), Math.max(0, g - 30), Math.min(255, b + 60));
      const hex3 = rgbToHex(Math.max(0, Math.floor(r * 0.3)), Math.max(0, Math.floor(g * 0.2)), Math.max(0, Math.floor(b * 0.4)));

      primaryColorInput.value = hex1;
      secondaryColorInput.value = hex2;
      accentColorInput.value = hex3;
      updateAmbientOrbs();
      showToast('Extracted color theme from cover art!', 'info');
    };
    img.src = imgUrl;
  }

  function rgbToHex(r, g, b) {
    return '#' + [r, g, b].map(x => {
      const hex = x.toString(16);
      return hex.length === 1 ? '0' + hex : hex;
    }).join('');
  }

  // ─── Form Submission Handler ───
  uploadForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    let valid = true;

    if (!audioDataUrl) {
      audioDropzone.style.borderColor = '#ff4757';
      showToast('Please select a Song Audio File (.mp3, .wav, etc.)', 'error');
      valid = false;
    }

    if (!coverDataUrl) {
      coverDropzone.style.borderColor = '#ff4757';
      showToast('Please select a Song Cover Art image', 'error');
      valid = false;
    }

    const title = songTitleInput.value.trim();
    const artist = artistNameInput.value.trim() || 'Unknown Artist';
    const album = albumNameInput.value.trim() || 'Single';

    if (!title) {
      songTitleInput.focus();
      showToast('Please enter a Song Title', 'error');
      valid = false;
    }

    if (!valid) return;

    submitBtn.disabled = true;
    submitBtn.innerHTML = `
      <span class="loading-spinner"></span>
      Saving Song to Musiqo...
    `;

    try {
      const trackData = {
        title: title,
        artist: artist,
        album: album,
        cover: coverDataUrl,
        audio: audioDataUrl,
        colors: [primaryColorInput.value, secondaryColorInput.value, accentColorInput.value],
        duration: audioDuration
      };

      const savedRecord = await window.musiqoDB.saveTrack(trackData);

      showToast(`🎉 "${title}" uploaded! Click "Play" below to listen on main website.`, 'success');

      // Reset form
      uploadForm.reset();
      resetAudioInput();
      resetCoverInput();
      primaryColorInput.value = '#ff416c';
      secondaryColorInput.value = '#8a2be2';
      accentColorInput.value = '#1a0b2e';
      updateAmbientOrbs();

      // Refresh list
      await loadUploadedTracksList();

    } catch (err) {
      console.error(err);
      showToast('Failed to save track: ' + err.message, 'error');
    } finally {
      submitBtn.disabled = false;
      submitBtn.innerHTML = `
        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M9 16h6v-6h4l-7-7-7 7h4v6zm-4 2h14v2H5v-2z"/></svg>
        Upload Song to Musiqo
      `;
    }
  });

  // ─── Load Uploaded Custom Tracks List ───
  async function loadUploadedTracksList() {
    if (!uploadedTracksList) return;
    try {
      const tracks = await window.musiqoDB.getAllTracks();

      if (customCountBadge) {
        customCountBadge.textContent = `${tracks.length} ${tracks.length === 1 ? 'Song' : 'Songs'}`;
      }

      if (tracks.length === 0) {
        uploadedTracksList.innerHTML = `
          <div class="empty-list-state">
            <svg viewBox="0 0 24 24" width="48" height="48" fill="rgba(255,255,255,0.2)"><path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55C7.79 13 6 14.79 6 17s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/></svg>
            <p>No custom songs uploaded yet. Upload your first song above!</p>
          </div>
        `;
        return;
      }

      uploadedTracksList.innerHTML = '';
      tracks.forEach((track) => {
        const item = document.createElement('div');
        item.className = 'uploaded-track-card';
        item.innerHTML = `
          <img src="${track.cover}" alt="${track.album}" class="uploaded-track-thumb">
          <div class="uploaded-track-info">
            <div class="uploaded-track-title">${escapeHtml(track.title)}</div>
            <div class="uploaded-track-artist">${escapeHtml(track.artist)} • <span class="uploaded-track-album">${escapeHtml(track.album)}</span></div>
          </div>
          <div class="uploaded-track-colors">
            <span class="color-dot" style="background:${track.colors[0]}"></span>
            <span class="color-dot" style="background:${track.colors[1]}"></span>
            <span class="color-dot" style="background:${track.colors[2]}"></span>
          </div>
          <div class="uploaded-track-actions">
            <a href="index.html?play=${encodeURIComponent(track.id)}" class="track-action-btn play-btn" title="Listen on Main Player">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
              Play in Musiqo
            </a>
            <button class="track-action-btn delete-btn" data-id="${track.id}" title="Delete Song">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/></svg>
            </button>
          </div>
        `;

        // Delete button listener
        const delBtn = item.querySelector('.delete-btn');
        delBtn.addEventListener('click', async () => {
          const confirmed = await showConfirmDialog({
            title: 'Delete Song',
            message: `Are you sure you want to delete "${track.title}"?`,
            confirmText: 'Delete Song',
            icon: '🗑️',
            isDanger: true
          });

          if (confirmed) {
            await window.musiqoDB.deleteTrack(track.id);
            showToast(`Deleted "${track.title}"`, 'info');
            loadUploadedTracksList();
          }
        });

        uploadedTracksList.appendChild(item);
      });

    } catch (err) {
      console.error('Error loading uploaded tracks list:', err);
    }
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
      cancelBtn.addEventListener('click', onCancel);

      modal.classList.remove('hidden');
    });
  }

  // Helper
  function escapeHtml(str) {
    if (!str) return '';
    return String(str).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }

  // ─── Toast Notifications System ───
  function showToast(message, type = 'info') {
    const container = document.getElementById('toastContainer');
    if (!container) return;

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

    setTimeout(() => {
      toast.classList.add('toast-show');
    }, 10);

    setTimeout(() => {
      toast.classList.remove('toast-show');
      setTimeout(() => toast.remove(), 300);
    }, 4000);
  }

});
