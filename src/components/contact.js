import * as React from "react"
import { useState, useEffect, useRef } from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image"
import emailjs from '@emailjs/browser'

import "./contact.css"

const Contact = ({ contactRef }) => {
  const form = useRef();


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2ylylxi",
        "template_br5j77t",
        form.current,
        "locDfq9NIfIEroC8f"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          form.current.reset();
          alert("Your message has been sent!")
        },
        (error) => {
          console.log(error.text);
          form.current.reset();
        }
        
      );
  };

  return (

    <div ref={contactRef} className="ContactSection">
      <div className="Contact">
        <h1>
          Contact
        </h1>
        <p> Send me a message whether you have any question or want to collaborate with me on a project</p>
      </div>

      <div className="container">
        <form ref={form} onSubmit={sendEmail}>
          <label>Your Name</label>
          <input type="text" id="fname" name="user_name" placeholder="Your name.." />

          <label>Your Email</label>
          <input type="text" id="lname" name="user_email" placeholder="Your last name.." />

          <label>Subject</label>
          <textarea id="subject" name="subject" placeholder="Write something.."></textarea>

          <input type="submit" value="Submit" />
        </form>
      </div>




    </div>



  )
};

export default Contact;