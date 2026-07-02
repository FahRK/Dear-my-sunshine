// เปลี่ยนรหัสตรงนี้ได้เลย
// ตอนนี้รหัสคือ jia หรือ sunshine หรือ เจีย
const passwords = ["jia", "sunshine", "เจีย"];

let current = 1;
const passwordInput = document.getElementById("passwordInput");

passwordInput.addEventListener("keydown", function(event) {
  if (event.key === "Enter") checkPassword();
});

function checkPassword() {
  const input = passwordInput.value.trim().toLowerCase();
  const errorText = document.getElementById("errorText");
  const lockScreen = document.getElementById("lockScreen");

  if (passwords.includes(input)) {
    lockScreen.classList.remove("active");
    document.getElementById("loadingScreen").classList.add("active");
    startLoading();
  } else {
    errorText.textContent = "อุ๊บส์... คิดอีกนิดนะ คำตอบนี้น้องน่าจะรู้นะ 🤍";
    lockScreen.classList.add("shake");
    setTimeout(() => lockScreen.classList.remove("shake"), 400);
  }
}

function startLoading() {
  const progress = document.getElementById("progress");
  const loadingText = document.getElementById("loadingText");
  const texts = [
    "Decrypting memories...",
    "Finding sunshine...",
    "Unlocking secret feelings...",
    "Almost there..."
  ];

  let value = 0;
  let textIndex = 0;

  const interval = setInterval(() => {
    value += 10;
    progress.style.width = value + "%";

    if (value % 30 === 0 && textIndex < texts.length) {
      loadingText.textContent = texts[textIndex];
      textIndex++;
    }

    if (value >= 100) {
      clearInterval(interval);
      setTimeout(() => {
        document.getElementById("loadingScreen").classList.remove("active");
        document.getElementById("screen1").classList.add("active");
      }, 550);
    }
  }, 180);
}

function nextScreen() {
  document.getElementById(`screen${current}`).classList.remove("active");
  current++;
  document.getElementById(`screen${current}`).classList.add("active");
}

function sayYes() {
  document.getElementById("screen5").classList.remove("active");
  document.getElementById("screen6").classList.add("active");
  burst();
}

const maybeBtn = document.getElementById("maybeBtn");
maybeBtn.addEventListener("mouseover", moveButton);
maybeBtn.addEventListener("click", moveButton);

function moveButton() {
  const x = Math.random() * 180 - 90;
  const y = Math.random() * 160 - 80;
  maybeBtn.style.transform = `translate(${x}px, ${y}px)`;
  maybeBtn.textContent = randomText();
}

function randomText() {
  const texts = ["แน่ใจหรอ 🥺", "กดเป็นเถอะ", "คิดอีกทีนะ", "พี่เขินแล้ว", "ปุ่มนี้ดื้อ", "หนีทำไมก่อน"];
  return texts[Math.floor(Math.random() * texts.length)];
}

function createFloating() {
  const item = document.createElement("div");
  item.classList.add("float-item");
  item.innerHTML = ["🤍", "❤️", "🌻", "✨"][Math.floor(Math.random() * 4)];
  item.style.left = Math.random() * 100 + "vw";
  item.style.animationDuration = Math.random() * 3 + 3 + "s";
  document.body.appendChild(item);
  setTimeout(() => item.remove(), 6000);
}

setInterval(createFloating, 520);

function burst() {
  for (let i = 0; i < 55; i++) {
    setTimeout(createFloating, i * 60);
  }
}
