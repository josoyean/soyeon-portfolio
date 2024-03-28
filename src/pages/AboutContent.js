import React, { useEffect } from "react";
import styled from "styled-components";
import "./Content.css";
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
          <br /> 1년 6개월 차 주니어 웹 프론트엔드 개발자 입니다. 저는 항상
          새로운 기술에 대한 호기심과 열정을 가지고 학습하며, <br />
          최신 트랜드에 민감하게 반응하여 기술적으로 능숙한 개발자로 성장하고자
          합니다. <br /> 또한, 사용자 인터페이스와 경험을 개선하기 위한 창의적인
          솔루션을 찾는 것을 좋아하며,
          <br />그 과정으로 팀원들과 협력하고 배워 나가고 있습니다.
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
