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
      <head>
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans:400,300italic,400italic,600,600italic,700,700italic,800,800italic,300&display=optional"
          rel="stylesheet"
          type="text/css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css"
        />
        <link href="/css/animate.css" rel="stylesheet" type="text/css" />
        <link href="/css/bootstrap.min.css" rel="stylesheet" type="text/css" />
        <link href="/css/font-awesome.min.css" rel="stylesheet" type="text/css" />
        <link href="/css/main.css" rel="stylesheet" type="text/css" />
        <link href="/css/style.css" rel="stylesheet" type="text/css" />
        <link href="/css/responsive.css" rel="stylesheet" type="text/css" />
      </head>
      <body>{children}</body>
    </html>
  );
}
