"use client";

import { ThemeProvider } from "next-themes";

export default function Providers({ children }) {
  return (
    <ThemeProvider defaultTheme="system" attribute="class">
      <div className="text-dark dark:text-white dark:bg-dark transition-colors duration-300">
        {children}
      </div>
    </ThemeProvider>
  );
}
