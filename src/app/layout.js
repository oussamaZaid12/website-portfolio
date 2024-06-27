// src/app/layout.js
export const metadata = {
  title: 'oussama',
  description: 'Vcard HTML5 Template',
  keywords: 'HTML5,CSS3,HTML,Template,Multi-Purpose,M_Adnan,Corporate Theme,Vcard HTML5,Vcard HTML5 - Multi Purpose HTML5 Template',
  author: 'M_Adnan',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
