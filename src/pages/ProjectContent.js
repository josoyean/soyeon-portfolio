import React from 'react';
import styled from "styled-components";
import ContentItem from "./ContentItem";
function ProjectContent() {
  return (
    <div className="center">
          <ProfileText>PROJECTS</ProfileText>
          <div className="profile-box projects-box">
          <ContentItem LinkName={"project11"} SkillText={["html","css","js","react","styled-components","node"]} Title={"날씨 알림이"} Position={"FrontEnd & WebPublisher"} ItemDate={"2023.06 ~ 2023.10"} MyWork={["html 마크업","css 스타일링"]} pageLink={"https://josoyean.github.io/weather-alert/"} CodeBtn={true} codeLink={"https://github.com/josoyean/weather-alert"}></ContentItem>
          <ContentItem LinkName={"project12"} SkillText={["html","css","js","react","styled-components","node"]} Title={"TVING"} Position={"FrontEnd & WebPublisher"} ItemDate={"2023.08 ~ 2023.12"} MyWork={["html 마크업","css 스타일링"]} pageLink={"https://josoyean.github.io/tving"} CodeBtn={true} codeLink={"https://github.com/josoyean/tving"}></ContentItem>
          <ContentItem LinkName={"project13"} SkillText={["html","css","js","react","styled-components","node"]} Title={"soyeon-portfolio"} Position={"FrontEnd & WebPublisher"} ItemDate={"2023.12 ~ 2024.01"} MyWork={["html 마크업","css 스타일링"]} pageLink={"https://tari.world/page/index"} CodeBtn={true} codeLink={"https://github.com/josoyean/soyeon-portfolio"}></ContentItem>
    </div>
    </div>
  )
}

export default ProjectContent
const ProfileText = styled.span`
  color: #101010;
  font-size: 30px;
  display: block;
  text-align: center;
  font-weight: 500;
`;