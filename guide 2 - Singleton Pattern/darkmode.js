class DarkMode {
      constructor() {
        if (DarkMode.instance) {
          return DarkMode.instance; // return the existing instance
        }
        this.THEME_KEY = "theme-preference";
        this.root = document.documentElement;
        this.initTheme();
        DarkMode.instance = this; // store singleton
      }

      initTheme() {
        const stored = localStorage.getItem(this.THEME_KEY);
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        this.theme = stored || (prefersDark ? "dark" : "light");
        this.applyTheme();
      }

      toggleTheme() {
        this.theme = this.theme === "dark" ? "light" : "dark";
        this.applyTheme();
        localStorage.setItem(this.THEME_KEY, this.theme);
      }

      applyTheme() {
        if (this.theme === "dark") {
          this.root.setAttribute("data-theme", "dark");
        } else {
          this.root.removeAttribute("data-theme");
        }
      }
    }

    // ✅ Use Singleton
    const darkMode = new DarkMode();

    document.getElementById("toggleBtn").addEventListener("click", () => {
      darkMode.toggleTheme();
    });