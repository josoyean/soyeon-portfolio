import emailjs from "@emailjs/browser";
import React, { useRef } from "react";
import styled from "styled-components";
import "./Content.css";
function ContactContent() {
  const form = useRef();

  const sendEmail = (e) => {
    let nameInput = document.getElementsByName("from_name")[0];
    let emailInput = document.getElementsByName("user_email")[0];
    let messageInput = document.getElementsByName("message")[0];

    e.preventDefault();
    if (nameInput.value.trim().length === 0) {
      return;
    }
    if (emailInput.value.length === 0) {
      return;
    }
    if (messageInput.value.length === 0) {
      return;
    }

    emailjs
      .sendForm(
        "service_5gwmn79",
        "template_0igs2mo",
        form.current,
        "mmeACUXvWB5rePUKe"
      )
      .then(
        (result) => {
          nameInput.value = "";
          emailInput.value = "";
          messageInput.value = "";
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="center" id="contact-lable">
      <ProfileText>CONTACT</ProfileText>
      <div className="profile-box contact-box">
        <div className="contact-left">
          <img
            src={process.env.PUBLIC_URL + `/images/contact.png`}
            alt="contact"
            className="contact"
          ></img>
        </div>
        <div className="contact-right">
          <form ref={form} onSubmit={sendEmail}>
            <label>
              <ProfileText>Name</ProfileText>
            </label>
            <input type="text" name="from_name" />
            <label>
              <ProfileText>Email</ProfileText>
            </label>
            <input type="email" name="user_email" />
            <label>
              <ProfileText>Message</ProfileText>
            </label>
            <textarea name="message" />
            <input type="submit" value="SEND" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactContent;

const ProfileText = styled.span`
  color: #101010;
  font-size: 30px;
  display: block;
  text-align: center;
  font-weight: 500;
`;
