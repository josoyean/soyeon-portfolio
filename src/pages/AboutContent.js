import React, { useEffect } from "react";
import styled from "styled-components";

function AboutContent() {
  useEffect(() => {
    const content =
      "안녕하세요. & 주니어 Front-end Development & 조소연 포트폴리오 페이지 입니다. :)";
    const text = document.querySelector(".text");
    let i = 0;

    function typing() {
      let txt = content[i++];
      text.innerHTML += txt === "&" ? "<br/>" : txt;
      if (i > content.length) {
        text.textContent = "";
        i = 0;
      }
    }
    setInterval(typing, 150);
  }, []);
  return (
    <div className="center" id="about-lable">
      <div className="about-box">
        <div className="text-box">
          <span className="text"></span> <span className="cursor">|</span>
        </div>
        <span className="introduce">
          안녕하세요.
          <br /> 기술적으로 뛰어난 개발이더라도 <br /> 사용자가 만족하지
          않는다면 훌륭한 개발이 아니라고 생각합니다. <br /> 처음 웹퍼블리셔로
          시작하여 지금의 웹 프론트엔드 개발까지, <br /> 사용자에게 가장
          친화적인 개발자로 발돋움하고 있습니다.
        </span>
      </div>
      <div className="profile-box">
        <ProfileText>ABOUT</ProfileText>
        <div className="img-inform">
          <img
            src={process.env.PUBLIC_URL + `/images/profile.png`}
            alt="profile"
            className="profile"
          ></img>
          <ul>
            <li>
              <img
                src={process.env.PUBLIC_URL + `/images/person.png`}
                alt="person"
                className="item-icon"
              ></img>
              <ProfileText>조소연</ProfileText>
            </li>
            <li>
              <img
                src={process.env.PUBLIC_URL + `/images/birth.png`}
                alt="birth"
                className="item-icon"
              ></img>
              <ProfileText>1996.10.16</ProfileText>
            </li>
            <li>
              {" "}
              <img
                src={process.env.PUBLIC_URL + `/images/house.png`}
                alt="house"
                className="item-icon"
              ></img>{" "}
              <ProfileText>서울특별시 광진구</ProfileText>
            </li>
            <li>
              {" "}
              <img
                src={process.env.PUBLIC_URL + `/images/email.png`}
                alt="email"
                className="item-icon"
              ></img>{" "}
              <ProfileText>dlfjswhtnals@naver.com</ProfileText>
            </li>
            <li>
              {" "}
              <img
                src={process.env.PUBLIC_URL + `/images/graduation.png`}
                alt="graduation"
                className="item-icon"
              ></img>{" "}
              <ProfileText>한국산업기술대학교 게임공학과 졸업</ProfileText>
            </li>
            <li className="pointer">
              {" "}
              <img
                src={process.env.PUBLIC_URL + `/images/graduation.png`}
                alt="graduation"
                className="item-icon"
              ></img>{" "}
              <a
                href={`https://drive.google.com/file/d/1D6V6iyM8egW9oR3uF0EH7evDBaZkeN-x/view?usp=drive_link`}
                target="_blank"
              >
                {" "}
                <ProfileText>이젠아카데미 - 디자인 웹퍼블리셔</ProfileText>
              </a>
            </li>
            <li className="pointer">
              {" "}
              <img
                src={process.env.PUBLIC_URL + `/images/graduation.png`}
                alt="graduation"
                className="item-icon"
              ></img>{" "}
              <a
                href={`https://drive.google.com/file/d/1q-WJi75Boqg2-QeBHphAPp6w3-aRE3TZ/view?usp=drive_link`}
                target="_blank"
              >
                {" "}
                <ProfileText>
                  패스트캠퍼스 - React & Redux로 시작하는 웹 프로그래밍
                </ProfileText>
              </a>
            </li>
            <li className="pointer">
              {" "}
              <img
                src={process.env.PUBLIC_URL + `/images/github.png`}
                alt="github"
                className="item-icon"
              ></img>{" "}
              <a href="https://github.com/josoyean" target="_blank">
                <ProfileText>GITHUB</ProfileText>
              </a>
            </li>
            <li className="pointer">
              {" "}
              <img
                src={process.env.PUBLIC_URL + `/images/blogspot.png`}
                alt="blogspot"
                className="item-icon"
              ></img>{" "}
              <a href="https://saltsoyeon.tistory.com/" target="_blank">
                <ProfileText>TISTORY</ProfileText>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AboutContent;

const ProfileText = styled.span`
  color: #101010;
  font-size: 30px;
  display: block;
  text-align: center;
  font-weight: 500;
`;
