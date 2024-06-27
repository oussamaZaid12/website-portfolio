// src/pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
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
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
