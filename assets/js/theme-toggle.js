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
  
  // Create SVG icons for light/dark mode
  const moonIcon = `<img src="/assets/icons/moon-stars.svg" alt="Dark mode" class="theme-icon">`;
  const sunIcon = `<img src="/assets/icons/sun.svg" alt="Light mode" class="theme-icon">`;
  
  // Set initial icon based on theme
  toggleButton.innerHTML = currentTheme === 'dark' ? sunIcon : moonIcon;
  
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
    
    // Update the icon based on the new theme
    toggleButton.innerHTML = newTheme === 'dark' ? sunIcon : moonIcon;
    
    localStorage.setItem('theme', newTheme);
  }
  
  // Add click event for the toggle
  toggleButton.addEventListener('click', toggleTheme);
  
  // Check for system preference for first-time visitors
  if (!localStorage.getItem('theme')) {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (prefersDark) {
      document.documentElement.setAttribute('data-theme', 'dark');
      toggleButton.innerHTML = sunIcon;
      localStorage.setItem('theme', 'dark');
    }
  }
});