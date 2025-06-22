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