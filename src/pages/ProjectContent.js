import React, { useState } from "react";
import styled from "styled-components";
import ContentItem from "./ContentItem";
function ProjectContent() {
  const projectList = [
    {
      id: "04",
      LinkName: "project14",
      SkillText: [
        "html",
        "css",
        "js",
        "react",
        "tailwindcss",
        "node",
        "React-Query",
        "Redux",
      ],
      Position: "FrontEnd",
      Title: "catchtable",
      ItemDate: "2024.02 ~ 작업중",
      MyWork: ["로그인", "예약", "채팅", "답글", "사장(식당관리)"],
      // pageLink: "https://josoyean.github.io/soyeon-portfolio",
      CodeBtn: true,
      pageBtn: false,
      codeLink: "https://github.com/sky-catch/Front/tree/develop",
      part: [
        "로그인 요청 해서 받은 인가 코드로 토큰을 받고 발급된 토큰으로 사용자 로그인 처리 완료를 진행해 사용자 정보를 읽어 예약 정보 받음",
        "aws ec2 인스턴스 생성 후 제작 웹 페이지 배포",
        "무료 도메인 생성 후 aws ip주소 연결",
        "예약페이지 캘린더 적용 - <react-calendar> 라이브러리 적용",
        "axios HTTP 요청과 응답 - axios를 <react-query>로 서버 통신 변경 진행중",
        "서랍 메뉴 적용 - <react-modern-drawer> 라이브러리 적용",
        "로그인시 데이터는 localstorage로 사용자 데이터와 토큰을 넣음, 사용자 로그인 유무를 확인할때도 사용을해서 페이지마다 다르게 제작",
      ],
      introduce: "식당 예약 어플 <캐치테이블> 클론",
    },
    {
      id: "03",
      LinkName: "project13",
      SkillText: ["html", "css", "js", "react", "styled-components", "node"],
      Position: "FrontEnd & Web Publisher",
      Title: "soyeon-portfolio",
      ItemDate: "2023.12 ~ 작업중",
      MyWork: ["페이지 전체 작업"],
      pageLink: "https://josoyean.github.io/soyeon-portfolio",
      CodeBtn: true,
      pageBtn: true,
      codeLink: "https://github.com/josoyean/soyeon-portfolio",
      part: [
        "emailjs 이용해서 폼 작성시 이메일 받고 작성자는 자동 회신 설정",
        "원 모형이 시간차 랜덤으로 위에서 아래로 내려오게 애니메이션 적용",
        "선택한 자료에 팝업을 적용해서 불필요한 공간 삭제",
        "PC버전에서 스킬 이미지에 마우스 올리면 카트 뒤집는 애니메이션 적용",
        "소개 문장 타이핑 애니메이션 적용 ",
      ],
      introduce: "조소연의 포트폴리오 웹페이지",
    },
    {
      id: "02",
      LinkName: "project12",
      SkillText: ["html", "css", "js", "react", "styled-components", "node"],
      Position: "FrontEnd & Web Publisher",
      Title: "TVING",
      ItemDate: "2023.08 ~ 작업중",
      MyWork: ["페이지 전체 작업"],
      pageLink: "https://josoyean.github.io/tving",
      CodeBtn: true,
      pageBtn: true,
      codeLink: "https://github.com/josoyean/tving",
      part: [
        "티빙 프로그램 JSON 데이터 제작후 분류해서 제작",
        "로그인 요청 해서 받은 인가 코드로 토큰을 받고 발급된 토큰으로 사용자 로그인 처리 완료 ",
        "react-router를 이용해서 여러 페이지 연결, Link로 페이지 이동 적용",
        "슬라이드 부분은 <swiper> 라이브러리 적용",
        "누적 시청수를 내림차수로 정렬을해서 한눈으로 인기 프로그램을 볼수있게 제작",
        "로그인시 데이터는 localstorage로 사용자 데이터 넣음",
      ],
      introduce: "OTT <TVING>를 클론",
    },
    {
      id: "01",
      LinkName: "project11",
      SkillText: ["html", "css", "js", "react", "styled-components", "node"],
      Position: "Web Publisher",
      Title: "날씨 알림이",
      ItemDate: "2023.06 ~ 2023.10",
      MyWork: ["페이지 전체 작업"],
      pageLink: "https://josoyean.github.io/weather-alert",
      CodeBtn: true,
      pageBtn: true,
      codeLink: "https://github.com/josoyean/weather-alert",
      part: [
        " 단기예보으로 오늘,내일,모레 날씨 한시간 단위로 최저,최고 기온 추출후 제작, 중기예보로 3일 이후 오전,오후 나눠서 제작",
        "로딩이 늦을때 대비해서 아이콘 적용",
        "현재 시간 기준으로 한시간 마다 날씨 제공",
        "Map 반복문을 이용해서 데이터 적용",
        "데이터는 usestate로 데이터 저장",
        "useEffect 마운트가 될때 api 데이터 호출",
        "현재 위치에 알맞는 날씨 데이터는 구현중입니다.",
      ],
      introduce: "기상청 api 허브 사이트에서 단기예보,중기예보 이용해서 제작",
    },
  ];

  const [isProfileSelect, setIsProfileSelect] = useState(false);

  const handleClick = (idx, e) => {
    e.preventDefault();
    const newArr = Array(projectList.length).fill(false);
    newArr[idx] = true;
    setIsProfileSelect(newArr);
  };

  const closeClick = (idx, e) => {
    e.stopPropagation();
    const newArr = Array(projectList.length).fill(false);
    setIsProfileSelect(newArr);
  };

  return (
    <div className="center" id="project-lable">
      <ProfileText>PROJECTS</ProfileText>
      <div className="profile-box projects-box">
        {projectList.map((item, index) => {
          return (
            <ContentItem
              selectItem={isProfileSelect[index]}
              handleClick={handleClick}
              closeClick={closeClick}
              key={item.id}
              introduce={item.introduce}
              elementIndex={index}
              item={item}
              LinkName={item.LinkName}
              SkillText={item.SkillText}
              Title={item.Title}
              Position={item.Position}
              MyWork={item.MyWork}
              pageBtn={item.pageBtn}
              ItemDate={item.ItemDate}
              pageLink={item.pageLink}
              CodeBtn={item.CodeBtn}
              codeLink={item.codeLink}
            ></ContentItem>
          );
        })}
      </div>
    </div>
  );
}

export default ProjectContent;
const ProfileText = styled.span`
  color: #101010;
  font-size: 30px;
  display: block;
  text-align: center;
  font-weight: 500;
`;
