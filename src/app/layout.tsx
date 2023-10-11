import React, { ReactNode } from 'react';
import AppWrappers from './AppWrappers';


export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body id={'root'} className="dark">
        <AppWrappers>{children}</AppWrappers>
      </body>
    </html>
  );
}

