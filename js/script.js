const teeth = document.querySelectorAll('.tooth');

teeth.forEach(tooth => {
  const toothId = tooth.getAttribute('data-id');

  // Hover to show tooltip
  tooth.addEventListener('mouseenter', (e) => {
    const score = tooth.getAttribute('data-risk');
    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip';
    tooltip.innerText = `Tooth ${toothId} Risk: ${score}%`;
    document.body.appendChild(tooltip);

    const { x, y } = e.target.getBoundingClientRect();
    tooltip.style.top = `${y - 35}px`;
    tooltip.style.left = `${x + 10}px`;

    tooth._tooltip = tooltip;
  });

  tooth.addEventListener('mouseleave', () => {
    if (tooth._tooltip) {
      document.body.removeChild(tooth._tooltip);
      delete tooth._tooltip;
    }
  });

  // Click to show GPT-style explanation
  tooth.addEventListener('click', () => {
    const explanation = tooth.getAttribute('data-explanation');
    alert(`Tooth ${toothId}\n\n${explanation}`);
  });
});
