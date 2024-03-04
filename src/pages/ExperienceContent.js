import React, { useState } from "react";
import styled from "styled-components";
function ExperienceContent() {
  const experienceList = [
    {
      id: "011",
      LinkName: "project01",
      SkillText: ["html", "css", "js", "jquery", "thymeleaf"],
      Position: "Web Publisher",
      Title: "Tari World",
      ItemDate: "2022.08 ~ 2023.08",
      MyWork: ["페이지 제작 & 유지 보수", "페이지 연결, 애니메이션"],
      pageLink: "https://tari.world/page/index",
      CodeBtn: false,
    },
  ];
  const [isProfileSelect, setIsProfileSelect] = useState(false);
  const handleClick = (idx) => {
    const newArr = Array(experienceList.length).fill(false);
    if (isProfileSelect[idx] === false) {
      newArr[idx] = true;
    }

    setIsProfileSelect(newArr);
  };

  const DemoLink = (link, e) => {
    e.preventDefault();
    window.open(link, "_blank");
  };

  return (
    <div className="center" id="experience-lable">
      <ProfileText>
        EXPERIENCE <em>총 1년 6개월</em>
      </ProfileText>
      <div className="profile-box experience-box">
        <div className="item-box">
          <span className="date">
            2022.07 ~ 2023.12<em>1년 6개월</em>
          </span>
          <span className="name">너울 소프트</span>
          <span className="position">웹 퍼블리셔 & 프론트엔드</span>
          <div className="list-box">
            <div className="list">
              <span className="title">Tari Market </span>
              <span className="date">2023.11 ~ 2023.12</span>
              <ul>
                <li>웹 퍼블리싱 - 90%</li>
                <li>
                  index페이지에서 1/3 제외한 나머지 부분, 다른 페이지 전부 제작
                </li>
              </ul>
              <ul>
                <li>웹 프론트엔드 - 60%</li>
                <li> 마이 프로필 수정, 저장</li>
                <li>제품 수정, 추가</li>
                <li>관련 데이터 없을시 다른 페이지로 이동</li>
                <li>자신 sns 주소 정보 연동, 삭제</li>
                <li>wish 리스트 정보 데이터 추가, 삭제 요청</li>
              </ul>
              <span className="skill"> #html #css #js #jquery #thymeleaf</span>
            </div>

            <div className="list">
              <span className="title">
                K-POP SEOUL{" "}
                <button
                  onClick={(e) => {
                    DemoLink(
                      "https://korea.seoulmusicawards.kr/page/index?lang=ko&platform=k&mode=pc",
                      e
                    );
                  }}
                >
                  Page Open
                </button>
              </span>
              <span className="date">2023.10 ~ 2023.12</span>
              <ul>
                <li>웹 퍼블리싱 - 95%</li>
                <li>페이지 제작</li>
              </ul>
              <ul>
                <li>웹 프론트엔드 - 70%</li>
                <li> 실시간 투표 누적 순위, 오늘의 투표 순위 작업</li>
                <li>스타 팔로우, 언팔 작업</li>
                <li>설정한 시간과 현재 시간 비교 후 공지 팝업 오픈</li>
                <li>설정 페이지 언어 변경 </li>
                <li>무료 충전 광고 페이지 연동</li>
                <li>로딩 페이지 추가 해서 사용자 혼란 최소화</li>
              </ul>
              <span className="skill"> #html #css #js #jquery #thymeleaf</span>
            </div>
            <div className="list">
              <span className="title">
                SeoulMusicaWards{" "}
                <button
                  onClick={(e) => {
                    DemoLink("https://seoulmusicawards.com/page/index", e);
                  }}
                >
                  Page Open
                </button>
              </span>
              <span className="date">2023.10 ~ 2023.11</span>
              <ul>
                <li>웹 퍼블리싱 - 95%</li>
                <li>페이지 제작</li>
                <li>사용자 기기 확인 후 pc버전 모바일 버전 제작 - 반응형 X</li>
              </ul>

              <ul>
                <li>웹 프론트엔드 - 90%</li>
                <li>실시간 투표 누적 순위</li>
                <li>언어 변경</li>
                <li>역대 수상자 데이터 JSON 데이터 제작 후 실행</li>
                <li>투표 어플 순위 토대로 웹 페이지 제작</li>
                <li>투표 결과 상 종류에 따라 데이터 분류 후 제작</li>
              </ul>
              <span className="skill"> #html #css #js #jquery #thymeleaf</span>
            </div>
            <div className="list">
              <span className="title">
                Tari World{" "}
                <button
                  onClick={(e) => {
                    DemoLink("https://tari.world/page/index", e);
                  }}
                >
                  Page Open
                </button>
              </span>
              <span className="date">2022.08 ~ 2023.08</span>
              <ul>
                <li>웹 퍼블리싱 - 45%</li>
                <li>
                  메인 페이지 로드맵, Our Team, Our Partners 부분 제작 and
                  페이지 유지보수
                </li>
              </ul>
              <span className="skill"> #html #css #js #jquery #thymeleaf</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExperienceContent;

const ProfileText = styled.span`
  color: #101010;
  font-size: 1.9rem;
  display: block;
  text-align: center;
  font-weight: 500;
`;
