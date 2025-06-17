import { create } from "zustand";

export const useThemeStore = create((set) => ({
  theme: localStorage.getItem("LangGo-theme") || "coffee",
  setTheme: (theme) => {
    localStorage.setItem("LangGo-theme", theme);
    set({ theme });
  },
}));