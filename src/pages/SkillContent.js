import React from "react";
import styled from "styled-components";
function SkillContent() {
  return (
    <div className="center" id='skills-lable' >
      <ProfileText>SKILLS</ProfileText>
      <div className="profile-box skills-content">
        <ul className="skill-box">
          <li>
            <ProfileText>HTML</ProfileText>
            <div className="item-card">
            <div className="item-box">
                <div className="item-front">
                <img
                src={process.env.PUBLIC_URL + `/images/html.png`}
                alt="html"
              ></img>
                </div>
              <div className="item-back">
              <ProfileText>85%</ProfileText>
              </div>
            </div>
            </div>
          </li>
          <li>
            <ProfileText>CSS</ProfileText>
            <div className="item-card">
            <div className="item-box">
                <div className="item-front">
                <img
                src={process.env.PUBLIC_URL + `/images/css.png`}
                alt="css"
              ></img>
                </div>
              <div className="item-back">
              <ProfileText>85%</ProfileText>
              </div>
            </div>
            </div>
          
          </li>
          <li>
            <ProfileText>JAVASCRIPT</ProfileText>
            <div className="item-card">
            <div className="item-box">
                <div className="item-front">
                <img
                src={process.env.PUBLIC_URL + `/images/javascript.png`}
                alt="javascript"
              ></img>
                </div>
              <div className="item-back">
              <ProfileText>80%</ProfileText>
              </div>
            </div>
            </div>
          
          </li>
          <li>
            <ProfileText>JQUERY</ProfileText>
            <div className="item-card">
            <div className="item-box">
                <div className="item-front">
                <img
                src={process.env.PUBLIC_URL + `/images/jquery.png`}
                alt="jquery"
              ></img>
                </div>
              <div className="item-back">
              <ProfileText>80%</ProfileText>
              </div>
            </div>
            </div>
          </li>
          <li>
            <ProfileText>REACT</ProfileText>
            <div className="item-card">
            <div className="item-box">
                <div className="item-front">
                <img
                src={process.env.PUBLIC_URL + `/images/react.png`}
                alt="react"
              ></img>
                </div>
              <div className="item-back">
              <ProfileText>75%</ProfileText>
              </div>
            </div>
            </div>
          </li>
          <li>
            <ProfileText>Styled-Components</ProfileText>
            <div className="item-card">
            <div className="item-box">
                <div className="item-front">
              <img
                src={process.env.PUBLIC_URL + `/images/styled-components.png`}
                alt="styled-components"
                ></img>
                </div>
              <div className="item-back">
              <ProfileText>75%</ProfileText>
              </div>
            </div>
            </div>
          </li>
          <li>
            <ProfileText>XD</ProfileText>
            <div className="item-card">
            <div className="item-box">
                <div className="item-front">
                <img
                src={process.env.PUBLIC_URL + `/images/xd.png`}
                alt="xd"
              ></img>
                </div>
              <div className="item-back">
              <ProfileText>80%</ProfileText>
              </div>
            </div>
            </div>
          </li>
          <li>
            <ProfileText>FIGMA</ProfileText>
            <div className="item-card">
            <div className="item-box">
                <div className="item-front">
                <img
                src={process.env.PUBLIC_URL + `/images/figma.png`}
                alt="figma"
              ></img>
                </div>
              <div className="item-back">
              <ProfileText>80%</ProfileText>
              </div>
            </div>
            </div>
          </li>
          <li>
            <ProfileText>GITHUB</ProfileText>
            <div className="item-card">
            <div className="item-box">
                <div className="item-front">
                <img
                src={process.env.PUBLIC_URL + `/images/github02.png`}
                alt="github02"
              ></img>
                </div>
              <div className="item-back">
              <ProfileText>70%</ProfileText>
              </div>
            </div>
            </div>
          </li>
          <li>
            <ProfileText>THYMELEAF</ProfileText>
            <div className="item-card">
            <div className="item-box">
                <div className="item-front">
                <img
                src={process.env.PUBLIC_URL + `/images/thymeleaf.png`}
                alt="thymeleaf"
              ></img>
                </div>
              <div className="item-back">
              <ProfileText>70%</ProfileText>
              </div>
            </div>
            </div>
          </li>
          <li>
            <ProfileText>NEXT</ProfileText>
            <div className="item-card">
            <div className="item-box">
                <div className="item-front">
                <img
                src={process.env.PUBLIC_URL + `/images/nextjs.png`}
                alt="nextjs"
              ></img>
                </div>
              <div className="item-back">
              <ProfileText>60%</ProfileText>
              </div>
            </div>
            </div>
          </li>
          <li>
            <ProfileText>VSCODE</ProfileText>
            <div className="item-card">
            <div className="item-box">
                <div className="item-front">
                <img
                src={process.env.PUBLIC_URL + `/images/vsc.png`}
                alt="vsc"
              ></img>
                </div>
              <div className="item-back">
              <ProfileText>80%</ProfileText>
              </div>
            </div>
            </div>
          </li>
          <li>
            <ProfileText>INTELLIJ</ProfileText>
            <div className="item-card">
            <div className="item-box">
                <div className="item-front">
                <img
                src={process.env.PUBLIC_URL + `/images/Intellij.png`}
                alt="Intellij"
              ></img>
                </div>
              <div className="item-back">
              <ProfileText>80%</ProfileText>
              </div>
            </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SkillContent;

const ProfileText = styled.span`
  color: #101010;
  font-size: 30px;
  display: block;
  text-align: center;
  font-weight: 500;
`;
