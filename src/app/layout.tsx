"use client";

import React, { ReactNode } from 'react';
import AppWrappers from './AppWrappers';
import { Figtree } from "next/font/google";
import { SessionProvider } from "next-auth/react";
import { RecoilRoot } from "recoil";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body id={'root'} className="dark">
        <SessionProvider>
          <AppWrappers>{children}</AppWrappers>
				</SessionProvider>
        
      </body>
    </html>
  );
}





// import { Figtree } from "next/font/google";
// import { SessionProvider } from "next-auth/react";
// import React from "react";
// import { RecoilRoot } from "recoil";

// const font = Figtree({ subsets: ["latin"] });

// export default function RootLayout({ children }: { children: React.ReactNode }): JSX.Element {
// 	return (
// 		<html lang="en">
// 			<body className={font.className}>
// 				<SessionProvider>
// 					<RecoilRoot>{children}</RecoilRoot>
// 				</SessionProvider>
// 			</body>
// 		</html>
// 	);
// }

