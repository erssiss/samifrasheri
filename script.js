// Butoni për t'u kthyer lart
const scrollTopBtn = document.getElementById("scrollTopBtn");

window.onscroll = function () {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
};

scrollTopBtn.onclick = function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
};
// Pyetjet
const questions = [
  {
    question: "Kur ka lindur Sami Frashëri?",
    options: ["1835", "1850", "1878"],
    correct: 1
  },
  {
    question: "Cila është një nga veprat më të njohura të tij?",
    options: [
      "Historia e Skënderbeut",
      "Shqipëria ç’ka qenë, ç’është dhe ç’do të bëhet",
      "Kronikat Osmane"
    ],
    correct: 1
  },
  {
    question: "Në cilin fshat lindi Sami Frashëri?",
    options: ["Tepelenë", "Gjirokastër", "Frashër"],
    correct: 2
  }
];

// Krijo pyetjet
const container = document.getElementById("quiz-container");

questions.forEach((q, index) => {
  const qDiv = document.createElement("div");
  qDiv.classList.add("quiz-question");
  qDiv.innerHTML = `<p>${index + 1}. ${q.question}</p>`;

  q.options.forEach((opt, optIndex) => {
    const optId = `q${index}_opt${optIndex}`;
    const optHTML = `
      <label class="quiz-option" for="${optId}">
        <input type="radio" name="q${index}" id="${optId}" value="${optIndex}">
        ${opt}
      </label>
    `;
    qDiv.innerHTML += optHTML;
  });

  container.appendChild(qDiv);
});

// Vlerësimi
document.getElementById("submitQuiz").onclick = () => {
  let correct = 0;

  questions.forEach((q, index) => {
    const selected = document.querySelector(`input[name="q${index}"]:checked`);
    if (selected && parseInt(selected.value) === q.correct) {
      correct++;
    }
  });

  const resultDiv = document.getElementById("quizResult");
  if (correct === questions.length) {
    resultDiv.style.color = "#2e8b57";
    resultDiv.textContent = `🎉 Shkëlqyeshëm! ${correct}/${questions.length} përgjigje të sakta.`;
  } else {
    resultDiv.style.color = "#c0392b";
    resultDiv.textContent = `🤔 Ke ${correct} nga ${questions.length} përgjigje të sakta. Provo sërish!`;
  }
};
