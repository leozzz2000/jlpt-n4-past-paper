const EXAMS = [
  {
    id: "2024-07",
    title: "2024 年 7 月 N4",
    pageDir: "assets/pages/2024-07",
    pageCount: 29,
    audio: { label: "2024 年 7 月 N4 聽力", src: "assets/audio/2024-07-listening.mp3" },
    answersImages: ["assets/answers/2024-07-answer-01.jpg", "assets/answers/2024-07-answer-02.jpg"],
    sections: [
      {
        id: "vocab",
        title: "文字・語彙",
        groups: [
          { label: "問題1", answers: "4332421", pages: [2] },
          { label: "問題2", answers: "21413", pages: [3] },
          { label: "問題3", answers: "22143341", pages: [3, 4] },
          { label: "問題4", answers: "4213", pages: [5, 6] },
          { label: "問題5", answers: "3124", pages: [6] }
        ]
      },
      {
        id: "grammar-reading",
        title: "文法・讀解",
        groups: [
          { label: "文法1", answers: "4333123242311", pages: [7, 8, 9] },
          { label: "文法2", answers: "1423", pages: [9] },
          { label: "文法3", answers: "2431", pages: [10, 11] },
          { label: "讀解1", answers: "321", pages: [11, 12] },
          { label: "讀解2", answers: "433", pages: [12] },
          { label: "讀解3", answers: "31", pages: [13] }
        ]
      },
      {
        id: "listening",
        title: "聽解",
        notice: "資料夾有 N4 聽力 MP3；網站暫時顯示聽解卷面圖片並可用答案判分。",
        groups: [
          { label: "聽解1", answers: "24344141", pages: [14, 15, 16] },
          { label: "聽解2", answers: "4213324", pages: [17, 18, 19] },
          { label: "聽解3", answers: "13321", pages: [20, 21] },
          { label: "聽解4", answers: "32313213", pages: [22, 23] }
        ]
      }
    ]
  },
  {
    id: "2023-07",
    title: "2023 年 7 月 N4",
    pageDir: "assets/pages/2023-07",
    pageCount: 12,
    answersImages: [
      "assets/answers/2023-07-answer-01.jpg",
      "assets/answers/2023-07-answer-02.jpg",
      "assets/answers/2023-07-answer-03.jpg",
      "assets/answers/2023-07-answer-04.jpg",
      "assets/answers/2023-07-answer-05.jpg",
      "assets/answers/2023-07-answer-06.jpg",
      "assets/answers/2023-07-answer-07.jpg",
      "assets/answers/2023-07-answer-08.jpg",
      "assets/answers/2023-07-answer-09.jpg",
      "assets/answers/2023-07-answer-10.jpg",
      "assets/answers/2023-07-answer-11.jpg",
      "assets/answers/2023-07-answer-12.jpg"
    ],
    sections: [
      {
        id: "vocab",
        title: "文字・語彙",
        groups: [
          { label: "問題1", answers: "1312243", pages: [1] },
          { label: "問題2", answers: "42413", pages: [2] },
          { label: "問題3", answers: "14342321", pages: [2, 3] },
          { label: "問題4", answers: "2431", pages: [3, 4] },
          { label: "問題5", answers: "2413", pages: [4, 5] }
        ]
      },
      {
        id: "grammar-reading",
        title: "文法・讀解",
        groups: [
          { label: "文法1", answers: "2421431143432", pages: [6, 7, 8] },
          { label: "文法2", answers: "4123", pages: [8] },
          { label: "文法3", answers: "3124", pages: [9] },
          { label: "讀解1", answers: "233", pages: [10] },
          { label: "讀解2", answers: "241", pages: [10, 11] },
          { label: "讀解3", answers: "34", pages: [11, 12] }
        ]
      },
      {
        id: "listening",
        title: "聽解",
        notice: "原資料夾標示無聽力 MP3，題紙 PDF 亦未包含聽解卷面；此部分以答案表建立練習題。",
        placeholder: true,
        groups: [
          { label: "聽解1", answers: "24342141", pages: [] },
          { label: "聽解2", answers: "4132142", pages: [] },
          { label: "聽解3", answers: "32321", pages: [] },
          { label: "聽解4", answers: "32131312", pages: [] }
        ]
      }
    ]
  },
  {
    id: "2025-07",
    title: "2025 年 7 月 N4",
    pageDir: "assets/pages/2025-07",
    pageCount: 38,
    answersImages: ["assets/answers/2025-07-answer.jpg"],
    sections: [
      {
        id: "vocab",
        title: "文字・語彙",
        groups: [
          { label: "問題1", answers: "3412231", pages: [1] },
          { label: "問題2", answers: "23421", pages: [2] },
          { label: "問題3", answers: "42132144", pages: [3, 4] },
          { label: "問題4", answers: "2333", pages: [5, 6] },
          { label: "問題5", answers: "1142", pages: [7, 8] }
        ]
      },
      {
        id: "grammar-reading",
        title: "文法・讀解",
        groups: [
          { label: "文法1", answers: "4332442121234", pages: [9, 10, 11, 12, 13] },
          { label: "文法2", answers: "3411", pages: [14, 15] },
          { label: "文法3", answers: "1423", pages: [16, 17] },
          { label: "讀解4", answers: "342", pages: [18, 19, 20] },
          { label: "讀解5", answers: "132", pages: [21, 22] },
          { label: "讀解6", answers: "12", pages: [22, 23] }
        ]
      },
      {
        id: "listening",
        title: "聽解",
        notice: "這份資料夾未見 MP3 音頻；此部分顯示聽解卷面圖片並可用答案判分。",
        groups: [
          { label: "聽解1", answers: "14312212", pages: [24, 25, 26, 27, 28] },
          { label: "聽解2", answers: "3221421", pages: [29, 30, 31, 32, 33] },
          { label: "聽解3", answers: "31212", pages: [34, 35, 36, 37] },
          { label: "聽解4", answers: "22132312", pages: [38] }
        ]
      }
    ]
  },
  {
    id: "2025-12",
    title: "2025 年 12 月 N4",
    pageDir: "assets/pages/2025-12",
    pageCount: 36,
    answersImages: ["assets/answers/2025-12-answer-1.png", "assets/answers/2025-12-answer-2.png"],
    sections: [
      {
        id: "vocab",
        title: "文字・語彙",
        groups: [
          { label: "問題1", answers: "2143132", pages: [14] },
          { label: "問題2", answers: "44321", pages: [15] },
          {
            label: "問題3",
            answers: "24122344",
            pages: [16, 17],
            note: "答案原圖此組列 7 個答案；第 20 題按題面人工補為 4（しゅうかん）。"
          },
          { label: "問題4", answers: "1314", pages: [18, 19] },
          { label: "問題5", answers: "2312", pages: [20, 21] }
        ]
      },
      {
        id: "grammar-reading",
        title: "文法・讀解",
        groups: [
          { label: "文法1", answers: "2133141424312", pages: [1, 2, 3, 4] },
          { label: "文法2", answers: "3312", pages: [5] },
          { label: "文法3", answers: "1432", pages: [6, 7] },
          { label: "讀解1", answers: "313", pages: [8, 9, 10] },
          { label: "讀解2", answers: "144", pages: [11] },
          { label: "讀解3", answers: "22", pages: [12, 13] }
        ]
      },
      {
        id: "listening",
        title: "聽解",
        notice: "這份資料夾未見 MP3 音頻；此部分顯示聽解卷面圖片並可用答案判分。",
        groups: [
          { label: "聽解1", answers: "42132341", pages: [22, 23, 24, 25, 26] },
          { label: "聽解2", answers: "4342113", pages: [27, 28, 29, 30, 31] },
          { label: "聽解3", answers: "32121", pages: [32, 33, 34, 35] },
          { label: "聽解4", answers: "23122131", pages: [36] }
        ]
      }
    ]
  },
  {
    id: "2021-07",
    title: "2021 年 7 月 N4",
    pageDir: "assets/pages/2021-07",
    pageCount: 30,
    audio: { label: "2021 年 7 月 N4 聽力", src: "assets/audio/2021-07-listening.mp3" },
    answersImages: ["assets/answers/2021-07-answer-01.jpg", "assets/answers/2021-07-answer-02.jpg"],
    sections: [
      {
        id: "vocab",
        title: "文字・語彙",
        groups: [
          { label: "問題1", answers: "2132341", pages: [2, 3] },
          { label: "問題2", answers: "24321", pages: [3, 4] },
          { label: "問題3", answers: "33214241", pages: [4, 5] },
          { label: "問題4", answers: "4134", pages: [5, 6] },
          { label: "問題5", answers: "4123", pages: [6, 7] }
        ]
      },
      {
        id: "grammar-reading",
        title: "文法・讀解",
        groups: [
          { label: "文法1", answers: "2334314421241", pages: [8, 9, 10] },
          { label: "文法2", answers: "2414", pages: [10, 11] },
          { label: "文法3", answers: "2143", pages: [11, 12] },
          { label: "讀解1", answers: "324", pages: [13, 14] },
          { label: "讀解2", answers: "314", pages: [14, 15] },
          { label: "讀解3", answers: "22", pages: [16, 17] }
        ]
      },
      {
        id: "listening",
        title: "聽解",
        notice: "資料夾有 2021 年 7 月 N4 聽力 MP3；網站暫時顯示聽解卷面圖片並可用答案判分。",
        groups: [
          { label: "聽解1", answers: "33232123", pages: [18, 19, 20, 21, 22, 23] },
          { label: "聽解2", answers: "1231324", pages: [24, 25, 26] },
          { label: "聽解3", answers: "13212", pages: [27, 28, 29] },
          { label: "聽解4", answers: "33111221", pages: [30] }
        ]
      }
    ]
  },
  {
    id: "2021-12",
    title: "2021 年 12 月 N4",
    pageDir: "assets/pages/2021-12",
    pageCount: 18,
    answersImages: ["assets/answers/2021-12-answer-01.jpg", "assets/answers/2021-12-answer-02.jpg"],
    sections: [
      {
        id: "vocab",
        title: "文字・語彙",
        groups: [
          { label: "問題1", answers: "3442321", pages: [8] },
          { label: "問題2", answers: "43123", pages: [8, 9] },
          { label: "問題3", answers: "12134324", pages: [9, 10] },
          { label: "問題4", answers: "2421", pages: [10, 11] },
          { label: "問題5", answers: "4131", pages: [11] }
        ]
      },
      {
        id: "grammar-reading",
        title: "文法・讀解",
        groups: [
          { label: "文法1", answers: "3242424331141", pages: [12, 13, 14] },
          { label: "文法2", answers: "3231", pages: [14] },
          { label: "文法3", answers: "2134", pages: [15] },
          { label: "讀解1", answers: "241", pages: [15, 16] },
          { label: "讀解2", answers: "143", pages: [16, 17] },
          { label: "讀解3", answers: "13", pages: [17, 18] }
        ]
      },
      {
        id: "listening",
        title: "聽解",
        groups: [
          { label: "聽解1", answers: "24113322", pages: [1, 2, 3] },
          { label: "聽解2", answers: "4132124", pages: [3, 4] },
          { label: "聽解3", answers: "23113", pages: [5, 6] },
          { label: "聽解4", answers: "12323213", pages: [7] }
        ]
      }
    ]
  }
];

const SORTED_EXAMS = [...EXAMS].sort((a, b) => b.id.localeCompare(a.id));

const els = {
  examSelect: document.getElementById("examSelect"),
  sectionSelect: document.getElementById("sectionSelect"),
  questionGrid: document.getElementById("questionGrid"),
  questionMeta: document.getElementById("questionMeta"),
  questionTitle: document.getElementById("questionTitle"),
  choiceRow: document.getElementById("choiceRow"),
  answerStatus: document.getElementById("answerStatus"),
  pageViewer: document.getElementById("pageViewer"),
  pageLabel: document.getElementById("pageLabel"),
  scoreText: document.getElementById("scoreText"),
  scoreRate: document.getElementById("scoreRate"),
  prevBtn: document.getElementById("prevBtn"),
  nextBtn: document.getElementById("nextBtn"),
  revealBtn: document.getElementById("revealBtn"),
  answersImageBtn: document.getElementById("answersImageBtn"),
  clearProgressBtn: document.getElementById("clearProgressBtn"),
  notice: document.getElementById("notice"),
  audioPanel: document.getElementById("audioPanel"),
  zoomOutBtn: document.getElementById("zoomOutBtn"),
  zoomInBtn: document.getElementById("zoomInBtn"),
  zoomText: document.getElementById("zoomText"),
  answersDialog: document.getElementById("answersDialog"),
  answersImages: document.getElementById("answersImages"),
  closeDialogBtn: document.getElementById("closeDialogBtn")
};

let state = {
  examId: SORTED_EXAMS[0].id,
  sectionId: SORTED_EXAMS[0].sections[0].id,
  questionIndex: 0,
  zoom: 1,
  progress: loadProgress()
};

function buildQuestions(section) {
  const questions = [];
  let answerNumber = 1;
  section.groups.forEach((group) => {
    [...group.answers].forEach((answer, idx) => {
      const groupNumber = idx + 1;
      const pdfNumber = answerNumber;
      answerNumber += 1;
      questions.push({
        id: `${section.id}:${group.label}:${groupNumber}`,
        sectionId: section.id,
        sectionTitle: section.title,
        groupLabel: group.label,
        number: groupNumber,
        pdfNumber,
        label: `第 ${pdfNumber} 題`,
        detailLabel: `${group.label}-${groupNumber}`,
        answer,
        pages: group.pages,
        placeholder: group.placeholder || section.placeholder || false,
        note: group.note || section.notice || ""
      });
    });
  });
  return questions;
}

function currentExam() {
  return EXAMS.find((exam) => exam.id === state.examId);
}

function currentSection() {
  return currentExam().sections.find((section) => section.id === state.sectionId);
}

function currentQuestions() {
  return buildQuestions(currentSection());
}

function currentQuestion() {
  return currentQuestions()[state.questionIndex];
}

function progressKey(question = currentQuestion()) {
  return `${state.examId}:${question.id}`;
}

function loadProgress() {
  try {
    return JSON.parse(localStorage.getItem("n4-2025-review-progress") || "{}");
  } catch {
    return {};
  }
}

function saveProgress() {
  localStorage.setItem("n4-2025-review-progress", JSON.stringify(state.progress));
}

function pagePath(exam, page) {
  return `${exam.pageDir}/page-${String(page).padStart(2, "0")}.jpg`;
}

function canGrade(question) {
  return ["1", "2", "3", "4"].includes(question.answer);
}

function init() {
  SORTED_EXAMS.forEach((exam) => {
    const option = document.createElement("option");
    option.value = exam.id;
    option.textContent = exam.title;
    els.examSelect.append(option);
  });

  els.examSelect.value = state.examId;
  renderSectionSelect();
  bindEvents();
  renderAll();
}

function bindEvents() {
  els.examSelect.addEventListener("change", () => {
    state.examId = els.examSelect.value;
    state.sectionId = currentExam().sections[0].id;
    state.questionIndex = 0;
    renderSectionSelect();
    renderAll();
  });

  els.sectionSelect.addEventListener("change", () => {
    state.sectionId = els.sectionSelect.value;
    state.questionIndex = 0;
    renderAll();
  });

  els.prevBtn.addEventListener("click", () => moveQuestion(-1));
  els.nextBtn.addEventListener("click", () => moveQuestion(1));
  els.revealBtn.addEventListener("click", revealAnswer);
  els.answersImageBtn.addEventListener("click", openAnswersDialog);
  els.closeDialogBtn.addEventListener("click", () => els.answersDialog.close());

  els.zoomOutBtn.addEventListener("click", () => {
    state.zoom = Math.max(0.65, Math.round((state.zoom - 0.1) * 10) / 10);
    renderPages();
  });

  els.zoomInBtn.addEventListener("click", () => {
    state.zoom = Math.min(1.8, Math.round((state.zoom + 0.1) * 10) / 10);
    renderPages();
  });

  els.clearProgressBtn.addEventListener("click", () => {
    const prefix = `${state.examId}:`;
    Object.keys(state.progress)
      .filter((key) => key.startsWith(prefix))
      .forEach((key) => delete state.progress[key]);
    saveProgress();
    renderAll();
  });

  window.addEventListener("keydown", (event) => {
    if (event.target instanceof HTMLSelectElement || event.target instanceof HTMLButtonElement) return;
    if (event.key >= "1" && event.key <= "4") submitAnswer(event.key);
    if (event.key === "ArrowLeft") moveQuestion(-1);
    if (event.key === "ArrowRight") moveQuestion(1);
  });
}

function renderSectionSelect() {
  els.sectionSelect.replaceChildren();
  currentExam().sections.forEach((section) => {
    const option = document.createElement("option");
    option.value = section.id;
    option.textContent = `${section.title} (${buildQuestions(section).length} 題)`;
    els.sectionSelect.append(option);
  });
  els.sectionSelect.value = state.sectionId;
}

function renderAll() {
  const questions = currentQuestions();
  if (state.questionIndex >= questions.length) state.questionIndex = 0;
  renderQuestionGrid();
  renderCurrentQuestion();
  renderAudioPanel();
  renderScore();
}

function renderQuestionGrid() {
  const questions = currentQuestions();
  els.questionGrid.replaceChildren();
  questions.forEach((question, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "q-chip";
    button.textContent = question.pdfNumber;
    button.title = `${question.label} / ${question.detailLabel}`;

    const progress = state.progress[`${state.examId}:${question.id}`];
    if (index === state.questionIndex) button.classList.add("active");
    if (progress?.choice && canGrade(question)) {
      button.classList.add(progress.choice === question.answer ? "correct" : "wrong");
    }

    button.addEventListener("click", () => {
      state.questionIndex = index;
      renderAll();
    });

    els.questionGrid.append(button);
  });
}

function renderCurrentQuestion() {
  const question = currentQuestion();
  const progress = state.progress[progressKey(question)];
  els.questionMeta.textContent = `${currentExam().title} / ${question.sectionTitle} / ${question.groupLabel}`;
  els.questionTitle.textContent = `${question.label}（${question.detailLabel}）`;

  if (question.note) {
    els.notice.hidden = false;
    els.notice.textContent = question.note;
  } else {
    els.notice.hidden = true;
    els.notice.textContent = "";
  }

  els.choiceRow.replaceChildren();
  ["1", "2", "3", "4"].forEach((choice) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "choice-button";
    button.textContent = choice;
    button.setAttribute("aria-label", `選 ${choice}`);
    if (progress?.choice === choice) {
      button.classList.add("selected");
      if (canGrade(question)) button.classList.add(choice === question.answer ? "correct" : "wrong");
    }
    button.addEventListener("click", () => submitAnswer(choice));
    els.choiceRow.append(button);
  });

  renderAnswerStatus();
  renderPages();
}

function renderAudioPanel() {
  const exam = currentExam();
  const section = currentSection();
  const audio = section.id === "listening" ? exam.audio : null;
  els.audioPanel.replaceChildren();

  if (!audio) {
    els.audioPanel.hidden = true;
    return;
  }

  const label = document.createElement("div");
  label.className = "audio-label";
  label.textContent = audio.label;

  const player = document.createElement("audio");
  player.controls = true;
  player.preload = "metadata";
  player.src = audio.src;

  els.audioPanel.append(label, player);
  els.audioPanel.hidden = false;
}

function renderAnswerStatus(forceReveal = false) {
  const question = currentQuestion();
  const progress = state.progress[progressKey(question)];
  els.answerStatus.className = "answer-status neutral";

  if (!progress?.choice && !forceReveal) {
    els.answerStatus.textContent = canGrade(question) ? "未作答" : "未作答；原答案未提供";
    return;
  }

  if (!canGrade(question)) {
    els.answerStatus.textContent = progress?.choice
      ? `已記錄：你揀 ${progress.choice}；原答案未提供，未能判分`
      : "原答案未提供，未能顯示正確答案";
    return;
  }

  if (forceReveal && !progress?.choice) {
    els.answerStatus.textContent = `正確答案：${question.answer}`;
    return;
  }

  if (progress.choice === question.answer) {
    els.answerStatus.classList.add("correct");
    els.answerStatus.textContent = `正確：你揀 ${progress.choice}`;
  } else {
    els.answerStatus.classList.add("wrong");
    els.answerStatus.textContent = `錯：你揀 ${progress.choice}，正確係 ${question.answer}`;
  }
}

function renderPages() {
  const exam = currentExam();
  const question = currentQuestion();
  els.pageViewer.replaceChildren();
  els.zoomText.textContent = `${Math.round(state.zoom * 100)}%`;
  els.pageViewer.style.setProperty("--page-width", `${Math.round(920 * state.zoom)}px`);
  const hasPages = question.pages && question.pages.length > 0;
  els.pageLabel.textContent = hasPages ? `頁面：${question.pages.join(", ")}` : "頁面：答案練習模式";

  if (!hasPages || question.placeholder) {
    const placeholder = document.createElement("div");
    placeholder.className = "placeholder-page";
    const heading = document.createElement("h3");
    heading.textContent = `${currentExam().title} / ${question.label}`;
    const copy = document.createElement("p");
    copy.textContent = hasPages
      ? "此題使用掃描頁作題面，並可用 1-4 選項作答。"
      : "這部分沒有原題掃描頁；已按答案表建立 1-4 選項練習。請配合答案原圖或聽力原文複習。";
    const meta = document.createElement("p");
    meta.className = "placeholder-meta";
    meta.textContent = canGrade(question) ? "可自動判分" : "原答案未提供，會記錄選擇但不判對錯";
    placeholder.append(heading, copy, meta);
    els.pageViewer.append(placeholder);
    if (!hasPages) return;
  }

  question.pages.forEach((page) => {
    const image = document.createElement("img");
    image.className = "paper-page";
    image.src = pagePath(exam, page);
    image.alt = `${exam.title} 第 ${page} 頁`;
    image.loading = "lazy";
    els.pageViewer.append(image);
  });
}

function renderScore() {
  const exam = currentExam();
  const questions = exam.sections.flatMap(buildQuestions);
  let answered = 0;
  let correct = 0;
  questions.forEach((question) => {
    const progress = state.progress[`${exam.id}:${question.id}`];
    if (progress?.choice) {
      answered += 1;
      if (canGrade(question) && progress.choice === question.answer) correct += 1;
    }
  });

  const rate = answered ? Math.round((correct / answered) * 100) : 0;
  els.scoreText.textContent = `${correct} / ${answered}`;
  els.scoreRate.textContent = `${rate}%`;
}

function submitAnswer(choice) {
  const question = currentQuestion();
  state.progress[progressKey(question)] = { choice, at: new Date().toISOString() };
  saveProgress();
  renderAll();
}

function revealAnswer() {
  renderAnswerStatus(true);
  const question = currentQuestion();
  if (!canGrade(question)) {
    renderAnswerStatus(true);
    return;
  }
  [...els.choiceRow.children].forEach((button) => {
    button.classList.toggle("correct", button.textContent === question.answer);
  });
}

function moveQuestion(delta) {
  const questions = currentQuestions();
  state.questionIndex = Math.min(questions.length - 1, Math.max(0, state.questionIndex + delta));
  renderAll();
}

function openAnswersDialog() {
  const exam = currentExam();
  els.answersImages.replaceChildren();
  exam.answersImages.forEach((src, index) => {
    const image = document.createElement("img");
    image.src = src;
    image.alt = `${exam.title} 答案原圖 ${index + 1}`;
    els.answersImages.append(image);
  });
  els.answersDialog.showModal();
}

init();
