// import React, { ReactNode } from 'react';
// import AppWrappers from './AppWrappers';


// export default function RootLayout({ children }: { children: ReactNode }) {
//   return (
//     <html lang="en">
//       <body id={'root'} className="dark">
//         <AppWrappers>{children}</AppWrappers>
//       </body>
//     </html>
//   );
// }

'use client';
import React, { useEffect, ReactNode } from 'react';
import Modal from 'react-modal';
import AppWrappers from './AppWrappers';

export default function RootLayout({ children }: { children: ReactNode }) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      Modal.setAppElement('#root');
    }
  }, []);

  return (
    <html lang="en">
      <body id={'root'} className="dark">
        <AppWrappers>{children}</AppWrappers>
      </body>
    </html>
  );
}

