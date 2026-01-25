'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { HiMoon, HiSun } from 'react-icons/hi';

const ThemeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <button
        type="button"
        className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-white/70 text-gray-800 dark:border-gray-700 dark:bg-gray-900/70 dark:text-gray-100"
        aria-label="Toggle theme"
      >
        <HiMoon className="h-4 w-4" />
      </button>
    );
  }

  const isDark = resolvedTheme === 'dark';

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="inline-flex h-9 w-9 z-[999] items-center justify-center rounded-full border border-gray-200 bg-white/70 text-gray-800 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-900/70 dark:text-gray-100 dark:hover:bg-gray-800 transition-colors"
      aria-label="Toggle theme"
    >
      {isDark ? <HiSun className="h-4 w-4" /> : <HiMoon className="h-4 w-4" />}
    </button>
  );
};

export default ThemeToggle;
