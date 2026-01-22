// This file controls the buttons.
// Each button calls the backend API and prints the result on screen.

const out = document.getElementById("out");

// If your backend runs locally, keep this.
const API_BASE = "http://localhost:3000";

function show(obj, type = 'default') {
  out.className = `response-box ${type}`;
  
  if (typeof obj === "string") {
    out.innerHTML = `<div class="response-content">${obj}</div>`;
  } else if (type === 'vibe') {
    // Special handling for vibe - display emoji on top of message
    const filtered = Object.entries(obj).filter(([key]) => key !== 'mood');
    const emoji = filtered.find(([key]) => key === 'emoji')?.[1] || '';
    const message = filtered.find(([key]) => key === 'message')?.[1] || '';
    out.innerHTML = `<div class="response-content"><div class="vibe-emoji">${emoji}</div><div class="vibe-message">${message}</div></div>`;
  } else if (type === 'smash') {
    // Special handling for smash counter
    const smashes = obj.smashes || 0;
    const message = obj.message || '';
    out.innerHTML = `
      <div class="response-content">
        <div class="smash-icon">💥</div>
        <div class="smash-message">${message}</div>
        <div class="smash-counter">
          <div class="counter-label">Total Smashes</div>
          <div class="counter-value">${smashes}</div>
        </div>
      </div>`;
  } else {
    // Display just the values without JSON structure, skip 'mood' key
    const values = Object.entries(obj)
      .filter(([key]) => key !== 'mood')
      .map(([, value]) => value)
      .join(' ');
    out.innerHTML = `<div class="response-content">${values}</div>`;
  }
}

async function getJSON(url) {
  const res = await fetch(url);
  return res.json();
}

document.getElementById("btnFortune").addEventListener("click", async () => {
  const data = await getJSON(`${API_BASE}/api/fortune`);
  show(data, 'fortune');
});

document.getElementById("btnJoke").addEventListener("click", async () => {
  const data = await getJSON(`${API_BASE}/api/joke`);
  show(data, 'joke');
});

document.querySelectorAll(".btnMood").forEach(btn => {
  btn.addEventListener("click", async () => {
    const mood = btn.dataset.mood;
    const data = await getJSON(`${API_BASE}/api/vibe?mood=${mood}`);
    show(data, 'vibe');
  });
});

document.getElementById("btnSmash").addEventListener("click", async () => {
  const res = await fetch(`${API_BASE}/api/smash`, { method: "POST" });
  const data = await res.json();
  show({ message: "SMASH registered 💥", ...data }, 'smash');
});

document.getElementById("btnSecret").addEventListener("click", async () => {
  const data = await getJSON(`${API_BASE}/api/secret?code=411L`);
  show(data, 'secret');
});