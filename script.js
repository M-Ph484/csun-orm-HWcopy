/* For fun, here's minimal JS for the site so it can interact a little*/

console.log("Assignment 1 playground loaded.");

const demoImage = document.getElementById("demoImage");
const swapImageBtn = document.getElementById("swapImageBtn");
const toggleRoundBtn = document.getElementById("toggleRoundBtn");

const emailForm = document.getElementById("emailForm");
const formStatus = document.getElementById("formStatus");

// Demo: swap between two placeholder images
const imageA = "https://placehold.co/900x400/png";
const imageB = "https://placehold.co/800x300/jpg";
let showingA = true;

swapImageBtn?.addEventListener("click", () => {
  if (!demoImage) return;
  showingA = !showingA;
  demoImage.src = showingA ? imageA : imageB;
});

toggleRoundBtn?.addEventListener("click", () => {
  demoImage?.classList.toggle("round");
});


emailForm?.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!formStatus) return;

  const data = new FormData(emailForm);
  const toEmail = data.get("toEmail") || "(empty)";
  const subject = data.get("subject") || "(empty)";
  const template = data.get("template") || "(empty)";
  const frequency = data.get("frequency") || "(empty)";

  formStatus.textContent = `Draft saved (demo): To=${toEmail}, Subject=${subject}, Template=${template}, Frequency=${frequency}`;
});

emailForm?.addEventListener("reset", () => {
  if (formStatus) formStatus.textContent = "";
});