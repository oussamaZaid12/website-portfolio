"use client";

import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function Portfolio() {
  return (
    <>
    <>
  <meta charSet="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Vcard HTML</title>
  <meta
    name="keywords"
    content="HTML5,CSS3,HTML,Template,Multi-Purpose,M_Adnan,Corporate Theme,Vcard HTML5,Vcard HTML5 - Multi Purpose HTML5 Template"
  />
  <meta name="description" content="Vcard HTML5 Template" />
  <meta name="author" content="M_Adnan" />
  {/* FONTS ONLINE */}
  <link
    href="https://fonts.googleapis.com/css?family=Open+Sans:400,300italic,400italic,600,600italic,700,700italic,800,800italic,300"
    rel="stylesheet"
    type="text/css"
  />
  {/*MAIN STYLE*/}
  <link
    rel="stylesheet"
    type="text/css"
    href="../../../code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css"
  />
  <link href="css/animate.css" rel="stylesheet" type="text/css" />
  <link href="css/bootstrap.min.css" rel="stylesheet" type="text/css" />
  <link href="css/font-awesome.min.css" rel="stylesheet" type="text/css" />
  <link href="css/main.css" rel="stylesheet" type="text/css" />
  <link href="css/style.css" rel="stylesheet" type="text/css" />
  <link href="css/responsive.css" rel="stylesheet" type="text/css" />
  {/* HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries */}
  {/* WARNING: Respond.js doesn't work if you view the page via file:// */}
  {/*[if lt IE 9]>
    
    
<![endif]*/}
  {/* Page Wrap */}
  <div id="wrap">
    
   
   
    {/* Resume */}
    <div className="content animated bounceInUp">
      <div className="container">
        {/* Sub Banner */}
        <div className="sub-banner">
          <h4>portfolio</h4>
          <ul className="breadcrumb">
            <li>
              <a href="#.">home</a>
            </li>
            <li>portfolio</li>
          </ul>
        </div>
        {/* Portfolio */}
        <section className="portfolio-single">
          {" "}
          <Image className="img-responsive" src="images/img-13.jpg" alt="" />
          <div className="port-detail">
            <div className="port-bar">
              <h5 className="pull-left">Architecture Design</h5>
              <div className="fitee">
                {" "}
                <i className="fa fa-th" />{" "}
              </div>
              <a className="nxt" href="#.">
                <i className="fa fa-angle-right" />
              </a>{" "}
              <a className="prv" href="#.">
                <i className="fa fa-angle-left" />
              </a>{" "}
            </div>
            <div align="left" className="row margin-top-40">
              <div className="col-md-6">
                <p>
                  <span className="primary-color">
                    <strong>This is Photoshop's version </strong>
                  </span>{" "}
                  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet.
                  Aenean sollicitudin, lorem quis bibendum auctor, nisi elit
                  consequat ipsum, nec sagittis sem. <br />
                  <br />
                  Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt
                  auctor a ornare odio sed non.This is Photoshop's version of
                  Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet.{" "}
                </p>
              </div>
              <div className="col-md-6">
                <ul className="row">
                  <li className="col-sm-6">
                    <p>Photoshop</p>
                  </li>
                  <li className="col-sm-6">
                    <p>Print Work</p>
                  </li>
                  <li className="col-sm-6">
                    <p>HTML5/CSS3 Coding</p>
                  </li>
                  <li className="col-sm-6">
                    <p>Server Managing</p>
                  </li>
                  <li className="col-sm-6">
                    <p>Pluging Development</p>
                  </li>
                  <li className="col-sm-6">
                    <p>jQuery</p>
                  </li>
                  <li className="col-sm-6">
                    <p>Android Apps</p>
                  </li>
                  <li className="col-sm-6">
                    <p>Video Editing</p>
                  </li>
                </ul>
              </div>
            </div>
            <hr />
            <a href="#" className="btn">
              Launch Project
            </a>
          </div>
        </section>
      </div>
    </div>
  </div>
</>


<script src="./js/jquery-1.11.0.min.js"async></script> 
<script src="./js/bootstrap.min.js"async></script> 
<script src="./js/counter.js"async></script> 
<script src="./js/jquery.prettyPhoto.js"async></script> 
<script src="./js/main.js"async></script>
    </>
  );
}
