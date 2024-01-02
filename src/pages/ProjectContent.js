import React, { useState } from 'react';
import styled from "styled-components";
import ContentItem from "./ContentItem";
function ProjectContent() {
  const projectList=[
    { id:"01",
      LinkName :"project11",
    SkillText:["html","css","js","react","styled-components","node"],
    Position:"Web Publisher",
    Title:"날씨 알림이",
    ItemDate:"2023.06 ~ 2023.10",
    MyWork:["html 마크업","css 스타일링"],
    pageLink:"https://josoyean.github.io/weather-alert",
    CodeBtn:true,
    codeLink:"https://github.com/josoyean/weather-alert"
  }, {
    id:"02",
    LinkName :"project12",
  SkillText:["html","css","js","react","styled-components","node"],
  Position:"FrontEnd & Web Publisher",
  Title:"TVING",
  ItemDate:"2023.08 ~ 2023.12",
  MyWork:["html 마크업","css 스타일링"],
  pageLink:"https://josoyean.github.io/tving",
  CodeBtn:true,
  codeLink:"https://github.com/josoyean/tving"
}, {
  id:"03",
  LinkName :"project13",
SkillText:["html","css","js","react","styled-components","node"],
Position:"FrontEnd & Web Publisher",
Title:"soyeon-portfolio",
ItemDate:"2023.12 ~ 2024.01",
MyWork:["html 마크업","css 스타일링"],
pageLink:"https://josoyean.github.io/soyeon-portfolio",
CodeBtn:true,
codeLink:"https://github.com/josoyean/soyeon-portfolio"
}
  ];
  const [isProfileSelect, setIsProfileSelect] = useState(false);
  const handleClick = (idx) => {
    const newArr = Array(projectList.length).fill(false);
    if(isProfileSelect[idx] === false){
      newArr[idx] = true;
    }
    setIsProfileSelect(newArr);
  };
  return (
    <div className="center" id='project-lable'>
          <ProfileText>PROJECTS</ProfileText>
          <div className="profile-box projects-box">
            {
              projectList.map((item,index)=>{
                  return <ContentItem selectItem={isProfileSelect[index]} handleClick={handleClick} key={item.id.toString()} elementIndex={index}  LinkName={item.LinkName} SkillText={item.SkillText} Title={item.Title} Position={item.Position} MyWork={item.MyWork} ItemDate={item.ItemDate} pageLink={item.pageLink} CodeBtn={item.CodeBtn} codeLink={item.codeLink}> </ContentItem>
                 })
            }

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