import React, { useState } from "react";
import styled from "styled-components";
import ContentItem from "./ContentItem";
function ProjectContent() {
  const projectList = [
    {
      id: "04",
      LinkName: "project14",
      SkillText: ["html", "css", "js", "react", "tailwindcss", "node"],
      Position: "FrontEnd",
      Title: "catchtable",
      ItemDate: "2024.02 ~ 작업중",
      MyWork: ["로그인 페이지", "예약 페이지"],
      pageLink: "https://josoyean.github.io/soyeon-portfolio",
      CodeBtn: true,
      pageBtn: false,
      codeLink: "https://github.com/sky-catch/Front/tree/develop",
      part: ["카카오 로그인 연동", "<tailwindcss> 이용해서 css 적용"],
      introduce: "프로젝트 소개",
    },
    {
      id: "03",
      LinkName: "project13",
      SkillText: ["html", "css", "js", "react", "styled-components", "node"],
      Position: "FrontEnd & Web Publisher",
      Title: "soyeon-portfolio",
      ItemDate: "2023.12 ~ 2024.01",
      MyWork: ["html 마크업", "css 스타일링"],
      pageLink: "https://josoyean.github.io/soyeon-portfolio",
      CodeBtn: true,
      pageBtn: true,
      codeLink: "https://github.com/josoyean/soyeon-portfolio",
      part: [
        "반응형,원페이지",
        "emailjs 이용해서 폼 작성시 메일 오게끔 제작",
        "Git 이용해서 페이지 배포",
        "<projects> 컴포넌트 클릭시 팝업 열림, <X>버튼 클릭시 팝업 닫기",
      ],
      introduce: "",
    },
    {
      id: "02",
      LinkName: "project12",
      SkillText: ["html", "css", "js", "react", "styled-components", "node"],
      Position: "FrontEnd & Web Publisher",
      Title: "TVING",
      ItemDate: "2023.08 ~ 작업중",
      MyWork: ["html 마크업", "css 스타일링"],
      pageLink: "https://josoyean.github.io/tving",
      CodeBtn: true,
      pageBtn: true,
      codeLink: "https://github.com/josoyean/tving",
      part: [
        "프로그램 JSON 데이터 제작후 분류해서 제작",
        "회원가입은 <strapi(rest api)> 이용해서 제작",
        "Index 페이지 스와이퍼 라이브러리 이용",
      ],
      introduce: "",
    },
    {
      id: "01",
      LinkName: "project11",
      SkillText: ["html", "css", "js", "react", "styled-components", "node"],
      Position: "Web Publisher",
      Title: "날씨 알림이",
      ItemDate: "2023.06 ~ 2023.10",
      MyWork: ["html 마크업", "css 스타일링"],
      pageLink: "https://josoyean.github.io/weather-alert",
      CodeBtn: true,
      pageBtn: true,
      codeLink: "https://github.com/josoyean/weather-alert",
      part: [
        "기상청 api 2개 이용해서 제작",
        "오늘, 내일, 모레 기준으로 제작",
        "오늘 데이터는 시간 단위 제작",
        "하루 최저/최고 기온 제작",
        "날씨 아이콘 이용해서 한눈에 볼 수 있게 제작",
        "현재 위치 기준으로 데이터 받아오는거는 제작중",
      ],
      introduce: "",
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
