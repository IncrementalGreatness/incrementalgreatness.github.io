function toggleDarkMode() {
  const body = document.body;
  body.classList.toggle('dark-mode');

  // Save preference
  if (body.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  console.log('Dark mode script loaded');

  // Check preference on load
  const theme = localStorage.getItem('theme');
  if (theme === 'dark') {
    document.body.classList.add('dark-mode');
  }

  // Attach event listener
  const toggleBtn = document.getElementById('theme-toggle');
  if (toggleBtn) {
    console.log('Toggle button found');
    toggleBtn.addEventListener('click', (e) => {
      e.preventDefault();
      toggleDarkMode();
    });
  } else {
    console.error('Toggle button not found');
  }
});
