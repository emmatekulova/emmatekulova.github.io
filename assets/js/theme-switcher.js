document.addEventListener('DOMContentLoaded', function() {
    const themeSwitcher = document.getElementById('theme-switcher');
    const themeStylesheet = document.getElementById('theme-stylesheet');
  
    themeSwitcher.addEventListener('click', function() {
      if (themeStylesheet.getAttribute('href') === '{{ "/assets/main.css" | relative_url }}') {
        themeStylesheet.setAttribute('href', '{{ "/assets/css/dark-theme.css" | relative_url }}');
      } else {
        themeStylesheet.setAttribute('href', '{{ "/assets/main.css" | relative_url }}');
      }
    });
  });