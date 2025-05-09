// Has to be in the head tag, otherwise a flicker effect will occur.

function toggleTheme() {
  const isDark = document.documentElement.classList.contains("theme-dark");
  setTheme(isDark ? "light" : "dark");
}

let setTheme = (theme) => {
  transTheme();
  document.documentElement.classList.remove("theme-light", "theme-dark");
  document.documentElement.classList.add(`theme-${theme}`);
  localStorage.setItem("theme", theme);

  // Updates the background of medium-zoom overlay.
  if (typeof medium_zoom !== 'undefined') {
    medium_zoom.update({
      background: getComputedStyle(document.documentElement)
        .getPropertyValue('--global-bg-color') + 'ee',  // + 'ee' for trasparency.
    })
  }
};

let transTheme = () => {
  document.documentElement.classList.add("transition");
  window.setTimeout(() => {
    document.documentElement.classList.remove("transition");
  }, 500)
}

let initTheme = (theme) => {
  if (theme == null) {
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    theme = prefersDark ? 'dark' : 'light';
  }
  setTheme(theme);
}

// Initialize from localStorage
initTheme(localStorage.getItem("theme"));

// Event listener
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("light-toggle");
  if (toggle) {
    toggle.addEventListener("click", (e) => {
      e.preventDefault(); // Prevent page jump
      toggleTheme();
    });
  }
});
