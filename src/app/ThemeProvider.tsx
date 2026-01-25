'use client';

import * as React from 'react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider
      attribute="class"        // adds 'class="dark"' on <html>
      defaultTheme="light"
      enableSystem={true}
      storageKey="surya-transport-theme"
    >
      {children}
    </NextThemesProvider>
  );
}
