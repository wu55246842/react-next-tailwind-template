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



// import React, { ReactNode } from 'react';
// import AppWrappers from './AppWrappers';
// import { Figtree } from "next/font/google";
// import { SessionProvider } from "next-auth/react";


// export default function RootLayout({ children }: { children: ReactNode }) {
//   return (
//     <html lang="en">
//       <body id={'root'} className="dark">
//         <SessionProvider>
//           <AppWrappers>{children}</AppWrappers>
// 				</SessionProvider>
        
//       </body>
//     </html>
//   );
// }