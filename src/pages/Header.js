import React, { useState } from "react";
import styled from "styled-components";
import "./Header.css";
function Header() {
  const [lineWidth, setLineWidth] = useState(0);
  const [isMenu, setIsMenu] = useState(false);
  window.addEventListener("scroll", function (event) {
    let scroll = this.window.scrollY;
    var percent =
      (scroll / (this.document.body.offsetHeight - this.window.innerHeight)) *
      100;
    setLineWidth(percent);
  });

  const onContentClick = (lable, e) => {
    let lableTag = document.querySelector(lable);

    setTimeout(function () {
      var PageLocation = lableTag.offsetTop - lableTag.scrollTop;
      window.scrollTo({ top: PageLocation - 60, behavior: "smooth" });
    }, 70);
  };

  const menuClick = (e) => {
    e.preventDefault();
    setIsMenu(!isMenu);
  };
  return (
    <header>
      <div className="center">
        <img
          src={process.env.PUBLIC_URL + `/images/josoyeon.png`}
          alt="logo"
          className="logo"
        ></img>
        <ul>
          <ListItem onClick={(e) => onContentClick("#about-lable", e)}>
            {"<About />"}
          </ListItem>
          <ListItem onClick={(e) => onContentClick("#skills-lable", e)}>
            {"<Skills />"}
          </ListItem>
          <ListItem onClick={(e) => onContentClick("#experience-lable", e)}>
            {"<Experience />"}
          </ListItem>
          <ListItem onClick={(e) => onContentClick("#project-lable", e)}>
            {"<Projects />"}
          </ListItem>
          <ListItem onClick={(e) => onContentClick("#contact-lable", e)}>
            {"<Contact />"}
          </ListItem>
        </ul>
        <img
          src={process.env.PUBLIC_URL + `/images/hamburger.png`}
          alt="hamburger"
          className="hamburger"
          onClick={(e) => menuClick(e)}
        ></img>
      </div>
      <div className="line" style={{ width: lineWidth + "%" }}></div>
      {isMenu ? (
        <div className={`menu-box ${isMenu && "action"}`}>
          <img
            src={process.env.PUBLIC_URL + `/images/close.png`}
            alt="close"
            className="close"
            onClick={(e) => menuClick(e)}
          ></img>
          <div className="list-box">
            <span
              className="About"
              onClick={(e) => {
                onContentClick("#about-lable", e);
                menuClick(e);
              }}
            >
              About
            </span>
            <span
              className="Skills"
              onClick={(e) => {
                onContentClick("#skills-lable", e);
                menuClick(e);
              }}
            >
              Skills
            </span>
            <span
              className="Experience"
              onClick={(e) => {
                onContentClick("#experience-lable", e);
                menuClick(e);
              }}
            >
              Experience
            </span>
            <span
              className="Projects"
              onClick={(e) => {
                onContentClick("#project-lable", e);
                menuClick(e);
              }}
            >
              Projects
            </span>
            <span
              className="Contact"
              onClick={(e) => {
                onContentClick("#contact-lable", e);
                menuClick(e);
              }}
            >
              Contact
            </span>
          </div>
        </div>
      ) : null}
    </header>
  );
}

export default Header;

const ListItem = styled.li`
  color: #101010;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
`;
