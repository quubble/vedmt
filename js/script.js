// ======================= script.js =======================
function toggle(btn) {
  btn.nextElementSibling.classList.toggle('hidden');
}

function toggleDarkMode() {
  document.body.classList.toggle('dark');
}

// Quiz Logic
const questions = [
  {q: "99 × 98", a: 9702},
  {q: "567 + 234", a: 801},
  {q: "1000 - 456", a: 544},
  {q: "144 ÷ 12", a: 12}
];

let current = 0;

function loadQuestion() {
  document.getElementById("question").innerText = questions[current].q;
}

function checkQuiz() {
  let val = document.getElementById("answer").value;
  let result = document.getElementById("result");

  if (parseInt(val) === questions[current].a) {
    result.innerText = "✅ Correct";
  } else {
    result.innerText = "❌ Wrong";
  }

  current = (current + 1) % questions.length;
  loadQuestion();
}

loadQuestion();
