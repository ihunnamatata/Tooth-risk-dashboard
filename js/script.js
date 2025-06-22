document.addEventListener("DOMContentLoaded", () => {
  const arch = document.querySelector(".arch-container");

  const tooltip = document.createElement("div");
  tooltip.className = "tooltip-box";
  arch.appendChild(tooltip);

  document.querySelectorAll(".tooth").forEach(tooth => {
    tooth.addEventListener("mouseenter", (e) => {
      const risk = tooth.getAttribute("data-risk");
      const expl = tooth.getAttribute("data-explanation");
      tooltip.innerHTML = `
        <strong>Tooth #${tooth.dataset.id}</strong><br>
        Risk Score: ${risk}%<br>
        ${expl}
      `;
      tooltip.style.display = "block";
    });

    tooth.addEventListener("mousemove", (e) => {
      tooltip.style.top = `${e.offsetY + 20}px`;
      tooltip.style.left = `${e.offsetX + 20}px`;
    });

    tooth.addEventListener("mouseleave", () => {
      tooltip.style.display = "none";
    });

    tooth.addEventListener("click", () => {
      alert(`Tooth #${tooth.dataset.id}\n\nRisk Score: ${tooth.dataset.risk}%\n${tooth.dataset.explanation}`);
    });
  });
});
const gptBtn = document.getElementById("gpt-explain-btn");
const exportBtn = document.getElementById("export-json-btn");
const gptOutput = document.getElementById("gpt-output");

let selectedTooth = null;
const allToothData = [];

// When a tooth is clicked, store selection and show GPT suggestion
document.querySelectorAll('.tooth').forEach(tooth => {
  tooth.addEventListener('click', () => {
    selectedTooth = {
      id: tooth.dataset.id,
      risk: tooth.dataset.risk,
      explanation: tooth.dataset.explanation
    };
    gptOutput.style.display = "block";
    gptOutput.innerText = `Tooth ${selectedTooth.id}: ${selectedTooth.explanation}`;
  });

  // Store tooth data globally for export
  allToothData.push({
    id: tooth.dataset.id,
    risk: parseInt(tooth.dataset.risk),
    explanation: tooth.dataset.explanation
  });
});

// GPT-style button just re-shows the most recent
gptBtn.addEventListener('click', () => {
  if (selectedTooth) {
    gptOutput.style.display = "block";
    gptOutput.innerText = `Tooth ${selectedTooth.id}: ${selectedTooth.explanation}`;
  } else {
    gptOutput.style.display = "block";
    gptOutput.innerText = "Please select a tooth first to see AI-generated risk explanation.";
  }
});

// Export JSON logic
exportBtn.addEventListener('click', () => {
  const filename = "tooth_risk_report.json";
  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(allToothData, null, 2));
  const downloadAnchor = document.createElement('a');
  downloadAnchor.setAttribute("href", dataStr);
  downloadAnchor.setAttribute("download", filename);
  document.body.appendChild(downloadAnchor);
  downloadAnchor.click();
  document.body.removeChild(downloadAnchor);
});