// ==========================================
// BANK SOAL KOMPREHENSIF (MATERI MOTIF DAYAK)
// ==========================================
const defaultQuestions = [
  {
    q: "Motif adalah ....",
    options: [
      "A. benda yang digunakan untuk membuat kerajinan",
      "B. pola, gambar, atau bentuk tertentu yang dibuat secara berulang sebagai hiasan",
      "C. warna yang digunakan pada sebuah benda",
      "D. teknik membuat sebuah benda",
    ],
    answer: 1,
    difficulty: "🟢 Mudah",
    explanation:
      "Motif adalah pola atau gambar yang dibuat berulang untuk memperindah suatu benda.",
    points: 10,
  },
  {
    q: "Tujuan utama penggunaan motif pada suatu benda adalah ....",
    options: [
      "A. membuat benda menjadi lebih berat",
      "B. membuat benda menjadi lebih mahal",
      "C. memperindah tampilan benda agar lebih menarik",
      "D. membuat benda lebih sulit digunakan",
    ],
    answer: 2,
    difficulty: "🟢 Mudah",
    explanation:
      "Salah satu fungsi utama motif adalah membuat benda terlihat lebih indah dan menarik.",
    points: 10,
  },
  {
    q: "Berikut ini yang merupakan contoh motif dalam kehidupan sehari-hari adalah ....",
    options: [
      "A. motif batik pada pakaian",
      "B. ukuran meja belajar",
      "C. bentuk kursi",
      "D. bahan pembuatan tas",
    ],
    answer: 0,
    difficulty: "🟢 Mudah",
    explanation:
      "Motif dapat ditemukan dalam kehidupan sehari-hari, salah satunya pada kain atau pakaian batik.",
    points: 10,
  },
  {
    q: "Motif Dayak merupakan pola atau gambar khas yang berasal dari kebudayaan masyarakat ....",
    options: ["A. Jawa", "B. Bali", "C. Papua", "D. Dayak di Pulau Kalimantan"],
    answer: 3,
    difficulty: "🟢 Mudah",
    explanation:
      "Motif Dayak merupakan bagian dari kebudayaan masyarakat Dayak yang berasal dari Kalimantan.",
    points: 10,
  },
  {
    q: "Motif Dayak tidak hanya dibuat untuk keindahan karena setiap motif dapat memiliki ....",
    options: [
      "A. harga jual yang tinggi",
      "B. makna, filosofi, doa, dan harapan",
      "C. ukuran yang sama",
      "D. bentuk yang selalu sederhana",
    ],
    answer: 1,
    difficulty: "🟢 Mudah",
    explanation:
      "Motif Dayak bukan sekadar hiasan. Di dalamnya terdapat pesan dan nilai kehidupan.",
    points: 10,
  },
  {
    q: "Salah satu benda yang dapat ditemukan menggunakan motif Dayak adalah ....",
    options: [
      "A. Rumah Betang",
      "B. gedung perkantoran modern",
      "C. komputer",
      "D. kendaraan bermotor",
    ],
    answer: 0,
    difficulty: "🟢 Mudah",
    explanation:
      "Motif Dayak dapat ditemukan pada berbagai benda budaya, salah satunya Rumah Betang.",
    points: 10,
  },
  {
    q: "Motif Dayak dapat diibaratkan seperti logo sekolah karena ....",
    options: [
      "A. keduanya selalu berwarna merah",
      "B. keduanya hanya digunakan sebagai hiasan",
      "C. keduanya memiliki pesan atau arti tertentu",
      "D. keduanya dibuat menggunakan komputer",
    ],
    answer: 2,
    difficulty: "🟢 Mudah",
    explanation:
      "Seperti logo sekolah, motif Dayak juga memiliki makna dan menjadi simbol identitas budaya.",
    points: 10,
  },
  {
    q: "Salah satu ciri khas motif Dayak adalah banyak menggunakan garis ....",
    options: [
      "A. lurus dan pendek saja",
      "B. melengkung, berputar, dan saling menyambung",
      "C. horizontal saja",
      "D. vertikal saja",
    ],
    answer: 1,
    difficulty: "🟢 Mudah",
    explanation:
      "Garis melengkung dan saling menyambung merupakan salah satu ciri khas motif Dayak.",
    points: 10,
  },
  {
    q: "Bentuk simetris pada motif Dayak berarti ....",
    options: [
      "A. bentuk kanan dan kiri hampir sama dan terlihat seimbang",
      "B. motif hanya menggunakan satu warna",
      "C. motif tidak memiliki pola",
      "D. gambar dibuat secara acak",
    ],
    answer: 0,
    difficulty: "🟢 Mudah",
    explanation:
      "Simetris berarti bagian kanan dan kiri memiliki bentuk yang hampir sama sehingga terlihat seimbang.",
    points: 10,
  },
  {
    q: "Banyaknya motif Dayak yang terinspirasi dari tumbuhan dan hewan disebabkan oleh ....",
    options: [
      "A. masyarakat Dayak menyukai gambar yang besar",
      "B. masyarakat Dayak hidup sangat dekat dengan alam",
      "C. tumbuhan lebih mudah digambar",
      "D. hewan lebih mudah ditemukan di kota",
    ],
    answer: 1,
    difficulty: "🟢 Mudah",
    explanation:
      "Kedekatan dengan alam membuat tumbuhan dan hewan menjadi sumber inspirasi penting dalam motif Dayak.",
    points: 10,
  },
  {
    q: "Berikut ini yang bukan merupakan contoh inspirasi alam dalam motif Dayak adalah ....",
    options: ["A. daun", "B. ikan", "C. burung", "D. mobil"],
    answer: 3,
    difficulty: "🟢 Mudah",
    explanation:
      "Daun, ikan, dan burung berasal dari alam, sedangkan mobil merupakan benda modern buatan manusia.",
    points: 10,
  },
  {
    q: "Warna yang identik dengan motif Dayak antara lain ....",
    options: [
      "A. merah, hitam, putih, kuning, dan hijau",
      "B. biru, abu-abu, dan cokelat saja",
      "C. merah muda dan ungu saja",
      "D. putih dan abu-abu saja",
    ],
    answer: 0,
    difficulty: "🟢 Mudah",
    explanation:
      "Warna-warna merah, hitam, putih, kuning, dan hijau banyak ditemukan dan identik dengan motif Dayak.",
    points: 10,
  },
  {
    q: "Motif Dayak lebih banyak menggunakan bentuk tumbuhan, hewan, dan pola geometris daripada gambar manusia secara utuh. Hal ini menunjukkan bahwa ....",
    options: [
      "A. masyarakat Dayak tidak mengenal manusia",
      "B. alam memiliki hubungan yang penting dengan kehidupan masyarakat Dayak",
      "C. manusia tidak boleh digambar",
      "D. tumbuhan lebih mahal daripada manusia",
    ],
    answer: 1,
    difficulty: "🟡 Sedang",
    explanation:
      "Banyaknya bentuk tumbuhan dan hewan menunjukkan bahwa alam sangat dekat dengan kehidupan masyarakat Dayak.",
    points: 10,
  },
  {
    q: "Salah satu fungsi motif Dayak sebagai identitas budaya adalah ....",
    options: [
      "A. menunjukkan jati diri suatu budaya",
      "B. menentukan harga sebuah benda",
      "C. membuat benda lebih berat",
      "D. menghilangkan fungsi benda",
    ],
    answer: 0,
    difficulty: "🟢 Mudah",
    explanation:
      "Motif dapat menjadi tanda yang menunjukkan asal dan identitas suatu budaya.",
    points: 10,
  },
  {
    q: "Motif Dayak disebut sebagai warisan budaya karena ....",
    options: [
      "A. hanya dibuat oleh orang tua",
      "B. diwariskan dari nenek moyang kepada generasi berikutnya",
      "C. hanya boleh digunakan di museum",
      "D. tidak boleh dikembangkan",
    ],
    answer: 1,
    difficulty: "🟢 Mudah",
    explanation:
      "Motif Dayak merupakan warisan budaya yang diteruskan dari generasi ke generasi.",
    points: 10,
  },
  {
    q: "Jika generasi muda tidak mau mempelajari motif Dayak, kemungkinan yang dapat terjadi adalah ....",
    options: [
      "A. motif menjadi semakin terkenal",
      "B. motif dapat hilang atau tidak dikenal oleh generasi berikutnya",
      "C. budaya menjadi semakin kuat",
      "D. semua motif berubah menjadi modern",
    ],
    answer: 1,
    difficulty: "🟡 Sedang",
    explanation:
      "Jika generasi muda tidak mempelajarinya, pengetahuan dan budaya tersebut dapat terlupakan.",
    points: 10,
  },
  {
    q: "Motif pakis terinspirasi dari tanaman yang banyak tumbuh di ....",
    options: [
      "A. gurun",
      "B. hutan Kalimantan",
      "C. pantai luar negeri",
      "D. perkotaan",
    ],
    answer: 1,
    difficulty: "🟢 Mudah",
    explanation:
      "Tanaman pakis banyak ditemukan di hutan Kalimantan dan kemudian menjadi salah satu inspirasi motif Dayak.",
    points: 10,
  },
  {
    q: "Makna utama yang terdapat pada motif pakis adalah ....",
    options: [
      "A. kemewahan dan kekayaan",
      "B. kehidupan, pertumbuhan, dan semangat berkembang",
      "C. kesedihan dan kehilangan",
      "D. kekuasaan dan peperangan",
    ],
    answer: 1,
    difficulty: "🟡 Sedang",
    explanation:
      "Pakis terus tumbuh sehingga digunakan sebagai simbol kehidupan dan semangat untuk berkembang.",
    points: 10,
  },
  {
    q: "Sikap seorang pelajar yang sesuai dengan filosofi motif pakis adalah ....",
    options: [
      "A. mudah menyerah ketika mendapat kesulitan",
      "B. berhenti belajar ketika mendapat nilai rendah",
      "C. terus belajar dan memperbaiki diri",
      "D. menghindari tugas yang sulit",
    ],
    answer: 2,
    difficulty: "🟡 Sedang",
    explanation:
      "Nilai motif pakis mengajarkan kita untuk terus tumbuh dan menjadi pribadi yang lebih baik.",
    points: 10,
  },
  {
    q: "Burung Enggang dianggap sebagai hewan yang mulia dan dihormati oleh masyarakat Dayak. Motif Burung Enggang melambangkan ....",
    options: [
      "A. kesedihan dan kelemahan",
      "B. kebijaksanaan, kepemimpinan, kehormatan, dan kewibawaan",
      "C. kemalasan dan ketakutan",
      "D. persaingan dan permusuhan",
    ],
    answer: 1,
    difficulty: "🟡 Sedang",
    explanation:
      "Burung Enggang dianggap mulia dan dihormati sehingga menjadi simbol berbagai nilai kepemimpinan.",
    points: 10,
  },
  {
    q: "Seorang ketua kelas selalu adil, mau mendengarkan pendapat teman, dan menjadi contoh yang baik. Sikap tersebut sesuai dengan nilai dari ....",
    options: [
      "A. motif pakis",
      "B. motif naga",
      "C. motif Burung Enggang",
      "D. motif sulur",
    ],
    answer: 2,
    difficulty: "🟡 Sedang",
    explanation:
      "Sikap adil, bijaksana, dan menjadi teladan sesuai dengan nilai yang terdapat pada motif Burung Enggang.",
    points: 10,
  },
  {
    q: "Dalam budaya Dayak, motif naga melambangkan ....",
    options: [
      "A. kekuatan dan perlindungan",
      "B. kemalasan dan kelemahan",
      "C. kesedihan dan kehilangan",
      "D. perselisihan dan permusuhan",
    ],
    answer: 0,
    difficulty: "🟡 Sedang",
    explanation:
      "Dalam budaya Dayak, naga memiliki makna positif sebagai simbol kekuatan, keberanian, dan perlindungan.",
    points: 10,
  },
  {
    q: "Contoh keberanian yang sesuai dengan nilai motif Naga Dayak adalah ....",
    options: [
      "A. berkelahi dengan teman",
      "B. memaksa teman mengikuti keinginan kita",
      "C. berani mengakui kesalahan",
      "D. mengejek orang yang berbeda",
    ],
    answer: 2,
    difficulty: "🟡 Sedang",
    explanation:
      "Keberanian tidak berarti berkelahi. Mengakui kesalahan dan melakukan hal yang benar juga merupakan keberanian.",
    points: 10,
  },
  {
    q: "Seorang siswa diajak temannya untuk menyontek saat ujian. Berdasarkan nilai motif Naga Dayak, tindakan yang tepat adalah ....",
    options: [
      "A. ikut menyontek agar mendapat nilai tinggi",
      "B. menolak ajakan menyontek meskipun mendapat tekanan",
      "C. meminta jawaban dari teman secara diam-diam",
      "D. membiarkan teman menyontek jawaban kita",
    ],
    answer: 1,
    difficulty: "🔴 Sulit",
    explanation:
      "Menolak menyontek merupakan contoh keberanian untuk mempertahankan kejujuran dan melakukan hal yang benar.",
    points: 10,
  },
  {
    q: "Motif sulur dan daun menggambarkan ....",
    options: [
      "A. persaingan manusia",
      "B. hubungan antara manusia dan alam",
      "C. kekuatan dalam peperangan",
      "D. kemewahan hidup",
    ],
    answer: 1,
    difficulty: "🟡 Sedang",
    explanation:
      "Bentuk sulur dan daun yang saling terhubung menggambarkan hubungan dan keseimbangan manusia dengan alam.",
    points: 10,
  },
  {
    q: "Jika manusia terus menebang hutan dan mencemari sungai, tindakan tersebut bertentangan dengan nilai yang terdapat dalam ....",
    options: [
      "A. motif sulur dan daun",
      "B. motif naga saja",
      "C. motif Burung Enggang saja",
      "D. motif pakis saja",
    ],
    answer: 0,
    difficulty: "🔴 Sulit",
    explanation:
      "Motif sulur dan daun mengajarkan manusia untuk menjaga hubungan yang baik dengan alam dan lingkungan.",
    points: 10,
  },
  {
    q: "Berikut ini merupakan nilai yang dapat dipelajari dari motif Dayak, KECUALI ....",
    options: [
      "A. mencintai budaya sendiri",
      "B. menjaga kelestarian alam",
      "C. bekerja sama dan hidup rukun",
      "D. melupakan budaya sendiri agar terlihat modern",
    ],
    answer: 3,
    difficulty: "🔴 Sulit",
    explanation:
      "Melupakan budaya bukanlah nilai yang diajarkan oleh motif Dayak. Justru kita harus mengenal dan melestarikannya.",
    points: 10,
  },
  {
    q: "Salah satu cara generasi muda melestarikan motif Dayak adalah ....",
    options: [
      "A. tidak mempelajarinya karena merupakan budaya lama",
      "B. menyimpan semua karya di museum saja",
      "C. membuat karya seni bertema motif Dayak",
      "D. mengganti seluruh motif Dayak dengan motif luar negeri",
    ],
    answer: 2,
    difficulty: "🟡 Sedang",
    explanation:
      "Membuat karya dengan motif Dayak merupakan salah satu cara generasi muda ikut melestarikan budaya.",
    points: 10,
  },
  {
    q: "Seorang siswa membuat desain tas dengan motif Dayak, kemudian menjelaskan makna motif tersebut melalui media sosial secara positif. Tindakan tersebut merupakan contoh ....",
    options: [
      "A. menghilangkan budaya",
      "B. melestarikan budaya",
      "C. mengubah budaya",
      "D. menolak budaya",
    ],
    answer: 1,
    difficulty: "🟡 Sedang",
    explanation:
      "Membuat karya dan memperkenalkan maknanya melalui media sosial secara positif membantu budaya tetap dikenal.",
    points: 10,
  },
  {
    q: "Kesimpulan yang paling tepat mengenai motif Dayak adalah ....",
    options: [
      "A. motif Dayak hanya berfungsi sebagai hiasan",
      "B. motif Dayak hanya digunakan pada pakaian adat",
      "C. motif Dayak merupakan gambar tanpa makna tertentu",
      "D. motif Dayak merupakan bagian dari identitas budaya yang memiliki makna dan perlu dilestarikan",
    ],
    answer: 3,
    difficulty: "🔴 Sulit",
    explanation:
      "Motif Dayak bukan hanya gambar atau hiasan, tetapi mengandung nilai kehidupan dan menjadi bagian dari identitas budaya Kalimantan.",
    points: 10,
  },
];

// ==========================================
// DATA ULAR DAN TANGGA
// ==========================================
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

// ==========================================
// GAME STATE MANAGEMENT
// ==========================================
let questionBank = [...defaultQuestions];

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
// EFEK SUARA INTERAKTIF (WEB AUDIO API)
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
  } catch (e) {
    console.error("Audio playback error:", e);
  }
}

window.onload = function () {
  loadDarkModeSetting();
  checkSavedGame();
  renderCrudList();
  document.body.addEventListener("click", () => initAudioContext(), {
    once: true,
  });
};

// ==========================================
// STORAGE PERSISTENCE
// ==========================================
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

// ==========================================
// KOORDINAT GRID PAPAN
// ==========================================
function getTileCoordinates(tileNumber) {
  if (tileNumber <= 0) return { x: -8, y: 92 };
  if (tileNumber > 100) tileNumber = 100;

  const zeroIndexed = tileNumber - 1;
  const row = Math.floor(zeroIndexed / 10);
  let col = zeroIndexed % 10;

  if (row % 2 === 1) {
    col = 9 - col;
  }

  const x = col * 10 + 2.5;
  const y = (9 - row) * 10 + 2.5;
  return { x, y };
}

// ==========================================
// KONTROL TIM & INISIALISASI
// ==========================================
function adjustTeamInputs(val) {
  const count = parseInt(val);
  for (let i = 1; i <= 4; i++) {
    const group = document.getElementById(`group-p${i}`);
    group.style.display = i <= count ? "flex" : "none";
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

// ==========================================
// MEKANISME DADU & SOAL
// ==========================================
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

// ==========================================
// LOGIKA PERGERAKAN PION
// ==========================================
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

// ==========================================
// MANAJEMEN SOAL (CRUD MODE GURU)
// ==========================================
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

  renderCrudList();
  resetCrudForm();
  alert("Soal berhasil disimpan ke sesi permainan ini!");
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
    renderCrudList();
  }
}

function resetCrudForm() {
  document.getElementById("crud-form").reset();
  document.getElementById("edit-q-index").value = "-1";
}

// ==========================================
// UTILS & SETTINGS
// ==========================================
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
