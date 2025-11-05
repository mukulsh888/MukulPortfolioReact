import React, { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import cn from "@/lib/utils"


export default function ThemeToggle() {
  const [isDarkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    } else {
      localStorage.setItem("theme", "light");
      setDarkMode(false);
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setDarkMode(true);
    }
  };
  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "fixed hidden md:block cursor-pointer top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300", "focus:outline-hidden"
      )}
    >
      {isDarkMode ? (
        <Sun className="h-6 w-6 text-yellow-300" />
      ) : (
        <Moon className="w-6 h-6 text-blue-900" />
      )}
    </button>
  );
}
