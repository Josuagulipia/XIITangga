// ==========================================
// KONFIGURASI FIREBASE CLOUD DATABASE
// ==========================================
// Ganti objek firebaseConfig di bawah ini dengan API Key & Database URL dari Akun Firebase Anda:
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  databaseURL: "https://YOUR_PROJECT_ID-default-rtdb.firebaseio.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID",
};

// Inisialisasi Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
const db = firebase.database();

// ==========================================
// DEFAULT BANK SOAL KOMPREHENSIF (MATERI DAYAK)
// ==========================================
const defaultQuestions = [
  {
    q: "Apa fungsi utama dari motif pada sebuah karya seni dan kerajinan?",
    options: [
      "A. Menambah berat dan ketahanan benda",
      "B. Membuat benda lebih indah, menarik, dan memiliki ciri khas",
      "C. Mengubah bentuk fisik asli suatu benda",
      "D. Menghilangkan fungsi praktis benda",
    ],
    answer: 1,
    difficulty: "🟢 Mudah",
    explanation:
      "Motif berfungsi membuat suatu benda menjadi lebih indah, menarik, dan memiliki ciri khas tertentu.",
    points: 10,
  },
  {
    q: "Apa yang dimaksud dengan kegiatan merancang motif?",
    options: [
      "A. Menggambar bentuk secara eksak dan persis tanpa modifikasi",
      "B. Kegiatan membuat atau menyusun ide gambar yang digunakan sebagai hiasan pada suatu benda",
      "C. Mewarnai kain sesuai dengan standar tradisi secara baku",
      "D. Meniru lukisan kuno tanpa mengubah garis utamanya",
    ],
    answer: 1,
    difficulty: "🟢 Mudah",
    explanation:
      "Merancang motif adalah kegiatan membuat atau menyusun ide gambar yang akan digunakan sebagai hiasan.",
    points: 10,
  },
  {
    q: "Proses mengubah objek yang rumit menjadi bentuk hiasan yang lebih sederhana tanpa menghilangkan ciri khasnya disebut...",
    options: [
      "A. Realisme visual",
      "B. Menyederhanakan bentuk (Stilisasi)",
      "C. Duplikasi total",
      "D. Geometrisasi kaku",
    ],
    answer: 1,
    difficulty: "🟢 Mudah",
    explanation:
      "Menyederhanakan bentuk (Stilisasi) mengubah objek rumit menjadi bentuk hias yang tetap mempertahankan ciri khasnya.",
    points: 10,
  },
  {
    q: "Dalam karya tradisional Dayak, warna MERAH umumnya memberikan kesan...",
    options: [
      "A. Bersih dan sederhana",
      "B. Berani, kuat, dan bersemangat",
      "C. Alami dan segar",
      "D. Cerah dan hangat",
    ],
    answer: 1,
    difficulty: "🟢 Mudah",
    explanation: "Warna merah memberikan kesan berani, kuat, dan bersemangat.",
    points: 10,
  },
  {
    q: "Bentuk tumbuhan yang melengkung atau menjalar dan sangat cocok untuk mengisi ruang kosong pada motif disebut...",
    options: ["A. Batang pohon", "B. Sulur", "C. Duri", "D. Biji"],
    answer: 1,
    difficulty: "🟢 Mudah",
    explanation:
      "Sulur merupakan bentuk tumbuhan melengkung/menjalar yang cocok mengisi ruang kosong pada pola.",
    points: 10,
  },
];

// DATA POSISI ULAR & TANGGA
const ladders = {
  2: 38,
  7: 14,
  8: 31,
  15: 26,
  21: 42,
  28: 84,
  36: 44,
  51: 67,
  71: 91,
  78: 98,
  87: 94,
};
const snakes = {
  16: 6,
  49: 11,
  62: 19,
  46: 25,
  64: 60,
  74: 53,
  89: 68,
  95: 75,
  92: 88,
  99: 80,
};

// GAME STATE MANAGEMENT
let questionBank = [];
let gameState = {
  totalTeams: 4,
  players: [
    {
      name: "Tim 1",
      pos: 0,
      score: 0,
      color: "p1",
      finished: false,
      finishOrder: null,
    },
    {
      name: "Tim 2",
      pos: 0,
      score: 0,
      color: "p2",
      finished: false,
      finishOrder: null,
    },
    {
      name: "Tim 3",
      pos: 0,
      score: 0,
      color: "p3",
      finished: false,
      finishOrder: null,
    },
    {
      name: "Tim 4",
      pos: 0,
      score: 0,
      color: "p4",
      finished: false,
      finishOrder: null,
    },
  ],
  currentPlayer: 0,
  isRolling: false,
  isQuestionActive: false,
  isPaused: false,
  timerLimit: 20,
  timerId: null,
  currentDice: 0,
  audioEnabled: true,
  darkMode: false,
  finishCount: 0,
  history: [],
};

// ==========================================
// SOUND SYNTHESIZERS (WEB AUDIO API)
// ==========================================
let audioCtx = null;
function initAudioContext() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
  if (audioCtx.state === "suspended") {
    audioCtx.resume();
  }
}

function playSound(type) {
  if (!gameState.audioEnabled) return;
  initAudioContext();
  if (!audioCtx) return;

  const now = audioCtx.currentTime;
  try {
    if (type === "roll") {
      for (let i = 0; i < 4; i++) {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = "triangle";
        osc.frequency.setValueAtTime(200 + Math.random() * 300, now + i * 0.05);
        gain.gain.setValueAtTime(0.15, now + i * 0.05);
        gain.gain.exponentialRampToValueAtTime(0.01, now + i * 0.05 + 0.04);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start(now + i * 0.05);
        osc.stop(now + i * 0.05 + 0.04);
      }
    } else if (type === "step") {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(450, now);
      osc.frequency.exponentialRampToValueAtTime(800, now + 0.08);
      gain.gain.setValueAtTime(0.2, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.08);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start(now);
      osc.stop(now + 0.08);
    } else if (type === "ladder") {
      const notes = [261.63, 329.63, 392.0, 523.25, 659.25, 783.99];
      notes.forEach((freq, i) => {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = "triangle";
        osc.frequency.setValueAtTime(freq, now + i * 0.08);
        gain.gain.setValueAtTime(0.2, now + i * 0.08);
        gain.gain.exponentialRampToValueAtTime(0.01, now + i * 0.08 + 0.12);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start(now + i * 0.08);
        osc.stop(now + i * 0.08 + 0.12);
      });
    } else if (type === "snake") {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = "sawtooth";
      osc.frequency.setValueAtTime(800, now);
      osc.frequency.exponentialRampToValueAtTime(150, now + 0.5);
      gain.gain.setValueAtTime(0.25, now);
      gain.gain.linearRampToValueAtTime(0.01, now + 0.5);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start(now);
      osc.stop(now + 0.5);
    } else if (type === "correct") {
      const notes = [523.25, 659.25, 783.99];
      notes.forEach((freq, i) => {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, now + i * 0.1);
        gain.gain.setValueAtTime(0.2, now + i * 0.1);
        gain.gain.exponentialRampToValueAtTime(0.01, now + i * 0.1 + 0.15);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start(now + i * 0.1);
        osc.stop(now + i * 0.1 + 0.15);
      });
    } else if (type === "wrong") {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = "sawtooth";
      osc.frequency.setValueAtTime(160, now);
      osc.frequency.setValueAtTime(120, now + 0.15);
      gain.gain.setValueAtTime(0.2, now);
      gain.gain.linearRampToValueAtTime(0.01, now + 0.35);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start(now);
      osc.stop(now + 0.35);
    } else if (type === "win") {
      const victoryNotes = [440, 554.37, 659.25, 880];
      victoryNotes.forEach((freq, i) => {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = "triangle";
        osc.frequency.setValueAtTime(freq, now + i * 0.12);
        gain.gain.setValueAtTime(0.25, now + i * 0.12);
        gain.gain.exponentialRampToValueAtTime(0.01, now + i * 0.12 + 0.3);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start(now + i * 0.12);
        osc.stop(now + i * 0.12 + 0.3);
      });
    }
  } catch (e) {}
}

window.onload = function () {
  listenToCloudQuestions();
  loadDarkModeSetting();
  checkSavedGame();
  document.body.addEventListener("click", () => initAudioContext(), {
    once: true,
  });
};

// ==========================================
// FIREBASE SYNCHRONIZATION (REALTIME DB)
// ==========================================
function listenToCloudQuestions() {
  const qRef = db.ref("questions");
  qRef.on("value", (snapshot) => {
    const data = snapshot.val();
    if (data) {
      questionBank = data;
    } else {
      questionBank = [...defaultQuestions];
      db.ref("questions").set(defaultQuestions);
    }
    renderCrudList();
  });
}

function saveCloudQuestions() {
  db.ref("questions").set(questionBank);
}

function saveGameState() {
  localStorage.setItem("snake_game_state", JSON.stringify(gameState));
}

function checkSavedGame() {
  const saved = localStorage.getItem("snake_game_state");
  if (saved) {
    if (
      confirm(
        "Ditemukan permainan terakhir yang belum selesai. Lanjutkan permainan?",
      )
    ) {
      gameState = JSON.parse(saved);
      toggleModal("setup-modal", false);
      renderTokens();
      updateUI();
      logHistory("Melanjutkan permainan sebelumnya.");
    }
  }
}

// KOORDINAT GRID PAPAN (START = KOSONG/0)
function getTileCoordinates(tileNumber) {
  if (tileNumber <= 0) return { x: -8, y: 92 };
  if (tileNumber > 100) tileNumber = 100;

  const zeroIndexed = tileNumber - 1;
  const row = Math.floor(zeroIndexed / 10);
  let col = zeroIndexed % 10;
  if (row % 2 === 1) col = 9 - col;

  const x = col * 10 + 2.5;
  const y = (9 - row) * 10 + 2.5;
  return { x, y };
}

function adjustTeamInputs(val) {
  const count = parseInt(val);
  for (let i = 1; i <= 4; i++) {
    document.getElementById(`group-p${i}`).style.display =
      i <= count ? "flex" : "none";
  }
}

function startGame() {
  initAudioContext();
  const count = parseInt(document.getElementById("team-count-select").value);
  gameState.totalTeams = count;
  gameState.players = [];

  const colors = ["p1", "p2", "p3", "p4"];
  for (let i = 0; i < count; i++) {
    const nameInput =
      document.getElementById(`p${i + 1}-name`).value || `Tim ${i + 1}`;
    gameState.players.push({
      name: nameInput,
      pos: 0,
      score: 0,
      color: colors[i],
      finished: false,
      finishOrder: null,
    });
  }

  toggleModal("setup-modal", false);
  renderTokens();
  updateUI();
  saveGameState();
  logHistory(`Permainan dimulai dengan ${count} tim! Semua berada di START.`);
}

function renderTokens() {
  const layer = document.getElementById("tokens-layer");
  layer.innerHTML = "";
  gameState.players.forEach((player, index) => {
    const token = document.createElement("div");
    token.className = `token ${player.color}`;
    token.id = `token-${index}`;

    const coords = getTileCoordinates(player.pos);
    const offsetX = (index % 2) * 2.2;
    const offsetY = Math.floor(index / 2) * 2.2;

    token.style.left = `${coords.x + offsetX}%`;
    token.style.top = `${coords.y + offsetY}%`;
    layer.appendChild(token);
  });
}

function updateUI() {
  const sb = document.getElementById("scoreboard-list");
  sb.innerHTML = "";
  gameState.players.forEach((p) => {
    const posText = p.pos === 0 ? "START (0)" : `Kotak ${p.pos}`;
    sb.innerHTML += `
            <div class="scoreboard-item">
                <span><strong>${p.name}</strong> ${p.finished ? "✅" : ""}</span>
                <span>${posText} | ${p.score} pt</span>
            </div>
        `;
  });

  const curP = gameState.players[gameState.currentPlayer];
  const turnElem = document.getElementById("current-turn-indicator");
  turnElem.className = `turn-indicator ${curP.color}-bg`;
  turnElem.innerText = `🎯 GILIRAN: ${curP.name.toUpperCase()}`;
}

function handleRollDice() {
  if (gameState.isRolling || gameState.isQuestionActive || gameState.isPaused)
    return;

  const curP = gameState.players[gameState.currentPlayer];
  if (curP.finished) {
    nextTurn();
    return;
  }

  gameState.isRolling = true;
  let rolls = 0;
  const diceElem = document.getElementById("dice-display");
  const interval = setInterval(() => {
    playSound("roll");
    const rand = Math.floor(Math.random() * 6) + 1;
    diceElem.innerText = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"][rand - 1];
    rolls++;
    if (rolls > 8) {
      clearInterval(interval);
      gameState.currentDice = Math.floor(Math.random() * 6) + 1;
      diceElem.innerText = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"][
        gameState.currentDice - 1
      ];
      gameState.isRolling = false;
      showQuestion();
    }
  }, 80);
}

function showQuestion() {
  gameState.isQuestionActive = true;
  const qData = questionBank[Math.floor(Math.random() * questionBank.length)];

  document.getElementById("q-difficulty").innerText = qData.difficulty;
  document.getElementById("q-text").innerText = qData.q;

  const optsElem = document.getElementById("q-options");
  optsElem.innerHTML = "";

  qData.options.forEach((opt, idx) => {
    const btn = document.createElement("button");
    btn.className = "option-btn";
    btn.innerText = opt;
    btn.onclick = () => handleAnswer(idx, qData);
    optsElem.appendChild(btn);
  });

  const feedback = document.getElementById("q-feedback");
  feedback.innerText = "";
  feedback.className = "feedback-box hidden";

  toggleModal("question-modal", true);

  let timeLeft = gameState.timerLimit;
  document.getElementById("timer-display").innerText = timeLeft;
  clearInterval(gameState.timerId);
  gameState.timerId = setInterval(() => {
    if (gameState.isPaused) return;
    timeLeft--;
    document.getElementById("timer-display").innerText = timeLeft;
    if (timeLeft <= 0) {
      clearInterval(gameState.timerId);
      handleAnswer(-1, qData);
    }
  }, 1000);
}

function handleAnswer(selectedIndex, qData) {
  clearInterval(gameState.timerId);

  const feedback = document.getElementById("q-feedback");
  feedback.classList.remove("hidden");

  const btns = document.querySelectorAll(".option-btn");
  btns.forEach((b) => (b.onclick = null));

  const isCorrect = selectedIndex === qData.answer;
  const curP = gameState.players[gameState.currentPlayer];

  if (isCorrect) {
    playSound("correct");
    curP.score += qData.points;
    feedback.className = "feedback-box correct";
    feedback.innerText = `🎉 BENAR! ${qData.explanation}`;
    logHistory(`${curP.name} menjawab BENAR (+${qData.points} pt).`);
  } else {
    playSound("wrong");
    feedback.className = "feedback-box wrong";
    feedback.innerText = `❌ SALAH / WAKTU HABIS! ${qData.explanation}`;
    logHistory(`${curP.name} menjawab SALAH.`);
  }

  setTimeout(() => {
    toggleModal("question-modal", false);
    feedback.innerText = "";
    feedback.className = "feedback-box hidden";

    gameState.isQuestionActive = false;

    if (isCorrect) {
      movePlayer(gameState.currentPlayer, gameState.currentDice);
    } else {
      checkBonusOrNext();
    }
  }, 2500);
}

function movePlayer(playerIdx, steps) {
  const p = gameState.players[playerIdx];
  let target = p.pos + steps;
  if (target > 100) target = 100;

  let current = p.pos;
  const walkInterval = setInterval(() => {
    if (current < target) {
      current++;
      p.pos = current;
      playSound("step");
      renderTokens();
    } else {
      clearInterval(walkInterval);
      checkSpecialTiles(p);
    }
  }, 250);
}

function checkSpecialTiles(player) {
  const pos = player.pos;

  if (ladders[pos]) {
    playSound("ladder");
    const nextPos = ladders[pos];
    logHistory(`🪜 ${player.name} NAIK TANGGA dari ${pos} ke ${nextPos}!`);
    player.score += 5;
    player.pos = nextPos;
    renderTokens();
  } else if (snakes[pos]) {
    playSound("snake");
    const nextPos = snakes[pos];
    logHistory(
      `🐍 ${player.name} TERKENA ULAR dari ${pos} turun ke ${nextPos}!`,
    );
    player.pos = nextPos;
    renderTokens();
  }

  if (player.pos === 100 && !player.finished) {
    player.finished = true;
    gameState.finishCount++;
    player.finishOrder = gameState.finishCount;
    player.score += 50;
    logHistory(
      `🏆 ${player.name} MENCAPAI KOTAK 100! (Juara ${player.finishOrder})`,
    );
  }

  updateUI();
  saveGameState();

  if (gameState.finishCount >= gameState.totalTeams) {
    endGame();
  } else {
    checkBonusOrNext();
  }
}

function checkBonusOrNext() {
  if (
    gameState.currentDice === 6 &&
    !gameState.players[gameState.currentPlayer].finished
  ) {
    alert(
      `🎉 ANGKA 6! ${gameState.players[gameState.currentPlayer].name} Mendapatkan Bonus Lemparan Dadu!`,
    );
    logHistory(
      `⭐ ${gameState.players[gameState.currentPlayer].name} dapat bonus giliran karena angka 6.`,
    );
    updateUI();
  } else {
    nextTurn();
  }
}

function nextTurn() {
  do {
    gameState.currentPlayer =
      (gameState.currentPlayer + 1) % gameState.totalTeams;
  } while (
    gameState.players[gameState.currentPlayer].finished &&
    gameState.finishCount < gameState.totalTeams
  );

  updateUI();
  saveGameState();
}

// MANAJEMEN SOAL (CRUD MODE GURU VERSI CLOUD)
function saveQuestion(e) {
  e.preventDefault();
  const editIdx = parseInt(document.getElementById("edit-q-index").value);
  const newQ = {
    q: document.getElementById("q-input-text").value,
    options: [
      "A. " + document.getElementById("q-input-a").value,
      "B. " + document.getElementById("q-input-b").value,
      "C. " + document.getElementById("q-input-c").value,
      "D. " + document.getElementById("q-input-d").value,
    ],
    answer: parseInt(document.getElementById("q-input-correct").value),
    difficulty: document.getElementById("q-input-diff").value,
    explanation: document.getElementById("q-input-exp").value,
    points: 10,
  };

  if (editIdx >= 0) {
    questionBank[editIdx] = newQ;
  } else {
    questionBank.push(newQ);
  }

  saveCloudQuestions();
  resetCrudForm();
  alert("Soal berhasil disimpan ke Firebase Cloud!");
}

function renderCrudList() {
  const list = document.getElementById("questions-crud-list");
  document.getElementById("total-q-count").innerText = questionBank.length;
  list.innerHTML = "";
  questionBank.forEach((q, idx) => {
    list.innerHTML += `
            <div class="crud-item">
                <span>${idx + 1}. ${q.q.substring(0, 35)}...</span>
                <div>
                    <button class="btn btn-sm btn-secondary" onclick="editQuestion(${idx})">✏️ Edit</button>
                    <button class="btn btn-sm btn-danger" onclick="deleteQuestion(${idx})">🗑️ Hapus</button>
                </div>
            </div>
        `;
  });
}

function editQuestion(idx) {
  const q = questionBank[idx];
  document.getElementById("edit-q-index").value = idx;
  document.getElementById("q-input-text").value = q.q;
  document.getElementById("q-input-a").value = q.options[0].replace(
    /^A\.\s*/,
    "",
  );
  document.getElementById("q-input-b").value = q.options[1].replace(
    /^B\.\s*/,
    "",
  );
  document.getElementById("q-input-c").value = q.options[2].replace(
    /^C\.\s*/,
    "",
  );
  document.getElementById("q-input-d").value = q.options[3].replace(
    /^D\.\s*/,
    "",
  );
  document.getElementById("q-input-correct").value = q.answer;
  document.getElementById("q-input-diff").value = q.difficulty;
  document.getElementById("q-input-exp").value = q.explanation;
}

function deleteQuestion(idx) {
  if (confirm("Hapus soal ini dari daftar?")) {
    questionBank.splice(idx, 1);
    saveCloudQuestions();
  }
}

function resetCrudForm() {
  document.getElementById("crud-form").reset();
  document.getElementById("edit-q-index").value = "-1";
}

// UTILS & SETTINGS
function toggleDarkMode() {
  gameState.darkMode = !gameState.darkMode;
  document.body.classList.toggle("dark-mode", gameState.darkMode);
  localStorage.setItem("snake_dark_mode", gameState.darkMode);
}

function loadDarkModeSetting() {
  const dark = localStorage.getItem("snake_dark_mode") === "true";
  gameState.darkMode = dark;
  document.body.classList.toggle("dark-mode", dark);
}

function toggleModal(id, show) {
  const modal = document.getElementById(id);
  if (show) modal.classList.add("active");
  else modal.classList.remove("active");
}

function togglePause() {
  gameState.isPaused = !gameState.isPaused;
  document.getElementById("pause-icon").innerText = gameState.isPaused
    ? "▶️"
    : "⏸️";
}

function toggleAudio() {
  gameState.audioEnabled = !gameState.audioEnabled;
  document.getElementById("audio-icon").innerText = gameState.audioEnabled
    ? "🔊"
    : "🔇";
}

function handleBoardUpload(event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      document.getElementById("board-img").src = e.target.result;
    };
    reader.readAsDataURL(file);
  }
}

function updateTimerSetting(val) {
  gameState.timerLimit = parseInt(val) || 20;
}

function logHistory(msg) {
  gameState.history.push(msg);
  const logElem = document.getElementById("game-history-log");
  logElem.innerHTML = gameState.history
    .map((h) => `<div>• ${h}</div>`)
    .join("");
  logElem.scrollTop = logElem.scrollHeight;
}

function confirmReset() {
  if (confirm("Apakah Anda yakin ingin mereset permainan dari awal?")) {
    resetGameTotal();
  }
}

function resetGameTotal() {
  localStorage.removeItem("snake_game_state");
  location.reload();
}

function endGame() {
  localStorage.removeItem("snake_game_state");
  playSound("win");
  if (typeof confetti === "function") {
    confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 } });
  }

  const sorted = [...gameState.players].sort(
    (a, b) => a.finishOrder - b.finishOrder,
  );
  const podium = document.getElementById("podium-container");

  podium.innerHTML = sorted
    .map(
      (p, idx) => `
        <div style="margin: 10px 0; font-size: 1.2rem;">
            ${["🥇 Juara 1", "🥈 Juara 2", "🥉 Juara 3", "🏅 Juara 4"][idx]}: 
            <strong>${p.name}</strong> (Skor: ${p.score} pt)
        </div>
    `,
    )
    .join("");

  toggleModal("winner-modal", true);
}
