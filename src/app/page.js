"use client";

import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './globals.css';

export default function Home() {
  return (
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
                <Image src="/images/avatar.png" alt="Avatar" width={150} height={150} />
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
      <script src="/js/jquery-1.11.0.min.js"></script>
      <script src="/js/bootstrap.min.js"></script>
      <script src="/js/counter.js"></script>
      <script src="/js/jquery.prettyPhoto.js"></script>
      <script src="/js/main.js"></script>
    </div>
  );
}
