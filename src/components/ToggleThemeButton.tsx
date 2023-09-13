"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import { Moon, Sun } from "lucide-react";
import { ButtonIcon } from "./ButtonIcon";

export function ToggleThemeButton() {
  const { theme, setTheme } = useTheme();

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  function handleToggleTheme() {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  return (
    <ButtonIcon
      suppressHydrationWarning
      icon={isClient && theme === "dark" ? Moon : Sun}
      onClick={handleToggleTheme}
    />
  );
}
