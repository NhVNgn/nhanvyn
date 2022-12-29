import * as React from "react"
import { useState, useEffect } from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image"

import "./contact.css"

const Contact = ({contactRef}) => {


  return (

    <div ref={contactRef} className="ContactSection">
      <div className="Contact">
        <h1>
          Contact
        </h1>
      </div>

      <div className="container">
        <form>
          <label>Your Name</label>
          <input type="text" id="fname" name="firstname" placeholder="Your name.." />

          <label>Your Email</label>
          <input type="text" id="lname" name="lastname" placeholder="Your last name.." />

          <label>Subject</label>
          <textarea id="subject" name="subject" placeholder="Write something.."></textarea>

          <input type="submit" value="Submit" />
        </form>
      </div>




    </div>



  )
};

export default Contact;