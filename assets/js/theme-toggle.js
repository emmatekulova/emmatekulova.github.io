document.addEventListener('DOMContentLoaded', function() {
  const toggleButton = document.createElement('button');
  toggleButton.className = 'theme-toggle';
  toggleButton.setAttribute('aria-label', 'Toggle dark mode');
  toggleButton.setAttribute('title', 'Toggle dark mode');
  
  // Don't apply theme toggle to music page
  if (document.body.classList.contains('music-page')) {
    return;
  }
  
  // Get saved theme from localStorage or use default
  const currentTheme = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', currentTheme);
  toggleButton.setAttribute('data-theme', currentTheme);
  
  // Add toggle button to the site header
  const siteHeader = document.querySelector('.site-header .wrapper');
  if (siteHeader) {
    siteHeader.appendChild(toggleButton);
  }
  
  // Toggle theme function
  function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    toggleButton.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  }
  
  // Add click event for the toggle
  toggleButton.addEventListener('click', toggleTheme);
  
  // Check for system preference for first-time visitors
  if (!localStorage.getItem('theme')) {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (prefersDark) {
      document.documentElement.setAttribute('data-theme', 'dark');
      toggleButton.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    }
  }
});