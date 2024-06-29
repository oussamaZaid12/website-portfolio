"use client";

import { useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Script from 'next/script';
import Link from 'next/link';

export default function Resume() {
  useEffect(() => {
    
    const script = document.createElement("script");
    script.src = "/js/menu.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return(
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans:400,300italic,400italic,600,600italic,700,700italic,800,800italic,300"
          rel="stylesheet"
          type="text/css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css"
        />
     
      </Head>

      <div id="wrap">
        

        <div className="cd-bouncy-nav-modal">
         
          <a href="#" className="cd-close">
            Close modal
          </a>
        </div>

        <div className="content animated bounceInUp">
          <div className="container">
            <div className="sub-banner">
              <h4>About me</h4>
              <ul className="breadcrumb">
                <li><a href="/">home</a></li>
                <li><a href="/resume">About</a></li>
                <li><a href="/portfolio">portfolio</a></li>
                <li><a href="/contact">contact</a></li>
              
              </ul>
            </div>

            <section className="defult margin-bottom-30">
              <div className="row">
                <div className="col-md-6">
                  <div className="small-profile">
                    <div className="avatar-small">
                      <Image className="img-circle" src="/images/avatar-small.png" alt="Avatar" width={100} height={100} />
                    </div>
                    <h5>
                      Hello, I am Oussama Zaied Designer and software engineer
                    </h5>
                    <p>
                    With notable experience as a <strong className="primary-color">developer and designer</strong>, I have a passion for clean and elegant styling. I have worked on various web and application development projects, where I have demonstrated my creativity and rigor.
                    </p>
                  </div>
                </div>

                <div className="col-md-6">
                  <ul className="main-info">
                    <li><span>name</span> Oussama Zaied </li>
                    <li><span>date of birth</span> june 06, 2001 </li>
                    <li><span>e-mail</span> oussama.zaied@esprit.tn</li>
                    <li><span>address</span> El Ghazala Ariana 2088</li>
                    <li><span>phone</span> +216 50 312 709</li>
                    <li><span>linkedin</span> https://www.linkedin.com/in/oussamazaied-78005b24a/</li>
                    <li><span>git</span> https://github.com/oussamaZaid12</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="defult education margin-bottom-30">
              <div className="tittle">
                <h4>Education</h4>
                <hr />
              </div>
              <ul>
                <li>
                  <h6 className="no-margin">Bachelor of mathematics</h6>
              
                </li>
               
              </ul>
              <ul>
                <li>
                  <h6 className="no-margin">Ecole Supérieure Privée d&apos;Ingénierie et de Technologies - ESPRIT</h6>
              
                  <p>
                  conduit de nombreux projets dans l&apos;enseignement supérieur tunisien, et dans l&apos;enseignement supérieur technique en particulier
                  </p>
                </li>
               
              </ul>
            </section>

            <section className="defult education margin-bottom-30">
              <div className="tittle">
                <h4>Languages</h4>
                <hr />
              </div>
              <div className="progress-bars style-2">
                <div className="bar">
                  <p>French </p>
                  <span className="progress-bar-tooltip caret-down">90%</span>
                  <div className="progress" data-percent="95%">
                    <div className="progress-bar"> </div>
                  </div>
                </div>
                
                <div className="bar">
                  <p>English</p>
                  <span className="progress-bar-tooltip caret-down">80%</span>
                  <div className="progress" data-percent="80%">
                    <div className="progress-bar progress-bar-primary"> </div>
                  </div>
                </div>
               
              </div>
            </section>
            <section className="defult education margin-bottom-30">
              <div className="tittle">
                <h4>My Professional Skills</h4>
                <hr />
              </div>
              <div className="progress-bars style-2">
                <div className="bar">
                
                  <p> <strong className="primary-color">Programming languages :</strong></p>
                  <p>Java / php / C / C++ / HTML / CSS / JavaScriptt / python</p>
                </div>
                <div className="bar">
               
                  <p> <strong className="primary-color">Tools / IDE : </strong></p>
                  <p>IntelliJ IDEA / Visual studio Code / Git / jupyter</p>
                </div>
                <div className="bar">
                 
                  <p> <strong className="primary-color">Database: </strong></p>
                  <p>MySQL/ FireBase / Oracle / Supabase</p>
                </div>
                <div className="bar">
                 
                 <p> <strong className="primary-color">Concept and methodologies: </strong></p>
                 <p>UML, MVC, Agile(Scrum)</p>
               </div>
               <div className="bar">
                 
                 <p> <strong className="primary-color">Operating systems: </strong></p>
                 <p>Windows / Linux</p>
               </div>
               <div className="bar">
                 
                 <p> <strong className="primary-color"> Graphic design:
                 </strong></p>
                 <p>Adobe XD</p>
                 <p> Photoshop/Illustrator</p>
                 <p> Premiere Pro/After Effects</p>
               </div>
              

               
              </div>
            </section>

            <section className="defult services margin-bottom-30">
              <div className="tittle">
                <h4>Services</h4>
                <hr />
              </div>
              <li className="col-md-4">
                  <i className="fa fa-meh-o"></i>
                  <hr />
                  <h4>Coding</h4>
                </li>
              <ul className="row">
                <li className="col-md-4">
                  <i className="fa fa-cloud"></i>
                  <hr />
                  <h4>Design</h4>
                </li>
              
                <li className="col-md-4">
                  <i className="fa fa-desktop"></i>
                  <hr />
                  <h4>apps
                  </h4>
                </li>
                <li className="col-md-4">
                  <i className="fa fa-text-width"></i>
                  <hr />
                  <h4>Planing</h4>
                </li>
          
              </ul>
            </section>

            <section className="defult education margin-bottom-30">
              <div className="tittle">
                <h4>Work Experience</h4>
                <hr />
              </div>

              <ul>
              <li>
                  <h6 className="no-margin">Stagiaire chez NEURODATA</h6>
                  <span className="time">
                    <i className="fa fa-calendar primary-color"></i> Juin 2022 - août 2022
                  </span>
                  <p>
                  -Conception et développement de la platform Neuroparcer
                  </p>
                  <p>
                  -Responsable de la conception complète de l&apos;identité visuelle de la startup, incluant la création
                            de tous les designs et des vidéos promotionnelles.
                  </p>
                </li>
                <li>
                  <h6 className="no-margin">Jeu 2D -SDL</h6>
                </li>
                <li>
                  <h6 className="no-margin">application descktop Agence de voyage -QT / Oracle</h6>
                </li>
                <li>
                  <h6 className="no-margin">Application web pour communication CreArtCom -Php / PhpMyAdmin</h6>
                </li>
                <li>
                  <h6 className="no-margin">Application web de therapie pour consultations en lignes -Symfony/ PhpMyAdmin</h6>
                </li>
                <li>
                  <h6 className="no-margin">Application desctop Therapie -JavaFX / PhpMyAdmin / OpenCV</h6>
                </li>
                <li>
                  <h6 className="no-margin">application mobile Therapie -FlutterFlow / FireBase</h6>
                </li>
                <li>
                  <h6 className="no-margin">application web portfolio -nextjs / react / JavaScript</h6>
                </li>
              </ul>
              
            </section>
            <section className="defult education margin-bottom-30">
              <div className="tittle">
                <h4>Certifications</h4>
                <hr />
              </div>

              <ul>
             
                <li>
                  <h6 className="no-margin">fundamentals of Deep Learning(NVIDIA)</h6>
                </li>
                <li>
                  <h6 className="no-margin">Data Parallelism: How to Train Deep Learning Models on Multiple GPUs(NVIDIA)</h6>
                </li>
                <li>
                  <h6 className="no-margin">Building AI-Based Cybersecurity Pipelines(NVIDIA)</h6>
                </li>
                <li>
                  <h6 className="no-margin">Graphic Design(Alison)</h6>
                </li>
                <li>
                  <h6 className="no-margin">photoshop (Tosa)</h6>
                </li>
      
              </ul>
              
            </section>
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
