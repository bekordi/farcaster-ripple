const app = document.querySelector('.app');

app.addEventListener('click', (e) => {
  const ripple = document.createElement('span');
  ripple.className = 'ripple';
  const rect = app.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height);
  const x = e.clientX - rect.left - size / 2;
  const y = e.clientY - rect.top - size / 2;
  ripple.style.width = ripple.style.height = `${size}px`;
  ripple.style.left = `${x}px`;
  ripple.style.top = `${y}px`;

  app.appendChild(ripple);

  // animasyon
  ripple.animate(
    [
      { transform: 'scale(0)', opacity: 0.7 },
      { transform: 'scale(1)', opacity: 0 }
    ],
    { duration: 600, easing: 'ease-out' }
  );

  // 0.6sn sonra ripple'i sil
  setTimeout(() => ripple.remove(), 600);
});
