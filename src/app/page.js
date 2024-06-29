"use client";

import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../public/css/style.css';
import Script from 'next/script';


export default function Home() {
  return (
    <>
    <div id="wrap">
      {/* Menu directement intégré dans la page */}
       <div className="sub-banner">
              <h4>home</h4>
              <ul className="breadcrumb">
                <li><Link href="/">home</Link></li>
                <li><Link href="/resume">About</Link></li>
                <li><Link href="/portfolio">portfolio</Link></li>
                <li><Link href="/contact">contact</Link></li>
              
              </ul>
            </div>
     
      <div className="profile animated bounceInUp">
        <div className="container">
          <div className="profile-in">
            <div className="text-center">
              <div className="avatar">
                <Image src="/images/avatar.png" alt="Avatar" width={250} height={280} />
              </div>
            </div>
            <h1>
              Hello, I am <strong>Oussama Zaied</strong> Designer and{' '}
              <span>software engineer</span>
            </h1>
            <hr />
            <p>
            With notable experience as a developer and designer, I have a passion for clean and elegant styling. 
            I have worked on various web and application development projects, where I have demonstrated my 
            creativity and rigor. My journey has allowed me to master design and development tools while acquiring
             a good understanding of project management methodologies like Agile. I enjoy engaging in diverse 
             projects, ranging from 2D game design to online therapy applications. 
             My organizational skills and initiative enable me to successfully complete the projects entrusted to
              me.
            </p>
          </div>
        </div>
      </div>

    </div>
    <Script src="/js/jquery-1.11.0.min.js" strategy="beforeInteractive" />
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/waypoints/2.0.5/waypoints.min.js"/>
      <Script src="/js/bootstrap.min.js" strategy="afterInteractive" />
      <Script src="/js/counter.js" strategy="lazyOnload" />
      <Script src="/js/jquery.prettyPhoto.js" strategy="lazyOnload" />
      <Script src="/js/main.js" strategy="lazyOnload" />
    </>
  );
}
