import Head from 'next/head';
import '../../public/css/bootstrap.min.css';
import '../../public/css/font-awesome.min.css';
import '../../public/css/animate.css';
import '../../public/css/main.css';
import '../../public/css/style.css';
import '../../public/css/responsive.css';

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
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content={metadata.author} />
        <meta name="viewport" content={`${viewport.width}, initial-scale=${viewport.initialScale}`} />
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans:400,300italic,400italic,600,600italic,700,700italic,800,800italic,300&display=optional"
          rel="stylesheet"
          type="text/css"
        />
        <link
          rel="stylesheet"
          href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css"
        />
      </Head>
      <body>{children}</body>
    </html>
  );
}
