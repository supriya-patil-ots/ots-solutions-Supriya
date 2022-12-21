import React from "react";
import "./contact.css";

const ContactUs = () => {
  return (
    <div className="contact">
      <div className="heading">
        <div className="mb-5">
          <h3 className="heading">
            <h2>Contact-Us</h2>
          </h3>
        </div>

        <form className="contact-form">
          <label className="label" htmlFor="fname">
            First Name
          </label>
          <input
            className="input-text"
            type="text"
            id="fname"
            name="firstname"
            placeholder="Your name.."
          />

          <label className="label" htmlFor="lname">
            Last Name
          </label>
          <input
            className="input-text"
            type="text"
            id="lname"
            name="lastname"
            placeholder="Your last name.."
          />

          <label className="label" htmlFor="country">
            Country
          </label>
          <select className="input-text" id="country" name="country">
            <option value="australia">India</option>
            <option value="canada">Canada</option>
            <option value="usa">USA</option>
          </select>

          <label className="label" htmlFor="subject">
            Subject
          </label>
          <textarea
            className="input-text"
            id="subject"
            name="subject"
            placeholder="Write something.."
          ></textarea>
          <div className="btn">
            <input className="submit-btn" type="submit" value="SUBMIT" />
          </div>
        </form>
      </div>
    </div>
  );
};
export default ContactUs;
