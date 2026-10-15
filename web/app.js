/**
 * Shin Bot Documentation & Commands Center — Main Interactive Logic
 * Handles real-time search, category filtering, permissions filtering,
 * interactive command builder, Discord embed preview, modal view, and sound effects.
 */

// Sound effects state
let soundEnabled = true;
let audioCtx = null;

function initAudio() {
  if (!audioCtx) {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (AudioContext) {
      audioCtx = new AudioContext();
    }
  }
}

function playSound(type = 'click') {
  if (!soundEnabled) return;
  try {
    initAudio();
    if (!audioCtx) return;
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }

    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain);
    gain.connect(audioCtx.destination);

    const now = audioCtx.currentTime;

    if (type === 'click') {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(600, now);
      osc.frequency.exponentialRampToValueAtTime(800, now + 0.04);
      gain.gain.setValueAtTime(0.08, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.04);
      osc.start(now);
      osc.stop(now + 0.04);
    } else if (type === 'copy') {
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(520, now);
      osc.frequency.setValueAtTime(780, now + 0.06);
      gain.gain.setValueAtTime(0.1, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);
      osc.start(now);
      osc.stop(now + 0.12);
    } else if (type === 'open') {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(440, now);
      osc.frequency.exponentialRampToValueAtTime(660, now + 0.08);
      gain.gain.setValueAtTime(0.06, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
      osc.start(now);
      osc.stop(now + 0.08);
    }
  } catch (e) {
    // Ignore audio errors on unsupported browsers
  }
}

// Toast Notifications
function showToast(message, icon = '📋') {
  playSound('copy');
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <span class="toast-icon">${icon}</span>
    <span class="toast-msg">${message}</span>
  `;

  container.appendChild(toast);

  // Trigger animation
  requestAnimationFrame(() => {
    toast.classList.add('show');
  });

  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => {
      if (toast.parentNode) {
        toast.parentNode.removeChild(toast);
      }
    }, 250);
  }, 2200);
}

// Copy to clipboard helper
function copyText(text, successMsg = 'Đã sao chép vào bộ nhớ tạm!') {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(() => {
      showToast(successMsg, '✅');
    }).catch(() => {
      fallbackCopy(text, successMsg);
    });
  } else {
    fallbackCopy(text, successMsg);
  }
}

function fallbackCopy(text, successMsg) {
  const textArea = document.createElement('textarea');
  textArea.value = text;
  textArea.style.position = 'fixed';
  textArea.style.opacity = '0';
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  try {
    document.execCommand('copy');
    showToast(successMsg, '✅');
  } catch (err) {
    showToast('Lỗi khi sao chép!', '❌');
  }
  document.body.removeChild(textArea);
}

// State variables
let currentCategory = 'all';
let currentSearch = '';
let currentPerm = 'all';
let currentType = 'all';
let currentSort = 'default';
let activeModalCmd = null;

// Safe Application Initialization
function initApp() {
  renderCategoryTabs();
  renderCommands();
  setupEventListeners();
  updateTotalCounters();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}

function updateTotalCounters() {
  const statCmds = document.getElementById('stat-total-cmds');
  if (statCmds && typeof COMMANDS_DATA !== 'undefined') {
    statCmds.textContent = `${COMMANDS_DATA.length}+`;
  }
  const statCats = document.getElementById('stat-total-cats');
  if (statCats && typeof BOT_CONFIG !== 'undefined' && BOT_CONFIG.categories) {
    statCats.textContent = `${BOT_CONFIG.categories.filter(c => c.id !== 'all').length}`;
  }
}

// 1. Render Category Tabs
function renderCategoryTabs() {
  const container = document.getElementById('category-tabs');
  if (!container || typeof BOT_CONFIG === 'undefined' || typeof COMMANDS_DATA === 'undefined') return;

  container.innerHTML = '';

  BOT_CONFIG.categories.forEach(cat => {
    const btn = document.createElement('button');
    btn.className = `cat-tab-btn ${cat.id === currentCategory ? 'active' : ''}`;
    btn.dataset.category = cat.id;

    // Calculate actual count from COMMANDS_DATA
    const count = cat.id === 'all' 
      ? COMMANDS_DATA.length 
      : COMMANDS_DATA.filter(c => c.category === cat.id).length;

    btn.innerHTML = `
      <span>${cat.icon}</span>
      <span>${cat.name}</span>
      <span class="cat-tab-count">${count}</span>
    `;

    btn.addEventListener('click', () => {
      playSound('click');
      currentCategory = cat.id;
      document.querySelectorAll('.cat-tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderCommands();
    });

    container.appendChild(btn);
  });
}

// 2. Filter & Sort Commands
function getFilteredCommands() {
  if (typeof COMMANDS_DATA === 'undefined') return [];
  let list = [...COMMANDS_DATA];

  // Category filter
  if (currentCategory !== 'all') {
    list = list.filter(cmd => cmd.category === currentCategory);
  }

  // Permission filter
  if (currentPerm !== 'all') {
    list = list.filter(cmd => cmd.perm_level === currentPerm);
  }

  // Type filter
  if (currentType !== 'all') {
    list = list.filter(cmd => cmd.type === currentType);
  }

  // Search query filter
  if (currentSearch.trim() !== '') {
    const q = currentSearch.trim().toLowerCase();
    list = list.filter(cmd => {
      const nameMatch = (cmd.name || '').toLowerCase().includes(q);
      const descMatch = (cmd.description || '').toLowerCase().includes(q);
      const aliasMatch = cmd.aliases && cmd.aliases.some(a => a.toLowerCase().includes(q));
      const syntaxMatch = (cmd.prefix_syntax && cmd.prefix_syntax.toLowerCase().includes(q)) ||
                          (cmd.slash_syntax && cmd.slash_syntax.toLowerCase().includes(q));
      const paramMatch = cmd.parameters && cmd.parameters.some(p => (p.name || '').toLowerCase().includes(q) || (p.description && p.description.toLowerCase().includes(q)));
      const condMatch = cmd.conditions && cmd.conditions.some(c => c.toLowerCase().includes(q));
      return nameMatch || descMatch || aliasMatch || syntaxMatch || paramMatch || condMatch;
    });
  }

  // Sorting
  if (currentSort === 'name-asc') {
    list.sort((a, b) => a.name.localeCompare(b.name));
  } else if (currentSort === 'name-desc') {
    list.sort((a, b) => b.name.localeCompare(a.name));
  } else if (currentSort === 'perm') {
    const permOrder = { 'everyone': 1, 'moderator': 2, 'manage_guild': 3, 'admin': 4, 'owner': 5 };
    list.sort((a, b) => (permOrder[a.perm_level] || 0) - (permOrder[b.perm_level] || 0));
  }

  return list;
}

// 3. Render Command Cards
function renderCommands() {
  const container = document.getElementById('commands-grid');
  const emptyState = document.getElementById('no-results-state');
  const countBadge = document.getElementById('filtered-count');

  if (!container) return;

  const filtered = getFilteredCommands();

  if (countBadge) {
    countBadge.textContent = filtered.length;
  }

  if (filtered.length === 0) {
    container.innerHTML = '';
    if (emptyState) emptyState.style.display = 'block';
    return;
  }

  if (emptyState) emptyState.style.display = 'none';

  container.innerHTML = '';

  filtered.forEach(cmd => {
    const card = document.createElement('div');
    card.className = 'command-card';

    // Type badge class
    let typeBadgeClass = 'badge-hybrid';
    if (cmd.type === 'slash') typeBadgeClass = 'badge-slash';
    if (cmd.type === 'prefix') typeBadgeClass = 'badge-prefix';

    // Perm badge class
    let permBadgeClass = 'badge-perm-everyone';
    let permLabel = 'Mọi Người';
    if (cmd.perm_level === 'moderator') {
      permBadgeClass = 'badge-perm-mod';
      permLabel = 'Quản Trị';
    } else if (cmd.perm_level === 'manage_guild') {
      permBadgeClass = 'badge-perm-mod';
      permLabel = 'Manage Server';
    } else if (cmd.perm_level === 'admin') {
      permBadgeClass = 'badge-perm-admin';
      permLabel = 'Admin';
    } else if (cmd.perm_level === 'owner') {
      permBadgeClass = 'badge-perm-owner';
      permLabel = 'Chỉ Owner';
    }

    // Aliases HTML
    let aliasesHtml = '';
    if (cmd.aliases && cmd.aliases.length > 0) {
      aliasesHtml = `
        <div class="card-aliases">
          <span class="alias-label">Alias:</span>
          ${cmd.aliases.map(a => `<span class="alias-chip">${(typeof BOT_CONFIG !== 'undefined' && BOT_CONFIG.prefix) || '.'}${a}</span>`).join('')}
        </div>
      `;
    }

    // Conditions count chip
    const condCount = cmd.conditions ? cmd.conditions.length : 0;
    const condChip = condCount > 0 ? `<span class="badge" style="background: rgba(255,255,255,0.06); color: var(--text-muted); font-size: 0.7rem;">📋 ${condCount} điều kiện</span>` : '';

    card.innerHTML = `
      <div>
        <div class="card-top">
          <div class="card-title-group">
            <span class="card-icon">${cmd.icon}</span>
            <div>
              <h3 class="card-name">/${cmd.name}</h3>
            </div>
          </div>
          <div class="card-badges">
            <span class="badge ${typeBadgeClass}">${cmd.type_label}</span>
            <span class="badge ${permBadgeClass}">${permLabel}</span>
          </div>
        </div>

        <p class="card-desc">${cmd.description}</p>

        ${aliasesHtml}

        <div class="syntax-preview">
          <code>${cmd.prefix_syntax || cmd.slash_syntax}</code>
          <button class="copy-syntax-btn" title="Sao chép cú pháp" data-syntax="${cmd.prefix_syntax || cmd.slash_syntax}">
            📋
          </button>
        </div>
      </div>

      <div class="card-actions">
        ${condChip}
        <button class="view-detail-btn" data-id="${cmd.id}">
          <span>Chi Tiết & Tham Số</span>
          <span>➔</span>
        </button>
      </div>
    `;

    // Event listeners for card buttons
    const copyBtn = card.querySelector('.copy-syntax-btn');
    if (copyBtn) {
      copyBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const syntax = copyBtn.getAttribute('data-syntax');
        copyText(syntax, `Đã sao chép: ${syntax}`);
      });
    }

    const detailBtn = card.querySelector('.view-detail-btn');
    if (detailBtn) {
      detailBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        openCommandModal(cmd);
      });
    }

    // Click whole card to open details
    card.addEventListener('click', (e) => {
      if (!e.target.closest('.copy-syntax-btn') && !e.target.closest('.view-detail-btn')) {
        openCommandModal(cmd);
      }
    });

    container.appendChild(card);
  });
}

// 4. Command Detail Modal Logic
function openCommandModal(cmd) {
  playSound('open');
  activeModalCmd = cmd;
  const modal = document.getElementById('command-modal');
  if (!modal) return;

  // Header info
  document.getElementById('modal-icon').textContent = cmd.icon;
  document.getElementById('modal-title').textContent = cmd.name;
  document.getElementById('modal-short-desc').textContent = cmd.description;

  // Badges
  const typeBadge = document.getElementById('modal-type-badge');
  typeBadge.textContent = cmd.type_label;
  typeBadge.className = 'badge ' + (cmd.type === 'slash' ? 'badge-slash' : cmd.type === 'prefix' ? 'badge-prefix' : 'badge-hybrid');

  const catBadge = document.getElementById('modal-cat-badge');
  catBadge.textContent = cmd.category_name;

  // Syntax codes
  document.getElementById('modal-prefix-syntax').textContent = cmd.prefix_syntax || "Không hỗ trợ";
  document.getElementById('modal-slash-syntax').textContent = cmd.slash_syntax || "Không hỗ trợ";

  // Aliases
  const aliasSection = document.getElementById('modal-aliases-section');
  const aliasContainer = document.getElementById('modal-aliases-container');
  if (cmd.aliases && cmd.aliases.length > 0) {
    aliasSection.style.display = 'block';
    aliasContainer.innerHTML = cmd.aliases.map(a => `<span class="alias-chip">${(typeof BOT_CONFIG !== 'undefined' && BOT_CONFIG.prefix) || '.'}${a} hoặc /${a}</span>`).join('');
  } else {
    aliasSection.style.display = 'none';
  }

  // Detailed description
  document.getElementById('modal-detailed-desc').textContent = cmd.detailed_desc || cmd.description;

  // Conditions Checklist
  const condList = document.getElementById('modal-conditions-list');
  condList.innerHTML = '';
  if (cmd.conditions && cmd.conditions.length > 0) {
    cmd.conditions.forEach(c => {
      const row = document.createElement('div');
      row.className = 'cond-row';
      row.innerHTML = `
        <span class="cond-icon">✓</span>
        <span>${c}</span>
      `;
      condList.appendChild(row);
    });
  } else {
    condList.innerHTML = `<div class="cond-row"><span class="cond-icon">✓</span><span>Không có điều kiện ràng buộc đặc biệt.</span></div>`;
  }

  // Parameters Table
  const paramsSection = document.getElementById('modal-params-section');
  const paramsTbody = document.getElementById('modal-params-tbody');
  if (cmd.parameters && cmd.parameters.length > 0) {
    paramsSection.style.display = 'block';
    paramsTbody.innerHTML = cmd.parameters.map(p => `
      <tr>
        <td><code>${p.name}</code></td>
        <td>${p.type}</td>
        <td>${p.required ? '<strong style="color: var(--red);">Bắt buộc</strong>' : '<span style="color: var(--green);">Tùy chọn</span>'}</td>
        <td>${p.default !== null && p.default !== undefined ? `<code>${p.default}</code>` : '<em>Không có</em>'}</td>
        <td>${p.description || '-'}</td>
      </tr>
    `).join('');
  } else {
    paramsSection.style.display = 'none';
  }

  // Interactive Syntax Builder
  setupSyntaxBuilder(cmd);

  // Examples List
  const examplesList = document.getElementById('modal-examples-list');
  examplesList.innerHTML = '';
  if (cmd.examples && cmd.examples.length > 0) {
    cmd.examples.forEach(ex => {
      const row = document.createElement('div');
      row.className = 'example-row';
      row.innerHTML = `
        <div class="example-info">
          <code>${ex.cmd}</code>
          <span class="example-desc">${ex.desc}</span>
        </div>
        <button class="copy-btn-sm" title="Sao chép ví dụ" data-cmd="${ex.cmd}">📋</button>
      `;
      row.querySelector('.copy-btn-sm').addEventListener('click', (e) => {
        e.stopPropagation();
        copyText(ex.cmd, `Đã sao chép: ${ex.cmd}`);
      });
      examplesList.appendChild(row);
    });
  }

  // Discord Embed Preview
  setupDiscordEmbedPreview(cmd);

  // Show modal
  modal.style.display = 'flex';
  requestAnimationFrame(() => {
    modal.classList.add('active');
  });
  document.body.style.overflow = 'hidden';
}

function closeCommandModal() {
  playSound('click');
  const modal = document.getElementById('command-modal');
  if (!modal) return;
  modal.classList.remove('active');
  setTimeout(() => {
    modal.style.display = 'none';
    document.body.style.overflow = '';
  }, 250);
}

// 5. Interactive Syntax Builder Setup
function setupSyntaxBuilder(cmd) {
  const builderSection = document.getElementById('modal-builder-section');
  const inputsContainer = document.getElementById('modal-builder-inputs');
  const outputCode = document.getElementById('modal-builder-output');
  const copyBuilderBtn = document.getElementById('modal-copy-builder-btn');

  if (!builderSection || !inputsContainer || !outputCode) return;

  if (!cmd.parameters || cmd.parameters.length === 0) {
    builderSection.style.display = 'none';
    return;
  }

  builderSection.style.display = 'block';
  inputsContainer.innerHTML = '';

  const inputValues = {};

  cmd.parameters.forEach(p => {
    const field = document.createElement('div');
    field.className = 'builder-field';

    const label = document.createElement('label');
    label.innerHTML = `${p.name} ${p.required ? '<span style="color:var(--red);">*</span>' : '(tùy chọn)'}:`;

    let inputElement;

    // Check if literal or choices
    if (p.type.includes('Literal') || p.type.includes('Lựa chọn')) {
      inputElement = document.createElement('select');
      let options = [];
      if (cmd.id === 'cf') options = ['ngua', 'sap'];
      else if (cmd.id === 'loop') options = ['off', 'song', 'queue'];
      else if (cmd.id === 'setruleaction') {
        if (p.name === 'rule') options = ['invite', 'links', 'flood', 'badwords'];
        if (p.name === 'action') options = ['delete', 'timeout', 'kick', 'ban'];
      }
      else if (cmd.id === 'top') options = ['server', 'global'];
      else if (cmd.id === 'invitebypass' || cmd.id === 'linkbypass') options = ['add', 'remove', 'list', 'clear'];
      else if (cmd.id === 'linkchannel') {
        if (p.name === 'action') options = ['panel', 'mode', 'add', 'remove', 'list', 'clear'];
        else if (p.name === 'mode') options = ['all', 'only', 'ignore'];
      }
      else if (cmd.id === 'antilink') options = ['on', 'off', 'status', 'channel', 'mode', 'delete', 'timeout', 'kick', 'ban'];
      else if (cmd.id === 'levelnotify') options = ['on', 'off'];
      else if (cmd.id === 'setlog') options = ['say', 'dms', 'all'];
      else options = ['on', 'off', 'status'];

      options.forEach(opt => {
        const optionEl = document.createElement('option');
        optionEl.value = opt;
        optionEl.textContent = opt;
        inputElement.appendChild(optionEl);
      });
      inputValues[p.name] = options[0];

      inputElement.addEventListener('change', (e) => {
        inputValues[p.name] = e.target.value.trim();
        updateBuilderOutput();
      });
    } else {
      inputElement = document.createElement('input');
      inputElement.type = 'text';
      inputElement.placeholder = p.default ? `Mặc định: ${p.default}` : `Nhập ${p.name}...`;
      if (p.default && p.default !== 'Chính bạn' && p.default !== 'Kênh hiện tại') {
        inputElement.value = p.default;
        inputValues[p.name] = p.default;
      } else {
        inputValues[p.name] = '';
      }

      inputElement.addEventListener('input', (e) => {
        inputValues[p.name] = e.target.value.trim();
        updateBuilderOutput();
      });
    }

    field.appendChild(label);
    field.appendChild(inputElement);
    inputsContainer.appendChild(field);
  });

  function updateBuilderOutput() {
    let prefixResult = `${(typeof BOT_CONFIG !== 'undefined' && BOT_CONFIG.prefix) || '.'}${cmd.name}`;
    let slashResult = `/${cmd.name}`;

    cmd.parameters.forEach(p => {
      const val = inputValues[p.name];
      if (val && val !== '') {
        prefixResult += ` ${val}`;
        slashResult += ` ${p.name}: ${val}`;
      }
    });

    outputCode.textContent = prefixResult;
    copyBuilderBtn.onclick = () => {
      copyText(prefixResult, `Đã sao chép: ${prefixResult}`);
    };
  }

  updateBuilderOutput();
}

// 6. Discord Embed Mockup Setup
function setupDiscordEmbedPreview(cmd) {
  const embedSection = document.getElementById('modal-embed-section');
  const embedBar = document.getElementById('embed-bar');
  const embedTitle = document.getElementById('embed-title');
  const embedDesc = document.getElementById('embed-desc');
  const embedFields = document.getElementById('embed-fields');
  const embedFooter = document.getElementById('embed-footer');

  if (!cmd.embed_preview) {
    if (embedSection) embedSection.style.display = 'none';
    return;
  }

  embedSection.style.display = 'block';
  const prev = cmd.embed_preview;

  embedBar.style.backgroundColor = prev.color || '#5865F2';
  embedTitle.textContent = prev.title || '';
  embedDesc.textContent = prev.description || '';

  embedFields.innerHTML = '';
  if (prev.fields && prev.fields.length > 0) {
    prev.fields.forEach(f => {
      const fEl = document.createElement('div');
      fEl.className = 'embed-field';
      fEl.innerHTML = `
        <h6>${f.name}</h6>
        <p>${f.value}</p>
      `;
      embedFields.appendChild(fEl);
    });
  }

  embedFooter.textContent = prev.footer || 'Shin Bot System';
}

// 7. General Event Listeners
function setupEventListeners() {
  // Main Search Input
  const searchInput = document.getElementById('main-search-input');
  const clearBtn = document.getElementById('clear-search-btn');

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentSearch = e.target.value;
      if (clearBtn) clearBtn.style.display = currentSearch ? 'block' : 'none';
      renderCommands();
    });

    if (clearBtn) {
      clearBtn.addEventListener('click', () => {
        searchInput.value = '';
        currentSearch = '';
        clearBtn.style.display = 'none';
        searchInput.focus();
        renderCommands();
      });
    }
  }

  // Keyboard shortcut ( / or Ctrl+K )
  window.addEventListener('keydown', (e) => {
    if ((e.key === '/' || (e.ctrlKey && e.key.toLowerCase() === 'k')) && document.activeElement !== searchInput) {
      e.preventDefault();
      if (searchInput) {
        searchInput.focus();
        searchInput.select();
      }
    } else if (e.key === 'Escape') {
      const modal = document.getElementById('command-modal');
      if (modal && modal.classList.contains('active')) {
        closeCommandModal();
      }
    }
  });

  // Secondary Filters
  const permFilter = document.getElementById('perm-filter');
  if (permFilter) {
    permFilter.addEventListener('change', (e) => {
      playSound('click');
      currentPerm = e.target.value;
      renderCommands();
    });
  }

  const typeFilter = document.getElementById('type-filter');
  if (typeFilter) {
    typeFilter.addEventListener('change', (e) => {
      playSound('click');
      currentType = e.target.value;
      renderCommands();
    });
  }

  const sortSelect = document.getElementById('sort-select');
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      playSound('click');
      currentSort = e.target.value;
      renderCommands();
    });
  }

  // Reset Filters Buttons
  const resetBtn = document.getElementById('reset-filters-btn');
  const resetEmptyBtn = document.getElementById('reset-search-empty-btn');

  const doReset = () => {
    playSound('click');
    currentCategory = 'all';
    currentSearch = '';
    currentPerm = 'all';
    currentType = 'all';
    currentSort = 'default';

    if (searchInput) {
      searchInput.value = '';
      if (clearBtn) clearBtn.style.display = 'none';
    }
    if (permFilter) permFilter.value = 'all';
    if (typeFilter) typeFilter.value = 'all';
    if (sortSelect) sortSelect.value = 'default';

    document.querySelectorAll('.cat-tab-btn').forEach(b => {
      b.classList.toggle('active', b.dataset.category === 'all');
    });

    renderCommands();
  };

  if (resetBtn) resetBtn.addEventListener('click', doReset);
  if (resetEmptyBtn) resetEmptyBtn.addEventListener('click', doReset);

  // Quick Copy Prefix Button
  const prefixBtn = document.getElementById('quick-copy-prefix');
  if (prefixBtn) {
    prefixBtn.addEventListener('click', () => {
      const currentPref = (typeof BOT_CONFIG !== 'undefined' && BOT_CONFIG.prefix) || '.';
      copyText(currentPref, `Đã sao chép Prefix mặc định (${currentPref})`);
    });
  }

  // Sound Toggle Button
  const soundBtn = document.getElementById('sound-toggle-btn');
  const soundIcon = document.getElementById('sound-icon');
  if (soundBtn) {
    soundBtn.addEventListener('click', () => {
      soundEnabled = !soundEnabled;
      if (soundIcon) soundIcon.textContent = soundEnabled ? '🔊' : '🔇';
      showToast(soundEnabled ? 'Đã bật hiệu ứng âm thanh' : 'Đã tắt hiệu ứng âm thanh', soundEnabled ? '🔊' : '🔇');
    });
  }

  // Modal Close Buttons
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const modalFooterClose = document.getElementById('modal-close-footer-btn');
  const modalBackdrop = document.getElementById('command-modal');

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeCommandModal);
  if (modalFooterClose) modalFooterClose.addEventListener('click', closeCommandModal);
  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) {
        closeCommandModal();
      }
    });
  }

  // Modal Syntax Copy buttons
  const copyPref = document.getElementById('modal-copy-prefix-btn');
  const copySlash = document.getElementById('modal-copy-slash-btn');
  if (copyPref) {
    copyPref.addEventListener('click', () => {
      if (activeModalCmd) {
        copyText(activeModalCmd.prefix_syntax, `Đã sao chép: ${activeModalCmd.prefix_syntax}`);
      }
    });
  }
  if (copySlash) {
    copySlash.addEventListener('click', () => {
      if (activeModalCmd) {
        copyText(activeModalCmd.slash_syntax, `Đã sao chép: ${activeModalCmd.slash_syntax}`);
      }
    });
  }

  // Code Block Copy buttons in Deployment Guide
  document.querySelectorAll('.copy-code-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const text = btn.getAttribute('data-copy');
      if (text) {
        copyText(text, 'Đã sao chép câu lệnh vào bộ nhớ tạm!');
      }
    });
  });
}
