import React from "react";
import styled from "styled-components";
import ContentItem from "./ContentItem";
function ExperienceContent() {
  return (
    <div className="center">
      <ProfileText>EXPERIENCE</ProfileText>
      <div className="profile-box experience-box">
        <ContentItem LinkName={"project01"} SkillText={["html","css","js","jquery","thymeleaf"]} Title={"Tari World"} Position={"Web Publisher"} ItemDate={"2022.08 ~ 2023.08"} MyWork={["페이지 제작 & 유지 보수","페이지 연결, 애니메이션"]} pageLink={"https://tari.world/page/index"} CodeBtn={false}></ContentItem>
        <ContentItem LinkName={"project02"} SkillText={["html","css","js","jquery","thymeleaf"]} Title={"SeoulMusicaWards"} Position={"FrontEnd & WebPublisher"} ItemDate={"2023.10 ~ 2023.11"} MyWork={["언어 변경 시스템 적용","투표 정보 관련 JSON 생성 후 적용","투표 결과 순위 적용"]} pageLink={"https://seoulmusicawards.com/page/index"} CodeBtn={false}></ContentItem>
        <ContentItem LinkName={"project03"}  SkillText={["html","css","js","jquery","thymeleaf"]} Title={"K-POP SEOUL"} Position={"FrontEnd & WebPublisher"} ItemDate={"2023.10 ~ 2023.12"} MyWork={["실시간 투표 결과 적용","로딩 애니메이션 추가"]} pageLink={"https://korea.seoulmusicawards.kr/page/index?lang=ko&platform=k&mode=pc"} CodeBtn={false}></ContentItem>
        <ContentItem LinkName={"project01"}  SkillText={["html","css","js","jquery","thymeleaf"]} Title={"Tari World"} Position={"FrontEnd & Web Publisher"} ItemDate={"2023.11 ~ 2023.12"} MyWork={["프로필 정보(프로필 사진 또는 닉네임)를 변경","제품 등록 또는 수정"]} pageLink={"https://v2.tarimarket.io/page/index"} CodeBtn={false}></ContentItem>
      </div>
    </div>
  );
}

export default ExperienceContent;

const ProfileText = styled.span`
  color: #101010;
  font-size: 30px;
  display: block;
  text-align: center;
  font-weight: 500;
`;
