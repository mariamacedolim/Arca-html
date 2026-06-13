// ── ARCA — script principal ──

// Exemplo: toggle do menu lateral no mobile
document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.querySelector('.topbar__menu-btn');
  const sidebar = document.querySelector('.sidebar');

  if (menuBtn && sidebar) {
    menuBtn.addEventListener('click', () => {
      sidebar.classList.toggle('sidebar--aberta');
    });
  }
});
