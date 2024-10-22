"use client"

import { SessionProvider } from 'next-auth/react';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SessionProvider>
          <header>Mon header ici</header>
          {children}
          <footer>Mon footer ici</footer>
        </SessionProvider>
      </body>
    </html>
  );
}
