"use client";

import { useState } from 'react';
import supabase from '../../src/config/supabaseClient';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { data, error } = await supabase
      .from('messages')
      .insert([{ name, email, message }]);

    if (error) {
      console.error('Error sending message:', error);
    } else {
      alert('Message sent!');
      setName('');
      setEmail('');
      setMessage('');
    }
  };

  return (
    <>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Contact</title>
      <meta name="description" content="Contact page" />
      <div id="wrap">
        <div className="content animated bounceInUp">
          <div className="container">
            <div className="sub-banner">
              <h4>Contact</h4>
              <ul className="breadcrumb">
                <li><a href="/">home</a></li>
                <li><a href="/resume">About</a></li>
                <li><a href="/portfolio">portfolio</a></li>
                <li><a href="/contact">contact</a></li>
              
              </ul>
            </div>
            <section className="defult contact">
              <ul className="row contact-info">
                <li className="col-md-4">
                  <div className="cont-info">
                    <div className="icon">
                      <i className="fa fa-home" />
                    </div>
                    <p>address: </p>
                    <p>El Ghazala Ariana 2088</p>
                    <p> BeniKhiar Nabeul 8060
                    </p>
                  </div>
                </li>
                <li className="col-md-4">
                  <div className="cont-info">
                    <div className="icon">
                      <i className="fa fa-phone" />
                    </div>
                    <p>+216 50 312 709</p>
                  </div>
                </li>
                <li className="col-md-4">
                  <div className="cont-info">
                    <div className="icon">
                      <i className="fa fa-envelope" />
                    </div>
                    <p>oussama.zaied@esprit.tn</p>
                    <p>oussamazaied04@gmail.com
                    </p>
                  </div>
                </li>
              </ul>
            </section>
            <section className="defult contact margin-bottom-30">
              <div className="contact-form">
                <div className="tittle">
                  <h4>Send me a message</h4>
                  <hr />
                </div>
                <form role="form" className="contact-form" onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-6">
                      <ul className="row">
                        <li className="col-sm-12">
                          <label>
                            <input
                              type="text"
                              className="form-control"
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                              placeholder="*NAME"
                              required
                            />
                          </label>
                        </li>
                        <li className="col-sm-12">
                          <label>
                            <input
                              type="email"
                              className="form-control"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              placeholder="*EMAIL"
                              required
                            />
                          </label>
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-6">
                      <ul className="row">
                        <li className="col-sm-12">
                          <label>
                            <textarea
                              className="form-control"
                              value={message}
                              onChange={(e) => setMessage(e.target.value)}
                              rows={5}
                              placeholder="*MESSAGE"
                              required
                            />
                          </label>
                        </li>
                        <li className="col-sm-12 no-margin">
                          <button type="submit" className="btn">
                            SEND NOW
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </form>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
